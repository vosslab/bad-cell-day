# Current 33 capture record

## Status

This directory preserves the current33 snapshot and complete idle capture. The capture predates the
early-recovery gameplay changes and remains historical evidence. Root deferred the full scoring
cycle to prioritize a gameplay prototype for `level_05@7` and `level_07@8`, based on existing
current32 evidence. This directory is capture-only;
it contains no accepted assessment, scores, campaign map, or validated report.

## Capture provenance

The snapshot was the first artifact. The capture produced 33 observation packets and 99 PNGs (three
per room). A read-only audit checked roster order, packet/image/receipt hashes, capture timing,
empty key lists, empty browser errors, and expected output count; it reported no problems. The
capture helper exited 0, and served `main.js` and source-map fingerprints matched local `dist` and
the approved frozen build. The one-time command receipt and hashes are in
`tests/_temp/difficulty_33_capture/REPORT.md`, an ignored temporary file that is not retained in
the repository.

The captured `main.js` SHA-256 is
`afbb2df1ebd8b743b437916ff4a8669e348358874218cbe4387949fbb8e8a0be`; the source-map SHA-256 is
`3d73f85c96157a47240381a9c00a4b2166934feaaca768f64cb5ff969bdb23c2`. These identify capture
provenance only. Idle images establish visible starting evidence, not learning, routes, recovery,
human success, control reliability, or enjoyment.

## Draft limits

The unaccepted first-pass drafts were discarded after authors stopped. No first-pass lock/pair or
valid current assessment exists, and no scores were promoted. The snapshot, observation packets,
and ignored PNGs remain as historical capture evidence without implying assessment completeness.

## Current direction

The historical design guidance comes from the [current32 findings](../current_32/FINDINGS.md):
review recovery burden in `level_05@7` and `level_07@8` while preserving the STOP/STEADY/RESCUE
handoffs. The one-time early recovery probe at `tests/_temp/early_recovery_probe/PROBE.md`
demonstrates one sampled survivable `level_05` miss on a clone, but it also shows that the fold
softens the intended ferry landing and does not establish browser behavior, readability, frequency
of misses, or human acceptance. That ignored temporary receipt is not retained in the repository.
Root is pursuing a bounded prototype. No current33-based gameplay priority is claimed.
