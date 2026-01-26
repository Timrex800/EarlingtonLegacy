
import React from 'react';
import { ArrowLeft, Users, ShieldCheck, Award, Building2, Briefcase } from 'lucide-react';

interface Director {
  name: string;
  role: string;
  focus?: string;
  bio: string;
  icon: React.ReactNode;
  image?: string;
  type: 'Executive' | 'Non-Executive';
}

interface DirectorsPageProps {
  onBack: () => void;
}

// Fix: Explicitly use React.FC to allow reserved props like 'key' when mapping over directors
const DirectorCard: React.FC<{ director: Director }> = ({ director }) => (
  <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-12 shadow-xl hover:shadow-2xl hover:border-primary/40 transition-all duration-500 group relative overflow-hidden h-full">
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
    
    <div className="relative z-10 block">
      <div className="md:float-left md:mr-12 mb-8 md:mb-6">
        <div className="relative w-44 h-44 md:w-64 md:h-64 group-hover:scale-105 transition-transform duration-700">
          {/* Outer Gold Foil Glow - Enhanced */}
          <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-[3rem] opacity-30 blur-xl group-hover:opacity-70 transition-opacity"></div>
          
          {/* Gold Foil Border Frame - Premium Quality */}
          <div className="absolute inset-0 p-[4px] bg-gradient-to-tr from-[#8A6E2F] via-[#FCF6BA] to-[#BF953F] rounded-[3rem] shadow-[0_15px_40px_rgba(191,149,63,0.4)]">
            {/* High Color Glass Inner Container */}
            <div className="relative h-full w-full rounded-[2.8rem] overflow-hidden bg-white/10 backdrop-blur-2xl">
              {director.image ? (
                <img 
                  src={director.image} 
                  alt={director.name} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                />
              ) : (
                <div className="flex items-center justify-center h-full w-full bg-slate-50 dark:bg-white/5 text-primary">
                  {React.isValidElement(director.icon) 
                    ? React.cloneElement(director.icon as React.ReactElement<any>, { size: 72 }) 
                    : director.icon}
                </div>
              )}
              {/* High Color Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-white/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60"></div>
              {/* Dynamic Reflection */}
              <div className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-30deg] group-hover:left-[150%] transition-all duration-1500 ease-in-out"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className={`text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-none transition-all duration-500
            ${director.name === "Timothy Padayachee" 
              ? "text-transparent bg-clip-text bg-gradient-to-br from-slate-950 via-slate-800 to-slate-900 filter drop-shadow-[0_1px_0_#BF953F] drop-shadow-[0_-1px_0_#BF953F] drop-shadow-[1px_0_0_#BF953F] drop-shadow-[-1px_0_0_#BF953F] drop-shadow-[0.5px_0.5px_0_#B38728] py-1" 
              : "text-slate-900 dark:text-white group-hover:text-primary"}`}>
            {director.name}
          </h3>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            <span className="text-[11px] md:text-[12px] font-black uppercase text-primary tracking-widest bg-primary/5 px-4 py-1.5 rounded-full border border-primary/20">
              {director.role}
            </span>
            {director.focus && (
              <span className="text-[10px] md:text-[11px] font-mono text-amber-700 dark:text-amber-500 uppercase tracking-widest font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Focus: {director.focus}
              </span>
            )}
            <span className="w-1.5 h-1.5 bg-slate-300 dark:bg-white/20 rounded-full hidden md:block"></span>
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Class of 1994</span>
          </div>
        </div>
        <div className="h-1.5 w-24 bg-gradient-to-r from-primary via-amber-500 to-amber-700 rounded-full mb-8 opacity-70"></div>
        <p className="text-base md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-body text-justify whitespace-pre-line">
          {director.bio}
        </p>
      </div>
      <div className="clear-both"></div>
    </div>
  </div>
);

const DirectorsPage: React.FC<DirectorsPageProps> = ({ onBack }) => {
  const directors: Director[] = [
    {
      name: "Timothy Padayachee",
      role: "Chairman & Founder",
      type: "Executive",
      bio: "As the Founding Chairperson and Programme & Impact Director of the Earlington Legacy Initiative NPC (ELI), Timothy Padayachee is dedicated to bridging the digital divide through educational equity. A pioneer in his field, Timothy led ELI to become the ninth organization in South African history to secure a $10,000 Google Non-Profit Grant. He is the first Indian male in the South African community to attain this specific recognition for leveraging technology for social good. Timothy brings over 18 years of community building experience as the founder of the thriving Earlington Secondary School Alumni group on Facebook. His role at ELI encompasses strategic leadership, governance, and the design of evidence-based programmes. As the organization’s spokesperson, he manages stakeholder partnerships and compliance while spearheading initiatives like the Earlington Day event scheduled for 2 May 2026.",
      image: "https://res.cloudinary.com/drj03twbh/image/upload/v1763249127/Timothy%20Padayachee%20Director%20JoziSocial.png",
      icon: <Award className="text-primary" size={24} />
    },
    {
      name: "Lisa Mudhray",
      role: "Secretary & Treasurer Director",
      type: "Executive",
      bio: "Lisa Mudhray is a Secretary & Treasurer Director and Class of 1994 alumna. She channels her professional expertise into preserving the school's heritage while empowering current learners through digital transformation. Lisa's leadership focuses on governance and sustainable community impact, embodying the lifelong commitment of Earlingtonians to excellence and educational advancement.",
      image: "https://res.cloudinary.com/drj03twbh/image/upload/v1769144451/Lisa_Mudhray_zepxa4.png",
      icon: <Building2 className="text-primary" size={24} />
    },
    {
      name: "Ugendree Pillay",
      role: "Fundraising & Resource Director",
      type: "Executive",
      bio: "Ugendree Pillay serves as a Fundraising & Resource Director and is a proud Class of 1994 alumna. Her appointment brings institutional memory and a personal commitment to Phoenix. She provides strategic oversight and professional acumen, ensuring the initiative remains true to its founding principles while architecting a technologically advanced future for the next generation of Earlingtonians.",
      image: "https://res.cloudinary.com/drj03twbh/image/upload/v1769144447/Ugendree_Pillay_nxcsvn.jpg",
      icon: <Users className="text-primary" size={24} />
    },
    {
      name: "Vanessa Pillay",
      role: "Non-Executive Director",
      focus: "Legal/Governance",
      type: "Non-Executive",
      bio: `Vanessa Pillay serves as a Non-Executive Director, providing strategic oversight and independent governance. With deep expertise in compliance and organizational accountability, she ensures ELI adheres to the highest ethical standards. Her commitment to transparency is informed by professional excellence and an unwavering dedication to educational equity in the Phoenix community.

