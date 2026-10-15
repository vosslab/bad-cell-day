import type { Rect } from "./types/geometry";
import type {
  BarrierDefinition,
  ExitDefinition,
  HazardDefinition,
  LevelDefinition,
  PadDefinition,
  PadEffect,
  PlatformDefinition,
} from "./types/level";
import type { PlayerId } from "./types/player";

function rect(x: number, y: number, width: number, height: number): Rect {
  return { x, y, width, height };
}

function floor(
  id: string,
  x: number,
  y: number,
  width: number,
  height = 620 - y,
): PlatformDefinition {
  return { id, kind: "static", rect: rect(x, y, width, height) };
}

function ferry(
  id: string,
  x: number,
  y: number,
  width: number,
  dx: number,
  dy = 0,
): Extract<PlatformDefinition, { kind: "moving" }> {
  return {
    id,
    kind: "moving",
    rect: rect(x, y, width, 22),
    motorized: true,
    motion: { offset: { x: dx, y: dy }, period: 8 },
  };
}

function bridge(id: string, x: number, y: number, width: number): PlatformDefinition {
  return { id, kind: "unstable", rect: rect(x, y, width, 22), collapseAfter: 0.8, resetAfter: 2 };
}

function gate(id: string, x: number, blocks: PlayerId | "both"): BarrierDefinition {
  return { id, blocks, rect: rect(x, 0, 20, 620) };
}

function door(barrierId: string): PadEffect {
  return { kind: "door", barrierId };
}

function stop(platformId: string): PadEffect {
  return { kind: "motor", platformId };
}

function power(platformId: string): PadEffect {
  return { kind: "power", platformId };
}

function steady(platformId: string): PadEffect {
  return { kind: "stabilize", platformId };
}

function pad(
  id: string,
  x: number,
  y: number,
  accepts: PlayerId | "any",
  activation: "hold" | "latch",
  effects: readonly PadEffect[],
  minWeight = 1,
): PadDefinition {
  return {
    id,
    rect: rect(x, y - 8, 85, 8),
    accepts,
    activation,
    label: id.toUpperCase(),
    minWeight,
    effects,
  };
}

function slime(x: number, width: number): HazardDefinition {
  return { id: `slime_${x}`, kind: "slime", harms: "both", rect: rect(x, 585, width, 35) };
}

function exits(y: number): readonly ExitDefinition[] {
  return [
    { player: "isp", rect: rect(950, y - 60, 42, 60) },
    { player: "pac", rect: rect(1030, y - 60, 42, 60) },
  ];
}

