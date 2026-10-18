import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const CHANGING_PLACES_SCENE: VillainScene = {
  gem: {
    position: { x: 475, y: 225 },
    opening: "My brain folds keep you on your own side!",
    ending: "That was a crossing, not a neural shortcut!",
  },
  cana: {
    position: { x: 140, y: 326 },
    opening: "One glucose sac. I call it a budget cut.",
    ending: "You changed places AND took my lunch?",
  },
  schemes: [],
};

// A begins high, B begins low. Both reach the fixed commissure at their far stop.
// The low left shelf catches a pushed-off sac and lets a hero get behind it.
export const CHANGING_PLACES_LEVEL: LevelDefinition = {
  id: "level_29",
  title: "Changing Places",
  subtitle: "A brain signal crosses. So do its couriers.",
  hint: "Both ride while Pac and the sac outweigh Isp. At the far stop, Isp crosses above the sac while Pac pushes it to B. Swap decks to reverse. Cana's yellow line marks a committed throw: dodge, then watch its return.",
  stage: "brain",
  villain: "both",
  villainScene: CHANGING_PLACES_SCENE,
  interference: [
    {
      id: "commissure_boomerang",
      kind: "boomerang",
      aim: "nearest",
      target: { x: 805, y: 464 },
      windup: 1.2,
      cooldown: 1.2,
      speed: 400,
      radius: 12,
    },
  ],
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 805, y: 464 }, pac: { x: 247, y: 144 } },
  platforms: [
    { id: "left_upper_dock", kind: "static", rect: { x: 0, y: 180, width: 200, height: 24 } },
    { id: "right_lower_dock", kind: "static", rect: { x: 940, y: 500, width: 160, height: 120 } },
    // The raised shelf catches a sac just outside A and supports a push back onto it.
    { id: "left_recovery_floor", kind: "static", rect: { x: 180, y: 340, width: 40, height: 280 } },
    { id: "left_recovery_shelf", kind: "static", rect: { x: 0, y: 326, width: 180, height: 294 } },
    // The inner lips make the far stop the shared crossing; the right outer
    // lip keeps the sac aboard B until its lower unloading dock.
    { id: "left_inner_lip", kind: "static", rect: { x: 390, y: 0, width: 40, height: 300 } },
    { id: "right_inner_lip", kind: "static", rect: { x: 710, y: 340, width: 40, height: 280 } },
    { id: "right_outer_lip", kind: "static", rect: { x: 920, y: 0, width: 20, height: 460 } },
    { id: "commissure", kind: "static", rect: { x: 390, y: 340, width: 360, height: 24 } },
    { id: "upper_signal_fold", kind: "static", rect: { x: 460, y: 260, width: 240, height: 20 } },
    { id: "left_lift", kind: "counterweight", rect: { x: 220, y: 180, width: 170, height: 24 } },
    { id: "right_lift", kind: "counterweight", rect: { x: 750, y: 500, width: 170, height: 24 } },
  ],
  counterweights: [
    { id: "crossed_lifts", platformIds: ["left_lift", "right_lift"], travel: 160, speed: 65 },
  ],
  pads: [],
  barriers: [],
  hazards: [
    {
      id: "left_shaft_floor",
      kind: "slime",
      harms: "both",
      rect: { x: 220, y: 580, width: 170, height: 40 },
    },
    {
      id: "right_shaft_floor",
      kind: "slime",
      harms: "both",
      rect: { x: 750, y: 580, width: 170, height: 40 },
    },
  ],
  crates: [{ id: "glucose_sac", heavy: false, rect: { x: 320, y: 140, width: 40, height: 40 } }],
  collectibles: [],
  exits: [
    { player: "isp", rect: { x: 48, y: 120, width: 48, height: 60 } },
    { player: "pac", rect: { x: 1000, y: 440, width: 48, height: 60 } },
  ],
};
