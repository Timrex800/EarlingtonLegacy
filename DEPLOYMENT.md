# Earlington Legacy - Deployment Guide
# Afrihost Apache Hosting Environment

## Pre-Deployment Checklist

- [ ] Node.js dependencies installed (`npm install`)
- [ ] Environment variables configured (if any)
- [ ] Vite build tested locally (`npm run build`)
- [ ] SSL certificate installed at Afrihost
- [ ] Domain DNS pointed to Afrihost nameservers

## Build & Deployment Steps

### 1. Build the React Application
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

- **Afrihost Support:** support@afrihost.com
- **Vite Docs:** https://vitejs.dev
- **React Docs:** https://react.dev

---

**Last Updated:** 2025-12-29
**Deployment Guide Version:** 1.0
