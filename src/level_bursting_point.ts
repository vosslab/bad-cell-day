import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const BURSTING_POINT_SCENE: VillainScene = {
  gem: {
    position: { x: 100, y: 350 },
    opening: "One little liver membrane can still make a big mess.",
    ending: "My roof! My bubble! Whose side am I on?!",
  },
  cana: {
    position: { x: 930, y: 550 },
    opening: "That is load-bearing liver!",
    ending: "You took the high and low road. Annoying.",
  },
  schemes: [],
};

export const BURSTING_POINT_LEVEL: LevelDefinition = {
  id: "level_40",
  title: "Bursting Point",
  subtitle: "Pac opens the lid. Isp takes the upward route.",
  hint: "Pac crosses the thin roof from the left shelf. Isp waits below, then catches Gem's bubble after the lid drops. Pac takes the low exit; Isp floats up and takes the high exit. Miss the opening? Regroup below for Gem's next bubble.",
  stage: "liver",
  villain: "gem",
  world: { width: 1000, height: 600 },
  spawns: { isp: { x: 720, y: 514 }, pac: { x: 185, y: 314 } },
  platforms: [
    { id: "lower_floor", kind: "static", rect: { x: 0, y: 550, width: 1000, height: 50 } },
    { id: "pac_entry_shelf", kind: "static", rect: { x: 0, y: 350, width: 250, height: 20 } },
    {
      id: "fragile_roof",
      kind: "unstable",
      rect: { x: 250, y: 350, width: 400, height: 20 },
      collapseAfter: 1.2,
      resetAfter: 3.5,
    },
    { id: "upper_route", kind: "static", rect: { x: 650, y: 350, width: 320, height: 20 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [],
  exits: [
    { player: "pac", rect: { x: 35, y: 490, width: 55, height: 60 } },
    { player: "isp", rect: { x: 880, y: 290, width: 55, height: 60 } },
  ],
  interference: [
    {
      id: "gem_roof_opening_bubble",
      kind: "bubble",
      target: { x: 410, y: 500 },
      windup: 0.55,
      cooldown: 1.05,
      speed: 260,
      radius: 15,
      maxRange: 600,
    },
  ],
};
