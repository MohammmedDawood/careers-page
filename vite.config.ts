import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // env.PORT is injected by loadEnv()
    // port: parseInt(env.PORT) || 3000,
    port: 3000,
    open: true,
  },
  build: {
    outDir: "./build",
  },
});
