
import React from 'react';
import { APP_NAME } from '../constants.tsx';

interface HeroProps {
  onLaunch: () => void;
  theme: string;
  onToggleTheme: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLaunch, theme, onToggleTheme }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-700 comet-gradient ${theme === 'dark' ? 'bg-nexus-dark text-white' : 'bg-nexus-light text-slate-900'}`}>
      <nav className="fixed top-0 w-full px-10 py-8 flex justify-between items-center z-50">
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center font-bold text-white shadow-xl">N</div>
          <span className="font-bold text-lg tracking-tight uppercase tracking-widest">{APP_NAME}</span>
        </div>
        <div className="flex items-center gap-8 animate-fade-in">
          <button onClick={onToggleTheme} className="text-sm font-medium opacity-50 hover:opacity-100 transition-opacity uppercase tracking-widest">
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button 
            onClick={onLaunch}
            className="px-6 py-2 rounded-full border border-accent text-accent text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
          >
            Access Terminal
          </button>
        </div>
      </nav>

      <div className="max-w-4xl w-full text-center space-y-10">
        <div className="space-y-4 animate-blur-reveal">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 dark:from-white dark:to-white/20">
            Intelligent Finance. <br /> Orchestrated Performance.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed stagger-1">
            NexSaathi is a distraction-free ecosystem for managing complex multi-level structures, 
            merchant nodes, and personal financial portfolios with AI-driven precision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 stagger-2 animate-slide-up">
          <button 
            onClick={onLaunch}
            className="group relative px-10 py-5 bg-accent rounded-2xl text-white font-bold tracking-widest uppercase text-xs shadow-2xl hover:scale-105 active:scale-95 transition-all overflow-hidden"
          >
            <span className="relative z-10">Initialize Session</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
          <a 
            href="#explore"
            className="px-10 py-5 bg-transparent border border-white/10 dark:border-white/5 rounded-2xl text-slate-500 font-bold tracking-widest uppercase text-xs hover:bg-white/5 transition-all"
          >
            View Infrastructure
          </a>
        </div>
      </div>

      <div className="fixed bottom-12 w-full text-center animate-fade-in stagger-3">
        <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
          End-to-End Encrypted Terminal • v2.8.0-Stable
        </p>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 blur-[160px] rounded-full animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 blur-[160px] rounded-full animate-float [animation-delay:2s]"></div>
    </div>
  );
};

export default Hero;