// Each route adds a different spatial problem while keeping switches and landings broad.
export const MIDDLE_LEVELS: readonly LevelDefinition[] = [
  {
    id: "level_06",
    title: "Narrow Escape",
    subtitle: "Please pass the cytoplasm.",
    hint: "Isp takes the first alcove HOLD. Pac takes RESCUE in the second. Hop over a waiting buddy.",
    stage: "sewers",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 65, y: 464 }, pac: { x: 350, y: 464 } },
    platforms: [
      floor("floor", 0, 500, 1100),
      floor("low_roof_a", 0, 420, 130, 18),
      floor("low_roof_b", 380, 420, 80, 18),
      floor("low_roof_c", 700, 420, 160, 18),
      floor("first_alcove", 180, 445, 150, 55),
      floor("second_alcove", 500, 445, 150, 55),
    ],
    pads: [
      pad("hold", 240, 445, "isp", "hold", [door("pac_pass")]),
      pad("rescue", 560, 445, "pac", "latch", [door("pac_pass"), door("isp_pass")]),
    ],
    barriers: [gate("pac_pass", 400, "pac"), gate("isp_pass", 700, "isp")],
    hazards: [],
    crates: [],
    collectibles: [
      { id: "alcove_blue", owner: "isp", position: { x: 240, y: 405 } },
      { id: "alcove_orange", owner: "pac", position: { x: 550, y: 405 } },
    ],
    exits: exits(500),
  },
  {
    id: "level_07",
    title: "Double Trouble",
    subtitle: "Two ferries. One very patient friend.",
    hint: "Isp holds STOP for Pac's first ferry. Pac's STEADY stabilizes Gem's bridge and powers Cana's second ferry. Isp latches RESCUE.",
    stage: "sewers",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 45, y: 374 }, pac: { x: 105, y: 374 } },
    platforms: [
      floor("start", 0, 410, 200),
      ferry("first", 220, 410, 150, 40),
      floor("island", 440, 410, 170),
      bridge("bridge", 610, 410, 170),
      { ...ferry("second", 790, 410, 100, 25), requiresPower: true },
      floor("finish", 930, 410, 170),
    ],
    pads: [
      pad("stop", 100, 410, "isp", "hold", [stop("first"), door("pac_island")]),
      pad("steady", 490, 410, "pac", "hold", [
        steady("bridge"),
        door("isp_bridge"),
        power("second"),
      ]),
      pad("rescue", 945, 410, "isp", "latch", [
        steady("bridge"),
        power("second"),
        door("pac_island"),
        door("isp_bridge"),
        door("pac_finish"),
      ]),
    ],
    barriers: [
      gate("pac_island", 443, "pac"),
      gate("isp_bridge", 615, "isp"),
      gate("pac_finish", 933, "pac"),
    ],
    hazards: [slime(200, 240), slime(610, 320)],
    crates: [],
    collectibles: [
      { id: "first_orange", owner: "pac", position: { x: 510, y: 375 } },
      { id: "second_blue", owner: "isp", position: { x: 830, y: 370 } },
    ],
    exits: exits(410),
  },
  {
    id: "level_08",
    title: "Push Comes to Shove",
    subtitle: "A box volunteers for plate duty.",
    hint: "Push the small crate onto PARK. Both hop over it. Pac holds STEADY; Isp reaches RESCUE.",
    stage: "sewers",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 45, y: 414 }, pac: { x: 105, y: 414 } },
    platforms: [
      floor("start", 0, 450, 570),
      bridge("bridge", 570, 450, 300),
      floor("finish", 870, 450, 230),
    ],
    pads: [
      pad("park", 300, 450, "any", "hold", [door("box_door")]),
      pad("steady", 460, 450, "pac", "hold", [steady("bridge"), door("isp_bridge")]),
      pad("rescue", 900, 450, "isp", "latch", [
        door("box_door"),
        door("isp_bridge"),
        door("pac_finish"),
        steady("bridge"),
      ]),
    ],
    barriers: [
      gate("box_door", 410, "both"),
      gate("isp_bridge", 580, "isp"),
      gate("pac_finish", 875, "pac"),
    ],
    hazards: [slime(570, 300)],
    crates: [{ id: "small_box", heavy: false, rect: rect(210, 410, 40, 40) }],
    collectibles: [
      { id: "box_blue", owner: "isp", position: { x: 340, y: 365 } },
      { id: "bridge_orange", owner: "pac", position: { x: 700, y: 415 } },
    ],
    exits: exits(450),
  },
  {
    id: "level_09",
    title: "Two Tons of Trouble",
    subtitle: "Team lift. Team shove. Team snack.",
    hint: "Both push the heavy crate onto TEAM. Hop over it; Isp's STOP powers and brakes Cana's ferry. Pac's RESCUE keeps power on.",
    stage: "laboratory",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 95, y: 414 }, pac: { x: 125, y: 414 } },
    platforms: [
      floor("start", 0, 450, 560),
      { ...ferry("ferry", 580, 450, 170, 40), requiresPower: true },
      floor("finish", 840, 450, 260),
    ],
    pads: [
      pad("team", 300, 450, "any", "hold", [door("team_door")], 2),
      pad("stop", 465, 450, "isp", "hold", [stop("ferry"), door("pac_landing"), power("ferry")]),
      pad("rescue", 870, 450, "pac", "latch", [
        power("ferry"),
        door("team_door"),
        door("pac_landing"),
        door("isp_finish"),
      ]),
    ],
    barriers: [
      gate("team_door", 415, "both"),
      gate("pac_landing", 843, "pac"),
      gate("isp_finish", 925, "isp"),
    ],
    hazards: [slime(560, 280)],
    crates: [{ id: "heavy_box", heavy: true, rect: rect(185, 400, 50, 50) }],
    collectibles: [
      { id: "heavy_orange", owner: "pac", position: { x: 350, y: 365 } },
      { id: "brake_blue", owner: "isp", position: { x: 505, y: 410 } },
    ],
    exits: exits(450),
  },
  {
    id: "level_10",
    title: "Elevator Etiquette",
    subtitle: "Going up? Mind the orange passenger.",
    hint: "Ride together. Near the upper landing, Isp stands on the lift's STOP. Pac hops to STEADY; Isp reaches RESCUE.",
    stage: "laboratory",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 400, y: 484 }, pac: { x: 460, y: 484 } },
    platforms: [
      floor("lobby", 0, 520, 280),
      ferry("lift", 290, 520, 270, 0, -210),
      floor("landing", 580, 310, 150),
      bridge("bridge", 730, 310, 180),
      floor("finish", 910, 310, 190),
    ],
    pads: [
      {
        ...pad("stop", 20, 0, "isp", "hold", [stop("lift"), door("pac_landing")]),
        platformId: "lift",
      },
      pad("steady", 620, 310, "pac", "hold", [steady("bridge"), door("isp_bridge")]),
      pad("rescue", 925, 310, "isp", "latch", [
        door("pac_landing"),
        door("isp_bridge"),
        door("pac_finish"),
        steady("bridge"),
      ]),
    ],
    barriers: [
      gate("pac_landing", 583, "pac"),
      gate("isp_bridge", 735, "isp"),
      gate("pac_finish", 913, "pac"),
    ],
    hazards: [slime(280, 300), slime(730, 180)],
    crates: [],
    collectibles: [
      { id: "lift_blue", owner: "isp", position: { x: 340, y: 275 } },
      { id: "landing_orange", owner: "pac", position: { x: 665, y: 275 } },
    ],
    exits: exits(310),
  },
  {
    id: "level_11",
    title: "Split Decision",
    subtitle: "Separate lanes. Shared destination.",
    hint: "Cana's stair lift runs 5 seconds, then pauses 3; it stays solid. Isp takes BLUE above; Pac takes ORANGE below. Either latch restores power; both open the other's route.",
    stage: "laboratory",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 65, y: 514 }, pac: { x: 125, y: 514 } },
    platforms: [
      floor("floor", 0, 550, 1100),
      {
        ...ferry("step_one", 240, 480, 140, 0, -20),
        powerCycle: { period: 8, activeFor: 5, phase: 0 },
      },
      floor("upper_lane", 380, 410, 390, 20),
      floor("step_down", 770, 480, 120, 70),
    ],
    pads: [
      pad("blue", 570, 410, "isp", "latch", [door("orange_lane"), power("step_one")]),
      pad("orange", 650, 550, "pac", "latch", [door("blue_lane"), power("step_one")]),
    ],
    barriers: [
      { id: "upper_color", blocks: "pac", rect: rect(385, 0, 20, 430) },
      { id: "lower_color", blocks: "isp", rect: rect(425, 430, 20, 190) },
      { id: "blue_lane", blocks: "isp", rect: rect(745, 0, 20, 430) },
      { id: "orange_lane", blocks: "pac", rect: rect(610, 430, 20, 190) },
    ],
    hazards: [],
    crates: [],
    collectibles: [
      { id: "upper_blue", owner: "isp", position: { x: 620, y: 375 } },
      { id: "lower_orange", owner: "pac", position: { x: 700, y: 515 } },
    ],
    exits: exits(550),
  },
  {
    id: "level_12",
    title: "Microtubule Shuffle",
    subtitle: "Cargo first. Friendship always.",
    hint: "Cana's ferry runs 5 seconds, then pauses 3. Park cargo on BRAKE to power and stop it. Pac holds Gem's bridge STEADY; Isp reaches permanent RESCUE.",
    stage: "laboratory",
    world: { width: 1100, height: 620 },
    spawns: { isp: { x: 45, y: 384 }, pac: { x: 105, y: 384 } },
    platforms: [
      floor("start", 0, 420, 350),
      {
        ...ferry("ferry", 370, 420, 150, 40),
        powerCycle: { period: 8, activeFor: 5, phase: 0 },
      },
      floor("island", 590, 420, 150),
      bridge("bridge", 740, 420, 170),
      floor("finish", 910, 420, 190),
    ],
    pads: [
      pad("brake", 240, 420, "any", "hold", [stop("ferry"), door("pac_island"), power("ferry")]),
      pad("steady", 625, 420, "pac", "hold", [steady("bridge"), door("isp_bridge")]),
      pad("rescue", 925, 420, "isp", "latch", [
        power("ferry"),
        door("pac_island"),
        door("isp_bridge"),
        door("pac_finish"),
        steady("bridge"),
      ]),
    ],
    barriers: [
      gate("pac_island", 593, "pac"),
      gate("isp_bridge", 745, "isp"),
      gate("pac_finish", 913, "pac"),
    ],
    hazards: [slime(350, 240), slime(740, 170)],
    crates: [{ id: "cargo", heavy: false, rect: rect(170, 380, 40, 40) }],
    collectibles: [
      { id: "cargo_blue", owner: "isp", position: { x: 280, y: 335 } },
      { id: "island_orange", owner: "pac", position: { x: 670, y: 385 } },
    ],
    exits: exits(420),
  },
];
