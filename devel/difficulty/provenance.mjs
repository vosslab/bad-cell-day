import { createHash } from "node:crypto";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, sep } from "node:path";

export const sha256 = (bytes) => createHash("sha256").update(bytes).digest("hex");

function sourceFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) return sourceFiles(file);
    return /\.(?:ts|tsx|svg|css|html)$/.test(entry.name) ? [file] : [];
  });
}

export function fingerprints(root, roster) {
  const files = [...sourceFiles(join(root, "src")), join(root, "index.html")]
    .filter(existsSync)
    .sort((a, b) => a.localeCompare(b));
  const manifest = files.map((file) => [
    relative(root, file).split(sep).join("/"),
    sha256(readFileSync(file)),
  ]);
  return {
    campaign_sha256: sha256(JSON.stringify(roster)),
    source_fingerprint: sha256(JSON.stringify(manifest)),
  };
}

export function assertBuiltSourcesCurrent(root) {
  const map = JSON.parse(readFileSync(join(root, "dist/main.js.map"), "utf8"));
  if (!Array.isArray(map.sources) || !Array.isArray(map.sourcesContent))
    throw new Error("build source map lacks embedded authored sources");
  const embedded = new Set();
  for (const [index, source] of map.sources.entries()) {
    if (!source.startsWith("../src/")) continue;
    const name = source.slice(3);
    if (!/^src\/[a-zA-Z0-9_./-]+\.(?:ts|tsx)$/.test(name) || name.includes(".."))
      throw new Error(`unsafe build source-map path: ${source}`);
    embedded.add(name);
    if (map.sourcesContent[index] !== readFileSync(join(root, name), "utf8"))
      throw new Error(`built source map is stale: ${name}`);
  }
  if (!embedded.has("src/main.ts")) throw new Error("built source map lacks src/main.ts");
  for (const name of ["index.html", "style.css"]) {
    const source = readFileSync(join(root, "src", name));
    const built = readFileSync(join(root, "dist", name));
    if (!source.equals(built)) throw new Error(`built ${name} is stale`);
  }
  for (const source of sourceFiles(join(root, "src/assets"))) {
    const name = relative(join(root, "src"), source);
    if (!readFileSync(source).equals(readFileSync(join(root, "dist", name))))
      throw new Error(`built ${name} is stale`);
  }
  return {
    buildSha256: sha256(readFileSync(join(root, "dist/main.js"))),
    buildMapSha256: sha256(readFileSync(join(root, "dist/main.js.map"))),
  };
}
