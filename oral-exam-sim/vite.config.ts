import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";

// base "./" lets the built assets load from the local bundle inside the
// Capacitor WebView. Same setup as the other Preceptor apps.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: "./",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
  build: {
    outDir: "dist",
    target: "es2018",
    rollupOptions: { output: { manualChunks: { react: ["react", "react-dom"] } } },
  },
  // Strip console and debugger from shipped builds.
  esbuild: command === "build" ? { drop: ["console", "debugger"] } : {},
  // TOOL=1 runs the orchestrator tools in tools/ instead of the suite.
  test: { include: process.env.TOOL ? ["tools/**/*.test.ts"] : ["tests/**/*.test.ts"], environment: "node" },
}));
