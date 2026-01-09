
import React from 'react';
import { Construction, Info, ArrowLeft } from 'lucide-react';

interface DirectorsPageProps {
  onBack: () => void;
}

const DirectorsPage: React.FC<DirectorsPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 dark:bg-black overflow-hidden flex flex-col relative transition-colors duration-700">
      {/* Background Hero Image - Boardroom */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" 
          alt="Boardroom Background" 
          className="w-full h-full object-cover opacity-30 dark:opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900 dark:from-black dark:via-black/60 dark:to-black"></div>
      </div>

      {/* Navigation Header for Subpage */}
      <nav className="relative z-20 p-6 flex justify-between items-center bg-white/5 dark:bg-black/40 backdrop-blur-md border-b border-white/10">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 dark:text-white/70 hover:text-primary transition-all group font-mono text-xs uppercase tracking-[0.2em]"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Initiative
        </button>
        <div className="text-right">
          <span className="block font-display font-bold text-white text-sm tracking-tighter">ELI DIRECTORS PORTAL</span>
          <span className="block font-mono text-[9px] text-primary uppercase font-black">Secure Access Node v1.0</span>
        </div>
      </nav>

      <div className="flex-1 relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center">
        {/* Logo Container */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-all duration-1000"></div>
            <img 
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1765921600/ELI_Silver_Transparent_zch6yh.png" 
              alt="ELI Silver Logo" 
              className="w-48 h-48 md:w-80 md:h-80 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] animate-float"
            />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <Construction size={18} className="text-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-300">
              Infrastructure Status: Under Construction
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-7xl font-bold text-white tracking-tighter">
            Board of Directors
          </h1>

          <div className="max-w-2xl mx-auto">
            <div className="relative p-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent">
              <div className="bg-black/80 backdrop-blur-xl py-8 px-10">
                <p className="font-mono text-sm md:text-lg text-primary uppercase tracking-[0.2em] leading-relaxed">
                  Board of Directors for Earlington Legacy Initiative will arrive soon
                </p>
              </div>
            </div>
          </div>

          <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-500 text-[10px] uppercase font-bold tracking-widest">
              <Info size={14} />
              <span>Selection process in final verification</span>
            </div>
            <div className="h-px w-12 bg-white/10 hidden md:block"></div>
            <span className="text-white/50 text-[10px] font-mono tracking-widest flex items-center gap-2 border border-white/5 px-4 py-2 rounded-lg">
              ELI-DIR-SEC-45.0
            </span>
          </div>
        </div>
      </div>

      {/* Footer info for subpage */}
      <div className="relative z-10 p-8 text-center border-t border-white/5 bg-black/60">
        <p className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.5em]">
          Earlington Legacy Initiative NPC • REG: 2025/931583/08
        </p>
      </div>

      {/* Corporate Aesthetics - Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </div>
  );
};

export default DirectorsPage;
