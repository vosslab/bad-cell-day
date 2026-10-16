import { lstatSync, readdirSync, realpathSync } from "node:fs";
import { join } from "node:path";

export function resolveRunPaths(root, runArgument) {
  // ASVS 5.3.2: one canonical namespace prevents historical or external destinations.
  if (!/^docs\/difficulty_runs\/[a-z0-9_]+$/.test(runArgument))
    throw new Error("--run-dir must be docs/difficulty_runs/<lowercase_ascii_name>");
  const realRoot = realpathSync(root);
  function rejectLinks(path, recursive = false) {
    const stat = lstatSync(path, { throwIfNoEntry: false });
    if (!stat) return;
    if (stat.isSymbolicLink()) throw new Error(`Run path must not be a symlink: ${path}`);
    if (recursive && stat.isDirectory())
      for (const name of readdirSync(path)) rejectLinks(join(path, name), true);
  }
  let ancestor = realRoot;
  for (const part of runArgument.split("/")) {
    ancestor = join(ancestor, part);
    rejectLinks(ancestor);
  }
  rejectLinks(ancestor, true);
  return {
    dataDirectory: ancestor,
    observationDirectory: join(ancestor, "observations"),
    reportDirectory: join(ancestor, "report"),
  };
}
