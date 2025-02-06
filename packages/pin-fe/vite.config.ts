import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@assets/styles/_mix.scss" as *;`,
      },
    },
  },
  server: {
    host: true,
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '../../localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, '../../localhost.pem')),
    },
    port: 5173,
  },
});