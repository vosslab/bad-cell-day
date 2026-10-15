# Overnight campaign baseline

Baseline snapshot captured 2026-10-15 before gameplay implementation. The final corrected browser run passed all 20 rooms
sequentially from fresh storage with zero retries and no console or page errors. Reload preserves
all 20 earned records and all 20 Replay entries. This report owns baseline evidence only.

## Build and method

Historical commands executed from the repository root. The plan-specific temporary harness
was removed at closeout after final acceptance; its invocation records performed checks.

```bash
./build_github_pages.sh
mkdir -p test-results/overnight_baseline/site
cp -R dist/. test-results/overnight_baseline/site/
shasum -a 256 test-results/overnight_baseline/site/main.js test-results/overnight_baseline/site/index.html test-results/overnight_baseline/site/style.css
source source_me.sh && python3 -m http.server 8131 --bind 127.0.0.1 --directory test-results/overnight_baseline/site
# Two initial fresh attempts while correcting the controller
node tests/_temp/overnight_baseline.mjs
node tests/_temp/overnight_baseline.mjs
# Explicit measured-save continuation
RESUME_BASELINE=1 node tests/_temp/overnight_baseline.mjs
# Final successful fresh sequential acceptance
node tests/_temp/overnight_baseline.mjs
```

Existing port 8123 was occupied by the previous local Python server. The isolated copy on 8131
prevents later source edits or manager builds changing this baseline. Chromium uses the host's
required execution escalation. No dependency or browser installation was needed.

| Snapshot artifact | SHA-256 |
| --- | --- |
| `main.js` | `51993fdbfd9c730ac370edf121d10c181c928a4b2279f767744ea025f9f5734f` |
| `index.html` | `15ea3453cd488ddc64515105da63418593abb6d6bce59f539cf24ac44f4292a7` |
| `style.css` | `e2f0248615d9cc6d388b80781ef575ef33e35f56e1acf8855e1c883ffeae131b` |

The bare Playwright harness uses fresh browser storage, visible Play and Next controls, ordinary
A/D/W and arrow keyboard down/up events, and Playwright clock advancement. Tutorial and middle
routes read canvas position projections; final routes replay the historical ordinary key intervals
from `/private/tmp/villain_final_route_inputs.json`. The game performs its normal fixed-step physics.
The script changes no coordinates, mechanisms, outcomes, or saved progress. The route is rehearsed
from existing authored route documents. Optional spark collection is recorded separately.

The first run cleared positions 1-17 with zero retries. Its stable `level_17` replay stopped Isp at
x919.75 on the final tower, just short of his exit overlap. Pac was safely at x1031.75. This was a
controller endpoint defect: the source replay's final position was similarly near the overlap
boundary. The corrected harness adds ordinary Isp movement toward x955 and repeats all 20 from
fresh storage. No product correction was made. The second fresh run cleared positions 1-18, then the stable19 fixed-interval replay drifted and
caused one death. A position-aware keyboard controller then completed stable19 and stable20,
using the actual first18 earned save in an explicit continuation. Both final rooms cleared with
zero retries; all 20 earned records persisted and all 20 Replay buttons were enabled after reload.
The final corrected fresh 20 repeat passes and is the baseline acceptance result. `first18_continuation.json`
retains the second attempt's failed replay diagnostics and measured save; `segmented_results.json`
retains the successful continuation. These exploratory deaths are not hidden by the successful
route's retry count. No product correction was made.

## Successful fresh sequential results

All20 rooms complete in one session through visible Next controls. Final victory appears; reload
retains exactly20 actual completion records and marks every menu entry Replay. Browser errors are
empty. The columns below use exact saved elapsed seconds rounded to three decimals.

