# No Takebacks: production scope and acceptance ledger

## Status and authority

**ROOT ACCEPTED: DONE_WITH_CONCERNS.** R2 source, integrated, browser, save/insertion, and ordered
fresh-review gates are complete. Keep stable
`level_33` **No Takebacks** in the brain after `level_29` and before `level_19`. Keep `level_20`
final and preserve all previous 32 definitions, scenes, and relative order. Position 31 becomes
`level_33`, `level_19` becomes position 32, and `level_20` becomes position 33. R1 uses the accepted
fixture geometry and existing game contracts. Root approved one R2 addition in
`src/level_no_takebacks.ts`: a static return-stop
barrier at `{ x: 180, y: 367, width: 12, height: 34 }` using the existing barrier contract. This
keeps a returned parcel inside Cana's next-throw reach. No other geometry, copy, types, engine,
state, options, or permanent tuning/label tests are approved.

Root owns the integrated checks, build, standard smokes, browser and recovery routes, save/insertion
checks, fresh reviews, and final status. R2 source checks, build, and smokes pass. A fresh 33-room R1
journey remains evidence for campaign order/save behavior, with explicit R1 provenance. The source
owner owns only
`src/level_no_takebacks.ts`; `src/levels.ts` remains unchanged in R2. Original quips and hint/labels
are in scope. Optional path sparks are permitted but not required; the source intentionally authors
no collectibles. Preserve the physical fixture except for the approved return-stop barrier. No SVG art is currently
approved. This ledger records milestone evidence as it arrives and marks unproven gates pending.

| Gate | Owner | Status / evidence |
| --- | --- | --- |
| Native design handoff | Root | ACCEPT_WITH_LIMITS; see `tests/_temp/no_takebacks_route_proof/REPORT.md` and `tests/_temp/no_takebacks_feasibility_review/REPORT.md` |
| R1 source and native routes | Luna / source owner | PASS for R1 ordinary, fall/re-entry, and quick retry; delayed actually-blocked retry FAILS. See `tests/_temp/no_takebacks_implementation/REPORT.md` and `tests/_temp/no_takebacks_blocked_retry_probe/REPORT.md`. |
| R1 fresh SPEC | Fresh reviewer | NEEDS_FIX: after the parcel stops at x592 for 24 frames, both holds reopen, but the return sends it to x110.171; the next three throws miss at 14.329 px against radius 12. See `tests/_temp/no_takebacks_spec/REPORT.md`. |
| R2 source repair and native routes | Fresh source owner | PASS: appended only `return_stop` at `{ x: 180, y: 367, width: 12, height: 34 }` in `src/level_no_takebacks.ts`; all four authored `LEVELS` routes clear both exits, including strict blocked retry. `src/levels.ts`, prior 32 exported levels/scenes, and campaign order are unchanged. See `tests/_temp/no_takebacks_recovery_fix/REPORT.md`. |
| R1 integrated source checks, full suite, build, smokes | Root | PASS: `./check_codebase.sh` (90 Node checks plus TypeScript/lint/format); `source source_me.sh && python3 -m pytest tests/ -q` (3,714 passed); build plus standard smokes (2/2). Existing 925-line interference advisory only. |
| R2 integrated checks, full suite, build, smokes, preview integrity | Root | PASS: `./check_codebase.sh` (90 Node plus TypeScript/lint/format); `source source_me.sh && python3 -m pytest tests/ -q` (4,276 passed); `source source_me.sh && ./run_playwright_tests.sh --build` (2/2 smokes). HTTP 200, disk-exact assets, and 54 embedded `../src/` entries (56 map entries total) verified. Existing 925-line interference advisory only. |
| R1 fresh 33-room browser journey | Browser owner | PASS, attempt04: all rooms clear in one Play/32 Next, zero retries/errors; save is byte-identical after reload and all 33 Replay entries persist. R1 provenance; `33_complete.png` is the finale capture and No Takebacks completion is in results. See `tests/_temp/no_takebacks_campaign_browser/REPORT.md`. |
| R2 focused browser routes | Browser owner / root | PASS with an observer bookkeeping concern: normal, reduced, fall/re-entry, delayed retry, and Next-to-`level_19` all visibly complete. The helper still exits 1 because its `beyond x644` event was preempted; raw frames show x731.999 at 8.267 s and completion at 11.884 s. Root inspected the strict stop, delivery, reduced, fall, completion, and Next images. See `tests/_temp/no_takebacks_r2_browser/run-2026-10-16T17-10-21-086Z-22319/REPORT.json` and `tests/_temp/no_takebacks_r2_evidence_closeout/REPORT.md`. |
| R2 save/insertion fixtures | Fresh tester / root | PASS: completed `level_29` unlocks `level_33` while `level_19` stays locked; earned `level_19` remains Replay while `level_33` stays locked. Both contexts had zero browser errors. See `tests/_temp/no_takebacks_r2_evidence_closeout/REPORT.md`. |
| R2 fresh SPEC review | Fresh reviewer | ACCEPT_WITH_CONCERNS; no product blocker. R1 NEEDS_FIX remains historical for the pre-repair build. See `tests/_temp/no_takebacks_r2_spec/REPORT.md`. |
| R2 distinct QUALITY review | Fresh reviewer | ACCEPT_WITH_CONCERNS; no product blocker. Concerns are the preserved observer failure, label crowding, and limits of scripted play. See `tests/_temp/no_takebacks_r2_quality/REPORT.md`. |
| R2 fresh integration review | Fresh reviewer | ACCEPT_WITH_CONCERNS; no plan/architecture blocker. Concerns are the observer command exit 1, R1 screenshot-name collision, and unmeasured human discovery/readability. See `tests/_temp/no_takebacks_r2_integration/REPORT.md`. |
| Final acceptance | Root | DONE_WITH_CONCERNS. Root reviewed the integration report and final HTTP 200 preview of the accepted R2 build. Human discovery/readability and the preserved browser observer exit-1 remain concerns. |

