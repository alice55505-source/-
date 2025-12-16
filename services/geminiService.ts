import { Audience, CardConfig, CardQuestion, Level } from "../types";
import { QUESTION_BANK, QuestionDef, CATEGORY_NAMES } from "../data/questions";

// Helper to shuffle array
const shuffle = <T>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// Check if API Key is available - Always false now as we are offline
export const isApiAvailable = (): boolean => {
  return false; 
};

// Calculate distribution targets based on user ratios
const calculateTargets = (count: number, categoryRatios: Record<string, number>): Record<string, number> => {
  const targets: Record<string, number> = {};
  const remainders: { cat: string; val: number }[] = [];
  let currentTotal = 0;

  // Step 1: Assign integer parts
  CATEGORY_NAMES.forEach(cat => {
    const ratio = categoryRatios[cat] || 0;
    const exact = count * (ratio / 100);
    const floor = Math.floor(exact);
    targets[cat] = floor;
    currentTotal += floor;
    remainders.push({ cat, val: exact - floor });
  });

  // Step 2: Distribute deficit
  let deficit = count - currentTotal;
  remainders.sort((a, b) => b.val - a.val);

  let rIdx = 0;
  while (deficit > 0 && rIdx < remainders.length) {
    const cat = remainders[rIdx].cat;
    if ((categoryRatios[cat] || 0) > 0) {
       targets[cat]++;
       deficit--;
    }
    rIdx++;
  }
  return targets;
};

// Core filter logic extracted
const isValidQuestion = (q: QuestionDef, audience: Audience): boolean => {
    // EXCLUSIONS:
    // Gospel Friends -> No "church-term"
    if (audience === Audience.GOSPEL_FRIENDS && q.tags.includes("church-term")) return false;
    
    // Elderly -> No "youth-only" (if you had such a tag), generally avoid school/pop-culture unless reminiscing
    // NOTE: q.tags.includes("school") checks if it's strictly a school topic.
    // However, some reminiscence questions might use school tag but be okay. 
    // Let's rely on suitableFor primarily for strict inclusions.
    if (audience === Audience.ELDERLY && q.tags.includes("pop-culture")) return false;

    // INCLUSIONS (Strict vs Loose):
    // If a question has specific `suitableFor` defined:
    if (q.suitableFor && q.suitableFor.length > 0) {
        // It MUST include the current audience to be valid
        // Exception: MIXED audience can take almost anything, but we might want to be careful with very specific ones
        if (audience === Audience.MIXED) return true; 
        
        return q.suitableFor.includes(audience);
    }

    return true;
};

// Main Generation Logic
export const generateQuestions = async (
  audience: Audience,
  count: number,
  categoryRatios: Record<string, number>
): Promise<CardQuestion[]> => {
  
  // Simulate a small delay for UX so it feels like "working"
  await new Promise(resolve => setTimeout(resolve, 600));

  const targets = calculateTargets(count, categoryRatios);
  
  const availableQuestions = QUESTION_BANK.filter(q => isValidQuestion(q, audience));

  const selectedCards: CardQuestion[] = [];
  const globalUsedTexts = new Set<string>();

  const addCard = (q: QuestionDef, isDuplicate = false) => {
    selectedCards.push({
      id: `card-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text: q.text,
      category: q.category,
      level: q.level
    });
    if (!isDuplicate) {
        globalUsedTexts.add(q.text);
    }
  };

  for (const cat of CATEGORY_NAMES) {
      const target = targets[cat];
      if (target <= 0) continue;

      // Filter by Category
      let categoryPool = availableQuestions.filter(q => q.category === cat);
      
      // Secondary Sort: Prioritize Audience-Specific questions over General ones if available
      categoryPool.sort((a, b) => {
        const aSpecific = a.suitableFor?.includes(audience) ? 1 : 0;
        const bSpecific = b.suitableFor?.includes(audience) ? 1 : 0;
        return bSpecific - aSpecific; // Descending, specific first
      });

      if (audience !== Audience.MIXED) {
         const specific = shuffle(categoryPool.filter(q => q.suitableFor?.includes(audience)));
         const general = shuffle(categoryPool.filter(q => !q.suitableFor || q.suitableFor.length === 0));
         categoryPool = [...specific, ...general];
      } else {
         categoryPool = shuffle(categoryPool);
      }

      if (categoryPool.length === 0) continue;

      let countForThisCat = 0;
      
      // Phase A: Unique Selection
      for (const q of categoryPool) {
          if (countForThisCat >= target) break;
          if (!globalUsedTexts.has(q.text)) {
              addCard(q);
              countForThisCat++;
          }
      }
      
      // Phase B: Fill with duplicates if we ran out of unique questions
      if (countForThisCat < target) {
          // Re-shuffle full pool to pick duplicates randomly
          const infinitePool = shuffle([...categoryPool]); 
          let poolIndex = 0;
          while (countForThisCat < target && infinitePool.length > 0) {
              addCard(infinitePool[poolIndex % infinitePool.length], true);
              countForThisCat++;
              poolIndex++;
          }
      }
  }

  // Final sanity check fill
  if (selectedCards.length < count) {
     const remaining = count - selectedCards.length;
     const backupPool = shuffle(availableQuestions);
     for(let i=0; i<remaining; i++) {
         if (backupPool[i]) addCard(backupPool[i], true);
     }
  }

  return shuffle(selectedCards);
};

// --- NEW FUNCTION: Swap a single card ---
export const getReplacementCard = (
  currentCard: CardQuestion,
  currentCards: CardQuestion[],
  config: CardConfig
): CardQuestion | null => {
  const currentUsedTexts = new Set(currentCards.map(c => c.text));

  // 1. Try to find same Category AND same Audience relevance
  let candidates = QUESTION_BANK.filter(q => 
    q.text !== currentCard.text &&
    !currentUsedTexts.has(q.text) &&
    q.category === currentCard.category &&
    isValidQuestion(q, config.audience)
  );

  // 2. If no unique candidates in same category, try ANY category valid for audience?
  //    Actually, user probably wants to maintain the "Type" of card (Ratio).
  //    So let's stick to category. 
  
  //    If candidate pool empty, maybe allow duplicates?
  //    Let's strictly try to find unique first.
  
  if (candidates.length === 0) {
      // Fallback: Use all valid questions for audience, ignore category preference if desperate?
      // No, better to duplicate a question from the same category than switch category, to keep ratio.
      candidates = QUESTION_BANK.filter(q => 
        q.text !== currentCard.text &&
        q.category === currentCard.category &&
        isValidQuestion(q, config.audience)
      );
  }
  
  if (candidates.length === 0) return null; // Truly nothing available

  const chosen = candidates[Math.floor(Math.random() * candidates.length)];
  
  return {
    id: currentCard.id, // Keep ID to maintain flip state? Or new ID? 
                        // If we keep ID, React might not animate enter/exit if we used it for keys.
                        // But here we probably just want to swap content.
                        // Let's keep ID to be stable, or change text.
    text: chosen.text,
    category: chosen.category,
    level: chosen.level
  };
};