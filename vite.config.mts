import { defineConfig } from "vite";
import ZaloMiniApp from "zmp-vite-plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: "./src",
    base: "",
    resolve: {
      alias: {
        pages: path.resolve(__dirname, "./src/pages"),
        components: path.resolve(__dirname, "./src/components"),
        types: path.resolve(__dirname, "./src/types"),
        utils: path.resolve(__dirname, "./src/utils"),
        hooks: path.resolve(__dirname, "./src/hooks.ts"),
        state: path.resolve(__dirname, "./src/state.ts"),
        static: path.resolve(__dirname, "./src/static"),
      },
    },
    plugins: [tsconfigPaths(), react(), ZaloMiniApp()],
  });
};
