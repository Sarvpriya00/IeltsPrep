import React, { useState } from 'react';
import { Header } from './components/common/Header';
import { BandCalculatorModal } from './components/common/BandCalculatorModal';
import { PortalHome } from './components/dashboard/PortalHome';
import { ReadingTestPortal } from './components/reading/ReadingTestPortal';
import { ListeningTestPortal } from './components/listening/ListeningTestPortal';
import { WritingTestPortal } from './components/writing/WritingTestPortal';
import { SpeakingTestPortal } from './components/speaking/SpeakingTestPortal';
import { DrillsPortal } from './components/exercises/DrillsPortal';
import { ErrorNotebook } from './components/errors/ErrorNotebook';
import { AnalyticsDashboard } from './components/analytics/AnalyticsDashboard';
import { GuideAndPlan } from './components/guide/GuideAndPlan';
import { TestModule, FontSizeOption } from './data/types';
import { 
  getFontSizeOption, 
  setFontSizeOption 
} from './utils/storage';

export const App: React.FC = () => {
  const [activeModule, setActiveModule] = useState<TestModule>('home');
  const [fontSize, setFontSize] = useState<FontSizeOption>(getFontSizeOption());
  const [isBandCalculatorOpen, setIsBandCalculatorOpen] = useState<boolean>(false);

  const [activeReadingTestId, setActiveReadingTestId] = useState<string>('cam19-r1');
  const [activeListeningTestId, setActiveListeningTestId] = useState<string>('cam19-t1');

  const handleFontSizeChange = (newSize: FontSizeOption) => {
    setFontSize(newSize);
    setFontSizeOption(newSize);
  };

  const handleStartReadingTest = (testId: string) => {
    setActiveReadingTestId(testId);
    setActiveModule('reading');
  };

  const handleStartListeningTest = (testId: string) => {
    setActiveListeningTestId(testId);
    setActiveModule('listening');
  };

  const isExamTimerActive = activeModule === 'reading' || activeModule === 'listening';
  const examTimeSeconds = activeModule === 'reading' ? 3600 : 1800;

  return (
    <div className={`min-h-screen flex flex-col font-scale-${fontSize} bg-slate-100 text-slate-900 antialiased w-full`}>
      
      {/* Top Navigation Header */}
      <Header
        activeModule={activeModule}
        onSelectModule={setActiveModule}
        fontSize={fontSize}
        onFontSizeChange={handleFontSizeChange}
        onOpenBandCalculator={() => setIsBandCalculatorOpen(true)}
        timerActive={isExamTimerActive}
        timeRemaining={examTimeSeconds}
      />

      {/* Main Full-Width Portal Container */}
      <main className="flex-1 w-full py-2 px-3 sm:px-6">
        {activeModule === 'home' && (
          <PortalHome
            onSelectModule={setActiveModule}
            onStartReadingTest={handleStartReadingTest}
            onStartListeningTest={handleStartListeningTest}
          />
        )}

        {activeModule === 'reading' && (
          <ReadingTestPortal
            testId={activeReadingTestId}
            displayTheme="standard"
            fontSize={fontSize}
            onFinishTest={() => setActiveModule('home')}
          />
        )}

        {activeModule === 'listening' && (
          <ListeningTestPortal
            testId={activeListeningTestId}
            displayTheme="standard"
            fontSize={fontSize}
            onFinishTest={() => setActiveModule('home')}
          />
        )}

        {activeModule === 'writing' && (
          <WritingTestPortal
            displayTheme="standard"
            fontSize={fontSize}
          />
        )}

        {activeModule === 'speaking' && (
          <SpeakingTestPortal
            displayTheme="standard"
            fontSize={fontSize}
          />
        )}

        {activeModule === 'drills' && (
          <DrillsPortal
            displayTheme="standard"
            fontSize={fontSize}
          />
        )}

        {activeModule === 'errors' && (
          <ErrorNotebook
            displayTheme="standard"
            fontSize={fontSize}
          />
        )}

        {activeModule === 'analytics' && (
          <AnalyticsDashboard
            displayTheme="standard"
            fontSize={fontSize}
          />
        )}

        {activeModule === 'guide' && (
          <GuideAndPlan
            displayTheme="standard"
            fontSize={fontSize}
          />
        )}
      </main>

      {/* Full-Width Footer */}
      <footer className="bg-[#1E2433] text-slate-300 border-t border-slate-700 py-2.5 px-6 text-center text-xs font-mono w-full">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            Official Computer-Delivered IELTS Practice Test Simulator · Zero-DB Session Cache Active
          </div>
          <div className="text-slate-400">
            Free Public Online Test Portal
          </div>
        </div>
      </footer>

      {/* Band Score Calculator Modal */}
      <BandCalculatorModal
        isOpen={isBandCalculatorOpen}
        onClose={() => setIsBandCalculatorOpen(false)}
      />

    </div>
  );
};
export default App;
