# Cana encounter milestone ledger

Status: bounded Cana D0/D1 milestone `DONE_WITH_CONCERNS`; root accepted after fresh integration.
D1 keeps original gameplay. The continuous gameplay goal remains ACTIVE; future gameplay work stays
separate from this closeout.

## Baseline and boundaries

The accepted Gem16 D2/V1 milestone is `DONE_WITH_CONCERNS` and recorded in
[gem_lair_acceptance.md](gem_lair_acceptance.md). Its accepted build pins are main
`404d0ecd82661ea79a3a841a98bd160ef35b4f46583dba64cd469a773d08f489` and map
`aa49c7dc3fbc5242fe5d424d14e5104beb90cc2651b31aa25278120ea09123c3`. All 28 campaign rooms remain
unchanged and accepted for this starting point. The immutable `current_28` assessment is pre-Gem;
do not recalculate or update it, and do not make it a game-build gate.

Keep fun and unpredictable play grounded in meaningful choices and cooperation, recurring villains
and temporary interruptions, anatomical setting, and existing good routes. No Cana gameplay change
was selected. Targeting, gameplay scene definition, geometry, all 28 level data, and campaign order
stay as-is.

Use the existing gameplay and villain contracts. No new shared type or A0 contract is currently
needed; a candidate should first fit existing mechanisms and actor behavior. If evidence establishes
that a type change is necessary, pause and route the design through a TypeScript expert before
implementation.

## Approved presentation D0

Root approved an anatomy-led Cana presentation independently of gameplay targeting. The
current lower-center canonical Cana actor and upper-right generic robot duplicate Cana's identity.
Replace the generic display with an editable anatomical brain signal knot, while preserving one
canonical actor and its actual weapon, and use the existing target-pad and defeated-state feedback.
This is presentation work; it selects no new attack, target, physics, state, type, or configuration.

The presentation implementation is `DONE_WITH_CONCERNS` under `/root/cana_signal_organ`; official
build, source parity, permanent smokes, and focused browser acceptance pass below. Ownership was
limited to
`src/assets/tumor_signal_knot.svg`, `src/render_tumor_organs.ts`, `src/render_game.ts`, and three
filename entries in `build_github_pages.sh` (required, copy, and verify lists). Preserve Gem16,
core20, the single canonical Cana actor and actual weapon, and all other room rendering. The SVG
SHA-256 is `0701b06dd6a71a5e1b9ddb1ab994838daa7d4af16743eb4d69981c33d2e64b56`. Root reviewed
`tests/_temp/cana_signal_organ/signal_knot_160.png`. Source check `./check_codebase.sh` passed (both
TypeScript configs, lint, format, and 82 Node checks; session 70986). Evidence is in
`tests/_temp/cana_signal_organ/REPORT.md`.

The official build is `DONE_WITH_CONCERNS`. `./build_github_pages.sh` and
`npx tsc --noEmit -p tsconfig.json` passed; all 47 embedded TypeScript sources match and all 18 SVGs
match the build manifest, including the new knot. Both permanent Playwright smokes passed on an
unchanged retry after the first sandbox launch failed at macOS MachPort rendezvous. The protected
preview on port 8127 was not restarted. The build report states it returned matching HTTP 200
assets, but retains no fetch transcript. Current pins: main
`fbf3118d7dbed2ad4661f2c136c77371117ede3892c10d87211b8eb1ad2673cd`; map
`b30675ae7af410c377dd805a246090a2cc4035dc648aa6115e926edfede22916`. Evidence:
`tests/_temp/cana_build/SHORTREPORT.md`.

The focused built-browser lane is `DONE_WITH_CONCERNS`: public Replay19 passed in normal and reduced
motion with a genuinely earned 28-record save. The knot, single actor, warning, badges, defeat
feedback, and adjacent Gem16/core20 render branches are readable; replay, pause/resume, and restart
pass. Root reviewed four actual captures and found no material issue. Evidence:
`tests/_temp/cana_built_browser/REPORT.md`. This does not rerun all 28 rooms; earlier accepted Gem
campaign evidence remains the campaign baseline. Human fun, discovery, and paired comfort remain
unmeasured.

The docs owner and stale-status correction are `DONE_WITH_CONCERNS`; reports are
`tests/_temp/cana_docs/REPORT.md` and `tests/_temp/cana_docs_status_correction/REPORT.md`. The
combined source SPEC is `DONE_WITH_CONCERNS`, with no blocker or source change required; see
`tests/_temp/cana_spec/REPORT.md`. Distinct fresh QUALITY is `DONE_WITH_CONCERNS`, with no material
defect or drift; see `tests/_temp/cana_quality/REPORT.md`. Final integration is
`DONE_WITH_CONCERNS`, with no material defect or drift; see `tests/_temp/cana_integration/REPORT.md`.
Root accepts this bounded milestone as `DONE_WITH_CONCERNS`.

