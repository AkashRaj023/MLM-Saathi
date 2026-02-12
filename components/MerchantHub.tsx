
import React, { useState } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { MOCK_MERCHANTS } from '../constants.tsx';
import { analyzeMerchantNode } from '../services/geminiService.ts';

const ReportModal: React.FC<{ merchant: any, report: any, onClose: () => void }> = ({ merchant, report, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="glass w-full max-w-2xl rounded-[48px] overflow-hidden shadow-2xl border border-nexus-accent/20 flex flex-col max-h-[90vh]">
        <div className="p-10 border-b border-nexus-border flex justify-between items-center bg-nexus-bgSecondary">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-nexus-accent/10 border border-nexus-accent/20 flex items-center justify-center text-nexus-accent">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-nexus-text tracking-tighter">Report: {merchant.name}</h2>
              <p className="text-[10px] text-nexus-textSecondary uppercase tracking-widest font-black">Node Node: {merchant.id}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-3 glass rounded-2xl hover:bg-rose-500/10 hover:text-rose-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-10 space-y-12">
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-1">
              <p className="text-[10px] text-nexus-textSecondary font-black uppercase tracking-widest">Node Health</p>
              <p className="text-3xl font-black text-nexus-accent tracking-tighter">{report.nodeHealth}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] text-nexus-textSecondary font-black uppercase tracking-widest">Efficiency Rating</p>
              <p className="text-3xl font-black text-nexus-text tracking-tighter">{report.efficiencyScore}%</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[10px] text-nexus-textSecondary font-black uppercase tracking-widest border-l-2 border-nexus-accent pl-3">Strategic Analysis</p>
            <p className="text-sm text-nexus-textSecondary leading-relaxed font-medium italic">"{report.strategicAnalysis}"</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h4 className="text-[11px] font-black text-nexus-text uppercase tracking-widest">Growth Projections</h4>
              <ul className="space-y-3">
                {report.projections.map((p: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-nexus-textSecondary font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-nexus-accent"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-5">
              <h4 className="text-[11px] font-black text-nexus-text uppercase tracking-widest">Critical Bottlenecks</h4>
              <ul className="space-y-3">
                {report.bottlenecks.map((b: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-nexus-textSecondary font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-10 border-t border-nexus-border bg-nexus-bgSecondary flex justify-end">
           <button onClick={onClose} className="px-10 py-4 bg-nexus-accent text-white font-black rounded-2xl shadow-xl uppercase tracking-widest text-[11px]">Acknowledge Report</button>
        </div>
      </div>
    </div>
  );
};

const MerchantCard: React.FC<{ merchant: typeof MOCK_MERCHANTS[0] }> = ({ merchant }) => {
  const sparkData = merchant.recentSales.map((val, i) => ({ val }));
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<any>(null);

  const handleAnalyze = async () => {
    setAnalyzing(true);
    const data = await analyzeMerchantNode(merchant);
    setReport(data);
    setAnalyzing(false);
  };

  return (
    <>
      <div className="parallax-card glass rounded-[40px] p-8 transition-all duration-300 cursor-pointer relative overflow-hidden group border border-transparent hover:border-nexus-accent/20 shadow-lg">
        <div className="absolute top-0 right-0 w-32 h-32 bg-nexus-accent/5 blur-[80px] group-hover:bg-nexus-accent/15 transition-all"></div>
        
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-5">
            <div className="relative">
               <img src={merchant.avatar} alt={merchant.name} className="w-16 h-16 rounded-[24px] border border-nexus-border shadow-xl transition-transform group-hover:scale-105" />
               <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-4 border-nexus-bgSecondary shadow-md ${merchant.status === 'ACTIVE' ? 'bg-emerald-500' : 'bg-slate-500'}`}></div>
            </div>
            <div>
              <h3 className="font-bold text-lg text-nexus-text tracking-tighter leading-none mb-1.5">{merchant.name}</h3>
              <p className="text-[10px] text-nexus-textSecondary uppercase tracking-widest font-black opacity-60">{merchant.network}</p>
            </div>
          </div>
          <div className="px-4 py-1.5 bg-nexus-accentSoft rounded-xl border border-nexus-accent/10">
            <span className="text-[10px] font-mono text-nexus-accent uppercase font-black">{merchant.specialization}</span>
          </div>
        </div>

        <div className="h-16 w-full opacity-40 group-hover:opacity-100 transition-opacity duration-500 mb-8">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkData}>
              <Area 
                type="monotone" 
                dataKey="val" 
                stroke="var(--accent-primary)" 
                strokeWidth={3} 
                fill="var(--accent-soft)" 
                isAnimationActive={true}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="p-5 rounded-[24px] glass border-nexus-border bg-nexus-bgSecondary/40">
            <p className="text-[9px] text-nexus-textSecondary font-black uppercase tracking-[0.2em] mb-1.5 opacity-60">Stability Index</p>
            <p className="text-2xl font-black text-nexus-text tracking-tighter leading-none">{merchant.performanceScore}%</p>
          </div>
          <div className="p-5 rounded-[24px] glass border-nexus-border bg-nexus-bgSecondary/40">
            <p className="text-[9px] text-nexus-textSecondary font-black uppercase tracking-[0.2em] mb-1.5 opacity-60">Node Velocity</p>
            <p className="text-2xl font-black text-nexus-text tracking-tighter leading-none">{(merchant.performanceScore * 0.9).toFixed(1)}</p>
          </div>
        </div>
        
        <button 
          onClick={handleAnalyze}
          disabled={analyzing}
          className="w-full py-5 rounded-[24px] text-[10px] font-black tracking-widest uppercase transition-all glass hover:bg-nexus-accent hover:text-white dark:text-white shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
        >
          {analyzing ? (
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Analyze Node
            </>
          )}
        </button>
      </div>

      {report && <ReportModal merchant={merchant} report={report} onClose={() => setReport(null)} />}
    </>
  );
};

const MerchantHub: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold text-nexus-text tracking-tighter leading-tight">Ecosystem Architecture</h2>
          <p className="text-nexus-textSecondary text-lg font-light leading-relaxed">Distribution nodes currently operating within optimal parameters.</p>
        </div>
        <button className="px-10 py-4 glass rounded-[20px] text-[11px] font-black uppercase tracking-widest hover:bg-nexus-accent hover:text-white transition-all text-nexus-text shadow-xl">
          Integrate Node
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {MOCK_MERCHANTS.map((merchant) => (
          <MerchantCard key={merchant.id} merchant={merchant} />
        ))}
      </div>
    </div>
  );
};

export default MerchantHub;
