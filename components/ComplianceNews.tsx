
import React from 'react';
import { REGULATORY_NEWS } from '../constants.tsx';

const ComplianceNews: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in h-full">
      <div className="glass rounded-[40px] p-8 space-y-8 border-nexus-border h-full flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-nexus-accent/10 flex items-center justify-center text-nexus-accent border border-nexus-accent/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" /></svg>
            </div>
            <p className="text-[11px] font-black text-nexus-text uppercase tracking-widest">Article Distribution</p>
          </div>
          <span className="text-[10px] font-mono font-bold text-nexus-textSecondary px-3 py-1 bg-nexus-bg rounded-lg border border-nexus-border">3 ACTIVE UPDATES</span>
        </div>

        <div className="space-y-5 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {REGULATORY_NEWS.map(news => (
            <a 
              key={news.id} 
              href={news.url} 
              className="group block p-6 rounded-3xl bg-nexus-bgSecondary/40 border border-nexus-border hover:border-nexus-accent/30 transition-all hover:bg-nexus-accentSoft shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[9px] font-black text-nexus-accent uppercase tracking-widest px-2 py-0.5 bg-nexus-accent/10 rounded-md border border-nexus-accent/20">{news.category}</span>
                <span className="text-[10px] font-mono font-bold text-nexus-textSecondary opacity-60">{news.date}</span>
              </div>
              <h4 className="text-sm font-bold text-nexus-text mb-4 leading-tight group-hover:text-nexus-accent transition-colors">
                {news.title}
              </h4>
              <div className="flex items-center gap-2 text-[9px] font-black text-nexus-textSecondary uppercase tracking-widest opacity-40">
                <span>Source Terminal:</span>
                <span className="text-nexus-text">{news.source}</span>
              </div>
            </a>
          ))}
        </div>

        <button className="w-full py-4 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-nexus-accent hover:bg-nexus-accent hover:text-white transition-all">
          View Full Ministry Archives
        </button>
      </div>
    </div>
  );
};

export default ComplianceNews;
