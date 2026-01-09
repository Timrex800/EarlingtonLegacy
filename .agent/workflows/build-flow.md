---
description: Build Stack Flow & Project Cleanliness
---

# 🛠️ Earlington Legacy Build Stack Flow

This document defines the strictly required files and the process to build and deploy the application. Anything not listed here is considered redundant and can be safely removed.

## 🏗️ The Stack

- **Engine**: Vite 6.0
- **Framework**: React 19 (SPA)
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS (via CDN in index.html)
- **Hosting**: Afrihost (Apache) / Firebase Hosting

## 📁 Source of Truth (Required Files)

### Core Logic

- `App.tsx`: Main application router and state management.
- `index.tsx`: React entry point.
- `constants.tsx`: Project strings and theme tokens.
- `types.ts`: Global TypeScript definitions.

### Required Directories

- `components/`: All UI components (Header, Hero, etc.).
- `public/`: Static assets (Logo, CNAME, robots.txt, sitemap.xml, .htaccess).

### Configuration

- `package.json`: Dependencies and scripts (`npm run dev`, `npm run build`).
- `tsconfig.json`: TypeScript configuration.
- `vite.config.ts`: Vite build settings (Output: `/out`).
- `firebase.json`: Firebase Hosting rules.
- `.gitignore`: Rules to keep build junk out of the repository.

## 🔄 Build & Deploy Process

// turbo

1. **Build the project**

   ```bash
   npm run build
   ```

   _This creates a fresh `/out` folder with optimized files._

2. **Sync to Cloud**
   - Push to `main` branch.
   - GitHub Actions handles the heavy lifting (FTP to Afrihost and Hosting to Firebase).

## 🧹 Housekeeping Rules

1. **No `.next/` or `web-app/`**: This is a Vite project. Next.js artifacts are redundant.
2. **Keep root clean**: New components MUST go into `/components`.
3. **Build Artifacts**: Never commit `/out` or `/node_modules`.