As a mother of four, Vanessa's greatest motivation stems from her family. She balances the responsibilities of parenthood with her professional contributions to ELI, demonstrating that meaningful impact is possible through dedication and heart. Her work with the initiative reflects her belief in creating opportunities for the next generation—showing her children and the broader Earlington community that dreams are achievable with commitment and purpose.

Vanessa is proud to contribute to building a legacy of educational empowerment, one step, one initiative, one day at a time.`,
      image: "https://res.cloudinary.com/drj03twbh/image/upload/v1769144449/Vanessa_Pillay_yokvow.png",
      icon: <ShieldCheck className="text-primary" size={24} />
    }
  ];

  const chairman = directors.find(d => d.name === "Timothy Padayachee");
  const otherExecutives = directors.filter(d => d.type === 'Executive' && d.name !== "Timothy Padayachee");
  const nonExecutives = directors.filter(d => d.type === 'Non-Executive');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-500">
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
            <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest opacity-60">ELI-BOARD-V5-2026</span>
          </div>
        </div>
      </nav>

      <section className="relative pt-40 pb-24 px-6 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25 grayscale pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?q=80&w=2070&auto=format&fit=crop" 
            alt="Boardroom Background" 
            className="w-full h-full object-cover blur-[2px]"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,149,63,0.08),transparent_70%)]"></div>
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-8 py-3 bg-white/5 border border-white/10 rounded-full backdrop-blur-md shadow-2xl">
            <ShieldCheck size={20} className="text-primary animate-pulse" />
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-slate-300">
              Accountability • Transparency • Impact
            </span>
          </div>
          <h1 className="font-display text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none text-white">
            Board of <span className="text-primary italic">Directors</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto font-body italic leading-relaxed">
            ELI is governed by a skills-based board of alumni and community leaders committed to bridging the digital divide through advanced educational equity.
          </p>
        </div>
      </section>

      {/* Primary Leadership - Chairman */}
      <section className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {chairman && <DirectorCard director={chairman} />}
        </div>
      </section>

      {/* Executive Directors Section Header & Members */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="flex items-center gap-4 text-primary">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em]">Strategic Leadership</span>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-xl md:text-3xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-widest">Executive Directors</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {otherExecutives.map((director, idx) => (
            <DirectorCard key={idx} director={director} />
          ))}
        </div>
      </section>

      {/* Non-Executive Directors Section Header & Members */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-slate-200 dark:border-white/5">
        <div className="flex flex-col items-center mb-16 space-y-4 text-center">
          <div className="flex items-center gap-4 text-slate-400">
            <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-slate-400/30"></div>
            <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em]">Governance & Oversight</span>
            <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-slate-400/30"></div>
          </div>
          <h2 className="text-xl md:text-3xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-widest">Non-Executive Directors</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {nonExecutives.map((director, idx) => (
            <DirectorCard key={idx} director={director} />
          ))}
        </div>
      </section>

      {/* Legacy Quote Footer */}
      <section className="py-32 bg-slate-50 dark:bg-white/5 px-6 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="p-6 bg-gradient-to-tr from-[#BF953F] via-[#FCF6BA] to-[#B38728] rounded-full w-fit mx-auto text-npc-blue shadow-2xl border-4 border-white/20">
            <Award size={48} />
          </div>
          <blockquote className="text-2xl md:text-4xl text-slate-700 dark:text-slate-300 font-body italic leading-tight max-w-4xl mx-auto opacity-90">
            "Once an Earlingtonian, always an Earlingtonian. Their appointment to the Board marks a significant milestone in our evolution, bringing together institutional memory, professional acumen, and a deeply rooted commitment to the Earlington community."
          </blockquote>
        </div>
      </section>

      <div className="p-20 text-center border-t border-slate-200 dark:border-white/5 bg-background-light dark:bg-background-dark">
        <p className="text-[12px] font-mono text-slate-400 uppercase tracking-[0.5em] font-black">
          Earlington Legacy Initiative NPC • Ethical Governance Node
        </p>
      </div>
    </div>
  );
};

export default DirectorsPage;