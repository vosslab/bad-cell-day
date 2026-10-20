# Design decisions

<!-- VENDORED HEADER: START -->

Record each durable decision about how this code and repository are shaped, once it is settled, with
the reasoning a later reader needs. Guidance Neil Voss states belongs in
[HUMAN_GUIDANCE.md](HUMAN_GUIDANCE.md), dated history in `docs/CHANGELOG.md`, open discussion in
`docs/active_plans/decisions/`. [PROPAGATED HEADER - ENTRIES BELOW ARE YOURS]
<!-- VENDORED HEADER: END -->

### Trial the physical Gem-loading opening in level_32

**Decision.** Integrate the private dock-loading candidate into the existing level without changing
its title, carrier/range puzzle, Isp FLOAT/latch route, or exits. Keep the registered hint as the
clear loading instruction.

**Why.** Private and registered ordinary-input replays showed Pac push Gem from a contiguous dock
onto the moving ferry, then hold POWER while Isp uses the existing bubble and upper latch. V0 browser
evidence showed Pac and Gem crowding against the left edge, so root authorized a narrow layout
correction: Pac at (40,444), Gem at (130,480), dock width 180, and ferry start 180. The ferry now
travels 100 pixels instead of the prior 200, retaining its original far stop at 280 and period 8.
The V1 native routes complete at frames 1701 and 1727.

**Consequence.** The original 58-ID order and other 57 definitions remain matched to the frozen
baseline. Root's fresh 96-check gate, build, and standard smokes passed. V1 built-browser captures
show the separated loading opening, FLOAT/latch route, and both completion paths. The focused seeded
flow saves 34/58, opens `level_46` at display 35, and retains Replay/Ready after reload. Fresh SPEC,
QUALITY, and integration passed; root reviewed the source and all six original V1 views and accepted
the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 23:51:45 UTC. No human-play or full-58
journey claim is made; the broader gameplay goal remains active. The private fixture was frozen before
registration to prevent it cloning the dock twice. See the
[delivery ledger](active_plans/active/VILLAIN_BOARDING_PROTOTYPE.md),
`PHASE_A_REPORT.md`, and
`PHASE_B_REPORT.md`.

### Integrate the Cana finish source candidate after prototype review

**Decision.** Preserve the frozen registered `level_19` baseline and complete private candidate,
including its villain scene, as fixed JSON snapshots. Require the private freeze script to match its
recorded baseline before writing either snapshot. Root reviewed the candidate and authorized its
scoped mechanics for registered source with a separately clarified production hint. Browser capture
and progression remained gated until root's source checks passed and Phase B was authorized.

**Why.** A clone from live `LEVELS` can silently change after its source is promoted, making earlier
route traces appear to validate different data than they actually used. The original candidate hint
was ambiguous about who should hold STEADY and when; the production wording names each handoff.

**Consequence.** The scope check compares every field against the declared delta. Registered native
ordinary-input replays clear at frames 978 and 1000 with no deaths. The frozen prototype remains
historical pre-promotion evidence. Root's 96-check gate and separate build passed; the subsequent
`./run_playwright_tests.sh` run passed both standard smokes. Root authorized Phase B, reviewed the
source, route/flow driver, receipts, and all seven original views, then accepted the bounded milestone
as `DONE_WITH_CONCERNS` at 2026-10-19 00:14:39 UTC. Fresh SPEC passed; QUALITY and integration passed
with concerns. Browser ordinary play clears in 8.167 seconds with zero deaths and 2/2 sparks; the
seeded flow preserves 57/58, Next to level 20 at display 58, and Replay/Ready after reload. The late
retake recovers after Pac reaches the far target, not from a missed crossing. The current57 difficulty
map remains frozen without a rating for this revision. No human-play or full-campaign claim is made;
the broader game goal remains active. See the [Cana finish ledger](active_plans/active/CANA_FINISH_PROTOTYPE.md),
`PHASE_B_REPORT.md`,
`REPORT.md`,
`REPORT.md`, and
`REPORT.md`.

**Owner.** The frozen candidate and route ledgers in `tests/_temp/cana_finish_prototype/`.

### Set aside the reciprocal-shot prototype

**Decision.** Keep the current58 campaign unchanged and stop this private prototype. Return to
gameplay selection before authoring another candidate.

**Why.** A fresh ordinary direct route cleared both exits in 424 frames before Cana locked a shot.
The staged paired route waited for target locks, took 1,601 frames, and did not prove a reversed
second shot path. That is insufficient payoff for further geometry or timing work.

**Consequence.** Preserve the fixture, failed and successful inputs, traces, and summaries as bounded
negative evidence. This decision says nothing about whether another future design can make reciprocal
shot cooperation useful. See the `REPORT.md`.

**Owner.** `reciprocal_shot_prototype`.

### Promote The Liver-y Service at level_58

**Decision.** Register the frozen courier/decoy candidate as `level_58`, immediately after
`level_28` and before `level_15`. Preserve its geometry, copy, and mechanics, changing only its
stable ID and module/registry wiring.

**Why.** Registered native replays complete both the paired decoy route and the unbaited recovery
route. The latter shows Cana nudging the sac, recovery, WEIGH 3 activation, and a same-attempt clear
after Pac jumps over Isp at the exit approach.

**Consequence.** The pre-promotion snapshot and exact definition comparison confirm the prior 57
definitions and relative order remain unchanged. Registered native clears, five built-browser
views, ordinary browser clear and recovery, seeded save/Next/reload, and legacy 57-ID checks pass.
Root reports 96 canonical checks, the production build, 2/2 standard smokes, and fresh SPEC
`PASS_WITH_CONCERNS`; fresh QUALITY and integration also pass with concerns. After reviewing the
source, receipts, and all five original captures, root accepted the milestone as `DONE_WITH_CONCERNS`
at 2026-10-18 23:13:33 UTC. The room has not been difficulty-assessed. No full58 journey or human-play
claim is made. See the [delivery record](active_plans/active/LIVERY_SERVICE.md),
`PHASE_B_REPORT.md`, and
`NATIVE_EVIDENCE.md`.

**Owner.** [Level definition](../src/level_livery_service.ts), [campaign registry](../src/levels.ts),
and `NATIVE_EVIDENCE.md`.

### Keep Breathing Room sparks optional and launch-owned

**Decision.** Place one optional spark on each hero's existing partner-launch arc: Isp at (255, 245)
on the first launch toward `high_fold`, and Pac at (830, 160) on the later launch toward
`high_exit_fold`. Keep collectibles owner-locked and use the existing feedback and progress UI.

**Why.** Both positions sit off the ordinary route and reward a small deliberate aim during the
room's existing cooperative launches. Native fixed-step replays complete the existing route with no
sparks, complete a two-spark detour, and complete after a one-frame longer Pac aim. This verifies
reachability in scripted ordinary input, not human discovery or fun.

**Consequence.** The accepted source changes only `level_57.collectibles`; the other 56 registered
levels and this room's platforms, spawns, exits, sac, attacks, villain scene, and IDs remain fixed.
Native and built-browser ordinary routes complete at 0/2 sparks; bonus routes complete at 2/2.
Saved progress, Next, reload, and ordinary replay preserve the two-spark maximum. Root accepted
`DONE_WITH_CONCERNS` at 2026-10-18 22:43:21 UTC after fresh SPEC, QUALITY, and integration review.
The frozen current57 assessment and prior full57 journey predate this revision; no human discovery or
enjoyment is established. See the [accepted plan](active_plans/active/BREATHING_ROOM_BONUS.md) and
`BROWSER_ACCEPTANCE.md`.

**Owner.** [Breathing Room definition](../src/level_breathing_room.ts) and
`breathing_room_bonus_routes`.

### Treat the fresh current57 journey as scripted feasibility evidence

**Decision.** Use the fresh-browser current57 journey to support claims about ordinary-keyboard
route feasibility, earned campaign saves, the finale, and reload persistence. Keep human outcomes
separate from prepared-route completion.

**Why.** The empty-context run completed all 57 registered IDs in order, saved each on its first
attempt, showed the patient-rescued finale, and retained the same ordered IDs after reload. It also
recorded an initial browser failure on a route known only from native testing; the successful
replay used an accepted ordinary browser route. Scripted inputs do not measure human fun, discovery,
or keyboard comfort, and native recovery evidence does not establish browser recovery.

**Consequence.** The delivery report and gameplay direction ledger state the verified scope and
limits. Use human observation for human-play claims. Root accepted the journey as
`DONE_WITH_CONCERNS` on 2026-10-18 at 22:10:03 UTC. See the [delivery report](active_plans/reports/CURRENT57_DELIVERY.md)
and `REPORT.md`.

**Owner.** `game.ts`, [campaign order](../src/levels.ts), and the
`REPORT.md`.

### Promote the assisted finale crossing

**Decision.** Keep the existing `level_20` handoff and paired two-second TARGET charge. Use the
accepted F5 route geometry: Isp sustains the high TARGET and bridge while Pac dodges Cana's outbound
boomerang, takes its rightward return shove, and jumps to the far ledge. The lower fold supports a
miss and rejoin. Each bound pad interrupts its attack once per attempt; attacks resume. Change only
the level hint beyond the frozen candidate.

**Why.** The candidate's registered-scene replay demonstrates an ordinary clear and a separate
miss/rejoin without changing phases or physics. The full 57-entry ID/order snapshot also confirms
the other 56 definitions remain unchanged. These scripted routes do not establish human discovery,
enjoyment, or difficulty.

