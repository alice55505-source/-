import jsPDF from "jspdf";
import { CardQuestion, CardConfig } from "../types";

// A4 Definitions (mm)
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;

// Card Definitions (Portrait Mode)
// 55mm Width x 85mm Height
const CARD_WIDTH = 55;
const CARD_HEIGHT = 85;

// Grid Layout for A4 Portrait
// Width: 210 / 55 ~= 3.8 -> 3 Cols
// Height: 297 / 85 ~= 3.4 -> 3 Rows
const COLS = 3;
const ROWS = 3; 
const CARDS_PER_PAGE = COLS * ROWS; // 9 cards per page

const MARGIN_X = (PAGE_WIDTH - (CARD_WIDTH * COLS)) / 2;
const MARGIN_Y = (PAGE_HEIGHT - (CARD_HEIGHT * ROWS)) / 2;

export const generatePDF = (cards: CardQuestion[], config: CardConfig) => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

  for (let pageIdx = 0; pageIdx < totalPages; pageIdx++) {
    // --- FRONT SIDE (Questions) ---
    if (pageIdx > 0) doc.addPage();
    
    const pageCards = cards.slice(pageIdx * CARDS_PER_PAGE, (pageIdx + 1) * CARDS_PER_PAGE);

    // Draw Crop Marks (Outer)
    doc.setLineWidth(0.1);
    doc.setDrawColor(200);

    pageCards.forEach((card, index) => {
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      
      const x = MARGIN_X + (col * CARD_WIDTH);
      const y = MARGIN_Y + (row * CARD_HEIGHT);

      // Card Outline (Light gray for cutting guide)
      doc.setDrawColor(220); // Very light grey
      doc.rect(x, y, CARD_WIDTH, CARD_HEIGHT);

      // --- Vertical Layout Design ---

      // Category Pill (Top Center)
      doc.setFillColor(240, 240, 240);
      const categoryWidth = 24;
      const categoryX = x + (CARD_WIDTH - categoryWidth) / 2;
      doc.roundedRect(categoryX, y + 8, categoryWidth, 6, 2, 2, "F");
      
      doc.setFontSize(8);
      doc.setTextColor(100);
      doc.text(card.category, x + (CARD_WIDTH / 2), y + 12, { align: "center" });

      // Level Indicator (Dots) - Below category
      const dotY = y + 18;
      const dotSpacing = 3.5;
      const totalDotWidth = (3 * 1.2 * 2) + (2 * (dotSpacing - 2.4)); // approx
      const dotStartX = x + (CARD_WIDTH / 2) - 3.5; 

      for(let i=1; i<=3; i++) {
        const isActive = i <= card.level;
        if(card.level === 1) doc.setFillColor(56, 189, 248); // Sky blue
        if(card.level === 2) doc.setFillColor(234, 179, 8); // Yellow/Gold
        if(card.level === 3) doc.setFillColor(239, 68, 68); // Red
        if(!isActive) doc.setFillColor(229, 231, 235);
        
        doc.circle(dotStartX + ((i-1)*dotSpacing), dotY, 1.2, "F");
      }

      // Main Text
      doc.setTextColor(30);
      doc.setFontSize(13); // Slightly smaller for narrow vertical card
      // Wrap text
      const textWidth = CARD_WIDTH - 12;
      const splitText = doc.splitTextToSize(card.text, textWidth);
      
      // Calculate vertical center roughly
      // We start text below the header area
      const headerHeight = 25;
      const availableHeight = CARD_HEIGHT - headerHeight - 10; // padding bottom
      const textBlockHeight = splitText.length * 6;
      
      // Center vertically in available space or fixed top
      const textY = y + headerHeight + (availableHeight / 2) - (textBlockHeight / 2) + 3;
      
      doc.text(splitText, x + (CARD_WIDTH / 2), textY, { align: "center" });
    });

    // --- BACK SIDE (Covers) ---
    doc.addPage();
    
    // IMPORTANT: Mirror the columns for double-sided printing.
    // Formula for Back Col: (COLS - 1) - FrontCol
    
    pageCards.forEach((card, index) => {
      const frontCol = index % COLS;
      const row = Math.floor(index / COLS);
      
      const backCol = (COLS - 1) - frontCol; // Mirror column
      
      const x = MARGIN_X + (backCol * CARD_WIDTH);
      const y = MARGIN_Y + (row * CARD_HEIGHT);

      if (config.customBackImage) {
        doc.addImage(config.customBackImage, "JPEG", x, y, CARD_WIDTH, CARD_HEIGHT);
      } else {
        // Default Fallback
        doc.setFillColor(44, 62, 80); // Dark Blue
        doc.rect(x, y, CARD_WIDTH, CARD_HEIGHT, "F");
        
        // White Border Box
        doc.setDrawColor(255);
        doc.setLineWidth(1);
        doc.rect(x+4, y+4, CARD_WIDTH-8, CARD_HEIGHT-8);
        
        doc.setFontSize(16);
        doc.setTextColor(255);
        doc.text("相調\n小卡", x + (CARD_WIDTH / 2), y + (CARD_HEIGHT / 2), { align: "center" });
      }
    });
  }

  doc.save("blending-cards-portrait.pdf");
};