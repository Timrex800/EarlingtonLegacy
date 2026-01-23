
import React from 'react';
import { Menu, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme, onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  // Logos mapped to specific Cloudinary production URLs
  const colorLogo = "https://res.cloudinary.com/drj03twbh/image/upload/v1761950572/Earlington%20Legacy%20Initiative%20LOGO.png";
  const silverLogo = "https://res.cloudinary.com/drj03twbh/image/upload/v1765921600/ELI_Silver_Transparent_zch6yh.png";

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-panel bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <a 
            href="https://www.earlingtonlegacy.org.za/" 
            onClick={(e) => { e.preventDefault(); onNavigate('landing'); }}
            className="flex-shrink-0 flex items-center gap-5 cursor-pointer group"
          >
            <div className="relative">
              <img 
                src={darkMode ? silverLogo : colorLogo} 
                alt="ELI Logo" 
                className={`h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105 ${darkMode ? 'drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]' : 'drop-shadow-[0_4px_6px_rgba(0,0,0,0.05)]'}`}
              />
            </div>
            
            <div className="flex flex-col justify-center border-l border-slate-200 dark:border-white/20 pl-5">
              <span className="font-display font-bold text-base md:text-lg tracking-wider text-npc-blue dark:text-primary transition-colors group-hover:text-primary leading-tight">
                EARLINGTON LEGACY INITIATIVE
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-widest mt-0.5 uppercase">
                REG: 2025/931583/08
              </span>
            </div>
          </a>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['about', 'partners', 'events', 'phases'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="text-[11px] font-black uppercase tracking-widest hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#directors" 
              onClick={(e) => handleLinkClick(e, 'directors')}
              className="text-[11px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors"
            >
              Directors Portal
            </a>
            
            <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
              Get Involved
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-800 dark:text-slate-200 hover:text-primary p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
