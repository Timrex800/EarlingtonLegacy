
import React from 'react';
import { ArrowLeft, Target, Eye, Cpu, Network, Users, Calendar, ShieldCheck, Mail, Phone, MapPin, Award, Building2, BookOpen, Globe } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
  onNavigateToDirectors: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onNavigateToDirectors }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-500">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 glass-panel bg-white/80 dark:bg-black/80 border-b border-slate-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-npc-blue dark:text-primary font-black text-[10px] uppercase tracking-[0.3em] hover:opacity-70 transition-all"
          >
            <ArrowLeft size={16} /> Back to Hub
          </button>
          <div className="flex flex-col items-end">
            <span className="font-display font-bold text-xs tracking-widest text-slate-900 dark:text-white uppercase">About the Initiative</span>
            <span className="text-[8px] font-mono text-slate-500 uppercase">ELI-INST-2026-FINAL</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-slate-50 dark:bg-black/40">
        <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1761950572/Earlington%20Legacy%20Initiative%20LOGO.png" 
              alt="Earlington Legacy Initiative Logo" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>
          <p className="text-primary font-display font-bold text-xl md:text-2xl uppercase tracking-[0.2em] animate-fade-in">
            "Nurturing Minds, Building Futures"
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
            About Earlington Legacy Initiative
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Who We Are & Founding Story */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-6 uppercase tracking-tight">Who We Are</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Earlington Legacy Initiative (ELI) is a registered Non-Profit Company (NPC) founded in December 2025 by Timothy Padayachee to transform educational opportunities for students at Earlington Secondary School in Phoenix, Durban, KwaZulu-Natal.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              As a future public benefit organization, we are dedicated to advancing educational equity and empowering underserved youth through technology and community partnership.
            </p>
            
            <div className="pt-10">
              <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-6 uppercase tracking-tight mb-8">Our Founding Story</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  Earlington Secondary School has been a cornerstone of the Phoenix community for decades. However, like many schools in underserved communities, it faces significant challenges in the digital age.
                </p>
                <p>
                  Founded by Timothy Padayachee, ELI was established to bridge the digital divide and create lasting impact for 968 learners in Grades 8 to 12. Our work focuses on empowering youth through innovative educational technology, skills development, and intergenerational knowledge transmission.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-10 bg-npc-blue text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
              <Target className="absolute -bottom-4 -right-4 size-32 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-primary mb-4">Our Mission</h3>
              <p className="text-sm leading-relaxed opacity-90">
                To empower underserved youth at Earlington Secondary School by providing equitable access to digital learning resources, fostering skill building programs, and creating lasting educational impact through community driven initiatives.
              </p>
            </div>
            <div className="p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] shadow-xl relative overflow-hidden group">
              <Eye className="absolute -bottom-4 -right-4 size-32 opacity-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-slate-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                A future where every student at Earlington Secondary School is equipped with the digital literacy, critical thinking skills, and technological fluency needed to succeed in higher education, careers, and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-slate-50 dark:bg-white/5 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white uppercase tracking-tight">What We Do</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-black p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-lg space-y-6 hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary"><BookOpen size={32} /></div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase">Future Skills</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We deliver AI training modules, robotics and coding curricula, and extracurricular workshops for approximately 968 learners, emphasizing creativity and digital citizenship.
              </p>
            </div>
            <div className="bg-white dark:bg-black p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-lg space-y-6 hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary"><Network size={32} /></div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase">Infrastructure</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Providing 1Gbps fibre connectivity (sponsored by VUMATEL/Afrihost), Google Workspace integration, and device procurement for equitable learning access.
              </p>
            </div>
            <div className="bg-white dark:bg-black p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-lg space-y-6 hover:-translate-y-2 transition-transform">
              <div className="p-4 bg-primary/10 rounded-2xl w-fit text-primary"><Users size={32} /></div>
              <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase">Outreach</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Facilitating donor-supported projects and community events like "Earlington Day" to foster awareness and sustainable fundraising.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Current Reach", value: "968 Students", desc: "Grades 8 to 12" },
            { label: "Learning Center", value: "R4,500,000", desc: "Tablets & Infrastructure" },
            { label: "Connectivity", value: "1Gbps Fibre", desc: "VUMATEL Sponsored" },
            { label: "Grant Status", value: "$10,000 USD", desc: "Google Non-Profit" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 bg-npc-blue text-white rounded-[2.5rem] shadow-xl">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">{stat.label}</p>
              <p className="text-2xl font-display font-bold mb-1">{stat.value}</p>
              <p className="text-[10px] opacity-60 uppercase font-mono">{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Preview Link */}
      <section className="py-24 bg-primary text-white text-center space-y-8">
        <h2 className="text-4xl font-display font-bold uppercase">Our Leadership</h2>
        <p className="max-w-2xl mx-auto opacity-90">
          ELI is governed by a nine-member skills-based board committed to transparency, accountability, and impact.
        </p>
        <button 
          onClick={onNavigateToDirectors}
          className="px-10 py-5 bg-white text-primary text-xs font-black uppercase tracking-[0.3em] rounded-full hover:bg-slate-100 transition-all shadow-xl"
        >
          View Board of Directors
        </button>
      </section>

      {/* Values */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white text-center uppercase tracking-tight mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Educational Equity", desc: "Every student deserves access to quality digital learning resources." },
            { title: "Transparency", desc: "Open communication and accountability to our donors and community." },
            { title: "Innovation", desc: "Embracing technology to prepare students for the future." },
            { title: "Partnership", desc: "Collaborative approach to sustainable impact." }
          ].map((v, i) => (
            <div key={i} className="space-y-4">
              <h4 className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm">{v.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Node */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-display font-bold text-primary uppercase tracking-tight">Legal Information</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              ELI operates under a compliant Memorandum of Incorporation (MoI) aligned with the South African Companies Act (2008).
            </p>
            <div className="space-y-4 font-mono text-[10px] uppercase tracking-widest opacity-60">
              <p>Organization Name: Earlington Legacy Initiative NPC</p>
              <p>NPC Registration Number: 2025/931583/08</p>
              <p>Tax Number: 9064023311</p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 p-12 rounded-[4rem] border border-white/10">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Registered Office</h3>
              <div className="space-y-2 text-sm opacity-80 leading-relaxed">
                <p>7 Gildcroft Close, Longcroft,</p>
                <p>Phoenix, KwaZulu-Natal, 4068</p>
                <p>South Africa</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">School Physical Site</h3>
              <div className="space-y-2 text-sm opacity-80 leading-relaxed">
                <p>Earlington Secondary School</p>
                <p>308 Earlcroft Close, Phoenix,</p>
                <p>KwaZulu-Natal, 4068</p>
              </div>
            </div>
            <div className="md:col-span-2 pt-10 border-t border-white/10 flex flex-wrap gap-8 justify-between">
               <div className="space-y-4">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Compliance Status</h4>
                 <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500"><ShieldCheck size={14} /> PBO Pending</div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500"><ShieldCheck size={14} /> Section 18A Pending</div>
                 </div>
               </div>
               <div className="flex flex-col gap-2">
                 <a href="mailto:info@earlingtonlegacy.org.za" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Mail size={16} className="text-primary" /> info@earlingtonlegacy.org.za
                 </a>
                 <a href="tel:+27836573397" className="flex items-center gap-3 text-sm hover:text-primary transition-colors">
                  <Phone size={16} className="text-primary" /> 083 657 3397
                 </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 text-center space-y-12 bg-white dark:bg-background-dark">
        <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white uppercase">Get Involved</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Join us in transforming education for 968 students. Whether through donations, volunteering, or partnerships, your support creates lasting impact.
        </p>
        <button 
          onClick={onBack}
          className="px-12 py-5 bg-primary text-white text-xs font-black uppercase tracking-[0.4em] rounded-full hover:shadow-[0_0_40px_rgba(217,119,6,0.5)] transition-all transform hover:-translate-y-1"
        >
          Return to Hub
        </button>
      </section>
      
      <footer className="p-12 border-t border-slate-200 dark:border-white/5 text-center">
        <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em] font-bold">
          © 2026 Earlington Legacy Initiative NPC • Heritage Meets Innovation
        </p>
      </footer>
    </div>
  );
};

export default AboutPage;
