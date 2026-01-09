
import React from 'react';
// Changed FileTree to FolderTree as FileTree is not exported by lucide-react
import { FolderTree, TextCursor, MapPin, X } from 'lucide-react';

const SITEMAP_DATA = [
  {
    section: "Metadata (Global)",
    placement: "HTML Head / index.html",
    items: [
      { key: "Canonical URL", text: "https://www.earlingtonlegacy.org.za/" },
      { key: "Page Title", text: "Earlington Legacy Initiative | Official NPC Site" },
      { key: "Meta Description", text: "Transforming Earlington Secondary School into a center of advanced learning and innovation. Bridging the digital divide via https://www.earlingtonlegacy.org.za/" }
    ]
  },
  {
    section: "Header (Navigation)",
    placement: "Sticky Top Bar",
    items: [
      { key: "Primary Brand Link", text: "https://www.earlingtonlegacy.org.za/" },
      { key: "Primary Brand Text", text: "EARLINGTON LEGACY INITIATIVE NPC" },
      { key: "Registration Tag", text: "REG: 2025/931583/08" },
      { key: "Nav Link 1", text: "about" },
      { key: "Nav Link 2", text: "partners" },
      { key: "Nav Link 3", text: "events" },
      { key: "Nav Link 4", text: "phases" },
      { key: "Utility Link", text: "Board of Directors" },
      { key: "Main CTA", text: "Get Involved" }
    ]
  },
  {
    section: "Hero Section",
    placement: "Main Landing View",
    items: [
      { key: "Overline", text: "Est. 2025" },
      { key: "Heading", text: "BUILDING A FUTURE" },
      { key: "Subheading", text: "Transforming Earlington Secondary School into a center of advanced learning and innovation to bridge the digital divide." },
      { key: "Hero CTA", text: "Start the Journey" },
      { key: "Scroll Prompt", text: "Scroll to explore" },
      { key: "Side Note", text: "A non-profit initiative by the Earlington Legacy Initiative NPC" }
    ]
  },
  {
    section: "About Section (Info)",
    placement: "Section ID: about",
    items: [
      { key: "Badge", text: "45th Anniversary Upcoming" },
      { key: "Heading", text: "A New Era of Innovation" },
      { key: "Main Body", text: "The Earlington Legacy Initiative NPC, established on December 1st, 2025, is a non-profit organization dedicated to transforming Earlington Secondary School into a center of advanced learning and innovation. Our vision is to integrate cutting-edge tools, especially those sponsored by Google Non-Profit, along with other advanced learning technologies into the school's curriculum to bridge the digital divide and equip students for the modern world." },
      { key: "Feature 1 Title", text: "Infrastructure" },
      { key: "Feature 1 Body", text: "1GBPS Fibre installed via Afrihost & Vumatel." },
      { key: "Feature 2 Title", text: "Advanced Skills" },
      { key: "Feature 2 Body", text: "AI training & Google Skills for Grades 8-12." }
    ]
  },
  {
    section: "Partners Section",
    placement: "Section ID: partners",
    items: [
      { key: "Overline", text: "Collaboration" },
      { key: "Heading", text: "Partnerships & Impact" },
      { key: "Metric 1 Value", text: "1GB" },
      { key: "Metric 1 Label", text: "Fibre Speed" },
      { key: "Metric 2 Value", text: "8-12" },
      { key: "Metric 2 Label", text: "Grades Empowered" },
      { key: "Partners List", text: "Afrihost • Vumatel Fibre • Google Non-Profit" }
    ]
  },
  {
    section: "Events Section (CTA)",
    placement: "Section ID: events",
    items: [
      { key: "Overline", text: "Major Fundraiser" },
      { key: "Heading", text: "Earlington Day 2026" },
      { key: "Description", text: "A major fundraising event coinciding with the 45th Birthday Anniversary of Earlington Secondary School, planned for late April 2026. Funds raised will support the projects of the Earlington Legacy Initiative NPC." },
      { key: "Card 1 Heading", text: "Anniversary Celebration" },
      { key: "Card 2 Heading", text: "Fundraising Market (Main Event)" },
      { key: "Card 3 Heading", text: "School Showcase" }
    ]
  },
  {
    section: "Phases Section (Education)",
    placement: "Section ID: phases",
    items: [
      { key: "Heading", text: "Project Phases & Plans" },
      { key: "Subheading", text: "Our strategic roadmap for school transformation." },
      { key: "Phase 1 Status", text: "DONE - Connectivity" },
      { key: "Phase 2 Status", text: "IN PROGRESS - Media Center" },
      { key: "Phase 3 Status", text: "PLANNED - Devices" },
      { key: "Phase 4 Goal", text: "GOAL - Student Success" }
    ]
  },
  {
    section: "Footer (Legal)",
    placement: "Page Bottom",
    items: [
      { key: "Official Domain", text: "https://www.earlingtonlegacy.org.za/" },
      { key: "Brand Statement", text: "Dedicated to transforming Earlington Secondary School into a center of innovation. Join us in creating a brighter future for our students through technology and heritage." },
      { key: "Registration", text: "NPC Reg No: 2025/931583/08" },
      { key: "Copyright", text: "© 2025 Earlington Legacy Initiative NPC | Registration: 2025/931583/08" },
      { key: "Approval Tag", text: "A Non-Profit Company supporting Earlington Secondary School. Approved by Google Non Profit." },
      { key: "Signature", text: "Built for the students" }
    ]
  }
];

const SitemapView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background-dark/90 dark:bg-black/95 backdrop-blur-xl animate-fade-in overflow-hidden">
      <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-3xl w-full max-w-5xl h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 dark:border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-2xl text-primary">
              <FolderTree size={24} />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Full Directory Tree & Sitemap</h2>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Verbatim Content Audit • Earlington Legacy v1.0</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar bg-slate-50/50 dark:bg-transparent">
          <div className="space-y-12">
            {SITEMAP_DATA.map((section, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10">
                <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-primary border-4 border-surface-dark shadow-[0_0_10px_rgba(217,119,6,0.5)]"></div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {section.section}
                    <span className="text-[10px] font-mono bg-slate-100 dark:bg-white/5 text-slate-500 px-2 py-0.5 rounded uppercase tracking-tighter">
                      Location: {section.placement}
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-4 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-white/10 transition-colors group">
                      <div className="flex items-start gap-3">
                        <TextCursor size={14} className="text-primary mt-1 shrink-0" />
                        <div>
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
                            {item.key}
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-body italic">
                            "{item.text}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-black/20 flex justify-between items-center text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin size={12} />
            <span>Verbatim Strings Mapped to DOM Hierarchy</span>
          </div>
          <div className="hidden md:block">
            Last Updated: 2025/12/01 • NPC COMPLIANT
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapView;
