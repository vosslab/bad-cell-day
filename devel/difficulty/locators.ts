import { readFileSync } from "node:fs";

export function checkLocator(file: string, locator: string, label: string): void {
  if (file.endsWith(".png")) {
    const bytes = readFileSync(file);
    if (bytes.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a")
      throw new Error(`${label}: artifact is not a PNG`);
    if (locator === "image:whole") return;
    const region = /^image:(\d+),(\d+),(\d+),(\d+)$/.exec(locator);
    if (!region) throw new Error(`${label}: expected image:whole or image:x,y,w,h on PNG`);
    const x = Number(region[1]);
    const y = Number(region[2]);
    const width = Number(region[3]);
    const height = Number(region[4]);
    if (
      !width ||
      !height ||
      x + width > bytes.readUInt32BE(16) ||
      y + height > bytes.readUInt32BE(20)
    )
      throw new Error(`${label}: image region outside PNG bounds`);
    return;
  }
  const content = readFileSync(file, "utf8");
  if (locator.startsWith("json:")) {
    if (!file.endsWith(".json")) throw new Error(`${label}: json locator requires JSON`);
    const path = locator.slice(5);
    if (!/^[A-Za-z_][A-Za-z_0-9]*(?:\.[A-Za-z_][A-Za-z_0-9]*|\[\d+\])*$/.test(path))
      throw new Error(`${label}: invalid JSON locator`);
    let node: unknown = JSON.parse(content);
    for (const key of path.match(/[A-Za-z_][A-Za-z_0-9]*|\d+/g) ?? []) {
      if (Array.isArray(node) && /^\d+$/.test(key)) node = node[Number(key)];
      else if (
        node !== null &&
        typeof node === "object" &&
        Object.prototype.hasOwnProperty.call(node, key)
      )
        node = (node as Record<string, unknown>)[key];
      else throw new Error(`${label}: JSON locator does not resolve`);
      if (node === undefined) throw new Error(`${label}: JSON locator does not resolve`);
    }
    return;
  }
  const lines = /^lines:(\d+)-(\d+)$/.exec(locator);
  if (lines) {
    const count = content.replace(/\r?\n$/, "").split(/\r?\n/).length;
    if (Number(lines[1]) < 1 || Number(lines[2]) < Number(lines[1]) || Number(lines[2]) > count)
      throw new Error(`${label}: line locator outside artifact bounds`);
    return;
  }
  if (locator.startsWith("text:") && locator.length > 5 && content.includes(locator.slice(5)))
    return;
  throw new Error(`${label}: unsupported or unresolved locator`);
}
