import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  build: {
    outDir: "production",
  },
  preview: {
    port: 3001,
  },
});
