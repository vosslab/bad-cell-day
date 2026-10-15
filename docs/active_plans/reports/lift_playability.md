# Lift boarding investigation

Status: DONE_WITH_CONCERNS. The current next requirement is to make the side-boarding and
missed-jump recovery action understandable while preserving this room's liked jump challenge.
The measured issue is a narrow initial boarding opportunity followed by a recoverable underside
stall; it is not evidence that the jump challenge should be flattened or the lift sped up.

No production files or build artifacts change. The manager owns any changelog entry for this
investigation. The temporary executable has been removed. Its exact source is archived at
lift_experiment.mjs.txt (`test-results/hero_validation_harnesses/lift_experiment.mjs.txt`).
Restore it before using the historical commands below; see the
harness restore guide (`test-results/hero_validation_harnesses/README.md`).

## Evidence and scope

Investigated stable `level_01`, campaign position 2, "Glucose Going Up!", on the existing frozen
HTTP build at `http://127.0.0.1:8127/`. Served main.js matches the disk artifact, SHA-256:
`ac0a8f29eeff6f604896f251c59d6ac2f4b6dd05eb8d9ba7a96267a1fdb472d6`.
All 29 authored source files embedded in its source map match current disk sources.

Reproduce the deterministic simulation and browser measurements after restoring the harness:

```bash
node --import tsx tests/_temp/lift_experiment.mjs sim
node --import tsx tests/_temp/lift_experiment.mjs browser
```

The simulator calls production `step_game` at 120 Hz. Ordinary approach, partner sequencing,
and recovery begin at authored spawns and use only input thereafter. The launch-phase sweep uses
explicit synthetic fixtures, with lift phase and player location assigned before stepping;
its measurements are source experiments, not runtime acceptance. Invalid fixtures starting with
a body penetrating the solid platform are excluded from sweep successes.

The browser uses fresh contexts, earns the first room through real keyboard input, selects visible
Next level, then measures position through existing read-only canvas data attributes. It never
mutates gameplay state, localStorage, source, or build. Chromium initially failed inside the sandbox:
`bootstrap_check_in org.chromium.Chromium.MachPortRendezvousServer: Permission denied (1100)`.
The same browser command passed with approved escalation. These are keyboard operability and timing
measurements; human comprehension and enjoyment remain unmeasured.

## Geometry contract

Dynamic 2D motion-planning query: axis-aligned rectangles, pixel coordinates with downward-positive
Y, ordinary floating-point approximation, production swept axis clipping and standing predicates.
A player is 30x36 px; horizontal speed 210 px/s, jump speed 470 px/s, gravity 1200 px/s^2.
The continuous free jump apex is 92.04 px, reached after 0.392 s. Rendered character art does not
change these collision dimensions.

The lift spans x=680..880, starts at top y=530, and travels to y=300 over ten seconds before
returning over ten seconds. Thus lift speed is 23 px/s. RESTORE latches permanently and starts
motion from phase zero; there is no autonomous phase accumulation while it is unpowered.
The floor top is y=550, player standing top y=514. A return lift above a waiting player's head
stops at top y=494, bottom y=514. This is the general no-crush behavior in
[src/mechanisms.ts](../../../src/mechanisms.ts), not a room-specific catch.

## Ordinary first approach

Simulation route: Isp to x=238.25 on DNA OPEN; Pac to x=511.5, the first RESTORE contact;
optional idle delay; Pac to x=639.25; side jump to about x=720. Time is seconds since room start;
phase is powered lift motion time. The first contact starts at phase 0 at t=1.983.

| Idle after RESTORE | Side launch time | Lift phase at launch | Result | First later successful board with repeated side attempts |
| --- | --- | --- | --- | --- |
| 0 s | 2.592 | 0.608 | Boards at t=3.250, phase 1.267 | Same attempt |
| 2 s | 4.592 | 2.608 | Lands back on floor | t=21.767, phase 19.700 |
| 4 s | 6.592 | 4.608 | Lands back on floor | t=21.883, phase 19.700 |

The recovery controller retreats to x=640 after a miss, waits 0.5 s, and repeats the same side
jump. The roughly 16.2 s and 14.3 s intervals from failed-attempt sample to recovery are measured
controller outcomes, not universal wait bounds. A continuous source phase sweep at 50 ms increments
finds successful side-jump launch samples at phases 0.00..2.25 and 17.60..19.95 (94/400 samples).
These sampled endpoints have 50 ms resolution and depend on the stated launch x/trajectory.

