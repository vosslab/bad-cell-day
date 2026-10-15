# Overnight gameplay manager brief

Status: proposed; execution pending. This brief sets priorities, not implementation acceptance.
Allow roughly 6-8 hours of effort, including a protected final 90-minute verification reserve.
Estimates guide selection; they are not a delivery promise or a fixed overnight schedule.

## Goal and current evidence

Make the cooperative game clearer, more varied, and reliably playable while preserving its cute
molecular heroes and red/pink tumor atmosphere. Reassess the whole game before selecting changes.
Forwarded suggestions are candidates; completing every suggestion is not the objective.

The campaign has 20 reordered rooms, visible scripted Gem/Cana scenes, and large molecule-shaped
heroes. The accepted optional trial demonstrates Gem's bubble float/sticky effects and Cana's
boomerang dizzy/shove effects. Its recorded 22-check suite and browser journey passed; reduced-
motion browser playback, a full final-build campaign traversal, and human enjoyment remain unproven.
See [LEVEL_DIFFICULTY.md](../../LEVEL_DIFFICULTY.md),
[villain_interference.md](../../archive/villain_interference.md), and
[interference_browser.md](../reports/interference_browser.md) for evidence and limits.

## Objectives and checkpoints

1. **P0: establish the playable baseline (about 90 minutes).** Build the current tree and traverse
   all 20 rooms in campaign order using ordinary controls. Record position and stable ID, required
   cooperation, puzzle reasoning, platforming/timing, discoverability, and failure/recovery cost.
   Separate waiting from active execution and optional collectibles from the mandatory route.
   Assess meaningful work for both heroes, handoffs, simultaneous input, and repeated filler.
   An agent operating both characters proves operability, not two-person enjoyment or novice ease.
   Manager checkpoint: retain/revise/defer each candidate using the observed room problem and
   expected cooperative benefit. Choose the strongest two or three room improvements as a target,
   not a quota; fewer changes are appropriate when evidence or time is weak.
2. **P0: improve selected rooms (about 90-150 minutes).** Prefer clearer causal puzzle states,
   stronger partner dependencies, readable ability feedback, and safe recovery over added hazards
   or tighter jumps. Keep the walking handoff before the lift/jump tutorial. Record each selected
   room's before/after route and why the change improves cooperation or understanding.
   Reproduce suspected physics defects before authorizing a narrow owner-side correction.
   Manager checkpoint: verify changed rooms through ordinary input; retain/revise/defer each change
   against its stated benefit. Feedback that explains abilities and puzzle states precedes cosmetics.
3. **P1: reassess villain play (about 45 minutes).** Play the optional trial, including reduced
   motion, telegraphs, all four effects, safe return/recovery, pause, retry, replay, and return to
   campaign. Preserve reliable directional control and save isolation. Consider at most one clearly
   telegraphed campaign pilot only when the baseline identifies a specific puzzle benefit and enough
   verification time remains. Manager checkpoint: accept that demonstrated benefit or keep the trial
   isolated; campaign promotion is optional and follows any required architect approval.
4. **P2: add restrained scenic variation (about 45-75 minutes, only after P0).** Ask the artist to
   use `svg-creator-expert`, reading
   `/Users/vosslab/nsh/vosslab-skills/skills/experts/svg-creator-expert/SKILL.md` and inspecting
   [Barnsyverse](https://www.barnsyink.com/barnsyverse) before drawing. Create a small original,
   editable SVG tumor scenery kit and apply it to selected rooms with modest stage variation.
   Preserve existing molecular character art, tall Isp, wide Pac, prominent faces, and readable
   collision edges. Keep scenery behind play; avoid distracting motion and honor reduced motion.
   Inspect actual runtime composition at target desktop, short, and narrow viewport sizes before
   acceptance. Manager checkpoint: retain only art that preserves gameplay readability.
5. **P0: close on one verified build (reserve about 90 minutes).** Stop new features, integrate,
   run checks, and traverse all 20 rooms plus the trial on the final build using ordinary inputs.
   Confirm both exits, progression/unlocks after reload, retry, pause/resume, simultaneous controls,
   and arrow-key scroll prevention after canvas focus loss. Recheck affected recovery routes and
   reduced-motion trial behavior. Check plausible corner, gate, partner, crate, and carrier traps
   and retry escape; do not claim exhaustive freedom from traps. If fixes or rebuilds follow,
   refresh affected evidence and label
   any coverage that belongs to an earlier build. Manager checkpoint: accept only the documented
   evidence; leave incomplete work explicitly pending.

## Stability and scope boundaries

If baseline checks or a room fail, prioritize stabilization over room redesign and art. Open a
separate narrow experiment log with reproduction, hypothesis, observation, correction, and retest;
this manager brief does not prescribe root causes. Preserve the last known working state and
unrelated edits. If experiments disprove the underlying algorithm, stop that approach and request
a new algorithm design before resuming. Architecture decisions and cross-cutting changes require
architect approval; they do not become incidental overnight fixes.

The manager uses fresh agents with isolated ownership and fresh review/integration under
`delegate-manager-to-subagents`. Invite questions and challenges before dependent changes, resolve
shared decisions before dispatch, and parallelize only independent work. Log milestone selection
and retain/revise/defer decisions in one eventual execution report, not a new planning bureaucracy.
If time tightens, drop the campaign pilot and scenery first, then reduce room changes. Baseline
failures and final verification take priority. Do not publish, stage, or commit.

## Expected file boundaries

- Room content: `src/levels*.ts`; preserve stable IDs, save format, controls, and campaign size.
- Reproduced engine defects only: `src/physics.ts`, `src/collisions.ts`, `src/mechanisms.ts`,
  or `src/interference.ts`, according to the demonstrated owner; avoid speculative rewrites.
- Visuals: `src/render*.ts`, `src/character_art.ts`, and `src/assets/`; preserve existing hero art.
- UI only when the observed problem requires it: `src/app.tsx`, `src/style.css`, `src/runtime.ts`.
- Verification: existing `tests/test_*.mjs` and `tests/playwright/`; one-time checks in `tests/_temp/`.
  Add permanent coverage only for a stable meaningful behavior with plausible regression risk.
- Documentation: execution report/screenshots under `docs/active_plans/reports/`, plus relevant
  reference docs and [CHANGELOG.md](../../CHANGELOG.md). Build `dist/` from source and review its diff;
  honor any required approval for tracked generated artifact replacement. Never hand-edit bundles.

## Evidence and completion checks

Run the existing verification front doors from the repository root:

```bash
./check_codebase.sh
./build_github_pages.sh
./run_playwright_tests.sh --build
shasum -a 256 dist/main.js dist/main.js.map dist/style.css
```

Record the hashes of the exact artifact subsequently served and inspected. Keep screenshot paths,
room routes, results, console/page errors, and build provenance together in the execution report.
Ordinary-input completion must not use teleports, forced clears, or private state mutation. Label
seeded saves, deterministic clocks, source-only routes, and sampled coverage explicitly; they do
not establish a fresh sequential campaign clear. Inspect screenshots rather than inferring visuals
from assertions. Leave human fun, comparative difficulty, and two-player experience unclaimed
until observed with people. Remove or promote plan-specific temporary checks before closeout.

The final handoff lists actual improvements and stable IDs, changed puzzle/cooperation routes,
implemented villain behavior, checks and exact-build traversal evidence, screenshots, remaining
issues, deferred candidates, and next steps. Record failures and missing coverage plainly; a
passing narrow slice does not complete the full acceptance requirement.
