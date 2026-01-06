import { Link, useNavigate } from 'react-router-dom';
import { Menu, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onNavigate: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleTheme, onNavigate }) => {
  const navigate = useNavigate();
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <nav className="fixed w-full z-50 top-0 transition-all duration-300 glass-panel bg-background-light/80 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex-shrink-0 flex flex-col justify-center cursor-pointer group" 
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-display font-bold text-lg md:text-xl tracking-wider text-npc-blue dark:text-primary transition-colors group-hover:text-primary dark:group-hover:text-white">
              EARLINGTON LEGACY INITIATIVE NPC
            </span>
            <span className="font-mono text-[10px] text-slate-500 dark:text-slate-400 tracking-wider">
              REG: 2025/931583/08
            </span>
          </div>

          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {['about', 'partners', 'events', 'phases'].map((item) => (
              <Link 
                key={item}
                to={`/${item}`}
                className="text-sm font-medium hover:text-primary transition-colors capitalize"
              >
                {item}
              </Link>
            ))}
            <Link to="/directors" className="text-sm font-medium hover:text-primary transition-colors">Board of Directors</Link>
            
            <button 
              onClick={() => onNavigate('events')}
              className="bg-primary hover:bg-opacity-90 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
              Get Involved
            </button>
            
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-800 dark:text-slate-200 hover:text-primary">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;