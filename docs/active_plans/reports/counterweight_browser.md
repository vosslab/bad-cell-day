# Cargo exchange browser acceptance

Status: corrected frozen build ACCEPT for targeted browser behavior and inspected presentation.
The final run passes 52 normal/reduced-motion samples plus five supplemental actual-floor
reboarding samples, with zero page/console errors. Both initial-candidate findings are corrected.

The archived keyboard harness is
[counterweight_browser.mjs.txt](../../../test-results/counterweight_validation_harnesses/counterweight_browser.mjs.txt).
It targets the manager's frozen production artifact at `http://127.0.0.1:8127/`.
It verifies served/local SHA-256 equality and every embedded authored source-map source before
opening a headless Chromium session. Existing read-only hero coordinates and visible canvas
screenshots supply runtime observations; the harness adds no production instrumentation.

Both normal and reduced-motion sessions use explicitly seeded earned-room Replay setup, actual
keyboard controls, and visible public buttons. They cover initial WAIT FOR BOTH, equal loads,
outbound 2:1 motion, both endpoint docks, parked-cargo wait, lower balance, both arrivals and
villain reactions, reciprocal 1:2 motion, pause/resume, Retry, completion, and Replay reset.
The normal-motion session additionally exercises three outer wrong-way cargo stops, loaded clutch
waiting, both heroes' early upper dismounts, premature return loading, and floor-to-lip reboarding
followed by ordinary-key recovery. Campaign progression is separately owned; the current stable
room placement follows `level_10` and precedes `level_12`.

## Corrected build acceptance

The corrected build passes 34 normal-motion and 18 reduced-motion samples. The extra normal-only
floor-reboarding run passes five samples. Every observation uses actual keyboard input or visible
public controls; browser evaluation only reads the existing canvas dataset. No runtime state,
position, cargo, latch, or simulation function is injected or changed by the harness.

Verified in both motion settings:

- Initial WAIT FOR BOTH, equal-load BALANCED, outbound 2:1 and reciprocal 1:2 movement.
- Both decks dock at their visible endpoint ticks. Passenger transport remains opposite.
- Parked cargo waits; both owner arrivals open the partner destination and trigger the matching
  Gem/Cana reaction. Both heroes complete both the ordinary route and inner-pin recovery route.
- Pause freezes outbound positions. Retry and completed-room Replay restore the initial room.
- Holding the outbound push pins cargo against the inner wall; after lower docking, Pac jumps
  into the opened recovery recess at `(393.25,450)`, pushes cargo left onto CARGO PARKED, and
  completes the reciprocal return and both exits.

The inner-pin route derives from the regenerated 3345-frame ordinary-input source route,
`room_inner_pin_inputs.json`, retained beside the final browser results. Its SHA-256 is
`f56ccd65292251c2fb0f51effc2d9293df207c0891c6621b986f498ee2f0fe09`.
The browser executes the same route using adaptive hero-position thresholds and bounded key
intervals; it does not claim frame-for-frame browser/source identity.

The normal run additionally verifies all three outer wrong-way cargo stops, ten-second loaded
clutch waiting, both heroes' five-second early dismount waits and recovery, deliberately premature
return loading followed by complete recovery, and reverse-boarding blockage/recovery.

The first corrected run's sample `21b_floor_below_paused_deck` actually lands Pac atop parked
cargo at y424. It is not accepted as floor evidence. The supplemental run parks cargo slightly
farther left, asserts Pac's actual floor y464 at `(117.5,464)`, jumps to the reboarding lip at
`(170,420)`, reboards, and completes both exits. This corrects a temporary controller's edge
timing; no product edits occur.

Actual full-size PNG inspection covers normal/reduced initial, balanced, outbound/return motion,
both docks, both arrival reactions, inner pin/recess, blocked straddler, actual floor/lip, and
completion states. The mechanism header remains clear, including both load numerals/pips, rider
lamps, endpoint text, and movement direction. Dialogue clears the header and the actually occupied
recovery recess; both villain arrival reactions remain readable. The opening Gem bubble is below
its actor, but expires before three seconds, while full lower docking alone needs over four
seconds, so the opened recovery recess is not occupied during that dialogue state.

Representative inspected final images:

