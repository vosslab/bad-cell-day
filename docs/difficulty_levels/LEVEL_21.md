# Room 14: Across the Divide

[Campaign summary](../LEVEL_DIFFICULTY_REPORT.md)

**Across the Divide** (`level_21`). First-pass author: /root/difficulty_blind_middle; second-pass author: /root/difficulty_blind_middle. Confidence: low -> medium.

First-pass confidence: Only three idle views and visible text are available; no player action, route, or failure was observed. Second-pass confidence: Current source and ordinary-input route evidence establish feasibility and mechanics; no novice pair was observed.

| Dimension | First | Final | First rationale | Final rationale |
| --- | ---: | ---: | --- | --- |
| reasoning | 4 | 4 | Separate floors, two blue and two orange controls, and a powered lift suggest interleaved dependencies. | ROUTE-LIFT-LINK-HOME has four ordered reciprocal dependencies. |
| cooperation | 4 | 4 | Separated starts appear to require alternating each hero's remote opening. | Each hero repeatedly enables the other, including a temporary lift hold. |
| execution | 2 | 2 | Upper and lower ledges imply jumps and transfers, though precise margins are unknown. | Three moderate jumps and one lift transfer; catch shelf allows retry. |
| timing | unknown | 1 | Idle frames do not prove a mandatory timed window for the lift. | Powered lift can pause safely; no time limit or narrow window. |
| hazards | unknown | 0 | No route action establishes required danger exposure. | No hazards are defined and missed jumps land on catch shelf. |
| novelty | 3 | 3 | Prior colored controls are recombined across separate floors with reciprocal opening. | Earlier color pads and lift become a four-stage separate-floor relay. |
| recovery cost | unknown | 1 | Reversibility and reset costs are unobserved. | Closed gates and catch shelf allow safe local retry; latches persist. |
| solution clarity | 3 | 2 | Labels identify local destinations but do not show the full remote dependency chain. | ROUTE, LIFT, LINK, HOME labels and separated lanes give useful order cues, though remote effects need testing. |
| control friction | unknown | unknown | No controls were exercised in the idle packet; input reliability is unknown. | Source and scripted ordinary input do not verify two-human shared-keyboard comfort or simultaneous key reliability. |

## Evidence and learning