## Gameplay decision D1

Root decided `KEEP ORIGINAL`: preserve Cana19 targeting, gameplay scene definition, and geometry,
plus all 28 room data and campaign order. No forced recipe or aim delta is authorized.

The frozen comparison is `DONE_WITH_CONCERNS` in `tests/_temp/cana_encounter_comparison/` (22
retained traces). Original fixed aim hits moving Pac at 3.51 s; Pac reaches STEADY at 3.55 s and
interrupts at 3.56 s. Nearest aim locks Pac at 2.21 s, but both flight legs miss as Pac moves; the
normal relay consumes its second interruption before the next throw releases. A delayed bait/evade
route completes at 17.11 s versus 13.59 s for the normal route, and requires holding Isp short of
RESCUE. One position variant shifts the early hit to Isp on STOP without creating a useful choice.
These routes show no improvement that justifies changing production. Details and limits are in the
frozen report.

The open gameplay hypothesis is whether direct pair observation finds a useful choice in the
existing timing between Pac's STEADY and Isp's RESCUE. This is an observation candidate, not a
feature request. Scripted traces do not establish human fun, discovery, paired comfort, or native
audio quality. Keep raw comparison failures and the first browser lifecycle selector failure in
their evidence reports.

## Decision sequence

The comparison report and presentation implementation were independent parallel lanes:

- **DONE_WITH_CONCERNS:** Freeze the comparison report with source and route evidence and its limits.
- **DONE_WITH_CONCERNS:** Implement approved presentation D0 within the exact ownership above.

Accepted closeout:

1. **DONE_WITH_CONCERNS:** Official build, source parity, and two permanent smokes.
2. **DONE_WITH_CONCERNS:** Fresh Cana browser report against the recorded build pins; root's visual
   review found no material issue.
3. **DONE_WITH_CONCERNS:** Corrected and reviewed docs after the owner handoff.
4. **DONE_WITH_CONCERNS:** Combined source SPEC and distinct fresh QUALITY; neither found a blocker.
5. **DONE:** Root full Python suite passed 2,018 tests in 2.45 s (session 76524). One nonblocking
   style advisory notes `DESIGN_DECISIONS.md` has 913 lines, below its 1,000-line limit.
6. **DONE_WITH_CONCERNS:** Targeted pause/replay/restart pass. A full campaign rerun is not required
   for this render-only change; all level data and order remain unchanged.
7. **DONE_WITH_CONCERNS:** Fresh integration found no material defect or drift.
8. **DONE_WITH_CONCERNS:** Root accepted the bounded milestone; the continuous gameplay goal stays
   ACTIVE.

The independent cargo first-use probe is `DONE_WITH_CONCERNS` and does not block Cana acceptance:
`tests/_temp/cargo_first_use/`, stable 23, visible UI, no coaching, no source edits, and no solution.
Its captures used the earlier main bundle `404d0ecd82661ea79a3a841a98bd160ef35b4f46583dba64cd469a773d08f489`;
the current `fbf3118d...` rebuild happened seven seconds after the final capture.
The two-rider lift feedback was clear. At the lower dock, one operator mistook Pac's arrival and a
spark increment for cargo delivery while the sac remained on the lift; the visible Hint clarified
that Pac and the sac must occupy the marked area. This is one AI operator's comprehension evidence,
not a human usability or fun result, and it does not authorize a broader redesign.

## Evidence and model record

Prior accepted concern: scripted route success does not establish human enjoyment, discovery, novice
difficulty, or paired-keyboard comfort. Treat these as evidence limits unless direct observation
addresses them. Keep the accepted Gem16 ledger and its source/build pins intact.

| Work | Model choice | Status |
| --- | --- | --- |
| Ledger, build, and docs | GPT-6 Luna, high; factual scopes | DONE_WITH_CONCERNS |
| Cana presentation D0 | GPT-6 Sol, high; visual composition and TypeScript | DONE_WITH_CONCERNS |
| Encounter comparison | GPT-6 Sol, high; causal and native-input analysis | DONE_WITH_CONCERNS |
| Built browser review | GPT-6 Sol, high; visual complexity | DONE_WITH_CONCERNS |
| Cargo first-use probe | GPT-6 Sol, high; UI comprehension | DONE_WITH_CONCERNS |
| Fresh Cana QUALITY | GPT-6 Sol, high | DONE_WITH_CONCERNS |
| Cana integration | GPT-6 Sol, high | DONE_WITH_CONCERNS |

All tasks in this bounded milestone are closed. Keep future gameplay work separate and do not
reinterpret this acceptance as proof of human play experience.
