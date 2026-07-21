#!/bin/bash
set -e
cd "$(dirname "$0")/.."

ZIP_NAME="trkulja-site.zip"

rm -f "$ZIP_NAME"
cd out
zip -rq "../$ZIP_NAME" .
cd ..

echo "Created $ZIP_NAME ($(du -h "$ZIP_NAME" | cut -f1)) - upload its contents into public_html on cPanel."
