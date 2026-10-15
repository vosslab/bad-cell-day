import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const RETURN_TO_SENDER_SCENE: VillainScene = {
  gem: {
    position: { x: 560, y: 100 },
    opening: "I sent that downstairs!",
    ending: "Return postage?!",
  },
  cana: {
    position: { x: 500, y: 488 },
    opening: "Special delivery!",
    ending: "You used my stop?",
  },
  schemes: [
    {
      id: "gem_gate",
      villain: "gem",
      action: "dna_wall",
      target: { kind: "barrier", id: "upper_gate" },
      counterPadIds: ["receive", "release"],
    },
    {
      id: "cana_post",
      villain: "cana",
      action: "energy_drain",
      target: { kind: "platform", id: "return" },
      counterPadIds: ["send"],
    },
  ],
};

export const RETURN_TO_SENDER_LEVEL: LevelDefinition = {
  id: "level_25",
  title: "Return to Sender",
  subtitle: "Brain teamwork. One signal sac,  special delivery both ways.",
  hint: "Isp drops the signal sac to Pac. Hold RECEIVE with two weights so Isp can reach RELEASE upstairs. Pac loads the return lift,  then hops onto SEND. Isp rides up and parks the sac on DOCK. Knocked off SEND? Hop back on.",
  stage: "brain",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 80, y: 264 }, pac: { x: 130, y: 514 } },
  platforms: [
    {
      id: "floor",
      kind: "static",
      rect: { x: 0, y: 550, width: 1100, height: 70 },
    },
    {
      id: "upper_start",
      kind: "static",
      rect: { x: 0, y: 300, width: 380, height: 22 },
    },
    {
      id: "upper_control",
      kind: "static",
      rect: { x: 500, y: 300, width: 220, height: 22 },
    },
    {
      id: "upper_dock",
      kind: "static",
      rect: { x: 870, y: 300, width: 230, height: 22 },
    },
    {
      id: "recovery",
      kind: "moving",
      rect: { x: 390, y: 550, width: 110, height: 24 },
      motion: { offset: { x: 0, y: -250 }, period: 8 },
      motorized: true,
      requiresPower: true,
    },
    {
      id: "return",
      kind: "moving",
      rect: { x: 740, y: 550, width: 130, height: 24 },
      motion: { offset: { x: 0, y: -310 }, period: 8 },
      motorized: true,
      requiresPower: true,
    },
    {
      id: "cargo_stop",
      kind: "static",
      rect: { x: 960, y: 260, width: 12, height: 40 },
    },
    {
      id: "send_perch",
      kind: "static",
      rect: { x: 600, y: 470, width: 70, height: 22 },
    },
  ],
  pads: [
    {
      id: "receive",
      accepts: "any",
      rect: { x: 530, y: 542, width: 120, height: 8 },
      label: "RECEIVE",
      activation: "hold",
      effects: [
        { kind: "door", barrierId: "upper_gate" },
        { kind: "power", platformId: "recovery" },
      ],
      minWeight: 2,
    },
    {
      id: "release",
      accepts: "isp",
      rect: { x: 610, y: 292, width: 70, height: 8 },
      label: "RELEASE",
      activation: "latch",
      effects: [
        { kind: "door", barrierId: "upper_gate" },
        { kind: "door", barrierId: "cargo_door" },
        { kind: "power", platformId: "recovery" },
      ],
      minWeight: 1,
    },
    {
      id: "send",
      accepts: "pac",
      rect: { x: 600, y: 462, width: 60, height: 8 },
      label: "SEND",
      activation: "hold",
      effects: [{ kind: "power", platformId: "return" }],
      minWeight: 1,
    },
    {
      id: "dock",
      accepts: "any",
      rect: { x: 885, y: 292, width: 70, height: 8 },
      label: "DOCK",
      activation: "hold",
      effects: [{ kind: "door", barrierId: "final" }],
      minWeight: 1,
    },
  ],
  barriers: [
    {
      id: "upper_gate",
      blocks: "isp",
      rect: { x: 560, y: 0, width: 20, height: 322 },
    },
    {
      id: "cargo_door",
      blocks: "both",
      rect: { x: 690, y: 322, width: 20, height: 228 },
    },
    {
      id: "final",
      blocks: "both",
      rect: { x: 1000, y: 0, width: 20, height: 620 },
    },
  ],
  crates: [{ id: "parcel", rect: { x: 180, y: 260, width: 40, height: 40 }, heavy: false }],
  hazards: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1040, y: 240, width: 42, height: 60 } },
    { player: "pac", rect: { x: 1040, y: 490, width: 42, height: 60 } },
  ],
  interference: [
    {
      id: "special_delivery",
      kind: "boomerang",
      target: { x: 720, y: 449.2 },
      windup: 1,
      cooldown: 1.8,
      speed: 180,
      radius: 12,
      startsOnPadId: "release",
    },
  ],
};
