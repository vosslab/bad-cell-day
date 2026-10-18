# Villain step return

Status: BOUNDED PRODUCTION MILESTONE ACCEPTED as `DONE_WITH_CONCERNS` by root at 2026-10-17
15:57:07 UTC. Private feasibility was kept with concerns. Human play qualities and the broader
continuous-gameplay goal remain open; this acceptance does not establish campaign-wide stability or
completion. See the [acceptance report](../reports/step_on_it_acceptance.md).

## Goal and context

Test whether one small native level definition can make Isp's shove of Gem create Pac's separate
upper route, then let Pac activate Gem's recurring bubbles so Isp can FLOAT to Isp's exit. The
candidate must give both heroes necessary, meaningful actions and survive one consequential
placement or jump miss followed by recovery. This tests a hypothesis, not an architecture change.

The earlier Fold and Ferry candidate was rejected because its boost was erasable, both heroes rode
together, and the room had no clear. That rejection did not establish duplication with Bring Your
Own Villain (32). The ignored novelty report at
`tests/_temp/villain_geometry_novelty/REPORT.md` instead warns that this Gem-step candidate overlaps
levels 32 and 41; that comparison and the proposed separate routes and Pac-started return favor
remain hypotheses. During private feasibility, keep the 43-room roster intact and demonstrate the
advertised Gem-step route. A legal partner head-boost route may also work if both heroes still make
meaningful contributions; do not impose a strict NPC-only height margin. That bounded experiment
made no claim about overall game stability or campaign readiness.

## Private feasibility

The private stage is complete with `KEEP_WITH_CONCERNS`. Its approach and completion checks below
record the original gate; the production stage follows separately.

## Approach

1. Record one concrete private level fixture using existing `LevelDefinition` fields and mechanics.
   First show the advertised causal route: Isp pushes Gem onto the lower dock; Gem supports Pac's
   distinct upper path; Pac starts recurring bubbles; Isp uses FLOAT on Isp's own route to exit.
2. Use ordinary inputs to clear the fixture. Then make one consequential Gem-placement or jump miss,
   recover in the same run, and clear. At the relevant forks, check whether omitting Isp's placement
   or Pac's bubble activation erases that partner's meaningful contribution. These probes assess
   the proposed route; they are not a universal anti-cheese proof.
3. Compare causal structure with Bring Your Own Villain (32), Cana's Friendly Fire (41), and Neural
   Misfire (42), checking the novelty report's overlap warning against the played route. Keep legal
   alternative routes when both partners remain meaningful; do not force artificial geometry or
   passenger constraints. Do not assume at-exit input freezes or weapon shielding. Cite source
   evidence for any such behavior before relying on it.
4. Decide KEEP_WITH_CONCERNS or REJECT from the evidence. If roles are erasable or the loop is not
   distinct, reject this concrete candidate without inventing a rescue mechanism. At that gate, a
   keep permitted fresh SPEC, distinct QUALITY, and integration review; it did not authorize
   production registration or implementation. Root later decided separately after those reviews.

## File scope

- `tests/_temp/villain_step_private/`: private `.mts`, `.mjs`, `.json`, traces, captures, and
  `REPORT.md` only. Do not add `.ts` files because the root TypeScript config includes ignored
  TypeScript files. Any private typecheck uses an external scoped config; never edit canonical
  `tsconfig`.
- This plan: record scope, gates, and decision. No production source, permanent tests, runtime
  configuration, or production level registration.

## Completion checks

- Evidence records the ordinary full clear, the consequential miss and same-run recovery, and both
  fork counterfactuals with input traces and outcomes.
- The concise comparison records whether the played sequence differs meaningfully from levels 32,
  41, and 42. Unsupported mechanics claims are removed or backed by source evidence.
- Close with KEEP_WITH_CONCERNS or REJECT. A keep requires fresh SPEC, distinct QUALITY, and
  integration results before any production proposal; rejection ends this candidate.

## Challenges for reviewers

- Does the advertised Gem-step route work with ordinary inputs? Record any legal partner head-boost
  route and whether it preserves meaningful contributions from both heroes.
- Do the omission probes reveal an ordinary bypass that erases either partner's contribution?
- Does the return favor materially differ from levels 32, 41, and 42 in the played causal sequence?
- Is the miss consequential and recoverable in the same run without an artificial constraint?

## Production implementation

### Goal and context

Add the approved Step On It room using the private fixture as the geometry and mechanism source.
The fixture fingerprint is `b61e2aa7b27955f58536f55239fd5419fe846ebe5fbf6146433a11b31096aedf`
(`tests/_temp/villain_step_private/fixture.mts`). The private decision and its limits are recorded
in `tests/_temp/villain_step_private/REPORT.md`; SPEC, QUALITY, and integration reviews are in
their respective ignored `tests/_temp/villain_step_{spec,quality,private_integration}/REPORT.md`
paths. Those ignored files remain provenance evidence, not production inputs or registered tests.

