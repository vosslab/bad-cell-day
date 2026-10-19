# Cana finish prototype

**Status: Accepted bounded milestone - `DONE_WITH_CONCERNS` (2026-10-19 00:14:39 UTC).** The frozen
JSON in `tests/_temp/cana_finish_prototype/` remains the private pre-promotion feasibility candidate
and is unchanged. Root accepted the scoped registered `level_19` integration with its clarified
production hint. Campaign IDs and order remain unchanged. Root inspected the source, comparison,
driver, receipts, and all seven original PNGs; no material finding remains. Fresh SPEC passed,
QUALITY passed with concerns, and integration passed with concerns. The product goal remains active.

## Pre-promotion hypothesis and frozen candidate scope

The proposal kept the working STOP -> STEADY -> RESCUE opening and gave Pac a physical Cana-body
crossing while Isp's blue TARGET steadied the high bridge. It composed nearest-boomerang aim with
target-held stabilization and introduced no new control, gate, platform, hazard, or ability.

The frozen candidate changed only the `level_19` hint, Cana's scene position, boomerang aim and
interrupt pad list, the high-bridge stabilization effects and its scene counter cue. Cana was placed
at `(970, 430)`; the boomerang targeted the nearest hero and STEADY alone interrupted it; blue TARGET
steadied `high_bridge`. The `gem_high` scene cue named STEADY and blue TARGET. All spawns, platforms,
geometry, hazards, collectible and exit definitions, STOP/STEADY/RESCUE roles apart from the
stabilization transfer, fallback boomerang target, attack timing, boss target IDs, and boss completion
rule matched the frozen registered definition.

## Feasibility evidence

The frozen registered definition and the complete candidate JSON, including its villain scene, are
in `tests/_temp/cana_finish_prototype/`. `freeze_candidate.mjs` refuses to refresh either snapshot
if the registered source no longer matches its recorded baseline.

The pre-promotion ordinary route cleared the then-registered level in 943 frames (7.858 seconds),
zero deaths. The candidate route reuses that opening, then Pac jumps over Cana, reaches the far
finish during the return of a post-STEADY boomerang, and holds orange TARGET while Isp keeps blue
TARGET active. Both exits and the boss clear at 978 frames (8.150 seconds), zero deaths. The attack
was released at 5.825 seconds after STEADY's one recorded interrupt; its projectile is outbound at
6.842 seconds and returning at 7.817 seconds while Pac jumps from the bridge across Cana's body.

A second ordinary-input route samples a late-target correction. Isp steps off blue TARGET while Pac
finishes the crossing. At 8.067 seconds blue is released and the bridge remains active but
unstabilized. At 8.233 seconds Pac is grounded on `low_finish` and occupies orange TARGET while Isp
is still off blue. Isp retakes blue and both exits clear at frame 1000 (8.333 seconds), zero deaths.
RESCUE latches at 5.758 seconds; the next Cana boomerang releases at 5.825 seconds, 0.067 seconds
later. Its projectile is outbound at 6.842 seconds and returning at 7.817 seconds while Pac crosses
the bridge and jumps over Cana's body. The trace shows the attack in flight, but does not show a hit
on Pac. The normal route reaches blue TARGET at 6.258 seconds and clears at 8.150 seconds without
a staged attack delay.

The first candidate-draft route stopped at frame 958 with both exit flags true but the game still
playing: Pac was airborne at `(1016.8, 346.8)` and orange TARGET was not active. The compact failure
record retains its input intervals and final state in `first_draft_no_orange_target.json`; the full
draft snapshot hash is recorded there. Continuing through target contact cleared the final candidate.
These are deterministic simulation routes, not browser, visual, novice-discovery, or human-play
evidence.

## Commands and artifacts

Run from the repository root. Each command exited 0:

```sh
node --import tsx tests/_temp/cana_finish_prototype/freeze_candidate.mjs
node tests/_temp/cana_finish_prototype/verify_candidate_scope.mjs
node --import tsx tests/_temp/cana_finish_prototype/replay.mjs registered_level_19_before.json baseline_original_route_route.json
node --import tsx tests/_temp/cana_finish_prototype/replay.mjs level_19_candidate.json candidate_finish_route.json
node --import tsx tests/_temp/cana_finish_prototype/replay.mjs level_19_candidate.json candidate_safe_release_retake_route.json
```

Pass the frozen route ledger as the third argument. Full input intervals and phase snapshots are
embedded in `baseline_original_route.json`, `candidate_finish.json`, and
`candidate_safe_release_retake.json`. The candidate scope comparison exited 0 and verified that
every field outside the declared hint/interference/pads/scene delta matches the baseline.

