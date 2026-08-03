import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: repo name ends with a period
const base = "/NeuroLumen-A-Luz-que-Revela./";

export default defineConfig({
  plugins: [react()],
  base,
});
