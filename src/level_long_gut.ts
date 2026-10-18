import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const LONG_GUT_SCENE: VillainScene = {
  gem: {
    position: {
      x: 230,
      y: 500,
    },
    opening: "A bubble can improve any route. I have data.",
    ending: "My data has been peer reviewed.",
  },
  cana: {
    position: {
      x: 1040,
      y: 500,
    },
    opening: "Boomerang delivery! Sign here.",
    ending: "I need a better route planner.",
  },
  schemes: [],
};

export const LONG_GUT_LEVEL: LevelDefinition = {
  id: "level_47",
  title: "The Long Gut",
  subtitle: "One ferry up. One ferry across. Two cells to steer them.",
  hint: "Pac holds the low pad for Isp's ferry. Isp holds the blue pad for Pac's ferry. Pac latches the far dock to wake the upper shuttle; then take opposite exits.",
  stage: "intestine",
  villain: "both",
  world: {
    width: 1100,
    height: 620,
  },
  spawns: {
    isp: {
      x: 490,
      y: 514,
    },
    pac: {
      x: 780,
      y: 514,
    },
  },
  platforms: [
    {
      id: "floor",
      kind: "static",
      rect: {
        x: 0,
        y: 550,
        width: 1100,
        height: 70,
      },
    },
    {
      id: "left_dock",
      kind: "static",
      rect: {
        x: 0,
        y: 300,
        width: 420,
        height: 22,
      },
    },
    {
      id: "right_dock",
      kind: "static",
      rect: {
        x: 1000,
        y: 300,
        width: 100,
        height: 22,
      },
    },
    {
      id: "isp_ferry",
      kind: "moving",
      rect: {
        x: 450,
        y: 550,
        width: 110,
        height: 22,
      },
      motion: {
        offset: {
          x: 0,
          y: -250,
        },
        period: 6,
      },
      motorized: true,
      requiresPower: true,
    },
    {
      id: "pac_ferry",
      kind: "moving",
      rect: {
        x: 920,
        y: 550,
        width: 80,
        height: 22,
      },
      motion: {
        offset: {
          x: 0,
          y: -250,
        },
        period: 6,
      },
      motorized: true,
      requiresPower: true,
    },
    {
      id: "upper_shuttle",
      kind: "moving",
      rect: {
        x: 570,
        y: 300,
        width: 100,
        height: 22,
      },
      motion: {
        offset: {
          x: 250,
          y: 0,
        },
        period: 10,
      },
      motorized: true,
      requiresPower: true,
    },
  ],
  pads: [
    {
      id: "low_hold",
      accepts: "pac",
      rect: {
        x: 750,
        y: 542,
        width: 70,
        height: 8,
      },
      label: "PAC: HOLD",
      activation: "hold",
      effects: [
        {
          kind: "power",
          platformId: "isp_ferry",
        },
      ],
      minWeight: 1,
    },
    {
      id: "blue_hold",
      accepts: "isp",
      rect: {
        x: 140,
        y: 292,
        width: 70,
        height: 8,
      },
      label: "ISP: BLUE HOLD",
      activation: "hold",
      effects: [
        {
          kind: "power",
          platformId: "pac_ferry",
        },
      ],
      minWeight: 1,
    },
    {
      id: "upper_latch",
      accepts: "pac",
      rect: {
        x: 1015,
        y: 292,
        width: 70,
        height: 8,
      },
      label: "PAC: LATCH",
      activation: "latch",
      effects: [
        {
          kind: "power",
          platformId: "upper_shuttle",
        },
      ],
      minWeight: 1,
    },
  ],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    {
      player: "isp",
      rect: {
        x: 1040,
        y: 250,
        width: 60,
        height: 50,
      },
    },
    {
      player: "pac",
      rect: {
        x: 0,
        y: 250,
        width: 55,
        height: 50,
      },
    },
  ],
  interference: [
    {
      id: "gem_side_bubble",
      kind: "bubble",
      target: {
        x: 500,
        y: 265,
      },
      windup: 2.5,
      cooldown: 5,
      speed: 280,
      radius: 20,
      maxRange: 700,
    },
    {
      id: "cana_shuttle_boomerang",
      kind: "boomerang",
      target: {
        x: 760,
        y: 210,
      },
      windup: 4.1,
      cooldown: 0.2,
      speed: 500,
      radius: 22,
      startsOnPadId: "upper_latch",
    },
  ],
  villainScene: LONG_GUT_SCENE,
};
