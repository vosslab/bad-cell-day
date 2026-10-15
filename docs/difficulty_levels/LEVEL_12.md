# Room 13: Microtubule Shuffle

[Campaign summary](../LEVEL_DIFFICULTY_REPORT.md)

**Microtubule Shuffle** (`level_12`). First-pass author: /root/difficulty_blind_middle; second-pass author: /root/difficulty_blind_middle. Confidence: low -> medium.

First-pass confidence: Only three idle views and visible text are available; no player action, route, or failure was observed. Second-pass confidence: Current source and ordinary-input route evidence establish feasibility and mechanics; no novice pair was observed.

| Dimension | First | Final | First rationale | Final rationale |
| --- | ---: | ---: | --- | --- |
| reasoning | 3 | 3 | Crate brake, bridge, and blue exit barrier imply an ordered plan. | Cargo BRAKE, Pac STEADY, and Isp RESCUE form a three-stage dependency. |
| cooperation | 3 | 3 | Pac steady and Isp final control imply distinct handoffs. | Cargo substitutes for a holder; Pac then supports Isp to permanent rescue. |
| execution | 3 | 3 | Separated platforms and bridge suggest several controlled transfers. | Two gaps, ferry boarding, and bridge crossing require several controlled moves. |
| timing | 3 | 0 | Five-on/three-off text and moving platform suggest multiple timed opportunities. | On the mandatory route, cargo holds BRAKE to power and stop the ferry indefinitely; Pac holds STEADY to support the bridge and open Isp's gate until RESCUE latches both. No active window is required. The gaps demand controlled jumps, and a fall into slime remains a hazard and recovery cost. |
| hazards | 2 | 2 | Green-bottomed pits are visible between platforms. | Slime is active under both crossings. |
| novelty | 2 | 2 | Familiar crate, brake, and steady ideas appear recombined with the visible cycle. | Earlier cargo-held pad, ferry, and steady bridge are combined in a new order. |
| recovery cost | unknown | 3 | No fall, crate mistake, or reset was witnessed. | Falling into slime resets cargo placement and crossing sequence. |
| solution clarity | 2 | 2 | Pad labels clarify local jobs, though their exact ordering requires testing. | BRAKE, STEADY, and RESCUE labels are visible, though their sequencing takes one test. |
| control friction | unknown | unknown | No controls were exercised in the idle packet; input reliability is unknown. | Source and scripted ordinary input do not verify two-human shared-keyboard comfort or simultaneous key reliability. |

## Evidence and learning

First packet: [docs/difficulty_observations/level_12.json](../difficulty_observations/level_12.json) (SHA-256 `ed8f278d09811f8e2753a3f60d4a6e836536e4aa2c433cbee3642ab6b7290502`, json:captures\[0\].visible_text: Current packet identifies title, position, visible DOM text, and idle method.); [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Idle screenshot at capture 1.); [docs/difficulty_observations/level_12_2.png](../difficulty_observations/level_12_2.png) (SHA-256 `e66c3b76a4add06722a88c83497fb0fd2ee1fc99495acf4febd364a57321ef15`, image:whole: Idle screenshot at capture 2.); [docs/difficulty_observations/level_12_3.png](../difficulty_observations/level_12_3.png) (SHA-256 `f8cd12834dcf06159bda8e31371b1f47c60b332457bb62be3008711b149b9651`, image:whole: Idle screenshot at capture 3.).

Source: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).

First encounter prior knowledge:

