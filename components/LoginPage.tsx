import React, { useState } from 'react';
import { APP_NAME } from '../constants.tsx';

interface LoginPageProps {
  onLogin: () => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('akash.raj@nexsaathi.ai');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(onLogin, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nexus-bg p-6">
      <div className="max-w-md w-full glass rounded-[40px] p-12 space-y-10 animate-fade-in">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-12 h-12 bg-nexus-accent rounded-xl flex items-center justify-center text-white font-black text-xl mb-4">N</div>
          <h2 className="text-2xl font-bold text-nexus-text">Establish Session</h2>
          <p className="text-sm text-nexus-textSecondary uppercase tracking-widest font-bold">Identity Verification Required</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest ml-1">Terminal Identity</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-nexus-bgSecondary border border-nexus-border rounded-2xl px-6 py-4 text-nexus-text focus:ring-1 focus:ring-nexus-accent outline-none transition-all font-mono text-sm"
              placeholder="user@nexus.io"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest ml-1">Access Key</label>
            <input 
              type="password" 
              defaultValue="password123"
              className="w-full bg-nexus-bgSecondary border border-nexus-border rounded-2xl px-6 py-4 text-nexus-text focus:ring-1 focus:ring-nexus-accent outline-none transition-all font-mono text-sm"
            />
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full bg-nexus-accent text-white font-black py-5 rounded-2xl transition-all shadow-xl hover:scale-[1.02] disabled:opacity-50 active:scale-[0.98] uppercase tracking-[0.2em] text-[11px]"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-3">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Validating Node...
              </div>
            ) : 'Synchronize'}
          </button>
        </form>

        <button 
          onClick={onBack}
          className="w-full text-[10px] font-black text-nexus-textSecondary uppercase tracking-widest hover:text-nexus-text transition-colors"
        >
          Return to Portal
        </button>
      </div>
    </div>
  );
};

export default LoginPage;