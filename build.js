#!/usr/bin/env node
/**
 * build.js — Auto-generates index.json for each content folder
 * Run: node build.js
 * In Netlify: set Build command = "node build.js"
 */

const fs = require('fs');
const path = require('path');

const CONTENT_DIRS = ['posts', 'testimonials', 'products'];

CONTENT_DIRS.forEach(dir => {
  const fullPath = path.join(__dirname, 'content', dir);
  if (!fs.existsSync(fullPath)) return;

  const files = fs.readdirSync(fullPath)
    .filter(f => f.endsWith('.md'))
    .sort((a, b) => b.localeCompare(a)); // newest first

  const indexPath = path.join(fullPath, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(files, null, 2));
  console.log(`✅ Generated ${dir}/index.json with ${files.length} entries`);
});

console.log('🎉 Build complete!');
