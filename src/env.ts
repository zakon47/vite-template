const ENV = {
  IS_DEV: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,

  // LOCALHOST: process.env.NEXT_PUBLIC_LOCALHOST || "",
  BACKEND_SOCKET: import.meta.env.VITE_BACKEND_SOCKET,
  BACKEND_ADDRESS: import.meta.env.VITE_BACKEND_ADDRESS,
};

export { ENV };
