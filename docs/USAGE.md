# Usage

## Build and preview

With Node.js/npm and Python 3 installed, start the local preview from the repository root:

```sh
./run_web_server.sh
```

The server script installs npm dependencies when `node_modules/` is missing, then builds `dist/` and serves that output on a local port. Stop it
with Ctrl+C. `build_github_pages.sh` creates the static `dist/` artifact for GitHub
Pages. Building and serving locally do not publish or deploy the site.

## Development checks

Run the repository checks and production build with:

```sh
./check_codebase.sh
./build_github_pages.sh
```

Run the Playwright browser tests against a fresh build with:

```sh
./run_playwright_tests.sh --build
```

## Controls

The game uses a local keyboard for both players. Isp moves with A and D and jumps
with W; Pac moves with the arrow keys and jumps with Up. Both players can press R
to restart or Escape to pause. Pads activate their listed effect when occupied by
the assigned character; STEADY stabilizes its platform while held.

Blue and orange barriers filter characters by their assigned color; purple barriers
block both. A rescue switch latches so the partner can follow. Heavy objects require
the characters to push together and can be stacked. Completing levels unlocks later
rooms in campaign order; progress is saved in the browser's local storage by stable room ID.
Earned rooms remain replayable, while added rooms now come before later unearned
rooms in the campaign. Cargo Exchange adds linked lifts that move only while both heroes ride;
their relative cargo load chooses direction, and parking the first crate at CARGO PARKED releases
the return crate. The desktop game is designed for keyboard play.

## Anatomical chapters

The campaign moves through six original organ settings: lungs (positions 1-4), intestine (5-8),
marrow (9-14), liver (15-19), brain (20-23), and tumor (24). Background organ drawings are static;
foreground tissue and mechanisms show existing puzzle state while keeping safe edges, hazards,
characters, and controls clear. Reduced motion keeps decorative movement still while game
mechanisms continue to respond. The art uses playful anatomical forms as the setting for puzzles,
not as a clinical lesson.

The [23-room difficulty findings](DIFFICULTY_FINDINGS.md) are historical estimates bound to the
visual source before this organ migration. They remain design input, but do not measure whether the
new art improves clarity; a new first pass is needed for that question.

## DNA and glucose puzzles

The recurring villains are visible puzzle guides. Purple, bearded Gem marks DNA
walls, bridges, and traps; green, clean-shaven Cana marks glucose-powered gates and
machines. These are game cues and character themes, not clinical or complete
biochemistry explanations.

The first room, "Hold That Door!", teaches the handoff without hazards: Isp holds
the switch so Pac can cross and latch RESCUE, opening the route for Isp. The second
room, "Glucose Going Up!", adds the DNA and glucose sequence plus the powered lift.
The lift's safe jumping challenge is intentional. See
[LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md) for the expert-assessment workflow, generated report,
and separate human observation sheet; [DIFFICULTY_FINDINGS.md](DIFFICULTY_FINDINGS.md) interprets
the historical 23-room estimates. [DIFFICULTY_RUBRIC.md](DIFFICULTY_RUBRIC.md) owns the scoring
method. On later levels, a powered platform moves only when its motor is also running. A power
outage pauses its motion while leaving it solid; an active power pad can
restore power through an outage, and motor-stop controls remain independent.

Villain reactions follow actual puzzle progress. A partial-progress reaction is
shown only after nonempty progress when every required target is complete.

## Campaign interference

Gem and Cana act from the first room and recur across 14 of the 24 campaign rooms. Gem's bubble
can float Isp or briefly stick Pac; Cana's returning boomerang can daze Isp or shove Pac. These
effects are temporary, directional control remains available during DIZZY, and opening lanes
provide safe places to wait or recover. Watch the warning and projectile direction, then use the
room's pads, rescue latch, or a walking route to manage the pressure. Under the approved recurring
pressure contract, each bound pad interrupts an attack once per attempt, cancels its active shot,
and buys a full cooldown and fresh warning. Holding or latching that pad does not repeat the
interrupt. Start pads start their attacks once; leaving them does not stop the encounter.
Boss defeat or room completion ends the pressure. The implemented behavior and its acceptance
gates are recorded in [recurring_villain_pressure.md](archive/recurring_villain_pressure.md).

The displayed opening begins with a walking room. In **Hold That Door!** (`level_02`), Gem
can FLOAT Isp off HOLD and Cana can contest Pac's approach to RESCUE; Pac sees the door close when
HOLD is lost. Return to HOLD to reopen it, or reach RESCUE to interrupt both attackers once while
preserving the door for Isp. The second room (`level_01`) adds Gem's safe-floor sweep and Pac's
RESTORE counter before its existing
jumping and lift curriculum.
Later opening rooms introduce Cana at the far bank and Gem at a safe ferry shore, then revisit
those effects in `level_06`, `level_08`, `level_05`, and `level_07`. The room layouts and movement
challenges remain the same. In `level_04`, Pac's STEADY activates the bridge and Cana's far-bank
shot for the attempt. RESCUE stabilizes the bridge; this room has no weapon-interrupt pad, and
Pac leaving STEADY does not turn Cana off. Countering a villain's puzzle scheme and interrupting
its weapon are separate actions.

