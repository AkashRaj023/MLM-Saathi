import React, { useState } from 'react';
import { APP_NAME, AKASH_RAJ } from '../constants.tsx';
import { UIPreferences } from '../types.ts';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
  preferences: UIPreferences;
}

const Icons = {
  Terminal: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
  Merchants: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" /></svg>,
  Financials: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
  Support: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
};

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onLogout, preferences }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menu = [
    { id: 'overview', label: 'Terminal', icon: <Icons.Terminal /> },
    { id: 'merchants', label: 'Distributors', icon: <Icons.Merchants /> },
    { id: 'wallet', label: 'E-Wallet', icon: <Icons.Financials /> },
    { id: 'support', label: 'Support', icon: <Icons.Support /> },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-nexus-bg overflow-hidden transition-colors duration-500">
      
      {/* Sidebar - Desktop */}
      <aside className={`hidden md:flex ${collapsed ? 'w-24' : 'w-72'} border-r border-nexus-border flex-col transition-all duration-500 z-30 bg-nexus-bgSecondary shadow-2xl relative`}>
        <div className="p-10 flex items-center gap-4">
          <div className="w-8 h-8 rounded-lg bg-nexus-accent flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-nexus-accent/20">N</div>
          {!collapsed && <span className="font-bold tracking-tight text-lg uppercase text-nexus-text">NexSaathi</span>}
        </div>

        <nav className="flex-1 px-6 space-y-2 mt-2">
          {menu.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all duration-300 group ${
                activeTab === item.id ? 'bg-nexus-accent text-white shadow-xl shadow-nexus-accent/15 scale-[1.02]' : 'text-nexus-textSecondary hover:text-nexus-text hover:bg-nexus-accentSoft'
              }`}
            >
              <span className={`${activeTab === item.id ? 'scale-110' : ''}`}>{item.icon}</span>
              {!collapsed && <span className="text-[12px] font-bold uppercase tracking-widest">{item.label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-nexus-border">
           <div 
             onClick={() => setActiveTab('profile')}
             className={`flex items-center gap-4 p-3 rounded-2xl transition-all hover:bg-nexus-accentSoft cursor-pointer group ${activeTab === 'profile' ? 'bg-nexus-accentSoft' : ''}`}
           >
              <div className="relative">
                <img src={AKASH_RAJ.avatar} className="w-11 h-11 rounded-xl border border-nexus-border shadow-md transition-transform group-hover:scale-105" alt="Avatar" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-nexus-accent rounded-full border-2 border-nexus-bgSecondary"></div>
              </div>
              {!collapsed && (
                <div className="flex-1 overflow-hidden">
                   <p className="text-[12px] font-bold text-nexus-text truncate uppercase leading-tight">{AKASH_RAJ.name}</p>
                   <p className="text-[9px] text-nexus-accent font-black uppercase tracking-widest mt-1">Operator Profile</p>
                </div>
              )}
           </div>
           {!collapsed && (
             <button onClick={onLogout} className="mt-4 w-full py-3.5 glass rounded-2xl text-[10px] font-black uppercase tracking-widest text-nexus-textSecondary hover:text-rose-500 hover:border-rose-500/30 transition-all flex items-center justify-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7" /></svg>
                Sign Out
             </button>
           )}
        </div>
      </aside>

      {/* Mobile Top Header */}
      <header className="md:hidden h-16 border-b border-nexus-border px-6 flex items-center justify-between bg-nexus-bgSecondary glass z-40">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-nexus-accent flex items-center justify-center text-white font-bold text-xs shadow-md">N</div>
          <span className="font-bold tracking-tight text-sm uppercase text-nexus-text">NexSaathi</span>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-nexus-text">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <header className="hidden md:flex h-20 border-b border-nexus-border px-10 items-center justify-between glass z-20">
          <div className="flex items-center gap-6">
            <button onClick={() => setCollapsed(!collapsed)} className="p-2 text-nexus-textSecondary hover:text-nexus-accent transition-colors bg-nexus-bg rounded-lg">
              <svg className={`w-5 h-5 transition-transform ${collapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" /></svg>
            </button>
            <div className="h-8 w-px bg-nexus-border"></div>
            <div className="flex items-center gap-2 text-xs font-bold text-nexus-textSecondary uppercase tracking-widest">
              <svg className="w-4 h-4 text-nexus-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              Secured Node Connection
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest opacity-60">Payable Balance</span>
              <span className="text-nexus-accent font-mono text-xl font-black">₹{AKASH_RAJ.balance.toLocaleString('en-IN')}</span>
            </div>
            <div className="relative cursor-pointer group">
              <svg className="w-5 h-5 text-nexus-textSecondary group-hover:text-nexus-accent transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-nexus-bg"></div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-12 max-w-7xl mx-auto w-full scroll-smooth">
          {children}
        </div>

        {/* Mobile Bottom Nav */}
        <nav className="md:hidden h-16 border-t border-nexus-border glass flex items-center justify-around z-40 pb-safe">
           {menu.map(item => (
             <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-1 transition-all ${activeTab === item.id ? 'text-nexus-accent scale-110' : 'text-nexus-textSecondary'}`}
             >
               {item.icon}
               <span className="text-[8px] font-bold uppercase tracking-widest">{item.label}</span>
             </button>
           ))}
           <button
             onClick={() => setActiveTab('profile')}
             className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'profile' ? 'text-nexus-accent scale-110' : 'text-nexus-textSecondary'}`}
           >
             <img src={AKASH_RAJ.avatar} className="w-5 h-5 rounded-full border border-nexus-border" />
             <span className="text-[8px] font-bold uppercase tracking-widest">Me</span>
           </button>
        </nav>
      </main>

      {/* Mobile Drawer Menu (Optional) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
           <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
           <div className="absolute top-0 right-0 w-64 h-full bg-nexus-bgSecondary border-l border-nexus-border p-8 animate-reveal">
              <h2 className="text-xl font-bold mb-8">System Ops</h2>
              <div className="space-y-6">
                 <button className="w-full text-left font-bold text-sm">Download Registry</button>
                 <button className="w-full text-left font-bold text-sm">TDS Certificates</button>
                 <button className="w-full text-left font-bold text-sm">Security Hub</button>
                 <div className="h-px bg-nexus-border my-8"></div>
                 <button onClick={onLogout} className="w-full text-left font-bold text-rose-500">Sign Out Terminal</button>
              </div>
           </div>
        </div>
      )}
    </div>
  );
};

export default Layout;