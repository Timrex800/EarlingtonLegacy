import React, { useEffect } from 'react';
import { X, Network, ExternalLink, GraduationCap, MapPin, Target } from 'lucide-react';

interface SitemapViewProps {
  onClose: () => void;
}

const SitemapView: React.FC<SitemapViewProps> = ({ onClose }) => {
  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const sections = [
    {
      title: "Core Mission",
      icon: <Target className="text-primary" size={20} />,
      links: ["About the Initiative", "Our Vision", "Transformation Roadmap"]
    },
    {
      title: "Phases of Impact",
      icon: <GraduationCap className="text-primary" size={20} />,
      links: ["E-Learning Centre", "Digital Labs", "Innovation Hub"]
    },
    {
      title: "Community",
      icon: <MapPin className="text-primary" size={20} />,
      links: ["Partner Schools", "Corporate Sponsors", "Volunteer Network"]
    }
  ];

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background-dark/80 backdrop-blur-xl transition-opacity animate-in fade-in duration-500" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-[2rem] shadow-2xl border border-zinc-200 dark:border-white/10 overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 border-b border-zinc-100 dark:border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Network size={24} className="text-primary" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold dark:text-white">Site Ecosystem</h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Navigate the Earlington Legacy Initiative infrastructure</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 hover:bg-zinc-100 dark:hover:bg-white/5 rounded-full transition-colors dark:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Grid Content */}
        <div className="p-8 grid md:grid-cols-3 gap-12">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3">
                {section.icon}
                <h3 className="font-display text-sm font-bold uppercase tracking-widest dark:text-white">{section.title}</h3>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-primary dark:hover:text-primary transition-colors text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 group-hover:bg-primary transition-colors" />
                      {link}
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <div className="p-8 bg-zinc-50 dark:bg-white/5 border-t border-zinc-100 dark:border-white/5">
          <p className="text-center text-xs text-zinc-400 dark:text-zinc-500">
            © 2025 Earlington Legacy Initiative NPC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SitemapView;
