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
room's pads, rescue latch, or a walking route to manage the interruption. Attacks stop when their
authored suppression control is active; a RESCUE latch silences attacks only where that room authors it.

The displayed opening begins with a walking room. In **Hold That Door!** (`level_02`), Gem
can FLOAT Isp off HOLD and Cana can contest Pac's approach to RESCUE; Pac sees the door close when
HOLD is lost. Return to HOLD to reopen it, or reach RESCUE to silence both attackers. The second
room (`level_01`) adds Gem's safe-floor sweep and Pac's RESTORE counter before its existing
jumping and lift curriculum.
Later opening rooms introduce Cana at the far bank and Gem at a safe ferry shore, then revisit
those effects in `level_06`, `level_08`, `level_05`, and `level_07`. The room layouts and movement
challenges remain the same. In `level_04`, Pac's STEADY activates the bridge and Cana's far-bank
shot. RESCUE stabilizes the bridge, then Pac leaves STEADY to cancel Cana; the rescue does not
cancel the shot automatically.

These routes have scripted input evidence, which shows that the authored routes can be completed
and recovered. It does not show that first-time players discover the responses or enjoy the added
pressure. Use the human observation sheet in [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md) for actual
player attempts; use its separate two-pass workflow for expert estimates.

Several rooms make interference part of the cooperative route:

| Campaign position / stable ID | Partner handoff |
| --- | --- |
| 15 / `level_13`, Gem's Bubble Break | Pac holds BUBBLES. Isp waits to Gem's right, floats upward, and steers right to RESCUE. The latch ends the bubbles and opens Pac's route to the right stairs and matching exits. A continuous floor supports retries of the float without death. |
| 16 / `level_24`, I've Got You | Isp holds LIFT while Pac jumps onto him. Gem's FLOAT carries Pac to the upper CROSS hold, opening Isp's lower route. Isp latches RECONNECT to preserve that gate and open Pac's onward route. The safe floor and repeatable ride permit recovery after a fall. |
| 21 / `level_17`, Cana's Upside-Down Commute | Pac holds OPEN. Isp waits on the stopped lift and uses Gem's float to reach RESCUE. The latch suppresses bubbles and powers the lift for Pac; both continue to the high exits. |
| 22 / `level_22`, Crossed Paths | Isp holds INVITE while Pac reaches LIFT. Isp rides up and presses HANDOFF, then waits at Gem's wall. Pac crosses Cana's returning boomerang to TURNAROUND, opening Isp's stairs; Pac then doubles back to reunite at the high exits. |
| 23 / `level_19`, Cana's Control Freak-Out | Isp holds STOP. Pac jumps over Cana's sweeping boomerang to hold STEADY, suppressing attacks while restoring the ferry and bridge. Isp crosses to RESCUE for lasting suppression; both hold TARGET to defeat Cana. |

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
[src/level_float_passenger.ts](../src/level_float_passenger.ts). The older 23 rooms retain every
definition and their relative order; the new stable ID does not renumber saved progress.

In the final room, **A Very Bad Day for the Tumor** (`level_20`, position 24), Isp first reaches
the high blue TARGET to take over the bridge. Pac then crosses the low route to the orange TARGET.
Both heroes must hold their targets together for two seconds. Gem's bubbles and Cana's boomerang
remain active hazards along the route.

READY and the dashed aimline warn before a shot. A boomerang can hit on its return;
watch its travel and keep directional control during the short effect. Cana's room
retains lethal gaps: a missed dodge or an idle shove can cost the attempt. Holding
STEADY or latching RESCUE cancels active shots; a hit already applied finishes its
short effect. Releasing temporary suppression starts a full cooldown and fresh warning.

The earlier safe bubble room introduces float and steering before their later lift
application. These routes are instructions, not evidence that first-time players will
understand them without help. See [LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md).

## Villain interference trial

Choose **Try villain trial** from the title screen or level selector to enter the
optional Troublemaker Trial. It does not unlock campaign rooms or change saved
campaign progress. Follow the numbered route: Pac holds ENTRY while Isp rides
Gem's bubble to the raised RESCUE latch, then guide both characters to their exits.

Gem's bubble floats Isp or briefly makes Pac sticky. Cana's boomerang briefly slows
and spins Isp while keeping directional control, or gives Pac a clipped shove. READY
and the dashed aimline telegraph each attack. Escape pauses the simulation; R retries
the room from its starting state.
