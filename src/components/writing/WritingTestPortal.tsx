import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  CheckCircle, 
  AlertTriangle, 
  Sparkles,
  Info,
  RotateCcw
} from 'lucide-react';
import { writingData } from '../../data/writingData';
import { WritingPrompt, DisplayTheme, FontSizeOption } from '../../data/types';
import { 
  saveWritingCache, 
  getWritingCache, 
  clearWritingCache 
} from '../../utils/storage';
import { InteractiveImage } from '../common/InteractiveImage';

interface WritingTestPortalProps {
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
}

export const WritingTestPortal: React.FC<WritingTestPortalProps> = ({ displayTheme, fontSize }) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const prompt: WritingPrompt = writingData[selectedIndex] || writingData[0];
  const promptKey = String(prompt.id);

  const [essayText, setEssayText] = useState<string>(() => getWritingCache(promptKey));
  const [showSampleBand9, setShowSampleBand9] = useState<boolean>(false);
  const [showCriteriaModal, setShowCriteriaModal] = useState<boolean>(false);
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);

  useEffect(() => {
    setEssayText(getWritingCache(promptKey));
    setIsEvaluated(false);
  }, [promptKey]);

  const handleTextChange = (val: string) => {
    setEssayText(val);
    saveWritingCache(promptKey, val);
  };

  const handleClear = () => {
    setEssayText('');
    clearWritingCache(promptKey);
    setIsEvaluated(false);
  };

  const wordsArray = essayText.trim().split(/\s+/).filter(Boolean);
  const wordCount = wordsArray.length;
  const minWords = prompt.targetWords || (prompt.task === 1 ? 150 : 250);
  const timeLimit = prompt.task === 1 ? 20 : 40;
  const isUnderLength = wordCount < minWords && wordCount > 0;

  return (
    <div className={`flex flex-col h-[calc(100vh-125px)] w-full bg-slate-100 text-slate-900 font-scale-${fontSize}`}>
      
      {/* Header Bar */}
      <div className="bg-[#1E2433] text-white px-6 py-2.5 flex items-center justify-between border-b border-slate-700 w-full flex-shrink-0">
        <div className="flex items-center space-x-3">
          <PenTool className="w-5 h-5 text-amber-400" />
          <div>
            <h2 className="font-extrabold text-sm text-white">IELTS Academic Writing Portal</h2>
            <div className="text-xs text-slate-300 font-medium">Auto-Cached Practice Workspace</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="text-slate-300 font-bold hidden sm:inline">Select Prompt:</span>
          <select
            value={selectedIndex}
            onChange={(e) => {
              setSelectedIndex(Number(e.target.value));
              setShowSampleBand9(false);
            }}
            className="bg-slate-900 text-white border border-slate-700 rounded-md px-3 py-1.5 font-extrabold focus:outline-none focus:border-amber-500 max-w-sm truncate"
          >
            {writingData.map((item, idx) => (
              <option key={idx} value={idx}>
                Task {item.task}: {item.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Dual Split Pane */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 overflow-hidden">
        
        {/* Left Pane: Task Prompt & Interactive Diagram */}
        <div className="p-6 overflow-y-auto h-full space-y-5 bg-white text-slate-900 shadow-inner">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded border border-amber-300 uppercase">
              Writing Task {prompt.task} · Recommended {timeLimit} Mins
            </span>
            <button
              onClick={() => setShowCriteriaModal(true)}
              className="text-xs text-blue-700 hover:text-blue-800 font-extrabold flex items-center space-x-1 underline"
            >
              <Info className="w-3.5 h-3.5" />
              <span>IDP Scoring Criteria</span>
            </button>
          </div>

          <h3 className="text-lg font-black text-slate-900 leading-snug">{prompt.title}</h3>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 text-xs sm:text-sm text-slate-900 leading-relaxed font-sans font-bold whitespace-pre-line shadow-sm">
            {prompt.prompt || prompt.promptText}
          </div>

          {prompt.image && (
            <InteractiveImage src={prompt.image} alt={prompt.title} />
          )}

          <div className="bg-slate-100 p-3.5 rounded-lg border border-slate-300 text-xs flex items-center justify-between text-slate-800 font-extrabold">
            <span>Minimum word requirement: <strong className="text-slate-900 font-black">{minWords} words</strong></span>
            <span>Target: <strong className="text-emerald-700 font-black">{minWords + 30}+ words</strong></span>
          </div>

          <div className="pt-4 border-t border-slate-200">
            <button
              onClick={() => setShowSampleBand9(!showSampleBand9)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-amber-900 px-4 py-2.5 rounded-xl text-xs font-black border border-amber-300 transition-all flex items-center justify-between"
            >
              <span className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{showSampleBand9 ? 'Hide Model Band 7.5 Sample Essay' : 'View Model Band 7.5 Sample Essay'}</span>
              </span>
              <span className="text-amber-800 font-mono">Band 7.5</span>
            </button>

            {showSampleBand9 && (
              <div className="mt-3 bg-amber-50/50 p-4 rounded-xl border border-amber-300 space-y-3 text-xs text-slate-900 leading-relaxed font-serif animate-fade-in">
                <div className="text-amber-800 font-bold font-sans text-xs">Official Band 7.5 Model Response:</div>
                <div className="whitespace-pre-line text-slate-900 font-medium">{prompt.sampleAnswer || prompt.sampleBand9}</div>
              </div>
            )}
          </div>

        </div>

        {/* Right Pane: Candidate Textarea Editor */}
        <div className="p-6 flex flex-col justify-between h-full bg-slate-100">
          
          <div className="space-y-3 flex-1 flex flex-col">
            <div className="flex items-center justify-between text-xs">
              <span className="font-black text-slate-900">Candidate Essay Textarea</span>
              <div className="flex items-center space-x-3 font-mono">
                <span className={`px-2.5 py-0.5 rounded font-black ${
                  isUnderLength 
                    ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                    : wordCount >= minWords 
                      ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' 
                      : 'text-slate-700'
                }`}>
                  {wordCount} words
                </span>
                <span className="text-slate-600 font-bold">{essayText.length} chars</span>
              </div>
            </div>

            <textarea
              value={essayText}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Type your response here... (Progress is automatically cached in your browser so you won't lose it on reload)"
              className="flex-1 w-full bg-white text-slate-900 font-sans text-sm p-4 rounded-xl border border-slate-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 resize-none leading-relaxed shadow-sm font-medium"
            />
          </div>

          {isUnderLength && (
            <div className="mt-3 bg-amber-50 border border-amber-300 p-2.5 rounded-lg flex items-center space-x-2 text-xs text-amber-900 font-bold">
              <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>Warning: Essay is under {minWords} words! Underlength essays incur penalty under Task Response criteria.</span>
            </div>
          )}

          {isEvaluated && (
            <div className="mt-3 bg-emerald-50 border border-emerald-300 p-3 rounded-lg text-xs space-y-1 animate-fade-in">
              <div className="font-extrabold text-emerald-900 flex items-center space-x-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Essay Evaluated: {wordCount >= minWords ? 'Band 7.5 Target Level Achieved' : 'Band 6.0 (Underlength)'}</span>
              </div>
              <p className="text-slate-700">Word count requirement: {wordCount} / {minWords} words. Compare your answer with the Band 7.5 model essay on the left!</p>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-300 flex items-center justify-between">
            <button
              onClick={handleClear}
              className="text-xs text-slate-600 hover:text-red-600 font-extrabold transition-colors flex items-center space-x-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Textarea</span>
            </button>
            <button
              onClick={() => setIsEvaluated(true)}
              className="bg-[#E31837] hover:bg-[#B9122C] text-white px-6 py-2.5 rounded-lg text-xs font-black shadow-md transition-colors flex items-center space-x-1.5 uppercase tracking-wider"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Evaluate Essay</span>
            </button>
          </div>

        </div>

      </div>

      {showCriteriaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-slate-300 text-slate-900 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <h3 className="text-lg font-extrabold text-slate-900">Official IDP Writing Band Descriptors</h3>
            <div className="space-y-3 text-xs text-slate-800 font-medium">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900 font-bold">1. Task Achievement / Response (25%):</strong> Fully addresses all parts of the prompt with a clear position and extended supported main ideas.
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900 font-bold">2. Coherence & Cohesion (25%):</strong> Logically organizes information and ideas with clear paragraphing and varied linking devices.
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900 font-bold">3. Lexical Resource (25%):</strong> Uses a wide range of vocabulary fluently with accurate collocation and rare spelling slips.
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900 font-bold">4. Grammatical Range & Accuracy (25%):</strong> Uses a wide mix of complex sentence structures cleanly with full control.
              </div>
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCriteriaModal(false)}
                className="bg-slate-800 text-white px-4 py-2 rounded-lg text-xs font-bold"
              >
                Close Rubric
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
