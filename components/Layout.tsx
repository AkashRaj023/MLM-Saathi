import React from 'react';
import { 
  Activity, 
  BarChart3, 
  Shield, 
  Zap, 
  Brain, 
  Network, 
  FileCheck, 
  Settings, 
  LogOut,
  MessageSquare,
  CircuitBoard,
  User,
  ArrowLeft,
  Activity as PulseIcon
} from 'lucide-react';
import { ENTERPRISE_CLIENT } from '../constants.tsx';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onLogout }) => {
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const [timeFilter, setTimeFilter] = React.useState('LIVE');

  const navItems = [
    { id: 'hub', label: 'API Health' },
    { id: 'scorecard', label: 'SLA Performance' },
    { id: 'shield', label: 'Revenue Impact' },
    { id: 'incidents', label: 'Incident Control' },
    { id: 'assistant', label: 'AI Assistant' },
    { id: 'ai', label: 'AI Actions' },
    { id: 'graph', label: 'Partner Map' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'integrations', label: 'Integrations' },
    { id: 'config', label: 'System Setup' },
  ];

  const getActiveModuleLabel = () => {
    const active = navItems.find(item => item.id === activeTab);
    return active ? active.label : 'Dashboard';
  };

  return (
    <div className="flex flex-col h-screen bg-[#F0F4F8] font-sans text-[#0A1628] overflow-hidden">
      {/* Task 2: Horizontal Top Navigation Bar (52px) */}
      <nav className="h-[52px] w-full bg-[#0A1628] relative overflow-hidden flex items-center px-6 shrink-0 z-[60]">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0D1F3C] to-[#0A1628] pointer-events-none" />
        
        {/* Particle Effect: Tiny dots drifting */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-[3px] h-[3px] rounded-full bg-[#00B4D8]/15 animate-drift"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${15 + Math.random() * 20}s`,
                animationDelay: `-${Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        {/* Shimmering Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00B4D8]/40 to-transparent pointer-events-none shadow-[0_0_8px_rgba(0,180,216,0.3)]" />

        {/* Logo with Heartbeat Pulse */}
        <div className="flex items-center gap-4 shrink-0 relative z-10 transition-all">
          <div className="text-[#00B4D8] animate-heartbeat">
            <CircuitBoard size={32} />
          </div>
          <div className="w-[0.5px] h-6 bg-white/10" />
        </div>

        {/* Navigation Labels */}
        <div className="flex-1 flex justify-evenly items-center px-8 h-full relative z-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`h-full flex items-center px-2 relative transition-all text-[13px] font-medium tracking-tight group ${
                activeTab === item.id ? 'text-[#00B4D8]' : 'text-[#8B9BB4] hover:text-white'
              }`}
              style={{
                textShadow: activeTab === item.id ? '0 0 12px rgba(0,180,216,0.4)' : undefined
              }}
            >
              <span className={`transition-all duration-300 ${activeTab !== item.id ? 'group-hover:[text-shadow:0_0_12px_rgba(0,180,216,0.6)]' : ''}`}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00B4D8] animate-slide-right" />
              )}
            </button>
          ))}
        </div>

        {/* System Admin Avatar with Rotating Ring */}
        <div className="relative shrink-0 ml-4 z-10">
          <div className="absolute inset-[-4px] rounded-full border border-dashed border-[#00B4D8]/30 animate-spin-slow pointer-events-none" />
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-black text-white hover:bg-white/20 transition-all border border-white/10 relative z-10"
          >
            SA
          </button>
          
          {isProfileOpen && (
            <div className="absolute right-0 mt-3 w-[240px] bg-white border border-gray-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden z-[70] animate-fade-in origin-top-right">
              <div className="p-5 border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#00B4D8] text-white flex items-center justify-center font-black text-xs">SA</div>
                  <div>
                    <p className="text-[12px] font-black text-[#0A1628] leading-tight uppercase tracking-wider">System Admin</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                       <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                       <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Active Now</span>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 font-medium px-1">admin@conduit.inc</p>
              </div>
              <div className="py-2">
                <button className="w-full text-left px-5 py-3 text-[12px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 transition-colors group">
                  <User size={14} className="text-[#8B9BB4] group-hover:text-[#00B4D8]" />
                  <span className="font-semibold">Security Settings</span>
                </button>
                <button className="w-full text-left px-5 py-3 text-[12px] hover:bg-gray-50 flex items-center gap-3 text-gray-600 transition-colors group">
                  <Settings size={14} className="text-[#8B9BB4] group-hover:text-[#00B4D8]" />
                  <span className="font-semibold">Workspace Config</span>
                </button>
                <div className="my-1 border-t border-gray-100" />
                <button 
                  onClick={onLogout}
                  className="w-full text-left px-5 py-3 text-[12px] text-red-500 hover:bg-red-50 flex items-center gap-3 transition-colors group"
                >
                  <LogOut size={14} className="text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="font-black uppercase tracking-[0.2em] text-[9px]">Terminated Session</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Task 1: Contextual Sub-bar (44px) - Titles removed from pages, handled here */}
      <header className="h-[44px] bg-white border-b border-gray-200 flex items-center justify-between px-6 shrink-0 z-40">
        {/* Module Title */}
        <div className="flex items-center gap-3 flex-1">
          <h1 className="text-[18px] font-bold text-[#0A1628] tracking-tight">{getActiveModuleLabel()}</h1>
          <div className="w-[1px] h-4 bg-gray-200" />
          <span className="text-[10px] font-black text-[#8B9BB4] uppercase tracking-[0.2em]">Live Session</span>
        </div>
        
        {/* Time filter pills */}
        {(activeTab === 'hub' || activeTab === 'config') && (
          <div className="flex items-center gap-1 bg-gray-100 p-0.5 rounded-lg border border-gray-200">
            {['LIVE', '1H', '6H', '24H', 'MTD'].map((filter) => (
              <button 
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`px-3 py-1 rounded-md text-[10px] font-black tracking-widest transition-all ${
                  timeFilter === filter ? 'bg-white text-[#0A1628] shadow-sm' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Global Status Indicators */}
        <div className="flex-1 flex items-center justify-end gap-10">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Health Score</span>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
              <PulseIcon size={12} className="text-green-600 animate-pulse" />
              <span className="text-[12px] font-bold text-green-600">{ENTERPRISE_CLIENT.healthScore}%</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">AUM at Risk</span>
            <span className="text-[14px] font-black text-red-500 tabular-nums">₹ {ENTERPRISE_CLIENT.aumAtRisk} Cr</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">Active Incidents</span>
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-500 text-white text-[12px] font-black shadow-[0_0_12px_rgba(245,158,11,0.3)]">
              {ENTERPRISE_CLIENT.activeIncidents}
            </div>
          </div>
        </div>
      </header>

      {/* Content Area with Accessibility Support */}
      <main className="flex-1 overflow-y-auto bg-[#F8FAFC]">
        <div className="p-6 h-full transition-all duration-500">
          {children}
        </div>
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes drift {
          from { transform: translateX(-100px); opacity: 0; }
          50% { opacity: 1; }
          to { transform: translateX(100vw); opacity: 0; }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        @keyframes slide-right {
          from { width: 0; left: 50%; opacity: 0; }
          to { width: 100%; left: 0; opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-drift { animation: drift linear infinite; }
        .animate-heartbeat { animation: heartbeat 3s ease-in-out infinite; }
        .animate-slide-right { animation: slide-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
      `}} />
    </div>
  );
};

export default Layout;
