import React from 'react';

interface HeroProps {
  onNavigate: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[500px] bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.3),transparent_60%)] blur-[60px] animate-float opacity-50"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[500px] bg-[radial-gradient(circle_at_30%_30%,rgba(0,51,102,0.2),transparent_60%)] blur-[60px] animate-float opacity-40" style={{ animationDelay: '3s' }}></div>
        
        {/* Floating Architectural Rings */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-200/10 dark:border-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full animate-spin-slow"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-npc-blue/20 rounded-full animate-float"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-12">
        <div className="inline-block mb-4 animate-fade-in">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-primary font-black bg-primary/5 border border-primary/20 px-4 py-1.5 rounded-full">
            Zero-G Cloud Framework • Est. 2025
          </span>
        </div>
        
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight animate-slide-up">
          Earlington Legacy Initiative
          <span className="block text-xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-500 to-amber-700 mt-4 font-mono tracking-[0.3em] font-black uppercase">
            NPC
          </span>
        </h1>
        
        <p className="font-body text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Architecting the future of Earlington Secondary through high-speed digital infrastructure and advanced learning methodologies.
        </p>

        <div className="pt-16 flex flex-col items-center gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#about" 
              onClick={(e) => handleLinkClick(e, 'about')}
              className="group relative inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-white transition-all duration-300 bg-primary rounded-full hover:shadow-[0_0_30px_rgba(217,119,6,0.5)] transform hover:-translate-y-1"
            >
              Start Transformation
            </a>
            <a 
              href="#phases" 
              onClick={(e) => handleLinkClick(e, 'phases')}
              className="group inline-flex items-center justify-center px-10 py-5 text-xs font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white transition-all duration-300 bg-transparent border-2 border-slate-200 dark:border-white/10 rounded-full hover:border-primary"
            >
              View Roadmap
            </a>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="font-mono text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              Descend into our vision
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Floating Status Indicator */}
      <div className="absolute top-24 right-12 hidden xl:flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-3xl animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
        </div>
        <div className="text-right">
          <p className="text-[10px] font-black text-white uppercase tracking-widest">Live Node: ELI-01</p>
          <p className="text-[10px] text-primary font-bold">1GBPS Fibre Link Active</p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
