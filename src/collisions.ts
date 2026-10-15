import type { Rect } from "./types/geometry";
import type { PlayerId } from "./types/player";
import type { GameState } from "./types/simulation";

interface CollisionSolid extends Rect {
  readonly barrierExitAxis?: "x" | "y";
}

export function overlaps(a: Readonly<Rect>, b: Readonly<Rect>): boolean {
  return a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;
}

export function stands_on(a: Readonly<Rect>, b: Readonly<Rect>): boolean {
  return (
    a.x + a.width > b.x + 0.1 && a.x < b.x + b.width - 0.1 && Math.abs(a.y + a.height - b.y) < 1
  );
}

// Swept axis clipping avoids crossing a thin obstacle even at high velocity.
export function clip_axis(
  rect: Rect,
  amount: number,
  axis: "x" | "y",
  solids: readonly Readonly<CollisionSolid>[],
): number {
  let allowed = amount;
  const other = axis === "x" ? "y" : "x";
  const size = axis === "x" ? "width" : "height";
  const otherSize = axis === "x" ? "height" : "width";
  for (const solid of solids) {
    if (solid.barrierExitAxis === axis && overlaps(rect, solid)) {
      const negativeExit = rect[axis] + rect[size] - solid[axis];
      const positiveExit = solid[axis] + solid[size] - rect[axis];
      // A closing door permits retreat to the nearer face; exact ties retreat negative.
      if (negativeExit <= positiveExit ? amount > 0 : amount < 0) allowed = 0;
      continue;
    }
    if (
      rect[other] >= solid[other] + solid[otherSize] - 0.001 ||
      rect[other] + rect[otherSize] <= solid[other] + 0.001
    )
      continue;
    if (amount > 0 && rect[axis] + rect[size] <= solid[axis] + 0.001) {
      allowed = Math.min(allowed, Math.max(0, solid[axis] - rect[axis] - rect[size]));
    } else if (amount < 0 && rect[axis] >= solid[axis] + solid[size] - 0.001) {
      allowed = Math.max(allowed, Math.min(0, solid[axis] + solid[size] - rect[axis]));
    }
  }
  return allowed;
}

export function world_solids(state: GameState, player?: PlayerId): Readonly<CollisionSolid>[] {
  const solids: Readonly<CollisionSolid>[] = state.platforms
    .filter((p) => p.active)
    .map((p) => p.rect);
  for (const barrier of state.level.barriers) {
    const open = state.barriers.find((entry) => entry.id === barrier.id)?.open;
    if (!open && (player === undefined || barrier.blocks === "both" || barrier.blocks === player))
      solids.push({
        ...barrier.rect,
        barrierExitAxis: barrier.rect.width <= barrier.rect.height ? "x" : "y",
      });
  }
  solids.push({ x: -100, y: -10000, width: 100, height: 20000 });
  solids.push({ x: state.level.world.width, y: -10000, width: 100, height: 20000 });
  return solids;
}
