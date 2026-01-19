
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import PartnersSection from './components/PartnersSection';
import CtaSection from './components/CtaSection';
import ValueSection from './components/ValueSection';
import EducationSection from './components/EducationSection';
import FounderSection from './components/FounderSection';
import DirectorsPage from './components/DirectorsPage';
import Footer from './components/Footer';
import AuditDashboard from './components/AuditDashboard';
import SitemapView from './components/SitemapView';
import AIAssistant from './components/AIAssistant';
import SyncConsole from './components/SyncConsole';
import ParticleBackground from './components/ParticleBackground';
import { ShieldCheck, Cpu } from 'lucide-react';

const App: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);
  const [showSync, setShowSync] = useState(false);
  const [showSitemap, setShowSitemap] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<'landing' | 'directors'>('landing');

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (window.location.pathname === '/directors') {
      setCurrentRoute('directors');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleNavigate = (id: string) => {
    if (id === 'directors') {
      setCurrentRoute('directors');
      window.scrollTo(0, 0);
      return;
    }
    
    if (currentRoute !== 'landing') {
      setCurrentRoute('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isModalOpen = showAudit || showSitemap || showSync;

  if (currentRoute === 'directors') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <DirectorsPage onBack={() => setCurrentRoute('landing')} />
        <AIAssistant />
        <Footer onSitemapClick={() => setShowSitemap(true)} />
        {showSitemap && <SitemapView onClose={() => setShowSitemap(false)} />}
      </div>
    );
  }

  return (
    <div className={`min-h-screen relative transition-all duration-700 ${isModalOpen ? 'blur-md' : ''}`}>
      <ParticleBackground />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <InfoSection />
        <PartnersSection />
        <CtaSection />
        <ValueSection />
        <EducationSection />
        <FounderSection onExplore={() => handleNavigate('directors')} />
      </main>

      <Footer onSitemapClick={() => setShowSitemap(true)} />

      <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-4">
        <button 
          onClick={() => setShowSync(true)}
          className="p-3 bg-primary/90 text-white rounded-full hover:scale-110 transition-transform shadow-lg border border-primary/20 animate-pulse-slow"
          title="Antigravity Neural Sync"
        >
          <Cpu size={20} />
        </button>
        <button 
          onClick={() => setShowAudit(true)}
          className="p-3 bg-black/80 dark:bg-white/10 text-white rounded-full hover:scale-110 transition-transform shadow-lg border border-white/10"
          title="Compliance Dashboard"
        >
          <ShieldCheck size={20} />
        </button>
      </div>

      <AIAssistant />

      {showAudit && <AuditDashboard onClose={() => setShowAudit(false)} />}
      {showSync && <SyncConsole onClose={() => setShowSync(false)} />}
      {showSitemap && <SitemapView onClose={() => setShowSitemap(false)} />}
    </div>
  );
};

export default App;
