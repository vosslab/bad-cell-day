import type { Vec2 } from "./types/geometry";
import type { GameState } from "./types/simulation";

export function resolve_villain_position(
  state: GameState,
  villain: "gem" | "cana",
): Readonly<Vec2> | undefined {
  const scene = state.level.villainScene;
  if (!scene) return undefined;
  const body = state.villainBodies.find((candidate) => candidate.villain === villain);
  if (!body || body.respawnRemaining > 0) return undefined;
  return {
    x: body.rect.x + body.rect.width / 2,
    y: body.rect.y + body.rect.height,
  };
}
