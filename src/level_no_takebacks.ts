import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const NO_TAKEBACKS_SCENE: VillainScene = {
  gem: {
    position: { x: 100, y: 100 },
    opening: "A one-way valve means it stays gone!",
    ending: "That was supposed to be one-way!",
  },
  cana: {
    position: { x: 90, y: 422 },
    opening: "My parcels ALWAYS come back!",
    ending: "You kept it? That's against my return policy!",
  },
  schemes: [],
};

export const NO_TAKEBACKS_LEVEL: LevelDefinition = {
  id: "level_33",
  title: "No Takebacks",
  subtitle: "Two valves. One very committed return trip.",
  hint: "Isp holds SEND upstairs; Pac holds CATCH below. Let Cana's boomerang carry the sac through both, then step off CATCH after it passes. The closed membrane catches the return on PARCEL. Released too soon? Let the gate stop it, step back on CATCH, and try again. The bottom floor is safe if Pac misses a jump.",
  stage: "brain",
  villain: "cana",
  world: { width: 1000, height: 620 },
  spawns: { isp: { x: 100, y: 264 }, pac: { x: 600, y: 454 } },
  platforms: [
    { id: "lumen_floor", kind: "static", rect: { x: 0, y: 401, width: 620, height: 20 } },
    { id: "lumen_roof", kind: "static", rect: { x: 0, y: 355, width: 870, height: 12 } },
    { id: "isp_route", kind: "static", rect: { x: 0, y: 300, width: 360, height: 16 } },
    { id: "isp_exit_route", kind: "static", rect: { x: 390, y: 250, width: 110, height: 16 } },
    { id: "pac_route", kind: "static", rect: { x: 550, y: 490, width: 320, height: 16 } },
    { id: "pac_exit_route", kind: "static", rect: { x: 910, y: 490, width: 90, height: 16 } },
    { id: "pac_catch_floor", kind: "static", rect: { x: 0, y: 550, width: 1000, height: 16 } },
    { id: "receiver_floor", kind: "static", rect: { x: 620, y: 401, width: 250, height: 20 } },
  ],
  pads: [
    {
      id: "upstream_valve",
      rect: { x: 255, y: 292, width: 60, height: 8 },
      accepts: "isp",
      activation: "hold",
      label: "SEND",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "upstream_gate" }],
    },
    {
      id: "receiver_valve",
      rect: { x: 630, y: 482, width: 60, height: 8 },
      accepts: "pac",
      activation: "hold",
      label: "CATCH",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "receiver_gate" }],
    },
    {
      id: "receiver_pad",
      rect: { x: 640, y: 393, width: 80, height: 8 },
      accepts: "any",
      activation: "hold",
      label: "PARCEL",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "isp_exit_gate" },
        { kind: "door", barrierId: "pac_exit_gate" },
      ],
    },
  ],
  barriers: [
    { id: "upstream_gate", blocks: "both", rect: { x: 360, y: 367, width: 12, height: 34 } },
    { id: "receiver_gate", blocks: "both", rect: { x: 620, y: 367, width: 12, height: 34 } },
    { id: "far_stop", blocks: "both", rect: { x: 760, y: 367, width: 12, height: 34 } },
    { id: "isp_exit_gate", blocks: "isp", rect: { x: 390, y: 0, width: 12, height: 356 } },
    { id: "pac_exit_gate", blocks: "pac", rect: { x: 870, y: 300, width: 12, height: 286 } },
    { id: "return_stop", blocks: "both", rect: { x: 180, y: 367, width: 12, height: 34 } },
  ],
  hazards: [],
  crates: [{ id: "sac", heavy: false, rect: { x: 270, y: 373, width: 28, height: 28 } }],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 420, y: 190, width: 50, height: 60 } },
    { player: "pac", rect: { x: 930, y: 430, width: 50, height: 60 } },
  ],
  interference: [
    {
      id: "cana_line",
      kind: "boomerang",
      target: { x: 850, y: 383 },
      windup: 0.5,
      cooldown: 0.5,
      speed: 300,
      radius: 12,
    },
  ],
};
