
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { MOCK_PORTFOLIO } from '../constants.tsx';

interface PortfolioHandlerProps {
  mini?: boolean;
}

const PortfolioHandler: React.FC<PortfolioHandlerProps> = ({ mini = false }) => {
  const totalValue = MOCK_PORTFOLIO.reduce((acc, curr) => acc + curr.value, 0);

  if (mini) {
    return (
      <div className="glass p-8 rounded-[40px] border border-nexus-border grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] mb-4">Portfolio Distribution</p>
          <div className="space-y-4">
            {MOCK_PORTFOLIO.map(item => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }}></div>
                  <span className="text-xs font-bold dark:text-slate-300">{item.name}</span>
                </div>
                <span className="text-xs font-mono font-bold dark:text-white">
                  {((item.value / totalValue) * 100).toFixed(0)}%
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="h-40">
           <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={MOCK_PORTFOLIO}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={70}
                paddingAngle={5}
                dataKey="value"
              >
                {MOCK_PORTFOLIO.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: '#111', border: 'none', borderRadius: '12px', fontSize: '10px' }}
                itemStyle={{ color: '#fff' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold dark:text-white tracking-tight">Financial Assets</h2>
          <p className="text-slate-500 text-sm">Multivariate portfolio tracking and allocation analytics.</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Net Asset Value</p>
          <p className="text-4xl font-mono font-bold dark:text-white">₹{totalValue.toLocaleString()}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-10 rounded-[48px] border border-nexus-border h-[400px]">
           <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={MOCK_PORTFOLIO}
                cx="50%"
                cy="50%"
                innerRadius={100}
                outerRadius={140}
                paddingAngle={8}
                dataKey="value"
              >
                {MOCK_PORTFOLIO.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ background: '#111', border: 'none', borderRadius: '16px', padding: '12px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          {MOCK_PORTFOLIO.map(item => (
            <div key={item.name} className="glass p-6 rounded-3xl border border-nexus-border hover:bg-white/5 transition-all">
               <div className="flex items-center gap-3 mb-2">
                 <div className="w-2 h-2 rounded-full" style={{ background: item.color }}></div>
                 <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">{item.name}</p>
               </div>
               <div className="flex justify-between items-end">
                  <p className="text-xl font-mono font-bold dark:text-white">₹{item.value.toLocaleString()}</p>
                  <p className="text-xs font-bold text-emerald-400">+{(Math.random() * 5 + 2).toFixed(1)}%</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioHandler;