First packet: [docs/difficulty_observations/level_21.json](../difficulty_observations/level_21.json) (SHA-256 `909f4263bcb1a5978911adcb8e47be46a039e7728d4fd427e7107a9454e109a9`, json:captures\[0\].visible_text: Current packet identifies title, position, visible DOM text, and idle method.); `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Idle screenshot at capture 1.); `docs/difficulty_observations/level_21_2.png` (SHA-256 `a94fa8a5cf20955b9ccf9e5a22b87918f51304d521c146ec18511574e577539c`, image:whole: Idle screenshot at capture 2.); `docs/difficulty_observations/level_21_3.png` (SHA-256 `0e4cd5fbb4e35070dc45bbc531a8a433331730d82b63dbc0eec7452f1a59605f`, image:whole: Idle screenshot at capture 3.).

Source: [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).

First encounter prior knowledge:

- Both heroes reach their matching exits: previously_introduced in level_02. `docs/difficulty_observations/level_02_1.png` (SHA-256 `490297c6968b5d1a52b8746cccf84e2ebd5863c94e4543cc6edef978b60e9cae`, image:whole: First room displays both exits and both-exit instruction.)
- Isp blue pad stops moving machinery: previously_introduced in level_03. `docs/difficulty_observations/level_03_1.png` (SHA-256 `1eadd84a8d1e1733b1beea64afcf84b59cd631d1ab425e999a12e7cc3f4b9fbb`, image:whole: Earlier ferry room displays ISP STOP beside the moving ferry.)
- Pac orange pad steadies a bridge: previously_introduced in level_04. `docs/difficulty_observations/level_04_1.png` (SHA-256 `81ada9eea277d94fa852f32167923a5818712854109da124f55ee0aa5a45ec6f`, image:whole: Earlier bridge room displays PAC STEADY before a span.)
- Cargo can activate a marked pad: previously_introduced in level_08. `docs/difficulty_observations/level_08_1.png` (SHA-256 `65f4b05c3bba2cfcb8236b57d0c4187a9ce805fbc2153717ac34398c77f046f2`, image:whole: Earlier room displays a crate and ANY PARK pad.)
- Glucose-linked machinery may require a separate trigger: previously_introduced in level_01. `docs/difficulty_observations/level_01_1.png` (SHA-256 `e25e01e332c10ebc8f9ab45de287c36cfd14fc0e193b873705d02d4bea4492e2`, image:whole: Earlier room displays PAC RESTORE and NO POWER lift.)
- Split colored lanes with remote handoffs: previously_introduced in level_11. `docs/difficulty_observations/level_11_1.png` (SHA-256 `1515e681fc1d44fb2307332a63d0802ba6729de14e46a1fe43463e53563b1a75`, image:whole: Earlier Split Decision view shows separated blue and orange controls.)
- Team marked heavy crate action: previously_introduced in level_09. `docs/difficulty_observations/level_09_1.png` (SHA-256 `4f7f63e37f04f232bf84e588bcf4acf88e197ffda75189b1d5e6d3e807a0ffb3`, image:whole: Earlier Two Tons view shows crate and ANY TEAM x2.)
- Rider on each deck clutch: previously_introduced in level_23. `docs/difficulty_observations/level_23_1.png` (SHA-256 `197a3c68310f25a27cfef4be878b6532669b7bf3c8e51feb3d8e93fae735681c`, image:whole: Earlier Cargo Exchange view displays WAIT FOR BOTH board.)
- Current room-specific arrangement: new. `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.)

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
- four-pad reciprocal relay across separate floors: new. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:63-85: Current room defines the relay sequence.)

## First encounter

