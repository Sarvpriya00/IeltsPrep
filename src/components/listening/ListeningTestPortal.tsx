import React, { useState, useEffect, useRef } from 'react';
import { 
  Headphones, 
  Play, 
  Pause, 
  FileText, 
  Award,
  Volume2,
  VolumeX,
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { listeningData } from '../../data/listeningData';
import { ListeningTest, ListeningSection, DisplayTheme, FontSizeOption } from '../../data/types';
import { QuestionPalette } from '../common/QuestionPalette';
import { 
  calculateIELTSBand, 
  saveListeningProgress, 
  getListeningProgress, 
  clearListeningProgress 
} from '../../utils/storage';

interface ListeningTestPortalProps {
  testId?: string;
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
  onFinishTest?: () => void;
}

const getAudioUrl = (testKey: string, partNumber: number): string => {
  const parts = testKey.split('-');
  const book = parts[0] || 'cam19';
  const testNum = parts[1] ? parts[1].replace(/[^0-9]/g, '') || '1' : '1';
  
  if (book.toLowerCase().includes('cam19')) {
    return `/audio/cam19-test${testNum}-part${partNumber}.m4a`;
  } else {
    return `/audio/cam21-test${testNum}-part${partNumber}.mp3`;
  }
};

export const ListeningTestPortal: React.FC<ListeningTestPortalProps> = ({
  testId = 'cam19-t1',
  displayTheme,
  fontSize,
  onFinishTest,
}) => {
  const [activeTestId, setActiveTestId] = useState<string>(testId || 'cam19-t1');
  const rawTest = listeningData[activeTestId] || listeningData['cam19-t1'] || Object.values(listeningData)[0] || {};
  const testTitle = rawTest.title || 'Cambridge IELTS Listening Test';

  const sections: ListeningSection[] = rawTest.sections || (rawTest.parts ? [1, 2, 3, 4].map(partNum => {
    const p = rawTest.parts[partNum] || rawTest.parts[String(partNum)] || {};
    const questions: any[] = [];

    if (p.notes && Array.isArray(p.notes)) {
      p.notes.forEach((noteStr: string, idx: number) => {
        const qNum = (partNum - 1) * 10 + idx + 1;
        questions.push({
          num: qNum,
          text: noteStr,
          answer: (noteStr.split('Q')[1] || '').split(' ')[1] || 'answer'
        });
      });
    } else if (p.mcqs && Array.isArray(p.mcqs)) {
      p.mcqs.forEach((mcq: any) => {
        questions.push({
          num: mcq.num,
          text: mcq.question,
          options: mcq.options,
          answer: mcq.answer
        });
      });
    }

    if (questions.length === 0) {
      for (let i = 1; i <= 10; i++) {
        const qNum = (partNum - 1) * 10 + i;
        questions.push({ num: qNum, text: `Question ${qNum}`, answer: 'answer' });
      }
    }

    return {
      partNumber: partNum,
      title: p.title || `PART ${partNum}`,
      instruction: p.instruction || 'Listen carefully and answer questions.',
      questions,
      transcript: p.transcript || p.instruction || 'Official Audio Tapescript for Part ' + partNum
    };
  }) : []);

  const [activePartNumber, setActivePartNumber] = useState<number>(1);
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(1);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>(() => getListeningProgress(activeTestId));
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  
  // Real HTML5 Audio State
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(300);
  const [volume, setVolume] = useState<number>(1);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);
  
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<{ rawScore: number; bandScore: number; missed: any[] } | null>(null);

  const currentSection: ListeningSection = sections.find(s => s.partNumber === activePartNumber) || sections[0] || {
    partNumber: 1,
    title: 'PART 1',
    instruction: 'Listen carefully to the official audio track...',
    questions: [],
    transcript: ''
  };

  const audioUrl = getAudioUrl(activeTestId, activePartNumber);

  useEffect(() => {
    setUserAnswers(getListeningProgress(activeTestId));
    setIsSubmitted(false);
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.load();
    }
  }, [activeTestId, activePartNumber]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }
  };

  const handleResetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setCurrentTime(0);
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleSeek = (newTime: number) => {
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleToggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (audioRef.current) {
      audioRef.current.muted = nextMuted;
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '00:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleAnswerChange = (qNum: number, val: string) => {
    setUserAnswers(prev => {
      const updated = { ...prev, [qNum]: val };
      saveListeningProgress(activeTestId, updated);
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
    if (num <= 10) setActivePartNumber(1);
    else if (num <= 20) setActivePartNumber(2);
    else if (num <= 30) setActivePartNumber(3);
    else setActivePartNumber(4);
  };

  const handleSubmitTest = () => {
    let rawScore = 0;
    const missed: any[] = [];

    sections.forEach(sec => {
      sec.questions.forEach(q => {
        const userAns = (userAnswers[q.num] || '').toString().trim().toLowerCase();
        const correctAns = (q.answer || '').toString().trim().toLowerCase();

        if (userAns && userAns === correctAns) {
          rawScore++;
        } else {
          missed.push({
            num: q.num,
            questionText: q.text,
            userAns: userAnswers[q.num] || '(Blank)',
            correctAns: q.answer,
            partTitle: sec.title,
          });
        }
      });
    });

    const bandScore = calculateIELTSBand(rawScore, 'listening');
    clearListeningProgress(activeTestId);

    setTestResult({ rawScore, bandScore, missed });
    setIsSubmitted(true);
  };

  const sectionsConfig = [
    { id: 1, title: 'Part 1 (Q1-10)', questionRange: [1, 10] as [number, number] },
    { id: 2, title: 'Part 2 (Q11-20)', questionRange: [11, 20] as [number, number] },
    { id: 3, title: 'Part 3 (Q21-30)', questionRange: [21, 30] as [number, number] },
    { id: 4, title: 'Part 4 (Q31-40)', questionRange: [31, 40] as [number, number] },
  ];

  return (
    <div className={`flex flex-col h-[calc(100vh-125px)] w-full bg-slate-100 text-slate-900 font-scale-${fontSize}`}>
      
      {/* Top Banner */}
      <div className="bg-[#1E2433] text-white px-6 py-2.5 flex items-center justify-between border-b border-slate-700 w-full flex-shrink-0">
        <div className="flex items-center space-x-3">
          <Headphones className="w-5 h-5 text-emerald-400" />
          <div>
            <h2 className="font-extrabold text-sm text-white">{testTitle}</h2>
            <div className="text-xs text-slate-300 font-medium">Official IELTS Listening Audio Portal</div>
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
            {Object.keys(listeningData).map(key => (
              <option key={key} value={key}>
                {listeningData[key].title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
        onError={(e) => {
          console.warn("Audio playback issue detected for:", audioUrl, e);
        }}
      />

      {/* Interactive Audio Player Toolbar */}
      <div className="bg-white border-b border-slate-300 px-6 py-3 flex flex-wrap items-center justify-between gap-4 shadow-sm w-full flex-shrink-0">
        
        {/* Play/Pause & Reset */}
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-[#E31837] hover:bg-[#B9122C] text-white flex items-center justify-center shadow-md transition-transform hover:scale-105"
            title={isPlaying ? 'Pause Audio' : 'Play Audio'}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white ml-0.5" />}
          </button>
          
          <button
            onClick={handleResetAudio}
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300 transition-colors"
            title="Reset Audio to Beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          <div>
            <div className="text-xs font-extrabold text-slate-900 flex items-center space-x-2">
              <span>{currentSection.title} Audio Track</span>
              {isPlaying && <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />}
            </div>
            <div className="text-[11px] text-slate-600 font-mono flex items-center space-x-1.5">
              <span>Official Cambridge Recording</span>
              <span className="text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Native Audio Player
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Seek Bar */}
        <div className="flex-1 max-w-md flex items-center space-x-3">
          <span className="text-xs font-mono font-bold text-slate-700 min-w-[40px] text-right">
            {formatTime(currentTime)}
          </span>
          
          <input
            type="range"
            min={0}
            max={duration || 100}
            value={currentTime}
            onChange={(e) => handleSeek(Number(e.target.value))}
            className="w-full accent-[#E31837] h-2 bg-slate-200 rounded-lg cursor-pointer border border-slate-300"
          />

          <span className="text-xs font-mono font-bold text-slate-700 min-w-[40px]">
            {formatTime(duration)}
          </span>
        </div>

        {/* Volume & Tapescript Controls */}
        <div className="flex items-center space-x-3 text-xs">

          {/* Volume Button */}
          <button
            onClick={handleToggleMute}
            className="p-2 text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-300"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          </button>

          {/* Transcript Toggle */}
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-bold border transition-all ${
              showTranscript
                ? 'bg-emerald-100 text-emerald-800 border-emerald-400'
                : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{showTranscript ? 'Hide Tapescript' : 'View Tapescript'}</span>
          </button>
        </div>

      </div>

      <div className="flex-1 w-full grid grid-cols-1 lg:grid-cols-4 gap-6 p-6 overflow-y-auto">
        
        <div className={`space-y-6 ${showTranscript ? 'lg:col-span-2' : 'lg:col-span-4'}`}>
          
          <div className="flex items-center space-x-2 border-b border-slate-300 pb-3">
            {sections.map((sec) => (
              <button
                key={sec.partNumber}
                onClick={() => setActivePartNumber(sec.partNumber)}
                className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all ${
                  activePartNumber === sec.partNumber
                    ? 'bg-[#E31837] text-white shadow-sm'
                    : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-100'
                }`}
              >
                Part {sec.partNumber}
              </button>
            ))}
          </div>

          <div className="bg-white border border-slate-300 p-5 rounded-xl space-y-4 shadow-sm">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
              <span className="w-2 h-4 bg-emerald-600 rounded-sm" />
              <span>{currentSection.title}</span>
            </h3>

            <div className="bg-slate-100 p-3 rounded-lg border border-slate-300 font-mono text-xs text-slate-900 font-extrabold">
              {currentSection.instruction}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {currentSection.questions.map((q) => (
                <div
                  key={q.num}
                  id={`q-${q.num}`}
                  className={`p-4 rounded-xl border transition-all ${
                    currentQuestionNum === q.num
                      ? 'border-emerald-600 bg-emerald-50 ring-2 ring-emerald-500'
                      : 'border-slate-300 bg-white'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <span className="bg-emerald-600 text-white font-extrabold text-xs px-2 py-0.5 rounded font-mono">
                        Q{q.num}
                      </span>
                      <p className="text-xs font-extrabold text-slate-900">{q.text}</p>
                    </div>

                    {q.options ? (
                      <div className="space-y-1.5 pt-1">
                        {q.options.map((opt, oIdx) => (
                          <label
                            key={oIdx}
                            onClick={() => handleAnswerChange(q.num, opt.charAt(0))}
                            className={`flex items-center space-x-2.5 p-2 rounded-md border text-xs cursor-pointer transition-colors ${
                              userAnswers[q.num] === opt.charAt(0)
                                ? 'bg-emerald-50 border-emerald-600 text-slate-900 font-bold'
                                : 'bg-slate-50 border-slate-300 text-slate-800 hover:bg-slate-100'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`listening-q-${q.num}`}
                              checked={userAnswers[q.num] === opt.charAt(0)}
                              onChange={() => {}}
                              className="accent-emerald-600"
                            />
                            <span>{opt}</span>
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        type="text"
                        value={userAnswers[q.num] || ''}
                        onChange={(e) => handleAnswerChange(q.num, e.target.value)}
                        placeholder="Type answer..."
                        className="bg-white text-slate-900 font-mono font-bold text-xs border border-slate-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-emerald-600"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

        {showTranscript && (
          <div className="lg:col-span-2 bg-white border border-slate-300 p-5 rounded-xl space-y-3 shadow-md overflow-y-auto max-h-[calc(100vh-250px)]">
            <h4 className="font-extrabold text-sm text-emerald-700 flex items-center space-x-2 border-b border-slate-200 pb-2">
              <FileText className="w-4 h-4" />
              <span>Official Part {activePartNumber} Audio Tape Script</span>
            </h4>
            <div className="text-xs text-slate-800 leading-relaxed whitespace-pre-line font-sans font-medium">
              {currentSection.transcript || 'Audio tape script transcription loading...'}
            </div>
          </div>
        )}

      </div>

      <QuestionPalette
        totalQuestions={40}
        currentQuestionNum={currentQuestionNum}
        userAnswers={userAnswers}
        flaggedQuestions={flaggedQuestions}
        onSelectQuestion={handleSelectQuestion}
        onToggleFlag={handleToggleFlag}
        sections={sectionsConfig}
        activeSectionId={activePartNumber}
        onSelectSection={setActivePartNumber}
        onSubmitTest={handleSubmitTest}
      />

      {isSubmitted && testResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-slate-300 text-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 space-y-6">
            <div className="text-center space-y-2 border-b border-slate-200 pb-4">
              <div className="inline-flex p-3 bg-emerald-100 text-emerald-600 rounded-full border border-emerald-200">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Listening Test Completed!</h3>
              <p className="text-xs text-slate-600 font-medium">{testTitle} · Official Band Evaluation</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-1">
                <div className="text-xs text-slate-600 uppercase font-bold">Raw Score</div>
                <div className="text-3xl font-black text-emerald-600 font-mono">{testResult.rawScore} / 40</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-center space-y-1">
                <div className="text-xs text-emerald-700 uppercase font-black">Official IELTS Band</div>
                <div className="text-3xl font-black text-emerald-600 font-mono">Band {testResult.bandScore.toFixed(1)}</div>
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
