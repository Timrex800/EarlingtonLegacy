
import React, { useState } from 'react';
import { Mail, ShieldCheck, MapPin, Globe, Scale, ShieldAlert, FileText, Lock, X, Info } from 'lucide-react';
import ConductView from './ConductView';
import PrivacyPolicyView from './PrivacyPolicyView';
import PolicyComingSoon from './PolicyComingSoon';

interface FooterProps {
  onSitemapClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onSitemapClick }) => {
  const [showConduct, setShowConduct] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  const legalLinks = [
    { title: "Privacy Policy", icon: Lock, action: () => setShowPrivacy(true) },
    { title: "Terms of Use", icon: FileText, action: () => setActivePolicy("Terms of Use") },
    { title: "Code of Conduct", icon: Scale, action: () => setShowConduct(true) },
    { title: "Safeguarding Policy", icon: ShieldAlert, action: () => setActivePolicy("Safeguarding Policy") }
  ];

  return (
    <footer className="relative z-10 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-white/10 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          {/* Brand Identity */}
          <div className="space-y-8">
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wider text-npc-blue dark:text-primary">
                EARLINGTON LEGACY INITIATIVE NPC
              </span>
              <span className="font-mono text-[11px] text-slate-500 uppercase tracking-[0.3em] mt-1.5 font-bold">
                REG: 2025/931583/08
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm">
              Architecting the digital future for Earlington Secondary School. We integrate advanced educational technologies to empower students and preserve our heritage.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">Certified Google Non-Profit Partner</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 dark:text-slate-500">Contact Node</h4>
            <div className="space-y-5">
              <div className="flex items-center gap-5 group">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-primary transition-transform group-hover:scale-110">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@earlingtonlegacy.org.za" className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors">
                  info@earlingtonlegacy.org.za
                </a>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-primary">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  Phoenix, KwaZulu-Natal, South Africa
                </span>
              </div>
              <div className="flex items-center gap-5">
                <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-2xl text-primary">
                  <Globe size={20} />
                </div>
                <button 
                  onClick={onSitemapClick}
                  aria-label="Open global sitemap viewer"
                  className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-primary transition-colors flex items-center gap-2"
                >
                  Global Sitemap Viewer <ShieldCheck size={14} className="text-emerald-500" />
                </button>
              </div>
            </div>
          </div>

          {/* LEGAL AND GOVERNANCE */}
          <div className="space-y-8">
            <h4 className="text-[11px] font-black uppercase tracking-[0.5em] text-slate-400 dark:text-slate-500">Legal Architecture</h4>
            <div className="grid grid-cols-1 gap-5">
              {legalLinks.map((link, idx) => (
                <button 
                  key={idx}
                  onClick={link.action}
                  aria-label={`Open ${link.title}`}
                  className="text-left text-xs font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-all flex items-center gap-4 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <link.icon size={14} className="group-hover:scale-110 transition-transform" />
                  </div>
                  {link.title}
                </button>
              ))}
              
              <div className="pt-6 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-bold">Section 18A Tax Compliance Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Branding & Copyright */}
        <div className="pt-10 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed max-w-2xl text-center md:text-left font-bold">
            <p>© 2026 Earlington Legacy Initiative NPC • Reg: 2025/931583/08</p>
            <p className="mt-1.5 opacity-60">Architected for Heritage Preservation and Technological Empowerment. All Rights Reserved.</p>
          </div>
          <div className="flex items-center gap-4 shrink-0 bg-slate-100 dark:bg-white/5 px-6 py-3 rounded-2xl border border-slate-200 dark:border-white/10">
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Built with Purpose</span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(217,119,6,0.6)]"></div>
          </div>
        </div>
      </div>

      {showConduct && <ConductView onClose={() => setShowConduct(false)} />}
      {showPrivacy && <PrivacyPolicyView onClose={() => setShowPrivacy(false)} />}
      {activePolicy && <PolicyComingSoon title={activePolicy} onClose={() => setActivePolicy(null)} />}
    </footer>
  );
};

export default Footer;
