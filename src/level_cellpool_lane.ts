import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const CELLPOOL_LANE_SCENE: VillainScene = {
  cana: {
    position: { x: 70, y: 420 },
    opening: "Two passengers? I charge extra!",
    ending: "That was almost on purpose.",
  },
  gem: {
    position: { x: 960, y: 90 },
    opening: "You call THAT public transport?",
    ending: "Two exits. Still no tip.",
  },
  schemes: [],
};

export const CELLPOOL_LANE_LEVEL: LevelDefinition = {
  id: "level_43",
  title: "Cellpool Lane",
  subtitle: "Share the flight. Open each other's exit.",
  hint: "Meet on the launch deck. Isp rides Pac, then jumps with Cana's right-going throw to the high route. Each latch opens the other player's exit. The return fold lets you regroup and try again.",
  stage: "liver",
  villain: "cana",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 70, y: 234 }, pac: { x: 120, y: 514 } },
  platforms: [
    { id: "recovery_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "isp_approach", kind: "static", rect: { x: 0, y: 270, width: 250, height: 16 } },
    { id: "pac_step_one", kind: "static", rect: { x: 175, y: 500, width: 100, height: 14 } },
    { id: "return_fold", kind: "static", rect: { x: 400, y: 500, width: 100, height: 14 } },
    { id: "launch", kind: "static", rect: { x: 255, y: 430, width: 115, height: 16 } },
    { id: "landing", kind: "static", rect: { x: 510, y: 350, width: 230, height: 16 } },
    { id: "isp_exit_route", kind: "static", rect: { x: 700, y: 250, width: 400, height: 16 } },
    { id: "pac_exit_route", kind: "static", rect: { x: 700, y: 430, width: 400, height: 16 } },
  ],
  pads: [
    {
      id: "pac_open_isp_exit",
      rect: { x: 110, y: 0, width: 55, height: 8 },
      platformId: "pac_exit_route",
      accepts: "pac",
      activation: "latch",
      label: "OPEN ISP'S EXIT",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "isp_exit_gate" }],
    },
    {
      id: "isp_open_pac_exit",
      rect: { x: 110, y: 0, width: 55, height: 8 },
      platformId: "isp_exit_route",
      accepts: "isp",
      activation: "latch",
      label: "OPEN PAC'S EXIT",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "pac_exit_gate" }],
    },
  ],
  barriers: [
    { id: "isp_exit_gate", rect: { x: 820, y: 0, width: 16, height: 550 }, blocks: "isp" },
    { id: "pac_exit_gate", rect: { x: 1000, y: 0, width: 16, height: 550 }, blocks: "pac" },
  ],
  hazards: [],
  crates: [],
  collectibles: [
    { id: "cellpool_isp_spark", position: { x: 930, y: 220 }, owner: "isp" },
    { id: "cellpool_pac_spark", position: { x: 930, y: 400 }, owner: "pac" },
  ],
  exits: [
    { player: "isp", rect: { x: 1030, y: 190, width: 70, height: 60 } },
    { player: "pac", rect: { x: 1030, y: 370, width: 70, height: 60 } },
  ],
  interference: [
    {
      id: "cana_shove",
      kind: "boomerang",
      target: { x: 430, y: 410 },
      windup: 0.35,
      cooldown: 2.25,
      speed: 450,
      radius: 14,
    },
  ],
};
