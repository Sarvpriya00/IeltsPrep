import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Sparkles, 
  Play, 
  RotateCcw, 
  UserCheck
} from 'lucide-react';
import { speakingData } from '../../data/speakingData';
import { DisplayTheme, FontSizeOption } from '../../data/types';

interface SpeakingTestPortalProps {
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
}

export const SpeakingTestPortal: React.FC<SpeakingTestPortalProps> = ({ displayTheme, fontSize }) => {
  const [activePartNumber, setActivePartNumber] = useState<number>(2);
  
  const currentPartData = speakingData.parts.find(p => p.part === activePartNumber) || speakingData.parts[0];
  const topics = currentPartData.topics || [];
  const cards = currentPartData.cards || [];

  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);
  const [selectedCardIdx, setSelectedCardIdx] = useState<number>(0);

  const [prepTimeLeft, setPrepTimeLeft] = useState<number>(60);
  const [isPrepRunning, setIsPrepRunning] = useState<boolean>(false);
  const [speakTimeLeft, setSpeakTimeLeft] = useState<number>(120);
  const [isSpeakRunning, setIsSpeakRunning] = useState<boolean>(false);

  useEffect(() => {
    let timer: any = null;
    if (isPrepRunning && prepTimeLeft > 0) {
      timer = setInterval(() => setPrepTimeLeft(prev => prev - 1), 1000);
    } else if (prepTimeLeft === 0 && isPrepRunning) {
      setIsPrepRunning(false);
      setIsSpeakRunning(true);
    }
    return () => clearInterval(timer);
  }, [isPrepRunning, prepTimeLeft]);

  useEffect(() => {
    let timer: any = null;
    if (isSpeakRunning && speakTimeLeft > 0) {
      timer = setInterval(() => setSpeakTimeLeft(prev => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isSpeakRunning, speakTimeLeft]);

  const handleStartPrep = () => {
    setPrepTimeLeft(60);
    setSpeakTimeLeft(120);
    setIsPrepRunning(true);
    setIsSpeakRunning(false);
  };

  const handleResetTimers = () => {
    setIsPrepRunning(false);
    setIsSpeakRunning(false);
    setPrepTimeLeft(60);
    setSpeakTimeLeft(120);
  };

  const activeCard = cards[selectedCardIdx] || cards[0];
  const activeTopic = topics[selectedTopicIdx] || topics[0];

  return (
    <div className={`w-full py-4 space-y-6 bg-slate-100 text-slate-900 font-scale-${fontSize} animate-fade-in`}>
      
      <div className="bg-[#1E2433] text-white p-6 rounded-2xl border-b-4 border-[#E31837] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-[#E31837] text-white px-2.5 py-0.5 rounded text-xs font-black uppercase">
              IDP Virtual Examiner
            </span>
            <span className="text-slate-300 text-xs font-mono">{currentPartData.duration}</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">IELTS Speaking Simulator</h2>
        </div>

        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs">
          {speakingData.parts.map((p) => (
            <button
              key={p.part}
              onClick={() => {
                setActivePartNumber(p.part);
                setSelectedTopicIdx(0);
                setSelectedCardIdx(0);
                handleResetTimers();
              }}
              className={`px-3.5 py-1.5 rounded-lg font-extrabold transition-all ${
                activePartNumber === p.part ? 'bg-[#E31837] text-white shadow' : 'text-slate-300 hover:text-white'
              }`}
            >
              Part {p.part}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-4 shadow-sm w-full">
            <div className="flex items-center space-x-3 border-b border-slate-200 pb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 border border-blue-200 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm">IDP Certified Examiner Prompt</h3>
                <div className="text-xs text-slate-600 font-medium">{currentPartData.title}</div>
              </div>
            </div>

            {activePartNumber === 2 && activeCard && (
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-300 space-y-3 shadow-inner">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-amber-800 uppercase tracking-wider">Candidate Cue Card Task:</span>
                  <select
                    value={selectedCardIdx}
                    onChange={(e) => setSelectedCardIdx(Number(e.target.value))}
                    className="bg-white border border-slate-300 text-xs text-slate-900 rounded px-2 py-1 font-bold"
                  >
                    {cards.map((c, idx) => (
                      <option key={c.id} value={idx}>Cue Card #{idx + 1}</option>
                    ))}
                  </select>
                </div>
                <h4 className="text-base font-black text-slate-900">{activeCard.topic}</h4>
                <div className="text-xs text-slate-800 space-y-1.5 pl-4 list-disc font-medium">
                  <p className="font-bold text-slate-700">You should say:</p>
                  {activeCard.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </div>
                {activeCard.followUp && (
                  <div className="pt-2 text-xs text-amber-900 font-bold border-t border-slate-200">
                    Follow-up question: "{activeCard.followUp}"
                  </div>
                )}
              </div>
            )}

            {activePartNumber !== 2 && activeTopic && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-extrabold text-slate-700 uppercase">Topic Category:</span>
                  <select
                    value={selectedTopicIdx}
                    onChange={(e) => setSelectedTopicIdx(Number(e.target.value))}
                    className="bg-white border border-slate-300 text-xs text-slate-900 rounded px-2 py-1 font-bold"
                  >
                    {topics.map((t, idx) => (
                      <option key={idx} value={idx}>{t.name}</option>
                    ))}
                  </select>
                </div>
                <h4 className="font-extrabold text-sm text-slate-900">{activeTopic.name}</h4>
                {activeTopic.questions.map((q, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-lg border border-slate-300 text-xs sm:text-sm text-slate-900 font-semibold flex items-start space-x-3">
                    <span className="bg-[#E31837] text-white font-extrabold text-xs px-2 py-0.5 rounded font-mono">Q{idx + 1}</span>
                    <span>{q}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white border border-slate-300 p-5 rounded-2xl space-y-3 shadow-sm w-full">
            <h4 className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Key Fluency & Coherence Tips for Band 8.5+</span>
            </h4>
            <div className="text-xs text-slate-800 space-y-1.5 font-medium">
              <p>• Avoid repetitive hesitation markers (e.g. 'um', 'ah'). Use discourse markers: <em>"To be perfectly honest...", "From my perspective...", "Looking back at it..."</em></p>
              <p>• Extend your answers with concrete examples, personal experiences, or logical consequences.</p>
            </div>
          </div>

        </div>

        <div className="space-y-6">
          
          {activePartNumber === 2 && (
            <div className="bg-[#1E2433] text-white border border-slate-700 p-6 rounded-2xl space-y-5 shadow-xl w-full">
              <h3 className="font-bold text-sm text-white flex items-center space-x-2">
                <Clock className="w-4 h-4 text-red-500" />
                <span>Official Timed Cue Card Test</span>
              </h3>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-1 text-center">
                <div className="text-xs text-slate-300 font-bold uppercase">1-Min Preparation Timer</div>
                <div className={`text-3xl font-black font-mono ${isPrepRunning ? 'text-amber-400 animate-pulse' : 'text-white'}`}>
                  00:{prepTimeLeft.toString().padStart(2, '0')}
                </div>
              </div>

              <div className="bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-1 text-center">
                <div className="text-xs text-slate-300 font-bold uppercase">2-Min Speech Timer</div>
                <div className={`text-3xl font-black font-mono ${isSpeakRunning ? 'text-emerald-400 animate-pulse' : 'text-white'}`}>
                  {Math.floor(speakTimeLeft / 60)}:{(speakTimeLeft % 60).toString().padStart(2, '0')}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleStartPrep}
                  className="flex-1 bg-[#E31837] hover:bg-[#B9122C] text-white py-2 rounded-lg font-bold text-xs transition-colors flex items-center justify-center space-x-1.5 shadow-md"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Start 1-Min Prep</span>
                </button>
                <button
                  onClick={handleResetTimers}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                  title="Reset Timers"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
