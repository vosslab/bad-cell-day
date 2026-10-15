# Room 9: Split Decision

[Campaign summary](../LEVEL_DIFFICULTY_REPORT.md)

**Split Decision** (`level_11`). First-pass author: /root/difficulty_blind_middle; second-pass author: /root/difficulty_blind_middle. Confidence: low -> medium.

First-pass confidence: Only three idle views and visible text are available; no player action, route, or failure was observed. Second-pass confidence: Current source and ordinary-input route evidence establish feasibility and mechanics; no novice pair was observed.

| Dimension | First | Final | First rationale | Final rationale |
| --- | ---: | ---: | --- | --- |
| reasoning | 3 | 3 | Separate lanes and two color-specific barriers suggest several ordered handoffs. | BLUE first opens Pac access to ORANGE; ORANGE then opens Isp final gate. |
| cooperation | 3 | 3 | The blue and orange pads appear to assign distinct tasks to the two heroes. | Each hero must perform a distinct latch in an ordered reciprocal handoff. |
| execution | 2 | 2 | A raised platform and split heights suggest several jumps and placements. | Isp boards a small moving step; Pac traverses lower lane. |
| timing | 2 | 1 | Five-on/three-off dialogue and moving platform suggest a readable cycle, but traversal was not observed. | The 5/3 power cycle pauses a solid step; waiting is safe and repeatable. |
| hazards | unknown | 0 | The idle frames do not establish which gaps or barriers are lethal or mandatory. | No hazards are defined and the floor catches the route. |
| novelty | 2 | 2 | The previously shown pads appear recombined across separate lanes. | Earlier pads and ferry concepts are transferred into split lanes. |
| recovery cost | unknown | 1 | No failed action or reset was observed. | A missed step can be retried from the continuous safe floor; latches persist. |
| solution clarity | 2 | 2 | Pad labels aid discovery, but connections across the split lanes need testing. | BLUE and ORANGE labels are visible, but their cross-opening relationship needs testing. |
| control friction | unknown | unknown | No controls were exercised in the idle packet; input reliability is unknown. | Source and scripted ordinary input do not verify two-human shared-keyboard comfort or simultaneous key reliability. |

## Evidence and learning

