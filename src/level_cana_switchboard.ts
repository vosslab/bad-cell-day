import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const CANA_SWITCHBOARD_SCENE: VillainScene = {
  gem: {
    position: {
      x: 850,
      y: 378,
    },
    opening: "He keeps delivering nutrients. Nobody tell him.",
    ending: "I was only watching. Strategically.",
  },
  cana: {
    position: {
      x: 550,
      y: 378,
    },
    opening: "Nearest cell gets express delivery!",
    ending: "You turned bullying into public transport!",
  },
  schemes: [],
};

export const CANA_SWITCHBOARD_LEVEL: LevelDefinition = {
  id: "level_35",
  title: "Pick On Someone Else",
  subtitle: "Deliver both parcels, then reach KEEP.",
  hint: "Cana aims at the nearer hero when the warning starts. Your partner holds OPEN LEFT or OPEN RIGHT, then steps off after the parcel passes to catch its return. Reach KEEP, then trade jobs for the other parcel.",
  stage: "brain",
  villain: "cana",
  world: {
    width: 1100,
    height: 620,
  },
  spawns: {
    isp: {
      x: 205,
      y: 342,
    },
    pac: {
      x: 900,
      y: 342,
    },
  },
  platforms: [
    {
      id: "safe_floor",
      kind: "static",
      rect: {
        x: 0,
        y: 500,
        width: 1100,
        height: 120,
      },
    },
    {
      id: "left_perches",
      kind: "static",
      rect: {
        x: 0,
        y: 378,
        width: 470,
        height: 20,
      },
    },
    {
      id: "central_lumen_floor",
      kind: "static",
      rect: {
        x: 470,
        y: 378,
        width: 180,
        height: 20,
      },
    },
    {
      id: "central_lumen_roof",
      kind: "static",
      rect: {
        x: 470,
        y: 300,
        width: 180,
        height: 22,
      },
    },
    {
      id: "right_perches",
      kind: "static",
      rect: {
        x: 650,
        y: 378,
        width: 450,
        height: 20,
      },
    },
    {
      id: "left_step_low",
      kind: "static",
      rect: {
        x: 0,
        y: 440,
        width: 100,
        height: 16,
      },
    },
    {
      id: "left_step_high",
      kind: "static",
      rect: {
        x: 80,
        y: 400,
        width: 100,
        height: 16,
      },
    },
    {
      id: "right_step_high",
      kind: "static",
      rect: {
        x: 920,
        y: 400,
        width: 100,
        height: 16,
      },
    },
    {
      id: "right_step_low",
      kind: "static",
      rect: {
        x: 1000,
        y: 440,
        width: 100,
        height: 16,
      },
    },
  ],
  pads: [
    {
      id: "left_cargo_latch",
      rect: {
        x: 300,
        y: 376,
        width: 150,
        height: 2,
      },
      accepts: "any",
      activation: "hold",
      label: "LEFT PARCEL",
      minWeight: 1,
      effects: [
        {
          kind: "door",
          barrierId: "isp_exit_lock",
        },
      ],
    },
    {
      id: "right_cargo_latch",
      rect: {
        x: 670,
        y: 376,
        width: 130,
        height: 2,
      },
      accepts: "any",
      activation: "hold",
      label: "RIGHT PARCEL",
      minWeight: 1,
      effects: [
        {
          kind: "door",
          barrierId: "pac_exit_lock",
        },
      ],
    },
    {
      id: "left_receiver_valve",
      rect: {
        x: 915,
        y: 376,
        width: 10,
        height: 2,
      },
      accepts: "pac",
      activation: "hold",
      label: "OPEN LEFT",
      minWeight: 1,
      effects: [
        {
          kind: "door",
          barrierId: "left_return_stop",
        },
      ],
    },
    {
      id: "right_receiver_valve",
      rect: {
        x: 70,
        y: 376,
        width: 50,
        height: 2,
      },
      accepts: "isp",
      activation: "hold",
      label: "OPEN RIGHT",
      minWeight: 1,
      effects: [
        {
          kind: "door",
          barrierId: "right_return_stop",
        },
      ],
    },
    {
      id: "isp_left_latch",
      rect: {
        x: 140,
        y: 376,
        width: 10,
        height: 2,
      },
      accepts: "isp",
      activation: "latch",
      label: "KEEP LEFT",
      minWeight: 1,
      effects: [
        {
          kind: "door",
          barrierId: "left_return_stop",
        },
        {
          kind: "door",
          barrierId: "isp_exit_lock",
        },
      ],
    },
    {
      id: "pac_right_latch",
      rect: {
        x: 1015,
        y: 376,
        width: 10,
        height: 2,
      },
      accepts: "pac",
      activation: "latch",
      label: "KEEP RIGHT",
      minWeight: 1,
      effects: [
        {
          kind: "door",
          barrierId: "right_return_stop",
        },
        {
          kind: "door",
          barrierId: "pac_exit_lock",
        },
      ],
    },
  ],
  barriers: [
    {
      id: "left_return_stop",
      blocks: "both",
      rect: {
        x: 470,
        y: 300,
        width: 10,
        height: 78,
      },
    },
    {
      id: "right_return_stop",
      blocks: "both",
      rect: {
        x: 640,
        y: 300,
        width: 10,
        height: 78,
      },
    },
    {
      id: "isp_exit_lock",
      blocks: "isp",
      rect: {
        x: 160,
        y: 0,
        width: 10,
        height: 620,
      },
    },
    {
      id: "pac_exit_lock",
      blocks: "pac",
      rect: {
        x: 1000,
        y: 0,
        width: 10,
        height: 620,
      },
    },
    {
      id: "right_cargo_stop",
      blocks: "both",
      rect: {
        x: 785,
        y: 344,
        width: 10,
        height: 34,
      },
    },
    {
      id: "pac_left_upper_route_filter",
      blocks: "pac",
      rect: {
        x: 470,
        y: 0,
        width: 10,
        height: 344,
      },
    },
    {
      id: "pac_left_lower_route_filter",
      blocks: "pac",
      rect: {
        x: 470,
        y: 378,
        width: 10,
        height: 242,
      },
    },
    {
      id: "isp_right_upper_route_filter",
      blocks: "isp",
      rect: {
        x: 640,
        y: 0,
        width: 10,
        height: 344,
      },
    },
    {
      id: "isp_right_lower_route_filter",
      blocks: "isp",
      rect: {
        x: 640,
        y: 378,
        width: 10,
        height: 242,
      },
    },
  ],
  hazards: [],
  crates: [
    {
      id: "left_sac",
      rect: {
        x: 480,
        y: 350,
        width: 40,
        height: 28,
      },
      heavy: false,
    },
    {
      id: "right_sac",
      rect: {
        x: 580,
        y: 350,
        width: 40,
        height: 28,
      },
      heavy: false,
    },
  ],
  collectibles: [],
  exits: [
    {
      player: "isp",
      rect: {
        x: 20,
        y: 318,
        width: 50,
        height: 60,
      },
    },
    {
      player: "pac",
      rect: {
        x: 1030,
        y: 318,
        width: 50,
        height: 60,
      },
    },
  ],
  interference: [
    {
      id: "cana_switchboard",
      kind: "boomerang",
      aim: "nearest",
      target: {
        x: 550,
        y: 380,
      },
      cooldown: 1.5,
      windup: 0.5,
      speed: 360,
      radius: 12,
    },
  ],
};
