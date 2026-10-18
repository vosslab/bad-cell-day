import type { VillainScene } from "./types/villain";

export const TUTORIAL_VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  level_01: {
    gem: {
      position: { x: 805, y: 530 },
      opening: "This lift has room for a third cell. I'm calling dibs!",
      ending: "That was a very educational joyride.",
    },
    cana: {
      position: { x: 1010, y: 300 },
      opening: "Two hero tickets to ride! One guest pass costs two cells!",
      ending: "Fine. I will validate your friendship.",
    },
    schemes: [
      {
        id: "gem_first_wall",
        villain: "gem",
        target: { kind: "barrier", id: "dna_wall" },
        counterPadIds: ["dna_open", "glucose_restore"],
        action: "dna_wall",
      },
      {
        id: "cana_first_lift",
        villain: "cana",
        target: { kind: "platform", id: "glucose_lift" },
        counterPadIds: ["glucose_restore"],
        action: "energy_drain",
      },
    ],
  },
  level_02: {
    gem: {
      position: { x: 370, y: 480 },
      opening: "Hold still. These lungs need more trouble.",
      ending: "Stop holding doors for each other!",
    },
    cana: {
      position: { x: 825, y: 476 },
      opening: "My boomerang is bad for your breathing room!",
      ending: "RESCUE? Rude button name.",
    },
    schemes: [
      {
        id: "gem_hold_door",
        villain: "gem",
        target: { kind: "barrier", id: "pac_door" },
        counterPadIds: ["hold_door", "rescue"],
        action: "dna_wall",
      },
      {
        id: "cana_rescue_gate",
        villain: "cana",
        target: { kind: "barrier", id: "isp_door" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_03: {
    gem: {
      position: { x: 265, y: 400 },
      opening: "Float away from that ferry brake!",
      ending: "They even used the brakes. Ugh.",
    },
    cana: {
      position: { x: 825, y: 400 },
      opening: "No glucose, no gate opening!",
      ending: "Pac has excellent connections.",
    },
    schemes: [
      {
        id: "gem_landing_wall",
        villain: "gem",
        target: { kind: "barrier", id: "pac_landing" },
        counterPadIds: ["stop", "rescue"],
        action: "dna_wall",
      },
      {
        id: "cana_landing_gate",
        villain: "cana",
        target: { kind: "barrier", id: "isp_rescue" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_04: {
    gem: {
      position: { x: 265, y: 410 },
      opening: "Lung tissue! Now with extra wobble!",
      ending: "Pac's a better builder than me.",
    },
    cana: {
      position: { x: 825, y: 410 },
      opening: "Far bank delivery. Return included.",
      ending: "Isp restored it for her? Gross.",
    },
    schemes: [
      {
        id: "gem_unsteady_bridge",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "cana_bridge_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_rescue" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
  level_05: {
    gem: {
      position: { x: 200, y: 400 },
      opening: "A little bubble to unbrake your ferry!",
      ending: "Stop stabilizing my bad ideas!",
    },
    cana: {
      position: { x: 1000, y: 400 },
      opening: "I locked the glucose finish gate!",
      ending: "They rescued each other AGAIN.",
    },
    schemes: [
      {
        id: "gem_shuffle_bridge",
        villain: "gem",
        target: { kind: "platform", id: "bridge" },
        counterPadIds: ["steady", "rescue"],
        action: "dna_bridge",
      },
      {
        id: "cana_shuffle_gate",
        villain: "cana",
        target: { kind: "barrier", id: "pac_finish" },
        counterPadIds: ["rescue"],
        action: "glucose_gate",
      },
    ],
  },
};
