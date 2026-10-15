import { FINAL_LEVELS } from "./levels_final";
import { MIDDLE_LEVELS } from "./levels_middle";
import { TUTORIAL_LEVELS } from "./levels_tutorial";
import type { LevelDefinition } from "./types/level";

export const LEVELS: readonly LevelDefinition[] = [
  ...TUTORIAL_LEVELS,
  ...MIDDLE_LEVELS,
  ...FINAL_LEVELS,
];
