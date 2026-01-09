
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

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-panel bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <a href="https://www.earlingtonlegacy.org.za/" className="flex-shrink-0 flex flex-col justify-center cursor-pointer group">
            <span className="font-display font-bold text-lg md:text-xl tracking-wider text-npc-blue dark:text-white transition-colors group-hover:text-primary">
              EARLINGTON LEGACY INITIATIVE NPC
            </span>
            <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-wider">
              REG: 2025/931583/08
            </span>
          </a>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['about', 'partners', 'events', 'phases'].map((item) => (
              <a 
                key={item}
                href={`#${item}`}
                onClick={(e) => handleLinkClick(e, item)}
                className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors capitalize"
              >
                {item}
              </a>
            ))}
            <a 
              href="#directors" 
              onClick={(e) => handleLinkClick(e, 'directors')}
              className="text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
            >
              Board of Directors
            </a>
            
            <button 
              type="button"
              className="bg-primary hover:bg-gold-dark text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              Get Involved
            </button>
            
            <button 
              type="button"
              className="border border-primary text-primary hover:bg-primary/10 px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105"
              title="Member Portal Coming Soon"
              disabled
            >
              Portal
            </button>
            
            <button 
              type="button"
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-slate-700 dark:text-white"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              type="button"
              className="text-slate-800 dark:text-slate-200 hover:text-primary"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
