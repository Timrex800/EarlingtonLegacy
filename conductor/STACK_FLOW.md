# ELI Stack Orchestration & Flow

This document defines the "handshake" and authorization flow between service layers.

## 1. Stack Overview

| Layer            | Provider         | Role               | Authorization                        |
| :--------------- | :--------------- | :----------------- | :----------------------------------- |
| **Domain**       | Afrihost         | DNS Authority      | Managed via ClientZone               |
| **Hosting**      | GitHub Pages     | Frontend CDN       | GitHub Personal Access Token (PAT)   |
| **Logic**        | Firebase         | Backend/Auth       | Firebase Admin SDK / Service Account |
| **Intelligence** | Google AI Studio | Generative context | Gemini API Key (stored in .env)      |

## 2. Context Engineering (AI Studio)

- **Prompt State**: Managed via [Direct Link](https://aistudio.google.com/app/prompts?state=%7B%22ids%22:%5B%221XyzbQ8xUqInykIu-GiqVoVZIG3YZmao0%22%5D,%22action%22:%22open%22,%22userId%22:%22117947360650694935977%22,%22resourceKeys%22:%7B%7D%7D&usp=sharing)
- **Handoff**: AI assistant (AURA) uses the site structure (via `sitemap.xml`) to provide mission-accurate responses.
- **Metadata**: `public/metadata.json` provides the system-level description for the AI Studio deployment.

## 3. GitHub -> Local -> Afrihost/Firebase Flow

1. **GitHub** is the Source of Truth.
2. **Local** is the Development/IDX environment.
3. **GitHub Actions** automatically deploys to:
   - GitHub Pages (Custom Domain: `earlingtonlegacy.org.za`)
   - Firebase Hosting (Optional/Secondary backup)

## 4. Authorization Checklist

- [x] GitHub Pages Secret (GITHUB_TOKEN) - Automatic
- [ ] Firebase CI Token - **Action Required**: Run `firebase login:ci` and add to GitHub Secrets as `FIREBASE_TOKEN` if using Firebase Hosting in Actions.
- [ ] GPT/Gemini API Key - **Action Required**: Add to `.env.local` for local dev.

## 5. Site Map Index (Discovery)

- **Public**: `https://earlingtonlegacy.org.za/sitemap.xml`
- **Internal**: `conductor/SITEMAP_INDEX.md`
