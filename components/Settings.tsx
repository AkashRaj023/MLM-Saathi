import React, { useState } from 'react';
import { AKASH_RAJ, ACCENT_COLORS } from '../constants.tsx';
import { UIPreferences } from '../types.ts';

interface SettingsProps {
  preferences: UIPreferences;
  onUpdatePreferences: (prefs: UIPreferences) => void;
}

const Settings: React.FC<SettingsProps> = ({ preferences, onUpdatePreferences }) => {
  const [avatar, setAvatar] = useState(AKASH_RAJ.avatar);

  const handleAvatarChange = () => {
    const seeds = ['Akash', 'Raj', 'Vikram', 'Rajesh', 'Priya', 'Sonal'];
    const randomSeed = seeds[Math.floor(Math.random() * seeds.length)];
    const newAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}${Math.random()}`;
    setAvatar(newAvatar);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-fade-in pb-20">
      <section className="space-y-10">
        <h2 className="text-3xl font-black text-nexus-text tracking-tight flex items-center gap-5">
           <span className="w-1.5 h-10 rounded-full bg-nexus-accent"></span>
           Profile & Identity
        </h2>
        
        {/* Profile Card with Change Pic Option */}
        <div className="glass rounded-[48px] p-10 md:p-14 flex flex-col md:flex-row items-center gap-12 interactive-3d">
          <div className="relative shrink-0 group">
             <img src={avatar} className="w-40 h-40 rounded-[40px] border-4 border-nexus-border shadow-2xl transition-all group-hover:opacity-80" alt="Profile" />
             <button 
               onClick={handleAvatarChange}
               className="absolute -bottom-4 -right-4 w-12 h-12 bg-nexus-accent text-white rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all"
               title="Change Profile Picture"
             >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
             </button>
          </div>
          <div className="flex-1 space-y-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-[0.2em] ml-1">Distributor Name</label>
                  <input type="text" defaultValue={AKASH_RAJ.name} className="w-full bg-nexus-bg border border-nexus-border rounded-2xl px-6 py-4 text-sm font-bold text-nexus-text outline-none focus:border-nexus-accent transition-all" />
               </div>
               <div className="space-y-3">
                  <label className="text-[10px] font-black text-nexus-textSecondary uppercase tracking-[0.2em] ml-1">Registered Mobile / Email</label>
                  <input type="text" defaultValue={AKASH_RAJ.email} className="w-full bg-nexus-bg border border-nexus-border rounded-2xl px-6 py-4 text-sm font-bold text-nexus-text outline-none focus:border-nexus-accent transition-all" />
               </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-4 bg-nexus-accent text-white rounded-2xl text-[11px] font-black uppercase tracking-widest shadow-xl hover:opacity-90 transition-all flex-1">Update Identity</button>
              <button className="px-10 py-4 glass rounded-2xl text-[11px] font-black uppercase tracking-widest text-nexus-text transition-all flex-1">Security Audit</button>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-10">
        <h2 className="text-3xl font-black text-nexus-text tracking-tight flex items-center gap-5">
           <span className="w-1.5 h-10 rounded-full bg-nexus-accent"></span>
           Ecosystem Interface
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
           {/* Theme Selection with better contrast */}
           <div className="glass rounded-[48px] p-10 space-y-8 border-nexus-border">
              <h3 className="text-sm font-black text-nexus-textSecondary uppercase tracking-widest">Interface Mode</h3>
              <div className="flex gap-6">
                 <button 
                  onClick={() => onUpdatePreferences({ ...preferences, theme: 'light' })}
                  className={`flex-1 p-8 rounded-[32px] border-2 transition-all ${preferences.theme === 'light' ? 'border-nexus-accent bg-white shadow-xl' : 'border-nexus-border hover:bg-white/5 opacity-60'}`}
                 >
                    <div className="w-full h-12 bg-slate-100 rounded-xl mb-4 border border-slate-200"></div>
                    <span className="text-[10px] font-black text-slate-800 uppercase tracking-widest">Pristine Light</span>
                 </button>
                 <button 
                  onClick={() => onUpdatePreferences({ ...preferences, theme: 'dark' })}
                  className={`flex-1 p-8 rounded-[32px] border-2 transition-all ${preferences.theme === 'dark' ? 'border-nexus-accent bg-black shadow-xl' : 'border-nexus-border hover:bg-white/5 opacity-60'}`}
                 >
                    <div className="w-full h-12 bg-slate-800 rounded-xl mb-4 border border-slate-700"></div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Deep Obsidian</span>
                 </button>
              </div>
           </div>

           {/* Accent Dynamics */}
           <div className="glass rounded-[48px] p-10 space-y-8 border-nexus-border">
              <h3 className="text-sm font-black text-nexus-textSecondary uppercase tracking-widest">Accent Core</h3>
              <p className="text-[11px] text-nexus-textSecondary leading-relaxed">Select a branding core that suits your operational topology.</p>
              <div className="grid grid-cols-4 gap-6">
                {ACCENT_COLORS.map(color => (
                  <button 
                    key={color.name}
                    onClick={() => onUpdatePreferences({ ...preferences, accentColor: color.value })}
                    className={`aspect-square rounded-2xl border-4 transition-all hover:scale-110 shadow-lg ${preferences.accentColor === color.value ? 'scale-90 border-nexus-text' : 'border-transparent'}`}
                    style={{ background: color.value }}
                    title={color.name}
                  ></button>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="space-y-10">
        <div className="glass rounded-[48px] p-12 bg-gradient-to-br from-nexus-accentSoft to-transparent border-nexus-accent/20">
           <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-20 h-20 rounded-[28px] bg-nexus-accent flex items-center justify-center text-white shadow-2xl">
                 <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div className="flex-1 text-center md:text-left space-y-2">
                 <h3 className="text-2xl font-black text-nexus-text tracking-tight">Security Protocol Active</h3>
                 <p className="text-sm text-nexus-textSecondary font-medium leading-relaxed">Your data is secured using 256-bit Node Encryption. All payouts are processed via verified Indian banking gateways with TDS compliance.</p>
              </div>
              <button className="px-10 py-4 bg-nexus-text text-nexus-bg rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">Audit Log</button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;