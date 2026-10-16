export type RunPaths = {
  readonly dataDirectory: string;
  readonly observationDirectory: string;
  readonly reportDirectory: string;
};
export function resolveRunPaths(root: string, runArgument: string): RunPaths;
