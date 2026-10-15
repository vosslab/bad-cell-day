import { door, exit, pad, rect } from "./levels_final_helpers";
import type { LevelDefinition, PlatformDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const COUNTERWEIGHT_SCENE: VillainScene = {
  gem: {
    position: { x: 475, y: 310 },
    opening: "My DNA doors only open for somebody else's arrival!",
    ending: "You delivered each other. That is disgustingly thoughtful.",
  },
  cana: {
    position: { x: 625, y: 390 },
    opening: "One crate each. Surely nobody will exchange responsibilities.",
    ending: "They even returned the elevator. No manners at all!",
  },
  schemes: [
    {
      id: "counterweight_upper_delivery",
      villain: "gem",
      action: "dna_wall",
      target: { kind: "barrier", id: "pac_delivery_gate" },
      counterPadIds: ["isp_delivery"],
    },
    {
      id: "counterweight_return_delivery",
      villain: "cana",
      action: "glucose_gate",
      target: { kind: "barrier", id: "isp_delivery_gate" },
      counterPadIds: ["pac_return"],
    },
  ],
};

function wall(id: string, x: number, y: number, width: number, height: number): PlatformDefinition {
  return { id, kind: "static", rect: rect(x, y, width, height) };
}

// Full-width decks and continuous walls keep every missed boarding inside its shaft.
// The final left pad is beyond the first locked door, so Pac cannot claim it at spawn.
export const COUNTERWEIGHT_LEVEL: LevelDefinition = {
  id: "level_23",
  title: "Cargo Exchange",
  subtitle: "A little extra weight. A big favor returned.",
  hint: "Both heroes must ride for the lifts to move. Pac pushes the left crate aboard and rides down, raising Isp. Pac and that crate share CARGO PARKED on the lower-left dock to release the return crate. Isp reaches DELIVERY above, then pushes the upper-right crate aboard. With both riding again, Isp descends and Pac returns to the unlocked upper-left RETURN pad. Each arrival opens the partner's exit.",
  stage: "factory",
  villain: "both",
  villainScene: COUNTERWEIGHT_SCENE,
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 830, y: 464 }, pac: { x: 135, y: 194 } },
  platforms: [
    wall("left_upper_dock", 0, 230, 220, 24),
    wall("ballast_recovery_stop", 120, 216, 10, 14),
    wall("parked_ballast_recovery_stop", 30, 486, 10, 14),
    wall("return_ballast_recovery_stop", 1060, 216, 10, 14),
    wall("left_lower_dock", 0, 500, 220, 120),
    wall("right_upper_dock", 920, 230, 180, 24),
    wall("right_lower_dock", 920, 500, 180, 120),
    // The lower arrival latch opens this recess only after cargo reaches the lower deck.
    wall("left_inner_membrane", 390, 0, 40, 420),
    wall("left_inner_recovery_stop", 390, 486, 40, 134),
    wall("left_inner_recovery_back", 430, 420, 10, 66),
    wall("right_inner_membrane", 710, 0, 40, 620),
    wall("left_outer_rail", 200, 254, 20, 166),
    // Ends before a straddling rider, with a hero-width gap to the deck. Cargo fits below.
    wall("left_reboarding_lip", 150, 456, 40, 4),
    wall("right_outer_rail", 920, 254, 20, 166),
    wall("left_shaft_base", 220, 524, 170, 96),
    wall("right_shaft_base", 750, 524, 170, 96),
    { id: "cargo_left", kind: "counterweight", rect: rect(220, 230, 170, 24) },
    { id: "cargo_right", kind: "counterweight", rect: rect(750, 500, 170, 24) },
  ],
  counterweights: [
    { id: "cargo_exchange", platformIds: ["cargo_left", "cargo_right"], travel: 270, speed: 65 },
  ],
  pads: [
    {
      ...pad("lower_dock_arrival", "any", 220, 500, "LOWER DOCK", "latch", [
        door("inner_recovery_gate"),
      ]),
      rect: rect(220, 492, 170, 8),
    },
    {
      ...pad(
        "cargo_parked",
        "any",
        115,
        500,
        "CARGO PARKED",
        "latch",
        [door("return_cargo_gate")],
        2,
      ),
      // A 40px crate touching this plate is entirely outside the deck at x220.
      rect: rect(115, 492, 65, 8),
    },
    pad("isp_delivery", "isp", 950, 230, "DELIVERY", "latch", [door("pac_delivery_gate")]),
    {
      ...pad("pac_return", "pac", 8, 230, "RETURN", "latch", [door("isp_delivery_gate")]),
      rect: rect(8, 222, 47, 8),
    },
  ],
  barriers: [
    { id: "inner_recovery_gate", blocks: "pac", rect: rect(390, 420, 40, 66) },
    { id: "return_cargo_gate", blocks: "isp", rect: rect(1000, 0, 20, 230) },
    { id: "pac_delivery_gate", blocks: "pac", rect: rect(65, 0, 20, 230) },
    // This joins the rail and floor: Isp cannot leave a departing lower deck behind.
    { id: "isp_delivery_gate", blocks: "isp", rect: rect(920, 420, 20, 200) },
  ],
  hazards: [],
  crates: [
    { id: "outbound_ballast", rect: rect(170, 190, 40, 40), heavy: false },
    { id: "return_ballast", rect: rect(1020, 190, 40, 40), heavy: false },
  ],
  collectibles: [
    { id: "outbound_receipt", owner: "pac", position: { x: 100, y: 470 } },
    { id: "return_receipt", owner: "isp", position: { x: 1050, y: 190 } },
  ],
  exits: [exit("pac", 8, 230), exit("isp", 1030, 500)],
};
