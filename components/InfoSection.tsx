import React from 'react';
import { Router, Brain } from 'lucide-react';

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-surface-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYBK9HZEnG_CSxL5w6R6JqKk-Dbq7M26MkvlAWQszp_5VSBdWHO3GIX8tPcjTVjvt1G0BzrkfStT0GfoUKqFs8LGBmorugbwKnNyvPmu54T4Q_NCoUhYnzSqmSf0u7mf5DSswl_6cRhLI3LmdBd02UhbdSwDX-y2HKUS8ylB8nWfEUbb8vgR46YowaHRqnNiYOMGvC1Qu4upELTWW88Y4RgKqclHmbkaN6efpySx0zI4LVPjMD4nRbnU5bAdbJW3sb7BvHY_noIe8" 
              alt="Community gathering" 
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover h-[500px] w-full" 
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-6 rounded-xl shadow-lg hidden md:block">
              <p className="font-display text-4xl font-bold text-white">45th</p>
              <p className="text-white/80 text-sm font-mono">Anniversary Upcoming</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="font-display text-4xl font-bold text-slate-900 dark:text-white">A New Era of Innovation</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The Earlington Legacy Initiative NPC, established on December 1st, 2025, is a non-profit organization dedicated to transforming Earlington Secondary School into a center of advanced learning and innovation. Our vision is to integrate cutting-edge tools, especially those sponsored by Google Non-Profit, along with other advanced learning technologies into the school's curriculum to bridge the digital divide and equip students for the modern world.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <Router className="text-primary text-3xl" size={32} />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Infrastructure</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">1GBPS Fibre installed via Afrihost & Vumatel.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Brain className="text-primary text-3xl" size={32} />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">Advanced Skills</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Digital training & Google Skills for Grades 8-12.</p>
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