R1 production-source replay clears both exits from authored spawns on the ordinary, fall/re-entry,
and quick early-release retry routes. A fresh delayed retry after the parcel actually stops at the
closed gate exposes a recovery failure: after CATCH reopens, the returning projectile pushes the
parcel to x110.171, beyond the next three throw paths (closest approach 14.329 px; attack radius
12), although both pads remain active. The R2 production source adds the approved static barrier at
x180, y367, width12, height34. Fresh authored-`LEVELS` replays keep the parcel at x192 and clear
ordinary, fall/re-entry, quick retry, and strict delayed-retry routes; see
`tests/_temp/no_takebacks_recovery_fix/REPORT.md`. R2 integration, full Python suite, build,
standard smokes, and preview integrity now pass. The fresh 33-room journey remains an R1 receipt;
it verifies campaign order/save behavior but does not exercise the R2 source hash or blocked retry.
R1 served `main.js` hash was `7a381f7a39ff7d68d455e2665ded4fdd34de29cba22e916464aea109a71c1396`
with map `b0a2ca9e208ad5931d9f528a2ba3776b341bf714a7eb8964cb25af2608808e5d`. R2 serves the same
index hash and `main.js` `3ce1c8ab724656e67a86bd0ca92576578b3ffad2b4c4c3cfdeac2ae049b5adfc`, with
map `f410af3e2380afc25a2bd4ba79e4fdfd7f815f83d723f23e3beafa0714e925ee`. Both previews return
HTTP 200 and match disk; all 54 embedded `../src/` sources match (56 source-map entries total). R2 browser raw state shows the delayed retry
caught the parcel at x192, the later throw carried it to x731.999 at 8.267 s, and both exits
completed at 11.884 s. The helper returned exit 1 because its generic capture observer preempted the
`beyond x644` event label; the subsequent `169_both_exits_complete` screenshot shows the completed
state. The fresh closeout inspected this raw trace and the screenshots, then passed both save
fixtures: prior `level_29` unlocks room 33 while `level_19` stays locked, and earned `level_19`
remains Replay while room 33 stays locked. Root inspected the strict-stop, delivery, reduced, fall,
completion, and Next images. The helper's exit-1 receipt remains preserved; R2 route and
save/insertion evidence is complete with that harness concern recorded.
The first NOT_READY helper reversed Pac mid-jump and let Isp walk past his
exit; the fixture did not change. Source-free AI probes were incomplete and unpaused, so they do
not establish controls or fairness.
The frozen `current_32` assessment remains a 32-room baseline; this room is unscored. The Marrow
pilot remains an independently accepted DONE_WITH_CONCERNS milestone.

## Frozen design evidence

- The direction is reciprocal routes and useful villain interference, with clear consequences and
  breathing rooms. See [gameplay direction](../reports/gameplay_direction.md).
- Accepted `level_23` teaches two-rider counterweights and cargo-driven reversal. `level_29`
  transfers a sac between two decks and swaps courier roles. `level_31` already has Cana's
  boomerang push a sac off a ferry, with a gutter recovery. `level_32` uses Gem's FLOAT to reach a
  latch. Avoid reproducing those routes.
- Existing contracts allow counterweights to move only while both decks have a rider; their travel
  direction follows relative supported weight. Cana's boomerang moves light crates horizontally.
  Ordinary pads, doors, exits, and safe floors can provide route dependencies and recovery.
