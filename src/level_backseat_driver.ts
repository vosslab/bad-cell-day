import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const BACKSEAT_DRIVER_SCENE: VillainScene = {
  gem: {
    position: { x: 980, y: 550 },
    opening: "You're letting HER drive?",
    ending: "Fine. I'll walk.",
  },
  cana: {
    position: { x: 65, y: 430 },
    opening: "One express shove. Keep your limbs inside.",
    ending: "Those were supposed to be crash landings!",
  },
  schemes: [],
};

export const BACKSEAT_DRIVER_LEVEL: LevelDefinition = {
  id: "level_50",
  title: "Backseat Driver",
  subtitle: "Borrow a shove. Split the landing.",
  hint: "Keep Isp on Pac and wait on Cana's shelf for a right-going shove. Pac jumps toward the low landing; while Pac is airborne, Isp jumps off for the high one. Missed? Head left along the floor, use the small fold to jump back up to Cana's shelf, and regroup.",
  stage: "brain",
  villain: "cana",
  villainScene: BACKSEAT_DRIVER_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 258, y: 358 }, pac: { x: 270, y: 394 } },
  platforms: [
    { id: "recovery_floor", kind: "static", rect: { x: 0, y: 550, width: 1100, height: 70 } },
    { id: "launch_deck", kind: "static", rect: { x: 0, y: 430, width: 310, height: 16 } },
    { id: "return_step", kind: "static", rect: { x: 330, y: 500, width: 80, height: 12 } },
    { id: "lower_landing", kind: "static", rect: { x: 500, y: 430, width: 350, height: 16 } },
    { id: "upper_fold", kind: "static", rect: { x: 500, y: 260, width: 320, height: 16 } },
  ],
  pads: [],
  barriers: [],
  hazards: [],
  crates: [],
  collectibles: [
    { id: "upper_route_blue", owner: "isp", position: { x: 650, y: 225 } },
    { id: "lower_route_orange", owner: "pac", position: { x: 650, y: 395 } },
  ],
  exits: [
    { player: "pac", rect: { x: 770, y: 370, width: 54, height: 60 } },
    { player: "isp", rect: { x: 770, y: 200, width: 54, height: 60 } },
  ],
  interference: [
    {
      id: "cana_right_boomerang",
      kind: "boomerang",
      target: { x: 300, y: 410 },
      windup: 0.35,
      cooldown: 1.4,
      speed: 380,
      radius: 13,
    },
  ],
};
