import type { LevelDefinition } from "./types/level";
import type { SavedProgress } from "./types/persistence";
import type { GameState } from "./types/simulation";

export const STORAGE_KEY = "bad-cell-day.progress.v1";

const MAX_STORAGE_CHARS = 32_768;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function defaultProgress(): SavedProgress {
  return {
    version: 1,
    completed: [],
    soundEnabled: true,
    reducedMotion: false,
  };
}

function normalizeProgress(value: unknown, levels: readonly LevelDefinition[]): SavedProgress {
  if (!isObject(value) || value.version !== 1 || !Array.isArray(value.completed)) {
    return defaultProgress();
  }

  const knownLevels = new Map(levels.map((level) => [level.id, level]));
  const completedById = new Map<string, SavedProgress["completed"][number]>();
  for (const candidate of value.completed) {
    if (!isObject(candidate) || typeof candidate.levelId !== "string") {
      continue;
    }
    const level = knownLevels.get(candidate.levelId);
    if (
      level === undefined ||
      typeof candidate.bestTime !== "number" ||
      !Number.isFinite(candidate.bestTime) ||
      candidate.bestTime < 0 ||
      typeof candidate.bestCollectibles !== "number" ||
      !Number.isInteger(candidate.bestCollectibles) ||
      candidate.bestCollectibles < 0
    ) {
      continue;
    }

    const result = {
      levelId: level.id,
      bestTime: candidate.bestTime,
      bestCollectibles: Math.min(candidate.bestCollectibles, level.collectibles.length),
    };
    const previous = completedById.get(level.id);
    if (previous === undefined) {
      completedById.set(level.id, result);
    } else {
      completedById.set(level.id, {
        levelId: level.id,
        bestTime: Math.min(previous.bestTime, result.bestTime),
        bestCollectibles: Math.max(previous.bestCollectibles, result.bestCollectibles),
      });
    }
  }

  return {
    version: 1,
    completed: [...completedById.values()],
    soundEnabled: typeof value.soundEnabled === "boolean" ? value.soundEnabled : true,
    reducedMotion: typeof value.reducedMotion === "boolean" ? value.reducedMotion : false,
  };
}

export function create_progress(): SavedProgress {
  return defaultProgress();
}

export function load_progress(
  storage: Storage | undefined,
  levels: readonly LevelDefinition[],
): SavedProgress {
  if (storage === undefined) {
    return defaultProgress();
  }

  let raw: string | null;
  try {
    raw = storage.getItem(STORAGE_KEY);
  } catch {
    return defaultProgress();
  }
  if (raw === null || raw.length > MAX_STORAGE_CHARS) {
    return defaultProgress();
  }

  try {
    // ASVS 1.5.2 and 2.2.1: parse as unknown and allowlist current IDs and ranges.
    const parsed: unknown = JSON.parse(raw);
    return normalizeProgress(parsed, levels);
  } catch {
    return defaultProgress();
  }
}

export function save_progress(storage: Storage | undefined, progress: SavedProgress): boolean {
  if (storage === undefined) {
    return false;
  }

  try {
    const serialized = JSON.stringify(progress);
    if (serialized.length > MAX_STORAGE_CHARS) {
      return false;
    }
    storage.setItem(STORAGE_KEY, serialized);
    return true;
  } catch {
    return false;
  }
}

export function record_completion(progress: SavedProgress, state: GameState): SavedProgress {
  const completed = progress.completed.map((result) => ({ ...result }));
  if (state.status !== "complete" || !Number.isFinite(state.time) || state.time < 0) {
    return { ...progress, completed };
  }

  const bestCollectibles = Math.min(
    state.collectibles.filter((collectible) => collectible.collected).length,
    state.level.collectibles.length,
  );
  const existingIndex = completed.findIndex((result) => result.levelId === state.level.id);
  if (existingIndex < 0) {
    completed.push({
      levelId: state.level.id,
      bestTime: state.time,
      bestCollectibles,
    });
  } else {
    const existing = completed[existingIndex];
    if (existing !== undefined) {
      completed[existingIndex] = {
        levelId: state.level.id,
        bestTime: Math.min(existing.bestTime, state.time),
        bestCollectibles: Math.max(existing.bestCollectibles, bestCollectibles),
      };
    }
  }

  return { ...progress, completed };
}

export function is_level_unlocked(
  index: number,
  levels: readonly LevelDefinition[],
  progress: SavedProgress,
): boolean {
  if (!Number.isInteger(index) || index < 0 || index >= levels.length) {
    return false;
  }
  if (index === 0) {
    return true;
  }

  const previous = levels[index - 1];
  return (
    previous !== undefined && progress.completed.some((result) => result.levelId === previous.id)
  );
}
