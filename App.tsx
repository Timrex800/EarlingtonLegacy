
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection'; // Now About Section
import PartnersSection from './components/PartnersSection';
import CtaSection from './components/CtaSection'; // Now Events Section
import ValueSection from './components/ValueSection';
import EducationSection from './components/EducationSection'; // Now Phases Section
import Footer from './components/Footer';
import AuditDashboard from './components/AuditDashboard';
import ParticleBackground from './components/ParticleBackground';
import { ShieldCheck } from 'lucide-react';

type SectionKey = 'about' | 'partners' | 'events' | 'phases';

const SECTION_PATHS: Record<SectionKey, `/${SectionKey}`> = {
  about: '/about',
  partners: '/partners',
  events: '/events',
  phases: '/phases',
};

const isSectionKey = (value: string): value is SectionKey => {
  return value === 'about' || value === 'partners' || value === 'events' || value === 'phases';
};

const scrollToSection = (id?: string) => {
  if (!id) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  const yOffset = 88;
  const y = element.getBoundingClientRect().top + window.scrollY - yOffset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl text-center">
        <h1 className="font-display text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [showAudit, setShowAudit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<{ section?: string }>();

  const sectionFromPath: SectionKey | undefined =
    params.section && isSectionKey(params.section) ? params.section : undefined;

  const isInvalidSection = Boolean(params.section) && !sectionFromPath;

  // Initialize Dark Mode based on preference or system
  useEffect(() => {
    const isDark =
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (isInvalidSection) return;
    const id = sectionFromPath;
    requestAnimationFrame(() => scrollToSection(id));
  }, [location.pathname, isInvalidSection, sectionFromPath]);

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
    if (isSectionKey(id)) {
      const targetPath = SECTION_PATHS[id];
      if (location.pathname === targetPath) {
        scrollToSection(id);
        return;
      }
      navigate(targetPath);
      return;
    }

    scrollToSection(id);
  };

  if (isInvalidSection) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <Hero />
        <InfoSection />
        <PartnersSection />
        <CtaSection />
        <ValueSection />
        <EducationSection />
      </main>

      <Footer />

      {/* Floating Audit Button (Kept discreetly as it might be needed for compliance checks mentioned in metadata) */}
      <div className="fixed bottom-6 left-6 z-[60]">
        <button 
          onClick={() => setShowAudit(true)}
          className="p-3 bg-black/80 dark:bg-white/10 text-white rounded-full hover:scale-110 transition-transform shadow-lg border border-white/10"
          title="Compliance Dashboard"
        >
          <ShieldCheck size={20} />
        </button>
      </div>

      {showAudit && <AuditDashboard onClose={() => setShowAudit(false)} />}
    </div>
  );
};

const App: React.FC = () => {
  // Ensure basename is set correctly for deployment, fallback to '/'
  const basename = process.env.BASE_PATH || '/';

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:section" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
