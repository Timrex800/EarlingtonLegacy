#!/bin/bash
WEB_ROOT="/home/earlinv8y7c3/public_html"
REPO_DIR="/home/earlinv8y7c3/repositories/EarlingtonLegacy"

echo "🎯 Git hook triggered - deploying to Afrihost..."

# Change to repo directory
cd $REPO_DIR || exit

# Pull latest changes
git --git-dir="$REPO_DIR/.git" --work-tree="$REPO_DIR" pull origin main

# Install and build
npm ci
npm run build

# Deploy to public_html
rsync -av --delete $REPO_DIR/dist/ $WEB_ROOT/

# Fix permissions
find $WEB_ROOT -type d -exec chmod 755 {} \;
find $WEB_ROOT -type f -exec chmod 644 {} \;

echo "✅ Deployment complete! https://earlingtonlegacy.org.za"
