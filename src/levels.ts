import { FINAL_LEVELS } from "./levels_final";
import { validate_counterweights } from "./counterweights";
import { validate_interference_ranges } from "./weapon_pose";
import { ATTENTION_PLEASE_LEVEL, ATTENTION_PLEASE_SCENE } from "./level_attention_please";
import { BUBBLE_BOUNCER_LEVEL, BUBBLE_BOUNCER_SCENE } from "./level_bubble_bouncer";
import { TWO_FOR_ONE_LEVEL, TWO_FOR_ONE_SCENE } from "./level_two_for_one";
import { YOUR_TURN_TO_CARRY_LEVEL, YOUR_TURN_TO_CARRY_SCENE } from "./level_your_turn_to_carry";
import { COUNTERWEIGHT_LEVEL, COUNTERWEIGHT_SCENE } from "./level_counterweight";
import { CHANGING_PLACES_LEVEL, CHANGING_PLACES_SCENE } from "./level_changing_places";
import { CROSSED_PATHS_LEVEL, CROSSED_PATHS_SCENE } from "./level_crossed_paths";
import { FLOAT_PASSENGER_LEVEL, FLOAT_PASSENGER_SCENE } from "./level_float_passenger";
import { KNOCK_IT_OFF_LEVEL, KNOCK_IT_OFF_SCENE } from "./level_knock_it_off";
import { RETURN_TO_SENDER_LEVEL, RETURN_TO_SENDER_SCENE } from "./level_return_to_sender";
import { SPLIT_RELAY_LEVEL, SPLIT_RELAY_SCENE } from "./level_split_relay";
import { MIDDLE_LEVELS } from "./levels_middle";
import { TUTORIAL_LEVELS } from "./levels_tutorial";
import { FINAL_VILLAIN_SCENES } from "./villain_scenes_final";
import { MIDDLE_VILLAIN_SCENES } from "./villain_scenes_middle";
import { TUTORIAL_VILLAIN_SCENES } from "./villain_scenes_tutorial";
import type { LevelDefinition } from "./types/level";
import type { VillainScene } from "./types/villain";

const VILLAIN_SCENES: Readonly<Record<string, VillainScene>> = {
  ...TUTORIAL_VILLAIN_SCENES,
  ...MIDDLE_VILLAIN_SCENES,
  ...FINAL_VILLAIN_SCENES,
  [SPLIT_RELAY_LEVEL.id]: SPLIT_RELAY_SCENE,
  [CROSSED_PATHS_LEVEL.id]: CROSSED_PATHS_SCENE,
  [COUNTERWEIGHT_LEVEL.id]: COUNTERWEIGHT_SCENE,
  [CHANGING_PLACES_LEVEL.id]: CHANGING_PLACES_SCENE,
  [FLOAT_PASSENGER_LEVEL.id]: FLOAT_PASSENGER_SCENE,
  [RETURN_TO_SENDER_LEVEL.id]: RETURN_TO_SENDER_SCENE,
  [BUBBLE_BOUNCER_LEVEL.id]: BUBBLE_BOUNCER_SCENE,
  [ATTENTION_PLEASE_LEVEL.id]: ATTENTION_PLEASE_SCENE,
  [TWO_FOR_ONE_LEVEL.id]: TWO_FOR_ONE_SCENE,
  [YOUR_TURN_TO_CARRY_LEVEL.id]: YOUR_TURN_TO_CARRY_SCENE,
  [KNOCK_IT_OFF_LEVEL.id]: KNOCK_IT_OFF_SCENE,
};

// Campaign positions teach a chapter curriculum; stable IDs own rooms and saved achievements.
const CAMPAIGN_ORDER: readonly string[] = [
  "level_02",
  "level_01",
  "level_04",
  "level_03",
  "level_06",
  "level_08",
  "level_05",
  "level_07",
  "level_11",
  "level_09",
  "level_10",
  "level_23",
  "level_12",
  "level_21",
  "level_13",
  "level_24",
  "level_30",
  "level_14",
  "level_26",
  "level_28",
  "level_15",
  "level_16",
  "level_18",
  "level_17",
  "level_25",
  "level_22",
  "level_27",
  "level_31",
  "level_29",
  "level_19",
  "level_20",
];

