import React, { useState } from 'react';
import { X, Calculator, Info } from 'lucide-react';
import { calculateIELTSBand } from '../../utils/storage';

interface BandCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BandCalculatorModal: React.FC<BandCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [listeningRaw, setListeningRaw] = useState<number>(30);
  const [readingRaw, setReadingRaw] = useState<number>(30);
  const [testType, setTestType] = useState<'academic' | 'general'>('academic');

  if (!isOpen) return null;

  const listeningBand = calculateIELTSBand(listeningRaw, 'listening');
  const readingBand = calculateIELTSBand(readingRaw, 'reading');

  const averageRaw = (listeningBand + readingBand) / 2;
  const overallBand = Math.round(averageRaw * 2) / 2;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white border border-slate-300 text-slate-900 rounded-xl shadow-2xl max-w-lg w-full overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-[#1E2433] px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <Calculator className="w-5 h-5 text-red-500" />
            <h3 className="font-extrabold text-lg text-white">IDP Official IELTS Band Calculator</h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          <div className="flex items-center justify-center bg-slate-100 p-1 rounded-lg border border-slate-300 text-xs">
            <button
              onClick={() => setTestType('academic')}
              className={`flex-1 py-2 rounded-md font-bold transition-all ${
                testType === 'academic' ? 'bg-[#E31837] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Academic Module
            </button>
            <button
              onClick={() => setTestType('general')}
              className={`flex-1 py-2 rounded-md font-bold transition-all ${
                testType === 'general' ? 'bg-[#E31837] text-white shadow-sm' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              General Training
            </button>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-slate-900">Listening Raw Score (0 - 40):</span>
              <span className="font-mono font-black text-emerald-700 text-base">{listeningRaw} / 40</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={listeningRaw}
              onChange={(e) => setListeningRaw(Number(e.target.value))}
              className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex items-center justify-between text-xs text-slate-700 font-mono font-bold">
              <span>Band: <strong className="text-slate-900 text-sm font-black">{listeningBand.toFixed(1)}</strong></span>
              <span>{listeningRaw >= 30 ? 'Competent / Good User' : 'Needs Practice'}</span>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-slate-900">Reading Raw Score (0 - 40):</span>
              <span className="font-mono font-black text-emerald-700 text-base">{readingRaw} / 40</span>
            </div>
            <input
              type="range"
              min="0"
              max="40"
              value={readingRaw}
              onChange={(e) => setReadingRaw(Number(e.target.value))}
              className="w-full accent-red-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex items-center justify-between text-xs text-slate-700 font-mono font-bold">
              <span>Band: <strong className="text-slate-900 text-sm font-black">{readingBand.toFixed(1)}</strong></span>
              <span>{readingRaw >= 30 ? 'C1 Advanced Level' : 'B2 Upper Intermediate'}</span>
            </div>
          </div>

          <div className="bg-red-50 p-5 rounded-xl border border-red-200 flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-red-700 font-black">Estimated Overall Band</div>
              <div className="text-slate-700 text-xs mt-1 font-medium">Based on official IDP conversion tables</div>
            </div>
            <div className="bg-[#E31837] text-white font-black text-3xl px-4 py-2 rounded-xl shadow-md font-mono">
              {overallBand.toFixed(1)}
            </div>
          </div>

          <div className="flex items-start space-x-2 text-xs text-slate-700 bg-slate-100 p-3 rounded-lg border border-slate-200 font-medium">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <span>Official IDP scoring rounds overall averages ending in .25 up to .50, and .75 up to 1.00.</span>
          </div>

        </div>

        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="bg-slate-800 text-white px-5 py-2 rounded-lg text-xs font-bold transition-colors"
          >
            Close Calculator
          </button>
        </div>

      </div>
    </div>
  );
};