- Both heroes reach their matching exits: previously_introduced in level_02. [docs/difficulty_observations/level_02_1.png](../difficulty_observations/level_02_1.png) (SHA-256 `490297c6968b5d1a52b8746cccf84e2ebd5863c94e4543cc6edef978b60e9cae`, image:whole: First room displays both exits and both-exit instruction.)
- Isp blue pad stops moving machinery: previously_introduced in level_03. [docs/difficulty_observations/level_03_1.png](../difficulty_observations/level_03_1.png) (SHA-256 `1eadd84a8d1e1733b1beea64afcf84b59cd631d1ab425e999a12e7cc3f4b9fbb`, image:whole: Earlier ferry room displays ISP STOP beside the moving ferry.)
- Pac orange pad steadies a bridge: previously_introduced in level_04. [docs/difficulty_observations/level_04_1.png](../difficulty_observations/level_04_1.png) (SHA-256 `81ada9eea277d94fa852f32167923a5818712854109da124f55ee0aa5a45ec6f`, image:whole: Earlier bridge room displays PAC STEADY before a span.)
- Cargo can activate a marked pad: previously_introduced in level_08. [docs/difficulty_observations/level_08_1.png](../difficulty_observations/level_08_1.png) (SHA-256 `65f4b05c3bba2cfcb8236b57d0c4187a9ce805fbc2153717ac34398c77f046f2`, image:whole: Earlier room displays a crate and ANY PARK pad.)
- Glucose-linked machinery may require a separate trigger: previously_introduced in level_01. [docs/difficulty_observations/level_01_1.png](../difficulty_observations/level_01_1.png) (SHA-256 `e25e01e332c10ebc8f9ab45de287c36cfd14fc0e193b873705d02d4bea4492e2`, image:whole: Earlier room displays PAC RESTORE and NO POWER lift.)
- Split colored lanes with remote handoffs: previously_introduced in level_11. [docs/difficulty_observations/level_11_1.png](../difficulty_observations/level_11_1.png) (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Earlier Split Decision view shows separated blue and orange controls.)
- Team marked heavy crate action: previously_introduced in level_09. [docs/difficulty_observations/level_09_1.png](../difficulty_observations/level_09_1.png) (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Earlier Two Tons view shows crate and ANY TEAM x2.)
- Rider on each deck clutch: previously_introduced in level_23. [docs/difficulty_observations/level_23_1.png](../difficulty_observations/level_23_1.png) (SHA-256 `197a3c68310f25a27cfef4be878b6532669b7bf3c8e51feb3d8e93fae735681c`, image:whole: Earlier Cargo Exchange view displays WAIT FOR BOTH board.)
- Current room-specific arrangement: new. [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.)

Source-checked prior knowledge:

- both matching exits: previously_introduced in level_02. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:101-145: Earlier 02 defines both matching exits.)
- Isp hold pad brakes a ferry and opens Pac gate: previously_introduced in level_03. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:180-209: Earlier 03 defines Isp hold pad brakes a ferry and opens Pac gate.)
- Pac steady pad supports bridge: previously_introduced in level_04. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:250-293: Earlier 04 defines Pac steady pad supports bridge.)
- Pac latch can restore powered lift: previously_introduced in level_01. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:39-60: Earlier 01 defines Pac latch can restore powered lift.)
- ordinary crate holds any-body pad: previously_introduced in level_08. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:212-228: Earlier 08 defines ordinary crate holds any-body pad.)
- Pac steady supports a bridge and powers a second ferry: previously_introduced in level_07. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:159-177: Earlier 07 defines Pac steady supports a bridge and powers a second ferry.)
- split color lanes with cross-opening latches: previously_introduced in level_11. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:342-350: Earlier 11 defines split color lanes with cross-opening latches.)
- two-person heavy crate push and weight-two pad: previously_introduced in level_09. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:261-277: Earlier 09 defines two-person heavy crate push and weight-two pad.)
- paired rider-gated counterweight decks: previously_introduced in level_23. [src/level_counterweight.ts](../../src/level_counterweight.ts) (SHA-256 `d200dc05c3a01510939a545849c3310398ed262d31777c151903b09943f38093`, lines:69-74: Earlier 23 defines paired rider-gated counterweight decks.)
- current arrangement of familiar controls: new. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current room combines the listed mechanics.)

## First encounter

- **both**: Move crate to brake; Push visible crate toward ANY BRAKE and use the moving platform.. Expected: Platform pauses or repositions.. Seen: unknown. Issue: unknown. [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Crate and ANY BRAKE are on starting side of moving platform.)
- **pac**: Steady bridge; Cross to PAC STEADY and activate it.. Expected: DNA bridge remains available.. Seen: unknown. Issue: unknown. [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: PAC STEADY is beside the bridge.)
- **isp**: Clear final blue wall; Cross the bridge and use ISP control near exits.. Expected: Final blue barrier opens.. Seen: unknown. Issue: unknown. [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Blue wall and ISP control precede exits.)
- **both**: Use timed machinery and exit; Coordinate across the timed span to matching exits.. Expected: Both exits register arrival.. Seen: unknown. Issue: unknown. [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Two exits appear beyond timed machinery.)

