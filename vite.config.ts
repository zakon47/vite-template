import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
// @ts-expect-error need off warning
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const BACKEND_WS = `${env.VITE_BACKEND_ADDRESS ?? "ws://localhost:8000/ws"}`;
  const BACKEND_ADDRESS = `${env.VITE_BACKEND_ADDRESS ?? "http://localhost:8000"}`;
  const PORT = `${env.VITE_PORT ?? "5173"}`;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@pages": path.resolve(__dirname, "./src/pages"),
      },
    },
    server: {
      port: PORT,
      proxy: {
        "/api": {
          target: BACKEND_ADDRESS,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/socket.io": {
          target: BACKEND_WS,
          ws: true,
        },
      },
    },
  };
});
