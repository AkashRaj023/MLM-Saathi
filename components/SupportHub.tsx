
import React, { useState, useRef, useEffect } from 'react';
import { handleSupportQuery } from '../services/geminiService.ts';

const SupportHub: React.FC = () => {
  const [query, setQuery] = useState('');
  const [chat, setChat] = useState<{ type: 'user' | 'ai'; text: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent-color').trim();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [chat, loading]);

  const onSend = async () => {
    if (!query.trim()) return;
    const userMsg = query;
    setChat(prev => [...prev, { type: 'user', text: userMsg }]);
    setQuery('');
    setLoading(true);

    const result = await handleSupportQuery(userMsg);
    setChat(prev => [...prev, { 
      type: 'ai', 
      text: result.needsEscalation 
        ? `${result.resolution} (Escalating to human agent...)` 
        : result.resolution 
    }]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in h-[calc(100vh-160px)] flex flex-col">
      <div className="glass p-6 rounded-[24px] flex items-center gap-6">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl" style={{ background: accentColor }}>
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
        <div>
          <h2 className="text-xl font-bold dark:text-white tracking-tight">Nexus AI Assistant</h2>
          <p className="text-slate-500 text-sm font-medium">Professional resolution engine for node operators.</p>
        </div>
      </div>

      <div className="glass rounded-[32px] flex-1 flex flex-col overflow-hidden">
        <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto space-y-6 scroll-smooth">
          {chat.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-500 text-center px-16 space-y-4">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
              </div>
              <p className="text-sm font-medium leading-relaxed opacity-40">System ready. Awaiting operational queries from Node 001 (Akash Raj). Describe the discrepancy or compliance hurdle.</p>
            </div>
          )}
          {chat.map((msg, i) => (
            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
              <div className={`max-w-[75%] px-6 py-3.5 rounded-2xl text-sm font-medium ${
                msg.type === 'user' 
                  ? 'text-white shadow-lg' 
                  : 'bg-white/5 dark:text-slate-200 border border-white/5'
              }`} style={msg.type === 'user' ? { backgroundColor: accentColor } : {}}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white/5 px-6 py-4 rounded-2xl flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-nexus-border bg-black/10 flex gap-4">
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && onSend()}
            placeholder="Identity terminal prompt..."
            className="flex-1 bg-black/20 border border-nexus-border rounded-xl px-5 py-3 text-sm focus:border-nexus-primary outline-none dark:text-white font-mono"
          />
          <button 
            onClick={onSend}
            className="px-8 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest text-white shadow-xl hover:opacity-90 transition-all flex items-center justify-center"
            style={{ background: accentColor }}
          >
            Execute
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupportHub;
