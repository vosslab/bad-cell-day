import { COLLECTIBLE_FEEDBACK_SECONDS, type CollectibleFeedback } from "./types/presentation";
import type { GameState } from "./types/simulation";

export type CollectibleFeedbackHistory = Readonly<{
  collectedIds: ReadonlySet<string>;
  sparks: readonly CollectibleFeedback[];
}>;

function collected_ids(state: GameState): Set<string> {
  return new Set(state.collectibles.filter((item) => item.collected).map((item) => item.id));
}

export function create_collectible_feedback(state: GameState): CollectibleFeedbackHistory {
  return { collectedIds: collected_ids(state), sparks: [] };
}

// Observe copied collection transitions after a fixed step; never write or retain GameState.
export function update_collectible_feedback(
  previous: CollectibleFeedbackHistory,
  state: GameState,
  dt: number,
): CollectibleFeedbackHistory {
  const collectedIds = collected_ids(state);
  const sparks =
    state.status === "playing"
      ? previous.sparks
          .map((spark) => ({ ...spark, remaining: Math.max(0, spark.remaining - dt) }))
          .filter((spark) => spark.remaining > 0)
      : [];

  if (state.status === "playing") {
    for (const id of collectedIds) {
      if (previous.collectedIds.has(id)) continue;
      const definition = state.level.collectibles.find((item) => item.id === id);
      if (!definition) continue;
      sparks.push({
        x: definition.position.x,
        y: definition.position.y,
        owner: definition.owner,
        remaining: COLLECTIBLE_FEEDBACK_SECONDS,
      });
    }
  }

  return { collectedIds, sparks };
}

export function snapshot_collectible_feedback(
  history: CollectibleFeedbackHistory,
): readonly CollectibleFeedback[] {
  return history.sparks;
}
