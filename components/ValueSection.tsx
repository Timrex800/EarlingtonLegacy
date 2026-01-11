import React from 'react';
import { GraduationCap } from 'lucide-react';

const ValueSection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-secondary dark:bg-black">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-black/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-white">
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Value to Families</h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              To concerned parents: this initiative offers free training courses, access to advanced learning tools, and the development of future-ready skills like critical thinking, problem-solving, and digital literacy. These opportunities are crucial for your child's future career and personal growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-primary hover:bg-yellow-600 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg">Support Our Projects</a>
              <a href="#" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-bold transition-colors">Volunteer Skills</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full border-2 border-white/10 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-sm">
                <GraduationCap className="text-white opacity-80 animate-float" size={64} />
                <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(217,119,6,0.8)]"></div>
                <div className="absolute bottom-10 right-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;