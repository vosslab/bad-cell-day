# Gem Lair milestone ledger

Status: Gem16 D2/V1 milestone DONE_WITH_CONCERNS. Root accepted after the final integration review;
no material blocker remains. The continuous gameplay goal remains ACTIVE; future gameplay
priorities are a separate decision.

## Scope and source-of-truth boundary

A bounded improvement to stable `level_16`, Gem's Liver Lair, was investigated from the evidence and
priority in [`FINDINGS.md`](../../difficulty_runs/current_28/FINDINGS.md). That assessment is an
immutable, source-bound pre-Gem checkpoint: its IDs, order, scores, records, and source/build pins
remain unchanged. Its old pins (`b967b3178ecdde68c1bd889e9658058ace6919457d020991aca3391ad6a6641d` and
`a56a6724f08192a3c3ab5bdf2fe219f16b30cb69e94b3c4994658b91598b0812`) describe that checkpoint,
not this build. No score recalculation occurred, and its freshness validator is not a game-build
gate.

The pre-change findings recorded no Gem attack state in this room; bridge collapse and ferry
sabotage were already active. They also recorded non-solid feedback from the central robot-like
display and target pads co-located with exits. These were historical reasons to investigate, not
claims about the implemented room. The change preserves the ferry/bridge relay, both heroes' useful
roles, alternate routes, safe staging, recovery, existing shared types and physics, campaign order,
saves, and all other 27 room definitions. No score target, mechanic quota, or forced recipe was
introduced.

## Decisions and ownership

- D0 compared the original with recurring Gem stream A and optional FLOAT bridge crossing/recovery
  B. Mandatory raised RESCUE C was rejected. Prefer no new geometry; keep meaningful Pac work and
  relay routes, avoid a free-Isp solo clear followed by Pac's exit walk, and add Cana only for a
  distinct choice.
- D1 selected B for fresh feasibility review only. The frozen temporary comparison showed optional
  aerial recovery, a no-contact clear, and recurring interaction, but did not establish human fun or
  discovery.
- D2 approved exact frozen B for level16 only: Gem at `(775,350)` and one automatic bubble.
  V1 replaces the center robot artwork with existing `tumor_glucose_organ.svg`; one regular-scale
  canonical Gem remains the live actor. Existing `bossDefeated` and target-pad state provide
  feedback. No new geometry, collision, state, asset, type, shared scale, or weapon-pose change.
- Data ownership was limited to `src/levels_final.ts` and `src/villain_scenes_final.ts`; pump-art
  ownership to `src/render_game.ts` and `src/render_tumor_organs.ts`. Both owners completed their
  work and scoped checks. Shared type contracts A0 remain unchanged.

## Evidence and gates

- The frozen comparison package is `tests/_temp/gem_lair_playable_comparison/REPORT.md`,
  `fixtures.json`, `summary.json`, `freeze.json`, and `validation_receipt.json`; freeze SHA-256 is
  `5dcf496debe799510ce7b3c09ec26a9ca4466f550c623da2b83ff7a54f3eade9`. Thirteen ordinary-input
  traces exactly replayed through the production engine. Fresh feasibility SPEC and a separate
  QUALITY accepted with concerns; neither claimed human fun.
- Fresh source SPEC accepted with concerns and no material finding. Official `./check_codebase.sh`
  passed (both TypeScript configs, lint/format, 82 Node checks). The official build, source/copied
  asset parity, and two permanent smokes passed. Evidence is in
  `tests/_temp/gem_lair_build/evidence.json` and `SHORTREPORT.md`: `main.js`
  `404d0ecd82661ea79a3a841a98bd160ef35b4f46583dba64cd469a773d08f489`, map
  `aa49c7dc3fbc5242fe5d424d14e5104beb90cc2651b31aa25278120ea09123c3`, source manifest
  `61d5c140779a317fecdad0e78ebae99d22381a6a4f7f9eaa6668820e2f4c290d`, and matching source/copied
  18-asset manifests `10500e666acda41072b429a196c48742cb85f2d05df2cd7f454669f50dbcd643`.
- Six focused browser routes and pause/restart passed against these pins; all attempts reported
  zero console, page, and resource errors, with 47 source parity checks. Root reviewed eight actual
  captures. The first aerial raw-endpoint guard remains a failed guard because Pac was airborne;
  the same keys followed by 16 ms of no-key settling completed the clear. This is a recorded route
  guard limitation, not raw endpoint success or a product failure. Reports:
  `tests/_temp/gem_lair_browser/REPORT.md` and `tests/_temp/gem_lair_browser_finish/REPORT.md`.
- Fresh campaign completed all 28 rooms in order with zero retries. All Replay entries survived
  reload with identical save; trial reset/isolation and compatibility with a prior 28-room save
  passed. Gem16, Cana19, and finale visuals were reviewed; no console/page/resource errors. See
  `tests/_temp/gem_lair_campaign/REPORT.md` and `COMMANDS.md`.
- The five operational docs passed scoped checks (235 local links, six Markdown files). Fresh docs
  SPEC accepted. Distinct final QUALITY accepted with concerns and no material issue. Full Python
  suite passed 2,017 tests in 2.80 seconds.
- Final integration accepted with concerns and no blocker. It records the 16 ms aerial settle, a
  brief decorative pump overlap, and scripted-play evidence limits. Details:
  `tests/_temp/gem_lair_integration/REPORT.md`.

The live preview on port 8127 serves the pinned bundle without restart. macOS sandbox restrictions
blocked independent PID identity inspection; PID 65718 is not re-asserted as verified. The frozen
comparison helper was archived as ignored text with its original SHA preserved; no Git index writes
were used. Details: `tests/_temp/gem_lair_helper_archive_fix/REPORT.md`.

Root accepted this bounded milestone with the recorded concerns: the 16 ms aerial settle, brief
decorative pump overlap, and lack of human enjoyment, discovery, or paired-keyboard evidence. These
remain evidence limits, not product blockers. Do not rewrite the accepted assessment checkpoint.
Future gameplay priorities are separate from this milestone. Current evidence and receipts are
summarized in the ignored `tests/_temp/gem_lair_ledger/REPORT.md`.