- The approved placement is brain position 31, after `level_29` and before `level_19`; retain the
  tumor finale at position 33.

## Historical screening experiments

The concepts below are preserved as the prior screening record. Candidate A was rejected for
duplicating the `level_29` courier dependency; Candidate B was deferred. Candidate C's native fixture
evidence informed the approved production handoff above, but its old production status is superseded.

### Candidate A: Wrong weight

**Hook:** Cana's boomerang is a remote cargo nudge that changes which counterweight deck rises.
The heroes use that attack to choose who gets the upper route.

- Cooperation dependency: both heroes must occupy opposite counterweight decks. A light nutrient
  sac starts on one deck; changing which side carries it changes the lift direction. The lift only
  moves while both partners ride, so the load choice affects both routes together.
- Separate routes and roles: Isp rides the deck with a protected launch/transfer pocket and works
  toward a higher exit. Pac positions on the other deck, baits the returning line, and makes the
  sac cross the transfer lip. After the reversal, each takes a distinct deck exit; the transfer
  position must leave each hero a safe dismount.
- Villain contribution: Cana's horizontal boomerang pushes the light sac across the boundary. The
  team chooses the release line and timing to set the next lift direction; being hit is not the
  intended cost or trigger.
- Common mistake and recovery: a shot pushes the sac to the wrong side or off a deck. A low,
  nonlethal catch shelf lets either hero push it back into a visible transfer lane; another attack
  remains available. No forced death or narrow timing window.
- Anatomical identity: a marrow nutrient store feeds two opposing stem-cell niches; paired marrow
  shafts exchange vertical pressure as the glucose sac crosses the central sinus.
- Contrast: adds villain-driven remote cargo control to counterweight reversal, rather than another
  ordinary courier transfer (`level_29`) or ferry unload (`level_31`). It retains the first
  counterweight lesson in `level_23` by asking players to direct a remote load after both riders
  are established.
- Feasibility uncertainty: high. The projectile currently travels along a fixed line and may not
  offer enough controllable horizontal displacement; a crate can be blocked by heroes and
  platforms. Prove a robust transfer before tuning exits. Do not add steering or projectile state
  if existing geometry cannot support it.
- Smallest native experiment: a temporary `LevelDefinition` with two counterweight decks, one
  light sac, one Cana boomerang, catch shelf, and separate safe exits. Check one ordinary transfer,
  one wrong-side recovery, that both riders remain required, and that the attack actually changes
  deck load and travel direction.

```text
upper exit I <--- deck A     transfer lip     deck B ---> upper exit P
                     [Isp]   <--- sac ---      [Pac]
                               Cana line
lower safe shelf catches a missed push; both decks need a rider to move
```

### Candidate B: Borrowed momentum

**Hook:** Cana commits to the nearer hero, and the pair deliberately turns that attack into a
crossing: one hero baits and dodges, while the partner takes an independent lower route to a latch.

- Cooperation dependency: the latch route and the attack route meet at a far-side landing. The
  latch hero opens the bait hero's onward door; the bait hero's landing occupies a second ordinary
  pad or reaches the far exit so the latch holder can leave. Neither route alone completes both
  exits.
- Separate routes and roles: Isp takes a safe ground-level route to the latch and can see Cana's
  committed yellow line. Pac uses a nearby perch to become the chosen target, then jumps so the
  horizontal SHOVE carries him over a low membrane to a broad far-side shelf. The roles can swap
  if the level's character collision and route geometry permit it.
- Villain contribution: Cana's nearest-target boomerang deliberately supplies the cross-gap push.
  The partner's latch opens the landing route before the hit; Cana's return path gives the ground
  partner a visible, dodgeable follow-up to help Pac reach the exit safely.
- Common mistake and recovery: early or late bait falls onto a wide safe floor below the shelf.
  Walk back to the perch and wait for the next windup; the attack recurs. No lethal pit or
  single-frame launch.
- Anatomical identity: a brainstem commissure lies beyond a broad perivascular cleft; a neural
  signal latch lowers a soft tissue fold, and Cana's boomerang nudges a cell across.
- Contrast: unlike `level_27`, the boomerang does not merely target a moving hero to be dodged;
  the team invites the outgoing hit to cross a gap. Unlike `level_32`, neither hero floats in a
  bubble or uses a fixed hold-then-rescue sequence.
- Feasibility uncertainty: high. SHOVE is horizontal and brief; it must carry a grounded or
  jumping hero across a useful distance without requiring precise timing. The route must not be
  bypassable by ordinary jumps, and latch access must remain safe after a failed attempt.
