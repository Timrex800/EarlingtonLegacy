
import React from 'react';
import { Construction, Info, ExternalLink } from 'lucide-react';

interface FounderSectionProps {
  onExplore: () => void;
}

const FounderSection: React.FC<FounderSectionProps> = ({ onExplore }) => {
  return (
    <section id="directors-preview" className="relative py-24 bg-slate-900 dark:bg-black overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">
      {/* Background Hero Image - Boardroom Preview */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" 
          alt="Boardroom Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/80 dark:from-black dark:via-transparent dark:to-black"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Compact Content for Landing Page Preview */}
        <div className="space-y-8 animate-fade-in">
          <div className="mb-6 flex justify-center">
            <img 
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1765921600/ELI_Silver_Transparent_zch6yh.png" 
              alt="ELI Silver Logo" 
              className="w-32 h-32 object-contain opacity-90 dark:opacity-80 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            />
          </div>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white tracking-tighter">
            Board of Directors
          </h2>

          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <Construction size={18} className="text-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-gold-light/90">
              Portal Access: Under Construction
            </span>
          </div>

          <div className="pt-6">
            <button 
              onClick={onExplore}
              className="group inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.3em] rounded-full hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1"
            >
              Enter Directors Portal
              <ExternalLink size={16} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
