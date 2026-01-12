
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, Loader2, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AI_CONTEXT = `
You are the Earlington Legacy Heritage Assistant. 
Initiative: Earlington Legacy Initiative NPC (Reg: 2025/931583/08).
Mission: Transforming Earlington Secondary School into a center of advanced learning and innovation.
Infrastructure: 1GBPS Fibre installed via Afrihost & Vumatel.
Governance: The Board of Directors directory is currently UNDER CONSTRUCTION.
Key URL: https://www.earlingtonlegacy.org.za/directors (Directors Portal - Secure Node).
Event: Earlington Day 2026 (Late April). 45th Anniversary Celebration.
Goal: Bridge the digital divide for Phoenix students.
Tone: Community-focused, technically precise, and professional.
`;

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm the Earlington Heritage AI. I can assist with info on our school transformation or the upcoming 2026 Anniversary. Our Directors Portal (under construction) is at /directors." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
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
          temperature: 0.7,
          thinkingConfig: { thinkingBudget: 0 } 
        },
      });

      const aiText = response.text || "I apologize, my legacy data links are momentary offline. Please contact us at info@earlingtonlegacy.org.za.";
      setMessages(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Connectivity lost. I'm unable to reach the knowledge base right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[70] font-body">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-20 h-20 bg-primary rounded-full shadow-[0_20px_50px_rgba(217,119,6,0.3)] hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-yellow-500 animate-pulse-slow opacity-90"></div>
          <Sparkles className="text-white relative z-10 animate-float" size={32} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 w-[92vw] md:w-[420px] h-[600px] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-in glass-panel transition-all">
          <div className="p-6 bg-gradient-to-r from-npc-blue to-blue-900 flex justify-between items-center">
            <div className="flex items-center gap-4 text-white">
              <Bot size={24} className="text-primary" />
              <div>
                <h3 className="text-sm font-black uppercase tracking-widest">Heritage AI</h3>
                <p className="text-[9px] opacity-60 font-mono">ELI-CORE v2.0</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white"><X size={24} /></button>
          </div>
          <div className="bg-primary/5 px-6 py-2 border-b border-primary/10 flex items-center gap-2">
            <Info size={12} className="text-primary" />
            <span className="text-[10px] text-primary font-bold uppercase">Official ELI Database Grounding</span>
          </div>
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.03),transparent_40%)]">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-tl-none'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && <Loader2 size={16} className="animate-spin text-primary ml-4" />}
          </div>
          <div className="p-6 border-t border-slate-200 dark:border-white/10">
            <div className="relative flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about our legacy..."
                className="w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl py-4 pl-5 pr-14 text-sm focus:outline-none dark:text-white"
              />
              <button onClick={handleSend} className="absolute right-2 p-3 bg-primary text-white rounded-xl"><Send size={18} /></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
