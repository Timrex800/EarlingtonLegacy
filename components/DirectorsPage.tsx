
import React from 'react';
import { ArrowLeft, Users, ShieldCheck, Mail, Phone, Award, Building2 } from 'lucide-react';

interface DirectorsPageProps {
  onBack: () => void;
}

const DirectorsPage: React.FC<DirectorsPageProps> = ({ onBack }) => {
  const directors = [
    {
      name: "Timothy Padayachee",
      role: "Chairman & Founder",
      bio: "Timothy Padayachee is the Founder and Chairman of ELI. As a dedicated advocate for educational equity, he drives the organization's mission to bridge the digital divide. Notably, he is the first Indian in South African history to receive a $10,000 USD Google Non-Profit Grant, a testament to his leadership in leveraging technology for social impact and youth empowerment.",
      icon: <Award className="text-primary" size={24} />
    },
    {
      name: "Ugendree Pillay",
      role: "Non-Executive Director",
      bio: "Ugendree Pillay serves as a Non-Executive Director and is a proud Class of 1994 alumna. Her appointment brings institutional memory and a personal commitment to Phoenix. She provides strategic oversight and professional acumen, ensuring the initiative remains true to its founding principles while architecting a technologically advanced future for the next generation of Earlingtonians.",
      icon: <Users className="text-primary" size={24} />
    },
    {
      name: "Lisa Mudhray",
      role: "Non-Executive Director",
      bio: "Lisa Mudhray is a Non-Executive Director and Class of 1994 alumna. She channels her professional expertise into preserving the school's heritage while empowering current learners through digital transformation. Lisa’s leadership focuses on governance and sustainable community impact, embodying the lifelong commitment of an Earlingtonian to excellence and educational advancement.",
      icon: <Building2 className="text-primary" size={24} />
    },
    {
      name: "Vanessa Pillay",
      role: "Non-Executive Director",
      bio: "Vanessa Pillay serves as a Non-Executive Director, providing strategic oversight and independent governance. With deep expertise in compliance and organizational accountability, she ensures ELI adheres to the highest ethical standards. Her commitment to transparency is informed by a balance of professional leadership and family responsibility, directly supporting the organization’s public benefit mission and long-term educational impact.",
      icon: <ShieldCheck className="text-primary" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-500">
      {/* Navigation Header */}
      <nav className="fixed w-full z-50 top-0 glass-panel bg-white/80 dark:bg-black/80 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-npc-blue dark:text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-all"
          >
            <ArrowLeft size={16} /> Return to Initiative
          </button>
          <div className="flex flex-col items-end">
            <span className="font-display font-bold text-xs tracking-widest text-slate-900 dark:text-white uppercase">Governance Portal</span>
            <span className="text-[8px] font-mono text-slate-500 uppercase">ELI-GOV-BOARD-2026</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" 
            alt="Boardroom Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <ShieldCheck size={18} className="text-primary" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-300">
              Accountability • Transparency • Impact
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-7xl font-bold tracking-tighter uppercase">Board of Directors</h1>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto font-body italic leading-relaxed">
            ELI is governed by a skills-based board committed to transparency, accountability, and the advancement of educational equity for the students of Earlington Secondary.
          </p>
        </div>
      </section>

      {/* Board Members Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {directors.map((director, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-10 md:p-12 shadow-xl hover:border-primary/50 transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="shrink-0 p-6 bg-slate-50 dark:bg-white/10 rounded-3xl text-primary group-hover:scale-110 transition-transform shadow-inner">
                  {director.icon}
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">{director.name}</h3>
                    <p className="text-[10px] font-black uppercase text-primary tracking-widest mt-1">{director.role}</p>
                  </div>
                  <div className="h-px w-12 bg-primary/30"></div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-body">
                    {director.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Governance Statement */}
      <section className="py-24 bg-slate-50 dark:bg-white/5 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white uppercase">Legacy Leadership</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-body italic">
            "Once an Earlingtonian, always an Earlingtonian. Their appointment to the Board marks a significant milestone in our evolution, bringing together institutional memory, professional acumen, and a deeply rooted commitment to the Earlington community."
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center text-left pt-10">
            <div className="space-y-4">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Contact Governance</h4>
               <a href="mailto:info@earlingtonlegacy.org.za" className="flex items-center gap-3 text-sm hover:text-primary transition-colors font-bold">
                <Mail size={16} className="text-primary" /> info@earlingtonlegacy.org.za
              </a>
            </div>
            <div className="space-y-4">
               <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Transparency Node</h4>
               <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">REG: 2025/931583/08</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer info */}
      <div className="p-12 text-center border-t border-slate-200 dark:border-white/5 bg-background-light dark:bg-background-dark">
        <p className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.5em] font-bold">
          © 2026 Earlington Legacy Initiative NPC • Ethical Oversight Node
        </p>
      </div>
    </div>
  );
};

export default DirectorsPage;
