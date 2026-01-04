export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  BLOG: '/blog',
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
