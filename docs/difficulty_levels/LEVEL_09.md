# Room 10: Two Tons of Trouble

[Campaign summary](../LEVEL_DIFFICULTY_REPORT.md)

**Two Tons of Trouble** (`level_09`). First-pass author: /root/difficulty_blind_middle; second-pass author: /root/difficulty_blind_middle. Confidence: low -> medium.

First-pass confidence: Only three idle views and visible text are available; no player action, route, or failure was observed. Second-pass confidence: Current source and ordinary-input route evidence establish feasibility and mechanics; no novice pair was observed.

| Dimension | First | Final | First rationale | Final rationale |
| --- | ---: | ---: | --- | --- |
| reasoning | 3 | 3 | Team crate, ferry power, and two finish barriers imply several dependencies. | Heavy push, STOP-powered ferry, and far rescue form an ordered chain. |
| cooperation | 3 | 3 | ANY TEAM x2 suggests joint handling before distinct stop and rescue jobs. | Both must push heavy cargo, then split into brake and crossing roles. |
| execution | 2 | 2 | Crossing the broad pit appears to require riding or jumping from machinery. | Crate hop and ferry boarding require controlled movement. |
| timing | unknown | 1 | The idle frames do not reveal a mandatory active window. | Ferry motion is repeatable and STOP can hold it; no narrow active clock is defined. |
| hazards | 2 | 2 | The broad green-bottomed pit is visible, but actual damage and safe margins are untested. | Slime spans the crossing below the ferry. |
| novelty | 2 | 2 | Earlier crate pad and ferry are combined with an apparent two-person heavy action. | Heavy two-person pushing extends the earlier ordinary crate pad lesson. |
| recovery cost | unknown | 3 | Crate reset and fall recovery are not observable at idle. | A slime fall kills both and requires replaying the crate and ferry sequence. |
| solution clarity | 3 | 2 | Labels identify targets, but the route from TEAM to NO POWER is visually indirect. | TEAM x2 and STOP labels are visible; power relation becomes clear on approach. |
| control friction | unknown | unknown | No controls were exercised in the idle packet; input reliability is unknown. | Source and scripted ordinary input do not verify two-human shared-keyboard comfort or simultaneous key reliability. |

## Evidence and learning

