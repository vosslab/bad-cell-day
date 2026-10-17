import type { Vec2 } from "./types/geometry";
import type { GameState } from "./types/simulation";

export function resolve_villain_position(
  state: GameState,
  villain: "gem" | "cana",
): Readonly<Vec2> | undefined {
  const scene = state.level.villainScene;
  if (!scene) return undefined;
  const body = state.villainBodies.find((candidate) => candidate.villain === villain);
  if (body) {
    if (body.respawnRemaining > 0) return undefined;
    return {
      x: body.rect.x + body.rect.width / 2,
      y: body.rect.y + body.rect.height,
    };
  }
  if (villain === "cana") return scene.cana.position;
  const appearance = scene.gem;
  if (!appearance.platformId) return appearance.position;

  const authoredPlatform = state.level.platforms.find(
    (platform) => platform.id === appearance.platformId,
  );
  if (!authoredPlatform) {
    throw new Error(
      `Level ${state.level.id} Gem references missing platform ${appearance.platformId}.`,
    );
  }
  const runtimePlatform = state.platforms.find((platform) => platform.id === appearance.platformId);
  if (!runtimePlatform) {
    throw new Error(
      `Level ${state.level.id} Gem platform ${appearance.platformId} has no runtime state.`,
    );
  }

  return {
    x: appearance.position.x + runtimePlatform.rect.x - authoredPlatform.rect.x,
    y: appearance.position.y + runtimePlatform.rect.y - authoredPlatform.rect.y,
  };
}
