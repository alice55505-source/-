import React, { useState } from 'react';
import { Audience, CardConfig, CardQuestion } from './types';
import ConfigPanel from './components/ConfigPanel';
import CardPreview from './components/CardPreview';
import { generateQuestions, getReplacementCard } from './services/geminiService';
import { Sparkles, CloudSun } from 'lucide-react';
import { CATEGORY_NAMES } from './data/questions';

// Decorative Components
const Cloud = ({ className, delay = "0s" }: { className?: string, delay?: string }) => (
  <div className={`absolute pointer-events-none opacity-80 ${className}`} style={{ animationDelay: delay }}>
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-white drop-shadow-md w-full h-full">
      <path d="M17.5,19c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C19,18.33,18.33,19,17.5,19z M19.5,12 c-1.66,0-3,1.34-3,3c0,0.22,0.02,0.44,0.06,0.65c-0.29-0.09-0.59-0.15-0.91-0.15c-1.66,0-3,1.34-3,3c0,0.26,0.04,0.52,0.1,0.76 C12.29,19.69,11.91,20,11.5,20c-1.38,0-2.5-1.12-2.5-2.5c0-0.17,0.02-0.34,0.06-0.5C7.2,16.8,6,15.06,6,13c0-2.76,2.24-5,5-5 c1.58,0,2.98,0.73,3.93,1.87C15.48,9.33,16.19,9,17,9c2.21,0,4,1.79,4,4C21,11.9,20.4,11.08,19.5,12z" />
    </svg>
  </div>
);

const Grass = () => (
  <div className="fixed bottom-0 left-0 w-full z-0 h-24 md:h-32 overflow-hidden pointer-events-none">
     {/* Back layer grass (darker) */}
    <div className="absolute bottom-[-10px] left-0 w-[120%] h-full text-green-300 transform -translate-x-10">
       <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
         <path d="M0,0 C200,40 400,10 600,30 C800,50 1000,10 1200,40 L1200,120 L0,120 Z" />
       </svg>
    </div>
    {/* Front layer grass (lighter) */}
    <div className="absolute bottom-0 left-0 w-[110%] h-[80%] text-green-400">
       <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full fill-current">
          <path d="M0,20 C150,50 350,0 550,30 C750,60 950,10 1200,40 L1200,120 L0,120 Z" />
       </svg>
    </div>
  </div>
);

const Sun = () => (
  <div className="fixed top-10 right-10 w-24 h-24 text-yellow-300 opacity-90 animate-spin-slow pointer-events-none z-0">
    <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
       {/* Simple hand-drawn sun circle */}
       <circle cx="50" cy="50" r="30" />
       {/* Rays */}
       {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
         <rect key={deg} x="45" y="0" width="10" height="15" rx="5" transform={`rotate(${deg} 50 50)`} />
       ))}
    </svg>
  </div>
);


const App: React.FC = () => {
  const [step, setStep] = useState<'config' | 'preview'>('config');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Default Ratios
  const defaultRatios: Record<string, number> = {};
  CATEGORY_NAMES.forEach((cat, index) => {
      // Rough initial distribution for demo
      if (index === 0) defaultRatios[cat] = 30; // 認識彼此
      else if (index === 1) defaultRatios[cat] = 20;
      else if (index === 2) defaultRatios[cat] = 20;
      else if (index === 3) defaultRatios[cat] = 10;
      else if (index === 4) defaultRatios[cat] = 10;
      else if (index === 5) defaultRatios[cat] = 10;
      else defaultRatios[cat] = 0;
  });
  
  const [config, setConfig] = useState<CardConfig>({
    audience: Audience.MIXED,
    count: 27,
    customBackImage: null, // Default to null (will show generic back)
    categoryRatios: defaultRatios
  });

  const [cards, setCards] = useState<CardQuestion[]>([]);

  const handleGenerate = async () => {
    setLoading(true);
    setError(null);
    try {
      const generatedCards = await generateQuestions(config.audience, config.count, config.categoryRatios);
      setCards(generatedCards);
      setStep('preview');
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSwapCard = (cardId: string) => {
    const cardIndex = cards.findIndex(c => c.id === cardId);
    if (cardIndex === -1) return;
    
    const oldCard = cards[cardIndex];
    const newCard = getReplacementCard(oldCard, cards, config);

    if (newCard) {
      const newCards = [...cards];
      newCards[cardIndex] = newCard;
      setCards(newCards);
    } else {
      // Optional: Could show a toast here "沒有更多此類型的題目了！"
      console.log("No replacement found");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-100 to-green-50 text-slate-700 font-sans selection:bg-yellow-200 overflow-x-hidden relative">
      
      {/* Nature Background Elements */}
      <Sun />
      <Cloud className="w-32 h-32 top-20 left-10 animate-float" delay="0s" />
      <Cloud className="w-24 h-24 top-40 right-1/4 animate-float" delay="2s" />
      <Cloud className="w-40 h-40 top-10 left-2/3 animate-float" delay="4s" />
      <Grass />

      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-md border-b border-white/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-default">
            <div className="bg-gradient-to-tr from-sky-400 to-green-300 p-2 rounded-2xl text-white shadow-lg shadow-sky-200 transform group-hover:rotate-12 transition-transform duration-300">
              <CloudSun size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-hand font-bold text-sky-600 tracking-wide leading-none">
                相調小卡製作
              </h1>
            </div>
          </div>
          {/* Status Display - Removed AI Indicator */}
          <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm font-medium text-slate-500">
             <span className="flex items-center gap-1 bg-white/50 px-2 md:px-3 py-1 rounded-full text-slate-500 border border-slate-200">
                <Sparkles size={14} className="text-yellow-500" /> 
                <span>離線題庫版</span>
             </span>
          </div>
        </div>
      </header>

      <main className="relative z-10 p-4 md:p-8">
        {error && (
          <div className="max-w-2xl mx-auto mb-6 bg-red-50 text-red-600 p-4 rounded-2xl border border-red-100 flex items-center justify-between shadow-sm">
            <span>{error}</span>
            <button onClick={() => setError(null)} className="text-sm font-bold px-3 py-1 bg-white rounded-full shadow-sm hover:bg-red-50">Dismiss</button>
          </div>
        )}

        {step === 'config' && (
          <div className="animate-fade-in-up pb-20">
            <div className="text-center mb-10 mt-6 relative">
              <h2 className="text-4xl md:text-5xl font-hand font-bold text-slate-700 mb-4 tracking-tight drop-shadow-sm">
                設計屬於你們的 <span className="text-sky-500 inline-block transform -rotate-2">相調時刻</span>
              </h2>
              <p className="text-slate-600 max-w-lg mx-auto text-lg leading-relaxed font-medium">
                <span className="text-sm text-slate-500 opacity-80">快速生成適合不同場景的破冰與深入話題</span>
              </p>
            </div>
            <ConfigPanel 
              config={config} 
              setConfig={setConfig} 
              onGenerate={handleGenerate}
              isGenerating={loading}
            />
          </div>
        )}

        {step === 'preview' && (
          <div className="pb-20">
            <CardPreview 
              cards={cards} 
              config={config} 
              onBack={() => setStep('config')}
              onRegenerate={handleGenerate}
              onSwap={handleSwapCard}
            />
          </div>
        )}
      </main>
      
      {/* Animations */}
      <style>{`
        .perspective { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-fade-in-up { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1); }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-10px) translateX(10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;