Register **Step On It** as liver level `level_44`, after level 30 / Your Turn to Carry and before
level 43 / Cellpool Lane. Preserve the fixture's exact geometry, platforms, pad, attack, world, spawns, and
exits, including the roost at y=350. Preserve its scene, schemes, and subtitle. Set the scene lines
to Gem: `I am not a stepladder!` / `Then why am I full of footprints?`; Cana: `My colleague has a new
support role.` / `I said support, Gem.` Use this hint exactly: `Isp nudges Gem off the left ledge.
Pac jumps from Gem onto START BUBBLES. Isp catches FLOAT to the right of the high tissue ledge, then
steers left to land. Pac takes the floor exit.`

Implement only the additive level module and its scene/registry entries. Keep the current level
definition interfaces and campaign systems. Do not change shared physics, state, saves, types,
schemas, configuration, controls, or art, and do not replace or reorder the other 43 definitions.
Existing unlock policy should make level 44 available after earning level 30, retain replay access to
an already-earned level 43, and require level 44 when level 43 is the unearned frontier. Level 44
should enter the body map and finale from existing roster-derived behavior.

### Approach

1. Add `src/level_step_on_it.ts` exporting `STEP_ON_IT_SCENE` and `STEP_ON_IT_LEVEL`; register the
   scene and level in `src/levels.ts` at the specified slot. Keep the fixture geometry and authored
   metadata contract above.
2. Add a focused temporary replay under `tests/_temp/step_on_it_production/` for the four
   progress cases (ordinary level 44 unlock, earned level 43 replay, level 43 blocked while it is
   the frontier, and level 44 completion/map inclusion). Exercise existing progress functions and
   record outcomes; do not add save behavior or a permanent layout test.
3. Replay ordinary completion, the consequential miss/recovery, and the Gem-step, support, FLOAT,
   latch, and roost-wait observations with the native game functions. Then pass the root's canonical
   codebase gate (currently 96 checks), official build, and two existing smoke checks. Capture the
   actual new room at initial state, Gem step, FLOAT, grounded wait, and clear with the existing command
   `node --import tsx devel/capture_gameplay_screenshots.mjs CASES.json`. Root reviews the rendered
   evidence.
4. Obtain fresh public SPEC, distinct QUALITY, and integration reviews after implementation. Keep
   human discovery, fun, and difficulty explicitly unknown until human play can assess them. Stop or
   correct the implementation on a failed contract gate and record the evidence and decision here.

No whole-campaign save journey or frozen current-level-41 rescore gate is part of this room addition.
Do not add custom preview interfaces, restart a healthy server on port 8127, or create art unless
the actual production SVG needs a new asset.

### File scope

- `src/level_step_on_it.ts` and `src/levels.ts`: additive level data, scene, and fixed roster slot.
- `tests/_temp/step_on_it_production/`: temporary native replay, progress probes, captures, and
  implementation report only; no permanent test or canonical TypeScript configuration change.
- This plan: implementation outcome and root acceptance ledger. Update [CHANGELOG.md](../../CHANGELOG.md),
  [USAGE.md](../../USAGE.md), and [DESIGN_DECISIONS.md](../../DESIGN_DECISIONS.md) in separately
  scoped documentation work from production evidence.

### Implementation handoff

The registered production definition is `level_44`, after `level_30` and before `level_43`. The
production report compares all 43 prior definitions unchanged and in their original relative order;
the new room matches the approved fixture apart from the authorized ID, title, hint, and dialogue.
Its four native replays clear at frame 2178, show Isp grounded at the exit while Pac remains on the
upper path at frame 2230, and show both bounded role-omission probes failing to reach their exits.
Existing progress functions confirm unlock after level 30, replay of earned level 43, level 43
locked at that unearned frontier, and roster-derived map inclusion after level 44 completion. See
`tests/_temp/step_on_it_production/REPORT.md`.

The source owner's scoped TypeScript, ESLint, and Prettier checks pass. Root reports the canonical
96-check code gate, official build, two standard smokes, served-bundle identity, and six production
captures passed; root reviewed the captures and accepted sampled legibility. Public SPEC accepts;
fresh QUALITY and final integration accept with concerns. Root accepted the bounded production
milestone as `DONE_WITH_CONCERNS`. See the [acceptance report](../reports/step_on_it_acceptance.md).
Human discovery, fairness, enjoyment, difficulty, and paired comfort remain unknown.

### Completion checks

- The registered level has the exact stable ID, title, metadata, geometry, and roster slot above;
  comparison shows all other 43 definitions and their relative order unchanged.
- The four temporary progress probes demonstrate the stated unlock/replay/frontier/map behavior
  through existing functions. The native replay demonstrates completion and the causal checkpoints.
- The canonical codebase gate, official build, two existing smoke checks, production captures, and
  root visual review pass; public SPEC, distinct QUALITY, and integration results are recorded.
- Root records a bounded acceptance disposition. Human discovery, fairness, fun, difficulty, and
  paired comfort remain unknown absent human play.

### Challenges for reviewers

- Does production preserve the private fixture's played causal route and support/exit evidence?
- Does the level slot leave every prior ID and relative order unchanged, with unlock behavior supplied
  by existing roster logic?
- Are visual layout and legibility clear in actual production captures? What can only human play
  answer about discovery, fun, and difficulty?
