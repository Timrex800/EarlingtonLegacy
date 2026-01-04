import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './routes';
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';
import ContactPage from '../pages/Contact/ContactPage';
import BlogPage from '../pages/Blog/BlogPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.CONTACT} element={<ContactPage />} />
      <Route path={ROUTES.BLOG} element={<BlogPage />} />
    </Routes>
  );
}
