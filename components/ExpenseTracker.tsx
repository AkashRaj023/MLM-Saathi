
import React, { useState } from 'react';
import { MOCK_EXPENSES } from '../constants.tsx';

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState(MOCK_EXPENSES);

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold dark:text-white">Operational Expenses</h2>
          <p className="text-slate-500 text-sm">Automated tracking of node overheads and growth investments.</p>
        </div>
        <button className="px-6 py-2.5 rounded-xl text-[11px] font-bold uppercase tracking-widest text-white transition-all shadow-xl bg-accent hover:opacity-90">
          Record Ledger
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {['Tech', 'Growth', 'Legal', 'Operational'].map(cat => (
          <div key={cat} className="glass p-6 rounded-3xl border border-nexus-border">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">{cat}</p>
            <p className="text-xl font-mono font-bold dark:text-white">
              ₹{expenses.filter(e => e.category === cat).reduce((acc, curr) => acc + curr.amount, 0).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="glass rounded-[32px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-slate-500 text-[9px] uppercase tracking-[0.2em] border-b border-nexus-border">
                <th className="px-8 py-5 font-bold">Entry Date</th>
                <th className="px-8 py-5 font-bold">Transaction Detail</th>
                <th className="px-8 py-5 font-bold">Classification</th>
                <th className="px-8 py-5 font-bold text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-nexus-border">
              {expenses.map((exp) => (
                <tr key={exp.id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-8 py-6 text-xs font-mono text-slate-500">{exp.date}</td>
                  <td className="px-8 py-6 font-bold text-sm dark:text-slate-200">{exp.title}</td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 rounded-lg text-[9px] font-bold uppercase tracking-widest bg-nexus-border text-slate-400 border border-white/5">
                      {exp.category}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right font-mono font-bold text-sm dark:text-white">
                    ₹{exp.amount.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
