#!/bin/bash
# Deploy to Afrihost public_html

REPO_DIR="/home/earlinv8y7c3/repositories/EarlingtonLegacy"
WEB_ROOT="/home/earlinv8y7c3/public_html"
DIST_DIR="$REPO_DIR/dist"

echo "🚀 Starting deployment to Afrihost..."

# Pull latest changes
cd $REPO_DIR
git pull origin main

# Install dependencies and build
npm install
npm run build

# Backup current public_html
BACKUP_DIR="$WEB_ROOT-backup-$(date +%Y%m%d-%H%M%S)"
cp -r $WEB_ROOT $BACKUP_DIR
echo "✅ Backup created: $BACKUP_DIR"

# Deploy to public_html
rsync -av --delete $DIST_DIR/ $WEB_ROOT/

# Set correct permissions
chmod -R 755 $WEB_ROOT
chmod -R 644 $WEB_ROOT/*.html $WEB_ROOT/*.css $WEB_ROOT/*.js 2>/dev/null || true

echo "✅ Deployment complete!"
echo "🌐 Site live at: https://earlingtonlegacy.org.za"