**Consequence.** Root accepted and froze the source after reviewing the exact geometry and hint.
Registered native replays, TypeScript, focused formatting, the canonical 96-check gate, production
build, two standard browser smokes, five focused built-browser views, and the seeded save, Replay,
and reload flow pass. SPEC, QUALITY, and integration passed with concerns. Root reviewed the source,
receipts, and five original views and accepted the bounded milestone as `DONE_WITH_CONCERNS` at
2026-10-18 19:55:59 UTC. The edge-positioned STEADY input remains an ordinary-input forgiveness
observation, not a source defect or mandatory one-frame human action. `level_20` remains unassessed;
frozen53 scores remain unchanged and do not transfer to this revision. No fresh 57-room journey or
human discovery/fun claim is made. No milestone work remains; the broad game goal remains active.
See the [delivery ledger](active_plans/active/finale_assist_delivery.md) and [gameplay checkpoint](active_plans/reports/gameplay_direction.md#finale-assist-delivery-checkpoint-2026-10-18).

**Owner.** [Final level definitions](../src/levels_final.ts), [villain scenes](../src/villain_scenes_final.ts),
and `native_receipt.json`.

### Register Breathing Room

**Owner.** `src/level_breathing_room.ts` and `src/levels.ts`.

**Decision.** Promote the approved private room as stable `level_57` at lung position 6 / campaign
position 6, after **Hold Your Breath** (`level_37`) and before **Gut Feeling** (`level_45`). Preserve
all 56 existing definitions and their relative order. Keep the approved route and mechanics, with
the sole gameplay exception E4: shorten `high_exit_fold` from width 200 to 180 at x=920.

**Why.** This room applies the lung recoil teaching to a connected relay: Pac launches Isp, Isp moves
the nutrient sac into a step, Pac rides the moving fold, and Isp launches Pac toward the high exit.
The ordinary route and a simultaneous-jump miss/rejoin are replayed against the registered level;
neither scripted route establishes first-time discovery or universal recovery.

**Consequences.** The roster becomes lungs 1-6, intestine 7-17, marrow 18-27, liver 28-40, brain
41-56, and tumor 57. `level_57` remains unassessed and the frozen current53 assessment is unchanged.
Root accepted the bounded addition as `DONE_WITH_CONCERNS` at 2026-10-18 18:42:16 UTC after the
96-check gate, build, two browser smokes, five focused views, seeded save/Next/reload flow, and fresh
SPEC, QUALITY, and integration reviews. The five-record seeded flow is not a fresh journey; human
discovery/fun are unknown and levels 54-57 remain unassessed. The preserved sac-off-dock attempt means
recovery is not universal. No milestone work remains; the broad game goal remains active. See the
[promotion ledger](active_plans/active/BREATHING_ROOM.md),
`REPORT.md`, and
`PHASE_B_REPORT.md`.

### Register A Heavy Thought

**Decision.** Register **A Heavy Thought** as stable `level_56`, brain position 6 / campaign position
45, after **Passing Thoughts** (`level_52`) and before **Attention, Please!** (`level_27`). Preserve
all 55 prior level definitions and their relative order. Keep the room data-only and use the approved
split-cargo layout with both recurring villain attacks.

**Why.** The puzzle asks both heroes to load one heavy sac onto a diagonal ferry, then take separate
jobs: Isp holds upper POWER while Pac rides the sac. Pac must jump back to the ferry deck to hold
BRAKE; Isp leaves upper control and crosses the high route to reunite. The pair then delivers the sac
together. Their changing responsibilities make the ferry transfer and reunion the room's physical
cooperation puzzle. There is no Isp membrane.

**Consequence.** The registered gameplay values and villain positions match the frozen native fixture.
The ordinary route clears in 2,505 frames. A 742-frame missed-transfer route confirms Pac can reboard
the ferry and brake; it does not establish cargo-loss recovery or a second full clear. A presentation
correction removes the stage caption and weapon legend from the canvas, puts organ identity in the
existing heading/HUD, and moves attack guidance to the existing hero cards. The already-accepted
default tip, controls, mechanics, and configuration remain unchanged. Root's 96-check code gate, Pages
build, and two browser smokes passed; fresh SPEC/QUALITY reviews accepted with concerns and close the
prior readability blocker. Root reviewed seven public views. Focused progression shows 45/56, Next to
Attention, Please! at display 46, then Replay/Ready state after reload. Root accepted the bounded
milestone as `DONE_WITH_CONCERNS` at 2026-10-18 17:57:51 UTC after reading the final integration
report. No fresh campaign journey or difficulty rescore was performed; levels 54-56 remain unassessed,
and the historical current53 difficulty assessment and campaign journey are unchanged. No work remains
for this milestone; the broad game goal remains active.
See the [promotion ledger](active_plans/active/HEAVY_THOUGHT.md),
[gameplay checkpoint](active_plans/reports/gameplay_direction.md#a-heavy-thought-registration-checkpoint-2026-10-18),
and `REPORT.md`,
`final_report.md`,
`REPORT.md`,
`REPORT.md`, and
`REPORT.md`.

**Owner.** [Level data and scene](../src/level_heavy_thought.ts),
[campaign registration](../src/levels.ts), and `heavy_thought_promotion`.

### Keep the level 56 recovery geometry

**Decision.** Keep the existing level 56 geometry; do not add a floor-to-dock return step. Preserve the ordinary-input route from the actual loading-sac loss as an alternate exit route.

**Why.** In one same-state native simulation, both heroes reboard the ferry at frame 369, occupy DELIVER together at frame 2414, and clear both exits at frame 2463 while the sac remains on the floor. The earlier dock-edge failures did not test this route and remain historical failed attempts.

**Consequence.** Treat the recovery as feasibility evidence; it does not establish browser behavior, human discoverability, or enjoyment. The two heroes satisfy DELIVER without the sac, so completion does not require cargo delivery. No source or build change follows from this investigation.

**Owner.** [Level 56 definition](../src/level_heavy_thought.ts) and the [continuation record](active_plans/active/HEAVY_SAC_LOSS_CONTINUATION.md).

### Draw tumor platforms with the authored tissue atlas

**Decision.** Draw eligible tumor platforms from the fixed tumor SVG atlas, using the thin band for
surfaces shorter than 40 px and the deep band otherwise. Keep the existing clipping, rim, lazy load,
and fallback behavior.

**Why.** A dense, continuous cellular surface with a thin outer tissue band and deeper tumor field
gives tumor platforms a biological material identity while preserving their existing silhouettes.

**Consequence.** This presentation change leaves collision rectangles, all 55 room definitions and
their order, active/fragile/carrier behavior, physics, options, and types unchanged. Root accepted
the bounded integration as `DONE_WITH_CONCERNS` at 2026-10-18 16:51:17 UTC after the 96-check code
gate, Pages build, two browser smokes, three public views, and SPEC, QUALITY, and integration
reviews. The initial, midplay, and completion views show zero deaths or browser errors. Seeded prior
progress makes the finale a focused delivery check, not fresh-save campaign evidence. No human
playability or measured-fun claim is made; the broader gameplay goal remains active. See the
[tumor surface plan](active_plans/active/TUMOR_SURFACE.md),
`REPORT.md`,
`REPORT.md`,
`REPORT.md`, and
`REPORT.md`.

**Owner.** [Tissue renderer](../src/render_tissue.ts), [Pages build](../build_github_pages.sh), and
[tumor atlas](../src/assets/tumor_tissue_surface.svg).

### Explain partner contact in the default help

**Decision.** The default tip says both heroes must reach matching exits together, that heroes can
push each other, and that jumping over a partner swaps sides while jumping onto a partner gives a
lift. Keep the existing Hint toggle and IDs.

**Why.** The opening partner-contact diagnosis traced shared horizontal movement at crowded exits
to the existing touching-body physics. An ordinary jump-over continuation cleared the room with no
deaths, demonstrating the existing recovery behavior and no control defect. The default help can
explain this established interaction without changing mechanics.

**Consequence.** Root accepted this text-only change as `DONE_WITH_CONCERNS` at 2026-10-18 16:34:05
UTC after the official build, two browser smokes, and SPEC, QUALITY, and integration review. The
rebuilt JavaScript and source-map disk/HTTP hashes match; the default tip is present in the served
bundle. The current55 journey remains bound to its earlier build and is not new full-campaign
evidence for this wording. See the `REPORT.md`,
[current55 delivery ledger](active_plans/reports/CURRENT55_DELIVERY.md),
`REPORT.md`,
`REPORT.md`, and
`REPORT.md`.

**Owner.** The [default tip](../src/app.tsx) owns this wording; physics behavior remains owned by
[src/physics.ts](../src/physics.ts).

### Place The Weight of Cana before Cargo Exchange

**Decision.** Register **The Weight of Cana** as stable `level_55`, marrow position 5 / campaign
position 21, after **Elevator Etiquette** (`level_10`) and before **Cargo Exchange** (`level_23`),
preserving the other 54 room definitions and their relative order.

**Why.** The physical villain load-shift callback follows established Friendly Fire and Gem ballast,
then offers a short comic encounter with distinct setup jobs before the longer Cargo Exchange.
Schell cooperation/moments and Koster recombination inform this judgment, not quotas or measured fun.

**Consequence.** Root accepted the bounded addition as `DONE_WITH_CONCERNS` at 2026-10-18 16:05:16
UTC after the canonical code gate, official build, browser smokes, six public helper views, root
review of nine final captures, focused UI progression, SPEC, QUALITY, and final integration. The
reviews note a minor overlap between the load panel and global ability legend, and retain a near-edge
landing miss from the first browser attempt.
The room remains unassessed alongside `level_54`; no fresh 55-room journey or difficulty rescore was
performed or required. Historical current53 evidence is unchanged; human discovery and enjoyment
remain unknown. See the [Weight of Cana plan](active_plans/active/WEIGHT_OF_CANA.md),
`conciseREPORT.md`, and
`REPORT.md`.

**Owner.** [Weight of Cana level data](../src/level_weight_of_cana.ts) and its
[campaign registration](../src/levels.ts).

### Place Cana's Moving Target after Cana-stipation

**Decision.** Register the moving-target cooperation encounter as `level_54`, intestine position 6 /
campaign position 11, between **Cana-stipation** and **The Great Cell Shuffle**, preserving the
previous 53 room definitions and their relative order.

**Why.** The short physical cooperation encounter varies the pacing between longer puzzle sequences:
Pac braces the moving fold for Isp's upper crossing; Cana's boomerang can SHOVE Pac and release the
carrier; if Pac stays on the fixed fold, the carrier catches up and stops again before Pac takes the
lower route.

**Consequence.** Focused browser and seeded progression evidence, including an initial-Isp-miss
route, were accepted with concerns at 2026-10-18 14:53:35 UTC. This does not establish a fresh
54-room journey, a difficulty score, or human discovery and enjoyment. The historical 53-room
journey and frozen current53 assessment remain unchanged. See the
[Moving Target plan](active_plans/active/MOVING_TARGET.md).

### Draw nutrient sacs with authored cargo art

**Decision.** Draw the fixed light and heavy nutrient-sac SVGs into each existing cargo rectangle,
retaining a small canvas fill and outline until the matching image is available.

**Why.** The current canvas decoration makes cargo resemble the surrounding floor tissue. Distinct
organic illustrations make the two cargo weights easier to distinguish in the game scene.

**Consequence.** The art changes presentation only: cargo rectangles, mechanics, room order, and the
heavy `TEAM` label stay unchanged. Lazy image loading needs a visible fallback before the SVG is
available or if it cannot load. Root accepted the bounded milestone with concerns at 2026-10-18
14:07:29 UTC after 96 existing checks, the canonical build, two browser smokes, served asset checks,
and review of five original public captures. Small internal details are reduced at 24 px; sampled
scripted visuals do not establish human discovery or enjoyment. No permanent rendering test was
added under this approved scope. The broader gameplay goal remains active. See the
`REPORT.md`.

**Owner.** [Nutrient sac renderer](../src/render_tissue_objects.ts) and the
[readability plan](active_plans/active/NUTRIENT_SAC_READABILITY.md).

### Keep Bursting Point's ruptured roof open for Isp's retry

**Decision.** Keep the fragile roof open after Pac ruptures it, through the level, so Isp can use a
later Gem bubble to reach the high exit after missing the first opening.

**Why.** The earlier scripted attempt could leave the roof closed again before Isp's bubble route.
Schell's puzzle guidance treats progress as something a player can build on; retaining this visible
change gives the partner's later attempt a usable path without adding controls or state.

**Consequence.** The existing `resetAfter` contract accepts `null` for a platform that does not
regrow; `respawnTime` remains numeric for runtime countdowns. Only `level_40`'s fragile roof uses
this setting. The 1.2-second collapse and other room behavior remain unchanged. See the
[recovery plan](active_plans/active/bursting_point_recovery.md).

### Use current53 as the accepted difficulty design baseline

**Decision.** Use the accepted current53 campaign map and practical findings as design context for
follow-up work. Future complete assessments are useful when a changed baseline warrants one; do not
repeat the full 53-room assessment automatically after every room change.

**Why.** Root accepted the bounded current53 expert assessment with concerns at 2026-10-18
13:19:42 UTC. Its scores help select causes and contrasts for inspection, but do not measure human
success, discovery, enjoyment, frustration, fairness, or keyboard comfort.

**Consequence.** The active source/build freeze ended at acceptance; captured artifacts remain frozen
to their recorded identity. Current46 and earlier snapshots remain historical and scores are not
inherited. The broad game goal stays active. See the
[current53 acceptance receipt](active_plans/reports/difficulty_53_acceptance.md).

### Add Passing Thoughts after Crossed Paths

**Decision.** Register **Passing Thoughts** as stable ID `level_52` at brain position 5 / campaign
position 41, after **Crossed Paths** (`level_22`) and before **Attention, Please!** (`level_27`).
Keep the room data-only and preserve the other 51 definitions and their relative order.

**Why.** The moving-fold transfer, headstep, villains, and powered lift make a distinct brain-room
sequence at this point in the chapter. Root approved the exact subtitle
`Pac: catch Isp's moving fold, then borrow his head!` for the registered room.

**Consequence.** The source roster contains 52 rooms, with brain positions 37-51 and the tumor finale
at position 52. Canonical source/build/smoke checks, public-route capture, public SPEC, and six audits
are complete. A fresh prepared-input campaign journey cleared all 52 rooms with no retries/errors
and save/reload checks at positions 10, 20, 30, 40, 50, and 52. This does not establish first-time
human playability or enjoyment. Fresh final integration accepted with concerns and no material
finding; root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 10:28:36 UTC. The
broad gameplay goal remains active.

**Owner.** [Passing Thoughts level data](../src/level_passing_thoughts.ts) and the
[production plan](active_plans/active/passing_thoughts.md).

### Accept and retire one-time Liver Lair foreground runners

**Decision.** Record the bounded existing-`level_16` Gem foreground change as accepted with concerns
and retire only its eight named one-time runner scripts. Keep the broader gameplay goal active and the
51-room campaign order unchanged.

**Why.** Root read the final integration receipt and recorded `DONE_WITH_CONCERNS` at 2026-10-18
08:35:35 UTC with no material blocker. The evidence does not establish a fresh full 51-room journey,
human fun, universal recovery, or a proven jump-over alternate route. Preserve the ordered
source-blind browser key holds and waits as data before retiring their runners.

**Consequence.** Retain fixtures, baselines, snapshots, cases, route inputs/results, probe JSON,
captures, receipts, and reports. The source-blind timed sequence is in
`INPUTS.json`;
the exact retirement list and verification boundary are in the
`REPORT.md`.

**Owner.** [Liver Lair foreground plan](active_plans/active/LIVER_LAIR_FOREGROUND.md).

### Explain Backseat Driver's launch, split, and regroup route

**Decision.** Keep the `level_50` Hint focused on its existing room route: wait with Isp on Pac at
Cana's shelf for the right-going shove, send Pac toward the low landing, jump Isp off while Pac is
airborne for the high landing, and recover by heading left along the floor to the small fold and
jumping back to Cana's shelf.

**Why.** The first source-blind walkthrough did not inspect the Hint. A separate later expert
continuation received the existing Hint, focused on the destination-platform problem, and did not
complete. The causal report recommended keeping the original Hint and verified native recovery
opportunities. Based on the combined observations, root judged clearer first-wait and stack
instructions and leftward recovery landmarks worthwhile. Native evidence establishes route
opportunities; it does not show that all recovery paths work or that the revision improves discovery,
completion, or fun.

**Consequence.** Change only the Hint string; retain the accepted room geometry and mechanics. Keep
the earlier production acceptance as historical evidence and track this copy revision separately in
the [hint clarity plan](active_plans/active/backseat_driver_hint_clarity.md).

**Owner.** [Backseat Driver level data](../src/level_backseat_driver.ts) and the
[hint clarity plan](active_plans/active/backseat_driver_hint_clarity.md).

**Status.** SPEC and QUALITY accept. Root's code gate, official build, two existing browser smokes,
and normal-Hint capture pass. Final integration and root acceptance remain pending; see the
`REPORT.md`.

### Acknowledge heroes riding physical villains

**Decision.** During play, show the existing countered reaction pose and physical-contact quip when
an active Gem or Cana body is pushed or supports a grounded hero. Exclude riding contact when either
hero is at an exit. Escape, interruption, and attack cues in the active weapon/body pose retain their
existing priority. Contact speech reuses the push-quip slot and can appear during riding plus windup,
as it already can during pushing plus windup. This speech does not interrupt an attack: weapon
objects, muzzle/aim/windup/throw actions, and attack updates remain active, and reactions do not
disable or stagger attacks.

**Why.** Villain bodies already serve as pushable, jumpable supports. A visible response makes that
physical contact legible through existing presentation without adding a mechanic or room-specific
state.

**Consequence.** Derive the riding response each render from body activity, hero grounding, and the
existing `stands_on` predicate. Reuse each villain's push quip. The implementation and bounded
evidence are recorded in the [foothold feedback ledger](active_plans/active/villain_foothold_feedback.md).
Root accepted the bounded milestone as `DONE` at 2026-10-18 06:44:23 UTC after integration acceptance,
fresh SPEC and QUALITY reviews, the canonical code gate/build/two existing browser smokes, and review
of five original browser captures. No new 50-room journey was required for this renderer-only change.
Presentation sampling does not establish human discovery, enjoyment, fairness, or comfort. The broad
continuous gameplay goal remains ACTIVE, and this decision does not authorize public level 51. See
the `REPORT.md`.

**Owner.** [src/render_villains.ts](../src/render_villains.ts).

### Carry supported stacks as one moving-platform group

**Decision.** At each active powered moving platform, find direct riders and their transitive
`stands_on` support closure. Clip the platform and closure members against world solids and bodies
outside that closure using one shared candidate delta, then commit that delta once to the platform
and once to each member. Treat contacts inside the closure as structural support rather than
obstacles. Keep this behavior local to the moving-platform carrier boundary.

**Why.** A body standing on a direct rider is part of the supported load. Treating that body as an
external obstacle makes an upward lift stop at the rider's own stack. Moving the closure together
preserves collision stops at the top, sides, and external bodies without allowing the carrier to
shear away from supported bodies.

**Consequence.** Preserve the existing direct-rider clipping semantics, platform-world treatment,
`motionTime` rule, platform history and displacement, counterweight behavior, and simulation step
order. The implementation is in `src/mechanisms.ts` at SHA-256
`57dfdf5e559535acceb42d2ac0373aa2d463ba3036f940d7f5557bc2000366fb`. Temporary probes support
transitive carrying, upper-member ceiling stopping, static-platform stopping, and an ordinary jump;
scoped lint, format, and TypeScript checks pass. A separate temporary 18-step external-body fixture
moved the lift, crate, and Gem together 36 px to contact with stationary Cana, without overlap; this
addresses the focused collision-path proof gap. The six audit passes found no Plan, Style, Legacy, or
Comment issues; the Test concern is addressed by that fixture, and Docs identified temporary-
evidence link durability, addressed in the self-contained [transport
ledger](active_plans/active/LIFT_STACK_TRANSPORT.md) and
[lift stack audit synthesis](active_plans/audits/lift_stack_review.md). Root reports 96 canonical checks, build, two browser smokes, and the current level 25 replay passing.
Integration accepted with concerns, and the fresh 50-room browser journey completed all 50 rooms
with one attempt each, zero retries, matching save checkpoints at 10, 20, 30, 40, and 50, and no
browser errors. Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 05:43:21
UTC. The concern is that sequential platform processing could move a body more than once when it
belongs to overlapping moving-platform support closures; no authored failure was demonstrated.
This prepared ordinary-input replay is not human discovery or playability evidence. See the
[transport ledger](active_plans/active/LIFT_STACK_TRANSPORT.md),
[audit synthesis](active_plans/audits/lift_stack_review.md), and
`REPORT.md`.

**Owner.** `src/mechanisms.ts`, moving-platform rider and collision handling.

### Keep Spark pickup feedback in presentation history

**Decision.** Observe newly collected Sparks after fixed simulation steps and pass short-lived,
readonly position and owner snapshots to the renderer. Render a small owner-colored ring at the
authored position; reduced motion keeps a stable ring for the same brief interval. Pause freezes the
feedback, and attempt resets consume current collection state without creating marks.

**Why.** Collection currently removes its Spark and updates the HUD and audio without a local visual
response. A restrained ring gives the pickup a visible response while preserving the collection and
reward rules.

**Consequence.** Keep feedback outside mutable game state, advance it only with simulation, and let
the renderer default to no marks for direct previews. Do not infer who earned a Spark whose owner is
`any`. Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 04:02:55 UTC after
the existing combined checks/build/two browser smokes, corrected observer proof, sampled normal and
reduced-motion captures, and fresh SPEC, QUALITY, and integration reviews. The later dedicated
screenshot-runner preference correction was checked with scoped Node syntax/format checks and actual
captures; the combined gate was not rerun after that tool-only change. The 125-frame normal still
shows the clearest active ring; the reduced-motion still shows a visible but partly overlapped ring.
The images do not measure player discovery or enjoyment. See the [pickup feedback plan](active_plans/active/SPARK_PICKUP_FEEL.md)
and its temporary evidence receipts.

**Owner.** `src/collectible_feedback.ts` owns transition history; `src/types/presentation.ts` and
`src/render_game.ts` own the render boundary and mark.

### Add Bone Voyage as marrow level 49

**Decision.** Keep the approved Bone Voyage candidate with concerns and add stable `level_49` at
marrow campaign position 16, after **Split Decision** (`level_11`) and before **Two Tons of Trouble**
(`level_09`). Preserve all 48 prior definitions and their relative order. Retain the approved geometry,
spawns, sac, exits, stage, villain positions, and recurring attack values, and add only the two approved
passive Sparks for Isp and Pac. Leave pads, barriers, hazards, and schemes empty.

**Why.** Pac boosts Isp onto the upper rib, Isp delivers the sac, and Pac uses the sac as a bank
foothold. Isp also uses Gem's existing bubble interaction. Cana's active return can shove Pac
during the route. Native scripted feasibility does not establish discovery, readability, fun, comfort, measured
difficulty, or general floor recovery.

**Consequence.** Keep the change data-only and reuse current physics, controls, renderer, atlas, and save
contracts. The accepted miss/retry route first lands on the start shelf at frame 258, then deliberately
regroups on the safe floor at frame 565; it does not demonstrate a direct missed-jump floor catch. Root
accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 03:41:43 UTC after current-source
replay, build, 96 existing checks, two browser smokes, seven original capture reviews, and fresh SPEC,
QUALITY, and integration reviews. Small status-label overlaps remain a nonblocking concern. The broad
game goal remains active. See the [Bone Voyage production ledger](active_plans/active/BONE_VOYAGE.md).

### Split Elevator Etiquette's exits across floors

**Decision.** In `level_10`, keep the shared lift, STOP, Pac STEADY, and Isp RESCUE puzzle, then
split the finish: Isp jumps from the bridge to `upper_exit_shelf` at `(985, 230, 115, 18)` and its
exit at `(985, 170, 42, 60)`, while Pac takes the lower exit at `(930, 250, 42, 60)`. Give Cana a
separate upper perch at `(1030, 100, 70, 14)` with scene feet at `(1060, 100)`. Keep Cana's recurring
boomerang aimed at `(900, 285)`, with cooldown `1.3`, windup `0.9`, speed `210`, radius `12`, and
activation on STEADY. Mark both villains active and describe the split routes, pressure, upper-floor
cue, and retry in the hint.

**Why.** The lower Pac finish and upper Isp landing make separate roles visible while Cana's
recurring attack adds active pressure to the finish. The separate Cana perch keeps her actor distinct
from Isp's shelf. Current-source ordinary-input replays show a supported clean shelf landing and a
grounded missed-shelf retry; deliberate exposure triggers DIZZY and SHOVE. Root's review of all six
built-browser captures accepts the sampled presentation with concerns for residual label overlap and
minor edge decoration clipping. These scripted routes and sampled states do not establish first-play
discovery, fairness, comfort, enjoyment, or the full campaign journey.

**Consequence.** Preserve the rest of `level_10`, all other 47 room definitions and roster order, and
the existing engine, renderer, types, and state. Root accepted the bounded milestone as
`DONE_WITH_CONCERNS` on 2026-10-18 02:59:08 UTC after SPEC, QUALITY, and integration accepted with
concerns. The broad continuous-game goal remains active. See the [Elevator Overlook
ledger](active_plans/active/ELEVATOR_OVERLOOK.md) for the evidence and limits.

### Add Cana pressure after KEEP LOWER in Gut Instinct

**Decision.** Keep the two-path sac puzzle and add Cana's recurring boomerang toward UPPER FLOW
after Pac latches KEEP LOWER. Keep Gem's bubble, mark both villains active, and describe both seals,
Cana's shove, Pac's valve support, and the left-fold return in the hint.

**Why.** Deferring Cana until the lower seal preserves the setup; Pac can support UPPER FLOW after
the attack displaces the sac.

**Consequence.** The room reuses existing physics and adds no mechanics, state, or types. Accepted
fixed-step routes and sampled built captures establish one ordinary clear and one gate-recovery
clear; they do not establish human readability or enjoyment.

**Owner.** [level_two_lane_fork.ts](../src/level_two_lane_fork.ts); see the
[acceptance ledger](active_plans/active/GUT_INSTINCT_CANA.md).

### Put Gem in the final blue-target lane

**Decision.** In **A Very Bad Day for the Tumor** (`level_20`), place Gem at `(1040, 310)` and aim
his existing bubble at `(900, 285)`, across Isp's high blue TARGET approach. Keep Cana on Pac's lower
route. Explain that a bubble can break the joint charge and that Isp can wait on the crown and
retake blue TARGET while Pac holds orange TARGET.

**Why.** Gem's position and bubble path put physical pressure on Isp's approach to the bridge
handoff target, while Cana remains on Pac's lower route. The hint describes a recoverable retake
within the room's existing route.

**Consequence.** Preserve the existing attack range, cooldown, windup, speed, radius, one-use blue
interruption of Gem, bridge handoff, targets, exits, hazards, pads, and two-second joint charge.
STOP controls the motor/gate; STEADY interrupts Cana; RESCUE opens the route. The implementation
changes only Gem's room position, bubble aim, opening quip, and level hint. Scripted routes and
sampled captures support feasibility; human play outcomes remain unmeasured.

**Owner.** [Final target pressure plan](active_plans/active/FINAL_TARGET_PRESSURE.md),
[final room definition](../src/levels_final.ts), and [final villain scene](../src/villain_scenes_final.ts).

### Give the opening physical footing and a shared Gem ride

**Decision.** Add two low tissue footholds to `level_02`, **Hold That Door!**, and keep its
existing Isp and Pac pickups as route rewards. Put Gem on `level_01`, **Glucose Going Up!**, on its
existing two-hero restore lift. Keep `level_02`'s full safe floor and HOLD-to-Pac-rescue lesson;
retain `level_01`'s bubble range, cadence, temporary interruption, and core lift lesson, with Cana
arriving on the balcony and the bubble target in the boarding lane.

**Why.** Short jumps and villain push or head-step play in `level_02` give both heroes active
movement choices while Gem's shared ride in `level_01` makes him part of its existing lift
cooperation. Safe footing and the original mechanic cues keep these additions within the opening's
learned movement and lift lessons.

**Consequence.** Use existing tissue and mechanics, with no new room, state, control, or engine
behavior. The [opening physical play ledger](active_plans/active/OPENING_PHYSICAL_PLAY.md) owns
implementation evidence and acceptance status.

### Add The Long Gut as level 47

**Decision.** Add `level_47`, The Long Gut, as an intestine room after `level_07` and before
`level_41`, preserving all 46 previous definitions and their relative order. Reuse existing tissue,
controls, physics, and villain mechanics; give Isp and Pac separate reciprocal ferry jobs with Pac's
far latch powering the crossing and a safe lower-floor regroup after a miss.

**Why.** The approved room reuses taught controls while giving both heroes an enabling role and a
sampled recovery route. Scripted completion and sampled captures do not establish human discovery,
enjoyment, comfort, fairness, universal recovery, or difficulty.

**Consequence.** Keep the implementation additive, preserve the frozen current46 assessment as a
historical baseline, and use the existing campaign and recovery systems. The [Long Gut production
ledger](active_plans/active/LONG_GUT.md) records the validated routes and remaining evidence limits.

**Owner.** The [Long Gut production ledger](active_plans/active/LONG_GUT.md),
`src/level_long_gut.ts`, and `src/levels.ts`.

### Load the approved lung tissue atlas on solid horizontal surfaces

**Decision.** Use the frozen 128 by 120 lung atlas for active solid lung surfaces where width is
at least height. Load it through the existing lazy image-cache pattern and draw it with the shared
atlas helper; retain the existing body renderer while the image is pending or failed. Keep the
fixed crops, rounded repeats, clipping, and cream landing rim.

**Why.** The accepted original art fits the current atlas and collision-surface contract without
changing level geometry or adding renderer configuration.

**Consequence.** Carrier, counterweight, fragile, recoil, and vertical surfaces keep their existing
paths. Nodule cadence on 60/70px surfaces and narrow-end truncation remain known accepted limits.
The corrected canonical build, both standard smokes, asset identity checks, and five sampled views
are recorded with their limits in the acceptance report. Fresh final integration accepted with
concerns, and root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 20:01:30 UTC.
The builder checks the copied SVG with `test -f`; no dedicated renderer-unit test was added, a
deliberate KISS limit. Human readability and enjoyment are unmeasured.

**Owner.** [Lung tissue art plan](active_plans/active/LUNG_TISSUE_ART.md),
[acceptance report](active_plans/reports/LUNG_TISSUE_ACCEPTANCE.md), [tissue renderer](../src/render_tissue.ts),
and [approved atlas](../src/assets/lung_tissue_surface.svg).

### Add Gut Feeling as level 45

**Decision.** Add stable `level_45`, Gut Feeling, as the first intestine room after `level_37` and
before `level_06`, preserving all 44 existing definitions and their relative order. Root accepted
the private feasibility result `KEEP_WITH_CONCERNS` on 2026-10-17 18:52:15 UTC and accepted the
bounded production milestone as `DONE_WITH_CONCERNS` at 2026-10-17 19:13:44 UTC after targeted
documentation correction and final integration reviews accepted with concerns. Human discovery,
enjoyment, fairness, overjump recovery, and paired comfort remain unmeasured; the broad continuous
gameplay goal remains active.

**Why.** The frozen corrected fixture supports a Gem step, Pac's lift hold, Isp's board-before-power
sequence, and a returning-cycle recovery using ordinary inputs. Scripted samples do not establish
human discovery, enjoyment, fairness, or universal recovery.

**Consequence.** Keep production scope to the new room and additive existing-registry entries. Retain
the fixture's geometry and mechanics, use the approved room copy, and use the existing anatomical
renderer. Root owns build, browser, review, and final acceptance gates. See the
[Gut Feeling production ledger](active_plans/active/EARLY_MOVEMENT_RELAY.md).

**Owner.** The [Gut Feeling production ledger](active_plans/active/EARLY_MOVEMENT_RELAY.md),
[room source](../src/level_gut_feeling.ts), and [campaign registry](../src/levels.ts).

### Teach the Cell Shuffle handoff in existing copy

**Decision.** In level05's existing subtitle, say Pac holds STEADY until Isp presses RESCUE. In
its existing hint, order Isp re-braking at STOP, Pac holding STEADY while Isp jumps over him to
RESCUE, Pac following safely, and Gem's bubbles returning after a brief interruption. Preserve the
pad labels and all mechanics, geometry, timing, and attacks.

**Why.** The authored route already requires this dependency sequence; the copy can state it without
changing the challenge or engine behavior.

**Consequence.** This is a two-string teaching change. Scripted and sampled visual evidence does
not measure human readability, discovery, effectiveness, or fun. Root's final disposition is
`DONE_WITH_CONCERNS` at 2026-10-17 19:31:35 UTC, following integration acceptance with concerns
and targeted changelog correction re-review acceptance. See the
[Cell Shuffle handoff plan](active_plans/active/CELL_SHUFFLE_HANDOFF.md) and
`REPORT.md`.

**Owner.** The [Cell Shuffle handoff plan](active_plans/active/CELL_SHUFFLE_HANDOFF.md) and
`src/levels_tutorial.ts`.

### Add Step On It as level 44

**Decision.** Keep the private Step On It candidate with concerns and authorize stable `level_44`
in the liver, after `level_30` / Your Turn to Carry and before `level_43` / Cellpool Lane. Preserve
the existing 43 room definitions and their relative order. Root accepted the bounded production
milestone as `DONE_WITH_CONCERNS` at 2026-10-17 15:57:07 UTC.

**Why.** The private trial and fresh SPEC, QUALITY, integration, and root replays supported the
bounded Gem-step, Pac-started bubble return, and separate hero exits. These scripted results do not
establish human readability, discovery, enjoyment, or difficulty.

**Consequence.** Keep the production change additive to the room module, scene, and roster slot,
using the approved fixture and existing campaign systems. The registered roster has 44 rooms. The
acceptance evidence records native and progress probes, code/build/browser checks, sampled visual
review, and fresh reviews. Human discovery, fairness, enjoyment, difficulty, and paired comfort
remain unknown, and the broader gameplay goal remains active. See the
[acceptance report](active_plans/reports/step_on_it_acceptance.md) for mutable evidence and limits.

**Owner.** The [Step On It production plan](active_plans/active/villain_step_return.md),
[acceptance report](active_plans/reports/step_on_it_acceptance.md), `src/level_step_on_it.ts`, and
`src/levels.ts`.

### Derive patient map from campaign progress

**Decision.** Derive map totals and organ progress from stable IDs in the current campaign roster and
existing saved completions. Keep the first uncleared campaign site as the global frontier, so replay
does not regress it. Exclude the villain trial and add no saved map state. Show completion in the
existing campaign and Levels views; present patient rescue as the heroes' fictional clear-the-spread
mission. Full rescue requires every current campaign ID to be cleared.

**Why.** The map visualizes existing campaign progress while allowing an old save to reveal a newly
added uncleared site. Deriving from the roster keeps the map aligned with campaign membership and
keeps replay behavior independent from global progression.

**Consequence.** Preserve all 43 level definitions, physics, unlock rules, existing completion
progress, adjacent Next behavior, and trial behavior. Source preservation and focused browser
acceptance are recorded in the [patient map acceptance ledger](active_plans/reports/patient_body_map_acceptance.md).
Root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 13:05:53 UTC. The
[acceptance ledger](active_plans/reports/patient_body_map_acceptance.md) remains the mutable evidence
authority.

**Owner.** `src/patient_map.tsx`.

### Add Cellpool Lane as level 43

**Decision.** Keep the corrected private Cellpool Lane trial with concerns and implement stable
`level_43` in liver after `level_30` and before `level_32`, preserving the existing 42 definitions
and relative order with `level_20` last. Root approved production addition on 2026-10-17 at
11:42:58 UTC.

**Why.** Corrected private normal and recovery replays, reciprocal gate probes, fresh SPEC, QUALITY,
and integration reviews, and root's independent four-case replay support the cooperative flight and
reciprocal exit paths. They do not establish human readability, fun, or difficulty.

**Consequence.** Production scope is one level module and roster registration, existing liver art,
the stable Pac exit floor extension, two optional sparks, and approved copy. No shared engine,
configuration, asset, or tool change is approved. Keep current41 difficulty evidence frozen and
retain the Level 3 lateral cause as unresolved.

**Owner.** The [Cellpool Lane production plan](active_plans/active/CELLPOOL_LANE_ROOM.md).

**Acceptance.** Root accepted the production milestone as `DONE_WITH_CONCERNS` at 2026-10-17
12:06:45 UTC after native and focused browser routes, code/build checks, both standard smokes, six
fresh QUALITY passes, and integration review. Human readability, discovery, fun, and difficulty
remain unmeasured; the current41 assessment remains frozen and does not include this room. See the
[acceptance receipt](active_plans/reports/CELLPOOL_LANE_ACCEPTANCE.md).

### Carry a standing passenger through carrier descent

**Decision.** In `move_players`, carry an actually standing passenger by the carrier's clipped
vertical displacement in either direction. Clip the passenger against their own solids; if a
descending obstacle shortens passenger travel, the carrier continues and the passenger releases.
Keep upward pair clipping and ordinary passenger walk/jump input. Add no attachment state or
tolerance.

**Why.** Grounded support was lost during ordinary jump descent because vertical carry applied only
to upward movement. The existing AABB contact and axis clipping primitives already express the
needed geometry and collision ownership.

**Consequence.** A focused whole-jump test covers both carrier roles. Scripted native traces verify
the descending obstruction and detachment paths; they do not diagnose the Level 3 bridge report or
establish human playability. See the [carry descent plan](active_plans/active/CARRY_DESCENT_FIX.md).

### Add Neural Misfire as a bounded campaign room

**Decision.** Keep the private Neural Misfire feasibility result `KEEP_WITH_CONCERNS` and implement
stable `level_42` as one additive campaign room after `level_31` and before `level_38`, preserving
all 41 earlier definitions and their relative order, with `level_20` last. Root approved production
implementation on 2026-10-17. Scripted native and built-browser evidence supports operation, and root
reviewed the original captures. Fresh integration accepts with concerns; root accepted the bounded
production milestone as `DONE_WITH_CONCERNS` at 2026-10-17 10:48:39 UTC.

**Why.** Private simulation establishes the cross-villain handoff and recovery under ordinary
inputs. Production native replay supports the room route, but does not establish rendered readability,
human discovery, enjoyment, or campaign balance.

**Consequence.** The source contains the room module and roster registration. Root accepted the
bounded room milestone with concerns. The agreed clear,
recovery, identity, and root-view gates are complete. New room-specific Next/save/reload/42-row-menu
checks remain unrun and are outside the required acceptance scope because navigation and persistence
code did not change. These limits do not close the continuous gameplay goal.

**Owner.** The [Neural Misfire production plan](active_plans/active/NEURAL_MISFIRE_ROOM.md).

### Keep the accepted current41 assessment as a frozen design baseline

**Decision.** Preserve the complete current41 two-pass assessment, map, and generated report as a
source/build-bound expert baseline. Root accepted it as `DONE_WITH_CONCERNS` at 2026-10-17 09:27:51
UTC after fresh QUALITY and integration reviews. First-pass records and locks remain unchanged.

**Why.** The paired records add room-specific source and route evidence to the locked idle-image
estimates. Keeping the capture frozen makes its comparison reproducible while the campaign continues
to change.

**Consequence.** The 41 first-pass platforming values remain unknown. Scores are ordinal estimates;
scripted routes establish feasibility, not human success, discovery, enjoyment, or shared-keyboard
comfort. Zero control-friction estimates do not establish physical keyboard comfort. Current38 stays
historical, and no scores are inherited. Later source changes, including bridge presentation work, do
not update this accepted baseline or justify rerunning its freshness check. See the
[acceptance report](active_plans/reports/difficulty_41_acceptance.md) and
`README.md`.

### Keep Friendly Fire optional and room-owned

**Decision.** Keep stable `level_41`, **Cana's Friendly Fire**, at intestine position 11 after
`level_07` and before `level_11`. Pac intentionally starts Gem's bubble gun; Isp FLOATs to the upper
latch to open Pac's lower route. Crossfire is optional. On either boomerang leg, actual contact gives
active pushable Gem one horizontal shove in the projectile's direction per complete flight. Existing
four-second acid return and Gem bubble lifecycle remain authoritative.

**Why.** The distinct routes make both heroes' jobs explicit, while crossfire adds an optional
interaction without becoming a required solution. The one-response rule preserves direction through
the return leg and uses the existing interference path without new persistent state.

**Consequence.** Root accepts the bounded milestone as `DONE_WITH_CONCERNS` after the focused test,
official build, 41-room native replay, fresh empty-save browser journey, targeted views, reviews, and
repository gate. These establish scripted operation and sampled rendered behavior only. Human
discovery, readability, enjoyment, and coordination remain unmeasured; the synthetic legacy40 save
diagnostic is not a real-user import. Current38 remains frozen historical evidence; the separate
current41 assessment now covers rooms 39-41.

**Owner.** The [Friendly Fire plan](active_plans/active/friendly_fire_room.md),
[current41 assessment plan](active_plans/active/difficulty_41_refresh.md), and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Keep villain crossfire private pending a room trial

**Decision.** Set aside the tested return-left-only, two-flight candidate as a production design.
Retain only the causal possibility that villains can foil each other. Require a private full-room
go/no-go prototype before considering a production mechanic.

**Why.** The accepted private experiment shows the hook can cause a dunk after two returning hits,
but its payoff is delayed and it does not establish Isp's job, Gem bubble recurrence, a room clear,
or co-op quality. The original mechanic-only experiment assigned Isp no lane, so its conditional
FLOAT check did not trigger.

**Consequence.** Test a separate FLOAT-supported Isp route, actual jobs for both heroes, bubble
resumption, an ordinary clear, and idle safety in the private prototype. Root approved Phase A;
any production Phase B needs separate authorization and gates. This was the Phase A checkpoint;
the later Friendly Fire decision below records the separately approved and accepted production
room. No production mechanic or campaign change was approved at this earlier checkpoint.

**Owner.** The [private room prototype plan](active_plans/active/crossfire_room_prototype.md) and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Anchor platform DNA texture to its target

**Decision.** Pass fixed phase `0` to the existing DNA motif renderer for platform targets. Keep
passing elapsed time for barriers and hazards. The pattern remains positioned inside the live target
rectangle, so a moving platform carries its texture.

**Why.** The traveling wave is a real visual motion cue that can suggest surface movement. The
bounded Level 3 observation did not identify what the user perceived, so this change improves that
cue without claiming to diagnose the report.

**Consequence.** Preserve motif geometry, clipping, colors, target edges, platform movement, bridge
grace, co-op, attacks, and physics. Root accepted this bounded change as `DONE_WITH_CONCERNS` after
the 92-check code gate, build, two standard smokes, served-bundle identity, four captures, and fresh
SPEC, distinct QUALITY, and integration reviews all passed with concerns. The 2s/3s comparison is
qualitative; no player-held view, wall-animation proof, or permanent branch test is claimed. The
reported physical or perceived motion remains unresolved pending human clarification or a concrete
reproduction.

**Owner.** The [surface texture anchor plan](active_plans/active/SURFACE_TEXTURE_ANCHOR.md) and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Add Boneheads with sustained mutual support

**Decision.** Keep stable `level_39`, **Boneheads**, at brain position 32 after `level_27` and before
`level_35`. Build on level 30's grounded carry: Pac carries Isp while Isp maintains the high contact,
then Isp takes the upper route as Pac continues below. Use the fixed contact to reactivate the span;
do not describe it as a catch for falling heroes.

**Why.** The room develops level 30's carry into sustained mutual support, separates the two exit
routes, and places the brain room away from the liver carry rooms. Existing pad, carry, platform,
movement, jump, villain, and save contracts cover the route without a shared engine change.

**Consequence.** Preserve the other 38 enriched definitions and their relative order, with
`level_20` last. Keep scripted feasibility and built behavior separate from claims about human
readability, discovery, comfort, or enjoyment. SPEC, distinct QUALITY, and integration accept with
concerns; root accepts `DONE_WITH_CONCERNS`, noting the small Cana status-tag overlap on the bottom
exit rim as nonblocking. The room remains unassessed by players; the continuous gameplay goal remains
active.

**Owner.** The [Boneheads room plan](active_plans/active/BONEHEADS_ROOM.md) and
[gameplay direction ledger](active_plans/reports/gameplay_direction.md).

### Give Boneheads a lower-jump recovery

**Decision.** Add static platform `lower_return_fold` at `{ x: 940, y: 568, width: 50, height: 14 }`
to `level_39` and tell players in the final hint sentence to jump out from the catch fold after
missing the lower jump. Preserve all other level data and room order.

**Why.** On the original geometry, the reproduced late jump occurs after Pac leaves support and
leads to death. The fold catches Pac and supports a fresh jump; the ordinary route remains intact.

**Consequence.** Root accepted this bounded change as `DONE_WITH_CONCERNS` on 2026-10-17 at
15:21:55 UTC. The other 42 assembled definitions and their order are unchanged. Scripted native and
built-browser routes support the recovery and sampled legibility; fun, discovery, comfort, and
difficulty remain unmeasured. The broad gameplay goal remains active. See the
[movement follow-up acceptance](active_plans/reports/movement_followup_acceptance.md).

**Owner.** The [movement follow-up plan](active_plans/active/movement_followup.md) and
[`src/level_grounded_carry.ts`](../src/level_grounded_carry.ts).

### Give late bridge retreats a modest grace window

**Decision.** Set stable `level_04`, **Bridge Over Troubled Slime**, `collapseAfter` to 1.2 seconds
from 0.8 seconds. Preserve the cooperative STEADY/RESCUE pads and gates, optional villain
acid-dunks, bridge geometry and reset, attacks, and controls. This is a modest tested grace
adjustment, not a mathematically minimal value or a fix for the unresolved reported side-to-side
motion.

**Why.** The ordinary-input probe found that a 1.6-second retreat died with 0.8 seconds but reached
the left bank with the cloned 1.2-second value; a 1.75-second retreat remained too late. Public
source replay confirms the ordinary cooperative clear and both optional villain dunks, four-second
returns, and cooperative clear. All 38 level definitions and their order differ only at this
numeric field.

**Consequence.** Keep the room unstable and retain its existing cooperative solution and optional
interactions. Root owns official build and browser acceptance; scripted simulation does not establish
human comfort, fairness, or enjoyment. The reported bridge motion remains unresolved, and the frozen
current38 assessment is unchanged.

**Owner.** The [Level 3 bridge grace plan](active_plans/active/LEVEL3_BRIDGE_GRACE.md); transient
preflight and public replay evidence is in `tests/_temp/level3_bridge_grace/REPORT.md`.

### Show Level 3 bridge support state

**Decision.** Keep Level 3's unstable bridge and existing STEADY/RESCUE challenge, and use its
existing occupancy progress to show an interior bruise and progressive tears beneath a fixed landing
rim. Stabilization retains the green appearance; inactive and reset states follow existing behavior.
Keep the always-visible subtitle **"Pac holds STEADY until Isp reaches RESCUE."**

**Why.** The accepted 1.2-second grace and texture anchor did not explain the human report of lateral
motion or make the first-encounter cooperative instruction visible without opening a hint. The
state-derived presentation makes changing support clearer without changing gameplay contracts.

**Consequence.** Root accepts the bounded milestone as `DONE_WITH_CONCERNS` after fresh SPEC,
corrected QUALITY, integration, native route, build, smoke, and five-view browser evidence. An initial
pixel review prompted a focused warning-visibility correction. Scripted routes and captures do not
establish human comfort, readability, or reduced falls; reported lateral motion and fall frequency
remain unresolved. The accepted current41 assessment remains frozen to its pre-change source/build.

**Owner.** The [bridge readability plan](active_plans/active/BRIDGE_READABILITY.md) and
[acceptance report](active_plans/reports/bridge_readability_acceptance.md).

### Use current38 findings to select the next review direction

**Decision.** Root accepts the completed current38 assessment as DONE_WITH_CONCERNS and approves the
bounded [pad role cues plan](active_plans/active/pad_role_cues.md). It refines role-card wording in the
anatomical context and labels level 07's STEADY effect **STEADY BRIDGE / PARK FAR FERRY**, leaving
release timing for players to infer. Preserve geometry, controls, effects, and the release puzzle.
Keep the level 3 bridge-motion report unresolved; source without authored horizontal
motion does not disprove the reported experience. Treat a first-time Cargo Exchange observation as
useful evidence, not a general gate. Do not add a generic feedback framework, show the full solution
by default, or select a new room to fill a quota. Source implementation waits for current38 plan and
run README closeout; the captured source/build snapshot remains frozen.

**Why.** The current38 findings identify overbroad role-card language and Double Trouble's
hold-until-boarded release order as a source-backed cue opportunity. The assessment is ordinal expert
evidence, and human outcomes remain unknown. The bridge-motion report cannot be resolved by source
inspection alone.

**Consequence.** Keep the follow-on within existing role and pad behavior, preserve accepted rooms
and the finale, and do not create a generic feedback system or assessment gate. Fresh SPEC and QUALITY
accept with concerns; integration accepts with concerns and no material finding or drift; root accepts
current38 as DONE_WITH_CONCERNS. Source implementation waits until the plan and run README closeouts
are complete; its owner will synchronize the approved copy before implementation. This is a
sequencing dependency, not an additional human approval gate. The
[assessment receipt](active_plans/reports/difficulty_38_acceptance.md) records the
findings and limits. The [gameplay direction ledger](active_plans/reports/gameplay_direction.md)
tracks the selected plan.

**Owner.** The `FINDINGS.md`,
[gameplay direction ledger](active_plans/reports/gameplay_direction.md), and
[current38 acceptance receipt](active_plans/reports/difficulty_38_acceptance.md).

### Add Jump to Conclusions under existing contracts

**Decision.** Keep the bounded native design with concerns and authorize production for brain
`level_38`, **Jump to Conclusions**, at position 34 between `level_31` and `level_29`. Preserve all
37 previous definitions and their relative order, with `level_20` last. Use the existing level,
recoil, barrier, physics, save, and configuration contracts; add no shared runtime contract. Use the
exact approved brain tissue asset, SHA-256
`1c4b95db1af1ed51ca86fa6d3a8443d3f4d00e624a4ba5aac3d5ba0bdb786f4e`.

**Why.** Native traces show a causal split, an Isp-held route that enables Pac's upper crossing, a
reciprocal Pac latch that opens Isp's route, and a floor convergence. They also record the corrected
short-gate bypass and a Cana-pressured miss/retry clear. The pattern differs from room 37's
own-return/return-to-help sequence.

**Consequence.** Keep production scope bounded to the new room and the approved renderer/build seam.
Run the single integrated gate `./check_codebase.sh`, followed by
`source source_me.sh && ./run_playwright_tests.sh --build`; the latter performs the official build
and two standard smokes. Human discovery, enjoyment, comfort, and reduced-motion behavior remain
unmeasured and are not production gates. Do not require a full campaign journey or difficulty refresh.
The plan and acceptance receipt own implementation evidence and remaining limits.

**Owner.** [Production plan](active_plans/active/split_launch_room.md) and
[acceptance receipt](active_plans/reports/split_launch_acceptance.md).

### Keep organ atlases at the renderer seam

**Decision.** Keep original brain, intestine, liver, and marrow surface art in one atlas asset per
organ, integrated at the existing renderer seam for active, horizontal, solid surfaces. The artist owns
each SVG; root accepts it against the shared atlas and landing-edge contract before source
integration. Preserve the authoritative platform clip, continuous top rim, and procedural fallback.
Reuse existing renderer and build seams; add no renderer mode or preview interface.

**Why.** Each bounded presentation gives active organ surfaces a distinct tissue cue while keeping
landing geometry and gameplay behavior under their existing owners. The fixed atlas contract serves
thin shelves and deep floors; the existing fallback preserves behavior when an image is unavailable.

**Consequence.** Limit integration to the existing render and build lists. Preserve geometry,
physics, controls, state, clipping, and fallback behavior. For Marrow's art-only fallback capture,
ordinary movement by one hero is sufficient; retain the deliberate failed request and matching
console event in the raw receipt. Each acceptance ledger owns its capture contexts, source/build
identities, evidence, disposition, and limits. Brain, intestine, liver, and marrow surface
milestones are accepted DONE_WITH_CONCERNS. Human readability, enjoyment, discovery, and comfort
remain unmeasured.

**Owner.** The [brain](active_plans/active/brain_tissue_architecture.md),
[intestine](active_plans/active/intestine_tissue_architecture.md),
[liver](active_plans/active/liver_tissue_architecture.md), and
[marrow](active_plans/active/MARROW_TISSUE_ARCHITECTURE.md) plans, with acceptance ledgers:
[brain](active_plans/audits/gameplay_and_brain_review.md),
[intestine](active_plans/reports/intestine_tissue_acceptance.md),
[liver](active_plans/reports/liver_tissue_acceptance.md), and
[marrow](active_plans/reports/MARROW_TISSUE_ACCEPTANCE.md).

### Keep liver profile changes inside the existing atlas

**Decision.** The 2026-10-17 liver profile milestone changes only the original
`src/assets/liver_tissue_surface.svg`. Keep the existing atlas dimensions, crops, repeat edges,
platform clipping, landing rim, and fallback contract; build visible thin folds and deep masses
within those bounds.

**Why.** Root accepted the sampled game-scale improvement without changes to renderer or gameplay
ownership. Repeated cadence, narrow-end truncation, and limited thin-strip volume remain accepted
visual constraints; they do not justify changing the shared draw contract in this milestone.

**Owner.** The [profile plan](active_plans/active/liver_tissue_profiles.md) and
[acceptance report](active_plans/reports/liver_tissue_profiles_acceptance.md).

### Isolate each difficulty assessment run

**Decision.** Require both developer CLIs to take `--run-dir` with a repo-relative path of the form
`docs/difficulty_runs/<lowercase_ascii_name>` for every assessment and capture command. Resolve
fixed snapshot, observation, record, lock, map, and report paths beneath that directory. For the
current 28-room reassessment, use `docs/difficulty_runs/current_28`.

**Why.** Historical 23-room artifacts must remain available without becoming the implicit write
destination for a new assessment. One required run directory gives both tools the same path owner
while preserving the existing roster, provenance, and scoring contract.

**Consequence.** Snapshot requires an absent or empty run directory; capture requires absent
`observations/`; locks remain immutable; and report generation replaces derived outputs only within
the selected run. Keep historical captures, records, locks, calibration, and published outputs
unchanged. The accepted 28-room run at `docs/difficulty_runs/current_28` is frozen with its
snapshot, capture, records, locks, map, report, dossiers, findings, and chart. Its milestone is
DONE_WITH_CONCERNS as a pre-Gem source snapshot; the later `level_16` change makes its source
freshness check stale by design. Preserve it as design input, not a current-source assessment or a
game-build gate. The acceptance ledger owns its status, and
[LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md) provides current artifact navigation. The approved D1
contract report contains the detailed implementation handoff;
its ignored temporary location is internal workflow context, not a published navigation target.

**Owner.** The CLI path contract in [run_paths.mjs](../devel/difficulty/run_paths.mjs),
[assess_difficulty.ts](../devel/assess_difficulty.ts), and
[capture_difficulty_observations.mjs](../devel/capture_difficulty_observations.mjs); workflow
status in [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md).

### Implement the bounded Gem Lair choice

**Decision.** Apply approved D2/V1 to stable `level_16` at campaign position 21. Gem stands at
`(775,350)` and fires the existing automatic bubble attack with range 150. STEADY and RESCUE each
interrupt once before the attack recurs; normal boss success stops attacks. Replace the center robot
display with the existing glucose-organ SVG pump and draw one regular-scale canonical Gem. Reuse
existing target-pad and `bossDefeated` state. Preserve the ferry/bridge relay, all other 27 room
definitions, IDs/order, saves, physics, and shared types.

**Why.** The bounded comparison found optional useful FLOAT, ordinary clears without bubble contact,
and recovery after specific bridge collapse or missed-boost routes. Those actual-source traces
support trying this choice while preserving alternatives; they do not show universal recovery,
player discovery, or enjoyment.

**Consequence.** The implementation adds no Cana attack, objective, ledge, collision, asset, state,
type, shared scale, or weapon-pose framework. The fresh source SPEC accepts with concerns; the root
82-Node/TSC/lint gate, source-to-asset parity, and official build pass. The
[Gem Lair acceptance ledger](active_plans/reports/gem_lair_acceptance.md) owns smoke, browser, and
campaign evidence and live gates; this decision does not claim final milestone acceptance.

**Owner.** `src/levels_final.ts`, `src/villain_scenes_final.ts`, `src/render_game.ts`, and
`src/render_tumor_organs.ts`; acceptance evidence in the
[Gem Lair acceptance ledger](active_plans/reports/gem_lair_acceptance.md).

### Give Cana an anatomical signal display

**Decision.** Replace only the generic robot display in stable `level_19`, Cana's Control Freak-Out,
with an editable anatomical brain signal knot. Keep the single canonical Cana actor and his actual
returning boomerang; derive the existing target badges and defeated feedback from the current pad and
boss state. Preserve Gem16, the finale core, all room data, and every gameplay contract.

**Why.** The anatomical setting should carry through the boss display while Cana remains visibly
present as the live opponent. The signal knot fills the duplicate generic display seam without
adding a second Cana actor or another gameplay system.

**Consequence.** The original SVG and renderer are implemented, with a simple loading/failure
fallback. Isolated source checks and small-size render inspection are complete. The
[Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md) owns current validation
and acceptance status.

**Owner.** `src/assets/tumor_signal_knot.svg`, `src/render_tumor_organs.ts`, and
`src/render_game.ts`; acceptance in the [Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md).

### Preserve Cana's fixed aim in Control Freak-Out

**Decision.** Keep stable `level_19`'s authored fixed boomerang aim, Cana scene position, interruption
pads, geometry, and all 28 room definitions and their order. Do not apply nearest-hero aiming to
this encounter.

**Why.** The source comparison found that nearest aim misses Pac on the natural crossing where the
original shot produces the SHOVE and STEADY interrupt moment. In the ordinary nearest-aim relay,
RESCUE interrupts the later shot before release. The optional bait-and-dodge route required delaying
RESCUE and added roughly four seconds (17.11 versus 13.59) without a demonstrated stronger partner
choice. Preserve the original route and its timing alternatives.

**Consequence.** The root selected KEEP ORIGINAL with DONE_WITH_CONCERNS. The source comparison
records route traces and limits in temporary evidence; no human discovery, enjoyment, or browser
result follows from those traces. The
[Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md) owns live evidence and
acceptance gates.

**Owner.** `src/levels_final.ts` and `src/villain_scenes_final.ts` remain authoritative for the
unchanged authored level and scene; the [Cana encounter ledger](active_plans/reports/cana_encounter_acceptance.md)
tracks the comparison and acceptance.

### Give Pac an intentional park and release in A Meeting of Minds

**Decision.** Update the existing `level_18` so Pac uses PARK to stop and position its naturally
powered shelf, stabilize the lower bridge, and open the upper DNA gate. Releasing PARK sends Isp
forward; reholding permits early park/resend and recovery through the lower bridge. Isp latches
RESCUE to open Pac's stairs. Preserve the other 27 room definitions, all 28 stable IDs and their
order, chapter boundaries, and save behavior.

**Why.** Replace Pac's passive wait on POWER with a deliberate route handoff using existing pad,
power, and latch behavior. The main route and bounded alternatives keep both heroes active without
changing shared engine contracts.

**Consequence.** Production replays through the actual registry match all final states and events;
SPEC and QUALITY accept, the root code gate passes, and the official build and permanent smokes
pass. QUALITY and the root review normal/reduced-motion and recovery images without a blocker. All
six focused browser cases pass with a bounded ordinary left-exit continuation; browser acceptance
is DONE_WITH_CONCERNS, its helpers are archived, and port custody is closed. The initial route
failure remains preserved. Adapted campaign attempt 02 passes all 28 rooms, Replay reload,
Trial/reset/isolation, and genuine prior-save compatibility; its helper archive and port custody are
closed. Full Python passes 1,984 tests after archival. Fresh integration ACCEPTS WITH CONCERNS
without blockers; the manager accepts this milestone as DONE_WITH_CONCERNS after reviewing runtime
evidence and seven actual normal/reduced/recovery images. The build pins remain frozen. No permanent
layout-specific test was added; actual-registry replays and product acceptance lanes cover the
authored room. The far gate/exit/pad cluster is dense but readable; human enjoyment, discovery,
paired comfort, and current numeric difficulty remain unmeasured. See the
[active partner acceptance ledger](active_plans/reports/active_partner_acceptance.md).

**Owner.** The level-18 blocks in [src/levels_final.ts](../src/levels_final.ts) and
[src/villain_scenes_final.ts](../src/villain_scenes_final.ts); acceptance evidence in
[active_partner_acceptance.md](active_plans/reports/active_partner_acceptance.md).

### Keep committed nearest-hero aim local to Attention, Please!

**Decision.** Add stable `level_27`, **Attention, Please!**, after `level_22` and before
`level_19` at campaign position 25. The no-pad cargo route lets Pac drop a signal sac for Isp to
climb while Pac's natural movement draws Cana's attack. In this room only, Cana snapshots the
nearest hero when the yellow warning begins and holds that aim through the throw and return. Keep
other rooms on authored static aim. B4 widens the upper bait perch to support an ordinary leftward
dodge. Preserve the previous 26 room IDs and relative order, and save schema v1.

**Why.** The room explores whether a partner can use a committed attack to support a distinct
physical route without adding a pad or new physics. The earlier floor-Cana route did not show a
useful retreat decision; the upper route keeps Isp's cargo work and Pac's movement concurrent.

**Consequence.** The B4 source, official build, smoke, fresh SPEC, five focused browser cases, fresh
27-room campaign, and full-Python suite pass. Focused review is DONE_WITH_CONCERNS without a
blocker. Fresh QUALITY accepts with no blockers or drift. Fresh integration ACCEPTS WITH CONCERNS
without blockers; the manager accepts the milestone as DONE_WITH_CONCERNS. The acceptance ledger
records evidence and limits. Initial warning/weapon crowding remains a nonblocking concern. Scripted
routes do not establish human enjoyment, discovery, paired-play comfort, or numeric difficulty.

**Owner.** `src/level_attention_please.ts`, campaign registration and nearest-aim runtime; see
[baited_boomerang_acceptance.md](active_plans/reports/baited_boomerang_acceptance.md).

### Let Pac rebound from a bubble's gold top

**Decision.** On any bubble, an eligible airborne Pac rebounds with the ordinary jump impulse when
he is descending onto the gold upper cap and the sampled contact is approaching. Mark Pac hit once
and preserve that bubble on its original fixed path so Isp can later catch it for FLOAT. Other Pac
contacts retain their existing behavior, including side STICKY. Add **Two for One** as stable
`level_28` at position 19, after `level_26` and before `level_15`; preserve the previous 27 room
definitions, their relative order, and save schema v1. Same-flight completion is not a requirement.

**Why.** A recurring villain attack can create a controllable opportunity that changes what both
heroes can do with one visible projectile. A failed catch has ordinary recovery, and later bubbles
remain available; random targeting or a new timing gate is unnecessary.

**Consequence.** Existing `hitPlayers` records Pac's one use. Isp's later FLOAT consumes the same
flight; ordinary side contacts, immunity, endpoint expiry, and recovery rules remain in their
existing owners. The gold cap, retained-flight accent, legend, and Gem reaction derive from the
existing hit marker; no new state, timer, effect, or audio event is added. The source checks, build,
SPEC, and 28-room campaign pass. QUALITY accepts with concerns and no blocker. The six-case focused
browser lane is DONE_WITH_CONCERNS; its evidence custody is closed. Three recovery steps account
for 16-32 ms browser-clock quantization, with raw traces preserved. Full Python passes. Fresh
integration ACCEPTS WITH CONCERNS without blockers, and the manager accepts the milestone as
DONE_WITH_CONCERNS. Scripted results do not establish human discovery, enjoyment, paired comfort,
or difficulty. See the
[living puzzle acceptance ledger](active_plans/reports/living_puzzle_acceptance.md).

**Owner.** [src/interference.ts](../src/interference.ts),
[src/level_two_for_one.ts](../src/level_two_for_one.ts),
[src/levels.ts](../src/levels.ts), [src/render_interference.ts](../src/render_interference.ts),
[src/render_villains.ts](../src/render_villains.ts), and [src/app.tsx](../src/app.tsx).

### Allow authored weapon-only villain scenes

**Decision.** Allow a room's authored villain scene to have no puzzle schemes when its real weapon
attack supplies the intended interaction. Retire only the validator's per-villain nonempty-scheme
quota. Keep actual scene and attack references, authored scheme target/counter checks, attack range,
boss, counterweight, stable-ID, and campaign validation.

**Why.** The historical [recurring-villains plan](archive/recurring_villains_plan.md#L150) required
two schemes per villain at lines 150-155 while explicitly excluding weapons at line 42. Two for
One's real Gem bubble is its causal interaction; labeling a static shelf as a fake Cana energy gate
would describe machinery that does not exist. The manager approved the narrow retirement.

**Consequence.** Weapon-only scenes need no invented target or replacement quota. Keep the
historical rule and its explicit retirement visible; this is a settled change, not accidental
validator cleanup. The production import and malformed-reference probes pass. Evidence and limits
are in the [living puzzle acceptance ledger](active_plans/reports/living_puzzle_acceptance.md).

**Owner.** [src/levels.ts](../src/levels.ts) and the
[historical recurring-villains plan](archive/recurring_villains_plan.md).

### Make responsive sound optional and state-linked

**Decision.** Use optional responsive sound across the shared runtime for actual hero, mechanism, villain,
collectible, death, cooperative victory, and finale transitions. Keep existing rooms and their order,
visual feedback, and game rules. Start new progress muted; normalize absent or invalid
`soundEnabled` values to false while retaining saved booleans and earned records in the existing
schema. Provide one visible Sound off/on control whose `aria-pressed` value reflects enabled state.
Runtime owns the trusted document-click and accepted-keydown gate; an enabled visible control may
initialize or resume audio, including turning sound on before Play. A saved enabled value alone does
not create a context at boot, and cues remain silent until gameplay transitions. Simulation updates
and `start_level` do not create or resume contexts. Keep DOM events out of public controls and use
no audio event bus. Cancel queued and active audio on pause, hidden page, mute, retry, or disposal.

**Why.** Before this change, the accepted 26-room campaign persisted `soundEnabled` without sound.
State-linked cues make its cooperative responses audible without adding music, game
rules, or frame-by-frame noise. The classroom-oriented
[FUN_VIBES_DESIGN_STYLE.md](FUN_VIBES_DESIGN_STYLE.md) specifies sound off by default and a
persisted mute control.

**Consequence.** Audio remains optional, unavailable audio cannot stop play, and resuming produces
no stale backlog. The accepted audio surface is `GameAudio.set_enabled`, `unlock`, `reset`,
`update`, and `dispose`; `RuntimeControls` exposes only `toggle_sound`. Cues reflect state
transitions rather than continuous simulation. Fresh integration accepts with concerns and no
product blocker; the manager accepts the milestone as DONE_WITH_CONCERNS. The build, browser
evidence, and remaining limits are recorded in
[living_sound_acceptance.md](active_plans/reports/living_sound_acceptance.md). Human enjoyment,
paired-play comfort, and physical listening remain unmeasured.

**Owner.** Shared audio runtime and preference contract; acceptance evidence in
[living_sound_acceptance.md](active_plans/reports/living_sound_acceptance.md).

### Prioritize reciprocal cooperative routes

**Decision.** After acceptance of the 24-room pressure milestone, prioritize new
cooperative gameplay with distinct routes and reciprocal contributions over generic assessment-run
configuration or extra attack-state explanations. The manager's next design priority is level 25,
using existing mechanics and fair recovery; introduce engine types or configuration only if
feasibility demonstrates the need.

**Why.** The accepted pressure milestone is complete, while the ongoing goal is to improve the
gameplay. Distinct routes give both partners consequential work; assessment refresh remains useful
future work, and the 23-room difficulty records remain historical.

**Consequence.** This direction led to the level-25 and level-26 additions. The later responsive
sound decision records the current milestone priority. Do not claim a new current-campaign
difficulty assessment from this earlier decision. The canonical acceptance report remains the
owner of the pressure milestone's counts and limits.

**Owner.** Manager priority; living direction in
[gameplay_direction.md](active_plans/reports/gameplay_direction.md).

### Bubble Bouncer keeps interception optional

**Decision.** Select the compact Bubble Bouncer for additive stable `level_26` in the liver, after
stable `level_14` and before `level_15`. Gem's shot uses range 450 and speed 260. Isp holds the
doors while Pac may intercept the shot, become STICKY, and jump to the exit perch so Isp can FLOAT
through. A fast cooperative dodge may clear the far gate before an unblocked shot reaches Isp, but
a full fast-dodge route is not verified. Preserve the potential alternative and do not add barriers
or timing pressure to require catching. Translate all local x-coordinates by -150 while keeping the
world and full floor fixed. Shrink HOLD from width 100 to 60, keeping its new left edge at 450. Use
the prototype subtitle and a source hint that tells Pac to jump onto the shelf before its far end.
Aim the bubble endpoint at x=450, matching HOLD's left edge, so Isp can receive FLOAT at the tested
left-edge position without exceeding the attack range.

**Why.** B1 selects the compact, slower shot over the initial 800/600 hypothesis. The frozen
fixture's 6.800-second main route, 8.992-second missed-landing recovery, and 10.480-second early-
jump recovery pass independent replay; all 25 serialized baseline definitions and their order
match. Interception demonstrates shielding, while timing necessity remains unproven. The 60px HOLD
ends at x=510, keeping every valid Isp overlap body below x=540 and clear of the upper route at
x=550; the main route still holds at x=501.2. This prevents the former wide pad's upper-ledge
overlap and FLOAT bonk. B3 found that the original target at x=470 left a 16.08px gap from Isp at
the left HOLD edge, so no FLOAT arrived through 11.2s. The frozen target x=450 delivers FLOAT at
4.080s, reaches the upper route at 5.808s, and completes at 7.120s from that edge position. All
active HOLD horizontal positions are covered by the path from x=450 through x=881. Actual travel is
431px within the 450px range; all three original routes still pass. The bridge-collapse prototype's
11.712-second main route recovers from a real SHOVE, but a later recovery leaves both heroes below
and requires Retry; its STEADY-to-RESCUE relay also repeats many existing rooms, so it is deferred.

**Consequence.** Keep the behavior room-local and use existing mechanics and types; no engine
contract change is needed. Stage the room as a safe comic breather after the bomb room and before
team cargo. Keep Gem's 99px sprite and 158px status box inside the canvas by shifting local
geometry, not the world or full floor. Preserve all 25 existing room definitions and relative
order. The prototype report is raw `FEASIBLE_WITH_LIMITS` with canonical handoff
DONE_WITH_CONCERNS. The production module and roster are frozen, and canonical source checks pass.
Fresh SPEC independently replays the routes and confirms the prior room definitions and transforms;
SPEC and distinct QUALITY ACCEPT, with no blockers. The official build and
unchanged permanent browser tests pass on retry after a sandboxed Chromium launch failed before test
bodies. Five focused normal/reduced browser cases pass with no page/console/request errors. The
accepted reduced-motion capture is in [bubble_bouncer.png](screenshots/bubble_bouncer.png). Faces,
status, and landing rims remain readable; minor Pac/Gem art overlap at the shelf is nonblocking.
No engine/type contract or permanent test was added. The fresh 26-room journey completes in exact
order, earns 26 Replay entries, and reloads identical progress with no app/page/resource errors.
The separate reduced-motion capture documents that mode only. Fresh integration ACCEPTS WITH
CONCERNS, with no blockers; the manager accepts the milestone as DONE_WITH_CONCERNS. A complete
fast-dodge route, human enjoyment/discovery, paired-play comfort, and current 26-room difficulty
remain unverified. Continuous game development remains ACTIVE.

**Owner.** Manager B1; evidence and accepted status in
[bubble_guard_acceptance.md](active_plans/reports/bubble_guard_acceptance.md).

### Recurring pressure uses attempt-scoped interrupts

**Decision.** Once started, an attacker keeps recurring until earned boss defeat or room
completion. Author `startsOnPadId?` and `interruptedByPadIds?` without old-name aliases. Runtime
attackers own required `started` and `usedInterruptPadIds` fields: start once, then consume all
active unused interrupt IDs together, cancel that attack's flight, and restart its full existing
cooldown and windup. Start/interrupt ticks preserve the reset; held, latched, or reentered used
pads do not reset it again. Shared eligibility requires playing, boss undefeated, and a started
runtime attacker; missing runtime is ineligible and a missing attacker produces no weapon pose.

**Why.** A control can buy recovery time while preserving the villain's recurring role. One
shared attempt-state owner keeps simulation, authoring, weapon cues, and tests consistent.

**Consequence.** D1 is implemented with fresh source SPEC and distinct QUALITY acceptance.
Use `release | catch | interrupted` markers and `waiting`/
`interrupted` weapon actions in place of `silenced`; reuse the existing 0.35-second recovery,
give windup priority, and preserve natural catch. Dead/completed state does not advance; boss
defeat clears flights/markers while effects recover. Pause freezes; retry resets attempt state.
Preserve mechanism order/one-substep lag, all 24 room geometries/order, effects, lanes, and timing
initially. Migrate authored fields and narrow inaccurate hints; preserve BUBBLES/LIFT causality.
Keep puzzle-scheme reactions separate from weapon state. Add no save fields, timers, phases, or
tuning. Historical acceptance for the earlier 24-room pressure milestone records its 24 focused
browser cases, four isolated-trial journeys, normal-motion campaign, integration, and manager verdict
in [recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).
That evidence does not establish the status of later Marrow work. The approved Marrow pilot adds one
BLUE-interruptible Cana boomerang to level 11 Split Decision, labels automatic latches `STAYS ON`, and
cues level 10's ride-first route. Its evidence and status belong to the
[recurring Marrow plan](active_plans/active/recurring_marrow.md).

**Owner.** [src/types/interference.ts](../src/types/interference.ts),
[src/interference.ts](../src/interference.ts), [src/weapon_pose.ts](../src/weapon_pose.ts), and
[recurring_villain_pressure.md](archive/recurring_villain_pressure.md).

### Partner poses derive from support

**Decision.** Select the paired carrying/riding SVG poses from current valid runtime support,
with static reduced-motion output and legible base-art fallback while images load or fail. Keep
normal-state canonical art and physical feet, footing cues, collision bodies, controls, and saves.
For movement, a grounded rider in actual `stands_on` contact inherits one collision-clipped
horizontal carrier displacement against both heroes' personal solids and crates. Rider input remains
relative; a rider may walk or jump away. Add no state, types, configuration, support graph, or
platform-to-hero stack propagation.

**Why.** Clear partner silhouettes and faces should come from presentation while the established
support and movement rules remain authoritative.

**Consequence.** Composition B, implementation, fresh SPEC, and distinct QUALITY pass. Six
selector checks, 40 pixel-identical solo cases, actual normal/reduced FLOAT rides, and the final
11 geometry/terminal, eight temporal, and five loading scenarios pass. Synthetic matrices
establish bounded presentation behavior; ordinary routes establish built-game operability.
The existing 88-pixel art extends beyond its 36-pixel collision body and can overlap a ceiling
at top-hitbox contact. Keep that art/physics boundary explicit. Fresh combined integration and
explicit manager acceptance close the pose milestone as DONE_WITH_CONCERNS, recorded in
[active_plans/reports/recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).
The cooperation ledger owns carrying/level30 validation and acceptance status; see
[active_plans/reports/cooperation_surprise_acceptance.md](active_plans/reports/cooperation_surprise_acceptance.md).

**Owner.** [src/physics.ts](../src/physics.ts), [src/character_art.ts](../src/character_art.ts),
[src/render_characters.ts](../src/render_characters.ts), [src/render_game.ts](../src/render_game.ts),
[src/level_your_turn_to_carry.ts](../src/level_your_turn_to_carry.ts), and
[tests/test_physics.mjs](../tests/test_physics.mjs), and
[partner_readability.md](archive/partner_readability.md).

### Playwright owns its local server

**Decision.** Keep one Playwright-managed loopback server for the built `dist/` tree. The repo-local
standard-library `ThreadingHTTPServer` helper uses `socket.SOMAXCONN` for its request queue and
HTTP/1.0 handling, validates the port/build directory, and exposes startup/bind failures. The
config sources the project environment through Bash and uses `exec python3` for server lifecycle.

**Why.** Controlled comparisons observed backlog sensitivity in the prior local transport fault.
The helper keeps the bounded repair at the runner/server owner while preserving the existing
two-worker browser journeys and normal resource failures.

**Consequence.** Fresh SPEC and distinct QUALITY accept the repair; six unchanged permanent test
pairs produced 12 pages, 96 HTTP 200 responses, and zero reported errors. CLI/config validation,
root/MIME/404, bind failure, and cleanup checks pass. The exact kernel mechanism remains inferred;
this is bounded local evidence, not a universal transport guarantee or gameplay acceptance.
Fresh combined integration and explicit manager acceptance close the lane as DONE_WITH_CONCERNS.
The latest recorded full Python suite passed (1,886 tests in 1.96 seconds), and the passive
shared-storage total was below 20 GB, so new feature work may proceed while continuous game
development remains ACTIVE. This is a point-in-time observation, not a capacity guarantee. See
[recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md).

**Owner.** [playwright.config.ts](../playwright.config.ts),
[tests/playwright/helper_static_server.py](../tests/playwright/helper_static_server.py), and
[browser_transport_investigation.md](active_plans/reports/browser_transport_investigation.md).

### FLOAT passenger room ownership

**Decision.** Add stable `level_24`, I've Got You, after `level_13` and before `level_14` in the
liver. Reuse physical head support and Gem's FLOAT to carry Pac on Isp, then transfer control
through Pac's CROSS hold and Isp's RECONNECT latch. Preserve every previous room definition and
relative order. Keep Gem available for repeat rides after the latch.

**Why.** The accepted feasibility candidate makes each partner the other's route while varying
the preceding useful-FLOAT lesson. A safe floor and repeatable ride permit ordinary recovery;
permanently suppressing Gem at RECONNECT would trap a fallen Pac below the upper route.

**Consequence.** Keep geometry and villain setup room-local; existing physics, controls, shared
types, save schema, and liver tissue remain authoritative. Cana's gate scheme supplies a
consequential role without another projectile. Historical 23-room difficulty records stay frozen;
the addition requires its own observed evidence before numerical difficulty or human-play claims.

**Owner.** [src/level_float_passenger.ts](../src/level_float_passenger.ts), campaign assembly in
[src/levels.ts](../src/levels.ts), and
[float_passenger.md](active_plans/active/float_passenger.md).

### Temporary Graphify Cargo reconciliation

**Decision.** Reconcile exact Cargo aliases with their AST package twins before
reclustering; verify the resulting IDs against Graphify's loaded graph before writing.

**Why.** Graphify 0.9.80 compares normalized candidate counts with raw JSON counts,
and its original-link export otherwise drops links still pointing to removed aliases.

**Consequence.** Preserve all link records and the active shrinkage guard. Keep the
correction in one removable function; already reconciled upstream output is a no-op.

**Owner.** `normalize_cargo_twins` in
[devel/graphify_prune_tests.py](../devel/graphify_prune_tests.py)
and [devel/graphify_map_repo.py](../devel/graphify_map_repo.py).

### Bad Cell Day cooperative switch contract

**Decision.** Occupancy plates remain active while occupied. Clearly marked
rescue switches latch and enable the partner to follow. Boss targets latch only
after both characters activate them together. Entity IDs are strings and
simulation values use pixels and seconds.

**Why.** Consistent held and latched behavior makes cooperative puzzle rules
predictable and gives boss encounters a clear shared action.

**Consequence.** Shared state, physics, level data, rendering, and acceptance
checks use this contract. A0 defines the implementation interfaces; dependent
work remains pending until that contract is accepted.

**Owner.** Bad Cell Day shared-contract artifact tracked in
[archive/bad_cell_day_plan.md](archive/bad_cell_day_plan.md).

### SolidJS presentation boundary

**Decision.** Use SolidJS for UI state and presentation. Keep physics and the
canvas runtime independent of Solid. `runtime.ts` owns canvas drawing, keyboard
input, and the animation loop; `App` initializes and disposes that runtime.
Signals own presentation state, including progress, completion, and storage
notices. Configure TypeScript with `jsx: "preserve"` and
`jsxImportSource: "solid-js"`, and compile Solid components with the JavaScript
esbuild plugin.

**Why.** The requested UI migration uses Solid while preserving the simulation
and canvas as independent owners of game behavior and drawing.

**Consequence.** UI components own presentation state and the `App` lifecycle
boundary; the runtime owns canvas/input resources, and physics remains usable
without Solid. Pause/open and `start_level` own synchronous input resets at their
transitions; dialog-close delivery must not clear fresh movement asynchronously.
The narrow compiler configuration permits JSX compilation without changing the
simulation boundary.

**Owner.** [src/runtime.ts](../src/runtime.ts), [src/app.tsx](../src/app.tsx),
[src/ui_state.ts](../src/ui_state.ts), and build configuration, as scoped in
[archive/bad_cell_day_plan.md](archive/bad_cell_day_plan.md).

### Original character art and tissue theme

**Decision.** Isp and Pac use original, visually distinct shapes in editable
canonical SVG files. Barnsyverse informs the character art. Gameplay comes first;
the tissue environment uses red/pink anatomical tumor and cancer imagery with a
touch of body horror, and gorier Barnsyverse inspiration is welcome. Begin each
editable SVG with its namesake molecular shape as the whole body and limbs, then
add color, face, and cartoon features. Isp is tall and skinny; Pac is fat and wide.
The molecular form is a visual abstraction, not a literal chemical diagram.

**Why.** Distinct character silhouettes support recognition during play, while
the tissue theme makes the game's setting legible without interrupting play. The
molecular form makes each character's namesake shape the basis of its silhouette;
color and facial features then keep the characters readable and expressive.

**Consequence.** Keep the art direction in the two canonical character assets and
the game's environment presentation; preserve readability at gameplay size. Preserve
the molecule-first SVG construction and distinguish the two requested proportions.

**Owner.** [src/assets/isp.svg](../src/assets/isp.svg),
[src/assets/pac.svg](../src/assets/pac.svg), the molecule-first art specification,
and campaign environment rendering. Public structure references are
[Ispinesib, CID 6851740](https://pubchem.ncbi.nlm.nih.gov/compound/6851740) and
[Paclitaxel, CID 36314](https://pubchem.ncbi.nlm.nih.gov/compound/36314).

### Platform power and motor precedence

**Decision.** A platform's baseline power is `!requiresPower && cycleOpen`; when no
cycle is authored, `cycleOpen` is true. An active power pad supplies power over
either baseline denial or a closed cycle window. Motor Stop remains a separate
state, so a powered but stopped platform stays stopped.

**Why.** Required-power startup, timed outages, and rescue pads need one predictable
power rule. Keeping motor state independent prevents a power restoration from
silently undoing a partner's stop action.

**Consequence.** Simulation derives displayed power and carrier motion from authored
platforms, cycle time, and active pads. Power outages freeze carrier motion while
the carrier remains solid; latched rescue power lasts for the attempt.

**Owner.** [src/mechanisms.ts](../src/mechanisms.ts),
[src/types/level.ts](../src/types/level.ts), and
[src/types/simulation.ts](../src/types/simulation.ts).

### Recurring Gem and Cana scene presentation

**Decision.** Render Gem and Cana in every campaign level from explicit scene data
bound to real mechanism IDs. Derive target cues and reactions from current simulation
state. Gem is purple, bearded, and associated with DNA obstacles; Cana is green,
clean-shaven, and associated with glucose-powered machinery. Their editable canonical
SVGs begin with their namesake molecular structures. Keep the core molecular ring
polygons visible in the character silhouettes. The later character-prominence decision
sets the rendered art scale while retaining the 30x36 collision bodies.

**Why.** Explicit bindings make the villains visibly responsible for actual puzzles,
while renderer-derived state prevents the art from describing a different puzzle
than the mechanics. Molecule-first silhouettes retain molecular identity at game
scale; fixed collision bodies preserve established routes.

**Consequence.** Keep scene definitions and simulation as the source for target
presentation. Do not add enemy AI or a second event-driven puzzle state. Keep short
opening and ending lines, reaction portraits, and escape UI readable without blocking
movement or hiding small-screen content.

**Owner.** [src/villain_scenes_tutorial.ts](../src/villain_scenes_tutorial.ts),
[src/villain_scenes_middle.ts](../src/villain_scenes_middle.ts),
[src/villain_scenes_final.ts](../src/villain_scenes_final.ts),
[src/render_villains.ts](../src/render_villains.ts),
[src/assets/gem.svg](../src/assets/gem.svg), and
[src/assets/cana.svg](../src/assets/cana.svg).

### Character prominence and depth

**Decision.** Render Isp and Pac at 1.6 times their former reference art height,
from about 55 to 88 world units; render villains at 1.6 times their former scale.
Preserve the complete game world and the 30x36 physics bodies. Use a compact
active-play desktop shell to recover height previously spent on cards. Pac's wide SVG has a
shorter visible height than the reference. In rendering, own
`VILLAIN_ART_SCALE` and `draw_player_overlay`; depth-sort lower characters first,
then draw the final contact cue at physics feet with labels. Adjust speech bubbles
and their connections to the new art positions.

**Why.** Larger characters need to read clearly while preserving the established
world, routes, and collision behavior. The compact shell gives active play more
vertical room, and feet-based ordering keeps overlap and contact cues legible.

**Consequence.** Keep character prominence in renderer-owned scale and overlay
logic, with labels and contact cues aligned to physics feet. The 1002-pixel canvas
target was confirmed at 1280x800. Horizontal art centering clamps at world edges
while physical feet and their cues remain fixed. Speech bubbles use bounded
positions to avoid both characters and earlier bubbles; omit a bubble when no
candidate fits. Keep the whole world readable across the reviewed viewports.

**Owner.** [src/render_villains.ts](../src/render_villains.ts),
[src/runtime.ts](../src/runtime.ts), and the active character prominence ledger
in
[docs/active_plans/reports/CHARACTER_PROMINENCE_LEDGER.md](active_plans/reports/CHARACTER_PROMINENCE_LEDGER.md).

### Partial-progress villain reactions

**Decision.** Show a partial-progress reaction only when the player has made
nonempty progress and every required target is in its completed state. A zero
target count does not qualify.

**Why.** Reactions must describe the actual puzzle state and avoid claiming
progress before the player has acted.

**Consequence.** Keep reaction eligibility derived from the authoritative
simulation targets, and recheck it whenever target state or reaction copy changes.

**Owner.** [src/render_villains.ts](../src/render_villains.ts) and its accepted
presentation/catalog review.

### Level 10 dialogue spacing

**Decision.** Position Cana's level 10 opening bubble at x=220 world units so it
does not obscure Gem's opening line at the reviewed 1280x800 view.

**Why.** The prior x=540 position overlapped Gem's bubble and hid much of its text.

**Consequence.** Keep both opening lines readable together at the reviewed
1280x800 view; the final rendered spot check confirms the corrected spacing.

**Owner.** Level 10 villain scene presentation and final rendered visual review.

### Campaign difficulty progression

**Decision.** The historical 20-room baseline orders rooms as `02,01,04,03 / 06,08,05,07 / 11,09,10,12 / 13,14,15,16 / 18,17,19 / 20`, keeping the six authored chapter bands and their simpler openings. Later stable-ID insertions supersede this exact count/order while retaining the original 20 rooms in relative order. Keep room IDs attached to authored geometry and saved achievements. Save format v1 remains unchanged; the first room, a room's own completed ID, or the completed preceding room unlocks a position. Assess puzzle reasoning, cooperation, movement/timing, failure cost, and discoverability separately, and distinguish mandatory routes from optional collectibles.

**Why.** The human reported that the former level 2 was easier because it was walking while the former level 1 introduced jumps. The bounded order teaches the safe walking handoff first and preserves the liked lift/jump challenge. Other adjacent comparisons remain hypotheses until observed.

**Consequence.** Curriculum order and onboarding copy follow campaign position while stable IDs preserve room identity and old completions. Use observed human attempts, separately for first-time and experienced players and for one-person/two-character and two-person play. Record first-attempt and total clear time, deaths, manual restarts, help, and stuck points without combining them into a score or gate. Browser/scripted completion is feasibility evidence, not comparative human difficulty evidence.

**Owner.** [src/levels.ts](../src/levels.ts), [src/save_load.ts](../src/save_load.ts), and [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md); the source inventory remains in [difficulty_audit.md](active_plans/audits/difficulty_audit.md).

### Keep current57 expert assessment distinct from human play

**Decision.** Treat the current57 map as expert design evidence tied to its frozen 57-room source
and build. Use its paired records to describe required jobs, teaching sequence, mutual dependence,
clarity, recovery, and pacing. Keep optional refinements separate from mandatory routes. Do not infer
human discovery, enjoyment, keyboard comfort, or measured difficulty, and do not reorder rooms from
numeric rank alone.

**Why.** The captures are idle screenshots and the ratings are rubric-based expert judgments. They
can identify concrete design questions and useful contrasts, but they do not observe players.

**Consequence.** Preserve the accepted current53 run as historical evidence and bind every current57
claim to its own paired records. Review the current57 synthesis before using it to choose a concrete
gameplay investigation; human claims require observed play. See the `README.md`
and [assessment plan](active_plans/active/CURRENT57_ASSESSMENT.md).

The regenerated current57 findings identify position 46's retained loading-sac-loss state as a bounded
recovery question: test whether ordinary inputs can regain the sac or reach the exits from that
actual failure state. The fresh-spawn no-cargo route remains a proven optional alternate, not a defect
or a required solution. Consider geometry changes only if the retained state has no workable recovery.
This is a gameplay feasibility question, not a human discovery or enjoyment claim. Root accepted the
expert assessment as `DONE_WITH_CONCERNS` at 2026-10-18 21:42:04 UTC; this hypothesis remains a
bounded next gameplay task, not a finding that a geometry change is needed. See the
[acceptance report](active_plans/reports/difficulty_57_acceptance.md).

### Optional Gem/Cana interference trial

**Decision.** Keep `TRIAL_LEVEL` outside campaign `LEVELS`, and expose it through
the existing `start_level` path with a singleton allowlist. Preserve the 20-room
campaign order and save behavior. Gem's bubble floats Isp toward a latch and briefly
locks Pac; Cana's slow boomerang gives Isp spin feedback with reliable directional
control and gives Pac a bounded, collision-respecting shove. Pause freezes the
attempt; retry recreates it. Keep all four effects easy to test; Isp's float helps
reach the required route, while Pac's lock, Isp's spin, and Pac's shove are optional.
The authored geometry and starting points are specified in
[villain_interference.md](archive/villain_interference.md).

**Why.** The isolated optional room allows controlled playtesting of villain
interference without changing campaign progression or saved achievements. The safe
floor, short effects, and immunity after a hit support recovery and predictable play.

**Consequence.** Keep trial state separate from campaign achievements. Exact geometry
values are implementation tunables that must be validated against this route in the
browser. Do not add autonomous villain AI, attack buttons, reversed controls, or
chained stun. Treat the human's tentative ideas as exploration, not a fixed mandate.

**Owner.** [src/types/interference.ts](../src/types/interference.ts),
[src/interference.ts](../src/interference.ts),
[src/interference_trial.ts](../src/interference_trial.ts), and
[src/runtime.ts](../src/runtime.ts), with the scene contract in
[villain_interference.md](archive/villain_interference.md).

### Pad-controlled campaign interference

**Decision.** Use optional `enabledByPadId` and `disabledByPadIds` on authored
interference attacks. Any active disabling pad suppresses an attack, including when
its enabling pad is active; boss defeat also suppresses it. Suppression cancels windup
and projectiles and resets the full cooldown. Existing player effects finish naturally.

**Why.** One simulation-owned rule supports a partner-controlled float and both held
and latched safety without a separate encounter state machine.

**Consequence.** Re-enabling requires a fresh cooldown and warning. Rendering derives
warnings, suppression status, and reactions from simulation. Retry recreates the attempt;
authored references are validated. Keep stable IDs, campaign order, and save format.

**Owner.** [src/interference.ts](../src/interference.ts),
[src/types/interference.ts](../src/types/interference.ts), and
[src/levels.ts](../src/levels.ts).

### Teach float before hazardous transfer

**Decision.** Introduce the Pac-controlled Gem float in stable `level_13` over a
continuous floor, apply it to the stopped lift in `level_17`, and use temporary STEADY
and lasting RESCUE suppression against Cana in `level_19`. Retain Cana's existing gaps.

**Why.** The first room isolates cooperation and steering; the later rooms combine
those skills with carrier timing and deliberate dodge risk. Removing every failure
would remove decisions as well as punishment.

**Consequence.** Judge warning clarity, understandable causes, available responses, and
failure cost through observation. The rejected automatic catch ledge remains a design
experiment, not a repaired product defect. Add a return-direction cue only if observed
player confusion supports it. Book analysis informs hypotheses, not proof of enjoyment.

**Owner.** [src/levels_final.ts](../src/levels_final.ts),
[LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md), and
[game_design_reading.md](active_plans/reports/game_design_reading.md).

### Causal finale handoff and paired shutdown charge

**Decision.** Make Isp's upper TARGET sustain the finale route after Pac supplies
STEADY, so Pac can leave support and join Isp. The finale requires continuous
occupancy of both owned targets for its authored charge duration. Losing either
owner resets incomplete charge; completed defeat persists. Bosses without an
authored charge duration retain their immediate paired-target behavior.

**Why.** Both partners should change the other's possibilities before the final
shutdown. A visible shared charge gives their arrival a consequence beyond another
permanent RESCUE latch.

**Consequence.** Simulation owns charge and defeat; artwork and feedback read that
state. Pause advances neither; retry starts a fresh attempt. Final-build route, recovery, integrated
art, specification, quality, and integration reviews accept this milestone; novice discovery
and human enjoyment remain unmeasured.

**Owner.** [src/levels_final.ts](../src/levels_final.ts),
[src/mechanisms.ts](../src/mechanisms.ts), and
[src/render_boss_charge.ts](../src/render_boss_charge.ts).

### Insert distinct cooperative rooms using stable IDs

**Decision.** Add campaign rooms with new stable IDs through the existing `LevelDefinition` and
campaign/save contracts. The current approved addition is `level_33` **No Takebacks** at brain
position 31, after `level_29` and before `level_19`; `level_20` remains the tumor finale at position 33. Preserve all prior room definitions, scenes, stable IDs, and relative order. Keep save schema v1
and its existing predecessor-based unlock behavior.

**Why.** Additional upper/lower and inward/return routes can develop reciprocal
cooperation while preserving existing useful rooms. Stable IDs preserve earned
achievements as campaign positions change.

**Consequence.** The roster is now planned at 33 rooms: new `level_33` occupies position 31,
`level_19` moves to position 32, and `level_20` remains last. Stable-ID insertion preserves earned
progress and the established unlock rule. For No Takebacks, reuse existing controls and mechanics.
R1 clears ordinary, fall/re-entry, and quick retry but fails a delayed blocked-cargo retry. Root
approved one static return-stop at x180/y367 (12x34); R2 authored-source replay clears all four
routes. R2 integrated/route/save checks pass; its observer concern is logged. SPEC, QUALITY, and integration accept with concerns. Root accepts DONE_WITH_CONCERNS. Add no engine/type/state/options or permanent
tuning/label tests. Browser readability, fairness, discovery, and enjoyment remain unproven. The
[No Takebacks ledger](active_plans/active/next_coop_expansion.md) owns implementation and acceptance
evidence; the [living decisions ledger](active_plans/reports/living_decisions_acceptance.md) retains
its prior trial history.

**Owner.** [src/levels.ts](../src/levels.ts),
[src/level_split_relay.ts](../src/level_split_relay.ts),
[src/level_crossed_paths.ts](../src/level_crossed_paths.ts),
[src/level_knock_it_off.ts](../src/level_knock_it_off.ts), and
[src/save_load.ts](../src/save_load.ts).

### Add Bursting Point as one isolated liver room

**Decision.** Add stable `level_40`, **Bursting Point**, after `level_13` and before `level_24` at
new display position 19. Preserve the 39 existing enriched definitions, scenes, and relative order;
keep `level_20` last. Own level and scene data in `src/level_bursting_point.ts` and registration/order
in `src/levels.ts` only.

**Why.** The accepted private experiment supports Pac's roof load opening Isp's upward FLOAT route,
including one scripted recovery after a premature FLOAT. Root selected this as a short variation
after the first useful FLOAT, with separate exits and the existing Gem recurrence.

**Consequence.** The bounded production milestone is accepted `DONE_WITH_CONCERNS`: native routes,
built-browser clear and recovery, progression/save/replay, production SPEC, six fresh QUALITY passes,
integration, and root visual review pass. The [BURSTING_POINT_ROOM.md](active_plans/active/BURSTING_POINT_ROOM.md)
records the plan, evidence, and disposition.
Do not transfer private timings. Keep `level_39` and `level_40` difficulty-unassessed; the frozen
current38 assessment does not score the live 40-room order. The accepted 39-room full journey is
historical evidence, not a full 40-room journey. Human readability, discovery, comfort, and enjoyment
remain unmeasured. No shared engine, type, physics, renderer, save, option, or permanent tuning-test
change is included.

**Owner.** [BURSTING_POINT_ROOM.md](active_plans/active/BURSTING_POINT_ROOM.md),
[src/levels.ts](../src/levels.ts), and `src/level_bursting_point.ts`.

### Paired counterweight elevators

**Decision.** Stable `level_23` uses one linked pair of solid decks. A supported hero must ride each
deck before either direction can move. With both passengers aboard, greater total load descends;
equal load holds. This same passenger clutch governs both directions. At the new solver's
initial-overlap boundary, classify overlap within an operation/edge-scaled ULP bound as numerical
contact; meaningful penetration still blocks. Leave ordinary collision and support predicates
unchanged.

**Why.** Reciprocal crate delivery makes both players' cargo choices affect the partner's route.
The shared passenger requirement prevents one rider from preparing or moving a lift while the
other is stranded. ULP-scaled contact accounts for arithmetic roundoff without adding a fixed
pixel allowance or hiding meaningful overlap.

**Consequence.** Place `level_23` after `level_10` and before `level_12`, where lane, weight, and
together-boarding lessons precede the cargo synthesis. Stable IDs preserve saved achievements;
the existing unlock rule governs the new frontier. The source order now has 23 rooms, with the
finale at position 23. Keep novice discovery, human enjoyment, two-person coordination, and final
artifact acceptance distinct from source validation and candidate route evidence.

**Owner.** [src/counterweights.ts](../src/counterweights.ts),
[src/level_counterweight.ts](../src/level_counterweight.ts),
[src/levels.ts](../src/levels.ts), and [counterweight_direction.md](active_plans/reports/counterweight_direction.md).

### Runtime-owned hero response

**Decision.** Keep transient hold and latch feedback in runtime-owned presentation history outside
simulation/save state. Credit only the actual eligible owner, consume every observed latch
transition once, and clear reactions during interference, death, or completion. Fresh attempts
reset history; pause freezes its age. Render sole-anchored canonical hero responses and a paired
completion heading with immediate existing actions.

**Why.** The hero doing useful support should visibly respond without granting solo credit for
shared/crate actions or changing puzzle rules. Both heroes own the victory.

**Consequence.** Observers cannot mutate simulation/input. Abandoned or suppressed transitions
never produce a late acknowledgment. Reduced motion uses static poses. Targeted browser evidence
covers sampled poses and lifecycle; exhaustive visual edge cases and human interpretation remain
separate from that acceptance.

**Owner.** [src/hero_feedback.ts](../src/hero_feedback.ts),
[src/runtime.ts](../src/runtime.ts), [src/types/presentation.ts](../src/types/presentation.ts),
[src/render_characters.ts](../src/render_characters.ts), and [src/app.tsx](../src/app.tsx).

### Explain lift boarding through authored cues

**Decision.** Author an optional boarding side on a moving lift. For the opening glucose lift,
show the left-side jump approach and STEP LEFT only when actual descending underside contact
requires recovery. Draw guidance beneath heroes/badges, with its panel above the occupied badge
band. Preserve lift physics, geometry, speed and cycle timing.

**Why.** Ordinary-input investigation showed missed boarding and waiting underneath rather than
a demonstrated need to shorten the liked jump challenge.

**Consequence.** Production collision predicates govern the recovery cue. Browser acceptance
checks RESTORE, launch, stall and side recovery in both motion modes; it establishes operability,
while novice comprehension remains unmeasured.

**Owner.** [src/render_boarding_cues.ts](../src/render_boarding_cues.ts),
[src/types/level.ts](../src/types/level.ts), and
[src/levels_tutorial.ts](../src/levels_tutorial.ts).

### Keep tumor district scenery static and behind play

**Decision.** Select one of six original, static transparent district SVGs from the current stage.
Draw it between the existing background wash and title, while preserving all gameplay and
foreground layers and the existing stage accent values. Cache image loads lazily; pending images
show only the wash and title, and failed required assets remain visible as acceptance failures.

**Why.** Distinct peripheral anatomy helps each district read as part of a living tumor while the
open center protects platform edges, hazards, characters, interaction cues, and the HUD. Static
scenery also keeps reduced-motion output and same-state presentation predictable.

**Consequence.** Keep environment selection and drawing in the environment renderer and asset
packaging contract. Do not change simulation state, geometry, controls, or encounter organs to
compensate for scenery. Browser evidence establishes scripted visibility and operability; human
discovery, enjoyment, novice difficulty, comfort, and two-person play remain unmeasured.

**Owner.** [src/render_environment.ts](../src/render_environment.ts),
[build_github_pages.sh](../build_github_pages.sh), and
[environment_direction.md](active_plans/reports/environment_direction.md).

### Recurring villains from the opening

**Decision.** Gem and Cana act in the first eight campaign rooms and recur in selected later
rooms. Their attacks use planted encounter origins and shared muzzle, facing, pose, and range
geometry. Gem has a bounded bubble shot; Cana has a returning boomerang. The four existing hero
effects remain temporary, and DIZZY slows horizontal input to 55 percent without reversing it.
Rooms retain their geometry and use existing pads and rescue switches for suppression. A closed
door closes immediately and an overlapping hero may clear only toward the nearer separating face.
On both flight legs, Cana's boomerang nudges authored light cargo by actual horizontal travel with
existing world, hero, and cargo clipping. Heavy cargo and in-flight bubbles remain unchanged.
Each Gem release retains its pre-move origin/target; an optional platform derives Gem's visual and
future muzzle points without adding impulse or projectile state.

**Why.** Shared attack geometry keeps warning, weapon, projectile, and catch positions aligned.
Authored safe lanes and existing cooperative controls make interference part of each puzzle while
preserving its movement and recovery routes. The boomerang also becomes a reusable cargo tool.

**Consequence.** The opening sequence is `level_02`, `level_01`, `level_04`, `level_03`,
`level_06`, `level_08`, `level_05`, and `level_07`; five existing later attack rooms remain. Source
and browser routes establish behavior; Cana stays authored. Gem's attachment changes only its
derived visual and future launch point, without a collision body or locomotion. Stable `level_32`,
**Bring Your Own Villain**, uses that attachment at position 18 in the liver, after `level_30` and
before `level_14`; the prior 31 room definitions retain their relative order. Human discovery,
enjoyment, and two-player coordination remain unmeasured; current room acceptance is tracked in the
ledger below.

**Owner.** `src/weapon_pose.ts`, `src/interference.ts`, `src/collisions.ts`,
`src/villain_position.ts`; status in
[moving_gem_acceptance.md](active_plans/reports/moving_gem_acceptance.md).

### Give each campaign chapter an original anatomical identity

**Decision.** Keep six canonical presentation stages-lungs, intestine, marrow, liver, brain, and
tumor-with one readonly palette and heading owner. Render connected organ masses with native Canvas
paths in `src/render_tissue.ts`, adapting to shallow shelves and tall walls inside fixed collision
rectangles. Keep the landing tread continuous at the exact collision top, and preserve state cues
and caller readouts. Use existing palettes; add no per-level configuration or assets.

**Why.** Organ silhouettes and palettes make the campaign feel like one living body. Static,
peripheral backdrops protect the routes and collision edges; state-linked foreground tissue adds
personality while keeping cooperation and puzzle cues first. Broad Barnsyverse inspiration informs
bold playful forms, while all game art remains original.

**Consequence.** `ORGAN_THEMES` in `src/anatomy.ts` owns the six names, headings, asset paths, and
palettes; `draw_tissue_surface` owns clipped organic surface rendering. Stable room IDs/order,
geometry, controls, timing, pad effects, attacks, and saves remain separate. The frozen current29
assessment remains bound to its pre-art source/build. Root accepts this later renderer/input delivery
for local gameplay WITH CONCERNS on its pinned final identity; the mandatory host gate and all-gates/
release acceptance remain open. See the
[organic tissue acceptance ledger](active_plans/reports/organic_tissue_acceptance.md). Root accepts
the frozen assessment content; its separate host gate and promotion remain pending.

**Owner.** [src/anatomy.ts](../src/anatomy.ts), [src/types/anatomy.ts](../src/types/anatomy.ts),
[src/render_tissue.ts](../src/render_tissue.ts), and
[anatomical_world_acceptance.md](active_plans/reports/anatomical_world_acceptance.md).

### Separate expert difficulty estimates from human play evidence

**Decision.** Assess the 23 campaign rooms with paired first-encounter and source-informed expert
records. Keep actual player attempts as a separate observation stream. Rate puzzle reasoning and
cooperation separately from platforming execution, timing, and hazards; retain clarity, recovery,
and control friction as independent burdens. Represent insufficient evidence as `null`.

**Why.** Source knowledge and hindsight can change what an assessor notices. Locking a restricted
first pass before source review makes that difference inspectable, while actual novice outcomes
still require novice players. A single blended score would hide distinct causes such as an
interesting puzzle, confusing cues, or awkward controls.

**Consequence.** The rubric owns scoring and evidence rules, the typed contract owns record shape,
and the active plan owns execution status. The generated report carries the 23 source-informed
estimates; the findings explain cross-room judgments. Source-derived `expected_feedback` remains
separate from witnessed `observed_feedback`, which is `null` for unwitnessed route steps. A
scripted end state establishes feasibility, not each intermediate effect or human comprehension.
Fingerprint and numeric checks apply only to the developer assessment workflow, not game CI or
campaign ordering. A proposed order change requires a fresh novelty assessment. Do not claim
measured player outcomes without actual observations.

**Owner.** [DIFFICULTY_RUBRIC.md](DIFFICULTY_RUBRIC.md),
[devel/difficulty/types.ts](../devel/difficulty/types.ts), and
[active assessment plan](active_plans/active/difficulty_assessment.md); outputs are
[LEVEL_DIFFICULTY_REPORT.md](LEVEL_DIFFICULTY_REPORT.md) and
[DIFFICULTY_FINDINGS.md](DIFFICULTY_FINDINGS.md).

### Preserve emergent routes in Return to Sender

**Decision.** Allow clever alternate cooperative routes in stable `level_25`, Return to Sender.
A partner boost that bypasses RECEIVE is acceptable when the same sac still circulates and both
heroes contribute. Keep villain interference open to exploitation; do not add geometry or rules
solely to enforce the authored step order.

**Why.** The manager prioritizes fun, unpredictable play and meaningful cooperation. A scripted
route is a useful hypothesis, while emergent teamwork can make the room feel playful and personal.

**Consequence.** Judge routes by the shared-object circulation and both heroes' contributions, not
by exact step order. Keep the existing 24 room definitions and their relative order. Source and
integration status remain in the live [acceptance report](active_plans/reports/return_to_sender_acceptance.md).

**Owner.** `src/level_return_to_sender.ts`, `src/levels.ts`, and
[return_to_sender_acceptance.md](active_plans/reports/return_to_sender_acceptance.md).

### Improve level 01 boarding and pacing

**Decision.** Redesign the existing `level_01` boarding and pacing without adding a room or changing
campaign order. Keep its glucose RESTORE pad attached as an `any` latch with `minWeight: 2`, retain
its current effects, and use an 8-second lift period. Preserve all 26 stable room IDs and shared
engine, audio, runtime, and save behavior. Use the local RESTORE rectangle selected by O2:
`{x: 20, y: -8, width: 160, height: 8}`.

**Why.** The opening needs a cooperative boarding decision without a long scripted wait. A faster
lift cycle alone can leave before distant Isp boards. The joint pad and ordinary side reboarding
keep both heroes involved and preserve recovery after a fall.

**Consequence.** Keep changes authored in level 01 data and its dialogue. The full-width RESTORE
pad causes early edge contact while Isp ascends. The selected inset first contacts Isp during
descent using normal pad semantics. Once RESTORE latches, the lift keeps running; preserve side
reboarding after a fall instead of requiring another activation. Do not add timing-only gates or
mechanisms. Exact probe timing and recovery details belong in the
[acceptance ledger](active_plans/reports/next_gameplay_acceptance.md). Scripted routes establish
operability, not human-play evidence or final milestone acceptance.

**Owner.** `src/levels_tutorial.ts`, `src/villain_scenes_tutorial.ts`, and the
[next gameplay acceptance ledger](active_plans/reports/next_gameplay_acceptance.md).

### Show Cargo Exchange delivery progress

**Decision.** Add a bounded central delivery panel derived from the existing `cargo_parked` pad's
`weight`, `minWeight`, `latched`, and `active` values. Show `0/2`, `1/2`, then delivered/released;
keep the panel separate from HUD sparks and visible when Pac obscures the floor label.

**Why.** One AI first-use probe mistook Pac's arrival and a spark increment for delivery. Native
engine evidence proves the baseline route clears and recovers from a bad unload, so this feedback
change addresses the observed ambiguity while preserving the working geometry and physics. This
probe does not establish a human usability problem.

**Consequence.** Keep existing clutch, rider, load, and stop readouts. Change presentation only; add
no gameplay data, order, geometry, physics, state, types, options, or helper framework. Implementation
uses the existing canonical header and villain-speech avoidance bounds, with no caller or type change.
Keep shared nutrient-sac grips neutral and bilateral. In Cargo Exchange, derive grounded side reach
from the shared `PUSH_CONTACT_REACH`, and draw its interaction overlay after player overlays and
before interference effects. Keep PUSH SIDES and gate-state tags tied to existing live state.
The [Cargo Exchange acceptance ledger](active_plans/reports/cargo_exchange_acceptance.md) owns live
validation status.

**Owner.** [Cargo Exchange acceptance ledger](active_plans/reports/cargo_exchange_acceptance.md).

### Add Changing Places with a bounded recovery revision

**Decision.** Add stable `level_29`, **Changing Places**, after `level_27` and before `level_19`,
keeping the existing 28 IDs in relative order and `level_20` last. Preserve the one-sac role swap,
repair the reviewed left-wall recovery geometry, and retain Cana's original `(630,515)` actor and
existing boomerang for browser review.

**Why.** The room gives both heroes consequential counterweight and cargo roles. Independent source
review found one plausible alternate-order sac softlock and a pause-versus-dodge choice with the
original Cana setup. The narrowly scoped geometry revision addresses the demonstrated softlock
without raising Cana or forcing attack hits.

**Consequence.** Keep the change in level data; add no shared mechanic, state, type, or attack quota.
Production routes, build, browser, full campaign, old-save compatibility, Trial isolation, SPEC,
QUALITY, integration, and root acceptance are complete as DONE_WITH_CONCERNS. No difficulty score is
selected; preserve the frozen `current_28` record. The
[Changing Places ledger](active_plans/reports/changing_places_acceptance.md) owns evidence and
nonblocking concerns.

**Owner.** The [Changing Places acceptance ledger](active_plans/reports/changing_places_acceptance.md)
owns delivery evidence and limits; `src/level_changing_places.ts` and `src/levels.ts` own production
data.

### Gut Instinct adds a two-route handoff

**Decision.** Add stable `level_34`, **Gut Instinct**, after `level_08` and before `level_05`. Keep
the original 33 room definitions and their relative order, with `level_20` last. Use one movable
ordinary sac for Upper or Lower Flow; Isp owns the upper route and Pac the lower route, while either
hero may operate the sac and either owner latch may be first. Each latch secures its own route and
opens the partner's exit. Gem's recurring upper-route bubble uses the existing one-time interruption
and resume behavior.

**Why.** Native ordinary-input traces show both first-latch orders, both cargo operators, and the
occupied-gate retreat, reopen, and full-clear route. Low 20px bay stops prevent the reproduced wall
cargo trap, while exposed stairs remove the reproduced ceiling obstruction. These traces support
simulation feasibility, not human comfort, enjoyment, or novice suitability.

**Consequence.** Keep the room within existing level-data, physics, save, and campaign contracts;
add no engine, type, state, control, or configuration behavior. The frozen `current_32` assessment
stays unchanged and does not score this room. Fresh SPEC, QUALITY, and integration reviews accept;
root accepts the milestone as DONE_WITH_CONCERNS. Human fun, novice suitability, and two-person
comfort remain unmeasured.

**Owner.** [src/level_two_lane_fork.ts](../src/level_two_lane_fork.ts),
[src/levels.ts](../src/levels.ts), the [Gut Instinct plan](active_plans/active/two_lane_fork.md),
and the [Gut Instinct acceptance report](active_plans/reports/two_lane_fork_acceptance.md).

### Pick On Someone Else routes cargo through Cana's target

**Decision.** Place stable `level_35`, **Pick On Someone Else**, at brain position 30 after
`level_27` and before `level_31`. Cana's committed nearest-hero target determines the cargo route;
the partner selects the corresponding receiver, steps away after the sac passes to catch its return,
then crosses to KEEP. Push the parked sac toward the middle and trade jobs. Require the cargo receiver
and owner latch for the corresponding exit. Keep the 150px sac clear of the closed return gate.

**Why.** Native evidence supports the two target directions, recovery, and a full reciprocal clear
with actual hits and bounded shortcut checks. The authored solution uses existing geometry and
rendering contracts; it adds no engine behavior.

**Consequence.** Keep the behavior in `level_35` and existing geometry/rendering contracts. The
shared plaque layout keeps the default row where it fits and uses secondary rows 17px apart with a
short connector on collision. The 35-room campaign preserves prior rooms' relative order and
`level_20` as finale at position 35. The frozen 32-room expert assessment remains unchanged and does
not score this room. Root accepts the milestone DONE_WITH_CONCERNS; one capture has an actor partly
covering Pac's OPEN LEFT label while on the pad, which root accepts as nonblocking. Human discovery
and enjoyment remain unknown. See the acceptance ledger for evidence and limits.

**Owner.** [src/level_cana_switchboard.ts](../src/level_cana_switchboard.ts),
[src/levels.ts](../src/levels.ts), the [Cana Switchboard plan](active_plans/active/cana_switchboard.md),
and its [acceptance report](active_plans/reports/cana_switchboard_acceptance.md).

### Double Trouble uses a brake-board-release handoff

**Decision.** In `level_07`, Pac uses STEADY to brake the far ferry while Isp boards; releasing
STEADY carries Isp toward RESCUE. Keep the first ferry, shared engine, Cana's recurring attack, and
the accepted `level_29` room unchanged.

**Why.** Native input evidence shows that release changes the ferry route and that early release,
delayed release, missed boarding, and island retreat can recover. The source-blind first-use run did
not reach either far half, so it does not establish comprehension or enjoyment.

**Consequence.** Keep the change in the existing `level_07` room and villain-scene data. No shared
physics, state, or campaign ordering change is needed. The acceptance ledger tracks validation.

**Owner.** `src/levels_middle.ts` and `src/villain_scenes_middle.ts` own the room data. The
[campaign momentum ledger](active_plans/reports/campaign_momentum_acceptance.md) owns acceptance.

### Keep A Little Push within existing mechanics

**Decision.** Place stable `level_36`, **A Little Push**, in marrow after `level_21` and before
`level_13`, preserving all 35 earlier room definitions and their relative order and keeping `level_20`
last. Use distinct sealed upper Isp and lower Pac routes: Isp supports Pac's landing, Cana's actual
right-going SHOVE extends Pac's ordinary jump, and OPEN ISP frees Isp after the far landing latches.
A lower return fold supports a missed-jump retry.

**Why.** This gives the heroes distinct route duties and makes Cana's existing attack a timed
opportunity, extending cooperative route play with current mechanics.

**Consequence.** Add no mechanic, state, type, option, asset, or permanent test. The corrected bounded
native sweep covers one no-boost direct approach; native success and retry replay do not establish
human enjoyment, comprehension, current-map difficulty, or exhaustive routes. The far landing has
about 12-16 px overlap, a tight timing and landing margin. Root accepts the bounded milestone as
DONE_WITH_CONCERNS after focused source, native, build, smoke, served, browser, progress, and review
gates passed. The full 36-room journey, current-map difficulty, and human enjoyment remain
unmeasured. See the [A Little Push acceptance report](active_plans/reports/helpful_shove_acceptance.md).

**Owner.** The [A Little Push plan](active_plans/active/helpful_shove.md) and its acceptance report.

### Add one reciprocal lung-recoil room within existing physics contracts

**Decision.** Keep the bounded private recoil experiment with `DONE_WITH_CONCERNS` and authorize
production work for **Hold Your Breath** (`level_37`) immediately after `level_03`. The approved
contract uses same-platform standing contact by both heroes, one fixed `-730` vertical launch when
one releases, and a reciprocal owner latch that opens the launched hero's return path. Keep recurring
Cana active and use one static return fold to support missed or short reboard attempts.

**Why.** The private experiment and its SPEC, QUALITY, and integration reviews justified a bounded
production trial. Native production evidence now demonstrates sampled reciprocal completion and
retry while keeping bounded solo/no-joint controls from activating the mechanic; it does not show
human discovery or comfort. The one-way launch transition clears grounded, support, and coyote state
while preserving ordinary input; standing/coyote refresh is limited to non-upward motion to prevent
the reproduced fresh-jump overwrite.

**Consequence.** Add only the approved `recoil` platform kind and its room-local use. Reuse existing
physics and input behavior; add no force setting, persistent state, configuration, or permanent
disable. Native production routes now clear through the reciprocal exit sequence; the fresh-jump
route also clears, while bounded solo and no-joint controls do not. The miss/retry route completes
after Cana's SHOVE during joint contact causes an emergent release. The approved 300x80 tissue art is
integrated at the renderer seam. The source-verified 37-room positions are lungs at 1-5, intestine at
6-10, marrow at 11-17, liver at 18-26, brain at 27-36, and tumor at 37. Source comparison verifies
all earlier 36 room definitions and their relative order; `level_37` is after `level_03` and the
finale remains last. The initial `TS2591` lint failure was fixed by loading installed Node
declarations explicitly; the final canonical code gate passes. The integrated official build and
both standard smokes pass, as do built-source assertions and served asset parity. Focused browser
checks pass the ordinary clear, save/reload replay, all 36 legacy Replay entries, and finale-last
order, with zero deaths or browser errors. The fixed capture path tests normal motion only; the
SHOVE/miss/re-entry sequence is native-only evidence. Fresh production SPEC, QUALITY, and integration
accept with concerns and no blockers or plan drift. Root closed QUALITY's scope question: automatic
pad-plaque placement predates this work and is covered by accepted Cana Switchboard evidence; recoil
adds only its overlay and existing build-list entries. Root accepts this milestone as
DONE_WITH_CONCERNS. The continuous gameplay goal remains active. The frozen current36 assessment is
historical context, and no full-campaign journey or human enjoyment claim is required.

**Owner.** The [Hold Your Breath production plan](active_plans/active/LUNG_RECOIL_ROOM.md) and
[acceptance receipt](active_plans/reports/LUNG_RECOIL_ACCEPTANCE.md).

### Add optional villain pushes in level 3

**Decision.** Preserve the existing level 3 bridge challenge and let ordinary hero movement push
Gem and Cana into the acid when the room opts into pushable villain bodies. Keep the acid absence
temporary, retain Cana's existing weapon roster, and leave the STEADY/RESCUE cooperative clear
available without dunking. The room-specific placement and RESCUE-pad proposal is recorded in the
[level 3 acid-push acceptance report](active_plans/reports/level3_acid_push_acceptance.md).

**Why.** This answers the user's request for a playful way to push villains into the acid while
keeping recurring antagonists and the established cooperative route. The source describes an
unstable bridge, but no authored side-to-side motion; preserving the existing geometry does not
assert that the reported motion is present or prohibit future clarification.

**Consequence.** Adopted campaign data passes public `LEVELS` replay for both four-second returns,
Cana's resumed attack, and the no-dunk cooperative clear; the other 37 definitions and order remain
unchanged. Integrated build, standard smokes, source-current checks, and served identity pass. Seven
final built-browser views pass with zero deaths, retries, and browser errors, including both dunk and
ordinary no-dunk clears; root approved all inspected splash, return, and clear views. Browser timing
quantization exposed an initial no-dunk failure when Pac left STEADY before Isp reached RESCUE. The
successful route adds ordinary partner-aware movement and makes no source change. SPEC accepted
with concerns, and all six QUALITY passes are complete with no source or gameplay blocker; the
permanent lifecycle-test suggestion is deferred as a KISS maintenance tradeoff. Fresh integration
accepts with concerns and no blocker or plan drift; root accepts the milestone as DONE_WITH_CONCERNS.
Human fun, unaided discovery, the reported bridge motion, a full 38-room journey, and current
38-room difficulty remain unproven. No bridge gaps, altered geometry, timing, campaign order, save,
or room-count changes are included.

**Owner.** The [level 3 acid-push plan](active_plans/active/level3_acid_push.md) and
[acceptance report](active_plans/reports/level3_acid_push_acceptance.md).

## Clarify Split Decision with authored copy

**Decision.** Explain the level 11 stair's 5/3 cycle and that a latch powers the stair and opens the
partner's lane using only the existing subtitle and Cana opening. Preserve the route, mechanics,
player-selected sequence, joke, and full Hint.

**Why.** The accepted cue investigation found that the original opening named durations without
explaining the pause or the reciprocal latch effects. The source behavior already works.

**Consequence.** This is a local authored-text change only. It does not establish improved human
readability or justify changing the frozen current41 assessment. See the
[Split Decision cues plan](active_plans/active/SPLIT_DECISION_CUES.md).

---

### Extend Level 4 ferry to meet the right shore

**Decision.** In stable `level_03` (display 4, **Stop Right There!**), change only the moving
ferry rectangle width from 280 to 310. Preserve x=310, y=400, height=24, and the existing 100 px
offset and 6 s period.

**Why.** The accepted ordinary-input route showed Pac can walk off the ferry's far side and fall. A
310 px ferry reaches x=720 at maximum travel and meets the right shore, enabling a safe no-jump
transfer and wait while preserving the STOP/RESCUE route and Gem bubble cycle.

**Consequence.** This is a single geometry-field change. Native public-input routes, semantic and
physics preservation, repository checks, official build and browser smokes, fresh reviews, and
three focused built-browser views passed. The ordinary browser clear appended 60 right frames
after the supplied route stopped 1.31 px short; the native route clears as supplied. Human
playability and the user's exact inputs remain unmeasured, and the change does not guarantee all
falls are resolved. See the [ferry footing plan](active_plans/active/LEVEL4_FERRY_FOOTING.md) and
[acceptance receipt](active_plans/reports/LEVEL4_FERRY_DOCKING_ACCEPTANCE.md).

**Acceptance.** Root accepted `DONE_WITH_CONCERNS` at 2026-10-17 12:39:46 UTC. The current41
assessment remains frozen; the continuous gameplay goal remains active.

---

### Preserve physical villain ownership

**Decision.** Gem and Cana have physical bodies in every scene that defines `villainScene`, with no
opt-out. Players can jump over or shove them while authored weapons remain active. The body owns its
position and weapon origin; attack definitions retain their targets, range, and timing. Villains
pass hero-only barriers, and existing solid actor interactions remain in force. Each active villain
weighs one ordinary unit, joins counterweight support and deck travel, and blocks an uncarried deck
sweep. Only heroes satisfy the two-hero clutch; absent villains contribute no weight. A villain
removed by acid returns after four seconds and resumes its authored attack.

**Why.** Actor attacks should originate from the actor's current physical position while their
authored targeting contract remains stable. Reusing the existing collision and weight ownership
preserves established barrier behavior and lets villain bodies interact with moving counterweights
without adding a separate weight system.

**Consequence.** All 43 production room homes use the physical-villain design, including Level 35's
two parcels, Gem at `(850,378)`, Cana at `(550,378)`, and the authored handoff hint. The corrected
Level 10 and 39 homes use existing supports at `(680,310)` and `(650,390)`. Final native routes,
12-second idle evidence, repository checks, eight current-bundle browser cases, SPEC review, and
all six QUALITY passes complete, with initial Style/Legacy/Docs findings accepted by fresh targeted
review. Integration accepts with concerns and no blocker. Root accepts the bounded milestone as
`DONE_WITH_CONCERNS` at 2026-10-17 14:47:25 UTC; the broader continuous gameplay goal remains active.
Current evidence and limits are recorded in the [physical villains acceptance report](active_plans/reports/physical_villains_acceptance.md).

**Owner.** The [physical villains plan](active_plans/active/physical_villains.md),
`src/types/villain.ts`, `src/game_state.ts`, `src/villain_position.ts`, `src/interference.ts`,
`src/counterweights.ts`, and the authored scene definitions.

### Use Gem as live counterweight ballast in Dead Weight

**Decision.** In additive liver room `level_46`, Pac pushes Gem onto counterweight A and boards;
Gem's existing physical mass lowers A and raises Isp on B. Isp uses Gem's existing bubble gun to
catch FLOAT and reach the high fold, while Pac leaves left for the low passage and exit. Keep the
static tissue stop that prevents the tested over-push and place Cana on the existing floor support.

**Why.** This gives Gem's physical weight and weapon origin distinct cooperative jobs in one route.
The moving-emitter relay premise duplicates `level_32` and remains rejected; this decision does not
substitute another moving-Gem relay.

**Consequence.** Root authorized production after the corrected private checkpoint on
2026-10-17 20:28:22 UTC. The first production capture exposed a FLOAT ascent layout failure; root
authorized only a two-rectangle upper-fold/right-wall correction, now final. No new engine,
configuration, or state behavior is part of the design. Aligned native routes and current-source
code/build/smoke/browser gates pass; fresh SPEC and targeted QUALITY accept with concerns. All three
initial audit findings are closed after current-doc inspection. Final integration accepts with
concerns, and root accepted the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-17 20:45:51 UTC.
The broader continuous-development goal remains active. See the
[status record](active_plans/reports/DEAD_WEIGHT_ACCEPTANCE.md) and
[production ledger](active_plans/active/LIVE_BALLAST.md).

### Give Narrow Escape reciprocal counterweight roles

**Decision.** At stable `level_06` / campaign position 7, Isp pushes Gem onto the upper-left deck
and boards; Pac boards the lower-right deck. Gem's physical mass joins both heroes, lowering Isp
and raising Pac. Pac exits upper-right and Isp lower-left. Keep both villains and weapons active,
with a broad safe floor, Gem containment, and folds for ordinary reboarding after a missed high
landing. A rider's absence freezes the counterweights, so recovery requires reboarding the still-
raised right deck. Preserve all other 46 rooms, their order, saves, and control physics.

**Why.** The characters have distinct, consequential jobs, and the changing deck height shows
their shared progress directly. Physical ballast varies the familiar pad-and-gate relay pattern;
the lift's rise, quiet repositioning, and recovery provide a pace change while villain pressure
continues. Existing jump physics remain precise, with airborne pose feedback following that motion.

**Consequence.** The route reuses the existing counterweight engine and types; it adds no engine,
configuration, state, asset, or SVG behavior. A safe floor and folds support recovery after a missed
landing. The [active cooperation ledger](active_plans/active/ACTIVE_COOPERATION.md) records
implementation scope, evidence, and limits.

**Owner.** [levels_middle.ts](../src/levels_middle.ts),
[villain_scenes_middle.ts](../src/villain_scenes_middle.ts), and
[render_characters.ts](../src/render_characters.ts).

### Use recoil tissues for a two-stage intestine handoff

**Decision.** Add **Gut Reaction** as intestine room `level_48` at campaign position 11, between
`level_05` and `level_07`. Pac rides the low moving fold while Isp may take a first recoil launch
for the high Spark; at the second recoil, Isp launches Pac to the high exit and then takes the low
exit. Keep Gem and Cana active.

**Why.** The two recoil surfaces give the heroes separate jobs and a shared handoff, while the
optional high Spark leaves the low moving route available to Pac.

**Consequence.** Reuse existing recoil, movement, and villain behavior. The room adds no pads,
barriers, hazards, crates, engine behavior, or game state. Render the intestinal recoil surface
through its existing frame logic and the intestine-specific branch.

**Owner.** [level_gut_reaction.ts](../src/level_gut_reaction.ts),
[render_recoil.ts](../src/render_recoil.ts), and the room's authored hint.

### Add lower recovery folds to the lung ferry

**Decision.** In stable lung room `level_03`, keep the existing moving ferry and cooperative STOP /
RESCUE jobs, and append static recovery folds at `(300,465,110,20)` and `(610,465,110,20)`. The
room hint explains bubble-assisted STOP release and the recovery route.

**Why.** The lower folds give either hero a footing after a missed ferry transfer while preserving
the ferry crossing and Pac's RESCUE handoff.

**Consequence.** The room reuses existing collision, movement, Gem bubble, and lung tissue behavior.
When the ferry is directly overhead, release STOP or wait for side clearance before jumping back.
Individual falls are not guaranteed catches. Historical difficulty packages remain unchanged.

**Owner.** [levels_tutorial.ts](../src/levels_tutorial.ts), stable room `level_03`.

### Add Backseat Driver as level 50

**Decision.** Add **Backseat Driver** as stable `level_50` at brain position 11 / campaign
position 46, after `level_38` and before `level_29`. Preserve the 49 existing room definitions and
their relative order, with `level_20` remaining the tumor finale at position 50.

**Why.** The accepted tandem-shove fixture supports a Pac launch carrying Isp, a shared ascent,
separate upper and lower landings, and a lower return step for retry. Root accepted production
integration as `DONE_WITH_CONCERNS` at 2026-10-18 04:37:11 UTC after canonical build, browser,
capture, and review gates. Bounded deterministic evidence does not establish a full unseeded
50-room journey, human timing comfort, discovery, or enjoyment.

**Consequence.** Preserve the fixture's geometry, empty object arrays, exits, and recurring Cana
boomerang. Add only the two approved passive Sparks and the approved level and scene copy. Use
existing level and villain scene types and behavior. Keep the frozen 46-room assessment historical;
the seeded late-room replay does not establish an unseeded full campaign journey. See the
[production evaluation](active_plans/active/BACKSEAT_DRIVER.md).

**Owner.** [Backseat Driver level](../src/level_backseat_driver.ts), [campaign registry](../src/levels.ts),
and [production evaluation](active_plans/active/BACKSEAT_DRIVER.md).

### Clarify the Backseat Driver Hint

**Decision.** For the existing `level_50`, use the root-approved Hint that names the starting stack,
right-going shove, split low/high landing timing, and leftward floor route through the small fold to
Cana's shelf. Preserve the room's geometry, attacks, layout, spawns, title, subtitle, Sparks,
controls, and mechanics.

**Why.** Root judged these landmarks worthwhile from the combined observations. The source-blind
walkthrough did not inspect the Hint; a separate old-Hint continuation did not complete; and the
causal comparison recommended KEEP for the original Hint. Native evidence establishes recovery
opportunities only. No human outcome improvement is claimed.

**Consequence.** Root accepted this bounded text-only milestone as `DONE_WITH_CONCERNS` at
2026-10-18 07:10:04 UTC after SPEC, QUALITY, and final integration acceptance. Integration records
only a bounded temporal-attribution caveat for pre-existing reduced-motion helper work; this is not
a functional finding, and no provenance gate was added. The exact-copy capture verifies one sampled
normal-Hint presentation. No fresh 50-room journey was run for this text-only revision. The broader
gameplay goal remains active. See the [Hint clarity plan](active_plans/active/backseat_driver_hint_clarity.md)
and `REPORT.md`.

**Owner.** [Backseat Driver Hint plan](active_plans/active/backseat_driver_hint_clarity.md).

### Add A Bone to Pick as level 51

**Decision.** Promote the accepted marrow rendezvous fixture as **A Bone to Pick** (`level_51`) at
marrow position 6 / campaign position 20, after **Cargo Exchange** (`level_23`) and before
**Marrow Cargo Shuffle** (`level_12`). Keep all prior 50 room definitions and their relative order.

**Why.** The private fixture cleared native full-route and recovery trials and a complete browser
run. The public SPEC review accepted with no findings. The local public-build capture shows the
clean route and missed-boarding recovery; the six focused audits are complete, with documentation
findings reconciled and root's QUALITY disposition accepted. Root's fresh no-seed 51-room journey
completed in one attempt with zero retries/errors, all six save/reload checkpoints, and the visible
51/51 finale. Root accepted final integration with no material finding and the bounded milestone as
`DONE_WITH_CONCERNS` at 2026-10-18 07:55:48 UTC. These scheduled routes do not establish human
discovery, enjoyment, comfort, or difficulty; the broad gameplay goal remains active.

**Consequence.** Copy its geometry, spawns, exits, actors, quips, and attacks unchanged. Change only
the stable ID and title and use the approved clearer Hint. Keep the latest expert assessment frozen
at current46. See the `REPORT.md`
and `REPORT.md`.

**Owner.** [A Bone to Pick level](../src/level_a_bone_to_pick.ts), [campaign registry](../src/levels.ts),
and [marrow rendezvous production ledger](active_plans/active/marrow_rendezvous.md).

### Strengthen Gem's liver lair interaction

**Decision.** In existing stable `level_16` at campaign position 36, move Gem's home to `(810,450)`,
shorten `factory_bridge` from 250 px to 190 px, and use the approved Hint describing Isp's shove
into bile, jump to RESCUE, Pac's follow, Gem's return, and the shared targets. Preserve the 51-room
campaign order and all other level content.

**Why.** The private ordinary-input route demonstrated the existing physical shove, bridge jump,
respawn, returning attack, and boss finish in one encounter. Root reviewed all nine original private
captures and accepted the sampled physical interaction and readability with concerns. The opening
bridge self-collapse may make Gem's scheme backfire comically. No human enjoyment or difficulty
claim follows from these scripted routes and captures.

**Consequence.** This strengthens the existing boss interaction; it does not repair a demonstrated
baseline source bug or replace the accepted ferry puzzle. The 60 px gap and shove are explained in
the Hint, without claiming other routes are impossible. Public SPEC accepts with concerns; the
source gate and official build passed; and the focused public capture completed. Root reviewed all
eight originals and accepts the sampled visuals with concerns. Views 03 and 04 and the final panel
show zero retries and 2/2 Sparks. The standard two-smoke browser process passed. The Hint formatting
correction preserves the exact runtime string; its official rebuild passed with unchanged minified
JavaScript and matching HTTP bytes. Fresh correction review, final integration, root acceptance, and
cleanup remain pending.

**Owner.** [Level 16 definition](../src/levels_final.ts), [Gem scene](../src/villain_scenes_final.ts),
and [Liver Lair foreground ledger](active_plans/active/LIVER_LAIR_FOREGROUND.md).

### Add authored hero stride poses

**Decision.** Approve two authored stride SVG poses per hero. Select them only while a hero runs
alone on the ground, and derive the cycle from world position. Suppress the ordinary idle bob and
squash during stride so stationary or paused position keeps one pose. Preserve the canonical loading
fallback, current cue priorities, reduced-motion behavior, collision brackets, and all 51 room
definitions and their order as they stood in the shared worktree at stride start (including accepted
rooms 47-51 and the level 16 foreground). Add no clock-based animation, animation or simulation
state, shared type contracts, configuration, history, or physics changes.

**Why.** Current art uses the same static SVG while grounded walking. Root selected this proven
global feedback gap over a proposed level 27 replacement because original puzzle preservation and
novelty against **Knock It Off** remain unresolved. This records no human finding about fun.

**Consequence.** Source/build gates and standard browser smokes passed. The 9-view correction capture
exited 0 with no retries or errors and ended on Pac STICKY. The pause trace records 31 stable pose
draws per hero and 20 stopped canonical draws. All six audits are complete, final integration
accepted with concerns and no material defect, and root accepted the bounded implementation and
sampled visuals as `DONE_WITH_CONCERNS` at 2026-10-18 09:00:34 UTC. The broader 51-room campaign
remains active and unchanged by this stride work. No human-fun finding is implied.

### Add Cana-stipation as level 53

**Decision.** Add **Cana-stipation** as intestine room `level_53` at campaign position 10, after
**Gut Instinct** (`level_34`) and before **The Great Cell Shuffle** (`level_05`). Preserve all prior
52 room definitions and their relative order. Keep the approved private-candidate geometry and
attacks; apply the approved stable ID/exports, type imports, both-villain scene registration, and
full Hint.

**Why.** The selected tunnel-jam experiment gives Pac a concrete job clearing Cana from the powered
carrier while Isp restores its power, followed by Pac's lift latch for Isp's final ascent. The frozen
private evidence records the authored `final_lift` ride, a controlled browser route, a safe
fall-and-reboard route, and a legal Gem-FLOAT alternate. Those scripted routes support feasibility;
they do not establish human discovery, enjoyment, or comfort.

**Consequence.** The source registry places the room at position 10 and leaves the earlier 52-room
order intact. The production source/build gate, official build, served identity, public capture, public
SPEC, and six independent audits passed. The fresh 53-room journey passed all rooms in one attempt
each with zero retries, page errors, or failed requests and reload checkpoints at positions 10, 20, 30,
40, 50, and 53. Root accepted QUALITY after all six fresh audits and final-lift condition closure;
final integration accepted with concerns, and its sole stale-status finding is resolved. Root accepted
the bounded milestone as `DONE_WITH_CONCERNS` at 2026-10-18 11:33:03 UTC. Keep the latest expert
assessment frozen at current46; assign no difficulty scores to this room or the current53 roster.

**Owner.** [Cana-stipation level](../src/level_cana_stipation.ts), [campaign registry](../src/levels.ts),
and [Cana tunnel production ledger](active_plans/active/cana_tunnel.md).

### Name Cargo Exchange decks and report weight effects

**Decision.** Always label the two counterweight faces `DECK A` and `DECK B`. Use `WEIGHT PULL` for
the fallback status and `WEIGHT` for a nonmoving directional load detail. Preserve `TRAVEL` when a
deck moves and keep the current solid and dashed arrows.

**Why.** One Cargo Exchange observation interpreted the face copy "A PULL" as the A-key control,
although A moves Isp while Pac responds to arrows. Faces identify objects; the readout names the
load effect, reducing this specific source of ambiguity without changing gameplay.

**Consequence.** This is a presentation-only correction. The observation does not demonstrate a
human readability improvement, and no gameplay or human-playability claim is made. Root accepted
the bounded correction as `DONE_WITH_CONCERNS` at 2026-10-18 15:06:40 UTC after the canonical checks,
build, two-view capture, fresh SPEC, distinct QUALITY, and final integration. No fresh campaign
journey or difficulty rescore was performed; the broad gameplay goal remains active. See the
`REPORT.md`.

### Make the level 14 refuge a shared crossing

**Decision.** Keep stable `level_14` and make Pac's existing OPEN hold pause the moving refuge.
Keep the original RESCUE pad and add a lower lip for a missed-landing recovery.

**Why.** Isp needs Pac to hold the refuge still long enough to board, then both heroes can travel
across Gem's bomb gap. RESCUE opens Pac's far exit; it does not impose an order for boarding the
refuge or reaching the shore.

**Consequence.** The 57 registered room IDs and order remain unchanged. The registered ordinary
input replay clears both exits; a separate recovery replay records Pac on the lip and reboarded on
the refuge. This revision is not included in the frozen current53 difficulty map and remains
unassessed for human discovery, paired play, and difficulty. Five built-browser views and the bounded
completion, save, Next, and reload flow pass. Fresh SPEC, QUALITY, and integration reviews passed
with concerns. Root accepted the revision as `DONE_WITH_CONCERNS` at 2026-10-18 19:15:58 UTC after
reviewing the source, receipts, and all five original views. No fresh 57-room journey or current53
rescore was run; levels 14 and 54-57 remain unassessed, and human discovery/enjoyment remain unknown.
No milestone work remains; the broader gameplay goal remains active. See the
[delivery plan](active_plans/active/liver_refuge_delivery.md) and
`tests/_temp/liver_refuge_integration/REPORT.md`.

**Owner.** [Final level definitions](../src/levels_final.ts) and
[final villain scenes](../src/villain_scenes_final.ts).

### Keep the level-32 loading interaction private pending review

**Decision.** Record a native-only feasibility candidate that gives Pac a launch-side dock and lets
him push Gem onto the existing ferry. Preserve the registered room and its carrier, bubble, FLOAT,
latch, and exit geometry while root considers the result.

**Why.** Ordinary inputs show a short push into POWER, ferry transport of both Pac and Gem, Isp's
existing FLOAT/latch contribution, and a successful overshoot correction. The native fixture does
not show whether the dock is visually clear in the built game.

**Consequence.** No production level or generated artifact is changed. Root review and an actual
built-browser view are required before promotion. See the
[private prototype ledger](active_plans/active/VILLAIN_BOARDING_PROTOTYPE.md).

### Completion-screen recovery illustration

**Decision.** Use a full patient, enlarged current organ and existing progress information
in three columns. Preserve completion actions, campaign state and the Levels dialog's
original patient map. Completed level IDs reveal connected healthy tissue territories
and remove cancer masses. Use purple skin, warm pink/coral/red/brown healthy tissues and
darker violet/maroon/deep-red cancer; limit palette overlap to dark reds and burgundies.

**Why.** Players should recognize recovery across the patient without reading counts.
The same silhouettes and anatomical structures remain in place as tissue clears, making
progress read as healing. Restored detail layers reveal airways, intestinal folds, marrow
blood cells, liver vessels and brain highlights. The final tumor leaves a small flat repair
site. Fully cleared regions drop the disease-tinted underlay to avoid clipping seams.

**Validation.** Compare equal-sized whole-body before/after pairs while preserving earlier
regions' recovery. See [region recovery review](art_reviews/region_recovery/README.md).
The patient's expression follows existing completion progress without new saved state.

### Treat opening-jump feedback as tentative

**Decision.** Preserve the opening's structure and inspect specific landing margins if
reproducible evidence appears; do not infer a blanket physics or difficulty change.

**Why.** The October 19 feedback says the opening is mostly good and mentions tight jumps
without identifying a room. This interpretation belongs in design decisions rather than
being added to the human's words in the guidance record.
