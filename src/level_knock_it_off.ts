import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const KNOCK_IT_OFF_SCENE: VillainScene = {
  gem: {
    position: { x: 90, y: 550 },
    opening: "That sac is staying in its tiny brain duct.",
    ending: "You knocked the thought right out of my head.",
  },
  cana: {
    position: { x: 160, y: 431 },
    opening: "Knock it off! I meant the heroes, not the sac!",
    ending: "My boomerang has terrible aim and excellent customer service.",
  },
  schemes: [],
};

export const KNOCK_IT_OFF_LEVEL: LevelDefinition = {
  id: "level_31",
  title: "Knock It Off",
  subtitle: "One throw. Wrong recipient.",
  hint: "Cana aims at the nearest hero each time. Both legs nudge light sacs. Draw a line through the duct, then push the sac off the ferry while it is low; recover it from the gutter if needed. DELIVERY needs two weights: a hero and sac can power the bridge while a partner rides.",
  stage: "brain",
  villain: "cana",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 900, y: 514 }, pac: { x: 720, y: 374 } },
  platforms: [
    { id: "gutter", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "duct_floor", kind: "static", rect: { x: 300, y: 404, width: 300, height: 20 } },
    { id: "duct_roof", kind: "static", rect: { x: 300, y: 354, width: 300, height: 24 } },
    { id: "bait_perch", kind: "static", rect: { x: 710, y: 410, width: 80, height: 20 } },
    {
      id: "receiving_ferry",
      kind: "moving",
      motorized: true,
      rect: { x: 605, y: 480, width: 100, height: 16 },
      motion: { offset: { x: 0, y: -46 }, period: 6 },
    },
    {
      id: "signal_bridge",
      kind: "moving",
      requiresPower: true,
      rect: { x: 790, y: 410, width: 100, height: 16 },
      motion: { offset: { x: 170, y: -220 }, period: 8 },
    },
    { id: "upper_finish", kind: "static", rect: { x: 985, y: 130, width: 115, height: 20 } },
  ],
  pads: [
    {
      id: "brake",
      platformId: "receiving_ferry",
      rect: { x: 70, y: -6, width: 30, height: 6 },
      accepts: "isp",
      activation: "hold",
      label: "STEADY",
      minWeight: 1,
      effects: [{ kind: "motor", platformId: "receiving_ferry" }],
    },
    {
      id: "delivery",
      rect: { x: 750, y: 544, width: 80, height: 6 },
      accepts: "any",
      activation: "hold",
      label: "DELIVERY 2",
      minWeight: 2,
      effects: [{ kind: "power", platformId: "signal_bridge" }],
    },
  ],
  barriers: [],
  hazards: [],
  crates: [{ id: "little_sac", heavy: false, rect: { x: 340, y: 380, width: 24, height: 24 } }],
  collectibles: [],
  exits: [
    { player: "pac", rect: { x: 1040, y: 74, width: 50, height: 56 } },
    { player: "isp", rect: { x: 1040, y: 494, width: 50, height: 56 } },
  ],
  interference: [
    {
      id: "duct_delivery",
      kind: "boomerang",
      aim: "nearest",
      target: { x: 735, y: 392 },
      cooldown: 1.2,
      windup: 1.2,
      speed: 400,
      radius: 12,
    },
  ],
};
