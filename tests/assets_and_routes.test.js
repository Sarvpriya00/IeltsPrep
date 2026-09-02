import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '..');

export async function runAssetsAndRoutesTests() {
  const results = [];
  
  function assert(condition, message) {
    results.push({ pass: !!condition, message });
  }

  const pages = [
    'index.html',
    'reading.html',
    'listening.html',
    'writing.html',
    'speaking.html',
    'exercises.html',
    'analytics.html',
    'errors.html',
    'guide.html',
    'writing-tutorial.html',
    'ielts_page.html'
  ];

  // 1. Check HTML endpoints via HTTP
  const baseUrl = 'http://localhost:3001';
  for (const page of pages) {
    try {
      const res = await fetch(`${baseUrl}/${page}`);
      assert(res.ok, `HTTP GET /${page} returned status ${res.status}`);
      const text = await res.text();
      assert(text.includes('<!DOCTYPE html>') || text.includes('<html'), `/${page} response should contain valid HTML`);
    } catch (e) {
      assert(false, `HTTP GET /${page} failed: ${e.message}`);
    }
  }

  // 2. Check JavaScript files on disk
  const jsFiles = [
    'analytics.js',
    'app.js',
    'errors.js',
    'exercises.js',
    'gamification.js',
    'listening.js',
    'reading.js',
    'speaking.js',
    'training-engine.js',
    'workout-runner.js',
    'writing-tutorial.js',
    'writing.js'
  ];

  jsFiles.forEach(js => {
    const fullPath = path.join(publicDir, 'js', js);
    assert(fs.existsSync(fullPath), `JavaScript file "js/${js}" should exist on disk`);
  });

  // 3. Check CSS files on disk
  const cssDir = path.join(publicDir, 'css');
  if (fs.existsSync(cssDir)) {
    const cssFiles = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));
    assert(cssFiles.length > 0, `css/ directory should contain stylesheet files (found ${cssFiles.length})`);
  } else {
    assert(false, `css/ directory should exist`);
  }

  return results;
}
