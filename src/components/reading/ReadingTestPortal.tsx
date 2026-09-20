import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Highlighter, 
  Award
} from 'lucide-react';
import { readingData } from '../../data/readingData';
import { ReadingTest, ReadingPassage, DisplayTheme, FontSizeOption } from '../../data/types';
import { QuestionPalette } from '../common/QuestionPalette';
import { 
  calculateIELTSBand, 
  saveReadingProgress, 
  getReadingProgress, 
  clearReadingProgress 
} from '../../utils/storage';

interface ReadingTestPortalProps {
  testId?: string;
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
  onFinishTest?: () => void;
}

export const ReadingTestPortal: React.FC<ReadingTestPortalProps> = ({
  testId = 'cam19-r1',
  displayTheme,
  fontSize,
  onFinishTest,
}) => {
  const [activeTestId, setActiveTestId] = useState<string>(testId);
  const test: ReadingTest = readingData[activeTestId] || readingData['cam19-r1'];
  
  const [activePassageId, setActivePassageId] = useState<number>(1);
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(() => getReadingProgress(activeTestId));
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [highlightedText, setHighlightedText] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ rawScore: number; bandScore: number; missed: any[] } | null>(null);

  useEffect(() => {
    setUserAnswers(getReadingProgress(activeTestId));
    setIsSubmitted(false);
  }, [activeTestId]);

  const currentPassage: ReadingPassage = test.passages.find(p => p.id === activePassageId) || test.passages[0];

  const handleHighlightSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim().length > 0) {
      const selectedText = selection.toString().trim();
      if (!highlightedText.includes(selectedText)) {
        setHighlightedText([...highlightedText, selectedText]);
      }
    }
  };

  const handleAnswerChange = (qNum: number, value: string) => {
    setUserAnswers(prev => {
      const updated = { ...prev, [qNum]: value };
      saveReadingProgress(activeTestId, updated);
      return updated;
    });
  };

  const handleToggleFlag = (qNum: number) => {
    setFlaggedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(qNum)) next.delete(qNum);
      else next.add(qNum);
      return next;
    });
  };

  const handleSelectQuestion = (num: number) => {
    setCurrentQuestionNum(num);
    if (num <= 13) setActivePassageId(1);
    else if (num <= 26) setActivePassageId(2);
    else setActivePassageId(3);
  };

  const handleSubmitTest = () => {
    let rawScore = 0;
    const missed: any[] = [];

    test.passages.forEach(passage => {
      passage.questions.forEach(qSec => {
        const items: any[] = qSec.items || qSec.questions || [];
        if (qSec.sections) {
          qSec.sections.forEach(sec => {
            if (sec.bullets) {
              sec.bullets.forEach(b => {
                if (b.type === 'question' && b.num) items.push(b);
              });
            }
          });
        }

        items.forEach(item => {
          const qNum = item.num;
          if (!qNum) return;
          const userAns = (userAnswers[qNum] || '').toString().trim().toLowerCase();
          const correctAns = (item.answer || '').toString().trim().toLowerCase();

          if (userAns && userAns === correctAns) {
            rawScore++;
          } else {
            missed.push({
              num: qNum,
              questionText: item.text || item.question || `Question ${qNum}`,
              userAns: userAnswers[qNum] || '(Blank)',
              correctAns: item.answer,
              passageTitle: passage.title,
            });
          }
        });
      });
    });

    const bandScore = calculateIELTSBand(rawScore, 'reading');
    clearReadingProgress(activeTestId);

    setTestResult({ rawScore, bandScore, missed });
    setIsSubmitted(true);
  };

  const sectionsConfig = [
    { id: 1, title: 'Passage 1 (Q1-13)', questionRange: [1, 13] as [number, number] },
    { id: 2, title: 'Passage 2 (Q14-26)', questionRange: [14, 26] as [number, number] },
    { id: 3, title: 'Passage 3 (Q27-40)', questionRange: [27, 40] as [number, number] },
  ];

  return (
    <div className={`flex flex-col h-[calc(100vh-125px)] w-full bg-slate-100 text-slate-900 font-scale-${fontSize}`}>
      
      {/* Test Selector Bar */}
      <div className="bg-[#1E2433] text-white px-6 py-2.5 flex items-center justify-between border-b border-slate-700 w-full flex-shrink-0">
        <div className="flex items-center space-x-3">
          <BookOpen className="w-5 h-5 text-red-500" />
          <div>
            <h2 className="font-extrabold text-sm text-white">{test.title}</h2>
            <div className="text-xs text-slate-300 font-medium">Official Cambridge Academic Reading Test</div>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <span className="text-slate-300 font-bold hidden sm:inline">Select Test:</span>
          <select
            value={activeTestId}
            onChange={(e) => {
              setActiveTestId(e.target.value);
              setIsSubmitted(false);
            }}
            className="bg-slate-900 text-white border border-slate-700 rounded-md px-3 py-1.5 font-extrabold focus:outline-none focus:border-red-500"
          >
            {Object.keys(readingData).map(key => (
              <option key={key} value={key}>
                {readingData[key].title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Split-Pane */}
      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-300 overflow-hidden">
        
        {/* Left Pane: Passage Reading Canvas */}
        <div 
          onMouseUp={handleHighlightSelection}
          className="p-6 overflow-y-auto h-full space-y-4 bg-white text-slate-900 shadow-inner"
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center space-x-2">
              {test.passages.map(p => (
                <button
                  key={p.id}
                  onClick={() => setActivePassageId(p.id)}
                  className={`px-4 py-1.5 rounded-md text-xs font-extrabold transition-all ${
                    activePassageId === p.id
                      ? 'bg-[#E31837] text-white shadow-sm'
                      : 'bg-slate-100 text-slate-700 border border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Passage {p.id}
                </button>
              ))}
            </div>
            <button
              onClick={() => alert('Select text with your cursor to highlight.')}
              className="flex items-center space-x-1 text-xs text-amber-800 hover:text-amber-900 bg-amber-50 px-3 py-1 rounded border border-amber-300 font-extrabold"
            >
              <Highlighter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Highlighter Tool</span>
            </button>
          </div>

          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">{currentPassage.title}</h3>
          
          <div className="text-slate-900 leading-relaxed space-y-4 text-justify select-text font-sans text-sm sm:text-base">
            {currentPassage.text.split('\n\n').map((para, pIdx) => (
              <p key={pIdx} className="relative pl-3 border-l-2 border-slate-300 hover:border-red-600 transition-colors">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Right Pane: Questions */}
        <div className="p-6 overflow-y-auto h-full space-y-6 bg-slate-100 text-slate-900">
          
          <div className="bg-white p-3.5 rounded-lg border border-slate-300 text-xs text-slate-800 flex items-center justify-between shadow-sm">
            <span className="font-extrabold text-[#E31837]">Questions for Passage {activePassageId}</span>
            <span className="text-slate-600 font-bold">Progress auto-cached across reloads</span>
          </div>

          {currentPassage.questions.map((qSec, sIdx) => (
            <div key={sIdx} className="bg-white border border-slate-300 p-5 rounded-xl space-y-4 shadow-sm">
              
              <div className="bg-slate-100 p-4 rounded-lg border border-slate-300 font-mono text-xs text-slate-900 font-extrabold whitespace-pre-line leading-relaxed">
                {qSec.instruction}
              </div>

              {(qSec.noteTitle || qSec.summaryTitle || qSec.tableTitle) && (
                <h4 className="font-extrabold text-sm text-slate-900 underline decoration-red-600">
                  {qSec.noteTitle || qSec.summaryTitle || qSec.tableTitle}
                </h4>
              )}

              {qSec.items && qSec.items.map((item) => {
                const qNum = item.num;
                if (!qNum) return null;
                return (
                  <div 
                    key={qNum} 
                    id={`q-${qNum}`}
                    className={`p-4 rounded-lg border transition-all ${
                      currentQuestionNum === qNum
                        ? 'border-red-600 bg-red-50 ring-2 ring-red-500'
                        : 'border-slate-300 bg-white'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <span className="bg-[#E31837] text-white font-black text-xs px-2.5 py-1 rounded font-mono shadow-sm">
                        Q{qNum}
                      </span>
                      <div className="flex-1 space-y-3">
                        <p className="text-xs sm:text-sm font-extrabold text-slate-900 leading-snug">{item.text || item.question}</p>

                        {qSec.type === 'tfng' && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                              <button
                                key={opt}
                                onClick={() => handleAnswerChange(qNum, opt)}
                                className={`px-4 py-1.5 rounded text-xs font-black border transition-all ${
                                  userAnswers[qNum] === opt
                                    ? 'bg-[#E31837] text-white border-red-600 shadow-sm'
                                    : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-200'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        )}

                        {qSec.type === 'fill' && (
                          <div className="pt-1">
                            <input
                              type="text"
                              value={userAnswers[qNum] || ''}
                              onChange={(e) => handleAnswerChange(qNum, e.target.value)}
                              placeholder="Type single word answer..."
                              className="bg-white text-slate-900 font-mono font-bold text-xs border border-slate-400 rounded-md px-3 py-2 w-full max-w-md focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
                            />
                          </div>
                        )}

                        {item.options && (
                          <div className="space-y-1.5 pt-1">
                            {item.options.map((opt, oIdx) => (
                              <label
                                key={oIdx}
                                onClick={() => handleAnswerChange(qNum, opt.charAt(0))}
                                className={`flex items-center space-x-2.5 p-2.5 rounded-md border text-xs cursor-pointer transition-colors ${
                                  userAnswers[qNum] === opt.charAt(0)
                                    ? 'bg-red-50 border-red-600 text-slate-900 font-extrabold'
                                    : 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
                                }`}
                              >
                                <input
                                  type="radio"
                                  name={`q-${qNum}`}
                                  checked={userAnswers[qNum] === opt.charAt(0)}
                                  onChange={() => {}}
                                  className="accent-red-600"
                                />
                                <span>{opt}</span>
                              </label>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  </div>
                );
              })}

              {qSec.sections && qSec.sections.map((sec, secIdx) => (
                <div key={secIdx} className="space-y-3 pt-2">
                  {(sec.heading || sec.title) && <h5 className="font-extrabold text-xs text-slate-900">{sec.heading || sec.title}</h5>}
                  {sec.bullets && sec.bullets.map((b, bIdx) => {
                    const bNum = b.num;
                    if (b.type === 'question' && bNum) {
                      return (
                        <div key={bIdx} className="bg-slate-50 p-3 rounded-lg border border-slate-300 text-xs">
                          <div className="flex items-center space-x-3">
                            <span className="bg-[#E31837] text-white font-extrabold text-xs px-2 py-0.5 rounded font-mono">
                              Q{bNum}
                            </span>
                            <div className="flex-1 space-y-2">
                              <p className="text-slate-900 font-bold">{b.text}</p>
                              <input
                                type="text"
                                value={userAnswers[bNum] || ''}
                                onChange={(e) => handleAnswerChange(bNum, e.target.value)}
                                placeholder="Type answer..."
                                className="bg-white text-slate-900 font-mono font-bold text-xs border border-slate-400 rounded-md px-3 py-1.5 w-full max-w-sm focus:outline-none focus:border-red-600"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div key={bIdx} className="bg-slate-50 p-2.5 rounded text-xs text-slate-700 italic">
                        {b.text}
                      </div>
                    );
                  })}
                </div>
              ))}

            </div>
          ))}

        </div>

      </div>

      <QuestionPalette
        totalQuestions={40}
        currentQuestionNum={currentQuestionNum}
        userAnswers={userAnswers}
        flaggedQuestions={flaggedQuestions}
        onSelectQuestion={handleSelectQuestion}
        onToggleFlag={handleToggleFlag}
        sections={sectionsConfig}
        activeSectionId={activePassageId}
        onSelectSection={setActivePassageId}
        onSubmitTest={handleSubmitTest}
      />

      {isSubmitted && testResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-slate-300 text-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-6">
            <div className="text-center space-y-2 border-b border-slate-200 pb-4">
              <div className="inline-flex p-3 bg-red-100 text-red-600 rounded-full border border-red-200">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Reading Test Completed!</h3>
              <p className="text-xs text-slate-600 font-medium">{test.title} · Official Band Evaluation</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="text-xs text-slate-600 uppercase font-extrabold">Raw Score</div>
                <div className="text-3xl font-black text-emerald-600 font-mono">{testResult.rawScore} / 40</div>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200 text-center space-y-1">
                <div className="text-xs text-red-700 uppercase font-black">Official IELTS Band</div>
                <div className="text-3xl font-black text-red-600 font-mono">Band {testResult.bandScore.toFixed(1)}</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-slate-200 hover:bg-slate-300 text-slate-900 px-4 py-2 rounded-lg text-xs font-bold transition-colors"
              >
                Review Answers
              </button>
              {onFinishTest && (
                <button
                  onClick={onFinishTest}
                  className="bg-[#E31837] hover:bg-[#B9122C] text-white px-5 py-2 rounded-lg text-xs font-bold shadow-md transition-colors"
                >
                  Return to Portal Hub
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
