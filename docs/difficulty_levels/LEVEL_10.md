# Room 11: Elevator Etiquette

[Campaign summary](../LEVEL_DIFFICULTY_REPORT.md)

**Elevator Etiquette** (`level_10`). First-pass author: /root/difficulty_blind_middle; second-pass author: /root/difficulty_blind_middle. Confidence: low -> medium.

First-pass confidence: Only three idle views and visible text are available; no player action, route, or failure was observed. Second-pass confidence: Current source and ordinary-input route evidence establish feasibility and mechanics; no novice pair was observed.

| Dimension | First | Final | First rationale | Final rationale |
| --- | ---: | ---: | --- | --- |
| reasoning | 3 | 3 | Two blue barriers, brake, bridge, and upper deck suggest ordered dependencies. | Lift STOP, Pac landing, STEADY, and Isp RESCUE form an ordered handoff. |
| cooperation | 3 | 3 | Isp brake and Pac bridge pad appear to require distinct roles. | Each partner holds a temporary support until the other latches rescue. |
| execution | 3 | 3 | The upper deck, elevator, and narrow bridge imply several controlled transfers. | Upper lift transfer and narrow bridge require several jumps and placements. |
| timing | 2 | 2 | Moving start lift offers a repeatable positioning challenge; active window is unverified. | The lift is repeatable and brakeable; bridge needs support before 0.8-second collapse. |
| hazards | 2 | 2 | Two green-bottomed gaps are visible in the apparent route. | Slime lies under lift gap and bridge; safe boarding exists. |
| novelty | 2 | 2 | Previously seen ferry brake and steady bridge appear stacked vertically. | Known brake and bridge lessons are stacked vertically. |
| recovery cost | unknown | 3 | Fall consequence and checkpoint location are unseen. | A slime fall resets the room and repeats the lift and support handoff. |
| solution clarity | 2 | 2 | Brake-before-boarding text gives an order, while upper transfer needs testing. | The visible brake-before-boarding text and pad labels cue the order, with the transfer to test. |
| control friction | unknown | unknown | No controls were exercised in the idle packet; input reliability is unknown. | Source and scripted ordinary input do not verify two-human shared-keyboard comfort or simultaneous key reliability. |

## Evidence and learning

First packet: [docs/difficulty_observations/level_10.json](../difficulty_observations/level_10.json) (SHA-256 `7565ab2956d0d736f13bfc50831f150513a23d423e261b9839e56858748d13ff`, json:captures\[0\].visible_text: Current packet identifies title, position, visible DOM text, and idle method.); `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Idle screenshot at capture 1.); `docs/difficulty_observations/level_10_2.png` (SHA-256 `03812c839b64d6a59645348777bf1c4d5ce35e275ca18f9b2cd77cd17ba5946b`, image:whole: Idle screenshot at capture 2.); `docs/difficulty_observations/level_10_3.png` (SHA-256 `32b827f11f7c67185f002c30f728cf06fe19259df9f9abe42a92c9144d6996a8`, image:whole: Idle screenshot at capture 3.).

Source: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).

First encounter prior knowledge:

- Both heroes reach their matching exits: previously_introduced in level_02. `docs/difficulty_observations/level_02_1.png` (SHA-256 `490297c6968b5d1a52b8746cccf84e2ebd5863c94e4543cc6edef978b60e9cae`, image:whole: First room displays both exits and both-exit instruction.)
- Isp blue pad stops moving machinery: previously_introduced in level_03. `docs/difficulty_observations/level_03_1.png` (SHA-256 `1eadd84a8d1e1733b1beea64afcf84b59cd631d1ab425e999a12e7cc3f4b9fbb`, image:whole: Earlier ferry room displays ISP STOP beside the moving ferry.)
- Pac orange pad steadies a bridge: previously_introduced in level_04. `docs/difficulty_observations/level_04_1.png` (SHA-256 `81ada9eea277d94fa852f32167923a5818712854109da124f55ee0aa5a45ec6f`, image:whole: Earlier bridge room displays PAC STEADY before a span.)
- Cargo can activate a marked pad: previously_introduced in level_08. `docs/difficulty_observations/level_08_1.png` (SHA-256 `65f4b05c3bba2cfcb8236b57d0c4187a9ce805fbc2153717ac34398c77f046f2`, image:whole: Earlier room displays a crate and ANY PARK pad.)
- Glucose-linked machinery may require a separate trigger: previously_introduced in level_01. `docs/difficulty_observations/level_01_1.png` (SHA-256 `e25e01e332c10ebc8f9ab45de287c36cfd14fc0e193b873705d02d4bea4492e2`, image:whole: Earlier room displays PAC RESTORE and NO POWER lift.)
- Split colored lanes with remote handoffs: previously_introduced in level_11. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Earlier Split Decision view shows separated blue and orange controls.)
- Team marked heavy crate action: previously_introduced in level_09. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Earlier Two Tons view shows crate and ANY TEAM x2.)
- Current room-specific arrangement: new. `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.)

Source-checked prior knowledge:

