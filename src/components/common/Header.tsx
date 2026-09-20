import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Eye, 
  EyeOff, 
  Calculator, 
  Home, 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  Zap, 
  Flame, 
  BarChart3, 
  HelpCircle
} from 'lucide-react';
import { TestModule, FontSizeOption } from '../../data/types';

interface HeaderProps {
  activeModule: TestModule;
  onSelectModule: (module: TestModule) => void;
  fontSize: FontSizeOption;
  onFontSizeChange: (size: FontSizeOption) => void;
  onOpenBandCalculator: () => void;
  timerActive?: boolean;
  timeRemaining?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeModule,
  onSelectModule,
  fontSize,
  onFontSizeChange,
  onOpenBandCalculator,
  timerActive = false,
  timeRemaining = 3600,
}) => {
  const [showTimer, setShowTimer] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(timeRemaining);

  useEffect(() => {
    setSeconds(timeRemaining);
  }, [timeRemaining]);

  useEffect(() => {
    let interval: any = null;
    if (timerActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const isWarningTime = seconds <= 300 && seconds > 0;

  const modules: { id: TestModule; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Portal Hub', icon: <Home className="w-4 h-4" /> },
    { id: 'reading', label: 'Reading', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'listening', label: 'Listening', icon: <Headphones className="w-4 h-4" /> },
    { id: 'writing', label: 'Writing', icon: <PenTool className="w-4 h-4" /> },
    { id: 'speaking', label: 'Speaking', icon: <Mic className="w-4 h-4" /> },
    { id: 'drills', label: 'Skill Drills', icon: <Zap className="w-4 h-4" /> },
    { id: 'errors', label: 'Mistake Log', icon: <Flame className="w-4 h-4" /> },
    { id: 'analytics', label: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'guide', label: 'Exam Guide', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#1E2433] text-white border-b-4 border-[#E31837] shadow-lg w-full">
      {/* Top Banner - 100% Full Width */}
      <div className="w-full px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-700/80">
        
        <div className="flex items-center space-x-3">
          <span className="bg-[#E31837] text-white px-2.5 py-0.5 rounded font-black text-xs tracking-wider uppercase shadow-sm">
            IELTS PORTAL
          </span>
          <span className="font-extrabold text-slate-200 tracking-tight hidden sm:inline">
            Computer-Delivered Practice Test Center
          </span>
        </div>

        {timerActive && (
          <div className="flex items-center space-x-3 bg-slate-900 px-3.5 py-1.5 rounded-lg border border-slate-700 shadow-inner">
            <div className="flex items-center space-x-2">
              <Clock className={`w-4 h-4 ${isWarningTime ? 'text-red-500 animate-pulse' : 'text-amber-400'}`} />
              <span className="text-slate-300 uppercase font-bold text-[10px] tracking-wider">Time Remaining:</span>
              <span className={`font-mono text-base font-extrabold ${isWarningTime ? 'text-red-400 animate-pulse' : 'text-amber-300'}`}>
                {showTimer ? formatTime(seconds) : '••:••'}
              </span>
            </div>
            <button
              onClick={() => setShowTimer(!showTimer)}
              className="text-slate-400 hover:text-white transition-colors p-1"
              title={showTimer ? 'Hide Timer' : 'Show Timer'}
            >
              {showTimer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenBandCalculator}
            className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 text-white px-3 py-1 rounded-md border border-slate-600 transition-colors shadow-sm font-bold"
            title="IELTS Band Score Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-red-400" />
            <span>Band Calculator</span>
          </button>

          <div className="flex items-center bg-slate-900 rounded-md border border-slate-700 p-0.5 text-[11px]">
            <button
              onClick={() => onFontSizeChange('sm')}
              className={`px-2 py-0.5 rounded ${fontSize === 'sm' ? 'bg-[#E31837] text-white font-extrabold' : 'text-slate-300 hover:text-white'}`}
              title="Small text"
            >
              A-
            </button>
            <button
              onClick={() => onFontSizeChange('md')}
              className={`px-2 py-0.5 rounded ${fontSize === 'md' ? 'bg-[#E31837] text-white font-extrabold' : 'text-slate-300 hover:text-white'}`}
              title="Standard text"
            >
              A
            </button>
            <button
              onClick={() => onFontSizeChange('lg')}
              className={`px-2 py-0.5 rounded ${fontSize === 'lg' ? 'bg-[#E31837] text-white font-extrabold' : 'text-slate-300 hover:text-white'}`}
              title="Large text"
            >
              A+
            </button>
          </div>
        </div>

      </div>

      {/* Navigation - 100% Full Width */}
      <nav className="w-full px-4 sm:px-6 py-1.5 overflow-x-auto no-scrollbar">
        <div className="flex items-center space-x-1 sm:space-x-2">
          {modules.map((m) => {
            const isActive = activeModule === m.id;
            return (
              <button
                key={m.id}
                onClick={() => onSelectModule(m.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-md text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-[#E31837] text-white shadow-md'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {m.icon}
                <span>{m.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
