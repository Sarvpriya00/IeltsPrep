import React, { useState, useEffect } from 'react';
import { 
  Trash2, 
  Search, 
  CheckCircle,
} from 'lucide-react';
import { ErrorLogItem, DisplayTheme, FontSizeOption } from '../../data/types';
import { getErrorItems, removeErrorItem } from '../../utils/storage';

interface ErrorNotebookProps {
  displayTheme: DisplayTheme;
  fontSize: FontSizeOption;
}

export const ErrorNotebook: React.FC<ErrorNotebookProps> = ({ displayTheme, fontSize }) => {
  const [errorItems, setErrorItems] = useState<ErrorLogItem[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    setErrorItems(getErrorItems());
  }, []);

  const handleDelete = (id: string) => {
    removeErrorItem(id);
    setErrorItems(getErrorItems());
  };

  const filteredItems = errorItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.module === activeFilter;
    const matchesSearch = searchQuery === '' || 
      item.questionText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.userAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.correctAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`w-full py-4 space-y-6 bg-slate-100 text-slate-900 font-scale-${fontSize} animate-fade-in`}>
      
      {/* Header */}
      <div className="bg-[#1E2433] text-white p-6 rounded-2xl border-b-4 border-red-600 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-red-600 text-white px-2.5 py-0.5 rounded text-xs font-black uppercase">
              Zero-DB Session Cache
            </span>
            <span className="text-slate-300 text-xs font-mono">Mistake Notebook</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">Missed Questions Log ({errorItems.length})</h2>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search missed questions..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-red-500"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 text-xs w-full">
        {['all', 'reading', 'listening', 'drills'].map((mod) => (
          <button
            key={mod}
            onClick={() => setActiveFilter(mod)}
            className={`px-4 py-2 rounded-xl font-extrabold uppercase transition-all ${
              activeFilter === mod
                ? 'bg-[#E31837] text-white shadow-md'
                : 'bg-white text-slate-800 border border-slate-300 hover:bg-slate-200'
            }`}
          >
            {mod}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 ? (
        <div className="bg-white border border-slate-300 p-12 rounded-2xl text-center space-y-3 shadow-sm w-full">
          <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto opacity-80" />
          <h3 className="text-lg font-extrabold text-slate-900">No Missed Questions Found</h3>
          <p className="text-xs text-slate-600 max-w-sm mx-auto font-medium">
            You currently have no saved errors in this category. Complete practice tests to automatically record weak points!
          </p>
        </div>
      ) : (
        <div className="space-y-4 w-full">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-300 p-5 rounded-2xl space-y-3 shadow-sm hover:border-slate-400 transition-all w-full"
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <div className="flex items-center space-x-2 text-xs">
                  <span className="bg-red-100 text-red-700 font-extrabold px-2 py-0.5 rounded border border-red-300 uppercase font-mono">
                    {item.module} · Q{item.questionNum}
                  </span>
                  <span className="text-slate-500 text-[11px] font-mono">{item.dateAdded}</span>
                </div>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-slate-400 hover:text-red-600 p-1 transition-colors"
                  title="Remove from notebook"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <p className="text-sm font-bold text-slate-900">{item.questionText}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div>
                  <span className="text-slate-600 font-bold">Your Recorded Answer:</span>
                  <div className="font-mono font-extrabold text-red-600 mt-0.5">{item.userAnswer}</div>
                </div>
                <div>
                  <span className="text-slate-600 font-bold">Official Correct Answer:</span>
                  <div className="font-mono font-extrabold text-emerald-600 mt-0.5">{item.correctAnswer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
