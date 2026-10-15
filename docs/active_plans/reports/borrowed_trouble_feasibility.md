# Borrowed Trouble feasibility

2026-10-15. **Reject this candidate for production integration.** Its full reciprocal route works,
but SWITCH can be used as a brief door opener while avoiding every Cana projectile. The remaining
cooperation repeats accepted rooms 17 and 22. Adding a room does not earn enough new play here.

## Runnable evidence

Run from the repository root:

```bash
node --import tsx tests/_temp/borrowed_trouble_probe.mjs
```

The temporary probe imports production `create_game_state`, `step_game`, input construction and
level helpers. The level is local to the probe. It starts from its original authored spawns for
every scenario. All movement, pad activation, attack contact, cancellation and completion use
ordinary left/right/jump inputs at 120 Hz. No saved game, live position, effect, projectile, pad,
platform or door state is injected. JSON output was captured locally under
`test-results/borrowed_trouble/probe.json`; that ignored directory is a regenerable observation,
not a production artifact or permanent acceptance test.

This demonstrates source reachability and counterexamples. It does not demonstrate browser
presentation, novice discovery, enjoyable shared-keyboard play or exhaustive input-space safety.
No source modules, campaign order, save data, builds or published artifacts change.

## Local room geometry

Coordinates are pixels, with y increasing downward. Bodies are 30 by 36 pixels.

| Part | Geometry and existing contract |
| --- | --- |
| Starts | Isp (190,464), floor y500; Pac (80,564), continuous floor y600. |
| Ascent | Pac's BUBBLES hold invites a horizontal bubble into Isp. Isp floats above y300, then steers right onto balcony x260..500. |
| Isolation | Isp-only floor y550 and wall x240/y322..550 separate the starts. Another Isp wall x850/y322..550 blocks the lower staircase bypass. |
| SWITCH | Isp hold x340..415/y300 opens Pac's gate x620..640 and enables Cana. |
| Pac crossing | Continuous floor y600, with optional safe shelves x420..510 and x680..770 at y530. No pits or precision shove requirement. |
| Cana | Muzzle (1000,580), target (300,580), speed 300, radius 12, windup 1s, cooldown 0.25s. Enabled by SWITCH; disabled by SILENCE or FINISH. |
| SILENCE | Pac hold x790..865/y600 suppresses Cana and powers the upper ferry. |
| Isp crossing | Ferry x510..570/y300 moves +260 horizontally over an 8s cycle; landing x850..1000/y300. |
| FINISH | Isp latch x900..975/y300 preserves ferry power, suppresses attacks and opens Pac's stair gate. |
| Reunion | Forward steps at x930/y530, x1000/y460, x1070/y390, x1140/y320; shared final tower x1210/y300. Pac travels right throughout. |

The local module uses only hold/latch pads, door/power effects, character filters, a powered moving
platform, static ledges, the existing interference controls and ordinary exits. A prospective
production module would export one level and its scene, but **no production module contract or
campaign insertion is recommended** after these results.

## Observed routes

| Scenario | Observed result |
| --- | --- |
| Full intended sequence | Complete at 16.917s: FLOAT at 1.792s, SWITCH at 3.858s, SILENCE at 7.925s, upper landing at 11.725s, FINISH at 11.825s, then forward stairs. |
| Cancel after central gate | Complete at 17.300s. At7.233s Pac is x663.917, safely beyond the gate, with Cana's projectile in flight. Isp walks to x433.25, releasing SWITCH; at 7.617s the projectile is gone and Pac continues to SILENCE. |
| Release before gate | Pac stops at x590 against the closed gate. Reoccupying SWITCH reopens it. The same attempt then cancels after the gate and completes at 18.042s. No restart or state reset is needed. |
| Avoid every Cana launch | Complete at 17.433s. Only Gem's `ascent` projectile launches; the only observed effect is `isp:float`. No dodge, refuge or shove is used. |
| Remove bubbles | Ordinary Isp right+jump cannot reach SWITCH. |
| Initial stacking samples | Pac walks underneath Isp and jumps; Isp jumps right after 0,18,36 or54ticks. None reaches SWITCH. Minimum Isp feet are409.917, above the starting floor but below the required balcony height 300. |
| Pac ascent sample | Pac jumps under the start shelf, reaches minimum feet558 because of its underside, and cannot reach Isp's starting floor 500. |
| Upper crossing without SILENCE | Isp boards the unpowered ferry and jumps right. It misses the upper landing, drops to the Isp floor, and stops at x820 against the lower stairs filter. FINISH stays unlatched. |

The zero-shot route is the decisive counterexample:

1. Receive FLOAT and reach SWITCH normally.
2. Immediately walk Isp off SWITCH to x435, before Cana's warning finishes.
3. Walk Pac safely to x590 against the closed central gate.
4. Walk Isp back to x355; walk Pac75px to x665; walk Isp off again.
5. Walk Pac to SILENCE and finish the original upper ferry/stair sequence.

The enabled interval is shorter than Cana's cooldown plus warning. Releasing SWITCH resets that
timer and removes in-flight shots. This is ordinary clever cooperation, but here it empties the
purported encounter: the safe shelves, boomerang dodge and cancellation decision add no necessary
work. The attack-enabled full route also completes by walking across the lower floor; shove on
this flat, pit-free route has no losing consequence.

The upper miss exposes another unfinished detail: landing on the Isp-only lower floor does not
establish a return to the upper balcony. The negative fixture confirms the lower stairs are
blocked; it does not establish recovery from that miss. This rough room should not be presented as
a polished or forgiving encounter. The experiment stops at rejection instead of adding recovery
architecture to a candidate whose central premise already fails.

## Novelty and decision

Room 17 already has Pac invite Gem's useful FLOAT, Isp rise to a high route, and Isp release Pac
through a high rescue. Room 22 already has different upper/lower routes, a partner-powered lift,
handoff, Cana's outgoing/returning sweep, a lower pad opening Isp's route, and a final stair unlock.
Borrowed Trouble changes the sequence to FLOAT, temporary attack/door hold, lower suppression hold,
powered upper crossing and final stair latch. Its substantive improvement is a forward reunion
instead of room 22's deliberate return trip; its cooperation is otherwise a recombination of those
accepted structures.

SWITCH release is useful as door timing and attack cancellation, but the optimal demonstrated use
removes Cana completely. With one finite gate on a continuous floor, Pac can cross that gate and
cancel for the remaining walk; moving the gate near SILENCE merely moves the safe waiting point.
Gates throughout the corridor, new attack persistence or forced precision would manufacture a
different design and are outside this experiment.

Preserve the current campaign. Do not place this after 17/before 22. Retain this report and temporary
probe as rejection evidence. The next gameplay candidate needs a physical role transfer beyond an
invited ascent followed by reciprocal door/lift holds; an existing-room clarity or encounter review
can proceed without promoting this room.

## Harness custody

The original temporary source was archived byte-for-byte at
`test-results/counterweight_validation_harnesses/borrowed_trouble_probe.mjs.txt`; verify it with
that directory's `SHA256SUMS`. Restore it to `tests/_temp/borrowed_trouble_probe.mjs` from the
repository root using the copy command in the archive README, then use the run command above.
