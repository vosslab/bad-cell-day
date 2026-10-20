# Current44 difficulty assessment closeout record

Status: **ROOT ACCEPTED DONE_WITH_CONCERNS at 2026-10-17 18:14:54 UTC**

This receipt closes the bounded assessment milestone. Root accepted it as
`DONE_WITH_CONCERNS` at 2026-10-17 18:14:54 UTC after the targeted integration ACCEPT. The broader
continuous gameplay goal remains active.

## Assessment evidence

The current snapshot contains 44 rooms in regional order: lungs 1-5, intestine 6-11, marrow 12-18,
liver 19-30, brain 31-43, tumor 44. Stable IDs identify authored rooms; numeric stable ID suffixes
do not determine campaign positions. The existing assessment workflow captured 44 records, 44
first-pass locks, and 132 ignored idle PNGs (three per room). The final canonical command
`npx tsx devel/assess_difficulty.ts report --run-dir docs/difficulty_runs/current_44` exited 0
after full validation and generated all 44 room dossiers.

Final artifacts and SHA-256:

- [Campaign map](../../../devel/difficulty/campaign_map.json):
  `beecbf52f7c9f48a4da7eb122f52f9bc89a5b2f57302c6599ca4e15243d79f6e`
- [Full report](../../LEVEL_DIFFICULTY_REPORT.md):
  `c3d0deee49e03ccdcc80578b8555ca93c76872e181550869cb69f50b15ce7569`
- [Campaign chart](../../difficulty_campaign.svg):
  `b2aa477269f7afe20bfbef1383311c2d566f06ab3ed06415a032cc01bb916e15`

The rubric covers eight dimensions; puzzle and platforming are separate derived axes. All
control-friction values are unknown. The captures are idle-only, and neither expert ordinal
estimates nor bounded scripts measure human success, discovery, enjoyment, friction, comfort, or
difficulty. See the `README.md` for fingerprints,
source binding, capture details, review caveats, and chronology limits.

## Reviews and remaining gates

- Final findings SPEC: **ACCEPT** after four narrow corrections; see the
  `REPORT.md`.
- Distinct quality review: **ACCEPT**; see the
  `REPORT.md`.
- Integration review: **ACCEPT**; see the `REPORT.md`. Its earlier NEEDS_WORK receipt remains historical; the three documentation findings are resolved.
- Root assessment closeout: **DONE_WITH_CONCERNS**, 2026-10-17 18:14:54 UTC.

Earlier record-level corrections and control-friction changes have focused SPEC acceptance. The
current assessment plan retains concerns for E's redundant generic actor-placeholder route steps,
G2's historical simulation limits, and D/H reviews accepted with concerns. The first-pass
diagnostic snapshot (28/44 records returned OK) is not the final report gate; the latter exited 0.
First-pass locks and records remain unchanged. Manually estimated `created_at` values in groups C,
D, and H remain unreliable; lock timestamps and documented command order govern chronology. The
[execution ledger](../active/difficulty_44_refresh.md) records full process history.

## Evidence-led next gameplay direction

Root approved the next development direction: a private additive early barrier-free cooperative
movement prototype with distinct enabling roles and active physical villains, using existing
mechanics and preserving all 44 successful rooms and their order. No new room has been implemented.
The snapshot records authored barriers in the first 19 rooms and
in 37/44 rooms overall, including tall-DNA barriers. These counts describe structure; they do not
measure repetition, boredom, or player impact. This direction is approved for development, not a completed gameplay change. The level05 premature-release cue is secondary
polish evidence, not the next major action. See `FINDINGS.md`
and the concise [gameplay direction](gameplay_direction.md).
