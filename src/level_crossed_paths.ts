import { door, exit, ledge, mover, pad, power, rect, solid } from "./levels_final_helpers";
import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const CROSSED_PATHS_SCENE: VillainScene = {
  gem: {
    position: { x: 560, y: 120 },
    opening: "Two brain folds. Neither gets the whole map!",
    ending: "You gave each other directions? Unfair!",
  },
  cana: {
    position: { x: 700, y: 610 },
    opening: "The stairs are closed. My boomerang still makes round trips!",
    ending: "That was a round trip with purpose.",
  },
  schemes: [
    {
      id: "gem_upper_lock",
      villain: "gem",
      action: "dna_wall",
      target: { kind: "barrier", id: "upper_lock" },
      counterPadIds: ["turnaround"],
    },
    {
      id: "cana_lift_drain",
      villain: "cana",
      action: "energy_drain",
      target: { kind: "platform", id: "inward_lift" },
      counterPadIds: ["lift", "handoff"],
    },
    {
      id: "cana_return_stairs",
      villain: "cana",
      action: "glucose_gate",
      target: { kind: "barrier", id: "return_stairs" },
      counterPadIds: ["stairs"],
    },
  ],
};

// Opposite starts become an inward exchange, then Pac reverses through the unlocked stairs.
export const CROSSED_PATHS_LEVEL: LevelDefinition = {
  id: "level_22",
  title: "Crossed Paths",
  subtitle: "Crossed brain signals. Uncrossed friendship.",
  hint: "Isp holds INVITE. Pac comes left to hold LIFT. Isp rides up, jumps right to HANDOFF, then waits at Gem's wall. Pac jumps Cana's returning boomerang on the way left to TURNAROUND, opening Isp's path. Isp reaches STAIRS; Pac doubles back right and climbs leftward to reunite at the high exits.",
  stage: "brain",
  villain: "both",
  villainScene: CROSSED_PATHS_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 60, y: 464 }, pac: { x: 1010, y: 464 } },
  platforms: [
    solid("lower_corridor", 0, 500, 1100),
    mover("inward_lift", 210, 500, 100, 0, -200, 10, undefined, true),
    ledge("upper_west", 340, 300, 290),
    ledge("upper_east", 690, 300, 210),
    ledge("return_low", 1000, 430, 100),
    ledge("return_high", 930, 360, 70),
  ],
  pads: [
    pad("invite", "isp", 110, 500, "INVITE", "hold", [door("inward_entry")]),
    pad("lift", "pac", 730, 500, "LIFT", "hold", [power("inward_lift")]),
    pad("handoff", "isp", 430, 300, "HANDOFF", "latch", [
      door("inward_entry"),
      door("lower_lock"),
      power("inward_lift"),
    ]),
    pad("turnaround", "pac", 460, 500, "TURNAROUND", "latch", [door("upper_lock")]),
    pad("stairs", "isp", 780, 300, "STAIRS", "latch", [door("return_stairs")]),
  ],
  barriers: [
    { id: "inward_entry", blocks: "pac", rect: rect(880, 390, 20, 230) },
    { id: "lower_lock", blocks: "pac", rect: rect(650, 390, 20, 230) },
    { id: "upper_lock", blocks: "isp", rect: rect(540, 0, 20, 390) },
    { id: "blue_lower_filter", blocks: "isp", rect: rect(350, 300, 20, 320) },
    { id: "orange_upper_filter", blocks: "pac", rect: rect(840, 0, 20, 390) },
    // Pac can walk underneath on the inward trip; the staircase only opens on the return.
    { id: "return_stairs", blocks: "pac", rect: rect(900, 0, 200, 400) },
  ],
  interference: [
    {
      id: "return_sweep",
      kind: "boomerang",
      target: { x: 450, y: 465 },
      windup: 1,
      cooldown: 0.25,
      speed: 300,
      radius: 12,
      startsOnPadId: "handoff",
      interruptedByPadIds: ["stairs"],
    },
  ],
  hazards: [],
  crates: [],
  collectibles: [
    { id: "crossed_blue", owner: "isp", position: { x: 720, y: 270 } },
    { id: "return_orange", owner: "pac", position: { x: 965, y: 330 } },
  ],
  exits: [exit("isp", 780, 300), exit("pac", 865, 300)],
};
