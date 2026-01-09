
import React, { useState } from 'react';
import { AUDIT_DATA, ADS_SCRIPT, TOPOLOGY_DETAILS } from '../constants';
import { CheckCircle, AlertTriangle, ShieldCheck, Target, Zap, Copy, Code, Network, Database, Cpu, Globe } from 'lucide-react';

const AuditDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'scripts' | 'topology'>('audit');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background-dark/90 dark:bg-black/95 backdrop-blur-xl animate-fade-in overflow-hidden">
      <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/10 rounded-[2.5rem] w-full max-w-5xl max-h-[94vh] overflow-hidden flex flex-col shadow-2xl transition-all">
        {/* Header */}
        <div className="p-8 border-b border-slate-200 dark:border-white/10 flex justify-between items-center bg-gradient-to-br from-primary/5 to-transparent">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-500/20 rounded-2xl">
                <ShieldCheck className="text-emerald-500" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-display font-bold text-slate-900 dark:text-white tracking-tight">
                  Compliance & Intelligence Console
                </h2>
                <p className="text-primary text-[10px] mt-1 uppercase tracking-[0.3em] font-black">
                  Zero-G Cloud Topology • v2.0
                </p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-2xl transition-all text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/10"
          >
            <span className="sr-only">Close</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 dark:border-white/10 px-8 bg-slate-50 dark:bg-black/40">
          <button 
            onClick={() => setActiveTab('audit')}
            className={`px-8 py-5 text-xs font-black tracking-[0.2em] transition-all border-b-2 uppercase ${activeTab === 'audit' ? 'border-primary text-slate-900 dark:text-white bg-primary/5' : 'text-slate-500 hover:text-slate-900 dark:hover:text-gray-300 border-transparent'}`}
          >
            Audit Logs
          </button>
          <button 
            onClick={() => setActiveTab('topology')}
            className={`px-8 py-5 text-xs font-black tracking-[0.2em] transition-all border-b-2 uppercase ${activeTab === 'topology' ? 'border-primary text-slate-900 dark:text-white bg-primary/5' : 'text-slate-500 hover:text-slate-900 dark:hover:text-gray-300 border-transparent'}`}
          >
            Zero-G Topology
          </button>
          <button 
            onClick={() => setActiveTab('scripts')}
            className={`px-8 py-5 text-xs font-black tracking-[0.2em] transition-all border-b-2 uppercase ${activeTab === 'scripts' ? 'border-primary text-slate-900 dark:text-white bg-primary/5' : 'text-slate-500 hover:text-slate-900 dark:hover:text-gray-300 border-transparent'}`}
          >
            Automation
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-10 space-y-10 flex-1 custom-scrollbar bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.03),transparent)]">
          {activeTab === 'audit' && (
            <div className="animate-fade-in space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Ad Relevance', value: '98%', icon: Target, color: 'text-emerald-500', desc: 'CTR Stability Index' },
                  { label: 'Edge Latency', value: '0.74s', icon: Zap, color: 'text-blue-500', desc: 'TTFB (Global PoPs)' },
                  { label: 'Compliance', value: 'PASS', icon: ShieldCheck, color: 'text-primary', desc: 'Google Grant Approved' },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-6 rounded-3xl relative overflow-hidden group hover:border-primary/30 transition-all">
                    <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <stat.icon size={60} className={stat.color} />
                    </div>
                    <div className={`flex items-center gap-2 ${stat.color} mb-3 font-black tracking-widest text-[10px] uppercase`}>
                      {stat.label}
                    </div>
                    <div className="text-4xl font-black text-slate-900 dark:text-white">{stat.value}</div>
                    <p className="text-[10px] text-slate-500 dark:text-gray-500 mt-2 font-mono">{stat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.3em] px-2 mb-6">Component Integrity Report</h3>
                <div className="grid grid-cols-1 gap-4">
                  {AUDIT_DATA.map((item) => (
                    <div key={item.id} className="bg-white/[0.01] border border-white/5 p-6 rounded-[1.5rem] flex gap-6 items-start hover:bg-white/[0.03] transition-all hover:translate-x-1">
                      <div className="mt-1">
                        {item.status === 'passed' ? (
                          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20"><CheckCircle className="text-emerald-500" size={24} /></div>
                        ) : (
                          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20"><AlertTriangle className="text-amber-500" size={24} /></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-white text-lg tracking-tight">{item.title}</h4>
                          <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1 bg-white/10 rounded-lg text-gray-400 border border-white/5">
                            {item.section}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-2 leading-relaxed font-body">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'topology' && (
            <div className="animate-fade-in space-y-10">
              <div className="p-8 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[2.5rem]">
                <h3 className="text-xl font-display font-bold text-white mb-2">Zero-G Cloud Framework</h3>
                <p className="text-sm text-gray-400 mb-8 max-w-2xl">A serverless, lightweight infrastructure designed for resilience and global distribution.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { title: "CDN & Edge", value: TOPOLOGY_DETAILS.hosting, icon: Globe, detail: "Firebase Global PoPs" },
                    { title: "Persistence", value: TOPOLOGY_DETAILS.database, icon: Database, detail: "Firestore Real-time Sync" },
                    { title: "Intelligence", value: TOPOLOGY_DETAILS.intelligence, icon: Cpu, detail: "Gemini 3 Integration" },
                    { title: "Routing", value: TOPOLOGY_DETAILS.dns, icon: Network, detail: "Anycast Latency Routing" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-primary/30 transition-all group">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-300 font-bold mb-1">{item.value}</p>
                        <p className="text-[10px] text-gray-500 font-mono">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 border border-white/10 bg-white/[0.02] rounded-[1.5rem] flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center border border-blue-500/20 text-blue-400">
                  <Network size={32} />
                </div>
                <div>
                  <h4 className="font-bold text-white">GCLB Failover Management</h4>
                  <p className="text-sm text-gray-400">Automatic traffic redirection between Africa (Johannesburg) and EU (Frankfurt) nodes is active.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scripts' && (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-blue-500/10 border border-blue-500/20 p-8 rounded-[2.5rem]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-2xl text-blue-400">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-tight">Quality Score Automator</h3>
                    <p className="text-[10px] text-blue-400/70 font-black tracking-widest uppercase">Compliance Protocol Sec 1.3</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed font-body">
                  Ensures Ad Grant stability by dynamically pausing low-relevance clusters. Execute within the Ads Script Engine daily at 03:00 SAST.
                </p>
                <div className="relative group">
                  <div className="absolute top-4 right-4 z-10">
                    <button 
                      onClick={() => {
                        navigator.clipboard.writeText(ADS_SCRIPT);
                        alert("Script copied to clipboard!");
                      }}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all backdrop-blur-md border border-white/10 flex items-center gap-2 text-xs font-bold shadow-2xl"
                    >
                      <Copy size={16} /> COPY SOURCE
                    </button>
                  </div>
                  <pre className="bg-black/80 p-8 rounded-[1.5rem] font-mono text-[11px] text-blue-300/80 overflow-x-auto border border-white/5 leading-relaxed max-h-[400px] custom-scrollbar">
                    {ADS_SCRIPT}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-8 border-t border-white/10 bg-black/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-[10px] text-gray-500 font-black tracking-widest uppercase italic">All Systems Operational • Earlington Legacy Infrastructure</p>
          </div>
          <div className="flex items-center gap-6 text-[10px] text-gray-600 font-bold tracking-widest uppercase">
            <span>Serverless Edge v2.4</span>
            <span className="text-primary/40">•</span>
            <span>SECURED BY G-CLoud Armor</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditDashboard;
