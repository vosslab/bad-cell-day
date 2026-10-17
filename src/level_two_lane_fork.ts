import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const TWO_LANE_FORK_SCENE: VillainScene = {
  gem: {
    position: { x: 500, y: 190 },
    opening: "Upper gut, lower gut... I get the bubble lane.",
    ending: "My bubbles were supposed to upset your stomach!",
  },
  cana: {
    position: { x: 1050, y: 590 },
    opening: "One sac, two valves. I am charging a toll!",
    ending: "Fine. Next time the toll is TWO nutrient sacs.",
  },
  schemes: [],
};

export const TWO_LANE_FORK_LEVEL: LevelDefinition = {
  id: "level_34",
  title: "Gut Instinct",
  subtitle: "One nutrient sac. Two stubborn valves.",
  hint: "Park the sac on UPPER FLOW or LOWER FLOW. Isp reaches KEEP UPPER; Pac reaches KEEP LOWER. Each seal holds its route open and frees the partner's exit. Missed upstairs? Climb back using the folds on the left.",
  stage: "intestine",
  villain: "gem",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 220, y: 264 }, pac: { x: 80, y: 464 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 500, width: 1100, height: 120 } },
    { id: "upper_shelf", kind: "static", rect: { x: 200, y: 300, width: 180, height: 20 } },
    { id: "upper_lane", kind: "static", rect: { x: 460, y: 300, width: 640, height: 20 } },
    { id: "stair_low", kind: "static", rect: { x: 10, y: 440, width: 100, height: 16 } },
    { id: "stair_mid", kind: "static", rect: { x: 80, y: 380, width: 100, height: 16 } },
    { id: "stair_high", kind: "static", rect: { x: 150, y: 320, width: 100, height: 16 } },
    { id: "bay_stop_west", kind: "static", rect: { x: 300, y: 480, width: 20, height: 20 } },
    { id: "bay_stop_east", kind: "static", rect: { x: 630, y: 480, width: 20, height: 20 } },
  ],
  pads: [
    {
      id: "upper_flow",
      rect: { x: 390, y: 480, width: 50, height: 20 },
      accepts: "any",
      activation: "hold",
      label: "UPPER FLOW",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "isp_upper_gate" }],
    },
    {
      id: "lower_flow",
      rect: { x: 530, y: 480, width: 50, height: 20 },
      accepts: "any",
      activation: "hold",
      label: "LOWER FLOW",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "pac_lower_gate" }],
    },
    {
      id: "isp_upper_latch",
      rect: { x: 830, y: 280, width: 55, height: 20 },
      accepts: "isp",
      activation: "latch",
      label: "KEEP UPPER",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "isp_upper_gate" },
        { kind: "door", barrierId: "pac_exit_lock" },
      ],
    },
    {
      id: "pac_lower_latch",
      rect: { x: 830, y: 480, width: 55, height: 20 },
      accepts: "pac",
      activation: "latch",
      label: "KEEP LOWER",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "pac_lower_gate" },
        { kind: "door", barrierId: "isp_exit_lock" },
      ],
    },
  ],
  barriers: [
    { id: "isp_upper_gate", blocks: "isp", rect: { x: 700, y: 0, width: 20, height: 500 } },
    { id: "pac_lower_gate", blocks: "pac", rect: { x: 720, y: 0, width: 20, height: 500 } },
    { id: "isp_exit_lock", blocks: "isp", rect: { x: 960, y: 0, width: 20, height: 500 } },
    { id: "pac_exit_lock", blocks: "pac", rect: { x: 990, y: 0, width: 20, height: 500 } },
  ],
  hazards: [],
  crates: [{ id: "nutrient_sac", rect: { x: 440, y: 460, width: 40, height: 40 }, heavy: false }],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1020, y: 240, width: 70, height: 60 } },
    { player: "pac", rect: { x: 1020, y: 440, width: 70, height: 60 } },
  ],
  interference: [
    {
      id: "gem_upper_bubble",
      kind: "bubble",
      target: { x: 680, y: 275 },
      maxRange: 300,
      windup: 0.6,
      cooldown: 0.8,
      speed: 260,
      radius: 12,
      startsOnPadId: "upper_flow",
      interruptedByPadIds: ["isp_upper_latch"],
    },
  ],
};
