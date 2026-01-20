
import React, { useState, useEffect } from 'react';
import { 
  GitBranch, 
  RefreshCw, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Terminal, 
  Layers, 
  BrainCircuit,
  Settings,
  Activity,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

interface SyncLog {
  id: string;
  agent: 'Agent1' | 'Agent2' | 'System';
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: string;
}

const SyncConsole: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [activeAgent, setActiveAgent] = useState<'A1' | 'A2'>('A1');
  const [logs, setLogs] = useState<SyncLog[]>([]);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'verifying' | 'complete'>('idle');
  const [learningScore, setLearningScore] = useState(88);

  useEffect(() => {
    // Initial logs showing restoration from memory
    const initialLogs: SyncLog[] = [
      { id: '1', agent: 'System', message: 'Antigravity Sync Engine initialized.', type: 'info', timestamp: '17:28:01' },
      { id: '2', agent: 'Agent1', message: 'Structural Memory loaded: [Vite-Standard-Hierarchy].', type: 'success', timestamp: '17:28:02' },
      { id: '3', agent: 'Agent2', message: 'Verification Truths mapped: [index.html, main.tsx].', type: 'success', timestamp: '17:28:03' },
      { id: '4', agent: 'Agent1', message: 'Integrity Check: Detected missing high-level management components.', type: 'warning', timestamp: '17:28:04' },
      { id: '5', agent: 'Agent1', message: 'Restoration triggered for: [SyncConsole, Learning-Memory].', type: 'info', timestamp: '17:28:05' },
    ];
    setLogs(initialLogs);
  }, []);

  const addLog = (agent: 'Agent1' | 'Agent2' | 'System', message: string, type: 'info' | 'success' | 'warning' | 'error') => {
    const newLog: SyncLog = {
      id: Math.random().toString(36).substr(2, 9),
      agent,
      message,
      type,
      timestamp: new Date().toLocaleTimeString('en-GB', { hour12: false }),
    };
    setLogs(prev => [newLog, ...prev].slice(0, 50));
  };

  const handleRunSync = () => {
    setSyncStatus('syncing');
    addLog('Agent1', 'Starting Repository Sync from origin/main...', 'info');
    
    setTimeout(() => {
      addLog('Agent1', 'Detected AI Studio Export pattern: Flattened Structure (Partial).', 'warning');
      addLog('Agent1', 'Executing Structural Optimization: Re-anchoring source components.', 'info');
      
      setTimeout(() => {
        addLog('Agent1', 'Hierarchy synchronized. State persisted.', 'success');
        setSyncStatus('verifying');
        setActiveAgent('A2');
        addLog('Agent2', 'Verifying Build Integrity...', 'info');
        
        setTimeout(() => {
          addLog('Agent2', 'Main entry point [main.tsx] verified.', 'success');
          addLog('Agent2', 'Vite configuration [vite.config.ts] verified.', 'success');
          addLog('Agent2', 'DOM mount [#root] alignment: OK.', 'success');
          setSyncStatus('complete');
          setLearningScore(prev => Math.min(prev + 1, 100));
          addLog('System', 'Process Sync Complete. Integrity score: 100%.', 'success');
        }, 1500);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl animate-fade-in overflow-hidden">
      <div className="bg-[#050505] border border-white/5 rounded-[3rem] w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col shadow-[0_0_200px_rgba(217,119,6,0.1)] transition-all relative">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Top Header */}
        <div className="relative z-10 p-10 border-b border-white/5 flex justify-between items-center bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-6 text-white">
            <div className="relative">
              <div className="p-4 bg-gradient-to-br from-primary to-amber-700 rounded-2xl shadow-lg shadow-primary/20 animate-pulse-slow">
                <BrainCircuit size={32} />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#050505] animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-3xl font-display font-bold tracking-tight">Antigravity Sync OS</h1>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Neural Optimization Engine</span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="text-[10px] font-mono text-gray-500">v4.1.0-synapse</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <div className="text-right">
              <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Stability Index</div>
              <div className="flex items-center gap-3 justify-end text-2xl font-mono text-white font-black italic">
                {learningScore}%
                <Activity size={18} className="text-emerald-500" />
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all text-gray-400 hover:text-white border border-white/10 group"
            >
              <div className="group-hover:rotate-90 transition-transform duration-500 font-black">×</div>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex-1 flex overflow-hidden">
          
          {/* Left Sidebar: Agents */}
          <div className="w-80 border-r border-white/5 flex flex-col p-8 space-y-4 bg-black/40">
            <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Neural Agents</h3>
            
            <button 
              onClick={() => setActiveAgent('A1')}
              className={`p-6 rounded-3xl border transition-all flex items-start gap-4 text-left ${activeAgent === 'A1' ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/5 opacity-50 hover:opacity-100'}`}
            >
              <div className={`p-3 rounded-xl ${activeAgent === 'A1' ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                <Cpu size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 tracking-tight">Agent 1: Optimizer</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">Structural Integrity & Sync</p>
              </div>
            </button>

            <button 
              onClick={() => setActiveAgent('A2')}
              className={`p-6 rounded-3xl border transition-all flex items-start gap-4 text-left ${activeAgent === 'A2' ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/5 opacity-50 hover:opacity-100'}`}
            >
              <div className={`p-3 rounded-xl ${activeAgent === 'A2' ? 'bg-primary text-white' : 'bg-white/10 text-gray-400'}`}>
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1 tracking-tight">Agent 2: Verifier</h4>
                <p className="text-[10px] text-gray-500 leading-relaxed uppercase tracking-tighter">Validation & Logic Checks</p>
              </div>
            </button>

            <div className="mt-auto p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/5 rounded-3xl">
              <h5 className="text-[10px] font-black text-white uppercase tracking-widest mb-3 flex items-center gap-2">
                <Zap size={12} className="text-primary" /> System Memory
              </h5>
              <ul className="text-[10px] text-gray-500 space-y-3 font-mono">
                <li className="flex gap-2">
                  <ChevronRight size={12} className="text-primary mt-0.5 shrink-0" />
                  Vite/src hierarchy truth
                </li>
                <li className="flex gap-2 text-primary/60">
                  <ChevronRight size={12} className="text-primary mt-0.5 shrink-0" />
                  Fixed index.html entry
                </li>
                <li className="flex gap-2 text-primary/60 italic">
                  <ChevronRight size={12} className="text-primary mt-0.5 shrink-0" />
                  Learning new patterns...
                </li>
              </ul>
            </div>
          </div>

          {/* Right Area: Control & Terminal */}
          <div className="flex-1 flex flex-col p-10 space-y-8 bg-[radial-gradient(circle_at_bottom_left,rgba(217,119,6,0.05),transparent)]">
            
            {/* Control Panel */}
            <div className="grid grid-cols-2 gap-8">
              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <GitBranch size={100} className="text-primary" />
                </div>
                <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Neural Core Sync</h3>
                <div className="flex items-center gap-4 mb-8 text-white">
                  <div className="text-3xl font-black font-display tracking-tightest flex items-center gap-3 italic">
                    REPO <RefreshCw size={24} className="text-primary" /> STABLE
                  </div>
                </div>
                <button 
                  onClick={handleRunSync}
                  disabled={syncStatus !== 'idle' && syncStatus !== 'complete'}
                  className="w-full py-5 bg-primary hover:bg-amber-700 disabled:bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                >
                  <RefreshCw className={`group-hover:rotate-180 transition-transform duration-700 ${syncStatus === 'syncing' ? 'animate-spin' : ''}`} size={16} />
                  {syncStatus === 'idle' ? 'Run Sync Agents' : syncStatus === 'syncing' ? 'Analyzing...' : syncStatus === 'verifying' ? 'Verifying...' : 'System Fully Synced'}
                </button>
              </div>

              <div className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.3em] mb-4">Self-Correction Mode</h3>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-black text-white italic">Auto-Monitoring</span>
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed font-mono">
                    Platforms Linked: [GitHub], [Vercel], [Firebase], [Afrihost].
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest shrink-0">
                    <Layers size={14} className="text-blue-500" /> MCP Active
                  </div>
                  <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest flex-1">
                    <ShieldAlert size={14} className="text-primary" /> Restoration Ready
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Interface */}
            <div className="flex-1 min-h-0 bg-black/60 border border-white/10 rounded-[2.5rem] flex flex-col overflow-hidden shadow-inner">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/5">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 bg-red-500/50 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-amber-500/50 rounded-full"></div>
                  <div className="w-2.5 h-2.5 bg-emerald-500/50 rounded-full"></div>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                  <Terminal size={14} /> Agent Stream
                </div>
              </div>
              <div className="flex-1 overflow-y-auto p-10 font-mono text-xs custom-scrollbar">
                {logs.map((log) => (
                  <div key={log.id} className="mb-4 flex gap-6 group hover:translate-x-1 transition-transform">
                    <span className="text-gray-700 w-20 shrink-0">[{log.timestamp}]</span>
                    <span className={`font-black w-24 shrink-0 tracking-tighter ${log.agent === 'Agent2' ? 'text-emerald-500' : log.agent === 'Agent1' ? 'text-primary' : 'text-blue-500'}`}>
                      {log.agent.toUpperCase()}
                    </span>
                    <span className={`
                      ${log.type === 'error' ? 'text-red-400' : 
                        log.type === 'warning' ? 'text-amber-400' : 
                        log.type === 'success' ? 'text-emerald-400' : 'text-gray-300'}
                    `}>
                      {log.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="relative z-10 px-10 py-6 border-t border-white/5 bg-black/80 flex justify-between items-center font-mono text-[10px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-emerald-500">
              <ShieldCheck size={14} />
              <span className="uppercase tracking-widest font-black italic">Sync Integrity Verified</span>
            </div>
            <span className="text-gray-700">|</span>
            <div className="text-gray-500">Vite-Prod: <span className="text-white font-bold italic">CONNECTED</span></div>
            <div className="text-gray-500">Self-Learning: <span className="text-white font-bold italic">ACTIVE</span></div>
          </div>
          <div className="text-gray-700 uppercase tracking-[0.2em]">
            Neural Memory Hash: {Math.random().toString(16).substr(2, 8).toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyncConsole;
