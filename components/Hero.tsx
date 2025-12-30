
import React from 'react';
import { GOOGLE_AI_STUDIO_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[400px] bg-[radial-gradient(circle_at_30%_30%,rgba(217,119,6,0.4),transparent_60%)] blur-[40px] animate-float opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[400px] bg-[radial-gradient(circle_at_30%_30%,rgba(120,53,15,0.3),transparent_60%)] blur-[40px] animate-float opacity-60" style={{ animationDelay: '2s' }}></div>
        
        {/* Geometric Circles */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200/20 dark:border-white/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary/20 rounded-full animate-spin-slow"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        <div className="inline-block mb-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80 border-b border-primary/30 pb-1">
            Est. 2025
          </span>
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
          BUILDING A <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">
            FUTURE
          </span>
        </h1>
        
        <p className="font-body text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Transforming Earlington Secondary School into a center of advanced learning and innovation to bridge the digital divide.
        </p>

        <div className="pt-12 flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#about" className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-mono uppercase tracking-widest text-white transition-all duration-200 bg-transparent border border-slate-300 dark:border-white/20 hover:border-primary hover:bg-primary/10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-slate-900 dark:text-white">
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative group-hover:text-primary transition-colors">Start the Journey</span>
          </a>
          
          <a href={GOOGLE_AI_STUDIO_URL} target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-mono uppercase tracking-widest text-white transition-all duration-200 bg-primary/20 border-2 border-primary hover:bg-primary/30 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-slate-900 dark:text-white shadow-[0_0_20px_rgba(217,119,6,0.2)]">
            <span className="relative text-primary font-bold">Launch AI Lab</span>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-slate-400 dark:text-slate-600 animate-pulse">
            Scroll to explore or visit our AI ecosystem
          </span>
        </div>
      </div>

      <div className="absolute top-24 right-8 max-w-xs text-right hidden lg:block">
        <p className="text-xs text-slate-500 dark:text-slate-500 font-mono">
          A non-profit initiative by the<br/>
          <a href="#" className="underline decoration-slate-600 underline-offset-2 hover:text-primary transition-colors">
            Earlington Legacy Initiative NPC
          </a>
        </p>
      </div>
    </header>
  );
};

export default Hero;
