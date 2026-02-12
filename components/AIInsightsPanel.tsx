
import React, { useState, useEffect } from 'react';
import { getNetworkInsights } from '../services/geminiService.ts';
import { MOCK_PERFORMANCE, MOCK_GENEALOGY } from '../constants.tsx';

const AIInsightsPanel: React.FC = () => {
  const [insights, setInsights] = useState<{ summary: string; opportunities: string[]; riskWarnings: string[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

  const fetchInsights = async () => {
    setLoading(true);
    const data = await getNetworkInsights({ performance: MOCK_PERFORMANCE, structure: MOCK_GENEALOGY });
    setInsights(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  return (
    <div className="glass rounded-[32px] p-10 relative overflow-hidden transition-all hover:shadow-2xl hover:shadow-black/20">
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 blur-[120px] -z-10 pointer-events-none"></div>
      
      <div className="flex items-center gap-6 mb-10">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10" style={{ color: accentColor }}>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        </div>
        <div>
          <h2 className="text-xl font-bold dark:text-white tracking-tight">Strategy Node</h2>
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Generative Intelligence Optimization</p>
        </div>
        <button 
          onClick={fetchInsights}
          disabled={loading}
          className="ml-auto glass p-3 rounded-xl transition-all hover:bg-white/10 disabled:opacity-50"
        >
          <svg className={`w-4 h-4 text-slate-400 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      {loading ? (
        <div className="space-y-6 py-6">
          <div className="h-2 bg-white/5 rounded-full w-full animate-pulse"></div>
          <div className="h-2 bg-white/5 rounded-full w-2/3 animate-pulse"></div>
          <div className="h-2 bg-white/5 rounded-full w-4/5 animate-pulse"></div>
        </div>
      ) : insights ? (
        <div className="space-y-10 animate-fade-in">
          <div>
            <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-4">Executive Summary</h3>
            <p className="text-slate-300 leading-relaxed text-lg font-light tracking-tight italic">"{insights.summary}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <h4 className="text-sm font-bold dark:text-slate-100 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: accentColor }}></span> 
                Strategic Opportunities
              </h4>
              <ul className="space-y-4">
                {insights.opportunities.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-400 text-sm font-medium border-l border-white/5 pl-4 hover:border-nexus-primary transition-colors py-1">
                    <span className="text-slate-600 font-mono text-[10px] mt-0.5">0{idx+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-sm font-bold dark:text-slate-100 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> 
                Risk Parameters
              </h4>
              <ul className="space-y-4">
                {insights.riskWarnings.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-slate-400 text-sm font-medium border-l border-white/5 pl-4 hover:border-amber-500 transition-colors py-1">
                    <span className="text-slate-600 font-mono text-[10px] mt-0.5">!</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AIInsightsPanel;
