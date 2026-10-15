import { FINAL_LEVELS } from "./levels_final";
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
};

function validate_villain_scene(level: LevelDefinition): void {
  const scene = level.villainScene;
  if (!scene) throw new Error(`Level ${level.id} is missing its villain scene.`);
  if (level.stage === "boss" && !level.boss) {
    throw new Error(`Boss level ${level.id} is missing its boss definition.`);
  }

  const padIds = new Set(level.pads.map((pad) => pad.id));
  const schemesByVillain = { gem: 0, cana: 0 };
  const schemeIds = new Set<string>();
  for (const scheme of scene.schemes) {
    if (schemeIds.has(scheme.id)) {
      throw new Error(`Level ${level.id} has duplicate villain scheme ${scheme.id}.`);
    }
    schemeIds.add(scheme.id);
    schemesByVillain[scheme.villain] += 1;

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

  for (const villain of ["gem", "cana"] as const) {
    if (schemesByVillain[villain] === 0) {
      throw new Error(`Level ${level.id} villain scene has no scheme for ${villain}.`);
    }
  }

  if (level.boss) {
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
].map((level) => {
  const villainScene = VILLAIN_SCENES[level.id];
  if (!villainScene) {
    throw new Error(`Campaign level ${level.id} has no authored villain scene.`);
  }
  return { ...level, villainScene };
});

for (const level of LEVELS_WITH_SCENES) validate_villain_scene(level);

const campaignLevelIds = new Set(LEVELS_WITH_SCENES.map((level) => level.id));
for (const sceneLevelId of Object.keys(VILLAIN_SCENES)) {
  if (!campaignLevelIds.has(sceneLevelId)) {
    throw new Error(`Villain scene references unknown campaign level ${sceneLevelId}.`);
  }
}

export const LEVELS: readonly LevelDefinition[] = LEVELS_WITH_SCENES;
