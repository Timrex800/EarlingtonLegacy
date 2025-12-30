#!/usr/bin/env bash
set -euo pipefail

# Deploy `dist/` to remote FTP using lftp
# Environment variables required:
#   FTP_HOST, FTP_USER, FTP_PASSWORD, FTP_REMOTE_DIR (optional, default /public_html/)

: "${FTP_HOST:?Need FTP_HOST}"
: "${FTP_USER:?Need FTP_USER}"
: "${FTP_PASSWORD:?Need FTP_PASSWORD}"
FTP_REMOTE_DIR=${FTP_REMOTE_DIR:-/public_html/}
LOCAL_DIR=dist

if [ ! -d "$LOCAL_DIR" ]; then
  echo "Build directory '$LOCAL_DIR' not found. Run 'npm run build' first."
  exit 1
fi

echo "Starting upload to $FTP_HOST -> $FTP_REMOTE_DIR"

# mirror -R: reverse mirror (local -> remote)
lftp -u "$FTP_USER","$FTP_PASSWORD" "$FTP_HOST" -e "mirror -R --delete --verbose $LOCAL_DIR $FTP_REMOTE_DIR; bye"

echo "Upload finished."
