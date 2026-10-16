import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const ATTENTION_PLEASE_SCENE: VillainScene = {
  gem: {
    position: { x: 450, y: 300 },
    opening: "I put that signal sac where you cannot reach it!",
    ending: "That was a delivery, not a donation!",
  },
  cana: {
    position: { x: 720, y: 360 },
    opening: "Whichever one is closer gets special attention!",
    ending: "Stop taking turns being annoying!",
  },
  schemes: [
    {
      id: "gem_cargo_shelf",
      villain: "gem",
      action: "dna_bridge",
      target: { kind: "platform", id: "cargo_shelf" },
      counterPadIds: [],
    },
    {
      id: "cana_fold",
      villain: "cana",
      action: "glucose_gate",
      target: { kind: "barrier", id: "glucose_fold" },
      counterPadIds: [],
    },
  ],
};

export const ATTENTION_PLEASE_LEVEL: LevelDefinition = {
  id: "level_27",
  title: "Attention, Please!",
  subtitle: "Give your partner a lift. Give Cana the slip.",
  hint: "Pac jumps onto Isp, then onto the shelf and drops the sac. Isp pushes it against the fold and climbs. Cana picks the nearer cell when the yellow line appears, then throws along that fixed line. Step clear and watch the return!",
  stage: "brain",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 185, y: 514 }, pac: { x: 125, y: 514 } },
  platforms: [
    { id: "floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "gem_perch", kind: "static", rect: { x: 405, y: 300, width: 90, height: 20 } },
    { id: "cargo_shelf", kind: "static", rect: { x: 230, y: 440, width: 340, height: 20 } },
    { id: "upper_bait", kind: "static", rect: { x: 550, y: 360, width: 200, height: 20 } },
    { id: "blue_finish", kind: "static", rect: { x: 890, y: 360, width: 210, height: 20 } },
  ],
  pads: [],
  barriers: [
    { id: "glucose_fold", blocks: "both", rect: { x: 750, y: 440, width: 70, height: 110 } },
  ],
  hazards: [],
  crates: [{ id: "signal_sac", heavy: false, rect: { x: 500, y: 400, width: 40, height: 40 } }],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 1020, y: 300, width: 50, height: 60 } },
    { player: "pac", rect: { x: 1020, y: 490, width: 50, height: 60 } },
  ],
  interference: [
    {
      id: "attention_boomerang",
      kind: "boomerang",
      aim: "nearest",
      target: { x: 630, y: 342 },
      windup: 1.2,
      cooldown: 1.2,
      speed: 400,
      radius: 12,
    },
  ],
};
