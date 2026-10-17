import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const HELPFUL_SHOVE_SCENE: VillainScene = {
  cana: {
    position: { x: 80, y: 420 },
    opening: "I meant to shove Pac! I think.",
    ending: "A favor? Let's call it an accident.",
  },
  gem: {
    position: { x: 950, y: 100 },
    opening: "Cana helped? I need to sit down.",
    ending: "I blinked and missed the teamwork.",
  },
  schemes: [],
};

export const HELPFUL_SHOVE_LEVEL: LevelDefinition = {
  id: "level_36",
  title: "A Little Push",
  subtitle: "Cana accidentally helps Pac. Return the favor and free Isp.",
  hint: "Isp holds SAFE LANDING. Pac jumps with Cana's RIGHT-GOING throw for extra distance. OPEN ISP keeps the landing safe and frees Isp. Missed jumps use the lower return fold.",
  stage: "marrow",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 230, y: 234 }, pac: { x: 40, y: 394 } },
  platforms: [
    {
      id: "recovery_floor",
      kind: "static",
      rect: { x: 0, y: 550, width: 1100, height: 70 },
    },
    {
      id: "stair_low",
      kind: "static",
      rect: { x: 330, y: 500, width: 80, height: 12 },
    },
    {
      id: "safe_bay",
      kind: "static",
      rect: { x: 0, y: 430, width: 80, height: 16 },
    },
    {
      id: "launch",
      kind: "static",
      rect: { x: 100, y: 430, width: 210, height: 16 },
    },
    {
      id: "far_deck",
      kind: "unstable",
      rect: { x: 510, y: 390, width: 230, height: 16 },
      collapseAfter: 2.5,
      resetAfter: 2,
    },
    {
      id: "pac_exit_route",
      kind: "static",
      rect: { x: 720, y: 390, width: 360, height: 16 },
    },
    {
      id: "upper_route",
      kind: "static",
      rect: { x: 0, y: 270, width: 1100, height: 16 },
    },
  ],
  pads: [
    {
      id: "safe_landing",
      rect: { x: 350, y: 0, width: 100, height: 8 },
      platformId: "upper_route",
      accepts: "isp",
      activation: "hold",
      label: "SAFE LANDING",
      minWeight: 1,
      effects: [
        { kind: "stabilize", platformId: "far_deck" },
        { kind: "door", barrierId: "pac_membrane" },
      ],
    },
    {
      id: "far_latch",
      rect: { x: 80, y: 0, width: 85, height: 8 },
      platformId: "far_deck",
      accepts: "pac",
      activation: "latch",
      label: "OPEN ISP",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "isp_gate" },
        { kind: "door", barrierId: "pac_membrane" },
        { kind: "stabilize", platformId: "far_deck" },
      ],
    },
  ],
  barriers: [
    {
      id: "pac_membrane",
      blocks: "pac",
      rect: { x: 490, y: 0, width: 16, height: 430 },
    },
    {
      id: "isp_gate",
      blocks: "isp",
      rect: { x: 700, y: 0, width: 16, height: 620 },
    },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1030, y: 210, width: 70, height: 60 } },
    { player: "pac", rect: { x: 1030, y: 330, width: 70, height: 60 } },
  ],
  interference: [
    {
      id: "cana_shove",
      kind: "boomerang",
      target: { x: 370, y: 410 },
      windup: 0.35,
      cooldown: 1.4,
      speed: 450,
      radius: 14,
    },
  ],
};
