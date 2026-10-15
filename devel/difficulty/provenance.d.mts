export function sha256(bytes: string | Buffer): string;
export function fingerprints(
  root: string,
  roster: readonly { id: string; title: string }[],
): { campaign_sha256: string; source_fingerprint: string };
export function assertBuiltSourcesCurrent(root: string): {
  buildSha256: string;
  buildMapSha256: string;
};