- both matching exits: previously_introduced in level_02. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:101-145: Earlier 02 defines both matching exits.)
- Isp hold pad brakes a ferry and opens Pac gate: previously_introduced in level_03. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:180-209: Earlier 03 defines Isp hold pad brakes a ferry and opens Pac gate.)
- Pac steady pad supports bridge: previously_introduced in level_04. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:250-293: Earlier 04 defines Pac steady pad supports bridge.)
- Pac latch can restore powered lift: previously_introduced in level_01. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:39-60: Earlier 01 defines Pac latch can restore powered lift.)
- ordinary crate holds any-body pad: previously_introduced in level_08. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:212-228: Earlier 08 defines ordinary crate holds any-body pad.)
- Pac steady supports a bridge and powers a second ferry: previously_introduced in level_07. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:159-177: Earlier 07 defines Pac steady supports a bridge and powers a second ferry.)
- split color lanes with cross-opening latches: previously_introduced in level_11. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:342-350: Earlier 11 defines split color lanes with cross-opening latches.)
- two-person heavy crate push and weight-two pad: previously_introduced in level_09. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:261-277: Earlier 09 defines two-person heavy crate push and weight-two pad.)
- current arrangement of familiar controls: new. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current room combines the listed mechanics.)

## First encounter

- **isp**: Brake first lift; Stay on or move onto ISP STOP and watch the elevator position.. Expected: Moving elevator pauses for boarding.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Both heroes start on STOP lift near ISP STOP.)
- **pac**: Steady bridge at upper deck; Ride or jump to PAC STEADY and activate it.. Expected: Upper bridge remains crossable.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: PAC STEADY is on upper middle deck beside bridge.)
- **isp**: Clear blue finish barrier; Use the visible ISP control by the exits after crossing.. Expected: Blue barrier opens.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Second blue wall and ISP control are visible near exits.)
- **both**: Reach matching exits; Coordinate final bridge and move both heroes to exits.. Expected: Both exits register arrival.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Two exits are visible at right.)

Wrong turns:

- Rush off the elevator before braking is a plausible plan, not an observed player error.

Unknowns:

- No keys were pressed or human play observed; all actions and response predictions are hypotheses.
- Mandatory legal route, collision behavior, and recoverability are unverified.
- Control reliability and shared-keyboard friction cannot be tested from idle frames.

## Source-checked account

- The authored controls and geometry define the mandatory dependencies. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.)
- Hold pads support machinery until a far latch preserves the route. [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:55-83: Hold and latch effects drive motor, bridge, and doors.)

Isp: Rescue and release: Isp reaches far RESCUE latch.. Pac: Support bridge: Pac holds STEADY on upper landing while Isp crosses..

**mandatory both-exit route** (mandatory both exits):

- **both**: Reach upper landing; Ride the lift together; near its high position Isp holds attached STOP while Pac hops to landing.. Expected: Lift brakes and Pac landing gate opens.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.)
- **pac**: Support bridge; Pac holds STEADY on upper landing while Isp crosses.. Expected: Bridge stays solid and Isp bridge gate opens.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.)
- **isp**: Rescue and release; Isp reaches far RESCUE latch.. Expected: Bridge and all landing/finish gates stay open.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.)
- **both**: Finish; Pac follows over supported bridge; both enter exits.. Expected: Both exits register.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.)

Evidence: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

Common mistakes and recovery:

- Pac jumps before Isp brakes the lift Consequence: The lift may move away and the transfer can fail into slime. Recovery: Wait for a safer lift position; if killed, retry the room. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:291-317: Mechanic supports the consequence and recovery.)
- Pac releases STEADY after Isp enters the bridge, before RESCUE is latched Consequence: The unsupported bridge can collapse under Isp. Recovery: Pac returns to STEADY to stabilize the bridge; retry after a fatal fall. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:294-317: Mechanic supports the consequence and recovery.)

Optional collectibles: Lift-blue and landing-orange sparks are optional..

One operator: One operator must keep Isp on attached STOP while timing Pac travel; two people can coordinate verbally.

## Causal comparison

- confirmed: The first pass anticipated brake, bridge support, and final rescue.
- missed mechanics: STOP is attached to the moving lift and opens Pac landing; RESCUE permanently stabilizes the bridge and doors.
- incorrect inferences: A second independent blue wall was inferred from the image; the actual last blue control is the RESCUE latch and no separate task.
- changed judgments: Recovery becomes 3 because both slime gaps kill and repeat the vertical sequence; timing remains moderate because the lift can be stopped.
- unresolved: Actual novice precision and recognition of the attached STOP are unknown.

- reasoning evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- cooperation evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- execution evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- timing evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- hazards evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:188-210: Slime contact causes death.).
- novelty evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- recovery_cost evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- solution_clarity evidence: first `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible state and layout for this room.); final `docs/difficulty_observations/level_10_1.png` (SHA-256 `fd2dd289a2291539b1f194254baeb63494cf2f8ad44fcea6f288fda79dbd097b`, image:whole: Initial visible labels and positions inform unassisted clarity.); [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:285-323: Current authored room definition establishes geometry, controls and exits.).
- control friction evidence: first [docs/difficulty_observations/level_10.json](../difficulty_observations/level_10.json) (SHA-256 `7565ab2956d0d736f13bfc50831f150513a23d423e261b9839e56858748d13ff`, json:captures\[0\].keys: The packet lists no keys pressed.); final [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

