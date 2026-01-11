
import React, { useState } from 'react';
import { Mail, ShieldCheck, MapPin, Globe, Scale, ShieldAlert, FileText, Lock, X, Info } from 'lucide-react';
import ConductView from './ConductView';

interface FooterProps {
  onSitemapClick: () => void;
}

const PolicyModal: React.FC<{ title: string; onClose: () => void }> = ({ title, onClose }) => (
  <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fade-in">
    <div className="bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 rounded-[2.5rem] w-full max-w-lg p-8 shadow-2xl">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-xl text-primary">
            <ShieldCheck size={20} />
          </div>
          <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white uppercase tracking-tight">{title}</h3>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400">
          <X size={20} />
        </button>
      </div>
      <div className="space-y-4">
        <div className="p-4 bg-primary/5 border border-primary/20 rounded-2xl flex items-start gap-4">
          <Info size={18} className="text-primary shrink-0 mt-1" />
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            This document is currently undergoing final verification by the Earlington Legacy Initiative Board of Directors to ensure 100% compliance with South African NPO regulations and POPIA standards.
          </p>
        </div>
        <p className="text-xs text-slate-500 font-mono uppercase tracking-widest text-center mt-6">
          Expected Publication: Q1 2026
        </p>
      </div>
      <button 
        onClick={onClose}
        className="w-full mt-8 py-4 bg-slate-900 dark:bg-primary text-white text-xs font-black uppercase tracking-widest rounded-xl hover:opacity-90 transition-opacity"
      >
        Acknowledge
      </button>
    </div>
  </div>
);

const Footer: React.FC<FooterProps> = () => {
  const [showConduct, setShowConduct] = useState(false);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const legalLinks = [
    { title: "Privacy Policy", icon: Lock, action: () => setActivePolicy("Privacy Policy") },
    { title: "Terms of Use", icon: FileText, action: () => setActivePolicy("Terms of Use") },
    { title: "Code of Conduct", icon: Scale, action: () => setShowConduct(true) },
    { title: "Safeguarding Policy", icon: ShieldAlert, action: () => setActivePolicy("Safeguarding Policy") }
  ];

  return (
    <footer className="relative z-10 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-npc-blue dark:text-primary">
                EARLINGTON LEGACY INITIATIVE NPC
              </span>
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest mt-1">
                REG: 2025/931583/08
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated to transforming Earlington Secondary School into a center of innovation. Join us in creating a brighter future for our students through technology and heritage.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Approved by Google Non-Profit</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">Contact Terminal</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl text-primary">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@earlingtonlegacy.org.za" className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                  info@earlingtonlegacy.org.za
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl text-primary">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Phoenix, KwaZulu-Natal, South Africa
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl text-primary">
                  <Globe size={18} />
                </div>
                <a href="https://www.earlingtonlegacy.org.za" target="_blank" className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                  www.earlingtonlegacy.org.za
                </a>
              </div>
            </div>
          </div>

          {/* LEGAL AND GOVERNANCE */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">LEGAL AND GOVERNANCE</h4>
            <div className="grid grid-cols-1 gap-4">
              {legalLinks.map((link, idx) => (
                <button 
                  key={idx}
                  onClick={link.action}
                  className="text-left text-xs font-bold text-slate-500 hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <link.icon size={12} className="group-hover:scale-110 transition-transform" /> {link.title}
                </button>
              ))}
              
              <div className="pt-4 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Section 18A Compliance Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Signature */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed max-w-2xl text-center md:text-left">
            <p>© 2026 Earlington Legacy Initiative NPC (Registration No. 2025/931583/08).</p>
            <p className="mt-1">A registered nonprofit organisation supporting education and community development. Approved by Google for Nonprofits.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Built for the students</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {showConduct && <ConductView onClose={() => setShowConduct(false)} />}
      {activePolicy && <PolicyModal title={activePolicy} onClose={() => setActivePolicy(null)} />}
    </footer>
  );
};

export default Footer;
