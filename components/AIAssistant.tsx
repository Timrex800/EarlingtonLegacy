import React, { useState } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Container */}
      <div className={`transition-all duration-500 transform ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-12 pointer-events-none'}`}>
        <div className="w-80 md:w-96 bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden glass-panel">
          {/* Header */}
          <div className="p-4 bg-npc-blue text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Bot size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-display text-sm font-bold">ELI Assistant</h3>
                <p className="text-[10px] text-white/70 uppercase tracking-widest">Aura Intelligence</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-96 p-4 overflow-y-auto bg-zinc-50/50 dark:bg-black/20">
            <div className="flex gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-npc-blue flex items-center justify-center flex-shrink-0">
                <Bot size={14} className="text-white" />
              </div>
              <div className="bg-white dark:bg-zinc-800 p-3 rounded-2xl rounded-tl-none shadow-sm border border-zinc-100 dark:border-zinc-700">
                <p className="text-sm dark:text-zinc-300">Welcome to the Earlington Legacy Initiative. How can I assist you with our mission to transform education today?</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
            <div className="relative">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask ELI anything..."
                className="w-full bg-zinc-100 dark:bg-black/40 border-none rounded-2xl py-3 pl-4 pr-12 text-sm focus:ring-2 focus:ring-npc-blue transition-all dark:text-white"
              />
              <button className="absolute right-2 top-1.5 p-2 text-npc-blue hover:scale-110 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`mt-4 p-4 rounded-full bg-npc-blue text-white shadow-lg hover:scale-110 transition-all duration-300 group flex items-center gap-2 ${isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Sparkles size={24} className="group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-display font-bold text-sm">
          Talk to ELI
        </span>
      </button>
    </div>
  );
};

export default AIAssistant;