function validate_villain_scene(level: LevelDefinition): void {
  validate_interference_ranges(level);
  const scene = level.villainScene;
  if (!scene) throw new Error(`Level ${level.id} is missing its villain scene.`);
  if (level.stage === "tumor" && !level.boss) {
    throw new Error(`Boss level ${level.id} is missing its boss definition.`);
  }

  const padIds = new Set(level.pads.map((pad) => pad.id));
  const attackIds = new Set<string>();
  for (const attack of level.interference ?? []) {
    if (attackIds.has(attack.id)) {
      throw new Error(`Level ${level.id} has duplicate interference attack ${attack.id}.`);
    }
    attackIds.add(attack.id);

    const actor = scene[attack.kind === "bubble" ? "gem" : "cana"];
    if (!actor) {
      throw new Error(
        `Level ${level.id} interference attack ${attack.id} has no ${attack.kind === "bubble" ? "gem" : "cana"} actor.`,
      );
    }
    if (attack.startsOnPadId !== undefined && !padIds.has(attack.startsOnPadId)) {
      throw new Error(
        `Level ${level.id} interference attack ${attack.id} references missing start pad ${attack.startsOnPadId}.`,
      );
    }
    for (const padId of attack.interruptedByPadIds ?? []) {
      if (!padIds.has(padId)) {
        throw new Error(
          `Level ${level.id} interference attack ${attack.id} references missing interrupt pad ${padId}.`,
        );
      }
    }
  }

  const schemeIds = new Set<string>();
  for (const scheme of scene.schemes) {
    if (schemeIds.has(scheme.id)) {
      throw new Error(`Level ${level.id} has duplicate villain scheme ${scheme.id}.`);
    }
    schemeIds.add(scheme.id);
    const targets =
      scheme.target.kind === "barrier"
        ? level.barriers
        : scheme.target.kind === "platform"
          ? level.platforms
          : level.hazards;
    if (!targets.some((target) => target.id === scheme.target.id)) {
      throw new Error(
        `Level ${level.id} villain scheme ${scheme.id} targets missing ${scheme.target.kind} ${scheme.target.id}.`,
      );
    }
    for (const padId of scheme.counterPadIds) {
      if (!padIds.has(padId)) {
        throw new Error(
          `Level ${level.id} villain scheme ${scheme.id} references missing counter pad ${padId}.`,
        );
      }
    }
  }

  if (level.boss) {
    const chargeSeconds = level.boss.chargeSeconds;
    if (chargeSeconds !== undefined && (!Number.isFinite(chargeSeconds) || chargeSeconds <= 0)) {
      throw new Error(`Level ${level.id} boss charge duration must be finite and positive.`);
    }
    const [firstTarget, secondTarget] = level.boss.targetPadIds;
    if (firstTarget === secondTarget || level.boss.targetPadIds.length !== 2) {
      throw new Error(`Level ${level.id} boss must have two distinct target pads.`);
    }
    if (!padIds.has(firstTarget) || !padIds.has(secondTarget)) {
      throw new Error(`Level ${level.id} boss references a missing target pad.`);
    }
    const targetPads = level.pads.filter((pad) => level.boss?.targetPadIds.includes(pad.id));
    if (targetPads.length !== 2 || new Set(targetPads.map((pad) => pad.accepts)).size !== 2) {
      throw new Error(`Level ${level.id} boss targets must belong to two distinct players.`);
    }
  }
}

const LEVELS_WITH_SCENES: readonly LevelDefinition[] = [
  ...TUTORIAL_LEVELS,
  ...MIDDLE_LEVELS,
  ...FINAL_LEVELS,
  SPLIT_RELAY_LEVEL,
  CROSSED_PATHS_LEVEL,
  COUNTERWEIGHT_LEVEL,
  CHANGING_PLACES_LEVEL,
  FLOAT_PASSENGER_LEVEL,
  RETURN_TO_SENDER_LEVEL,
  BUBBLE_BOUNCER_LEVEL,
  ATTENTION_PLEASE_LEVEL,
  TWO_FOR_ONE_LEVEL,
  YOUR_TURN_TO_CARRY_LEVEL,
  KNOCK_IT_OFF_LEVEL,
].map((level) => {
  const villainScene = VILLAIN_SCENES[level.id];
  if (!villainScene) {
    throw new Error(`Campaign level ${level.id} has no authored villain scene.`);
  }
  return { ...level, villainScene };
});

for (const level of LEVELS_WITH_SCENES) {
  validate_villain_scene(level);
  validate_counterweights(level);
}

const campaignLevelIds = new Set(LEVELS_WITH_SCENES.map((level) => level.id));
for (const sceneLevelId of Object.keys(VILLAIN_SCENES)) {
  if (!campaignLevelIds.has(sceneLevelId)) {
    throw new Error(`Villain scene references unknown campaign level ${sceneLevelId}.`);
  }
}

const levelsById = new Map(LEVELS_WITH_SCENES.map((level) => [level.id, level]));
if (levelsById.size !== LEVELS_WITH_SCENES.length) {
  throw new Error("Campaign room definitions contain duplicate stable IDs.");
}
if (
  CAMPAIGN_ORDER.length !== levelsById.size ||
  new Set(CAMPAIGN_ORDER).size !== CAMPAIGN_ORDER.length
) {
  throw new Error("Campaign order must include every room exactly once.");
}

export const LEVELS: readonly LevelDefinition[] = CAMPAIGN_ORDER.map((id) => {
  const level = levelsById.get(id);
  if (level === undefined) {
    throw new Error(`Campaign order references unknown room ${id}.`);
  }
  return level;
});
