# Physical villains

**Status: bounded milestone accepted `DONE_WITH_CONCERNS`; its 43-room source snapshot is historical.**
The acceptance at 2026-10-17 14:47:25 UTC and matching bundle
`26375ae4efc0b8a16ed240d77e79d2fa952a85c9771814d30ee5498cb7233a7a` cover the then-current 43-room
campaign, including its 47 native outcomes, browser routes, and bounded 12-second idle probe. Those
counts and results below remain evidence for that snapshot. The campaign now has 44 rooms; the
additive `level_44` Step On It scene and its later villain coverage are documented in the
[production plan](villain_step_return.md) and [acceptance report](../reports/step_on_it_acceptance.md).
Human discovery, enjoyment, and paired comfort remain unknown; crowded adjacent villain names
remain minor polish. The broader continuous gameplay goal remains active.

## Settled behavior

- The body owns villain position and weapon origin. Preserve authored targets, ranges, and timing.
- Villains pass hero-only barriers. Existing solid actor interactions remain in force.
- Active villains contribute weight 1, can be carried by counterweight support and deck travel, and
  block an uncarried deck sweep. Only heroes satisfy the two-hero clutch; absent villains do not
  contribute.
- A villain absent in acid returns after four seconds. Its bound projectile is removed and its
  attacker resumes from cooldown after the body returns.
- Preserve rooms without a villain scene, stable room IDs and order, existing attacks and puzzle
  affordances, and the four-second acid return.

## Accepted 43-room source snapshot

In the accepted 43-room snapshot, all production scenes use the default physical bodies; there is no
villain opt-in or Gem platform fallback. Current new-room coverage is recorded in the linked Step On
It plan and report. The six corrected homes are Level 08 Gem `(500, 450)`, Level 10 Gem `(680,310)`,
Level 23 Cana/Gem `(70, 500)` / `(950, 500)`, Level 35 Gem `(850, 378)`, Level 36 Cana `(94, 430)`,
and Level 39 Gem `(650,390)`. The Level 10 and 39 homes use existing landing and upper-shelf support.
Level 35
uses two separate 40x28 parcels at `(480,350)` and `(580,350)`, a 180x22 central roof, Cana at
`(550,378)`, a 150-pixel left cargo latch, and no roost. Its two-sac hint teaches the symmetric
OPEN LEFT / OPEN RIGHT handoff. The previously proposed Gem home `(1050,500)` is superseded.

Level 25 uses Cana `(530,488)` and one static roost; its ordinary-input production replay completes
at frame 2065 with both exits and zero deaths. The optional trial uses Gem `(245,550)` and Cana
`(640,550)` and completes in 1175 frames with zero deaths. The riding pose uses the existing
balancing art for a grounded hero on an active villain body; it does not change simulation state,
collision geometry, weapon anchors, or draw order.

## Evidence and limits

- The historical final native run produced 47/47 outcomes: 43 production routes, three recovery routes, and
  the separate trial. All completed with both heroes at their exits and zero deaths. Root's
  independent replay passed the same 47 outcomes with stable source. A separate 12-second idle
  probe kept all 43 rooms playing with zero falls or respawns. These are deterministic native
  results, not a continuous save journey or indefinite-idle guarantee.
- The initial-body audit checked 86 production bodies against solid platforms, hero spawns, crates,
  and hazards and found no intersections. Neither this audit nor the idle probe imposes universal
  support, pad-clearance, or exit-clearance requirements.
- For that snapshot, root reported `./check_codebase.sh` passed 96 checks and `./run_playwright_tests.sh --build`
  passed 2/2. The final local and served `dist/main.js` match SHA-256
  `26375ae4efc0b8a16ed240d77e79d2fa952a85c9771814d30ee5498cb7233a7a`; root confirmed all 68
  bundled sources match the source map, with no drift.
- Eight focused built-browser cases on that bundle reached their expected phases with zero deaths
  and no browser errors: Levels 02, 10, 39, 20, and 35 clears, plus Level 02, 10, and 39 body
  contacts. Root reviewed the Level 02/10/39 contacts and the Level 20/35 clears; the Level 02
  riding checkpoint was accepted as visibly balancing on a villain. Root has now viewed all eight
  originals and accepts their sampled visual states. Villain names crowd slightly when both bodies
  are pushed together; root considers this minor polish, not a blocker.
