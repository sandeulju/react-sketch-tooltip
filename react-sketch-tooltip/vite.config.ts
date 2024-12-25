import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./index.ts",
      name: "ReactSketchTooltip",
      formats: ["es", "cjs"],
      fileName: (format) => `react-sketch-tooltip.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "roughjs"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          roughjs: "roughjs",
        },
      },
    },
  },
});