- [Initial readouts](../../../test-results/counterweight_browser/final/reduced_01_initial_wait.png).
- [Equal loads](../../../test-results/counterweight_browser/final/reduced_02_equal_loads.png).
- [Outbound motion](../../../test-results/counterweight_browser/final/reduced_04_outbound_2_1_motion.png).
- [Gem's arrival](../../../test-results/counterweight_browser/final/reduced_09_gem_delivery_reaction.png).
- [Cana's arrival](../../../test-results/counterweight_browser/final/reduced_12_cana_return_reaction.png).
- [Inner-pinned cargo](../../../test-results/counterweight_browser/final/normal_28_inner_pin_lower_dock.png).
- [Recovery recess](../../../test-results/counterweight_browser/final/reduced_29_inner_recovery_recess.png).
- [Inner-pin route completion](../../../test-results/counterweight_browser/final/reduced_31_inner_pin_recovered_complete.png).
- [Actual floor](../../../test-results/counterweight_browser/final_floor/normal_02_actual_floor_wait.png).
- [Floor-to-lip landing](../../../test-results/counterweight_browser/final_floor/normal_03_actual_floor_to_lip.png).

Both final lanes verify identical served/local distribution bytes and all 34 authored source-map
contents against disk:

- `main.js`: `a3a900f994066a3c62436c881b324330c480bd8ab997fe2d1b7574faf033fe40`.
- `main.js.map`: `1a488b599a574fa603ab69122fe04e3b6b63230db31a6c0e67e91b573acfe498`.
- Room source: `d200dc05c3a01510939a545849c3310398ed262d31777c151903b09943f38093`.
- [Final results](../../../test-results/counterweight_browser/final/results.json) and
  [floor results](../../../test-results/counterweight_browser/final_floor/results.json) retain
  every source and CSS/HTML hash, sample snapshot, and runtime error list.
- [SHA256SUMS](../../../test-results/counterweight_browser/SHA256SUMS) covers all retained runs.

Run `node --import tsx tests/_temp/counterweight_browser.mjs final` or replace `final` with
`final_floor` for the supplemental floor lane. Exact executable copies are stored as
`counterweight_browser.mjs.txt` beside each run. To restore a copy after cleanup, copy it back to
`tests/_temp/counterweight_browser.mjs` before running from the repository root against the
matching frozen artifact. Chromium requires macOS MachPort access; sandboxed launch fails before
the page opens, while the authorized escalated runs pass. No commit, build, server, or publication
is performed by this browser owner. Full campaign/progression regression remains separately owned.

## Initial candidate evidence

The initial candidate completes 30 normal-motion and 14 reduced-motion samples with every planned
keyboard assertion passing and zero page/console errors. Pausing preserves both hero positions
during outbound movement. Retry and Replay restore authored spawns/decks/cargo visually. Both
reciprocal cargo journeys and both owner arrivals complete. Ten-second loaded clutch waiting,
five-second early dismount waits, all three outer cargo-stop recoveries, and floor-to-lip
reboarding recover through actual keyboard controls.

All served bytes match local distribution files. Every embedded authored source matches disk
at the initial run's start. Exact provenance, read-only snapshots, PNGs, and the executable
driver copy are preserved under `test-results/counterweight_browser/initial_ab997a/`:

- `main.js`: `ab997ae032e6a11520971e407584d53e5bfed7b644857563caa3fc725a3abd5d`.
- `main.js.map`: `4577295a59653505398feafe465f47753a76b7cbcd2a756e7ac3dc42f543b4b6`.
- [Initial results](../../../test-results/counterweight_browser/initial_ab997a/results.json)
  retain the CSS/HTML hashes and every authored-source SHA-256.

## Corrected initial findings

Historical P2, corrected above: Cana's dialogue covers mechanism feedback in both motion modes.
The initial opening bubble
overlays the right-hand LOAD 1 readout and pip in the mechanism header. Subsequent dialogue
overlays the endpoint description at the bottom of that header. WAIT FOR BOTH, BALANCED,
MOVING, BLOCKED, travel direction, and rider lamps remain legible. This is a concrete text overlap,
not an objection to the saturated presentation. Actual inspected examples:

- [Initial reduced-motion scene](../../../test-results/counterweight_browser/initial_ab997a/reduced_01_initial_wait.png).
- [Outbound movement](../../../test-results/counterweight_browser/initial_ab997a/normal_04_outbound_2_1_motion.png).
- [First dock](../../../test-results/counterweight_browser/initial_ab997a/reduced_06_first_dock.png).
- [Gem's arrival reaction](../../../test-results/counterweight_browser/initial_ab997a/normal_09_gem_delivery_reaction.png).
- [Cana's arrival reaction](../../../test-results/counterweight_browser/initial_ab997a/normal_12_cana_return_reaction.png).

Historical P1, corrected above: an ordinary-key probe confirms a living cargo trap at the inner wall.
From fresh Replay, hold Pac right for seven seconds. At the lower endpoint Pac is at `(320,464)`
and cargo spans `x350..390`, flush against the inner membrane. Jumping right puts Pac on the
crate at `(360,424)`; the membrane prevents reaching its right side. Walking left returns Pac
to the lower dock while leaving the crate at the wall. CARGO PARKED remains unlatched, and the
return cargo gate remains closed. The three outer-stop recoveries do not cover this case.

Actual inspected PNGs and recorded keyboard snapshots are preserved separately under
`test-results/counterweight_browser/inner_pin/`:

- [Pinned at the inner wall](../../../test-results/counterweight_browser/inner_pin/normal_01_inner_wall_pin.png).
- [Hero atop the pinned crate](../../../test-results/counterweight_browser/inner_pin/normal_02_attempt_get_right_of_crate.png).
- [Attempted unloading](../../../test-results/counterweight_browser/inner_pin/normal_03_attempt_push_left.png).

That additional probe targets the same frozen `ab997a` served/map bytes. It explicitly records
ongoing presentation-only source differences; simulation sources still match. Its command exits
successfully because the reproduction runs without browser errors; that is not product acceptance.

Source tuning inputs are not browser acceptance. Human discovery and enjoyment are unmeasured.

## Harness custody

The original temporary browser source was archived byte-for-byte at
`test-results/counterweight_validation_harnesses/counterweight_browser.mjs.txt`; verify it with
that directory's `SHA256SUMS`. Restore it to `tests/_temp/counterweight_browser.mjs` from the
repository root using the copy command in the archive README. Replay requires the retained
`test-results/counterweight/room_inner_pin_inputs.json`, matching frozen `dist/` files, and the
existing manager-owned server at `http://127.0.0.1:8127/`; see the archive README for the exact
repository-root command and invocation. The campaign harness remains at
`test-results/counterweight_campaign/final/counterweight_campaign_browser.mjs.txt` with its
existing SHA-256 recorded in the archive README.

Rules receipt: read `AGENTS.md`, repository style documents, the latest 2026-10-15 changelog,
and the counterweight direction/routes reports. Python would use
`source source_me.sh && python3`; none is needed. The manager owns changelog integration.