First packet: [docs/difficulty_observations/level_11.json](../difficulty_observations/level_11.json) (SHA-256 `b6a5aace36abe69238def398ffdeb1533f8361c15bce20eaed1108071832aa12`, json:captures\[0\].visible_text: Current packet identifies title, position, visible DOM text, and idle method.); `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Idle screenshot at capture 1.); `docs/difficulty_observations/level_11_2.png` (SHA-256 `939c2a10f94cb230c7e7e7d4df462f0e32169ba177e375ae835e7a6670759ef7`, image:whole: Idle screenshot at capture 2.); `docs/difficulty_observations/level_11_3.png` (SHA-256 `f0dd9e666b8fe602d70a0f8423c36753e0cb95b5abee64813b0191635dea3713`, image:whole: Idle screenshot at capture 3.).

Source: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).

First encounter prior knowledge:

- Both heroes reach their matching exits: previously_introduced in level_02. `docs/difficulty_observations/level_02_1.png` (SHA-256 `490297c6968b5d1a52b8746cccf84e2ebd5863c94e4543cc6edef978b60e9cae`, image:whole: First room displays both exits and both-exit instruction.)
- Isp blue pad stops moving machinery: previously_introduced in level_03. `docs/difficulty_observations/level_03_1.png` (SHA-256 `1eadd84a8d1e1733b1beea64afcf84b59cd631d1ab425e999a12e7cc3f4b9fbb`, image:whole: Earlier ferry room displays ISP STOP beside the moving ferry.)
- Pac orange pad steadies a bridge: previously_introduced in level_04. `docs/difficulty_observations/level_04_1.png` (SHA-256 `81ada9eea277d94fa852f32167923a5818712854109da124f55ee0aa5a45ec6f`, image:whole: Earlier bridge room displays PAC STEADY before a span.)
- Cargo can activate a marked pad: previously_introduced in level_08. `docs/difficulty_observations/level_08_1.png` (SHA-256 `65f4b05c3bba2cfcb8236b57d0c4187a9ce805fbc2153717ac34398c77f046f2`, image:whole: Earlier room displays a crate and ANY PARK pad.)
- Glucose-linked machinery may require a separate trigger: previously_introduced in level_01. `docs/difficulty_observations/level_01_1.png` (SHA-256 `e25e01e332c10ebc8f9ab45de287c36cfd14fc0e193b873705d02d4bea4492e2`, image:whole: Earlier room displays PAC RESTORE and NO POWER lift.)
- Current room-specific arrangement: new. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.)

Source-checked prior knowledge:

- both matching exits: previously_introduced in level_02. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:101-145: Earlier 02 defines both matching exits.)
- Isp hold pad brakes a ferry and opens Pac gate: previously_introduced in level_03. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:180-209: Earlier 03 defines Isp hold pad brakes a ferry and opens Pac gate.)
- Pac steady pad supports bridge: previously_introduced in level_04. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:250-293: Earlier 04 defines Pac steady pad supports bridge.)
- Pac latch can restore powered lift: previously_introduced in level_01. [src/levels_tutorial.ts](../../src/levels_tutorial.ts) (SHA-256 `c908c4ff194afca091ebfa39477e9003fb0aee6847bd522bab2744615fe1a00a`, lines:39-60: Earlier 01 defines Pac latch can restore powered lift.)
- ordinary crate holds any-body pad: previously_introduced in level_08. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:212-228: Earlier 08 defines ordinary crate holds any-body pad.)
- Pac steady supports a bridge and powers a second ferry: previously_introduced in level_07. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:159-177: Earlier 07 defines Pac steady supports a bridge and powers a second ferry.)
- current arrangement of familiar controls: new. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current room combines the listed mechanics.)

## First encounter

- **isp**: Open left-to-middle route; Move from start toward the visible blue lane and test the ISP BLUE pad.. Expected: Blue barrier or connected platform changes.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Blue wall, ISP BLUE pad, and start are visible.)
- **pac**: Open the orange route; Take the lower route toward PAC ORANGE and test that pad.. Expected: Orange barrier changes so the other hero can advance.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Orange wall and PAC ORANGE pad mark a separate route.)
- **both**: Reach matching exits; Coordinate through the separated lanes and head to both labeled exits.. Expected: Both exits register arrival.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Matching exits sit together at far right.)

Wrong turns:

- Could both heroes simply take the same lower path? This is a plausible first hypothesis, not an observed mistake.

Unknowns:

- No keys were pressed or human play observed; all actions and response predictions are hypotheses.
- Mandatory legal route, collision behavior, and recoverability are unverified.
- Control reliability and shared-keyboard friction cannot be tested from idle frames.

## Source-checked account

- The authored controls and geometry define the mandatory dependencies. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.)
- The cycle pauses movement, while pad power can override it. [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:7-15: Power cycle provides a periodic motor supply.); [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:66-83: Active pads override power and motor states.)

Isp: Reach BLUE: Use the short cyclic step to climb to the upper lane; stand on BLUE latch.. Pac: Reach ORANGE: Take the lower lane and stand on ORANGE latch..

**mandatory both-exit route** (mandatory both exits):

- **isp**: Reach BLUE; Use the short cyclic step to climb to the upper lane; stand on BLUE latch.. Expected: Orange lane gate opens and step is powered.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.)
- **pac**: Reach ORANGE; Take the lower lane and stand on ORANGE latch.. Expected: Blue lane gate opens and step is powered.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.)
- **both**: Exit; Move through the now-open cross gates and reach matching exits.. Expected: Both exits register.. Seen: unknown. Issue: none. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.)

Evidence: [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

Common mistakes and recovery:

- Trying Pac on the upper lane Consequence: Pac-specific upper color wall blocks progress. Recovery: Use the lower ORANGE lane. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:346-350: Mechanic supports the consequence and recovery.)
- Missing the step during its pause Consequence: Step stops moving but remains solid; no death. Recovery: Wait for power or use either latch to power it. [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:334-345: Mechanic supports the consequence and recovery.)

Optional collectibles: Upper-blue and lower-orange sparks are optional and owner-specific..

One operator: A single operator must alternate WASD and arrow controls for separate lanes; two people can each own one hero.

## Causal comparison

- confirmed: Blue and orange pads are indeed separate tasks; both exits are at right.
- missed mechanics: Each latch opens the opposite route and restores step power; no slime is present.
- incorrect inferences: The first pass treated the moving step as a substantial timed window; it is a safe 5/3 pause.
- changed judgments: Reasoning and cooperation remain 3 because BLUE then ORANGE is an ordered reciprocal dependency; timing falls to 1 and hazards become 0 after source inspection.
- unresolved: Human discovery of the cross-opening relationship remains unmeasured.

- reasoning evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- cooperation evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- execution evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- timing evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- hazards evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- novelty evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- recovery_cost evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- solution_clarity evidence: first `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible state and layout for this room.); final `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Initial visible labels and positions inform unassisted clarity.); [src/levels_middle.ts](../../src/levels_middle.ts) (SHA-256 `6acd5180f5e5e44e5269c4db1f9f8982172e193d3d583f93ece7641e89d1505f`, lines:326-358: Current authored room definition establishes geometry, controls and exits.).
- control friction evidence: first [docs/difficulty_observations/level_11.json](../difficulty_observations/level_11.json) (SHA-256 `b6a5aace36abe69238def398ffdeb1533f8361c15bce20eaed1108071832aa12`, json:captures\[0\].keys: The packet lists no keys pressed.); final [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