- Smallest native experiment: a temporary floor, perch, low membrane, broad catch shelf, Cana
  nearest-target boomerang, one partner-only latch, and two exits. Confirm the baited route, safe
  miss recovery, and one ordinary alternate approach that still requires the partner's latch.

```text
Isp route:  spawn ----> SAFE LATCH --------------------> exit
Pac route:  spawn -> perch -> Cana commits -> SHOVE ---> broad shelf -> exit
                         return line is visible; low floor catches misses
```

## Provisional screen result

The ignored native fixture and exact source are in `tests/_temp/next_coop_concepts/`. With decks
`deck_a`/`deck_b` at x220/x700 and a continuous static transfer walkway between them, the first
shot was blocked by Pac at x758.8. Repositioning the riders to Isp x220 and Pac x870 cleared the
line. With both riders present, Cana pushed the sac from deck B across the walkway onto deck A.
The observed loads changed from `[1,2]` to `[2,1]`; rider state stayed `[true,true]`; deck A moved
from y400 to y520 and deck B from y400 to y280. At the final snapshot, Isp remained supported by A,
Pac remained supported by B, and the sac rested on A. This verifies a fixed-line attack can perform
the physical transfer and change subsequent motion in this geometry.

The manual route also works in the same geometry. Pac leaves deck B, pushes the sac across the flat
walkway while Isp stays on A, then returns to B. The final snapshot has both riders present, loads
`[2,1]`, sac support `deck_a`, and counterweight position 71. This is the same cargo-transfer and
role-rejoining dependency already established by `level_29`; the attack saves walking but supplies
no consequential player choice here. Stop for insufficient novelty under root's screen criteria.
No end-to-end room clear or safe recovery was tested; neither is needed to decide this failed novelty
screen. No second geometry revision, source change, engine change, permanent test, art, or campaign
placement was made. The safe-floor recovery remains an unproven concept assumption.

Command (run from repo root; the trap removes the executable copy):

```sh
trap 'rm -f tests/_temp/next_coop_concepts/fixture.run.mjs' EXIT
cp tests/_temp/next_coop_concepts/fixture.mjs.txt tests/_temp/next_coop_concepts/fixture.run.mjs
node --import tsx tests/_temp/next_coop_concepts/fixture.run.mjs
```

### Historical selection gate

This records the gate after Candidate A's novelty screen, before Candidate C's later native review
and the root's production approval. Candidate A ended for insufficient novelty; Candidate B was
deferred. At that earlier checkpoint, source-free probes were still pending and production was not
approved. Those statuses are superseded by the current approval and gates above.

The historical screen required a fresh bounded selection for any later fixture and avoided local
types or engine state without a shared-contract need. Human discovery and enjoyment were unmeasured.

### Candidate C: No Takebacks (historical native feasibility screen)

**Hook:** Isp and Pac use separate upper/lower paths to hold open two valves around a tumor-constricted cargo channel. Cana's recurring boomerang pushes a light sac into a receiver; Pac deliberately releases the receiving valve after the sac passes, closing the gate behind it so the return leg captures the sac on the receiver. Receiver occupancy opens two separate exits. This makes release change the projectile/cargo outcome rather than latching a permanent rescue state.

The original screen in `tests/_temp/non_return_valve_prototype/` remains historically **NOT_READY**: its bounded input helper did not reach either exit. A fresh helper reproduction isolated controller faults: Pac's re-entry logic reversed direction whenever x crossed 480 during ascent, and Isp held right past its exit. With those input rules corrected and the fixture unchanged, two native full routes now clear both separate exits. Ordinary route: receiver occupancy remains active, both exit gates remain open, and both exit flags are true. Recovery route: Pac deliberately falls onto `pac_catch_floor`, walks back, commits to a rightward jump/landing on `pac_route`, and both exits become true. The same run retains the upstream/receiver valve and weapon omission checks, plus the early-release/reopen/retry and no-release contrast. Full source, outputs, route action RLE, and commands are in `tests/_temp/no_takebacks_route_proof/REPORT.md`.

At the time of this earlier screen, Candidate C was **FEASIBLE_WITH_LIMITS at the native fixture level**, not a product fix or room implementation. Hero 30x36 and sac 28x28 fit the 34px lumen for cargo only. Campaign placement, production, art, browser behavior, readability, fairness, and human discovery remained unapproved or unmeasured at that checkpoint. Candidate A remains rejected for duplicate courier dependency; Candidate B remains deferred. Source-free discovery proxies remain incomplete and do not count as control/fairness evidence.

Candidate A: screened and rejected for insufficient novelty. Candidate B: deferred. At the earlier screen, Candidate C's native fixture routes and recovery were proven with limits; production/campaign/art remained unapproved pending root review and, if selected, a fresh bounded gate.
