import React, { useRef, useState } from 'react';
import { Audience, CardConfig } from '../types';
import { Settings, Users, BookOpen, Sparkles, PieChart, CheckCircle2, ImagePlus, X } from 'lucide-react';
import { CATEGORY_NAMES } from '../data/questions';

interface Props {
  config: CardConfig;
  setConfig: React.Dispatch<React.SetStateAction<CardConfig>>;
  onGenerate: () => void;
  isGenerating: boolean;
}

const ConfigPanel: React.FC<Props> = ({ config, setConfig, onGenerate, isGenerating }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isProcessingImg, setIsProcessingImg] = useState(false);

  const handleAudienceChange = (val: Audience) => {
    setConfig({ ...config, audience: val });
  };

  // Auto-balance logic
  const updateRatios = (targetCat: string, targetVal: number) => {
    // Clamp
    targetVal = Math.max(0, Math.min(100, targetVal));
    const oldVal = config.categoryRatios[targetCat] || 0;
    if (oldVal === targetVal) return;

    let newRatios = { ...config.categoryRatios };
    
    // 1. Set the target
    newRatios[targetCat] = targetVal;
    
    // 2. Distribute the difference
    const diff = targetVal - oldVal; // + added, - removed
    const others = CATEGORY_NAMES.filter(c => c !== targetCat);
    
    // Sum of others (before change)
    const sumOthers = others.reduce((acc, c) => acc + (config.categoryRatios[c] || 0), 0);

    if (sumOthers === 0) {
        // If all others are 0
        if (diff < 0) {
            // We are decreasing the only non-zero value (likely 100 -> something else)
            // Distribute the remainder equally to all others
            const toDistribute = -diff;
            const share = toDistribute / others.length;
            others.forEach(c => newRatios[c] = share);
        }
        // If diff > 0, we can't increase beyond 100 (which is targetVal's max anyway), no-op
    } else {
        // sumOthers > 0
        if (diff > sumOthers) {
             // We are trying to increase more than available space
             newRatios[targetCat] = oldVal + sumOthers;
             others.forEach(c => newRatios[c] = 0);
        } else {
             // Proportional distribution
             others.forEach(c => {
                 const current = config.categoryRatios[c] || 0;
                 const proportion = current / sumOthers;
                 newRatios[c] = current - (diff * proportion);
             });
        }
    }

    // 3. Rounding and fix sum
    let roundedSum = 0;
    others.forEach(c => {
        newRatios[c] = Math.round(newRatios[c]);
        roundedSum += newRatios[c];
    });
    
    // Ensure target is integer (from slider)
    roundedSum += newRatios[targetCat];
    
    let error = 100 - roundedSum;
    if (error !== 0) {
        // Apply error to largest OTHER category to minimize visual jump
        let maxC = others[0];
        let maxV = -1;
        others.forEach(c => {
            if (newRatios[c] > maxV) {
                maxV = newRatios[c];
                maxC = c;
            }
        });
        newRatios[maxC] += error;
    }
    
    // Final clamp check
    Object.keys(newRatios).forEach(k => {
        if (newRatios[k] < 0) newRatios[k] = 0;
        if (newRatios[k] > 100) newRatios[k] = 100;
    });

    setConfig({ ...config, categoryRatios: newRatios });
  };

  const handleCategoryToggle = (category: string) => {
    const currentVal = config.categoryRatios[category] || 0;
    if (currentVal > 0) {
        // Turn off -> set to 0
        updateRatios(category, 0);
    } else {
        // Turn on -> set to default amount (e.g. 20)
        updateRatios(category, 20);
    }
  };

  const handleCategoryRatioChange = (category: string, val: string) => {
    const num = parseInt(val, 10) || 0;
    updateRatios(category, num);
  };

  // Logic to read and auto-crop image to 55:85 ratio
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessingImg(true);

    const reader = new FileReader();
    reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
            // Target dimensions (550x850 px for high quality)
            const TARGET_W = 550;
            const TARGET_H = 850;
            
            const canvas = document.createElement('canvas');
            canvas.width = TARGET_W;
            canvas.height = TARGET_H;
            const ctx = canvas.getContext('2d');
            
            if (ctx) {
                // Calculate "Cover" fit
                const scale = Math.max(TARGET_W / img.width, TARGET_H / img.height);
                const x = (TARGET_W / 2) - (img.width / 2) * scale;
                const y = (TARGET_H / 2) - (img.height / 2) * scale;
                
                ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
                
                const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
                setConfig({ ...config, customBackImage: dataUrl });
            }
            setIsProcessingImg(false);
        };
        img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
    // Reset input so same file can be selected again
    e.target.value = '';
  };

  const countOptions = [27, 45, 63, 72];

  // Calculate Total Ratio (Should always be 100 with new logic)
  const totalRatio = Object.values(config.categoryRatios).reduce((sum: number, val: number) => sum + val, 0);

  return (
    <>
      <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(14,165,233,0.2)] p-6 md:p-8 max-w-2xl mx-auto border-2 border-white relative overflow-hidden">
        {/* Top green accent bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-300 to-green-300"></div>

        <div className="flex items-center gap-3 mb-8">
          <div className="bg-sky-100 p-3 rounded-full text-sky-500 transform -rotate-6">
            <Settings size={24} />
          </div>
          <h2 className="text-2xl font-hand font-bold text-slate-700">卡牌設定</h2>
        </div>

        <div className="space-y-8">
          {/* Audience Selection */}
          <div>
            <label className="text-base font-hand font-bold text-slate-600 mb-3 flex items-center gap-2">
              <Users size={20} className="text-green-400" /> 選擇使用對象
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.values(Audience).map((aud) => (
                <button
                  key={aud}
                  onClick={() => handleAudienceChange(aud)}
                  className={`px-4 py-2.5 text-sm rounded-xl border-2 transition-all duration-200 font-medium ${
                    config.audience === aud
                      ? 'bg-sky-50 text-sky-600 border-sky-300 shadow-sm scale-105'
                      : 'bg-white text-slate-500 border-slate-100 hover:border-sky-200 hover:bg-sky-50/50'
                  }`}
                >
                  {aud}
                </button>
              ))}
            </div>
            {config.audience === Audience.GOSPEL_FRIENDS && (
                <div className="mt-3 text-sm text-green-700 bg-green-50 p-3 rounded-xl border border-green-100 flex gap-2">
                    <Sparkles size={16} className="mt-0.5" />
                    <span>福音朋友模式：建議勾選「認識彼此」並提高其比例。</span>
                </div>
            )}
          </div>

          {/* Category Ratios */}
          <div>
             <div className="flex items-center justify-between mb-4">
                <label className="text-base font-hand font-bold text-slate-600 flex items-center gap-2">
                  <PieChart size={20} className="text-green-400" /> 題目類型與佔比
                </label>
                <div className={`text-xs font-bold px-3 py-1 rounded-full ${totalRatio === 100 ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                   總和: {totalRatio}% 
                </div>
             </div>
             
             <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                {CATEGORY_NAMES.map((cat, idx) => {
                    const ratio = config.categoryRatios[cat] || 0;
                    const isSelected = ratio > 0;
                    return (
                        <div key={cat} className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${isSelected ? 'bg-white border-sky-200 shadow-sm' : 'border-transparent opacity-70 hover:opacity-100'}`}>
                            {/* Checkbox Toggle */}
                            <button 
                                onClick={() => handleCategoryToggle(cat)}
                                className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-sky-500 border-sky-500 text-white' : 'bg-white border-slate-300 text-transparent hover:border-sky-300'}`}
                            >
                                <CheckCircle2 size={16} />
                            </button>

                            <div className="flex-1">
                                <span className={`text-sm font-bold ${isSelected ? 'text-slate-700' : 'text-slate-400'}`}>{cat}</span>
                            </div>

                            {/* Slider & Input */}
                            <div className={`flex items-center gap-3 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-20 pointer-events-none'}`}>
                                <input 
                                    type="range" min="0" max="100" step="5"
                                    value={ratio}
                                    onChange={(e) => handleCategoryRatioChange(cat, e.target.value)}
                                    className="w-24 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-500 hidden sm:block"
                                />
                                <div className="relative">
                                    <input 
                                        type="number" min="0" max="100"
                                        value={ratio}
                                        onChange={(e) => handleCategoryRatioChange(cat, e.target.value)}
                                        className="w-16 px-2 py-1 text-right text-sm font-bold text-sky-600 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-sky-400"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
             </div>
          </div>

          {/* Count & Card Back Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-base font-hand font-bold text-slate-600 mb-3 flex items-center gap-2">
                <BookOpen size={20} className="text-green-400" /> 題目數量 (張)
              </label>
              <div className="flex gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
                {countOptions.map((num) => (
                  <button
                    key={num}
                    onClick={() => setConfig({ ...config, count: num })}
                    className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
                      config.count === num
                      ? 'bg-white text-sky-600 shadow-sm ring-1 ring-slate-100 font-bold'
                      : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <div>
               <label className="text-base font-hand font-bold text-slate-600 mb-3 block">
                 卡背圖案 (可選)
               </label>
               <input 
                  type="file" 
                  ref={fileInputRef} 
                  hidden 
                  accept="image/*" 
                  onChange={handleImageUpload} 
               />
               
               {config.customBackImage ? (
                  <div className="relative w-full h-24 rounded-2xl overflow-hidden border-2 border-sky-300 group shadow-sm">
                      <img 
                        src={config.customBackImage} 
                        alt="Custom Back" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                             onClick={(e) => { e.stopPropagation(); setConfig({...config, customBackImage: null}); }}
                             className="p-2 bg-white rounded-full text-red-500 hover:bg-red-50"
                          >
                             <X size={16} />
                          </button>
                      </div>
                      <div className="absolute bottom-1 right-2 text-[10px] text-white font-medium bg-black/30 px-1.5 rounded">
                        已自動裁切
                      </div>
                  </div>
               ) : (
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isProcessingImg}
                    className="w-full h-24 rounded-2xl border-2 border-dashed border-slate-300 hover:border-sky-400 hover:bg-sky-50 transition-all flex flex-col items-center justify-center text-slate-400 hover:text-sky-600 group"
                  >
                     {isProcessingImg ? (
                        <span className="text-xs font-medium animate-pulse">處理中...</span>
                     ) : (
                        <>
                            <ImagePlus size={24} className="mb-1 group-hover:scale-110 transition-transform" />
                            <span className="text-xs font-medium">點擊上傳圖片</span>
                            <span className="text-[10px] opacity-70">將自動裁切為卡牌比例</span>
                        </>
                     )}
                  </button>
               )}
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
             <button
              onClick={onGenerate}
              disabled={isGenerating || totalRatio !== 100}
              className={`w-full py-4 rounded-2xl font-bold text-lg text-white shadow-xl shadow-sky-200/50 transition-all transform active:scale-[0.98] ${
                isGenerating || totalRatio !== 100
                  ? 'bg-slate-300 cursor-not-allowed shadow-none'
                  : 'bg-gradient-to-r from-sky-400 to-green-400 hover:from-sky-500 hover:to-green-500 hover:shadow-2xl hover:shadow-green-200/50'
              }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="animate-spin" /> 正在為您挑選題目...
                </span>
              ) : (
                '開始製作相調小卡'
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfigPanel;