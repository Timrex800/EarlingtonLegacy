# Earlington Legacy - Deployment Guide

# Afrihost Apache Hosting Environment

## Pre-Deployment Checklist

- [ ] Node.js dependencies installed (`npm install`)
- [ ] Environment variables configured (if any)
- [ ] Next.js build tested locally (`npm run build`)
- [ ] SSL certificate installed at Afrihost
- [ ] Domain DNS pointed to Afrihost nameservers

## Build & Deployment Steps

### 1. Build the Next.js Application

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### 2. Upload to Afrihost

Upload the following to your domain's public root folder (usually `public_html/`):

```
.htaccess          ← Redirect & security rules
robots.txt         ← Search engine crawler instructions
sitemap.xml        ← XML sitemap for SEO
index.html         ← Main entry point
assets/            ← JavaScript, CSS, images (from dist/)
```

**Do NOT upload:**

- `node_modules/` directory
- `.git/` folder
- `src/` folder
- `package.json` & `package-lock.json`
- `tsconfig.json`
- `vite.config.ts`

### 3. Verify Configuration

1. **Check mod_rewrite is enabled** - Contact Afrihost support if you see 404 errors
2. **Test HTTPS** - Visit `https://www.earlingtonlegacy.org.za`
3. **Test redirects:**
   - `http://earlingtonlegacy.org.za` → `https://www.earlingtonlegacy.org.za` ✓
   - `http://www.earlingtonlegacy.org.za` → `https://www.earlingtonlegacy.org.za` ✓
4. **Check performance** - Verify compression is working via browser DevTools

## Directory Structure on Afrihost

```
public_html/
├── .htaccess           (301 redirects & security)
├── robots.txt          (SEO crawler instructions)
├── sitemap.xml         (XML sitemap)
├── index.html          (React app entry point)
├── assets/             (JS, CSS, fonts, images)
│   ├── index-HASH.js
│   ├── index-HASH.css
│   └── ...
└── favicon.ico         (from public folder if applicable)
```

## SEO Configuration

### Google Search Console

1. Add property for `https://www.earlingtonlegacy.org.za`
2. Submit sitemap: `https://www.earlingtonlegacy.org.za/sitemap.xml`
3. Monitor Search Performance report

### robots.txt

- Allows all crawlers by default
- Points to `sitemap.xml` for discovery
- Customize disallowed paths as needed

### HSTS Header

- `.htaccess` includes HSTS header (max-age: 1 year)
- Eligible for Chrome HSTS preload list
- Ensures HTTPS-only browsing

## Troubleshooting

### 404 Errors on Routes

**Issue:** Refreshing page or accessing routes directly returns 404
**Solution:** Ensure `.htaccess` is uploaded and `mod_rewrite` is enabled
**Check:** Contact Afrihost - ask them to enable mod_rewrite

### Redirect Loops

**Issue:** Browser stuck in redirect loop
**Solution:** This shouldn't occur with current `.htaccess`, but if it does:

1. Check SSL certificate is properly installed
2. Ensure only ONE `.htaccess` file exists
3. Verify `RewriteBase /` matches your directory structure

### Mixed Content Warnings

**Issue:** HTTPS page loading HTTP resources
**Solution:** Ensure all asset paths in code are relative or protocol-agnostic

- ✓ Good: `/assets/image.png` or `./image.png`
- ✗ Bad: `http://example.com/image.png`

### Slow Performance

**Issue:** Page loads slowly
**Solution:**

1. Verify GZIP compression is working (check `.htaccess` mod_deflate)
2. Clear browser cache (hard refresh: Ctrl+Shift+R)
3. Use Lighthouse audit in Chrome DevTools

## Build Output Size Optimization

After `npm run build`, check `dist/` folder size:

```bash
# Check build size (Windows)
Get-ChildItem -Path dist -Recurse | Measure-Object -Property Length -Sum

# Optimize if needed
npm run build -- --minify terser
```

Typical optimized build: **500 KB - 2 MB** (gzipped)

## Production Environment Variables

If using environment variables, create `.env.production`:

```env
VITE_API_URL=https://api.earlingtonlegacy.org.za
VITE_ENVIRONMENT=production
```

Reference in code: `import.meta.env.VITE_API_URL`

## Monitoring & Maintenance

- **Monthly:** Check Google Search Console for crawl errors
- **Quarterly:** Review security headers via securityheaders.com
- **Ongoing:** Monitor Core Web Vitals via PageSpeed Insights

## Support Contacts

## Automated Handshake & Deployment

### 1. GitHub Actions (Afrihost)

The project is now configured to automatically deploy to Afrihost whenever you push to the `main` branch.

#### A. SSH Deployment (Recommended)

- **Configuration**: `.github/workflows/deploy-ssh.yml`
- **Setup**: Add the following Secrets to GitHub:
  - `AFRIHOST_HOST`: Server IP/Hostname
  - `AFRIHOST_USERNAME`: `YOUR_AFRIHOST_USERNAME`
  - `AFRIHOST_SSH_KEY`: Your Private SSH Key

#### B. FTP Deployment (Legacy)

- **Configuration**: `.github/workflows/deploy.yml`
- **Setup**: In your GitHub Repository, go to **Settings > Secrets and variables > Actions** and add:
  - `FTP_HOST`
  - `FTP_USER`
  - `FTP_PASSWORD`
  - `FTP_REMOTE_DIR` (e.g., `/public_html/`)

### 2. Server-Side Sync Mechanisms

#### A. Manual Deploy Script

Run `./deploy.sh` on the server to pull, build, and deploy manually with a backup.

#### B. Git Post-Receive Hook

A template is provided in `server-config/git-post-receive.sh`. Install this on the server at `~/.git/hooks/post-receive` to trigger builds on every push to the server's repository.

### 2. Firebase Handshake

The project includes `firebase.json` and `.firebaserc` to link with Google Cloud/Firebase.

- **Login**: Run `firebase login` to authenticate.
- **Initialize**: Run `firebase init` if you need to add more services.
- **Deploy**: Run `firebase deploy` to push to Firebase Hosting.

### 3. Google Cloud Handshake

To link with your Google Cloud Project:

- **Initialize**: Run `gcloud init`
- **Set Project**: `gcloud config set project [YOUR_PROJECT_ID]`

### 4. Fix Firebase Studio (IDX) Preview Error

If you see a "Next.js inferred your workspace root" or Turbopack error in Firebase Studio:

- **Cause**: The environment is trying to run as a Next.js app, but this is a Vite project.
- **Solution**: I have added `.idx/dev.nix` to your project. This file tells Firebase Studio correctly how to:
  1. Use Node.js 20.
  2. Run `npm run dev` (Vite) instead of Next.js.
  3. Map the correct preview port.
- **Action**: Sync the `.idx/dev.nix` file to your workspace and restart the preview.

---

**Last Updated:** 2025-12-30
**Deployment Guide Version:** 1.1