| Artifact | SHA-256 |
| --- | --- |
| Registered level and scene snapshot | `bbadd189b9d72f9c52af27cd2efc4b42ad555976c68c93cd462dc2afa314d41a` |
| Full candidate level and scene | `546985882e383cf9dd95d9f3e4b9e2cf69b28f0678268b84869f33582cfe6673` |
| Baseline route result | `2232f11e85d16853e9e601f0f8fcae90f76ec3640550467a35db6beacd0018ab` |
| Candidate route result | `1a3b2e96f70b4f3e841026a18db64990790dc84f1ba498fb90a4b5b749ad8fb4` |
| Safe-release correction result | `4a5be9c0307f331c23e8f184ca7a281d4e387276718490a5b6690fb34d2dad9c` |
| Retained early-draft snapshot (`draft_before_scene_cue.json`) | `677607b1e51bdac1d856a7fd52a008f7cb52da358081680be2940295c5c8bd2d` |
| Compact early-draft miss | `d580b3a485ce113ce762b1138604cc1eaa109f7c1d36bda62355c12849837e25` |

The frozen replay code is `tests/_temp/cana_finish_prototype/replay.mjs`
(`2ec7f6ef303724abb20391840063fed5140b1b53512976f1bda81af753aa0533`).
The exact scope verifier is `tests/_temp/cana_finish_prototype/verify_candidate_scope.mjs`
(`a18f7ba2b2974a8a392c636072aeb0f94f9fd74008c7865d2a42d00a6df0dcd6`).

Before Phase A, the production definition files had these observed hashes: `src/levels_final.ts`
`dcfc69c40a2fcad4eb5c1e3b258d038fbf8383e30cd228fc82648fbb678678cf`,
`src/villain_scenes_final.ts`
`5358e09fe55d859670e8d1e367119f25be48a4371c0fcdec9b70b31e7bc3e339`, and `src/levels.ts`
`ba1adc3ffecf289f0c62ae0d42932d694399f795168c2cd23e33390c47985af8`.

## Phase A: registered native proof (2026-10-18)

Before editing, `tests/_temp/cana_finish_delivery/registered_before.json` froze all 58 registered
definitions and their order. Only the owned `level_19` definition and scene were changed. The
candidate fields match the frozen private JSON except for the approved, clearer production hint.
Phase A registered native replays use the copied original route inputs and ordinary `1/120`-second
`create_game_state` / `step_game` input; they do not inject state, reset, disable hazards, or synthesize
deaths. The route results and runner are in `tests/_temp/cana_finish_delivery/`.

The normal finish route clears both exits at frame 978 (8.150 s), with no deaths. STEADY interrupts
once at 2.408 s; RESCUE latches at 5.758 s; Cana's next boomerang releases at 5.825 s. It is outbound
at 6.258 s and returning at 7.817 s, while Pac jumps across Cana's finish body. Blue TARGET stabilizes
the bridge at 6.258 s. The safe-release correction also clears at frame 1000 (8.333 s), no deaths:
Isp releases blue TARGET at 8.067 s after Pac is already at the far finish, Pac occupies orange
TARGET at 8.233 s, then Isp retakes blue and the exits clear. Thus the correction is a late target
retake after Pac reaches the far finish, not a console or mid-bridge fallback. These routes retain
the original early-draft miss recorded above. These native traces established route feasibility;
Phase B browser views and save/Next/reload results are recorded below, with root's visual review,
fresh reviews, and acceptance closed.

### Root gates before Phase B (passed)

Root ran `./check_codebase.sh` (96/96), `./build_github_pages.sh`, and then
`./run_playwright_tests.sh` (2/2); each exited 0. The build ran separately before the browser smokes.
Root then authorized Phase B.

### Phase B: bounded browser evidence (complete)

The existing dedicated capture helper and focused save/Next/reload flow completed. The flow seeded
only the prior 56 stable IDs: level 19 opened at display 57, natural clear saved 57/58, Next opened
level 20 at display 58, and reload preserved Replay for 19 and Ready for 20. Five original views
show Cana at the far finish, the blue bridge handoff, Cana throwing after RESCUE as Pac jumps over
his body, the ordinary clear, and the late target retake clear. The receipt, all seven original
PNGs, logs, and command results are in
[`PHASE_B_REPORT.md`](../../../tests/_temp/cana_finish_delivery/PHASE_B_REPORT.md). Root personally
reviewed all seven originals and the route/flow driver with no material finding. The normal browser
clear took 8.167 seconds with zero deaths and 2/2 sparks. The late retake is after Pac reaches the
far target; it does not demonstrate recovery from a missed crossing.