- **isp**: Open upper route; Move along upper lane to ISP ROUTE and test the blue control.. Expected: A blue barrier or lift changes.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Isp starts upper left near ISP ROUTE.)
- **pac**: Open lower lane; Move along lower lane to PAC LIFT and then PAC HOME.. Expected: Orange barriers or lift respond.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Pac starts below; PAC LIFT and PAC HOME are visible.)
- **both**: Trade openings across floors; Alternate activation of the colored link controls as each advances.. Expected: Each hero gains the next segment.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Separate levels have ISP LINK and PAC HOME labels.)
- **both**: Reach both exits; Finish on right in the respective matching exits.. Expected: Both exits register arrival.. Seen: unknown. Issue: unknown. `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Matching exits sit at lower right.)

Wrong turns:

- Attempting to move only one hero to the exit is a plausible first hypothesis, not an observed player mistake.

Unknowns:

- No keys were pressed or human play observed; all actions and response predictions are hypotheses.
- Mandatory legal route, collision behavior, and recoverability are unverified.
- Control reliability and shared-keyboard friction cannot be tested from idle frames.

## Source-checked account

- The authored controls and geometry define the mandatory dependencies. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.)
- Hold pads support machinery until a far latch preserves the route. [src/mechanisms.ts](../../src/mechanisms.ts) (SHA-256 `b1ff54feafe6abe495a9ef7944c7fd0ec3f702ec8c071d3eb0340783fb215b6b`, lines:55-83: Hold and latch effects drive motor, bridge, and doors.)

Isp: Open Pac route: Jump the upper hurdle to ROUTE latch.; Preserve lift and free Pac: Board lift, ride up, jump to LINK latch.. Pac: Power Isp lift: Move through gate, jump to lower step, hold LIFT.; Open final Isp wall: Leave LIFT, jump to HOME latch..

**mandatory both-exit route** (mandatory both exits):

- **isp**: Open Pac route; Jump the upper hurdle to ROUTE latch.. Expected: Pac lower route gate opens.. Seen: unknown. Issue: none. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:23-37: Ordinary-input split relay route reaches both exits.)
- **pac**: Power Isp lift; Move through gate, jump to lower step, hold LIFT.. Expected: Lift powers and Isp landing gate opens.. Seen: unknown. Issue: none. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:23-37: Ordinary-input split relay route reaches both exits.)
- **isp**: Preserve lift and free Pac; Board lift, ride up, jump to LINK latch.. Expected: Lift/landing remain powered; Pac link gate opens.. Seen: unknown. Issue: none. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:23-37: Ordinary-input split relay route reaches both exits.)
- **pac**: Open final Isp wall; Leave LIFT, jump to HOME latch.. Expected: Isp final wall opens.. Seen: unknown. Issue: none. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:23-37: Ordinary-input split relay route reaches both exits.)
- **both**: Finish; Isp drops to exit floor; both reach matching exits.. Expected: Both exits register.. Seen: unknown. Issue: none. [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:23-37: Ordinary-input split relay route reaches both exits.)

Evidence: [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:23-37: Ordinary-input split relay route reaches both exits.).

Common mistakes and recovery:

- Pac leaves LIFT before Isp reaches LINK Consequence: Lift freezes at current safe position. Recovery: Return Pac to LIFT; after LINK it stays powered. [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:41-47: Ordinary-input probe supports this mistake and recovery.)
- Isp misses lift or landing jump Consequence: Isp lands on catch shelf rather than dying. Recovery: Walk to notch and jump back to upper rail, then retry. [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:45-57: Ordinary-input probe supports this mistake and recovery.)

Optional collectibles: Four owner-specific collectibles require side hops but are not needed for both exits..

One operator: One operator must hold Pac at LIFT while moving Isp through lift and LINK; two people can maintain those roles directly.

## Causal comparison

- confirmed: The first pass predicted alternating color-pad openings and separate floors.
- missed mechanics: ROUTE, LIFT, LINK, HOME are an exact four-step relay; LINK permanently replaces Pac holding LIFT.
- incorrect inferences: The first pass assumed both heroes would trade openings several times but did not know the temporary LIFT-to-LINK handoff or safe catch shelf.
- changed judgments: Timing and hazards become 1 and 0; recovery becomes 1 because misses are caught; clarity falls from 3 to 2 using the visible ordered labels and earlier pad lessons.
- unresolved: Novice understanding of the remote latch effects remains unmeasured.

- reasoning evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- cooperation evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- execution evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- timing evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- hazards evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- novelty evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- recovery_cost evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.); [docs/active_plans/reports/split_relay_routes.md](../active_plans/reports/split_relay_routes.md) (SHA-256 `201e73f58b16e02403bc32254de521665fd8497546a404f15373f6af82421249`, lines:39-47: Ordinary-input recovery probes document safe retry.).
- solution_clarity evidence: first `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible state and layout for this room.); final `docs/difficulty_observations/level_21_1.png` (SHA-256 `8f64f4b5b99c99d0b17e4a27813d6025888d41679520d134935f879f06e47f27`, image:whole: Initial visible labels and positions inform unassisted clarity.); [src/level_split_relay.ts](../../src/level_split_relay.ts) (SHA-256 `ad62c689fd1577b6ed860dae0e17d390c604564a24464e7f357af1e4d95a4fd9`, lines:43-96: Current authored room definition establishes geometry, controls and exits.).
- control friction evidence: first [docs/difficulty_observations/level_21.json](../difficulty_observations/level_21.json) (SHA-256 `909f4263bcb1a5978911adcb8e47be46a039e7728d4fd427e7107a9454e109a9`, json:captures\[0\].keys: The packet lists no keys pressed.); final [docs/active_plans/reports/active_villains_campaign.md](../active_plans/reports/active_villains_campaign.md) (SHA-256 `3cfd25bc0652aa97fc2a4f33ac6cca54bf2cb4b8da788255113a1035e6041bb8`, lines:43-53: Current full-campaign browser completion used ordinary keyboard input.).

