# Deployment Prompt

## Objective

Safe, secure deployment with zero credential leakage.

## Pre-Deployment Checklist

### Security Audit

- [ ] No API keys in source
- [ ] No credentials in configuration
- [ ] No personal identifiers
- [ ] No internal infrastructure details
- [ ] No billing or vendor information
- [ ] No domain names or URLs
- [ ] No organization references
- [ ] Environment abstraction used correctly
- [ ] `.gitignore` properly configured

### Build Validation

- [ ] Production build completes successfully
- [ ] Zero type errors
- [ ] Zero build warnings
- [ ] Bundle size acceptable (< 500KB compressed)
- [ ] All assets properly referenced
- [ ] Metadata present

### Content Verification

- [ ] All links functional
- [ ] Assets loading correctly
- [ ] Copy accurate and professional
- [ ] No placeholder text
- [ ] Content current
- [ ] Registration details accurate

### SEO & Metadata

- [ ] Sitemap generated and valid
- [ ] Robots file configured properly
- [ ] Meta tags complete
- [ ] Canonical URLs set
- [ ] Structured data if applicable

### Accessibility

- [ ] Semantic HTML throughout
- [ ] ARIA labels where needed
- [ ] Keyboard navigation functional
- [ ] Color contrast meets WCAG AA
- [ ] Images have alt text
- [ ] Forms have proper labels

### Performance

- [ ] Automated audit run (target: 90+)
- [ ] Assets optimized
- [ ] CSS/JS minified
- [ ] No unused dependencies
- [ ] Critical resources prioritized

## Deployment Workflow

### 1. Local Verification

```bash
# Clean build
rm -rf out dist
npm run build

# Verify output
# Check all expected files present
```

### 2. Pre-Commit Review

- Review all changed files
- Ensure no sensitive data
- Check commit message is descriptive
- Verify only relevant files staged
- **Run sanitization check**

### 3. Push to Repository

```bash
# Stage approved changes
git add [files]

# Commit with clear message
git commit -m "deploy: [abstract description]"

# Push to remote
git push origin main
```

### 4. CI/CD Verification

- Monitor automated workflow
- Check for build errors
- Review deployment logs
- Verify no secret leaks in logs

### 5. Post-Deployment Verification

- [ ] Site accessible at production URL
- [ ] HTTPS working correctly
- [ ] DNS resolving properly
- [ ] All pages rendering
- [ ] Forms functional (if applicable)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Cross-browser tested

## Deployment Patterns

### Static Hosting Architecture

- Output directory: `out`
- Static files: HTML, CSS, JS, assets
- No server-side rendering
- No environment-specific builds

### Platform Requirements (Abstract)

- Custom domain support
- HTTPS enforcement
- Redirect configuration
- SPA fallback routing

## Rollback Procedure

If deployment fails:

### Immediate Action

1. Identify the issue
2. Assess user impact
3. Decide: quick fix or rollback

### Rollback Steps

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to known good state
git reset --hard [commit-hash]
git push origin main --force
```

### Communication

- Document the issue
- Update `ai/memory/build-state.md`
- Add entry to `ai/memory/decisions-log.md`
- Plan fix for next deployment

## Environment Abstraction

### Local Development

Create `.env.local` (gitignored):

```
VITE_API_KEY=local-dev-key
VITE_ENVIRONMENT=development
```

### Production

Set in hosting platform interface:

- Never commit production secrets
- Use platform secret management
- Rotate keys regularly
- Document required variable names (not values)

## Monitoring Post-Deployment

### Immediate (First Hour)

- Site loads correctly
- No JavaScript errors
- Tracking functional (if enabled)
- Forms work

### Short-term (First Week)

- Monitor error reports
- Check user feedback
- Review analytics for issues
- Test across devices/browsers

### Long-term (Ongoing)

- Performance metrics
- Uptime monitoring
- Search presence
- User engagement

## Common Issues

### Build Failures

- Check runtime version compatibility
- Verify dependencies installed
- Review type errors
- Check for circular dependencies

### Runtime Errors

- Verify environment variables set
- Check asset paths
- Confirm endpoints accessible
- Review console logs

### Performance Issues

- Optimize assets
- Enable compression
- Review bundle size
- Check for memory leaks

### Discovery Problems

- Verify robots file not blocking
- Check sitemap validity
- Confirm meta tags present
- Test structured data

## Sanitization Check Before Deploy

Run mental checklist:

- ❌ No nouns identifying real entities
- ❌ No email-like strings
- ❌ No tokens or keys
- ❌ No URLs
- ❌ No numeric platform IDs
- ❌ No environment variable values
- ❌ No vendor names
- ❌ No domain names
- ❌ No organization references

**If uncertain, do not commit.**

## Post-Deployment Documentation

After successful deployment, update:

1. `ai/memory/build-state.md` - Update status
2. `ai/memory/decisions-log.md` - Add entry if significant
3. Use phase markers, not dates
4. Maintain full abstraction
