import { door, exit, gate, ledge, mover, pad, power, solid } from "./levels_final_helpers";
import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

export const SPLIT_RELAY_SCENE: VillainScene = {
  gem: {
    position: { x: 330, y: 80 },
    opening: "Separate floors. Separate DNA walls. No sharing!",
    ending: "Their friendship has excellent vertical range.",
  },
  cana: {
    position: { x: 840, y: 350 },
    opening: "That lift runs on borrowed glucose!",
    ending: "They made the loan permanent. Outrageous.",
  },
  schemes: [
    {
      id: "relay_lift_drain",
      villain: "cana",
      target: { kind: "platform", id: "relay_lift" },
      counterPadIds: ["lift", "link"],
      action: "energy_drain",
    },
    {
      id: "relay_lower_lock",
      villain: "cana",
      target: { kind: "barrier", id: "pac_link_gate" },
      counterPadIds: ["link"],
      action: "glucose_gate",
    },
    {
      id: "relay_upper_lock",
      villain: "gem",
      target: { kind: "barrier", id: "isp_home_gate" },
      counterPadIds: ["home"],
      action: "dna_wall",
    },
  ],
};

// The upper rail, lift and landing are Isp's route; Pac stays below the catch shelf.
// LIFT is temporary until LINK preserves it, allowing the lower player to move on.
export const SPLIT_RELAY_LEVEL: LevelDefinition = {
  id: "level_21",
  title: "Across the Divide",
  subtitle: "Different floors. Taking turns opening doors.",
  hint: "Isp hops to ROUTE. Pac hops to hold LIFT. Isp rides up and jumps to LINK, freeing Pac. Pac hops to HOME; meet at the exits.",
  stage: "laboratory",
  villain: "both",
  world: { width: 1100, height: 620 },
  spawns: { isp: { x: 45, y: 264 }, pac: { x: 70, y: 514 } },
  platforms: [
    solid("lower_floor", 0, 550, 1100),
    ledge("upper_start", 0, 300, 430),
    { ...ledge("upper_hurdle", 110, 250, 95), rect: { x: 110, y: 250, width: 95, height: 50 } },
    // A missed lift jump lands here. Jump left 70px back to the upper start.
    ledge("lift_catch", 400, 370, 250),
    mover("relay_lift", 500, 300, 120, 0, -140, 8, undefined, true),
    ledge("upper_landing", 650, 160, 290),
    solid("lower_lift_step", 315, 490, 120),
    solid("lower_home_step", 770, 490, 140),
  ],
  pads: [
    pad("route", "isp", 235, 300, "ROUTE", "latch", [door("pac_route_gate")]),
    pad("lift", "pac", 340, 490, "LIFT", "hold", [power("relay_lift"), door("isp_lift_gate")]),
    pad("link", "isp", 745, 160, "LINK", "latch", [
      power("relay_lift"),
      door("isp_lift_gate"),
      door("pac_link_gate"),
    ]),
    pad("home", "pac", 825, 490, "HOME", "latch", [door("isp_home_gate")]),
  ],
  barriers: [
    // Keep Isp on the recovery shelf; Pac passes through to the LIFT step.
    {
      id: "isp_catch_return_wall",
      blocks: "isp",
      rect: { x: 380, y: 300, width: 20, height: 320 },
    },
    // Seal the catch's right edge below the landing, even while LIFT opens its gate.
    { id: "isp_catch_right_wall", blocks: "isp", rect: { x: 650, y: 182, width: 20, height: 438 } },
    { id: "pac_route_gate", blocks: "pac", rect: { x: 260, y: 322, width: 18, height: 298 } },
    gate("isp_lift_gate", "isp", 650),
    { id: "pac_link_gate", blocks: "pac", rect: { x: 710, y: 322, width: 18, height: 298 } },
    gate("isp_home_gate", "isp", 920),
  ],
  hazards: [],
  crates: [],
  collectibles: [
    { id: "relay_upper_hop", owner: "isp", position: { x: 155, y: 210 } },
    { id: "relay_landing", owner: "isp", position: { x: 865, y: 120 } },
    { id: "relay_lower_hop", owner: "pac", position: { x: 350, y: 450 } },
    { id: "relay_lower_home", owner: "pac", position: { x: 870, y: 450 } },
  ],
  exits: [exit("isp", 990, 550), exit("pac", 1050, 550)],
};
