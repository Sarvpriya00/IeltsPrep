import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Flame, 
  ArrowRight,
  BookOpen,
  Award,
  ListOrdered
} from 'lucide-react';
import { exerciseData } from '../../data/exerciseData';
import { DisplayTheme, FontSizeOption } from '../../data/types';

interface DrillsPortalProps {
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
}

export const DrillsPortal: React.FC<DrillsPortalProps> = ({ fontSize }) => {
  const [activeTab, setActiveTab] = useState<'reorder' | 'collocation' | 'rubric'>('reorder');
  const [reorderIndex, setReorderIndex] = useState<number>(0);
  const [userOrder, setUserOrder] = useState<string[]>([]);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState<boolean>(false);
  const [isOrderCorrect, setIsOrderCorrect] = useState<boolean>(false);

  // Collocation state
  const [collocationIndex, setCollocationIndex] = useState<number>(0);
  const [selectedCollocation, setSelectedCollocation] = useState<string | null>(null);
  const [collocationResult, setCollocationResult] = useState<boolean | null>(null);

  const reorderList = exerciseData.reorderExercises || [];
  const currentReorder = reorderList[reorderIndex] || reorderList[0];

  const collocationsList = exerciseData.collocationDrills || [];
  const currentCollocation = collocationsList[collocationIndex] || collocationsList[0];

  const rubric = exerciseData.band9ScoringRubric || {};

  const handleSelectBlock = (blockId: string) => {
    if (isOrderSubmitted) return;
    if (userOrder.includes(blockId)) {
      setUserOrder(prev => prev.filter(id => id !== blockId));
    } else {
      setUserOrder(prev => [...prev, blockId]);
    }
  };

  const handleSubmitOrder = () => {
    if (!currentReorder) return;
    const correct = JSON.stringify(userOrder) === JSON.stringify(currentReorder.correctOrder);
    setIsOrderCorrect(correct);
    setIsOrderSubmitted(true);
  };

  const handleNextReorder = () => {
    setUserOrder([]);
    setIsOrderSubmitted(false);
    setIsOrderCorrect(false);
    setReorderIndex(prev => (prev + 1) % reorderList.length);
  };

  const handleSelectCollocation = (option: string) => {
    setSelectedCollocation(option);
    const correct = option.toLowerCase() === currentCollocation.correct.toLowerCase();
    setCollocationResult(correct);
  };

  const handleNextCollocation = () => {
    setSelectedCollocation(null);
    setCollocationResult(null);
    setCollocationIndex(prev => (prev + 1) % collocationsList.length);
  };

  return (
    <div className={`w-full py-4 space-y-6 bg-slate-100 text-slate-900 font-scale-${fontSize} animate-fade-in`}>
      
      {/* Header Bar */}
      <div className="bg-[#1E2433] text-white p-6 rounded-2xl border-b-4 border-amber-500 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-amber-500 text-black px-2.5 py-0.5 rounded text-xs font-black uppercase">
              Targeted Practice
            </span>
            <span className="text-slate-300 text-xs font-mono">IELTS Skill & Logic Trainer</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">Paragraph Structure & Vocabulary Drills</h2>
        </div>

        <div className="flex items-center space-x-2 bg-slate-900 px-4 py-2 rounded-xl border border-slate-700">
          <Flame className="w-5 h-5 text-amber-400" />
          <div>
            <div className="text-[10px] text-slate-300 uppercase font-bold">Practice Engine</div>
            <div className="text-sm font-black text-white font-mono">Band 9 Rubric Aligned</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 text-xs w-full">
        <button
          onClick={() => setActiveTab('reorder')}
          className={`px-4 py-2.5 rounded-xl font-extrabold flex items-center space-x-2 transition-all ${
            activeTab === 'reorder'
              ? 'bg-amber-500 text-black shadow-md'
              : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-200'
          }`}
        >
          <ListOrdered className="w-4 h-4" />
          <span>Paragraph Structure Reorder</span>
        </button>

        <button
          onClick={() => setActiveTab('collocation')}
          className={`px-4 py-2.5 rounded-xl font-extrabold flex items-center space-x-2 transition-all ${
            activeTab === 'collocation'
              ? 'bg-amber-500 text-black shadow-md'
              : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-200'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Academic Collocations</span>
        </button>

        <button
          onClick={() => setActiveTab('rubric')}
          className={`px-4 py-2.5 rounded-xl font-extrabold flex items-center space-x-2 transition-all ${
            activeTab === 'rubric'
              ? 'bg-amber-500 text-black shadow-md'
              : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>IDP Band 9 Rubric Criteria</span>
        </button>
      </div>

      {/* Tab 1: Paragraph Reordering */}
      {activeTab === 'reorder' && currentReorder && (
        <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-6 shadow-sm w-full">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-extrabold text-amber-700 text-xs uppercase tracking-wider">
              Structural Challenge #{reorderIndex + 1} of {reorderList.length}
            </span>
            <span className="text-xs font-mono font-bold text-slate-700">{currentReorder.promptTitle}</span>
          </div>

          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900">{currentReorder.title}</h3>
            <p className="text-xs text-slate-600 font-medium">
              Click paragraphs in the correct logical sequence (1. Intro ➔ 2. Overview ➔ 3. Body 1 ➔ 4. Body 2).
            </p>
          </div>

          <div className="space-y-3">
            {currentReorder.blocks.map((block: any) => {
              const selectedIdx = userOrder.indexOf(block.id);
              const isSelected = selectedIdx !== -1;
              return (
                <div
                  key={block.id}
                  onClick={() => handleSelectBlock(block.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    isSelected
                      ? 'border-amber-500 bg-amber-50 shadow-sm'
                      : 'border-slate-300 bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1 flex-1">
                      <span className="text-[11px] font-extrabold text-slate-600 uppercase tracking-wider">
                        {block.type}
                      </span>
                      <p className="text-xs font-medium text-slate-900 leading-relaxed">{block.text}</p>
                    </div>

                    {isSelected && (
                      <span className="w-7 h-7 bg-amber-500 text-black font-black font-mono rounded-full flex items-center justify-center text-xs flex-shrink-0">
                        #{selectedIdx + 1}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              onClick={() => setUserOrder([])}
              className="text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-300"
            >
              Reset Sequence
            </button>

            {!isOrderSubmitted ? (
              <button
                disabled={userOrder.length !== currentReorder.blocks.length}
                onClick={handleSubmitOrder}
                className="bg-[#E31837] hover:bg-[#B9122C] disabled:bg-slate-300 text-white px-5 py-2.5 rounded-xl font-extrabold text-xs shadow-md transition-all"
              >
                Submit Paragraph Sequence
              </button>
            ) : (
              <button
                onClick={handleNextReorder}
                className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-xl font-black text-xs shadow-md transition-all flex items-center space-x-2"
              >
                <span>Next Structural Challenge</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>

          {isOrderSubmitted && (
            <div className={`p-4 rounded-xl border text-xs space-y-1 ${
              isOrderCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : 'bg-red-50 border-red-400 text-red-900'
            }`}>
              <div className="font-extrabold text-sm flex items-center space-x-2">
                {isOrderCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
                <span>{isOrderCorrect ? 'Perfect Structure!' : 'Incorrect Paragraph Sequence'}</span>
              </div>
              <p className="font-medium">
                Official IELTS Task Structure: Introduction ➔ Overview ➔ Body Paragraph 1 ➔ Body Paragraph 2.
              </p>
            </div>
          )}

        </div>
      )}

      {/* Tab 2: Collocations */}
      {activeTab === 'collocation' && currentCollocation && (
        <div className="bg-white border border-slate-300 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm w-full">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <span className="font-extrabold text-amber-700 text-xs uppercase tracking-wider">
              Collocation #{collocationIndex + 1} of {collocationsList.length}
            </span>
            <span className="text-xs font-mono font-bold text-slate-700">Band 8.5+ Lexical Resource</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-extrabold text-slate-900">{currentCollocation.sentence}</h3>
            <p className="text-xs text-slate-600 font-medium">Select the high-scoring academic collocation:</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {currentCollocation.options.map((opt: string, idx: number) => {
              const isSelected = selectedCollocation === opt;
              const isCorrect = opt.toLowerCase() === currentCollocation.correct.toLowerCase();

              let style = 'bg-slate-50 border-slate-300 text-slate-900 hover:bg-slate-100';
              if (selectedCollocation) {
                if (isCorrect) style = 'bg-emerald-100 border-emerald-500 text-emerald-900 font-black';
                else if (isSelected && !isCorrect) style = 'bg-red-100 border-red-500 text-red-900 font-black';
              }

              return (
                <button
                  key={idx}
                  disabled={Boolean(selectedCollocation)}
                  onClick={() => handleSelectCollocation(opt)}
                  className={`p-4 rounded-xl border text-xs font-extrabold text-center transition-all ${style}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selectedCollocation && (
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-300 space-y-2">
              <div className="font-extrabold text-xs text-slate-900">Explanation & Context:</div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">{currentCollocation.explanation}</p>

              <div className="pt-3 flex justify-end">
                <button
                  onClick={handleNextCollocation}
                  className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-2.5 rounded-xl font-black text-xs shadow-md transition-all flex items-center space-x-2"
                >
                  <span>Next Collocation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Tab 3: Band 9 Scoring Rubric */}
      {activeTab === 'rubric' && (
        <div className="bg-white border border-slate-300 p-6 sm:p-8 rounded-2xl space-y-6 shadow-sm w-full">
          <div className="border-b border-slate-200 pb-3">
            <h3 className="text-xl font-black text-slate-900">IDP Official Band 9 Writing Rubric Criteria</h3>
            <p className="text-xs text-slate-600 font-medium mt-1">
              Official assessment criteria applied by certified IELTS examiners for Band 9 evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(rubric).map((key) => {
              const item = rubric[key];
              return (
                <div key={key} className="bg-slate-50 p-5 rounded-xl border border-slate-300 space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-[#E31837] rounded-full" />
                    <h4 className="font-extrabold text-sm text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">{item.descriptor}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