Wrong turns:

- Cross before Pac steadies the bridge is a plausible guess, not an observed mistake.

Unknowns:

- No keys were pressed or human play observed; all actions and response predictions are hypotheses.
- Mandatory legal route, collision behavior, and recoverability are unverified.
- Control reliability and shared-keyboard friction cannot be tested from idle frames.

## Source-checked account

- The authored controls and geometry define the mandatory dependencies. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.)
- The cycle pauses movement, while pad power can override it. [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:7-15: Power cycle provides a periodic motor supply.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:66-83: Active pads override power and motor states.)

Isp: Latch rescue: Cross while supported and touch RESCUE.. Pac: Secure bridge: Cross to island and hold STEADY..

**mandatory both-exit route** (mandatory both exits):

- **both**: Set ferry brake; Push ordinary cargo onto BRAKE; board the powered, stopped ferry.. Expected: Ferry powers and stops; Pac island gate opens.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.)
- **pac**: Secure bridge; Cross to island and hold STEADY.. Expected: Bridge stabilizes; Isp bridge gate opens.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.)
- **isp**: Latch rescue; Cross while supported and touch RESCUE.. Expected: All finish gates and bridge support remain latched.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.)
- **both**: Finish; Pac follows and both enter matching exits.. Expected: Both exits register.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.)

Evidence: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

Common mistakes and recovery:

- Leave cargo short of BRAKE Consequence: Ferry is still cycling and Pac gate remains closed. Recovery: Reposition cargo on BRAKE, then board. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:378-392: Mechanic supports the consequence and recovery.)
- Leave STEADY before Isp reaches RESCUE Consequence: Bridge can collapse and a fall into slime kills. Recovery: Return Pac to STEADY; if killed, retry and repeat setup. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:375-395: Mechanic supports the consequence and recovery.)

Optional collectibles: Cargo-blue and island-orange sparks are optional..

One operator: One operator must coordinate Pac holding STEADY while moving Isp across; two people can separate those roles.

## Causal comparison

- confirmed: The first pass identified cargo brake, bridge support, and rescue.
- missed mechanics: BRAKE simultaneously powers/stops the ferry and opens Pac gate; RESCUE latches all later effects.
- incorrect inferences: The first pass overestimated the 5/3 ferry cycle as several pressured windows; cargo held on BRAKE overrides it. Pac can keep STEADY active until Isp latches RESCUE, so bridge collapse after an avoidable early release is not a mandatory timing window.
- changed judgments: Timing falls from 3 to 0: the mandatory route has no active window because BRAKE and STEADY can be held indefinitely. Execution remains 3 for the controlled crossings, hazards remain 2 for slime exposure, and recovery remains 3 after a fatal fall resets setup.
- unresolved: Human ability to infer BRAKE from the label remains unmeasured.

- reasoning evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).
- cooperation evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).
- execution evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).
- timing evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:43-83: Held pads remain active and override motor, power, and bridge stabilization.).
- hazards evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:188-210: Slime contact causes death.).
- novelty evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).
- recovery_cost evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).
- solution_clarity evidence: first [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible state and layout for this room.); final [docs/difficulty_observations/level_12_1.png](../difficulty_observations/level_12_1.png) (SHA-256 `369ca4362a4532cbde600d589dfaf8fa1ff0c7a37490fd644aee40fa05f2cb8d`, image:whole: Initial visible labels and positions inform unassisted clarity.); [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:361-400: Current authored room definition establishes geometry, controls and exits.).
- control friction evidence: first [docs/difficulty_observations/level_12.json](../difficulty_observations/level_12.json) (SHA-256 `ed8f278d09811f8e2753a3f60d4a6e836536e4aa2c433cbee3642ab6b7290502`, json:captures\[0\].keys: The packet lists no keys pressed.); final [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

