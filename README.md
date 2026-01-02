# Earlington Legacy Institute (ELI)

The Earlington Legacy Institute is built on a "Zero-G" (Zero-Gravity) infrastructure—a lightweight, highly resilient, and globally distributed serverless mesh topology designed to ensure the institute's legacy is never offline.

For a detailed breakdown of our cloud architecture, see [ARCHITECTURE.md](ARCHITECTURE.md).

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

The main page `src/app/page.tsx` contains the dashboard layout with various audit tools.

## AI & Utility Tools

### Generative AI Audit Tool

We use the latest Google Gemini models for deep auditing and content generation.

- **Script**: `scripts/genai_audit.py` (Python)
- **Setup**:
  1. `pip install --upgrade google-genai`
  2. Set environment variable: `$env:GOOGLE_CLOUD_API_KEY="your-key-here"`
- **Usage**: `python scripts/genai_audit.py`

## Configuration & Deployment

### 1. Firebase & Google Cloud

The project is linked to the Firebase project `studio-6933832787`.

- **Config**: `.firebaserc` and `firebase.json` are pre-configured.
- **Experimental Features**: `authInterrupts` is enabled in `next.config.mjs`.

### 2. Afrihost (Automated Deployment)

Automated deployment to Afrihost is set up via GitHub Actions and Server-side hooks:

- **SSH Workflow**: `.github/workflows/deploy-ssh.yml` (Primary)
- **FTP Workflow**: `.github/workflows/deploy.yml` (Legacy)
- **Manual Script**: `deploy.sh` (Server-side)
- **Git Hook**: `server-config/git-post-receive.sh` (Trigger on push)

To sync changes, simply push to the `main` branch:

```bash
git push origin main
```

## Deployment Guide

For complete deployment details, see [DEPLOYMENT.md](DEPLOYMENT.md).
