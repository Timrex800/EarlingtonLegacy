import React from 'react';
import { CheckCircle, Hammer, Tablet, GraduationCap } from 'lucide-react';

const EducationSection: React.FC = () => {
  return (
    <section id="phases" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12 border-b border-slate-200 dark:border-white/10 pb-4">
          <div>
            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">Project Phases & Plans</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Our strategic roadmap for school transformation.</p>
          </div>
          <a href="#" className="hidden md:block text-primary text-sm font-bold hover:underline">View Detailed Plan</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phase 1 */}
          <div className="group p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 transition-all">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="text-green-500 group-hover:text-green-400 transition-colors" size={32} />
              <span className="text-xs font-mono text-green-500 border border-green-500 px-2 py-0.5 rounded">DONE</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phase 1: Connectivity</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Installation of 1GBPS fibre line in the Teacher Conference area, providing high-speed internet foundation for technological initiatives.</p>
          </div>

          {/* Phase 2 */}
          <div className="group p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 transition-all">
            <div className="flex items-center justify-between mb-4">
              <Hammer className="text-primary group-hover:text-primary/80 transition-colors" size={32} />
              <span className="text-xs font-mono text-primary border border-primary px-2 py-0.5 rounded">IN PROGRESS</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phase 2: Media Center</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Extending fibre to Media Room. Installing Interactive Learning Boards, Projectors, and introduction of Robotics & Drone training.</p>
          </div>

          {/* Phase 3 */}
          <div className="group p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 transition-all">
            <div className="flex items-center justify-between mb-4">
              <Tablet className="text-slate-300 group-hover:text-primary transition-colors" size={32} />
              <span className="text-xs font-mono text-slate-400 border border-slate-400 px-2 py-0.5 rounded">PLANNED</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Phase 3: Devices</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Providing mobile tablets for every class. Implementing WiFi Mesh Secure network with Firewall Hardware for individual monitoring.</p>
          </div>

          {/* Goal */}
          <div className="group p-6 bg-white dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-md border border-slate-100 dark:border-white/5 transition-all">
            <div className="flex items-center justify-between mb-4">
              <GraduationCap className="text-slate-300 group-hover:text-primary transition-colors" size={32} />
              <span className="text-xs font-mono text-slate-400 border border-slate-400 px-2 py-0.5 rounded">GOAL</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-1">Student Success</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug">Ensuring every student has a competitive edge in the job market with intermediate to advanced tech skills.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;