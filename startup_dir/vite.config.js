import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      webpack: path.resolve(
        __dirname,
        "./node_modules/next/dist/compiled/webpack/webpack.js"
      ),
    },
  },
});