The 2 s observation delay genuinely loses the first departure for this ordinary route. A
presentation cue can explain it, but cannot increase that physical boarding opportunity.

Browser spot checks agree. All values below come from fresh keyboard-only trials; time is the
harness's explicit fake-clock time since selecting this room, not an exact simulation timestamp.

| Delay | RESTORE sample | Side launch | Sample after jump | Pac position after jump |
| --- | --- | --- | --- | --- |
| 0 s | 2.080 s | 2.688 s | 3.870 s | x=721.75, y=452.41: riding |
| 2 s | 2.080 s | 4.688 s | 5.822 s | x=723.25, y=514: floor |
| 4 s | 2.080 s | 6.688 s | 7.822 s | x=723.25, y=514: floor |

## Underneath versus side

A stationary upward jump from beneath a solid lift hits its underside; it does not pass through
onto its top. Of the 400 sampled phases, no valid nonpenetrating underneath-start fixture boards.
Fixtures at early/late phases with platform bottom below y=514 already overlap the player and
are invalid: their apparent boarding successes must not be interpreted as ordinary reachability.

After the 2 s miss, a normal-input source run waits 30 s beneath the lift. It stops at phase
18.433, top y=494; Pac remains at y=514. A stationary jump plus another second leaves the lift
at exactly the same phase and Pac on the floor. Moving out to x=640 lets it resume; the next side
jump boards at t=38.675, phase 19.167. Pac is never dead or permanently trapped.

The browser reproduces the practical sequence in both delayed trials:

| Trial | Wait beneath lift | Stationary jump | Retreat and side jump |
| --- | --- | --- | --- |
| 2 s delay | t=25.822, Pac y=514 | t=26.838, y=514 | t=28.468, y=487.48: riding |
| 4 s delay | t=27.822, Pac y=514 | t=28.838, y=514 | t=30.468, y=487.48: riding |

Waiting beneath the lift is consequently a controller failure, not an honest estimate of a
20 s periodic service wait. Waiting alone prevents the downward cycle from finishing. Existing
full-campaign times around 30 s include route/controller choices and cannot establish a product bug.

## Partner timing

If Pac boards first, moves to x=820, and only then Isp walks from DNA OPEN to the side launch,
Isp arrives at lift phase 4.008. His side jump misses while Pac remains aboard. Browser execution
agrees: Isp launches at t=6.270 while Pac y=397.21, then Isp remains on the floor at t=7.404 while
Pac has risen to y=371.14.

Concurrent ordinary simulation controls can board both on the same first departure: Pac boards
at phase 1.258 (t=3.242), then moves right to clear landing space; Isp follows and boards at
phase 2.450 (t=4.433). Both remain on the lift at phase 5.833. Isp's launch is before the sampled
2.25 s launch cutoff even though his landing occurs later. This same-trip paired route is source
simulation evidence only; browser trials here covered the sequential case.

## Hypotheses and conclusions

Every row can be falsified by the simulator/browser commands above, using their named output rows.

| Hypothesis | Falsification measurement | Outcome |
| --- | --- | --- |
| Power has advanced the cycle before RESTORE | APPROACH first-contact phase | Rejected: phase 0 |
| A two-second read/decision pause preserves first boarding | APPROACH/BROWSER delay 2 | Rejected for this ordinary route |
| Waiting underneath completes the next return | UNDERPARK and BROWSER waitUnder20s | Rejected: head blocks descent |
| A jump directly underneath boards like a side jump | SWEEP valid x=720; browser underJump | Rejected: solid underside |
| The room forces separate trips | PAIRED normal-input simulation | Rejected: both board first trip with concurrent movement |

The next bounded change should first communicate the actual action: jump onto the lift from its
left side; if underneath, step left and jump back on. The existing hint says "Both ride" without
teaching this collision-specific distinction. A visible launch-side cue and concise contextual hint
are justified by the measurements. Preserve the solid lift, jump arc, full safe floor, and room
structure. Recheck both characters, same-trip boarding, delayed recovery, and text visibility in
browser after any such change. Human observation is the remaining acceptance requirement for a
claim that these cues improve comprehension or fun.

If subsequent player evidence shows that losing the departure after reading is still a pacing
problem, separately prototype a bounded authored initial boarding pause/sequence. Compare 0/2/4 s
approaches and missed-jump recovery against these numbers before choosing it. That option changes
physical opportunity; it is not yet selected or proven. A generic speed increase is poorly targeted:
it changes both travel time and the available departure window, while leaving underside recovery
unexplained. Automatic catches would also discard the existing intentional jump learning.
