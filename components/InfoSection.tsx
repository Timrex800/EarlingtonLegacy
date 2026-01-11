
import React from 'react';
import { Router, Brain } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl group-hover:bg-primary/10 transition-all duration-700"></div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 bg-slate-50">
              <img 
                src="https://res.cloudinary.com/drj03twbh/image/upload/v1767564778/1_ranme0.png" 
                alt="Earlington Secondary Heritage Students" 
                className="w-full h-full object-cover sepia-[0.2] grayscale hover:grayscale-0 hover:sepia-0 transition-all duration-1000 transform group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-[0_20px_50px_rgba(217,119,6,0.4)] border-4 border-white dark:border-surface-dark z-20 group-hover:translate-y-[-8px] transition-transform duration-500">
              <p className="font-display text-5xl font-bold text-white leading-none">45th</p>
              <p className="text-white/90 text-[10px] font-black font-mono mt-2 uppercase tracking-[0.2em]">Anniversary Upcoming</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Heritage • Innovation • Legacy</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              A New Era of <span className="text-primary italic">Innovation</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-body">
              The Earlington Legacy Initiative NPC, established on December 1st, 2025, is a non-profit organization dedicated to transforming Earlington Secondary School into a center of advanced learning and innovation. Our vision is to integrate cutting-edge tools, especially those sponsored by Google Non-Profit, along with other advanced learning technologies into the school's curriculum to bridge the digital divide and equip students for the modern world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-all">
                <div className="p-3 bg-white dark:bg-black/40 rounded-xl shadow-sm">
                  <Router className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Infrastructure</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">1GBPS Fibre installed via Afrihost & Vumatel.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-primary/30 transition-all">
                <div className="p-3 bg-white dark:bg-black/40 rounded-xl shadow-sm">
                  <Brain className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Advanced Skills</h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">AI training & Google Skills for Grades 8-12.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
