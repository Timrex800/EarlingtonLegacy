
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import PartnersSection from './components/PartnersSection';
import CtaSection from './components/CtaSection';
import ValueSection from './components/ValueSection';
import EducationSection from './components/EducationSection';
import FounderSection from './components/FounderSection';
import DirectorsPage from './components/DirectorsPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';
import AuditDashboard from './components/AuditDashboard';
import SitemapView from './components/SitemapView';
import AIAssistant from './components/AIAssistant';
import ParticleBackground from './components/ParticleBackground';
import { ShieldCheck } from 'lucide-react';

const App: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);
  const [showSitemap, setShowSitemap] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [currentRoute, setCurrentRoute] = useState<'landing' | 'directors' | 'about'>('landing');

  useEffect(() => {
    // Explicitly default to Light (Day) mode unless 'dark' is specifically saved
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const path = window.location.pathname;
    if (path === '/directors') setCurrentRoute('directors');
    else if (path === '/about') setCurrentRoute('about');
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
    
    if (id === 'about') {
      setCurrentRoute('about');
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

  const isModalOpen = showAudit || showSitemap;

  if (currentRoute === 'directors') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <DirectorsPage onBack={() => setCurrentRoute('landing')} />
        <AIAssistant />
        <Footer onSitemapClick={() => setShowSitemap(true)} />
        {showSitemap && <SitemapView onClose={() => setShowSitemap(false)} />}
        <Analytics />
      </div>
    );
  }

  if (currentRoute === 'about') {
    return (
      <div className="min-h-screen relative overflow-x-hidden">
        <AboutPage onBack={() => setCurrentRoute('landing')} onNavigateToDirectors={() => setCurrentRoute('directors')} />
        <AIAssistant />
        <Footer onSitemapClick={() => setShowSitemap(true)} />
        {showSitemap && <SitemapView onClose={() => setShowSitemap(false)} />}
        <Analytics />
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

      <div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-3">
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
      {showSitemap && <SitemapView onClose={() => setShowSitemap(false)} />}
      <Analytics />
    </div>
  );
};

export default App;
