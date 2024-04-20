import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
// @ts-expect-error need off warning
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const isDev = process.env.NODE_ENV === 'development';
  const BACKEND_WS = `${env.VITE_BACKEND_ADDRESS ?? 'ws://localhost:8000/ws'}`;
  const BACKEND_ADDRESS = `${env.VITE_BACKEND_ADDRESS ?? 'http://localhost:8000'}`;
  const PORT = `${env.VITE_PORT ?? '5173'}`;

  return {
    plugins: [
      react(),
      {
        // plugin for ignore-i18n-download
        name: 'ignore-i18n-download',
        resolveId(source) {
          if (source.includes('src/i18n/download')) {
            return source;
          }
          return null;
        },
        load(id) {
          if (id.includes('src/i18n/download')) {
            return 'export default {}';
          }
          return null;
        },
      },
    ],
    css: {
      modules: {
        generateScopedName: isDev ? '[path]__[local]' : '[hash:base64:5]',
      },
    },
    build: {
      rollupOptions: {
        external: ['src/i18n/download'],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@assets': path.resolve(__dirname, './src/assets'),
        '@components': path.resolve(__dirname, './src/components'),
        '@layouts': path.resolve(__dirname, './src/layouts'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@common': path.resolve(__dirname, './src/assets/scss/common.scss'),
      },
    },
    server: {
      port: PORT,
      proxy: {
        '/api': {
          target: BACKEND_ADDRESS,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
        '/socket.io': {
          target: BACKEND_WS,
          ws: true,
        },
      },
    },
  };
});
