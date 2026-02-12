import React from 'react';
import AnalyticsBoard from './AnalyticsBoard.tsx';
import PortfolioHandler from './PortfolioHandler.tsx';
import FinancialLedger from './FinancialLedger.tsx';
import AIInsightsPanel from './AIInsightsPanel.tsx';
import ComplianceNews from './ComplianceNews.tsx';
import { UIPreferences } from '../types.ts';
import { LEADERBOARD } from '../constants.tsx';

const Overview: React.FC<{ preferences: UIPreferences }> = ({ preferences }) => {
  return (
    <div className="space-y-12 md:space-y-16 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-black text-nexus-text tracking-tighter leading-tight">Terminal Hub</h1>
          <p className="text-nexus-textSecondary text-lg md:text-xl font-light leading-relaxed">
            Welcome back. <span className="text-nexus-accent font-bold">Node Identity Verified</span>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <button className="px-10 py-4 glass rounded-[20px] text-[10px] font-black uppercase tracking-widest text-nexus-text hover:bg-white/5 shadow-xl">Export TDS Data</button>
          <button className="px-10 py-4 bg-nexus-accent text-white rounded-[20px] text-[10px] font-black uppercase tracking-widest shadow-2xl shadow-nexus-accent/20 hover:scale-105 active:scale-95 transition-all">Start Cycle Audit</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {/* Real-time Charts */}
        <AnalyticsBoard />
        
        {/* Engagement Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
           {/* Daily Progress Section */}
           <div className="glass p-8 rounded-[40px] border-nexus-border space-y-8">
              <div className="flex justify-between items-center">
                 <h3 className="text-[11px] font-black text-nexus-textSecondary uppercase tracking-[0.2em]">Cycle Progress</h3>
                 <span className="text-nexus-accent text-xs font-bold">82%</span>
              </div>
              <div className="space-y-4">
                 <div className="h-4 bg-nexus-bgSecondary rounded-full overflow-hidden border border-nexus-border">
                    <div className="h-full bg-nexus-accent shadow-[0_0_15px_rgba(0,208,156,0.5)] transition-all duration-1000" style={{ width: '82%' }}></div>
                 </div>
                 <p className="text-[11px] text-nexus-textSecondary font-medium text-center">₹4.2L / ₹5.0L Weekly Milestone</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-2xl bg-nexus-accentSoft border border-nexus-accent/10">
                    <p className="text-[9px] font-black text-nexus-textSecondary uppercase mb-1">Downline Activity</p>
                    <p className="text-xl font-bold">18 Active</p>
                 </div>
                 <div className="p-4 rounded-2xl bg-nexus-accentSoft border border-nexus-accent/10">
                    <p className="text-[9px] font-black text-nexus-textSecondary uppercase mb-1">New PV</p>
                    <p className="text-xl font-bold">+2,450</p>
                 </div>
              </div>
           </div>

           {/* Leaderboard Section */}
           <div className="glass p-8 rounded-[40px] border-nexus-border space-y-8 xl:col-span-2">
              <div className="flex justify-between items-center">
                 <h3 className="text-[11px] font-black text-nexus-textSecondary uppercase tracking-[0.2em]">Top Node Performers</h3>
                 <button className="text-[10px] font-bold text-nexus-accent uppercase hover:underline">View All</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 {LEADERBOARD.map((item, idx) => (
                   <div key={idx} className="flex items-center justify-between p-4 rounded-3xl bg-nexus-bgSecondary/50 border border-nexus-border hover:border-nexus-accent/20 transition-all cursor-default">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full bg-nexus-bg flex items-center justify-center font-bold text-nexus-accent border border-nexus-border">{idx + 1}</div>
                         <div>
                            <p className="text-sm font-bold">{item.name}</p>
                            <p className="text-[10px] text-nexus-textSecondary uppercase font-black">{item.volume}</p>
                         </div>
                      </div>
                      <span className="text-xs font-bold text-emerald-500">{item.growth}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <div className="space-y-8">
             <h3 className="text-[11px] font-black text-nexus-textSecondary uppercase tracking-[0.3em] ml-2">Portfolio Node Distribution</h3>
             <PortfolioHandler mini />
          </div>
          <div className="space-y-8">
             <h3 className="text-[11px] font-black text-nexus-textSecondary uppercase tracking-[0.3em] ml-2">Strategic AI Core</h3>
             <AIInsightsPanel />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          <div className="xl:col-span-2 space-y-8">
            <h3 className="text-[11px] font-black text-nexus-textSecondary uppercase tracking-[0.3em] ml-2">Governance Intelligence Feed</h3>
            <ComplianceNews />
          </div>
          <div className="space-y-8">
            <h3 className="text-[11px] font-black text-nexus-textSecondary uppercase tracking-[0.3em] ml-2">Settlement Vault</h3>
            <FinancialLedger mini />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;