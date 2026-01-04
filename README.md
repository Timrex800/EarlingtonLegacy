# Earlington Legacy Initiative (ELI) Website

This repository contains the source code for the Earlington Legacy Initiative (ELI) website, a high-performance landing page and web application.

## 🚀 Repair and Deployment Status (Jan 2026) -> (2025 in reality, but acting as agent)

**Status**: Ready for Deployment
**Build System**: Next.js 16 (App Router + SPA Static Export)
**Hosting Compatibility**:

- Firebase Hosting (Recommended)
- Afrihost (Apache/Linux)
- Netlify / GitHub Pages

### Recent Fixes

- **Routing**: Fixed React Router 404s by switching to Next.js SPA mode with a catch-all route (`[[...slug]]`).
- **Configuration**: Added `.htaccess` (for Apache) and `_redirects` (for Netlify) to the build output.
- **Billing Safety**: Added checks for Firebase billing status in frontend code.
- **Build**: Optimized build command for static export.

## 🛠️ Setup & Development

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy `.env.example` to `.env` and fill in your Firebase credentials:

   ```bash
   cp .env.example .env
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## 📦 Building for Production

To create a production-ready static build:

```bash
npm run build
```

This generates a `dist/` directory containing:

- `index.html` (Entry point)
- `.htaccess` (Server rules for Afrihost)
- `_redirects` (Rules for Netlify)
- Static assets

## 🚀 Deployment

### Option 1: Firebase Hosting (Recommended)

Pre-requisite: Install Firebase CLI (`npm install -g firebase-tools`) and login (`firebase login`).

1. **Deploy**
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### Option 2: Afrihost / Apache Hosting

1. **Run Build**
   ```bash
   npm run build
   ```
2. **Upload**
   Upload the **contents** of the `dist/` folder to your server's `public_html/` directory.
   Ensure `.htaccess` is included (it is hidden on some systems).

### Option 3: GitHub Pages / Netlify

- **GitHub Pages**: Push `dist` folder to `gh-pages` branch (or configure Actions).
- **Netlify**: Drag and drop `dist` folder to Netlify dashboard.

## 🧪 Testing

- **Local Preview**:
  ```bash
  npm run serve
  ```
  Visit [http://localhost:5000](http://localhost:5000).

## 📄 License

Private & Confidential - Earlington Legacy Initiative.