| Position | Stable ID | Seconds | Retries | Sparks |
| --- | --- | ---: | ---: | --- |
| 1 | `level_02` | 7.683 | 0 | 2 / 2 |
| 2 | `level_01` | 30.650 | 0 | 3 / 4 |
| 3 | `level_04` | 9.125 | 0 | 2 / 2 |
| 4 | `level_03` | 8.842 | 0 | 2 / 2 |
| 5 | `level_06` | 12.008 | 0 | 2 / 2 |
| 6 | `level_08` | 11.108 | 0 | 2 / 2 |
| 7 | `level_05` | 9.942 | 0 | 2 / 2 |
| 8 | `level_07` | 14.908 | 0 | 2 / 2 |
| 9 | `level_11` | 13.025 | 0 | 2 / 2 |
| 10 | `level_09` | 13.267 | 0 | 2 / 2 |
| 11 | `level_10` | 11.683 | 0 | 1 / 2 |
| 12 | `level_12` | 14.417 | 0 | 2 / 2 |
| 13 | `level_13` | 9.925 | 0 | 1 / 2 |
| 14 | `level_14` | 9.767 | 0 | 2 / 2 |
| 15 | `level_15` | 9.017 | 0 | 2 / 2 |
| 16 | `level_16` | 9.475 | 0 | 2 / 2 |
| 17 | `level_18` | 5.400 | 0 | 1 / 2 |
| 18 | `level_17` | 21.125 | 0 | 2 / 2 |
| 19 | `level_19` | 10.250 | 0 | 2 / 2 |
| 20 | `level_20` | 10.758 | 0 | 2 / 2 |

## Cooperation audit

These observations combine the browser route with source geometry and the documented route.
Discoverability below describes visible cues and reasoning required, not measured first-time
understanding. Death recovery cost is untested because the acceptance route deliberately avoids
death. Ordinary death/retry resets the room attempt, so losing a late setup is a plausible cost,
not an observed novice failure. Timings are rehearsed HUD values, not difficulty rankings.

| Position / stable ID | Mandatory contributions and reasoning | Waits, recovery, or candidate weakness |
| --- | --- | --- |
| 01 / `level_02` | Isp holds HOLD; Pac crosses and latches RESCUE; both walk to distinct exits. | Clear introductory handoff. No jumps or timing wait. |
| 02 / `level_01` | Isp holds DNA OPEN; Pac restores lift power; each rides to the balcony. | Longest opening route: separate lift trips create substantial waiting. Full floor catches missed boarding; retain this safe introduction. |
| 03 / `level_04` | Pac steadies bridge; Isp crosses and latches rescue; Pac follows. | First reversed holder role, broad landings. Waiting partner must be passed by jumping. |
| 04 / `level_03` | Isp brakes; Pac crosses ferry and rescues; Isp follows. | Introduces moving support with a meaningful motor counter. |
| 05 / `level_06` | Isp takes first alcove HOLD; Pac takes second RESCUE; both pass through low corridors. | Collision-aware passing differentiates it; hop over partner, drop clear of roof edges. |
| 06 / `level_08` | Pac pushes ordinary crate to PARK, holds STEADY; Isp completes placement and reaches RESCUE. | Cargo replaces unattended holder and frees movement; strong reusable distinction. |
| 07 / `level_05` | Isp holds, Pac traverses to STEADY, Isp traverses to RESCUE. | Familiar sequence with more traversal; acceptable early consolidation. |
| 08 / `level_07` | Isp brakes first ferry, Pac holds island STEADY, Isp uses second ferry to RESCUE. | Real transfer station and two crossings; more active coordination than plain gate rooms. |
| 09 / `level_11` | Isp takes upper BLUE latch, Pac takes lower ORANGE latch, unlocking each other's colored lane. | Both roles travel distinct routes; safe floor supports recovery. Timed carrier outage is not required to clear at this phase. |
| 10 / `level_09` | Both push heavy crate; Isp brakes/powers ferry; Pac rescues. | Joint push adds simultaneous input, then an actual role handoff. |
| 11 / `level_10` | Both ride lift, Isp stops near landing; Pac steadies bridge; Isp rescues. | Controller waits 3.2 seconds before braking; shared ride and attached STOP are distinct. |
| 12 / `level_12` | Crate parks on BRAKE, Pac holds STEADY, Isp reaches RESCUE. | Synthesizes cargo and ferry. Familiar latter half, but cargo distinguishes setup. |
| 13 / `level_13` | Isp holds OPEN; Pac crosses pulse column and rescues; Isp repeats crossing. | Opening gate exchange plus repeated pulse timing. Historical route includes about 1.84 seconds neutral wait for Isp's pulse window. Strong candidate for an active partner counter. |
| 14 / `level_14` | Pac holds OPEN; Isp uses raised bomb refuges and rescues; Pac follows refuges. | Hazard avoidance has a visible spatial solution and safe ground. Movement refuge changes phase; no forced outage wait in this route. |
| 15 / `level_15` | Both push heavy parcel to WEIGH; Pac steadies bridge; Isp rescues. | Reuses heavy crate and bridge but preserves a meaningful simultaneous action. Lower priority than 13 or 18. |
| 16 / `level_16` | Isp STOP, Pac STEADY, Isp RESCUE; both hold TARGET to defeat Gem. | Establishes boss shutdown grammar. TARGET occupancy is required, but after travel each hero simply parks. |
| 17 / `level_18` | Pac starts on POWER and waits; Isp climbs shelf to RESCUE; Pac then climbs right stairs. | Five-second route. Mandatory Pac route never traverses lower bridge that POWER stabilizes. Strong candidate: give Pac meaningful movement or a second causal handoff. |
| 18 / `level_17` | Pac powers lift while Isp rides to RESCUE; Pac later rides; both cross balcony/tower route. | Sequential ten-second lift cycles create substantial neutral wait. Safe boarding phase can be awaited; no death in first endpoint-short run. |
| 19 / `level_19` | STOP, STEADY, RESCUE, paired TARGET at different heights. | Repeats level16 control grammar, with vertical movement variation. |
| 20 / `level_20` | STOP, STEADY, RESCUE, high blue/low orange TARGET. | Third similar boss/control sequence. A differentiated capstone is an optional third candidate; avoid rewriting all bosses. |

