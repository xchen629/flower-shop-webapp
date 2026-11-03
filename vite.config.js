import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// `base` must match the GitHub repo name so assets load from the Pages subpath.
export default defineConfig({
  plugins: [react()],
  base: "/flower-shop-webapp/",
});
