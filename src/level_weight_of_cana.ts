import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const WEIGHT_OF_CANA_SCENE: VillainScene = {
  gem: {
    position: { x: 970, y: 400 },
    opening: "I'm in charge of the lift.",
    ending: "I was in charge of the lift!",
  },
  cana: {
    position: { x: 130, y: 400 },
    opening: "I brought the lift down.",
    ending: "It took me with it.",
  },
  schemes: [],
};

export const WEIGHT_OF_CANA_LEVEL: LevelDefinition = {
  id: "level_55",
  title: "The Weight of Cana",
  subtitle: "Two shoves. One very confused lift.",
  hint: "Pac pushes Cana onto the left deck. Isp nudges Gem onto the right deck, then boards too. When the decks balance, Cana's boomerang can bump Gem off. Keep both heroes aboard and take separate exits. A full fall onto bone spikes means retry; an early hop can land back on the deck.",
  stage: "marrow",
  villain: "both",
  villainScene: WEIGHT_OF_CANA_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 1020, y: 344 }, pac: { x: 48, y: 344 } },
  platforms: [
    { id: "safe_floor", kind: "static", rect: { x: 0, y: 580, width: 1100, height: 40 } },
    { id: "left_dock", kind: "static", rect: { x: 0, y: 400, width: 220, height: 18 } },
    { id: "left_deck", kind: "counterweight", rect: { x: 220, y: 400, width: 200, height: 18 } },
    { id: "right_deck", kind: "counterweight", rect: { x: 660, y: 400, width: 200, height: 18 } },
    { id: "right_dock", kind: "static", rect: { x: 860, y: 400, width: 240, height: 18 } },
    { id: "upper_fold", kind: "static", rect: { x: 900, y: 240, width: 180, height: 18 } },
  ],
  counterweights: [
    { id: "paired_decks", platformIds: ["left_deck", "right_deck"], travel: 140, speed: 42 },
  ],
  pads: [],
  barriers: [],
  hazards: [
    {
      id: "bone_spicules",
      rect: { x: 440, y: 566, width: 660, height: 14 },
      kind: "spikes",
      harms: "both",
    },
  ],
  crates: [],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 980, y: 180, width: 60, height: 60 } },
    { player: "pac", rect: { x: 40, y: 520, width: 60, height: 60 } },
  ],
  interference: [
    {
      id: "cana_counterweight_boomerang",
      kind: "boomerang",
      target: { x: 930, y: 330 },
      windup: 0.8,
      cooldown: 1.6,
      speed: 340,
      radius: 13,
    },
    {
      id: "gem_counterweight_bubble",
      kind: "bubble",
      target: { x: 735, y: 360 },
      maxRange: 300,
      windup: 0.6,
      cooldown: 2.2,
      speed: 170,
      radius: 12,
    },
  ],
};
