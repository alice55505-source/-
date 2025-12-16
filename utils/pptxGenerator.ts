import PptxGenJS from "pptxgenjs";
import { CardQuestion, CardConfig } from "../types";

// A4 Definitions (Inches for PPTX)
// A4 is 8.27 x 11.69 inches
// We use Landscape logic generally in code, but here we want Portrait A4 slides.
const A4_WIDTH_IN = 8.27;
const A4_HEIGHT_IN = 11.69;

// Card Definitions
// 55mm = 2.165 inches
// 85mm = 3.346 inches
const CARD_WIDTH_IN = 2.165;
const CARD_HEIGHT_IN = 3.346;

// Layout Grid (3x3)
const COLS = 3;
const ROWS = 3; 
const CARDS_PER_PAGE = COLS * ROWS;

// Margins
// Total Card Width = 3 * 2.165 = 6.495 in
// Margin X = (8.27 - 6.495) / 2 = 0.8875 in
// Total Card Height = 3 * 3.346 = 10.038 in
// Margin Y = (11.69 - 10.038) / 2 = 0.826 in
const MARGIN_X_IN = (A4_WIDTH_IN - (CARD_WIDTH_IN * COLS)) / 2;
const MARGIN_Y_IN = (A4_HEIGHT_IN - (CARD_HEIGHT_IN * ROWS)) / 2;

export const generatePPTX = (cards: CardQuestion[], config: CardConfig) => {
  const pptx = new PptxGenJS();
  
  // Set Layout to A4 Portrait
  pptx.defineLayout({ name: 'A4_PORTRAIT', width: A4_WIDTH_IN, height: A4_HEIGHT_IN });
  pptx.layout = 'A4_PORTRAIT';

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);

  for (let pageIdx = 0; pageIdx < totalPages; pageIdx++) {
    const pageCards = cards.slice(pageIdx * CARDS_PER_PAGE, (pageIdx + 1) * CARDS_PER_PAGE);

    // --- FRONT SIDE (Questions) ---
    const slideFront = pptx.addSlide();
    
    pageCards.forEach((card, index) => {
      const col = index % COLS;
      const row = Math.floor(index / COLS);
      
      const x = MARGIN_X_IN + (col * CARD_WIDTH_IN);
      const y = MARGIN_Y_IN + (row * CARD_HEIGHT_IN);

      // 1. Card Container (Border)
      slideFront.addShape('rect', {
        x: x, y: y, w: CARD_WIDTH_IN, h: CARD_HEIGHT_IN,
        line: { color: "D1D5DB", width: 0.5 }, // slate-300
        fill: { color: "FFFFFF" }
      });

      // 2. Category Pill
      const catWidth = 1.6; // Increased from 0.9 to fit longer text
      const catHeight = 0.25;
      const catX = x + (CARD_WIDTH_IN - catWidth) / 2;
      const catY = y + 0.3;

      slideFront.addShape('roundRect', {
        x: catX, y: catY, w: catWidth, h: catHeight,
        rectRadius: 0.1,
        fill: { color: "F3F4F6" }, // slate-100
        line: { color: "FFFFFF", width: 0 }
      });

      slideFront.addText(card.category, {
        x: catX, y: catY, w: catWidth, h: catHeight,
        fontSize: 8, // Slightly smaller font for safety
        color: "64748B",
        align: "center",
        valign: "middle"
      });

      // 3. Level Dots
      const dotSize = 0.06;
      const dotSpacing = 0.12;
      const dotsTotalW = (3 * dotSize) + (2 * (dotSpacing - dotSize));
      const dotsStartX = x + (CARD_WIDTH_IN - dotsTotalW) / 2;
      const dotsY = catY + catHeight + 0.15;

      for (let i = 1; i <= 3; i++) {
        let dotColor = "E5E7EB"; // inactive gray
        if (i <= card.level) {
          if (card.level === 1) dotColor = "38BDF8"; // sky
          else if (card.level === 2) dotColor = "EAB308"; // yellow
          else if (card.level === 3) dotColor = "EF4444"; // red
        }

        slideFront.addShape('ellipse', {
          x: dotsStartX + ((i - 1) * dotSpacing),
          y: dotsY,
          w: dotSize, h: dotSize,
          fill: { color: dotColor },
          line: { width: 0 }
        });
      }

      // 4. Question Text
      // Vertically centered roughly in remaining space
      const textY = dotsY + 0.1; // Reduce gap from dots
      const textH = CARD_HEIGHT_IN - (textY - y) - 0.25; // maximize height

      slideFront.addText(card.text, {
        x: x + 0.1, // reduced padding
        y: textY,
        w: CARD_WIDTH_IN - 0.2, // wider text area
        h: textH,
        fontSize: 16, // Increased from 12 to 16
        color: "1E293B", // slate-800
        align: "center",
        valign: "middle", // Center vertically
        wrap: true,
        lineSpacing: 32, // Significantly increased line spacing (points)
      });
      
      // Footer text
      slideFront.addText("相調", {
        x: x, y: y + CARD_HEIGHT_IN - 0.25,
        w: CARD_WIDTH_IN, h: 0.2,
        fontSize: 6,
        color: "CBD5E1",
        align: "center",
        charSpacing: 2
      });
    });

    // --- BACK SIDE (Covers) ---
    const slideBack = pptx.addSlide();

    pageCards.forEach((card, index) => {
      const frontCol = index % COLS;
      const row = Math.floor(index / COLS);
      
      // Mirror column for double-sided printing
      const backCol = (COLS - 1) - frontCol; 
      
      const x = MARGIN_X_IN + (backCol * CARD_WIDTH_IN);
      const y = MARGIN_Y_IN + (row * CARD_HEIGHT_IN);

      if (config.customBackImage) {
        // Use uploaded image
        slideBack.addImage({
            data: config.customBackImage,
            x: x,
            y: y,
            w: CARD_WIDTH_IN,
            h: CARD_HEIGHT_IN,
            sizing: { type: "contain", w: CARD_WIDTH_IN, h: CARD_HEIGHT_IN } 
            // Note: Since we pre-crop the image to 55:85 in ConfigPanel, 'contain' should fill perfectly.
        });
      } else {
        // Fallback Default Design (Dark Blue Stripe)
        
        // Card Background
        slideBack.addShape('rect', {
          x: x, y: y, w: CARD_WIDTH_IN, h: CARD_HEIGHT_IN,
          fill: { color: "2c3e50" }, // Dark Blue
          line: { color: "E2E8F0", width: 0.5 }
        });

        // "相調" Box
        slideBack.addShape('rect', {
            x: x + 0.5, y: y + 0.5, w: CARD_WIDTH_IN - 1, h: CARD_HEIGHT_IN - 1,
            fill: { color: "2c3e50" },
            line: { color: "FFFFFF", width: 2 }
        });

        slideBack.addText("相調\n小卡", {
          x: x, y: y, w: CARD_WIDTH_IN, h: CARD_HEIGHT_IN,
          align: "center",
          valign: "middle",
          fontSize: 24,
          bold: true,
          color: "FFFFFF",
          charSpacing: 5,
          fontFace: "Microsoft JhengHei" 
        });
      }
    });
  }

  pptx.writeFile({ fileName: 'blending-cards.pptx' });
};