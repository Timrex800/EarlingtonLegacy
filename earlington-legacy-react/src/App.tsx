import { BrowserRouter, Link } from 'react-router-dom';
import AppRouter from './routes/Router';
import { ROUTES } from './routes/routes';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        <nav className="bg-white shadow p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">Earlington Legacy</div>
            <ul className="flex space-x-6">
              <li><Link to={ROUTES.HOME} className="hover:text-blue-600 transition-colors">Home</Link></li>
              <li><Link to={ROUTES.ABOUT} className="hover:text-blue-600 transition-colors">About</Link></li>
              <li><Link to={ROUTES.BLOG} className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link to={ROUTES.CONTACT} className="hover:text-blue-600 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main>
          <AppRouter />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
