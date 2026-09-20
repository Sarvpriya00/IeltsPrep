import React from 'react';
import { 
  BookOpen, 
  Headphones, 
  PenTool, 
  Mic, 
  Zap, 
  Flame, 
  BarChart3, 
  HelpCircle, 
  Play, 
  Award, 
  Clock, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { TestModule } from '../../data/types';
import { getAttempts, getErrorItems } from '../../utils/storage';

interface PortalHomeProps {
  onSelectModule: (module: TestModule) => void;
  onStartReadingTest: (testId: string) => void;
  onStartListeningTest: (testId: string) => void;
}

export const PortalHome: React.FC<PortalHomeProps> = ({
  onSelectModule,
  onStartReadingTest,
  onStartListeningTest,
}) => {
  const attempts = getAttempts();
  const errors = getErrorItems();

  const testCards = [
    {
      id: 'reading' as TestModule,
      title: 'Academic Reading Portal',
      subtitle: 'Cambridge 19 & 21 Official Tests (Passages 1, 2 & 3)',
      icon: <BookOpen className="w-6 h-6 text-[#E31837]" />,
      tag: '40 Questions · 60 Mins',
      desc: 'Split-screen passage view, text selection highlighter, 1-40 question palette grid, and automatic scoring.',
      btnLabel: 'Launch Reading Test',
      action: () => onStartReadingTest('cam19-r1'),
      color: 'border-slate-300 bg-white hover:border-[#E31837]',
    },
    {
      id: 'listening' as TestModule,
      title: 'Listening Test Portal',
      subtitle: 'Parts 1 to 4 Audio Simulation with Tapescripts',
      icon: <Headphones className="w-6 h-6 text-emerald-600" />,
      tag: '40 Questions · 30 Mins',
      desc: 'Audio player simulation with note completion, multiple choice, and live tapescript viewer.',
      btnLabel: 'Launch Listening Test',
      action: () => onStartListeningTest('cam19-t1'),
      color: 'border-slate-300 bg-white hover:border-emerald-600',
    },
    {
      id: 'writing' as TestModule,
      title: 'Writing Test Workspace',
      subtitle: 'Task 1 (Report) & Task 2 (Essay Editor)',
      icon: <PenTool className="w-6 h-6 text-amber-600" />,
      tag: 'Task 1 & 2 · Word Counter',
      desc: 'Dual prompt editor with live word count tracking, Band 9 sample essays, and IDP scoring rubric.',
      btnLabel: 'Open Writing Workspace',
      action: () => onSelectModule('writing'),
      color: 'border-slate-300 bg-white hover:border-amber-600',
    },
    {
      id: 'speaking' as TestModule,
      title: 'Virtual Speaking Simulator',
      subtitle: 'Part 1 Interview, Part 2 Cue Card, Part 3 Discussion',
      icon: <Mic className="w-6 h-6 text-blue-600" />,
      tag: 'Parts 1-3 · Prep Timer',
      desc: 'Examiner prompt simulator with 60-second preparation countdown and Band 9 transcripts.',
      btnLabel: 'Start Speaking Practice',
      action: () => onSelectModule('speaking'),
      color: 'border-slate-300 bg-white hover:border-blue-600',
    },
  ];

  return (
    <div className="w-full py-4 space-y-8 animate-fade-in text-slate-900">
      
      {/* Hero Banner */}
      <div className="bg-white border-2 border-[#E31837] rounded-2xl p-6 sm:p-8 shadow-sm w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <span className="bg-[#E31837] text-white px-3 py-1 rounded-md text-xs font-black uppercase tracking-wider shadow-sm">
                FREE PUBLIC IELTS PORTAL
              </span>
              <span className="text-emerald-700 text-xs font-bold flex items-center space-x-1 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Zero Registration Required</span>
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              IELTS Practice Examination Simulator
            </h1>
            <p className="text-slate-700 text-sm max-w-4xl leading-relaxed font-medium">
              Free computer-delivered IELTS practice portal. Practice Reading, Listening, Writing, and Speaking under official test center conditions with instant automated scoring and band calculation.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-300 p-5 rounded-xl flex items-center space-x-4 shadow-sm min-w-[220px]">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl border border-red-200">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs text-slate-600 font-extrabold uppercase tracking-wider">Practice Stats</div>
              <div className="text-2xl font-black text-slate-900 font-mono">{attempts.length} Tests Logged</div>
              <div className="text-[11px] text-slate-600 font-semibold">{errors.length} Missed Questions</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-200 text-xs w-full">
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-center space-x-3">
            <BookOpen className="w-5 h-5 text-red-600 flex-shrink-0" />
            <div>
              <div className="text-slate-600 font-medium">Reading Tests</div>
              <div className="text-slate-900 font-black font-mono text-sm">Cambridge 19 & 21</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-center space-x-3">
            <Headphones className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <div>
              <div className="text-slate-600 font-medium">Listening Parts</div>
              <div className="text-slate-900 font-black font-mono text-sm">Parts 1 to 4</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-center space-x-3">
            <PenTool className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <div>
              <div className="text-slate-600 font-medium">Writing Tasks</div>
              <div className="text-slate-900 font-black font-mono text-sm">Task 1 & Task 2</div>
            </div>
          </div>
          <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 flex items-center space-x-3">
            <Mic className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <div className="text-slate-600 font-medium">Speaking Cue Cards</div>
              <div className="text-slate-900 font-black font-mono text-sm">Parts 1, 2 & 3</div>
            </div>
          </div>
        </div>

      </div>

      {/* Main Portals Grid - Spans Full Width */}
      <div className="space-y-4 w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 flex items-center space-x-2">
            <span className="w-2 h-5 bg-[#E31837] rounded-sm inline-block" />
            <span>Select Practice Test</span>
          </h2>
          <span className="text-xs text-slate-600 font-mono font-bold">Function over form · Direct test access</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {testCards.map((card) => (
            <div
              key={card.id}
              className={`border rounded-xl p-6 transition-all duration-200 shadow-sm flex flex-col justify-between ${card.color}`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-slate-100 rounded-lg border border-slate-200">{card.icon}</div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded bg-slate-100 text-slate-800 border border-slate-300">
                    {card.tag}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">{card.title}</h3>
                  <div className="text-xs font-bold text-[#E31837]">{card.subtitle}</div>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">{card.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={card.action}
                  className="bg-[#E31837] hover:bg-[#B9122C] text-white px-5 py-2.5 rounded-lg font-extrabold text-xs shadow-sm transition-all flex items-center space-x-2 group"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{card.btnLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Secondary Skill Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        
        <div
          onClick={() => onSelectModule('drills')}
          className="bg-white border border-slate-300 hover:border-amber-500 p-5 rounded-xl cursor-pointer transition-all hover:scale-[1.02] shadow-sm group space-y-3"
        >
          <div className="p-2.5 bg-amber-100 text-amber-700 rounded-lg w-fit border border-amber-200">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-amber-700 transition-colors">Targeted Skill Drills</h4>
            <p className="text-xs text-slate-600 mt-1 font-medium">TFNG logic trainer, vocabulary collocations & grammar practice.</p>
          </div>
        </div>

        <div
          onClick={() => onSelectModule('errors')}
          className="bg-white border border-slate-300 hover:border-red-500 p-5 rounded-xl cursor-pointer transition-all hover:scale-[1.02] shadow-sm group space-y-3"
        >
          <div className="p-2.5 bg-red-100 text-red-600 rounded-lg w-fit border border-red-200">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-red-600 transition-colors">Mistakes Notebook</h4>
            <p className="text-xs text-slate-600 mt-1 font-medium">Review missed questions tracked during active session.</p>
          </div>
        </div>

        <div
          onClick={() => onSelectModule('analytics')}
          className="bg-white border border-slate-300 hover:border-emerald-500 p-5 rounded-xl cursor-pointer transition-all hover:scale-[1.02] shadow-sm group space-y-3"
        >
          <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-lg w-fit border border-emerald-200">
            <BarChart3 className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">Performance History</h4>
            <p className="text-xs text-slate-600 mt-1 font-medium">Visual band progression charts and test attempt history.</p>
          </div>
        </div>

        <div
          onClick={() => onSelectModule('guide')}
          className="bg-white border border-slate-300 hover:border-blue-500 p-5 rounded-xl cursor-pointer transition-all hover:scale-[1.02] shadow-sm group space-y-3"
        >
          <div className="p-2.5 bg-blue-100 text-blue-700 rounded-lg w-fit border border-blue-200">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">Exam Strategy & Plan</h4>
            <p className="text-xs text-slate-600 mt-1 font-medium">4-week structured preparation roadmap & band score tables.</p>
          </div>
        </div>

      </div>

    </div>
  );
};
