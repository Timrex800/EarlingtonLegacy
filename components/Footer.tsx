
import React from 'react';
import { Facebook, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onSitemapClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSitemapClick }) => {
  return (
    <footer className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white py-16 border-t border-slate-300 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-2xl text-npc-blue dark:text-primary font-bold mb-4">
              Earlington Legacy Initiative NPC
            </h2>
            <p className="text-sm max-w-sm mb-2 leading-relaxed font-bold text-slate-900 dark:text-white">
              Dedicated to transforming Earlington Secondary School into a center of innovation. Join us in creating a brighter future for our students through technology and heritage.
            </p>
            <p className="text-xs font-mono text-npc-blue dark:text-primary mb-6 uppercase tracking-widest font-black">
              NPC Reg No: 2025/931583/08
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-npc-blue dark:text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="mailto:info@earlingtonlegacy.org.za" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-npc-blue dark:text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Mail size={16} />
              </a>
              <a href="tel:+27836573397" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-npc-blue dark:text-primary hover:bg-primary hover:text-white transition-all duration-300">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-npc-blue dark:text-primary font-black mb-4 uppercase text-[10px] tracking-[0.2em] border-b-2 border-primary/20 pb-1 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-bold text-slate-900 dark:text-white">
              <li><a href="#about" className="hover:text-primary transition-colors">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); onSitemapClick?.(); }}>Full Site Map</a></li>
              <li><a href="#events" className="hover:text-primary transition-colors">Earlington Day 2026</a></li>
              <li><a href="#phases" className="hover:text-primary transition-colors">Project Phases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Section 18A Donations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-npc-blue dark:text-primary font-black mb-4 uppercase text-[10px] tracking-[0.2em] border-b-2 border-primary/20 pb-1 inline-block">
              Contact
            </h4>
            <ul className="space-y-2 text-sm font-bold text-slate-900 dark:text-white">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" /> +27 83 657 3397
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" /> info@earlingtonlegacy.org.za
              </li>
              <li className="pt-4 border-t border-slate-300 dark:border-white/10 mt-4 font-black">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li className="font-black">
                <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-slate-300 dark:border-primary/20 pt-8 flex flex-col items-center text-center text-[12px] font-mono tracking-tight">
          <p className="font-black uppercase tracking-wider text-slate-900 dark:text-white">
            © 2025 Earlington Legacy Initiative NPC | Registration: 2025/931583/08
          </p>
          <p className="mt-1 font-black text-npc-blue dark:text-primary">
            A Non-Profit Company supporting Earlington Secondary School. Approved by Google Non Profit.
          </p>
          <div className="mt-6 flex items-center gap-4">
             <span className="h-0.5 w-12 bg-npc-blue dark:bg-primary"></span>
             <span className="text-[11px] uppercase tracking-[0.3em] font-black text-npc-blue dark:text-white">
               Built for the students
             </span>
             <span className="h-0.5 w-12 bg-npc-blue dark:bg-primary"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