Fresh SPEC, QUALITY, and integration reviews completed in order. Root accepted this bounded
milestone as `DONE_WITH_CONCERNS` at 2026-10-19 00:14:39 UTC. No full-58 journey, human-play,
novice-discovery, or enjoyment claim is made. The product goal remains active.

| Gate | Owner | Status / evidence |
| --- | --- | --- |
| Frozen 58-definition/order baseline and source diff | Delivery | Complete; `registered_before.json`; exact comparison receipt below |
| Registered ordinary finish and safe-release/retake routes | Delivery | Complete; 978 and 1000 frames, 0 deaths each |
| Root 96-check gate | Root | Passed; 96/96; run 6291 |
| Build | Root | Passed; run 35143; JS and map hashes are in the Phase B report |
| Two standard browser smokes | Root | Passed; 2/2; run 29981; `./run_playwright_tests.sh` after separate build |
| Phase B authorization | Root | Granted after root gates |
| Focused browser captures and seeded save/Next/reload | Delivery | Complete; see Phase B report |
| Root review of original views | Root | Complete; all seven PNGs and route/flow driver reviewed; no material finding |
| Fresh SPEC | Reviewer | PASS; `tests/_temp/cana_finish_spec/REPORT.md` |
| Fresh QUALITY | Reviewer | PASS_WITH_CONCERNS; `tests/_temp/cana_finish_quality/REPORT.md` |
| Fresh integration | Reviewer | PASS_WITH_CONCERNS; `tests/_temp/cana_finish_integration/REPORT.md` |
| Root acceptance | Root | `DONE_WITH_CONCERNS`; 2026-10-19 00:14:39 UTC |

### Phase A commands, exits, and hashes

From the repository root, the exact registered-source comparison and route commands all exited 0:

```sh
node tests/_temp/cana_finish_prototype/verify_candidate_scope.mjs
node --import tsx tests/_temp/cana_finish_delivery/verify_registered_scope.mjs
node --import tsx tests/_temp/cana_finish_delivery/replay_registered.mjs tests/_temp/cana_finish_delivery/candidate_finish_route.json
node --import tsx tests/_temp/cana_finish_delivery/replay_registered.mjs tests/_temp/cana_finish_delivery/candidate_safe_release_retake_route.json
npx prettier --check src/levels_final.ts src/villain_scenes_final.ts tests/_temp/cana_finish_delivery/replay_registered.mjs tests/_temp/cana_finish_delivery/verify_registered_scope.mjs
git diff --check -- src/levels_final.ts src/villain_scenes_final.ts docs/CHANGELOG.md docs/DESIGN_DECISIONS.md docs/LEVEL_DIFFICULTY.md docs/USAGE.md docs/active_plans/reports/gameplay_direction.md docs/active_plans/active/CANA_FINISH_PROTOTYPE.md
```

The source comparison receipt reports unchanged IDs/order for all 58 levels, exact equality for the
other 57 definitions, and equality between registered `level_19` and the frozen candidate after
substituting only the production hint. SHA-256 identities:

| Artifact | SHA-256 |
| --- | --- |
| Frozen private candidate (unchanged) | `546985882e383cf9dd95d9f3e4b9e2cf69b28f0678268b84869f33582cfe6673` |
| Registered 58-definition baseline | `56e6de7b35aed25845ab6b649f2b7136f70753b159fd434d696096c5c5ee0356` |
| Registered definitions after Phase A | `07a37db2d970c82159f54bc59f126f235b06b913a508ee8a143c15276062bb03` |
| Normal registered route result | `42aeac0a8c3da84d7b44060f26b9d2b482098a879380eaedd92f6897d19cea2d` |
| Safe-release/retake registered route result | `d6239e2b909fdf4e001d1d011bca561e97c761f3ebd0f1b52d12c599d5e6c1ce` |
| `src/levels_final.ts` at Phase A handoff | `b520ca8233d2cf9ee606d2cce0647b5052be1687a9411a935d92aef950024d46` |
| `src/villain_scenes_final.ts` at Phase A handoff | `627320f1bbd440481e7b2c43767a8b9854fde8778f392dd9920c2331b5fcf694` |

## Review boundary

The candidate adds 35 frames to the pre-promotion ordinary clear and asks Pac to jump Cana's body while
the boomerang remains active, with Isp managing blue TARGET. The correction route demonstrates a late
release and retake after Pac is already at the far target. Root accepted this bounded implementation
with concerns after review of the evidence and all original browser views. Whether players discover,
enjoy, or prefer this extra coordination remains unmeasured, and the late retake does not establish
recovery from a missed crossing.
