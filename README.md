# Isp & Pac: Bad Cell Day

Guide two molecular heroes through lungs, intestine, marrow, liver, brain, and tumor in a cooperative platform puzzle game where every escape takes teamwork on one shared keyboard and recurring villains disrupt the route from the opening room.

## Work together

Isp and Pac have separate routes, switches, and exits. One player may need to hold a door while the
other crosses, reaches a rescue switch, and opens the way back. The campaign builds those handoffs
across a 43-room roster, from gentle introductions to reciprocal cargo lifts and a shared
tumor-core showdown. Fresh scripted native and empty-save browser runs completed the earlier current41
roster; those runs do not validate the added rooms. The root-accepted current41 expert difficulty
assessment is frozen to that earlier source and order, so it does not score `level_42` or
`level_43`. See the [assessment findings](docs/difficulty_runs/current_41/FINDINGS.md) and
[acceptance receipt](docs/active_plans/reports/difficulty_41_acceptance.md).

In **Boneheads**, Pac carries Isp while Isp holds the high contact, then the heroes separate for
upper and lower exits. SPEC, QUALITY, and integration accept with concerns; root accepts
`DONE_WITH_CONCERNS`, including a nonblocking overlap between Cana's status tag and the bottom of
Pac's exit ring. Human readability and player discovery remain unmeasured.

**Pick On Someone Else** (`level_35`) has Cana's target choice direct the cargo onto
one of two reciprocal routes; the heroes catch and return the sac, then trade jobs.

In **Hold That Door!**, Gem can FLOAT Isp off HOLD while Cana's boomerang contests Pac's
crossing. Pac reaches RESCUE to latch a safe route for Isp, then both heroes reach their exits.

<!-- screenshots:begin (managed by screenshot-docs) -->
![Gem reloads after floating Isp while Cana's boomerang travels through the first displayed room](docs/screenshots/villains_first_level.png)
![Cana shoves Pac beside the steady pad while Isp waits on STOP in the glucose-organ room](docs/screenshots/cana_boomerang_console.png)
<!-- screenshots:end -->
![Cargo Exchange links both lifts as Pac and Isp ride with different loads](docs/screenshots/cargo_exchange.png)

Across the Divide splits Isp and Pac between upper and lower routes, where each opens the next
step for the other. In the finale, Isp holds the upper target so Pac can cross and join the shared
shutdown charge.

In **Bursting Point** (`level_40`), Pac opens a fragile roof while Isp waits for Gem's recurring
bubble to reach the upper exit; an early bubble can be recovered after the roof opens. The room is
accepted with concerns after native and built-browser route checks and is covered by the accepted
current41 expert assessment. No human-play evaluation is claimed.

In **Cana's Friendly Fire** (`level_41`), Pac starts Gem's bubble gun while Isp FLOATs to the upper
latch and opens Pac's lower route. Cana's optional boomerang can push Gem once per flight. Root
accepts the bounded room milestone with concerns; human play remains unmeasured. See
[`docs/active_plans/active/friendly_fire_room.md`](docs/active_plans/active/friendly_fire_room.md)
and [`docs/LEVEL_DIFFICULTY.md`](docs/LEVEL_DIFFICULTY.md).

In **Neural Misfire** (`level_42`), Pac baits Cana's boomerang to shove Gem toward bubble range while
Isp rides FLOAT to the upper landing and opens Pac's exit. The additive brain room is registered at
position 38, and its implementation and native public-engine replay are complete. The built-browser
clear, a first-bubble miss followed by later FLOAT recovery, and source/distribution/served identity
are verified; root reviewed the original captures. Fresh integration review accepts with concerns,
and root accepts this bounded room milestone as `DONE_WITH_CONCERNS`. Next/save/reload/42-row-menu
checks were not run and are not required gates. Human discovery, readability, enjoyment, and
difficulty remain unmeasured. See the
[acceptance receipt](docs/active_plans/reports/NEURAL_MISFIRE_ACCEPTANCE.md) for evidence and limits.

In **Cellpool Lane** (`level_43`), Isp rides Pac and jumps with Cana's right-going throw to the high
route. Each hero latches the other's exit, and the return fold lets them regroup for another try.
Root accepted the production milestone as `DONE_WITH_CONCERNS` after native, browser, code/build,
smoke, and review gates passed. Human readability, discovery, fun, and difficulty remain unmeasured;
the frozen current41 assessment does not include this room. See the [acceptance receipt]
(docs/active_plans/reports/CELLPOOL_LANE_ACCEPTANCE.md) and [production plan]
(docs/active_plans/active/CELLPOOL_LANE_ROOM.md).

![Isp and Pac begin Across the Divide on separate routes with partner-controlled lifts and gates](docs/screenshots/split_route_relay.png)
![Both heroes hold their targets while the illustrated tumor core charges toward shutdown](docs/screenshots/tumor_core_shutdown.png)

## Quick start

With Node.js/npm and Python 3 installed, start the local game from the repository root:

```sh
./run_web_server.sh
```

On first run, the script installs the npm dependencies. It builds the GitHub Pages files in `dist/` and serves them locally. Open the `http://localhost:<port>/` address shown in the terminal. Stop the server with Ctrl+C. This is a local preview; it does not publish the game.

## Play

Both players share one keyboard:

| Hero | Move | Jump |
| --- | --- | --- |
| Isp | A and D | W |
| Pac | Left and Right arrows | Up arrow |

Either player can press R to restart a room or Escape to pause. Reach each hero's matching exit; clear a room to unlock the next one. Progress is saved in the browser.

## What is inside

- A 43-room cooperative campaign roster with five introductory rooms, distinct relay puzzles,
  reciprocal cargo lifts, and a final tumor-core encounter.
- Switches, color gates, moving platforms, hazards, collectibles, crates, and paired routes.
- Original molecular characters: Isp, Pac, and the troublemakers Gem and Cana, whose bubblegun
  and returning boomerang disrupt and sometimes help cooperative routes.
- An optional Troublemaker Trial with Gem's bubble and Cana's boomerang; it leaves campaign progress alone.

## Guides and project notes

- [docs/USAGE.md](docs/USAGE.md) explains game mechanics and the optional trial.
- [docs/LEVEL_DIFFICULTY.md](docs/LEVEL_DIFFICULTY.md) describes campaign order and room difficulty.
- [docs/DESIGN_DECISIONS.md](docs/DESIGN_DECISIONS.md) records the cooperative rules and art direction.
- [docs/E2E_TESTS.md](docs/E2E_TESTS.md) describes browser acceptance checks.

## License

The source code is available under the MIT License: [LICENSE.MIT](LICENSE.MIT).
