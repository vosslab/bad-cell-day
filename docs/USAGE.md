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

## DNA and glucose puzzles

The recurring villains are visible puzzle guides. Purple, bearded Gem marks DNA
walls, bridges, and traps; green, clean-shaven Cana marks glucose-powered gates and
machines. These are game cues and character themes, not clinical or complete
biochemistry explanations.

The first room, "Hold That Door!", teaches the handoff without hazards: Isp holds
the switch so Pac can cross and latch RESCUE, opening the route for Isp. The second
room, "Glucose Going Up!", adds the DNA and glucose sequence plus the powered lift.
The lift's safe jumping challenge is intentional. See
[LEVEL_DIFFICULTY.md](LEVEL_DIFFICULTY.md) for the campaign order and how to assess
room difficulty. On later levels, a powered platform moves only when its motor is
also running. A
power outage pauses its motion while leaving it solid; an active power pad can
restore power through an outage, and motor-stop controls remain independent.

Villain reactions follow actual puzzle progress. A partial-progress reaction is
shown only after nonempty progress when every required target is complete.

## Campaign interference

Several rooms make interference part of the cooperative route:

| Campaign position / stable ID | Partner handoff |
| --- | --- |
| 15 / `level_13`, Gem's Bubble Break | Pac holds BUBBLES. Isp waits to Gem's right, floats upward, and steers right to RESCUE. The latch ends the bubbles and opens Pac's route to the right stairs and matching exits. A continuous floor supports retries of the float without death. |
| 20 / `level_17`, Cana's Upside-Down Commute | Pac holds OPEN. Isp waits on the stopped lift and uses Gem's float to reach RESCUE. The latch suppresses bubbles and powers the lift for Pac; both continue to the high exits. |
| 21 / `level_22`, Crossed Paths | Isp holds INVITE while Pac reaches LIFT. Isp rides up and presses HANDOFF, then waits at Gem's wall. Pac crosses Cana's returning boomerang to TURNAROUND, opening Isp's stairs; Pac then doubles back to reunite at the high exits. |
| 22 / `level_19`, Cana's Control Freak-Out | Isp holds STOP. Pac jumps over Cana's sweeping boomerang to hold STEADY, suppressing attacks while restoring the ferry and bridge. Isp crosses to RESCUE for lasting suppression; both hold TARGET to defeat Cana. |

Three relay rooms add more partner-controlled route changes. In **Across the Divide**
(`level_21`, position 14), Isp opens ROUTE and Pac holds LIFT while Isp rides up to press LINK and
free Pac; Pac then opens Isp's return route. In **Crossed Paths**, each character opens the other's route in turn while crossing
Gem's bubble wall and Cana's returning boomerang. The original 20 rooms remain in their original
relative order. **Cargo Exchange** (`level_23`, position 12) follows Elevator Etiquette and
precedes Microtubule Shuffle. Pac delivers the first crate and rides down; Isp delivers the
return crate while Pac rides back. Both heroes must stay aboard for either lift to move, and
each arrival opens the partner's next route.

In the final room, **A Very Bad Day for the Tumor** (`level_20`, position 23), Isp first reaches
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
