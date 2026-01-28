
import React from 'react';
import { FolderTree, MapPin, X, Link } from 'lucide-react';

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
    section: "Governance & Routing",
    placement: "Application Root / Router",
    items: [
      { key: "Main Domain", text: "https://www.earlingtonlegacy.org.za/" },
      { key: "Directors Portal", text: "https://www.earlingtonlegacy.org.za/directors" },
      { key: "Routing Logic", text: "Hash-based navigation with session persistence" }
    ]
  },
  {
    section: "Header (Navigation)",
    placement: "Sticky Top Bar",
    items: [
      { key: "Primary Brand Text", text: "EARLINGTON LEGACY INITIATIVE NPC" },
      { key: "Registration Tag", text: "REG: 2025/931583/08" },
      { key: "Utility Link", text: "Board of Directors (Portal Access)" },
      { key: "Main CTA", text: "Get Involved" }
    ]
  },
  {
    section: "About Section (Info)",
    placement: "Section ID: about",
    items: [
      { key: "Badge", text: "45th Anniversary Upcoming" },
      { key: "Main Body", text: "Transforming Earlington Secondary School into a center of advanced learning and innovation via Google Non-Profit tools." },
      { key: "Infrastructure", text: "1GBPS Fibre installed via Afrihost & Vumatel." }
    ]
  },
  {
    section: "Events Section (CTA)",
    placement: "Section ID: events",
    items: [
      { key: "Heading", text: "Earlington Day 2026" },
      { key: "Description", text: "Major fundraising event for the 45th Birthday Anniversary of Earlington Secondary School." },
      { key: "Market Stats", text: "100-120 Vendor Stalls Planned" }
    ]
  },
  {
    section: "Phases Section (Education)",
    placement: "Section ID: phases",
    items: [
      { key: "Connectivity", text: "Phase 1: 1GBPS Fibre (Active)" },
      { key: "Media Center", text: "Phase 2: Robotics & Drones (In Progress)" },
      { key: "Goal", text: "Phase 4: Student Competitive Edge" }
    ]
  },
  {
    section: "Footer (Legal)",
    placement: "Page Bottom",
    items: [
      { key: "Copyright", text: "© 2025 Earlington Legacy Initiative NPC" },
      { key: "Compliance", text: "Approved by Google Non Profit" }
    ]
  }
];

const SitemapView: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-background-dark/95 backdrop-blur-xl animate-fade-in overflow-hidden">
      <div className="bg-surface-dark border border-white/10 rounded-3xl w-full max-w-5xl h-full flex flex-col shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-2xl text-primary">
              <FolderTree size={24} />
            </div>
            <div>
              <h2 className="text-xl font-display font-bold text-white tracking-tight">Full Directory Tree & Sitemap</h2>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Verbatim Content Audit • Earlington Legacy v1.0</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            aria-label="Close sitemap viewer"
            className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
          <div className="space-y-12">
            {SITEMAP_DATA.map((section, idx) => (
              <div key={idx} className="relative pl-8 border-l border-white/10">
                <div className="absolute top-0 -left-1.5 w-3 h-3 rounded-full bg-primary border-4 border-surface-dark shadow-[0_0_10px_rgba(217,119,6,0.5)]"></div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    {section.section}
                    <span className="text-[10px] font-mono bg-white/5 text-slate-500 px-2 py-0.5 rounded uppercase tracking-tighter">
                      Location: {section.placement}
                    </span>
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group">
                      <div className="flex items-start gap-3">
                        <Link size={14} className="text-primary mt-1 shrink-0" />
                        <div className="flex-1 overflow-hidden">
                          <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1 group-hover:text-primary transition-colors">
                            {item.key}
                          </p>
                          <p className="text-sm text-slate-200 leading-relaxed font-body italic truncate hover:whitespace-normal">
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
        <div className="p-6 border-t border-white/10 bg-black/20 flex justify-between items-center text-[10px] font-mono text-slate-500">
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
