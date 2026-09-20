import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-media-assets',
      closeBundle() {
        const distDir = path.resolve(__dirname, 'dist');
        const imagesSrc = path.resolve(__dirname, 'images');
        const audioSrc = path.resolve(__dirname, 'audio');

        if (fs.existsSync(imagesSrc)) {
          fs.cpSync(imagesSrc, path.resolve(distDir, 'images'), { recursive: true });
          console.log('✅ Copied images/ to dist/images');
        }
        if (fs.existsSync(audioSrc)) {
          fs.cpSync(audioSrc, path.resolve(distDir, 'audio'), { recursive: true });
          console.log('✅ Copied audio/ to dist/audio');
        }
      }
    }
  ],
  server: {
    port: 3000,
    host: true
  }
});
