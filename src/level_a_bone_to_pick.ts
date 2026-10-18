import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const A_BONE_TO_PICK_SCENE: VillainScene = {
  gem: {
    position: {
      x: 850,
      y: 300,
    },
    opening: "I brought extra bubble wrap. It is mostly beard.",
    ending: "My beard has been reassigned as public infrastructure.",
  },
  cana: {
    position: {
      x: 520,
      y: 600,
    },
    opening: "My boomerang has a strict return policy!",
    ending: "Teamwork voids the warranty.",
  },
  schemes: [],
};

export const A_BONE_TO_PICK_LEVEL: LevelDefinition = {
  id: "level_51",
  title: "A Bone to Pick",
  subtitle: "A moving rib, a very useful beard.",
  hint: "Ride the moving rib together. Near its high end, Isp jumps from Pac onto the upper rib. Isp pushes Gem off the right edge; Pac jumps onto Gem below, then across to the high bank. Miss the rib? Jump left from the floor back to the starting shelf.",
  stage: "marrow",
  villain: "both",
  world: {
    width: 1200,
    height: 680,
  },
  spawns: {
    isp: {
      x: 150,
      y: 484,
    },
    pac: {
      x: 200,
      y: 484,
    },
  },
  platforms: [
    {
      id: "safe_floor",
      kind: "static",
      rect: {
        x: 0,
        y: 600,
        width: 1200,
        height: 80,
      },
    },
    {
      id: "start_shelf",
      kind: "static",
      rect: {
        x: 0,
        y: 520,
        width: 270,
        height: 160,
      },
    },
    {
      id: "marrow_rib_ferry",
      kind: "moving",
      rect: {
        x: 280,
        y: 520,
        width: 150,
        height: 18,
      },
      motion: {
        offset: {
          x: 260,
          y: -100,
        },
        period: 8,
      },
    },
    {
      id: "upper_rib",
      kind: "static",
      rect: {
        x: 630,
        y: 315,
        width: 340,
        height: 18,
      },
    },
    {
      id: "lower_marrow_bank",
      kind: "static",
      rect: {
        x: 820,
        y: 520,
        width: 380,
        height: 160,
      },
    },
    {
      id: "high_exit_bank",
      kind: "static",
      rect: {
        x: 1100,
        y: 400,
        width: 100,
        height: 280,
      },
    },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    {
      player: "isp",
      rect: {
        x: 880,
        y: 255,
        width: 100,
        height: 60,
      },
    },
    {
      player: "pac",
      rect: {
        x: 1120,
        y: 340,
        width: 70,
        height: 60,
      },
    },
  ],
  interference: [
    {
      id: "gem_rib_bubble",
      kind: "bubble",
      target: {
        x: 950,
        y: 410,
      },
      maxRange: 220,
      windup: 1.4,
      cooldown: 3.8,
      speed: 155,
      radius: 13,
    },
    {
      id: "cana_marrow_boomerang",
      kind: "boomerang",
      target: {
        x: 900,
        y: 540,
      },
      windup: 0.9,
      cooldown: 2.7,
      speed: 245,
      radius: 13,
    },
  ],
};
