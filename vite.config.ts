import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [react(), svgr()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api/v1': {
          target: 'http://3.38.213.179',
          changeOrigin: true,
        },
      },
    },
  });
};