The recurring-pressure build has focused ordinary-input evidence for interruption, resumed
warnings/shots, useful FLOAT routes, recovery, and lifecycle behavior. The isolated trial also
passes in normal and reduced motion with fresh and existing campaign saves. A separate fresh
normal-motion Play/Next run completes all 24 rooms and the finale, then reloads all 24 Replay
entries with identical save bytes. See
[recurring_villain_pressure_acceptance.md](active_plans/reports/recurring_villain_pressure_acceptance.md)
for the evidence, fresh integration and explicit manager acceptance as DONE_WITH_CONCERNS, and
the remaining mandatory shared-host storage gate. Scripted completion does not
show that first-time players discover the responses or enjoy the pressure. Use the human
observation sheet in [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md) for actual player attempts; use
its separate two-pass workflow for expert estimates.

Several rooms make interference part of the cooperative route:

| Campaign position / stable ID | Partner handoff |
| --- | --- |
| 15 / `level_13`, Gem's Bubble Break | Pac holds BUBBLES to start Gem once. Isp waits to Gem's right, floats upward, and steers right to RESCUE. The latch interrupts Gem once and opens Pac's route to the right stairs and matching exits. A continuous floor and recurring bubbles support retries of the float without death. |
| 16 / `level_24`, I've Got You | Isp holds LIFT to start Gem once while Pac jumps onto him. Gem's FLOAT carries Pac to the upper CROSS hold, opening Isp's lower route. Isp latches RECONNECT to preserve that gate and open Pac's onward route. The safe floor and repeatable ride permit recovery after a fall. |
| 21 / `level_17`, Cana's Upside-Down Commute | Pac holds OPEN to start Gem once. Isp waits on the stopped lift and uses Gem's float to reach RESCUE. The latch interrupts Gem once and powers the lift for Pac; both continue to the high exits. |
| 22 / `level_22`, Crossed Paths | Isp holds INVITE while Pac reaches LIFT. Isp rides up and presses HANDOFF, then waits at Gem's wall. Pac crosses Cana's returning boomerang to TURNAROUND, opening Isp's stairs; Pac then doubles back to reunite at the high exits. |
| 23 / `level_19`, Cana's Control Freak-Out | Isp holds STOP. Pac jumps over Cana's sweeping boomerang to hold STEADY, interrupting Cana once while restoring the ferry and bridge. Isp crosses to RESCUE for a separate one-time interrupt; both hold TARGET to defeat Cana. |

Three relay rooms add more partner-controlled route changes. In **Across the Divide**
(`level_21`, position 14), Isp opens ROUTE and Pac holds LIFT while Isp rides up to press LINK and
free Pac; Pac then opens Isp's return route. In **Crossed Paths**, each character opens the other's route in turn while crossing
Gem's bubble wall and Cana's returning boomerang. The original 20 rooms remain in their original
relative order. **Cargo Exchange** (`level_23`, position 12) follows Elevator Etiquette and
precedes Microtubule Shuffle. Pac delivers the first crate and rides down; Isp delivers the
return crate while Pac rides back. Both heroes must stay aboard for either lift to move, and
each arrival opens the partner's next route.

**I've Got You** follows Gem's useful-float introduction and adds physical passenger transport
without changing controls. Its room and villain scene are authored in
[src/level_float_passenger.ts](../src/level_float_passenger.ts). That room's addition preserved all
older 23 definitions and their relative order. The later recurring-pressure field migration
preserves geometry and order; the new stable ID does not renumber saved progress.

In the final room, **A Very Bad Day for the Tumor** (`level_20`, position 24), Isp first reaches
the high blue TARGET to take over the bridge. Pac then crosses the low route to the orange TARGET.
Both heroes must hold their targets together for two seconds. Gem's bubbles and Cana's boomerang
remain active hazards along the route.

WINDUP/AIMING and the dashed aimline warn before a shot. A boomerang can hit on its return;
watch its travel and keep directional control during the short effect. Cana's room
retains lethal gaps: a missed dodge or an idle shove can cost the attempt. Holding
STEADY or latching RESCUE interrupts each bound attack once per attempt and cancels its active
shot; a hit already applied finishes its short effect. The full cooldown begins at the interrupt;
a fresh warning precedes the next shot, even while the pad remains active. Retry renews the pad uses.

The earlier safe bubble room introduces float and steering before their later lift
application. These routes are instructions, not evidence that first-time players will
understand them without help. See [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md).

## Villain interference trial

Choose **Try villain trial** from the title screen or level selector to enter the
optional Troublemaker Trial. It does not unlock campaign rooms or change saved
campaign progress. Follow the numbered route: Pac holds ENTRY while Isp rides
Gem's bubble to the raised RESCUE latch, then guide both characters to their exits.

Gem's bubble floats Isp or briefly makes Pac sticky. Cana's boomerang briefly slows
and spins Isp while keeping directional control, or gives Pac a clipped shove. WINDUP/AIMING
and the dashed aimline telegraph each attack. Escape pauses the simulation; R retries
the room from its starting state.
