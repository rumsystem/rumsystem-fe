import 'dotenv/config';
import { join } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import checker from 'vite-plugin-checker';
import { generateRoutes, watchRoutes } from './build/generateRoutes';
import { svgInline } from './build/svg-inline';
import { svgrPlugin } from './build/vite-svgr-plugin';

// https://vitejs.dev/config/
export default async () => {
  const prod = process.env.NODE_ENV === 'production';
  const a = !!process.env.analyze;
  if (prod) {
    await generateRoutes();
  } else {
    watchRoutes();
  }

  return defineConfig({
    server: {
      host: '0.0.0.0',
      port: Number(process.env.PORT) || 8904,
    },
    publicDir: join(__dirname, 'public'),
    resolve: {
      alias: {
        '~': join(__dirname, 'src'),
      },
    },
    define: {
      'process.env.SSR': JSON.stringify(''),
    },
    plugins: [
      react(),
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "./src/**/*.{ts,tsx,js,jsx}"',
        },
        overlay: false,
      }),
      a && visualizer({
        filename: join(__dirname, 'dist/stats.html'),
        open: true,
      }),
      svgInline(),
      svgrPlugin(),
    ],
  });
};
