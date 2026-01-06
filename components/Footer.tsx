import { Facebook, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GOOGLE_AI_STUDIO_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-200 py-16 border-t border-slate-300 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-2xl text-npc-blue dark:text-primary font-bold mb-4">
              Earlington Legacy Initiative NPC
            </h2>
            <p className="text-sm max-w-sm mb-2 leading-relaxed font-medium">
              Dedicated to transforming Earlington Secondary School into a center of innovation. Join us in creating a brighter future for our students through technology and heritage.
            </p>
            <p className="text-xs font-mono text-slate-700 dark:text-slate-400 mb-6 uppercase tracking-widest font-bold">
              NPC Reg No: 2025/931583/08
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/earlingtonlegacy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-npc-blue dark:text-slate-200 hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="mailto:info@earlingtonlegacy.org.za" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-npc-blue dark:text-slate-200 hover:bg-primary hover:text-white transition-all duration-300">
                <Mail size={16} />
              </a>
              <a href="tel:+27836573397" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center text-npc-blue dark:text-slate-200 hover:bg-primary hover:text-white transition-all duration-300">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-npc-blue dark:text-slate-100 font-bold mb-4 uppercase text-[10px] tracking-[0.2em] border-b border-slate-300 dark:border-white/10 pb-1 inline-block">Quick Links</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li><Link to="/about" className="hover:text-primary transition-colors">Mission & Vision</Link></li>
              <li><Link to="/directors" className="hover:text-primary transition-colors">Board of Directors</Link></li>
              <li><Link to="/events" className="hover:text-primary transition-colors">Earlington Day 2026</Link></li>
              <li><Link to="/phases" className="hover:text-primary transition-colors">Project Phases</Link></li>
              <li><a href={GOOGLE_AI_STUDIO_URL} target="_blank" rel="noopener noreferrer" className="text-primary font-bold hover:text-secondary transition-colors italic">AI Lab (Google Studio)</a></li>
              <li><Link to="/donations" className="hover:text-primary transition-colors">Section 18A Donations</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-npc-blue dark:text-slate-100 font-bold mb-4 uppercase text-[10px] tracking-[0.2em] border-b border-slate-300 dark:border-white/10 pb-1 inline-block">Contact</h4>
            <ul className="space-y-2 text-sm font-bold">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +27 83 657 3397</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> info@earlingtonlegacy.org.za</li>
              <li className="pt-4 border-t border-slate-300 dark:border-white/10 mt-4 font-bold"><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li className="font-bold"><Link to="/terms" className="hover:text-primary transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-300 dark:border-white/10 pt-8 flex flex-col items-center text-center text-[11px] font-mono tracking-tight text-slate-800 dark:text-slate-300">
          <p className="font-black uppercase tracking-wider">© 2025 Earlington Legacy Initiative NPC | Registration: 2025/931583/08</p>
          <p className="mt-1 font-bold">A Non-Profit Company supporting Earlington Secondary School. Approved by Google Non Profit.</p>
          <div className="mt-6 flex items-center gap-4 transition-all duration-500">
             <span className="h-px w-12 bg-slate-400 dark:bg-slate-600"></span>
             <span className="text-[10px] uppercase tracking-[0.25em] font-black text-npc-blue dark:text-primary">Built for the students</span>
             <span className="h-px w-12 bg-slate-400 dark:bg-slate-600"></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
