import React, { useState } from 'react';
import { CardQuestion, CardConfig } from '../types';
import { RefreshCw, Download, ArrowLeft, Printer, RefreshCcw } from 'lucide-react';
import { generatePPTX } from '../utils/pptxGenerator';

interface Props {
  cards: CardQuestion[];
  config: CardConfig;
  onBack: () => void;
  onRegenerate: () => void;
  onSwap: (id: string) => void;
}

const CardPreview: React.FC<Props> = ({ cards, config, onBack, onRegenerate, onSwap }) => {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlipped(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDownload = () => {
    generatePPTX(cards, config);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between mb-8 bg-white/70 backdrop-blur-md p-4 rounded-3xl border border-white shadow-lg shadow-sky-100/30 sticky top-24 z-10">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-3 bg-white hover:bg-sky-50 text-slate-400 hover:text-sky-500 rounded-full transition-all shadow-sm border border-slate-100">
            <ArrowLeft size={20} />
          </button>
          <div>
            <h2 className="text-xl font-hand font-bold text-slate-700">卡牌預覽 <span className="text-sky-500 text-sm font-sans font-bold bg-sky-50 px-2 py-0.5 rounded-full ml-2">{cards.length} 張</span></h2>
            <p className="text-xs text-slate-400 mt-0.5">{config.audience}</p>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4 sm:mt-0 w-full sm:w-auto">
          <button 
            onClick={onRegenerate}
            className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-full hover:bg-sky-50 hover:border-sky-200 hover:text-sky-600 transition-colors shadow-sm"
          >
            <RefreshCw size={16} /> 全部重來
          </button>
          <button 
            onClick={handleDownload}
            className="flex-1 sm:flex-none justify-center flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-sky-400 to-green-400 rounded-full hover:from-sky-500 hover:to-green-500 shadow-lg shadow-sky-200/50 transition-all transform active:scale-95"
          >
            <Download size={16} /> 下載 PPTX
          </button>
        </div>
      </div>

      <div className="mb-6 flex items-start gap-3 text-sm text-amber-700 bg-yellow-50/90 p-4 rounded-2xl border border-yellow-100 mx-1 shadow-sm">
         <div className="bg-yellow-100 p-1.5 rounded-full text-amber-600 mt-0.5">
            <Printer size={14} />
         </div>
         <span className="leading-relaxed opacity-90"><strong>列印小撇步：</strong>PPTX 檔案預設為 A4 直式排列 (3x3)。雙面列印時，請務必選擇「長邊翻轉」(Flip on long edge)，正反面才會對齊喔！</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 px-2">
        {cards.map((card) => {
          const isFlipped = flipped[card.id];
          return (
            <div 
              key={card.id}
              className="group perspective w-full aspect-[55/85] cursor-pointer"
            >
              <div 
                 className={`relative w-full h-full duration-700 preserve-3d transition-transform ${isFlipped ? 'rotate-y-180' : ''}`}
                 onClick={() => toggleFlip(card.id)}
              >
                
                {/* Front Side */}
                <div 
                  className={`absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-[0_4px_15px_-3px_rgba(0,0,0,0.05)] border-2 border-slate-50 p-5 flex flex-col items-center hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100/50 transition-all ${isFlipped ? 'z-0' : 'z-10'}`}
                  style={{ transform: 'rotateY(0deg)' }}
                >
                  
                  {/* Swap Button - Stops propagation to prevent flip */}
                  <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onSwap(card.id);
                    }}
                    title="更換此題"
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-50 text-slate-400 hover:bg-sky-100 hover:text-sky-500 transition-all z-20 hover:scale-110 shadow-sm border border-slate-100 opacity-0 group-hover:opacity-100"
                  >
                    <RefreshCcw size={14} />
                  </button>

                  {/* Header Section */}
                  <div className="w-full flex flex-col items-center gap-3 mb-2">
                    <span className="bg-sky-50 text-sky-600 text-[10px] px-3 py-1 rounded-full font-bold tracking-wide border border-sky-100">
                      {card.category}
                    </span>
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map(lvl => (
                        <div 
                          key={lvl} 
                          className={`w-2 h-2 rounded-full transition-colors ${
                            lvl <= card.level 
                              ? (card.level === 1 ? 'bg-sky-300' : card.level === 2 ? 'bg-yellow-300' : 'bg-rose-400')
                              : 'bg-slate-100'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Text Section */}
                  <div className="flex-1 flex items-center justify-center w-full px-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-700 text-center leading-[3rem] tracking-tight">
                      {card.text}
                    </h3>
                  </div>

                  <div className="w-full text-center mt-2 opacity-30">
                     <span className="text-[8px] text-slate-400 uppercase tracking-[0.3em] font-serif">
                       相調
                     </span>
                  </div>
                </div>

                {/* Back Side - Dynamic Design */}
                <div 
                  className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-2xl shadow-md flex items-center justify-center overflow-hidden ${isFlipped ? 'z-10' : 'z-0'}`}
                  style={{ 
                      transform: 'rotateY(180deg)',
                      // If custom image exists, use it. Otherwise use default style.
                      ...(config.customBackImage ? {
                          backgroundImage: `url(${config.customBackImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                      } : {
                          backgroundColor: '#2c3e50',
                          backgroundImage: `
                              repeating-linear-gradient(45deg, #34495e 25%, transparent 25%, transparent 75%, #34495e 75%, #34495e),
                              repeating-linear-gradient(45deg, #34495e 25%, #2c3e50 25%, #2c3e50 75%, #34495e 75%, #34495e)
                          `,
                          backgroundPosition: '0 0, 10px 10px',
                          backgroundSize: '20px 20px'
                      })
                   }}
                >
                   {!config.customBackImage && (
                     <div className="relative z-10 p-4 border-2 border-white/80 rounded-sm">
                       <h2 className="text-3xl font-serif-tc font-black text-white tracking-[0.2em] leading-tight writing-vertical-rl text-center drop-shadow-md">
                         相調<br/>小卡
                       </h2>
                     </div>
                   )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardPreview;