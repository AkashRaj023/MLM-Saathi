import React from 'react';
import { SUPPORT_CATEGORIES } from '../constants.tsx';

const CategoryIcons: Record<string, React.ReactNode> = {
  billing: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  kyc: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>,
  network: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
  merchants: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>,
  compliance: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
};

const Support: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-fade-in pb-20">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-black text-nexus-text tracking-tighter">Support Terminal</h2>
        <p className="text-nexus-textSecondary max-w-lg mx-auto text-lg font-light leading-relaxed">
          Operational specialists are standing by to resolve any system discrepancies with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUPPORT_CATEGORIES.map((cat) => (
          <button key={cat.id} className="interactive-3d glass p-10 rounded-[40px] text-left hover:border-nexus-accent transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-nexus-accent/5 blur-3xl pointer-events-none group-hover:bg-nexus-accent/10 transition-all"></div>
            <span className="text-nexus-accent mb-8 block transition-transform group-hover:scale-110">
              {CategoryIcons[cat.id as keyof typeof CategoryIcons] || <div className="w-6 h-6 bg-slate-500"></div>}
            </span>
            <h3 className="font-black text-[11px] uppercase tracking-widest text-nexus-text mb-3 group-hover:text-nexus-accent transition-colors">{cat.label}</h3>
            <p className="text-[11px] text-nexus-textSecondary font-medium leading-relaxed opacity-70">Execute protocol for {cat.label.toLowerCase()} dependencies.</p>
          </button>
        ))}
      </div>

      <div className="glass rounded-[48px] p-10 md:p-14 space-y-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-nexus-accent/5 blur-3xl pointer-events-none"></div>
        
        <div className="space-y-3">
          <h3 className="text-2xl font-black text-nexus-text tracking-tight">Submit Formal Inquiry</h3>
          <p className="text-[11px] text-nexus-textSecondary uppercase tracking-widest font-black opacity-50">SLA: 4-6 Standard Operational Hours</p>
        </div>
        
        <form className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest ml-1">Inquiry Node</label>
              <select className="w-full bg-nexus-bg border border-nexus-border rounded-2xl px-6 py-5 text-[11px] font-black uppercase tracking-widest text-nexus-text outline-none appearance-none cursor-pointer focus:border-nexus-accent transition-all">
                {SUPPORT_CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest ml-1">Terminal ID</label>
              <input type="text" placeholder="NEX-001" className="w-full bg-nexus-bg border border-nexus-border rounded-2xl px-6 py-5 text-sm text-nexus-text outline-none font-mono focus:border-nexus-accent transition-all" />
            </div>
          </div>
          <div className="space-y-3">
             <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest ml-1">Incident Registry Description</label>
             <textarea rows={6} className="w-full bg-nexus-bg border border-nexus-border rounded-[32px] px-8 py-6 text-sm text-nexus-text outline-none resize-none focus:border-nexus-accent transition-all" placeholder="Provide raw situational data for expedited resolution..."></textarea>
          </div>
          <button type="button" className="w-full py-6 bg-nexus-accent text-white font-black rounded-3xl shadow-2xl shadow-nexus-accent/20 hover:scale-[1.01] active:scale-[0.99] transition-all uppercase tracking-[0.2em] text-[11px]">Dispatch Inquiry to Specialists</button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-[11px] text-nexus-textSecondary font-bold uppercase tracking-widest">
          Direct Line: <a href="mailto:support@nexsaathi.in" className="text-nexus-accent hover:underline decoration-nexus-accent/30 decoration-2 underline-offset-4">specialists@nexsaathi.in</a>
        </p>
      </div>
    </div>
  );
};

export default Support;