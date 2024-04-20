import { parseBoolean } from '@/utils/boolean.ts';

const ENV = {
  IS_DEV: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,

  // LOCALHOST: process.env.NEXT_PUBLIC_LOCALHOST || "",
  BACKEND_SOCKET: import.meta.env.VITE_BACKEND_SOCKET,
  BACKEND_ADDRESS: import.meta.env.VITE_BACKEND_ADDRESS,

  I18NEXUS_API_KEY: import.meta.env.VITE_I18NEXUS_API_KEY,
  I18NEXUS_IF_FILES: parseBoolean(import.meta.env.VITE_I18NEXUS_LOCAL),
};

export { ENV };