- Earlier Level 02, 17, 32, and 29 captures used provisional bundles and remain historical only.
- Native routes, scripted browser routes, static checks, and reviewed captures do not establish
  human discovery, enjoyment, paired comfort, or broad game acceptance.

Detailed temporary evidence paths are recorded as code spans because `tests/_temp/` is ignored and
is not a durable documentation link target: `tests/_temp/physical_final_native_refresh/REPORT.md`,
`tests/_temp/physical_final_browser_refresh/REPORT.md`, `tests/_temp/physical_verification_refresh/REPORT.md`,
`physical_placement_finish/REPORT.md`, `physical_riding_pose/REPORT.md`,
`physical_global_core/REPORT.md`, `physical_global_spec/REPORT.md`,
`weapon_cargo_villain_collision/REPORT.md`,
`physical_level25_finish/REPORT.md`, `physical_level35_authoring/REPORT.md`,
`physical_trial_authoring/REPORT.md`, `physical_return_attack_proof/REPORT.md`, and
`physical_browser_clear_routes/REPORT.md`.

## Disposition and limits

The root independent 47-outcome replay, current global code gate, standard built-browser smoke,
source-to-bundle identity check, and focused built-browser evidence are complete. The independent
global SPEC review accepted with no blocking findings. All six QUALITY passes completed. Plan,
Test, and Comment found no blocker; initial Style and Legacy findings on duplicate TypeScript
configuration exclusions and the Docs finding on stale Level 35 status were corrected and accepted
by fresh targeted re-review. Integration accepted with concerns and no blocker. Root accepted this
bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 14:47:25 UTC. Human discovery, enjoyment,
and paired comfort remain unmeasured; adjacent villain-name crowding is minor polish. The broader
continuous gameplay goal remains active.

| Milestone | Status | Evidence / exit condition |
| --- | --- | --- |
| Global physical default and body-owned weapon origin | `IMPLEMENTED` | Default creation, body-owned position, no-scene behavior, and no Gem platform fallback. |
| Active-villain cargo collision | `IMPLEMENTED` | Active body clips outgoing and returning boomerang-driven cargo; respawning bodies are excluded. |
| Counterweight body participation | `IMPLEMENTED` | Active weight 1 and deck blocking; only heroes satisfy the clutch. |
| Room source authoring | `COMPLETE` | Historical snapshot: all 43 production scenes; corrected Level 35 two-parcel source and hint are applied. |
| Level 25 and optional trial authoring | `COMPLETE` | Ordinary-input production replays complete with zero deaths. |
| Fresh native routes and recoveries | `PASS; 47/47` | Independent root replay: 46 campaign outcomes plus the separate trial; stable source. |
| Current global code gate and standard browser smoke | `PASS` | 96 code checks; Playwright build smoke 2/2. |
| Current-bundle focused browser evidence | `PASS; SCOPED` | Five clears and three body contacts; root reviewed all eight originals and accepted the sampled states. |
| Global SPEC review | `ACCEPT` | No blocking specification gap or architectural drift. |
| Six QUALITY passes and corrections | `COMPLETE` | Plan/Test/Comment found no blocker; targeted fresh review accepted corrected Style/Legacy exclusions and Docs status text. |
| Independent integration review | `ACCEPT_WITH_CONCERNS` | No blocker; final source and artifact evidence accepted. |
| Root final disposition | `DONE_WITH_CONCERNS` | Accepted at 2026-10-17 14:47:25 UTC; human playability remains unmeasured. |

## Decision history

The first private campaign census found 43/43 baseline clears and physical-clone outcomes of 18
complete, 23 playing, and 2 dead. The 41-room candidate census was not an impossibility finding for
the unresolved rooms. Level 25 floor and return-lift homes failed before the accepted roost route.
Level 35's one-sac central-body and underfloor-roost variants were rejected for overlap or poor
angles; the bounded two-parcel design replaced both. Preserve these as rejected trials, not current
instructions.

The approved Level 35 adaptation keeps the parcels separate, retains the hero filters, and uses no
roost. Level 36 uses the early-jump route to pass Cana without pushing her from the intended launch
position, then uses the actual shove. Do not add arbitrary all-floor support, pad-clearance, or
exit-clearance gates. A continuous save journey and frozen difficulty rescore are not acceptance
gates for this mechanic.
