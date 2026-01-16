
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, Loader2, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AI_CONTEXT = `
You are the Earlington Legacy Heritage Assistant (ELI-CORE).
Entity: Earlington Legacy Initiative NPC (Registration: 2025/931583/08).
Context: A non-profit bridging the digital divide for Earlington Secondary School (Phoenix, KZN).
Key Facts:
- Infrastructure: 1GBPS Fibre via Afrihost/Vumatel is LIVE.
- Fundraising Goal: Earlington Day 2026 (April 18th) - 45th Anniversary.
- Board: The Directors directory is currently in VERIFICATION stage (Coming Q1 2026).
- Location: https://www.earlingtonlegacy.org.za/directors
Guidelines: Be inspiring, professional, and emphasize the "Heritage meets Innovation" philosophy. If asked about technical specs, mention our G-Cloud topology.
`;

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Welcome to the ELI Heritage Hub. How can I assist with your legacy contribution or technical inquiries today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: AI_CONTEXT,
          temperature: 0.6,
          thinkingConfig: { thinkingBudget: 0 } 
        },
      });

      const aiText = response.text || "Connection to heritage core interrupted. Please retry in a few moments.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "System is undergoing scheduled maintenance. Please email info@earlingtonlegacy.org.za." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[70] font-body">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-16 h-16 bg-primary rounded-full shadow-[0_15px_35px_rgba(217,119,6,0.3)] hover:scale-110 transition-all duration-300 border-2 border-white/20"
        >
          <Sparkles className="text-white relative z-10 animate-pulse" size={24} />
          <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform"></div>
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 w-[90vw] md:w-[400px] h-[550px] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-fade-in glass-panel">
          <div className="p-5 bg-gradient-to-r from-npc-blue to-blue-900 flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3 text-white">
              <Bot size={20} className="text-primary" />
              <div className="leading-none">
                <h3 className="text-xs font-black uppercase tracking-widest">Heritage AI</h3>
                <span className="text-[8px] opacity-60 font-mono">NODE: ELI-2026-X</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white p-1"><X size={20} /></button>
          </div>
          
          <div className="bg-primary/5 px-5 py-2 border-b border-primary/10 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-[9px] text-primary font-bold uppercase tracking-widest">Live Knowledge Base Sync</span>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/30 dark:bg-transparent">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-tl-none shadow-sm'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-white/5 p-3 rounded-2xl border border-slate-200 dark:border-white/5">
                  <Loader2 size={14} className="animate-spin text-primary" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-white dark:bg-[#0f0f0f]">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask ELI-CORE..."
                className="w-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 pl-4 pr-12 text-sm focus:outline-none dark:text-white"
              />
              <button 
                onClick={handleSend} 
                disabled={isLoading}
                className="absolute right-1.5 p-2.5 bg-primary text-white rounded-lg hover:opacity-90 disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
