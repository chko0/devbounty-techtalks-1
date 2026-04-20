import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { beasties } from "vite-plugin-beasties";

import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), beasties({
    options: {
      preload: true,
      pruneSource: false,
    },
  }), cloudflare()],
  build: {
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});