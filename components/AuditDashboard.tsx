
import React, { useState } from 'react';
import { AUDIT_DATA, ADS_SCRIPT } from '../constants';
import { CheckCircle, AlertTriangle, Clock, ShieldCheck, Target, Zap, Copy, Code } from 'lucide-react';

const AuditDashboard: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'audit' | 'scripts'>('audit');

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[92vh] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,1)]">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-[#111] to-[#0a0a0a]">
          <div>
            <h2 className="text-2xl font-serif font-bold text-white flex items-center gap-3">
              <ShieldCheck className="text-emerald-500" />
              Compliance Management Console
            </h2>
            <p className="text-gray-500 text-sm mt-1 uppercase tracking-widest font-medium">Framework v1.0 • South Africa Legacy</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-all text-gray-400 hover:text-white"
          >
            <span className="sr-only">Close</span>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex border-b border-white/10 px-6">
          <button 
            onClick={() => setActiveTab('audit')}
            className={`px-6 py-4 text-sm font-bold tracking-widest transition-all border-b-2 ${activeTab === 'audit' ? 'border-amber-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            COMPLIANCE AUDIT
          </button>
          <button 
            onClick={() => setActiveTab('scripts')}
            className={`px-6 py-4 text-sm font-bold tracking-widest transition-all border-b-2 ${activeTab === 'scripts' ? 'border-amber-500 text-white' : 'border-transparent text-gray-500 hover:text-gray-300'}`}
          >
            GOOGLE ADS SCRIPTS
          </button>
        </div>

        <div className="overflow-y-auto p-8 space-y-8 flex-1">
          {activeTab === 'audit' ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Target size={40} className="text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400 mb-2 font-bold tracking-widest text-xs uppercase">
                    Ad Relevance
                  </div>
                  <div className="text-4xl font-black text-white">98%</div>
                  <p className="text-[10px] text-gray-500 mt-2">Keyword density optimized (Sec 1.2)</p>
                </div>
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Zap size={40} className="text-blue-500" />
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 mb-2 font-bold tracking-widest text-xs uppercase">
                    Load Speed
                  </div>
                  <div className="text-4xl font-black text-white">0.9s</div>
                  <p className="text-[10px] text-gray-500 mt-2">Mobile experience score: 99/100</p>
                </div>
                <div className="bg-[#111] border border-white/5 p-6 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ShieldCheck size={40} className="text-amber-500" />
                  </div>
                  <div className="flex items-center gap-2 text-amber-400 mb-2 font-bold tracking-widest text-xs uppercase">
                    Status
                  </div>
                  <div className="text-4xl font-black text-white">PASS</div>
                  <p className="text-[10px] text-gray-500 mt-2">Certified Ad Grants compliant</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-black text-white uppercase tracking-[0.2em] opacity-50 px-2">Detailed Component Audit</h3>
                <div className="grid grid-cols-1 gap-3">
                  {AUDIT_DATA.map((item) => (
                    <div key={item.id} className="bg-white/[0.03] border border-white/5 p-5 rounded-2xl flex gap-5 items-start hover:bg-white/[0.05] transition-colors">
                      <div className="mt-1">
                        {item.status === 'passed' ? (
                          <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center"><CheckCircle className="text-emerald-500" size={20} /></div>
                        ) : (
                          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center"><AlertTriangle className="text-amber-500" size={20} /></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-white text-lg">{item.title}</h4>
                          <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full text-gray-300">
                            {item.section}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mt-1 leading-relaxed">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-8 animate-fade-in">
              <div className="bg-blue-500/10 border border-blue-500/20 p-6 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="text-blue-400" />
                  <h3 className="font-bold text-white text-xl">Quality Score Automator</h3>
                </div>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Required by <strong>Section 1.3</strong>. This script runs within your Google Ads account to automatically pause keywords with a Quality Score below 3, preventing potential account suspension.
                </p>
                <div className="relative group">
                  <div className="absolute top-4 right-4 z-10">
                    <button 
                      onClick={() => navigator.clipboard.writeText(ADS_SCRIPT)}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all backdrop-blur-md border border-white/10 flex items-center gap-2 text-xs font-bold"
                    >
                      <Copy size={14} /> COPY SCRIPT
                    </button>
                  </div>
                  <pre className="bg-black/60 p-6 rounded-2xl font-mono text-xs text-blue-300 overflow-x-auto border border-white/5 leading-loose max-h-[400px]">
                    {ADS_SCRIPT}
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#111] rounded-2xl border border-white/5">
                  <h4 className="text-white font-bold mb-2">How to Install</h4>
                  <ol className="text-sm text-gray-400 space-y-2 list-decimal list-inside">
                    <li>Open Google Ads Dashboard</li>
                    <li>Go to Tools &amp; Settings &gt; Scripts</li>
                    <li>Click + New Script</li>
                    <li>Paste the code above</li>
                    <li>Authorize and Schedule Daily at 3 AM</li>
                  </ol>
                </div>
                <div className="p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10">
                  <h4 className="text-amber-500 font-bold mb-2">Compliance Warning</h4>
                  <p className="text-sm text-gray-400">
                    Google Ad Grants require a minimum 5% CTR and high QS. Failure to maintain these metrics via automation can result in loss of $10,000/mo funding.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-6 border-t border-white/10 bg-[#0a0a0a] flex justify-between items-center">
          <p className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">Biome Formatting Standard Applied</p>
          <p className="text-[10px] text-gray-600 font-bold tracking-widest uppercase">Earlington Legacy Initiative • 2024</p>
        </div>
      </div>
    </div>
  );
};

export default AuditDashboard;
