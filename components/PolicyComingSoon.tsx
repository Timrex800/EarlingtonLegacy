
import React from 'react';
import { ShieldCheck, X, Info } from 'lucide-react';

interface PolicyComingSoonProps {
  title: string;
  onClose: () => void;
}

const PolicyComingSoon: React.FC<PolicyComingSoonProps> = ({ title, onClose }) => (
  <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-2xl animate-fade-in">
    <div className="bg-white dark:bg-[#0f0f0f] border border-slate-200 dark:border-white/10 rounded-[2.5rem] w-full max-w-lg p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white uppercase tracking-tight">{title}</h3>
            <p className="text-[9px] font-mono text-primary uppercase tracking-widest mt-0.5">Governance Protocol</p>
          </div>
        </div>
        <button 
          onClick={onClose} 
          aria-label="Close dialog"
          className="p-2 hover:bg-slate-100 dark:hover:bg-white/5 rounded-full text-slate-400 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-primary/5 border border-primary/20 rounded-3xl flex items-start gap-5">
          <div className="mt-1">
            <Info size={20} className="text-primary shrink-0" />
          </div>
          <div className="space-y-2">
            <p className="text-sm text-slate-700 dark:text-slate-300 font-bold leading-snug">
              Document Verification in Progress
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The {title} for Earlington Legacy Initiative is currently being finalized by our Board of Directors to ensure absolute alignment with South African NPO standards and POPIA compliance.
            </p>
          </div>
        </div>

        <div className="text-center py-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">Expected Release: Q1 2026</span>
          </div>
        </div>
      </div>

      <button 
        onClick={onClose}
        className="w-full mt-6 py-4 bg-primary text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-opacity-90 transition-all shadow-lg shadow-primary/20"
      >
        Close Terminal
      </button>
    </div>
  </div>
);

export default PolicyComingSoon;
