# Repository Directory Tree: Earlington Legacy Initiative

```text
.
├── .github/                  # GitHub Workflows & Actions
│   └── workflows/            # CI/CD Pipelines
├── .vscode/                  # VS Code Settings
├── dist/                     # Production Build Output (Auto-generated)
├── governance/               # Governance & Compliance Documents
│   └── build-constitution/   # Build Rules & PDF Generator
│       ├── BUILD_CONSTITUTION.md
│       └── generate_pdf.py
├── src/                      # Application Source Code
│   ├── components/           # React UI Components
│   │   ├── AIAssistant.tsx   # AI Chat Interface
│   │   ├── AuditDashboard.tsx # Compliance Dashboard
│   │   ├── ConductView.tsx   # Code of Conduct View
│   │   ├── CtaSection.tsx    # Call to Action Section
│   │   ├── DirectorsPage.tsx # Board of Directors Page
│   │   ├── EducationSection.tsx
│   │   ├── Footer.tsx        # Application Footer
│   │   ├── FounderSection.tsx
│   │   ├── Header.tsx        # Navigation Header
│   │   ├── Hero.tsx          # Landing Hero Section
│   │   ├── InfoSection.tsx
│   │   ├── ParticleBackground.tsx # Visual Effects
│   │   ├── PartnersSection.tsx
│   │   ├── SitemapView.tsx   # Visual Sitemap
│   │   └── ValueSection.tsx
│   ├── App.tsx               # Main Application Component & Routing
│   ├── constants.tsx         # Static Content & Configuration Constants
│   ├── index.css             # Tailwind Directives & Global Styles
│   ├── main.tsx              # React DOM Entry Point
│   └── types.ts              # System TypeScript Interfaces
├── .env.example              # Environment Variable Templates
├── AUTOMATION_SETUP.md       # Automation & Script Documentation
├── firebase.json             # Firebase Hosting Configuration
├── index.html                # Main HTML Entry Point
├── package.json              # Dependencies, Scripts & Metadata
├── PIPELINE.md               # CI/CD & Deployment Documentation
├── postcss.config.js         # PostCSS Config (Tailwind Processor)
├── README.md                 # Project Overview
├── REPOSITORY_TREE.md        # Project Structure (This File)
├── tailwind.config.js        # Tailwind CSS Theme & Path Configuration
├── tsconfig.json             # TypeScript Compiler Options
├── vercel.json               # Vercel Deployment & Rewrites
└── vite.config.ts            # Vite Bundler Configuration
```

## Stack Connectivity Map

This section outlines the technology stack and their configuration connections within the repository.

### Frontend Core

- **[React 19](package.json)**: UI Library.
  - Connected to **[Vite](vite.config.ts)** (Build System)
  - Connected to **[main.tsx](src/main.tsx)** (Entry Point)
- **[TypeScript](tsconfig.json)**: Static Typing.
  - Connected to **[Vite](vite.config.ts)** (Transpiler)
  - Connected to **[VS Code](.vscode)** (IntelliSense)

### Styling & UI

- **[Tailwind CSS](tailwind.config.js)**: Utility-First CSS.
  - Connected to **[PostCSS](postcss.config.js)** (Processor)
  - Connected to **[index.css](src/index.css)** (Directives)
  - Connected to **[src/components](src/components)** (Usage)
- **[Framer Motion](package.json)**: Animations.
  - Connected to **[Src Components](src/components)** (e.g., Hero, ParticleBackground)
- **[Lucide React](package.json)**: Iconography.
  - Connected to **[Src Components](src/components)** (UI Icons)

### Intelligence & Backend Services

- **[Google GenAI SDK](package.json)**: AI Integration.
  - Connected to **[AIAssistant.tsx](src/components/AIAssistant.tsx)** (Chat Interface)
  - Connected to **[.env](.env.example)** (API Key Management)

### Deployment & Infrastructure

- **[Vercel](vercel.json)**: Primary Hosting & Edge Network.
  - Connected to **[Vite](vite.config.ts)** (Output Directory)
  - Connected to **[GitHub](.github)** (Deployment Triggers)
- **[Firebase](firebase.json)**: Secondary Hosting / Legacy.
  - Connected to **[dist/](dist)** (Static Assets)
  - Connected to **[GitHub Actions](.github/workflows/dev-to-main.yml)** (Deployment Pipeline)

### Governance & Automation

- **[Python](governance/build-constitution/generate_pdf.py)**: Documentation Generation.
  - Connected to **[ReportLab](governance/build-constitution/generate_pdf.py)** (PDF Engine)
  - Connected to **[BUILD_CONSTITUTION.md](governance/build-constitution/BUILD_CONSTITUTION.md)** (Content Source)
