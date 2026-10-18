import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const SPLIT_LAUNCH_SCENE: VillainScene = {
  gem: {
    position: { x: 780, y: 540 },
    opening: "One goes up. One goes out. Which way back?",
    ending: "You found your way back to each other.",
  },
  cana: {
    position: { x: 930, y: 540 },
    opening: "Hold that thought! My boomerang has a question.",
    ending: "A question, a detour, and a very long return trip.",
  },
  schemes: [],
};

export const SPLIT_LAUNCH_LEVEL: LevelDefinition = {
  id: "level_38",
  title: "Jump to Conclusions",
  subtitle: "One takes the low road. One takes the high road.",
  hint: "Stand together on TISSUE. Isp steps off to LOWER SUPPORT so Pac can cross above. Pac, reach OPEN ISP to release Isp. Miss? Regroup below and try again.",
  stage: "brain",
  villain: "cana",
  villainScene: SPLIT_LAUNCH_SCENE,
  world: { width: 1200, height: 680 },
  spawns: {
    isp: { x: 850, y: 504 },
    pac: { x: 720, y: 504 },
  },
  platforms: [
    { id: "fallback_floor", kind: "static", rect: { x: 0, y: 620, width: 1200, height: 60 } },
    { id: "living_tissue", kind: "recoil", rect: { x: 700, y: 540, width: 300, height: 80 } },
    {
      id: "upper_crossing",
      kind: "unstable",
      rect: { x: 350, y: 360, width: 330, height: 18 },
      collapseAfter: 3.4,
      resetAfter: 1.2,
    },
  ],
  pads: [
    {
      id: "isp_lower_support",
      rect: { x: 1010, y: 600, width: 110, height: 20 },
      accepts: "isp",
      activation: "hold",
      label: "LOWER SUPPORT",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "pac_upper_membrane" },
        { kind: "stabilize", platformId: "upper_crossing" },
      ],
    },
    {
      id: "pac_open_isp",
      rect: { x: 25, y: -18, width: 54, height: 18 },
      platformId: "upper_crossing",
      accepts: "pac",
      activation: "latch",
      label: "OPEN ISP",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "pac_upper_membrane" },
        { kind: "door", barrierId: "isp_lower_gate" },
      ],
    },
  ],
  barriers: [
    { id: "pac_upper_membrane", rect: { x: 500, y: 240, width: 18, height: 250 }, blocks: "pac" },
    { id: "isp_lower_gate", rect: { x: 1125, y: 0, width: 18, height: 620 }, blocks: "isp" },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "pac", rect: { x: 1065, y: 560, width: 42, height: 60 } },
    { player: "isp", rect: { x: 1150, y: 560, width: 42, height: 60 } },
  ],
  interference: [
    {
      id: "cana_upper_crossing_boomerang",
      kind: "boomerang",
      target: { x: 540, y: 380 },
      aim: "nearest",
      cooldown: 0.65,
      windup: 0.7,
      speed: 340,
      radius: 14,
    },
  ],
};
