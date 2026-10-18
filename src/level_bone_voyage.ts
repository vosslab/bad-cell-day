import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const BONE_VOYAGE_SCENE: VillainScene = {
  gem: {
    position: { x: 600, y: 240 },
    opening: "Extra bubble wrap! You're welcome.",
    ending: "That shipment was meant for me!",
  },
  cana: {
    position: { x: 1060, y: 430 },
    opening: "Special delivery. Mine comes back.",
    ending: "My returns policy doesn't cover teamwork.",
  },
  schemes: [],
};

export const BONE_VOYAGE_LEVEL: LevelDefinition = {
  id: "level_49",
  title: "Bone Voyage",
  subtitle: "Send a foothold down through the marrow.",
  hint: "Pac gives Isp a step onto the rib. Isp drops the sac for Pac to push against the high bank and climb. Gem's bubbles lift Isp; Cana's return shoves Pac. Miss? Regroup below and jump back to the start.",
  stage: "marrow",
  villain: "both",
  villainScene: BONE_VOYAGE_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 80, y: 464 }, pac: { x: 140, y: 464 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "start_shelf", kind: "static", rect: { x: 0, y: 500, width: 300, height: 120 } },
    { id: "upper_rib", kind: "static", rect: { x: 340, y: 380, width: 435, height: 18 } },
    { id: "finish_bank", kind: "static", rect: { x: 870, y: 430, width: 230, height: 190 } },
    { id: "gem_bone_watchpost", kind: "static", rect: { x: 560, y: 240, width: 80, height: 18 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [{ id: "marrow_sac", heavy: false, rect: { x: 700, y: 340, width: 40, height: 40 } }],
  collectibles: [
    { id: "rib_blue", owner: "isp", position: { x: 450, y: 345 } },
    { id: "lower_orange", owner: "pac", position: { x: 720, y: 515 } },
  ],
  exits: [
    { player: "isp", rect: { x: 720, y: 320, width: 42, height: 60 } },
    { player: "pac", rect: { x: 935, y: 370, width: 42, height: 60 } },
  ],
  interference: [
    {
      id: "gem_upper_bubble",
      kind: "bubble",
      target: { x: 700, y: 355 },
      maxRange: 230,
      windup: 1.5,
      cooldown: 3.8,
      speed: 170,
      radius: 12,
    },
    {
      id: "cana_lower_boomerang",
      kind: "boomerang",
      target: { x: 790, y: 520 },
      windup: 0.7,
      cooldown: 2.5,
      speed: 260,
      radius: 13,
    },
  ],
};
