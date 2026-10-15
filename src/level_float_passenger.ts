import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const FLOAT_PASSENGER_SCENE: VillainScene = {
  gem: {
    position: { x: 80, y: 560 },
    opening: "I said lift your spirits, not your partner!",
    ending: "That was unauthorized carpooling.",
  },
  cana: {
    position: { x: 750, y: 550 },
    opening: "Upper route. Lower route. Definitely no sharing.",
    ending: "They found the reconnect button.",
  },
  schemes: [
    {
      id: "cana_crossing",
      villain: "cana",
      action: "glucose_gate",
      target: { kind: "barrier", id: "isp_crossing" },
      counterPadIds: ["cross", "reconnect"],
    },
    {
      id: "gem_onward",
      villain: "gem",
      action: "dna_wall",
      target: { kind: "barrier", id: "pac_onward" },
      counterPadIds: ["reconnect"],
    },
  ],
};

export const FLOAT_PASSENGER_LEVEL: LevelDefinition = {
  id: "level_24",
  title: "I've Got You",
  subtitle: "Liver teamwork. Pac jumps onto Isp for a FLOAT ride.",
  hint: "Isp waits on LIFT. Pac jumps onto Isp, then jumps right during FLOAT. Pac holds CROSS above while Isp crosses below to RECONNECT. Then Pac can leave CROSS and reach the upper exit.",
  stage: "liver",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 250, y: 514 }, pac: { x: 170, y: 514 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "pac_route", kind: "static", rect: { x: 310, y: 310, width: 790, height: 18 } },
  ],
  pads: [
    {
      id: "lift",
      rect: { x: 230, y: 542, width: 70, height: 8 },
      accepts: "isp",
      activation: "hold",
      label: "LIFT",
      minWeight: 1,
      effects: [],
    },
    {
      id: "cross",
      rect: { x: 470, y: 302, width: 110, height: 8 },
      accepts: "pac",
      activation: "hold",
      label: "CROSS",
      minWeight: 1,
      effects: [{ kind: "door", barrierId: "isp_crossing" }],
    },
    {
      id: "reconnect",
      rect: { x: 890, y: 542, width: 90, height: 8 },
      accepts: "isp",
      activation: "latch",
      label: "RECONNECT",
      minWeight: 1,
      effects: [
        { kind: "door", barrierId: "isp_crossing" },
        { kind: "door", barrierId: "pac_onward" },
      ],
    },
  ],
  barriers: [
    { id: "isp_upper_filter", blocks: "isp", rect: { x: 305, y: 0, width: 20, height: 330 } },
    { id: "isp_crossing", blocks: "isp", rect: { x: 650, y: 328, width: 24, height: 222 } },
    { id: "pac_onward", blocks: "pac", rect: { x: 800, y: 0, width: 24, height: 310 } },
  ],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1010, y: 490, width: 50, height: 60 } },
    { player: "pac", rect: { x: 1010, y: 250, width: 50, height: 60 } },
  ],
  interference: [
    {
      id: "boarding_bubble",
      kind: "bubble",
      target: { x: 290, y: 535 },
      maxRange: 250,
      windup: 0.9,
      cooldown: 1.6,
      speed: 170,
      radius: 12,
      enabledByPadId: "lift",
    },
  ],
};
