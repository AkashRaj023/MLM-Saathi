
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { MOCK_PERFORMANCE, COLORS } from '../constants.tsx';

const AnalyticsBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Revenue Growth Chart */}
      <div className="glass rounded-3xl p-8 shadow-sm">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-nexus-textSecondary">Network Revenue Protocol</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_PERFORMANCE}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="date" stroke="var(--text-secondary)" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-secondary)" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `₹${v/1000}k`} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: 'var(--accent-primary)', fontSize: '12px', fontWeight: 'bold' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="var(--accent-primary)" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Member Growth Bar Chart */}
      <div className="glass rounded-3xl p-8 shadow-sm">
        <h3 className="text-[11px] font-black uppercase tracking-[0.2em] mb-8 text-nexus-textSecondary">Node Recruitment Growth</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_PERFORMANCE}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
              <XAxis dataKey="date" stroke="var(--text-secondary)" fontSize={10} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--text-secondary)" fontSize={10} tickLine={false} axisLine={false} />
              <Tooltip 
                cursor={{ fill: 'var(--accent-soft)' }}
                contentStyle={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px' }}
              />
              <Bar dataKey="newMembers" radius={[6, 6, 0, 0]}>
                {MOCK_PERFORMANCE.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === MOCK_PERFORMANCE.length - 1 ? 'var(--accent-primary)' : 'var(--text-secondary)'} opacity={0.6} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsBoard;
