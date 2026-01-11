
import React from 'react';
import { ShieldAlert, X, Scale, CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';

const ConductView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-2xl animate-fade-in overflow-hidden font-body">
      <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-[2rem] w-full max-w-4xl h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-slate-50 dark:bg-white/5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-2xl text-primary">
              <Scale size={24} />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight uppercase">Code of Conduct</h2>
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Effective Date: January 10, 2026</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 dark:hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Document Content */}
        <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar text-slate-700 dark:text-slate-300 leading-relaxed space-y-12">
          
          {/* Section 1 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">1. Purpose and Commitment</h3>
            <p className="text-sm">The Earlington Legacy Initiative NPC (ELI) is committed to fostering a safe, inclusive, respectful, and harassment-free environment for all participants in our programs, events, online spaces, and community interactions. This Code of Conduct reflects ELI’s mission as a public-benefit, education- and community-focused nonprofit organization operating in South Africa. It affirms our commitment to ethical conduct, dignity, accountability, and the responsible stewardship of trust placed in us by beneficiaries, partners, and the broader public.</p>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">2. Scope of Application</h3>
            <p className="text-sm italic">This Code of Conduct applies to all individuals engaging with ELI, including but not limited to:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Staff, volunteers, and board members</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Students, parents, guardians, and beneficiaries</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Partners, donors, and service providers</li>
              <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-primary" /> Visitors, contributors, and online participants</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">3. Expected Standards of Behavior</h3>
            <div className="grid grid-cols-1 gap-3 text-xs">
              {[
                "Act with courtesy, respect, professionalism, and integrity at all times",
                "Be inclusive and welcoming to people of all backgrounds, ages, genders, sexual orientations, disabilities, religions, ethnicities, and nationalities",
                "Use respectful, inclusive, and appropriate language",
                "Respect differing viewpoints and lived experiences",
                "Engage in constructive collaboration and learning",
                "Demonstrate empathy, patience, and cultural sensitivity",
                "Take responsibility for mistakes, offer apologies where appropriate, and commit to learning and improvement"
              ].map((item, i) => (
                <div key={i} className="p-3 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">4. Unacceptable Conduct</h3>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 text-red-600 dark:text-red-400 font-black text-[10px] uppercase tracking-widest">
                <ShieldAlert size={16} /> Strict Prohibition
              </div>
              <ul className="text-xs space-y-2 list-disc pl-5">
                <li>Harassment, bullying, discrimination, or intimidation in any form</li>
                <li>Offensive, derogatory, or discriminatory comments or jokes</li>
                <li>Unwelcome sexual attention, advances, or physical contact</li>
                <li>Threats of violence, stalking, doxxing, or coercion</li>
                <li>Publishing private information without consent</li>
                <li>Spamming, trolling, or platform misuse</li>
              </ul>
            </div>
          </section>

          {/* Section 5 & 6 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="space-y-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">5. Protection of Children</h3>
              <p className="text-xs opacity-80 leading-relaxed">ELI maintains a zero-tolerance approach to abuse, exploitation, or neglect. We operate in compliance with South African child protection legislation and safeguarding standards.</p>
            </section>
            <section className="space-y-3">
              <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-widest">6. Digital Conduct</h3>
              <p className="text-xs opacity-80 leading-relaxed">Users must use online spaces responsibly, respect privacy, and refrain from malicious activity or unauthorized access to resources.</p>
            </section>
          </div>

          {/* Section 7 - Contact */}
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-4 uppercase tracking-tight">7. Reporting Violations</h3>
            <div className="bg-primary/5 border border-primary/20 p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:rotate-12 transition-transform">
                <ShieldAlert size={120} />
              </div>
              <p className="text-sm italic mb-6">If you experience or witness behavior that violates this Code, report it promptly and confidentially.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-black uppercase text-primary tracking-widest">Founding Chairperson</p>
                  <p className="font-bold text-slate-900 dark:text-white text-lg">Timothy Padayachee</p>
                </div>
                <div className="space-y-3">
                  <a href="mailto:timothy@earlingtonlegacy.org.za" className="flex items-center gap-3 text-xs hover:text-primary transition-colors">
                    <Mail size={14} className="text-primary" /> timothy@earlingtonlegacy.org.za
                  </a>
                  <a href="tel:+27836573397" className="flex items-center gap-3 text-xs hover:text-primary transition-colors">
                    <Phone size={14} className="text-primary" /> +27 83 657 3397
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Final Sections Summary */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200 dark:border-white/10">
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest">8 & 9. Enforcement</h4>
              <p className="text-[11px] opacity-70 italic">Violations may result in warnings, permanent exclusion, or referral to law enforcement. Decisions of the Board are final.</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs font-black uppercase tracking-widest">10 & 11. Compliance</h4>
              <p className="text-[11px] opacity-70 italic">Aligned with South African Law and POPIA. Participation constitutes agreement to comply.</p>
            </div>
          </section>

          <div className="flex flex-col items-center gap-4 pt-12 text-center">
            <p className="text-[10px] font-mono opacity-50 uppercase tracking-[0.3em]">Official Document Node: ELI-GOV-COC-2026</p>
            <a href="https://www.earlingtonlegacy.org.za/code-of-conduct" className="text-primary text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:underline">
              <ExternalLink size={10} /> Public Link Verification
            </a>
          </div>
        </div>

        {/* Footer Action */}
        <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex justify-center">
          <button 
            onClick={onClose}
            className="px-12 py-4 bg-slate-900 dark:bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-full hover:scale-105 transition-all shadow-xl"
          >
            I Accept & Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConductView;
