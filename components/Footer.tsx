
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ShieldCheck, MapPin, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onSitemapClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSitemapClick }) => {
  return (
    <footer className="relative z-10 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/5 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Identity */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-wider text-npc-blue dark:text-white">
                EARLINGTON LEGACY INITIATIVE NPC
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-1">
                REG: 2025/931583/08
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated to transforming Earlington Secondary School into a center of innovation. Join us in creating a brighter future for our students through technology and heritage.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-[9px] font-black uppercase tracking-widest text-primary">Approved by Google Non-Profit</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-gold-light/60">Contact Terminal</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl text-primary">
                  <Mail size={18} />
                </div>
                <a href="mailto:info@earlingtonlegacy.org.za" className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">
                  info@earlingtonlegacy.org.za
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl text-primary">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Phoenix, KwaZulu-Natal, South Africa
                </span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-2.5 bg-slate-100 dark:bg-white/5 rounded-xl text-primary">
                  <Globe size={18} />
                </div>
                <a href="https://www.earlingtonlegacy.org.za" target="_blank" className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary transition-colors flex items-center gap-2">
                  www.earlingtonlegacy.org.za
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links / Sitemap */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 dark:text-gold-light/60">Governance</h4>
            <div className="grid grid-cols-1 gap-3">
              <button onClick={onSitemapClick} className="text-left text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors flex items-center gap-2">
                <ExternalLink size={12} /> View Directory Tree
              </button>
              <a href="#" className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Section 18A Compliance</a>
              <a href="#" className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Board Minutes</a>
              <a href="#" className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

        {/* Legal & Signature */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            © 2025 Earlington Legacy Initiative NPC | Non-Profit Organization
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Built for the students</span>
            <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
