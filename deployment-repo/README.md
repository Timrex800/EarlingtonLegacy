# Earlington Legacy — Deployment Repository

This repository contains a CI workflow and scripts to build the Vite React app and deploy the generated `dist/` to Afrihost (Apache) via FTP.

What is included:
- `/.github/workflows/deploy.yml` — GitHub Action: builds (Node) and uploads `dist/` to your Afrihost server using FTP.
- `deploy-ftp.sh` — Bash script using `lftp` to mirror `dist/` to remote server.
- `deploy-ftp.ps1` — PowerShell script that uses WinSCP to deploy (Windows-friendly).
- `.gitignore` — recommended ignores.
- `deploy-config.example.env` — names of environment variables / secrets the workflow expects.

How to use
1. Create a new GitHub repository (e.g. `earlington-legacy-deploy`) and push the contents of this `deployment-repo` folder to it.

2. In your repository Settings → Secrets → Actions add these secrets:
   - `FTP_HOST` — your Afrihost FTP server (e.g. `ftp.yourdomain.com`)
   - `FTP_USER` — FTP username
   - `FTP_PASSWORD` — FTP password
   - `FTP_REMOTE_DIR` — remote directory to upload to (e.g. `/public_html/`)

3. Option A — Deploy from this repo via CI
   - The workflow triggers on `push` to `main` and will build the project and upload the `dist/` folder.
   - Note: this workflow checks out the repository it's in. If your application source is in a separate repository, configure this repo to mirror the app source (or adapt the workflow to checkout the app repo).

3. Option B — Local deploy
   - Build your app locally in the app repo: `npm install && npm run build`.
   - Run `./deploy-ftp.sh` (Linux/macOS) or `.uild\deploy-ftp.ps1` (Windows) after setting the environment variables.

Quick example: initialize this folder as a new repo and push

```bash
cd deployment-repo
git init
git add .
git commit -m "chore: initial deployment repo"
git branch -M main
# create remote repo on GitHub, then:
git remote add origin https://github.com/<your-user>/<your-deploy-repo>.git
git push -u origin main
```

Security
- Keep FTP credentials in GitHub Secrets only. Do not commit credentials to the repo.

Notes
- The GitHub Action uses `SamKirkland/FTP-Deploy-Action` to upload `dist/` to your Afrihost FTP server. If you prefer SFTP or SSH, update the workflow and use an appropriate Action.
- If your app source is in a separate repository (your app repo), you can either copy this workflow into the app repo (recommended) or create a cross-repo workflow that checks out the app repo.

---
