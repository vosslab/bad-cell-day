import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const MOVING_TARGET_SCENE: VillainScene = {
  gem: {
    position: { x: 1080, y: 500 },
    opening: "I'm minding the far dock.",
    ending: "I mind it very well.",
  },
  cana: {
    position: { x: 270, y: 480 },
    opening: "I am the onboard entertainment!",
    ending: "The ticket said round trip.",
  },
  schemes: [],
};

export const MOVING_TARGET_LEVEL: LevelDefinition = {
  id: "level_54",
  title: "Cana's Moving Target",
  subtitle: "Catch the cycle; mind the return trip.",
  hint: "Pac stays on the fixed fold to stop the carrier while Isp jumps to the upper fold. Cana's boomerang can shove Pac aside; stay on the fold to catch the carrier again if Isp still needs a steady jump. Once Isp is above, Pac takes the lower tissue and jumps onto the far dock. The lower tissue lets you regroup after a miss.",
  stage: "intestine",
  villain: "cana",
  villainScene: MOVING_TARGET_SCENE,
  world: { width: 1100, height: 640 },
  spawns: { isp: { x: 70, y: 464 }, pac: { x: 420, y: 460 } },
  platforms: [
    { id: "left_dock", kind: "static", rect: { x: 0, y: 500, width: 230, height: 140 } },
    {
      id: "ferry",
      kind: "moving",
      rect: { x: 210, y: 480, width: 150, height: 18 },
      motion: { offset: { x: 520, y: 0 }, period: 8 },
      powerCycle: { period: 8, activeFor: 6.2, phase: 7.5 },
    },
    { id: "brake_fold", kind: "static", rect: { x: 390, y: 496, width: 140, height: 18 } },
    { id: "high_fold", kind: "static", rect: { x: 350, y: 400, width: 380, height: 18 } },
    { id: "right_dock", kind: "static", rect: { x: 750, y: 500, width: 350, height: 140 } },
    { id: "recovery_tissue", kind: "static", rect: { x: 230, y: 520, width: 520, height: 120 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 660, y: 340, width: 55, height: 60 } },
    { player: "pac", rect: { x: 940, y: 440, width: 60, height: 60 } },
  ],
  interference: [
    {
      id: "cana_ferry_boomerang",
      kind: "boomerang",
      target: { x: 610, y: 600 },
      windup: 0.7,
      cooldown: 2.4,
      speed: 260,
      radius: 13,
    },
  ],
};
