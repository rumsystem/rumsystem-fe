import { join } from 'path';
import { spawn } from 'child_process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { generateRoutes, watchRoutes } from './build/generateRoutes';
import { svgInline } from './build/svg-inline';

// https://vitejs.dev/config/
export default async () => {
  const prod = process.env.NODE_ENV === 'production';
  const a = !!process.env.analyze;
  if (prod) {
    await generateRoutes();
  } else {
    watchRoutes();
  }

  if (!prod) {
    const cp = spawn('node', ['node_modules/eslint-watch/bin/esw', '--color']);
    cp.stdout.pipe(process.stdout);
    cp.stderr.pipe(process.stderr);
  }

  return defineConfig({
    server: {
      host: '0.0.0.0',
      port: 8904,
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
      a && visualizer({
        filename: join(__dirname, 'dist/stats.html'),
        open: true,
      }),
      svgInline(),
    ],
  });
};
