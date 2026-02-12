import React from 'react';
import { MOCK_TRANSACTIONS, AKASH_RAJ } from '../constants.tsx';

interface FinancialLedgerProps {
  mini?: boolean;
}

const FinancialLedger: React.FC<FinancialLedgerProps> = ({ mini = false }) => {
  const handleRecharge = () => {
    const options = {
      key: "rzp_test_example",
      amount: 500000,
      currency: "INR",
      name: "NexSaathi Finance",
      description: "Wallet Refill - Terminal 001",
      handler: (response: any) => console.log(response),
      prefill: { name: AKASH_RAJ.name, email: AKASH_RAJ.email },
      theme: { color: "#00d09c" }
    };
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Improved Settlement Vault Card */}
      <div className={`interactive-3d rounded-[40px] ${mini ? 'p-6 md:p-10' : 'p-10 md:p-14'} text-white relative overflow-hidden shadow-2xl border border-white/10`} 
           style={{ background: `linear-gradient(135deg, var(--accent-primary) -20%, #000 120%)` }}>
        
        {/* Abstract Safe Patterns */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-nexus-accent/20 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>
        
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-end md:items-center gap-12">
          <div className="w-full">
            <div className="flex items-center gap-3 mb-4 opacity-70">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">Encrypted Settlement Vault</p>
            </div>
            <h2 className={`${mini ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'} font-sans font-black tracking-tighter rupee-symbol`}>
              {AKASH_RAJ.balance.toLocaleString('en-IN')}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/20">8 Active Channels</span>
              <span className="bg-white/10 backdrop-blur-md px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest border border-white/20">Terminal: NEX-001</span>
            </div>
          </div>
          
          <div className="flex gap-4 w-full md:w-auto">
            <button 
              onClick={handleRecharge}
              className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-slate-50 transition-all shadow-xl hover:scale-105 active:scale-95 flex-1 md:flex-none"
            >
              Add Credits
            </button>
            <button className="px-10 py-5 glass rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all flex-1 md:flex-none">
              Withdraw
            </button>
          </div>
        </div>
      </div>

      {!mini && (
        <div className="glass rounded-[40px] overflow-hidden shadow-2xl animate-slide-up stagger-1">
          <div className="p-10 border-b border-nexus-border flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-tight text-nexus-text">Transaction Ledger</h3>
              <p className="text-xs text-nexus-textSecondary font-medium">Real-time settlement history for Node 001</p>
            </div>
            <div className="flex bg-black/20 p-1.5 rounded-2xl border border-nexus-border">
               {['History', 'Pending', 'Settled'].map(t => (
                 <button key={t} className={`px-6 py-2.5 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${t === 'History' ? 'bg-nexus-accent text-white' : 'text-nexus-textSecondary hover:text-white'}`}>{t}</button>
               ))}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-nexus-textSecondary text-[10px] font-black uppercase tracking-[0.2em] border-b border-nexus-border">
                  <th className="px-10 py-6">Date Protocol</th>
                  <th className="px-10 py-6">Identity / Desc</th>
                  <th className="px-10 py-6 text-right">Magnitude</th>
                  <th className="px-10 py-6 text-center">Status Registry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-nexus-border">
                {MOCK_TRANSACTIONS.map((tx) => (
                  <tr key={tx.id} className="hover:bg-nexus-accentSoft transition-colors group">
                    <td className="px-10 py-8 text-[11px] font-mono font-bold text-nexus-textSecondary">{tx.date}</td>
                    <td className="px-10 py-8">
                      <p className="text-sm font-bold text-nexus-text group-hover:text-nexus-accent transition-colors">{tx.description}</p>
                      <p className="text-[9px] text-nexus-textSecondary font-mono tracking-widest uppercase mt-1">UUID: {tx.id.toUpperCase()}</p>
                    </td>
                    <td className={`px-10 py-8 text-right font-mono font-black text-base rupee-symbol ${tx.amount > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {tx.amount > 0 ? '+' : ''}{Math.abs(tx.amount).toLocaleString('en-IN')}
                    </td>
                    <td className="px-10 py-8 text-center">
                      <span className={`inline-block px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest border ${
                        tx.status === 'COMPLETED' 
                          ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                      }`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinancialLedger;