"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection'; 
import PartnersSection from '../components/PartnersSection';
import CtaSection from '../components/CtaSection'; 
import ValueSection from '../components/ValueSection';
import EducationSection from '../components/EducationSection'; 
import LegacySearch from '../components/LegacySearch';
import Footer from '../components/Footer';
import AuditDashboard from '../components/AuditDashboard';
import ParticleBackground from '../components/ParticleBackground';
import { ShieldCheck } from 'lucide-react';

export default function Home() {
  const [showAudit, setShowAudit] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Header darkMode={darkMode} toggleTheme={toggleTheme} onNavigate={handleNavigate} />
      
      <main className="relative z-10">
        <Hero />
        <LegacySearch />
        <InfoSection />
        <PartnersSection />
        <CtaSection />
        <ValueSection />
        <EducationSection />
      </main>

      <Footer />

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
}
