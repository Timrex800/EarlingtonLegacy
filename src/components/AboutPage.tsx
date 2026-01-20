
import React from 'react';
import { ArrowLeft, Target, Eye, Cpu, Network, Users, Calendar, ShieldCheck, Mail, Phone, MapPin, ExternalLink, Award } from 'lucide-react';

interface AboutPageProps {
  onBack: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-body transition-colors duration-500">
      {/* Navigation Header */}
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
            <span className="text-[8px] font-mono text-slate-500">Node: ELI-HISTORY-2026</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
          <div className="flex justify-center mb-8">
            <img 
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1761950572/Earlington%20Legacy%20Initiative%20LOGO.png" 
              alt="ELI Logo" 
              className="h-32 md:h-48 w-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
            Nurturing Minds,<br/><span className="text-primary italic">Building Futures</span>
          </h1>
          <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Core Identity */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-l-4 border-primary pl-6 uppercase tracking-tight">Who We Are</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Earlington Legacy Initiative (ELI) is a registered Non-Profit Company (NPC) founded in December 2025 by Timothy Padayachee to transform educational opportunities for students at Earlington Secondary School in Phoenix, Durban, KwaZulu-Natal. 
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              As a future public benefit organization, we are dedicated to advancing educational equity and empowering underserved youth through technology and community partnership.
            </p>
            <div className="p-6 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <ShieldCheck className="text-primary" />
                <h4 className="font-bold uppercase text-xs tracking-widest">Founding Vision</h4>
              </div>
              <p className="text-sm italic">"The vision for ELI was born from a deep commitment to ensuring that every student at Earlington Secondary School has access to the digital tools and skills they need to thrive in the 4th Industrial Revolution."</p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="p-10 bg-npc-blue text-white rounded-[3rem] space-y-4 shadow-2xl relative overflow-hidden group">
              <Target className="absolute -bottom-4 -right-4 size-32 opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-primary">Our Mission</h3>
              <p className="text-sm leading-relaxed opacity-90">
                To empower underserved youth at Earlington Secondary School by providing equitable access to digital learning resources, fostering skill building programs, and creating lasting educational impact through community driven initiatives.
              </p>
            </div>
            <div className="p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] space-y-4 shadow-xl relative overflow-hidden group">
              <Eye className="absolute -bottom-4 -right-4 size-32 opacity-5 dark:opacity-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-display font-bold uppercase tracking-widest text-slate-900 dark:text-white">Our Vision</h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                A future where every student at Earlington Secondary School is equipped with the digital literacy, critical thinking skills, and technological fluency needed to succeed in higher education, careers, and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Legacy */}
      <section className="py-24 bg-slate-50 dark:bg-white/5 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white uppercase">Founder & Directors</h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Governed by Excellence & Alumni Pride</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timothy Padayachee */}
            <div className="lg:col-span-3 bg-white dark:bg-black p-10 rounded-[4rem] border border-slate-200 dark:border-white/10 shadow-2xl flex flex-col md:flex-row gap-12 items-center">
              <div className="shrink-0 w-64 h-64 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden border-4 border-primary/20">
                <div className="w-full h-full flex items-center justify-center text-primary opacity-50"><Users size={80} /></div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white uppercase">Timothy Padayachee</h3>
                  <div className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] font-black text-primary uppercase tracking-widest">Chairman & Founder</div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Timothy is a dedicated education advocate with deep roots in the Phoenix community. His vision for educational equity and digital transformation drives ELI's mission to empower the next generation of learners.
                </p>
                <div className="p-6 bg-primary/5 rounded-3xl border border-primary/20 flex items-start gap-5">
                  <Award className="text-primary shrink-0" size={32} />
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                    Timothy Padayachee is the ninth person in South African history and the first Indian to receive the Google Non Profit Grant of $10,000 USD in Credits from Google for Earlington Legacy Initiative.
                  </p>
                </div>
              </div>
            </div>

            {/* Directors - Ugendree & Lisa */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-black p-10 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-primary"><Users size={24} /></div>
                  <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white uppercase">Ugendree Pillay & Lisa Mudhray</h3>
                </div>
                <p className="text-[11px] font-black uppercase text-primary tracking-widest">Board Directors • Class of 1994 Alumni</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">
                  "Once an Earlingtonian, always an Earlingtonian. It's a motto they don't just speak, but actively live through their dedicated service."
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Their journey from students to Directors represents the living embodiment of Earlington's enduring impact across generations, bringing institutional memory and professional acumen to the board.
                </p>
              </div>
              <div className="bg-npc-blue p-10 rounded-[3rem] text-white space-y-6 shadow-xl flex flex-col justify-center">
                <div className="space-y-2">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-primary">Strategic Oversight</h4>
                  <p className="text-sm opacity-90 leading-relaxed">
                    The appointment of Ugendree and Lisa marks a significant milestone, ensuring the Initiative remains true to its founding principles while boldly embracing the future for Phoenix youth.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Board Governance Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Projects */}
      <section className="py-24 px-6 max-w-7xl mx-auto space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-200 dark:border-white/10 pb-10">
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-slate-900 dark:text-white uppercase">Our Impact</h2>
            <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Current Reach & Infrastructure Scale</p>
          </div>
          <div className="bg-primary px-6 py-3 rounded-2xl text-white font-black text-xs uppercase tracking-widest">
            968 Students • Grades 8-12
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              title: "Digital Learning Center", 
              stat: "R4,500,000", 
              desc: "Providing 1000 tablets, WiFi infrastructure, and teacher training to modernize the campus.",
              icon: Cpu 
            },
            { 
              title: "Technology Integration", 
              stat: "Google Native", 
              desc: "Google Non-Profit credits, high-speed fibre connectivity, and secure cloud network systems.",
              icon: Network 
            },
            { 
              title: "Community Programs", 
              stat: "Annual Events", 
              desc: "Earlington Day flea markets, Oracle training, and Microsoft supported project tracks.",
              icon: Calendar 
            }
          ].map((item, i) => (
            <div key={i} className="group p-10 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[3rem] hover:border-primary/50 transition-all shadow-lg hover:-translate-y-2">
              <div className="p-4 bg-slate-50 dark:bg-white/10 rounded-2xl w-fit text-primary mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-xs font-black uppercase text-slate-500 mb-2 tracking-widest">{item.title}</h3>
              <p className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">{item.stat}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Legal Node */}
      <section className="py-24 bg-slate-950 text-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-display font-bold text-primary uppercase tracking-tight">Governance & Compliance</h2>
            <p className="text-sm opacity-70 leading-relaxed">
              ELI operates under a compliant Memorandum of Incorporation (MoI) aligned with the South African Companies Act (2008). We are committed to absolute transparency and no distribution of income to directors.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                <ShieldCheck className="text-emerald-500" size={16} /> Section 18A Status Pending
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-slate-400">
                <ShieldCheck className="text-emerald-500" size={16} /> SARS PBO Guidelines Aligned
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/5 p-12 rounded-[4rem] border border-white/10">
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Entity Data</h3>
              <div className="space-y-4 text-sm font-mono opacity-80 uppercase tracking-widest">
                <p>NPC REG: 2025/931583/08</p>
                <p>TAX ID: 9064023311</p>
                <p>EST: NOV 2025 (CIPC)</p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary">Headquarters</h3>
              <div className="space-y-2 text-sm opacity-80 leading-relaxed">
                <p>Earlington Legacy Initiative NPC</p>
                <p>7 Gildcroft Close, Longcroft,</p>
                <p>Phoenix, KZN, 4068, South Africa</p>
              </div>
            </div>
            <div className="md:col-span-2 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">School Physical Address</h4>
                <p className="text-sm opacity-70">Earlington Secondary School, 308 Earlcroft Close, Phoenix, 4068</p>
              </div>
              <div className="flex flex-col gap-4">
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
      <section className="py-24 text-center space-y-12">
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
