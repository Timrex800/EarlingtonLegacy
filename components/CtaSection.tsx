import React from 'react';

const CtaSection: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-primary text-sm uppercase tracking-wider">Major Fundraiser</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6 text-slate-900 dark:text-white">Earlington Day 2026</h2>
          <p className="text-slate-600 dark:text-slate-300">
            A major fundraising event coinciding with the 45th Birthday Anniversary of Earlington Secondary School, planned for late April 2026. Funds raised will support the projects of the Earlington Legacy Initiative NPC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm7O9gAEjn9F4wdB1u_970VgaXejDW1xC04AQcabq21K1iW5fyO9uZx9_mgk12uaXOLhMdNxD200Jvc31GNT4Pl_IH-hpUGVO_jPSlFl7KARqzh_T87R9SrdXlz16vphimuUQXchmLHJJdnsWskEiXZi3Hi9apNMDF2L3vZBiQzRbouhPgBUR8uFq1u9JGQapsvNjRCiknMhbOfpKaUwGegBVrU5etdpUOLCfCi95dOwZVcc2RrrMiFl1JNbG1dBa6_HjZm0wHTrM" 
                alt="Community picnic" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-mono font-bold">
                APRIL '26
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">Anniversary Celebration</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Earlington Secondary • 45th Birthday</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-2">Celebrating 45 years of history while launching our future legacy.</p>
              <button className="w-full py-2 border border-slate-300 dark:border-white/20 rounded hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-sm font-medium">Learn More</button>
            </div>
          </div>

          {/* Card 2 - Main Event */}
          <div className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden border-2 border-primary relative transform md:-translate-y-4 shadow-2xl">
            <div className="absolute top-0 left-0 w-full bg-primary text-white text-center py-1 text-xs font-bold uppercase tracking-widest z-10">
              Main Event
            </div>
            <div className="h-52 overflow-hidden relative mt-6">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEVGyIWlb_UyxOfKYVKPq3Hu48Otb3rz0KkWr-86QhQFrb3pbiyewC0juhmLIv4QvRnUYMj3eViMgvou6WrGve9G1PR6bb2jHgqW_nGkP4JpOzxq4R0VOmy9WRH3FE4RWu6ec6ozl1Nj1hPa3h0S729GxOy6kTrfmwlfBwwMrKYMJdW0U8E4-TDIZAJRoWsf4jW5jey1UzYoUGKHbSLyvFjG5GOllMUf5IqzneiWe185TXBn-mLRL367Ncm5_M4-AOaGQA7B-l9t0" 
                alt="Cultural performance" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold mb-2 text-slate-900 dark:text-white">Fundraising Market</h3>
              <p className="text-primary font-medium text-sm mb-4">Last week April - First week May</p>
              <p className="text-slate-600 dark:text-slate-300 mb-6">Experience 100-120 stalls featuring local vendors, food, and crafts. All proceeds contribute to project initiatives.</p>
              <button className="w-full py-3 bg-primary text-white rounded font-bold shadow-lg hover:bg-opacity-90 transition-all">Vendor Registration</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-background-light dark:bg-background-dark rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCscf2vStp9dTNEkpf8e5gNRUQSFDkDs7gm5tFhJcpifD1aypiJGQjhW0nJyK-wGJGFeRDC0sO84PC38HfQWvYW02i0nF3DGx6ndp6bwsizjTH0JJKhe8bHEzOkb4PGeVF12jL0LOOwciMcJJcOr37w-srXbUD2B876Sy8URwhVfD1kcW1YwNkOo7EAp2U5IDYhs6E2gmblUeCzQF3oCdKELK5fHU6otqhkhLbcAK82a5q96K_dS3bGqT-bMPqYsJ52IBIN-zaUobE" 
                alt="School tour" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-mono font-bold">
                MAY '26
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">School Showcase</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Campus Grounds</p>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 line-clamp-2">See the progress of our fibre installation and meet the team.</p>
              <button className="w-full py-2 border border-slate-300 dark:border-white/20 rounded hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-sm font-medium">Register Interest</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;