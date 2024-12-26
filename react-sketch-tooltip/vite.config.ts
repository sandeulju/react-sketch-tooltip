import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      // d.ts 파일을 생성할 디렉토리
      outDir: "dist/types",
      // tsconfig.json 경로 (자동 탐색도 가능)
      tsconfigPath: resolve(__dirname, "tsconfig.json"),
      // 엔트리용 index.d.ts 생성 (package.json "types" 연결)
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
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
    outDir: "dist",
  },
});
