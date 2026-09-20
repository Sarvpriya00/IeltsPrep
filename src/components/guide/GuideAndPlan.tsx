import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  CheckCircle, 
  Award, 
  ShieldCheck
} from 'lucide-react';
import { DisplayTheme, FontSizeOption } from '../../data/types';

interface GuideAndPlanProps {
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
}

export const GuideAndPlan: React.FC<GuideAndPlanProps> = ({ displayTheme, fontSize }) => {
  const [activeTab, setActiveTab] = useState<'guide' | 'plan' | 'descriptors'>('guide');

  return (
    <div className={`w-full py-4 space-y-6 bg-slate-100 text-slate-900 font-scale-${fontSize} animate-fade-in`}>
      
      <div className="bg-[#1E2433] text-white p-6 rounded-2xl border-b-4 border-blue-500 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-600 text-white px-2.5 py-0.5 rounded text-xs font-black uppercase">
              IDP Official Reference
            </span>
            <span className="text-slate-300 text-xs font-mono">Exam Strategy Hub</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">IELTS Test Strategy & 4-Week Study Plan</h2>
        </div>

        <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-700 text-xs">
          <button
            onClick={() => setActiveTab('guide')}
            className={`px-3 py-1.5 rounded-lg font-extrabold transition-all ${activeTab === 'guide' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}
          >
            Exam Format Guide
          </button>
          <button
            onClick={() => setActiveTab('plan')}
            className={`px-3 py-1.5 rounded-lg font-extrabold transition-all ${activeTab === 'plan' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}
          >
            4-Week Plan
          </button>
          <button
            onClick={() => setActiveTab('descriptors')}
            className={`px-3 py-1.5 rounded-lg font-extrabold transition-all ${activeTab === 'descriptors' ? 'bg-blue-600 text-white shadow' : 'text-slate-300 hover:text-white'}`}
          >
            Band Descriptors
          </button>
        </div>
      </div>

      {activeTab === 'guide' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-4 shadow-sm w-full">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span>Computer-Delivered IELTS Overview</span>
            </h3>
            <p className="text-xs text-slate-800 leading-relaxed font-medium">
              Computer-delivered IELTS offers identical test content, timing, and scoring criteria as the paper-based test, but with faster results (3–5 days) and enhanced test center features such as split-screen reading view, text selection highlighters, and live essay word counters.
            </p>
            <div className="space-y-2 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900">Reading (60 Mins):</strong> 3 Long academic passages with 40 questions total.
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900">Listening (30 Mins):</strong> 4 Parts with 40 questions total. Audio plays once only.
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900">Writing (60 Mins):</strong> Task 1 (150 words min) & Task 2 (250 words min).
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <strong className="text-slate-900">Speaking (11–14 Mins):</strong> Face-to-face or video call interview in 3 parts.
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-4 shadow-sm w-full">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>IDP Test Center Day Protocol</span>
            </h3>
            <div className="space-y-3 text-xs text-slate-800 font-medium">
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Arrive 45 minutes prior to scheduled test time with your original passport/national ID.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Lockers will be provided for all personal electronics, watches, and bags.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Noise-cancelling headphones are provided at your individual computer station.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>Use the screen's "Review" button to flag questions for final verification.</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'plan' && (
        <div className="space-y-4 w-full">
          <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-4 shadow-sm w-full">
            <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span>Structured 4-Week IELTS Target Band 8.0 Roadmap</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 space-y-2">
                <div className="font-extrabold text-amber-900">Week 1: Foundations & Logic Drills</div>
                <p className="text-slate-800 font-medium">Master True/False/Not Given logic rules, paragraph matching techniques, and Task 1 graph vocabulary.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 space-y-2">
                <div className="font-extrabold text-blue-900">Week 2: Listening & Essay Structure</div>
                <p className="text-slate-800 font-medium">Complete Cambridge 19 Listening Parts 1–4 and write 5 Band 9 Task 2 essays with word count monitoring.</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 space-y-2">
                <div className="font-extrabold text-emerald-900">Week 3: Full Mock Tests & Error Logging</div>
                <p className="text-slate-800 font-medium">Take timed Reading and Listening tests under 60-min / 30-min limits. Review missed questions in Error Notebook.</p>
              </div>
              <div className="bg-red-50 p-4 rounded-xl border border-red-200 space-y-2">
                <div className="font-extrabold text-red-900">Week 4: Final Test Simulation & Polish</div>
                <p className="text-slate-800 font-medium">Practice Part 2 Cue Cards with 60-second prep timer. Finalize band score targets across all 4 skills.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'descriptors' && (
        <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-4 shadow-sm text-xs text-slate-800 font-medium w-full">
          <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
            <Award className="w-5 h-5 text-red-600" />
            <span>Official IELTS Overall Band Scores Summary</span>
          </h3>
          <div className="space-y-3 font-mono">
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong className="text-red-700 font-black">Band 9.0 (Expert User):</strong> Complete operational command; accurate, fluent with complete understanding.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong className="text-emerald-700 font-black">Band 8.0 (Very Good User):</strong> Fully operational command with only occasional unsystematic inaccuracies.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong className="text-blue-700 font-black">Band 7.0 (Good User):</strong> Operational command, though with occasional inaccuracies in complex situations.
            </div>
            <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
              <strong className="text-amber-800 font-black">Band 6.0 (Competent User):</strong> Effective command despite some inaccuracies, inappropriate usage, and misunderstandings.
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