First packet: [docs/difficulty_observations/level_09.json](../difficulty_observations/level_09.json) (SHA-256 `ad6b8171def21d3ed7845831552e7a817448b988b118f4e4f315bced9b7d9538`, json:captures\[0\].visible_text: Current packet identifies title, position, visible DOM text, and idle method.); `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Idle screenshot at capture 1.); `docs/difficulty_observations/level_09_2.png` (SHA-256 `12c7b0356ecf3c46036bcc39cf1187c2fa9e977355f79da8e74679b271743a5e`, image:whole: Idle screenshot at capture 2.); `docs/difficulty_observations/level_09_3.png` (SHA-256 `ccd489a678f76942eaecc19d23c077a3051ac38e0a1908eb6d70141ce9dbde58`, image:whole: Idle screenshot at capture 3.).

Source: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).

First encounter prior knowledge:

- Both heroes reach their matching exits: previously_introduced in level_02. `docs/difficulty_observations/level_02_1.png` (SHA-256 `490297c6968b5d1a52b8746cccf84e2ebd5863c94e4543cc6edef978b60e9cae`, image:whole: First room displays both exits and both-exit instruction.)
- Isp blue pad stops moving machinery: previously_introduced in level_03. `docs/difficulty_observations/level_03_1.png` (SHA-256 `1eadd84a8d1e1733b1beea64afcf84b59cd631d1ab425e999a12e7cc3f4b9fbb`, image:whole: Earlier ferry room displays ISP STOP beside the moving ferry.)
- Pac orange pad steadies a bridge: previously_introduced in level_04. `docs/difficulty_observations/level_04_1.png` (SHA-256 `81ada9eea277d94fa852f32167923a5818712854109da124f55ee0aa5a45ec6f`, image:whole: Earlier bridge room displays PAC STEADY before a span.)
- Cargo can activate a marked pad: previously_introduced in level_08. `docs/difficulty_observations/level_08_1.png` (SHA-256 `65f4b05c3bba2cfcb8236b57d0c4187a9ce805fbc2153717ac34398c77f046f2`, image:whole: Earlier room displays a crate and ANY PARK pad.)
- Glucose-linked machinery may require a separate trigger: previously_introduced in level_01. `docs/difficulty_observations/level_01_1.png` (SHA-256 `e25e01e332c10ebc8f9ab45de287c36cfd14fc0e193b873705d02d4bea4492e2`, image:whole: Earlier room displays PAC RESTORE and NO POWER lift.)
- Split colored lanes with remote handoffs: previously_introduced in level_11. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Earlier Split Decision view shows separated blue and orange controls.)
- Current room-specific arrangement: new. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.)

Source-checked prior knowledge:

- both matching exits: previously_introduced in level_02. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:101-145: Earlier 02 defines both matching exits.)
- Isp hold pad brakes a ferry and opens Pac gate: previously_introduced in level_03. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:180-209: Earlier 03 defines Isp hold pad brakes a ferry and opens Pac gate.)
- Pac steady pad supports bridge: previously_introduced in level_04. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:250-293: Earlier 04 defines Pac steady pad supports bridge.)
- Pac latch can restore powered lift: previously_introduced in level_01. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:39-60: Earlier 01 defines Pac latch can restore powered lift.)
- ordinary crate holds any-body pad: previously_introduced in level_08. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:212-228: Earlier 08 defines ordinary crate holds any-body pad.)
- Pac steady supports a bridge and powers a second ferry: previously_introduced in level_07. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:159-177: Earlier 07 defines Pac steady supports a bridge and powers a second ferry.)
- split color lanes with cross-opening latches: previously_introduced in level_11. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:342-350: Earlier 11 defines split color lanes with cross-opening latches.)
- current arrangement of familiar controls: new. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current room combines the listed mechanics.)

## First encounter

- **both**: Move heavy crate onto team pad; Push the marked crate together toward ANY TEAM x2.. Expected: The team pad activates and the route changes.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Crate, TEAM label, and ANY TEAM x2 pad are visible.)
- **isp**: Stop the ferry; Reach ISP STOP while the other hero prepares to cross.. Expected: Ferry pauses at a useful boarding point.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: ISP STOP is adjacent to the NO POWER ferry.)
- **pac**: Open orange finish barrier; Reach PAC RESCUE after the crossing.. Expected: Orange barrier permits travel toward exits.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: PAC RESCUE is beside the orange finish wall.)
- **both**: Finish the room; Move both heroes to their matching exits.. Expected: Both exits register arrival.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Both exits are visible at right.)

Wrong turns:

- Try one hero pushing the heavy crate alone; its failure is only a possible hypothesis, not observed feedback.

Unknowns:

- No keys were pressed or human play observed; all actions and response predictions are hypotheses.
- Mandatory legal route, collision behavior, and recoverability are unverified.
- Control reliability and shared-keyboard friction cannot be tested from idle frames.

## Source-checked account

- The authored controls and geometry define the mandatory dependencies. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.)
- The heavy crate needs two connected pushers and contributes weight two on TEAM. [src/physics.ts](../../src/physics.ts) (SHA-256 `895eb6a593e587228b84cee6a210c9cf6b8b80747c54afa4ed166288590f74e7`, lines:42-55: Heavy crate requires two helpers.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:47-57: Heavy crate weighs two on any pad.)

Isp: Power and brake ferry: Stand on STOP while Pac boards the now-powered ferry.; Finish: Follow across and both enter their exits.. Pac: Latch rescue: Ride across, reach RESCUE on far shore..

**mandatory both-exit route** (mandatory both exits):

- **both**: Open team door; Both press right together to push the heavy crate onto TEAM; hop over it.. Expected: Weight-two TEAM pad opens the shared wall.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.)
- **isp**: Power and brake ferry; Stand on STOP while Pac boards the now-powered ferry.. Expected: Ferry powers, brakes, and Pac landing gate opens.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.)
- **pac**: Latch rescue; Ride across, reach RESCUE on far shore.. Expected: Power and gates remain open after Pac leaves.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.)
- **isp**: Finish; Follow across and both enter their exits.. Expected: Both exits register.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.)

Evidence: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

Common mistakes and recovery:

- One hero pushes the heavy crate Consequence: Crate does not move. Recovery: Bring the partner into a connected pushing row and press together. [src/physics.ts](../../src/physics.ts) (SHA-256 `895eb6a593e587228b84cee6a210c9cf6b8b80747c54afa4ed166288590f74e7`, lines:42-55: Mechanic supports the consequence and recovery.)
- Walking or jumping into slime Consequence: Active slime contact kills the attempt. Recovery: Retry and repeat TEAM then STOP and crossing. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:276-277: Mechanic supports the consequence and recovery.)

Optional collectibles: Heavy-orange and brake-blue sparks are optional..

One operator: One operator must align simultaneous movement keys for the heavy crate; this is extra demand beyond the two-human score.

## Causal comparison

- confirmed: The first pass identified the heavy team crate, STOP, and RESCUE chain.
- missed mechanics: The heavy crate requires two connected pushers; STOP both powers and brakes the ferry.
- incorrect inferences: The idle view could not prove the heavy crate alone supplies two pad weights or that STOP powers the ferry.
- changed judgments: Timing becomes 1 because the brake can hold the repeatable ferry; recovery becomes 3 after confirming lethal slime and replayed setup.
- unresolved: Human success rate for the crate hop and ferry crossing is unknown.

- reasoning evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- cooperation evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- execution evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- timing evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- hazards evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:188-210: Slime contact causes death.).
- novelty evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- recovery_cost evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- solution_clarity evidence: first `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible state and layout for this room.); final `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Initial visible labels and positions inform unassisted clarity.); [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:249-282: Current authored room definition establishes geometry, controls and exits.).
- control friction evidence: first [docs/difficulty_observations/level_09.json](../difficulty_observations/level_09.json) (SHA-256 `ad6b8171def21d3ed7845831552e7a817448b988b118f4e4f315bced9b7d9538`, json:captures\[0\].keys: The packet lists no keys pressed.); final [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

