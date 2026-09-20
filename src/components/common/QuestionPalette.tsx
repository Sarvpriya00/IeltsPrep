import React from 'react';
import { Flag } from 'lucide-react';

interface QuestionPaletteProps {
  totalQuestions: number;
  currentQuestionNum: number;
  userAnswers: Record<number | string, string>;
  flaggedQuestions: Set<number>;
  onSelectQuestion: (num: number) => void;
  onToggleFlag: (num: number) => void;
  sections?: { id: number; title: string; questionRange: [number, number] }[];
  activeSectionId?: number;
  onSelectSection?: (id: number) => void;
  onSubmitTest?: () => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  totalQuestions,
  currentQuestionNum,
  userAnswers,
  flaggedQuestions,
  onSelectQuestion,
  onToggleFlag,
  sections,
  activeSectionId,
  onSelectSection,
  onSubmitTest,
}) => {
  const answeredCount = Object.keys(userAnswers).filter(k => userAnswers[k] && userAnswers[k].toString().trim() !== '').length;
  const isCurrentFlagged = flaggedQuestions.has(currentQuestionNum);

  return (
    <div className="bg-[#1E2433] text-white border-t-4 border-[#E31837] py-3 px-4 sm:px-6 shadow-2xl w-full">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={() => onToggleFlag(currentQuestionNum)}
            className={`flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md text-xs font-bold border transition-all ${
              isCurrentFlagged
                ? 'bg-amber-500 text-black border-amber-400 font-extrabold shadow-sm'
                : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700'
            }`}
          >
            <Flag className={`w-3.5 h-3.5 ${isCurrentFlagged ? 'fill-black' : ''}`} />
            <span>Review Question {currentQuestionNum}</span>
          </button>

          {sections && sections.length > 0 && (
            <div className="flex items-center space-x-1 bg-slate-900 p-1 rounded-md border border-slate-700">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => onSelectSection && onSelectSection(sec.id)}
                  className={`px-3 py-1 rounded text-xs font-extrabold transition-colors ${
                    activeSectionId === sec.id
                      ? 'bg-[#E31837] text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {sec.title}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-wrap items-center justify-center gap-1.5 max-h-24 overflow-y-auto px-4 py-1 bg-slate-950 rounded-lg border border-slate-800 mx-2">
          {Array.from({ length: totalQuestions }, (_, i) => i + 1).map((qNum) => {
            const isAnswered = !!(userAnswers[qNum] && userAnswers[qNum].toString().trim() !== '');
            const isFlagged = flaggedQuestions.has(qNum);
            const isCurrent = currentQuestionNum === qNum;

            let btnStyle = 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700';

            if (isAnswered) {
              btnStyle = 'bg-emerald-600 text-white font-extrabold border-emerald-500';
            }

            if (isFlagged) {
              btnStyle += ' relative ring-2 ring-amber-400 font-black';
            }

            if (isCurrent) {
              btnStyle += ' ring-2 ring-red-500 ring-offset-1 ring-offset-slate-900 scale-105 font-black z-10';
            }

            return (
              <button
                key={qNum}
                onClick={() => onSelectQuestion(qNum)}
                className={`w-7 h-7 text-xs rounded flex items-center justify-center transition-all border ${btnStyle}`}
                title={`Question ${qNum} ${isAnswered ? '(Answered)' : '(Unanswered)'} ${isFlagged ? '[Flagged]' : ''}`}
              >
                {qNum}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-slate-900" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
          <div className="text-xs text-slate-300 whitespace-nowrap">
            <span className="text-emerald-400 font-black">{answeredCount}</span> of <span className="font-bold">{totalQuestions}</span> answered
          </div>
          {onSubmitTest && (
            <button
              onClick={onSubmitTest}
              className="bg-[#E31837] hover:bg-[#B9122C] text-white px-5 py-2 rounded-md font-extrabold text-xs shadow-md transition-all flex items-center space-x-1.5 uppercase tracking-wider whitespace-nowrap"
            >
              <span>Submit Test</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