Recommend stable rooms 13 and 18 as the clearest bounded opportunities. Consider stable20 only
as a third differentiated encounter if shared mechanism changes remain small and final acceptance
time is protected. This is a design inference from route structure; no human enjoyment claim is
supported. Broad new hazards or additional walking would not address the observed idle roles.

## Visual review

Visually inspected baseline `11_opening.png`, `13_opening.png`, `17_opening.png`,
`20_opening.png`, and `20_complete.png`. Heroes, control cards, owner-colored pads,
causal villain connectors, exits, and toolbar are visible. The final panel displays the actual
"You saved the cell day!" ending and Replay control. A minor cue conflict exists in stable10:
Cana says "Brake before boarding!", although both heroes visibly spawn aboard the lift and the
correct hint says to brake near the upper landing. This is a flavor-text issue, not a route blocker.

## Artifacts and limits

Historical artifacts were generated in `test-results/overnight_baseline/`: numbered `01_opening.png` through
`20_opening.png`, corresponding completion captures, `results.json`, diagnostic `failure.json`, and
the isolated site now retained outside the checkout at
`/private/tmp/bad_cell_day_overnight_baseline_site/`. The historical harness was
`tests/_temp/overnight_baseline.mjs`; it was removed at closeout after final-run handoff.
The final build has separate fresh browser acceptance and refreshed routes for changed rooms.

This baseline does not measure first-attempt difficulty, two-human coordination, enjoyment,
all collectible routes, all timing phases, death recovery, or trial behavior. Trial acceptance and
pause/retry/scroll contracts belong to the final acceptance scope, separately from this baseline.

After acceptance, the manager identified that ESLint traverses the generated snapshot main.js
under test-results. The completed baseline snapshot was moved to
`/private/tmp/bad_cell_day_overnight_baseline_site/` without changing its contents. A later permanent Playwright invocation cleaned the earlier screenshots and JSON from
`test-results/`. This report retains the baseline results; those paths are historical evidence
locations, not retained artifact links. Final-build evidence is in
[overnight_final_browser.md](overnight_final_browser.md).
