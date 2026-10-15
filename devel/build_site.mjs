import { build } from "esbuild";
import { solidPlugin } from "esbuild-plugin-solid";

// Solid's DOM compiler preserves signal tracking; esbuild alone cannot compile it.
await build({
  entryPoints: [process.argv[2] ?? "src/main.ts"],
  bundle: true,
  format: "esm",
  target: "es2020",
  platform: "browser",
  minify: true,
  sourcemap: true,
  outfile: "dist/main.js",
  plugins: [solidPlugin()],
});
