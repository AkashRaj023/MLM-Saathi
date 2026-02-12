import React from 'react';
import { APP_NAME } from '../constants.tsx';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 relative overflow-hidden bg-nexus-bg">
      {/* Decorative Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-nexus-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl w-full text-center space-y-12 z-10">
        <div className="space-y-6 animate-reveal">
          <div className="flex justify-center mb-8">
            <div className="w-12 h-12 bg-nexus-accent rounded-xl flex items-center justify-center font-bold text-white shadow-2xl shadow-nexus-accent/20">N</div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[1.05] text-nexus-text">
            Intelligent Governance.<br />
            <span className="text-nexus-textSecondary opacity-50">Human-Centric Growth.</span>
          </h1>
          <p className="text-xl md:text-2xl text-nexus-textSecondary max-w-2xl mx-auto font-light leading-relaxed animate-fade-in stagger-1">
            NexSaathi orchestrates complex MLM structures into clean, manageable financial nodes. Experience performance-first ecosystem architecture.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 animate-slide-up stagger-2">
          <button 
            onClick={onEnter}
            className="px-12 py-5 bg-nexus-accent text-white font-bold tracking-widest uppercase text-xs rounded-2xl shadow-2xl shadow-nexus-accent/20 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Access Terminal
          </button>
          <button className="px-12 py-5 glass text-nexus-text font-bold tracking-widest uppercase text-xs rounded-2xl hover:bg-white/5 transition-all">
            Inquire Infrastructure
          </button>
        </div>
      </div>

      <footer className="absolute bottom-12 w-full text-center px-12 animate-fade-in stagger-3">
        <p className="text-[10px] text-nexus-textSecondary font-bold uppercase tracking-[0.4em]">
          End-to-End Encrypted Architecture • v3.0.0 Stable Build
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;