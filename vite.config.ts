import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { conditionalComponentTagger } from "./src/core/conditionalComponentTagger";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    conditionalComponentTagger({
      enabled: process.env.NODE_ENV === "development",
    }),
  ],
  base: "/portfolio/",
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      host: "localhost",
      port: 3000,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
