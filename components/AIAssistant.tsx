
import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, Loader2, Info } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const AI_CONTEXT = `
You are the Earlington Legacy Heritage Assistant. 
Initiative: Earlington Legacy Initiative NPC (Reg: 2025/931583/08).
Mission: Transforming Earlington Secondary School into a center of advanced learning and innovation.
Topology: Zero-G Serverless (Firebase + Cloud DNS + GCLB).
Infrastructure: 1GBPS Fibre installed via Afrihost & Vumatel in Teacher Conference area.
Projects: AI training & Google Skills for Grades 8-12. Media Center with Robotics & Drones (In Progress).
Event: Earlington Day 2026 (Late April). 45th Anniversary Celebration and Fundraising Market (100-120 stalls).
Goal: Bridge the digital divide and equip students with future-ready skills.
Domain: https://www.earlingtonlegacy.org.za/
Tone: Professional, helpful, visionary, and deeply rooted in community heritage.
`;

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: "Hello! I'm the Earlington Heritage AI. How can I assist you with information about our school transformation or the 2026 Anniversary?" }
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
          thinkingConfig: { thinkingBudget: 500 } // Reserves some reasoning for heritage context
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
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center justify-center w-20 h-20 bg-primary rounded-full shadow-[0_20px_50px_rgba(217,119,6,0.3)] hover:scale-105 transition-all duration-500 overflow-hidden border-2 border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-yellow-500 animate-pulse-slow opacity-90"></div>
          <Sparkles className="text-white relative z-10 animate-float" size={32} />
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-white/10 w-[92vw] md:w-[420px] h-[600px] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col overflow-hidden animate-fade-in glass-panel transition-all">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-npc-blue to-blue-900 dark:from-gold-dark dark:to-gold flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10">
                <Bot size={24} className="text-primary dark:text-white animate-pulse-slow" />
              </div>
              <div>
                <h3 className="text-sm font-black text-white leading-none uppercase tracking-widest">Heritage AI Assistant</h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  <span className="text-[9px] text-white/60 font-mono tracking-tighter uppercase font-bold">Encrypted Connection Active</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Info Banner */}
          <div className="bg-primary/5 px-6 py-2 border-b border-primary/10 flex items-center gap-2">
            <Info size={12} className="text-primary" />
            <span className="text-[10px] text-primary font-bold uppercase tracking-tight">Grounding: Official ELI NPC Database</span>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.03),transparent_40%)]"
          >
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-primary text-white rounded-tr-none' 
                  : 'bg-slate-100 dark:bg-white/5 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-3xl rounded-tl-none flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Loader2 size={16} className="animate-spin text-primary" />
                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">Thinking</span>
                  </div>
                  <div className="h-1 w-24 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/2 animate-[shimmer_2s_infinite]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/40 backdrop-blur-md">
            <div className="relative group flex items-center">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How can I help you today?"
                className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[1.25rem] py-4 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all dark:text-white shadow-inner"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-3 bg-primary text-white rounded-xl hover:bg-yellow-600 transition-all disabled:opacity-30 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-4 flex justify-between items-center opacity-40">
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                Powered by Gemini-3
              </p>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
