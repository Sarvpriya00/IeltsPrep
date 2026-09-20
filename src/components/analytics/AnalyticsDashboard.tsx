import React, { useState, useEffect } from 'react';
import { 
  Award, 
  BookOpen, 
  Headphones, 
  History
} from 'lucide-react';
import { UserTestAttempt, DisplayTheme, FontSizeOption } from '../../data/types';
import { getAttempts } from '../../utils/storage';

interface AnalyticsDashboardProps {
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
}

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ displayTheme, fontSize }) => {
  const [attempts, setAttempts] = useState<UserTestAttempt[]>([]);

  useEffect(() => {
    setAttempts(getAttempts());
  }, []);

  const readingAttempts = attempts.filter(a => a.module === 'reading');
  const listeningAttempts = attempts.filter(a => a.module === 'listening');

  const avgReadingBand = readingAttempts.length > 0
    ? (readingAttempts.reduce((acc, curr) => acc + curr.bandScore, 0) / readingAttempts.length).toFixed(1)
    : '7.5';

  const avgListeningBand = listeningAttempts.length > 0
    ? (listeningAttempts.reduce((acc, curr) => acc + curr.bandScore, 0) / listeningAttempts.length).toFixed(1)
    : '8.0';

  const overallBand = ((Number(avgReadingBand) + Number(avgListeningBand)) / 2).toFixed(1);

  return (
    <div className={`w-full py-4 space-y-6 bg-slate-100 text-slate-900 font-scale-${fontSize} animate-fade-in`}>
      
      <div className="bg-[#1E2433] text-white p-6 rounded-2xl border-b-4 border-emerald-500 shadow-xl flex items-center justify-between w-full">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-500 text-black px-2.5 py-0.5 rounded text-xs font-black uppercase">
              Performance Insights
            </span>
            <span className="text-slate-300 text-xs font-mono">Real-time Analytics</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">IELTS Performance Dashboard</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
        
        <div className="bg-gradient-to-br from-red-50 to-white border border-red-200 p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-extrabold text-red-700 uppercase tracking-wider">Estimated Overall Band</div>
            <div className="text-4xl font-black text-slate-900 font-mono">{overallBand}</div>
            <div className="text-xs text-slate-600 font-medium">Based on {attempts.length} mock tests</div>
          </div>
          <div className="p-3.5 bg-red-100 text-red-600 rounded-2xl border border-red-200">
            <Award className="w-8 h-8" />
          </div>
        </div>

        <div className="bg-white border border-slate-300 p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Reading Mean Band</div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">Band {avgReadingBand}</div>
            <div className="text-xs text-slate-500">{readingAttempts.length} Tests Completed</div>
          </div>
          <div className="p-3.5 bg-blue-100 text-blue-700 rounded-2xl border border-blue-200">
            <BookOpen className="w-7 h-7" />
          </div>
        </div>

        <div className="bg-white border border-slate-300 p-6 rounded-2xl shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <div className="text-xs font-bold text-slate-600 uppercase tracking-wider">Listening Mean Band</div>
            <div className="text-3xl font-extrabold text-slate-900 font-mono">Band {avgListeningBand}</div>
            <div className="text-xs text-slate-500">{listeningAttempts.length} Tests Completed</div>
          </div>
          <div className="p-3.5 bg-emerald-100 text-emerald-700 rounded-2xl border border-emerald-200">
            <Headphones className="w-7 h-7" />
          </div>
        </div>

      </div>

      <div className="bg-white border border-slate-300 p-6 rounded-2xl space-y-4 shadow-sm w-full">
        <h3 className="font-extrabold text-slate-900 text-base flex items-center space-x-2">
          <History className="w-5 h-5 text-amber-600" />
          <span>Recent Examination Attempts</span>
        </h3>

        {attempts.length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-500 font-medium">
            No test history logged yet. Complete mock tests to see attempt records.
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600 uppercase font-mono font-bold">
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Module</th>
                  <th className="py-2.5 px-3">Test ID</th>
                  <th className="py-2.5 px-3">Raw Score</th>
                  <th className="py-2.5 px-3">Band Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-mono text-slate-900">
                {attempts.map((att) => (
                  <tr key={att.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-3">{att.date}</td>
                    <td className="py-3 px-3 uppercase font-extrabold text-amber-700">{att.module}</td>
                    <td className="py-3 px-3 text-slate-600 font-bold">{att.testId}</td>
                    <td className="py-3 px-3 text-emerald-700 font-extrabold">{att.score} / {att.totalQuestions}</td>
                    <td className="py-3 px-3">
                      <span className="bg-[#E31837] text-white font-extrabold px-2.5 py-0.5 rounded text-xs shadow-sm">
                        Band {att.bandScore.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
