import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="py-16 bg-background-light dark:bg-background-dark border-y border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <h3 className="font-mono uppercase tracking-widest text-primary text-sm mb-2">Collaboration</h3>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Partnerships & Impact</h2>
          </div>
          
          <div className="flex gap-12">
            <div className="text-center">
              <p className="font-mono text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tabular-nums">1GB</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide">Fibre Speed</p>
            </div>
            <div className="text-center">
              <p className="font-mono text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tabular-nums">8-12</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 uppercase tracking-wide">Grades Empowered</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-1">
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Proud Partners With:</span>
            <div className="flex items-center gap-3 text-slate-500 text-sm">
              <span>Afrihost</span> • <span>Vumatel Fibre</span> • <span>Google Non-Profit</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;