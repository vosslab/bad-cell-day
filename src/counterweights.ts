import { clip_axis, overlaps, stands_on, world_solids } from "./collisions";
import { active_villain_bodies } from "./villain_bodies";
import type { Rect } from "./types/geometry";
import type { LevelDefinition } from "./types/level";
import type { PlayerId } from "./types/player";
import type { CrateState, GameState } from "./types/simulation";

type BodyTarget = Pick<CrateState, "rect" | "velocity">;
type BarrierActor = PlayerId | "villain";

type Body = {
  id: string;
  rect: Rect;
  target: BodyTarget;
  player: PlayerId | undefined;
  barrierActor: BarrierActor | undefined;
  weight: number;
};

// Geometry is sampled before this pair commits any displacement. Upward bodies
// have already left support, even while their feet still touch the deck.
function support_closure(deck: Rect, bodies: readonly Body[]): Body[] {
  const supported = new Set<Body>();
  let changed = true;
  while (changed) {
    changed = false;
    for (const body of bodies) {
      if (supported.has(body) || body.target.velocity.y < 0) continue;
      if (
        stands_on(body.rect, deck) ||
        [...supported].some((support) => stands_on(body.rect, support.rect))
      ) {
        supported.add(body);
        changed = true;
      }
    }
  }
  return bodies.filter((body) => supported.has(body));
}

function swept_limit(rect: Rect, amount: number, obstacles: readonly Readonly<Rect>[]): number {
  // Axis clipping handles new contacts, but intentionally does not depenetrate.
  if (obstacles.some((obstacle) => penetrates(rect, obstacle))) return 0;
  return Math.abs(clip_axis(rect, amount, "y", obstacles));
}

function penetrates(a: Readonly<Rect>, b: Readonly<Rect>): boolean {
  // Approximate coordinates cannot distinguish an authored ULP overlap from a
  // constructed contact. Bound four rounded operations (deck reconstruction,
  // displacement, carried translation, edge addition) by their edge scales.
  // This contact classification changes no coordinates or ordinary predicates.
  for (const [axis, size] of [
    ["x", "width"],
    ["y", "height"],
  ] as const) {
    const roundoff =
      4 * Number.EPSILON * (Math.abs(a[axis]) + a[size] + Math.abs(b[axis]) + b[size]);
    if (Math.min(a[axis] + a[size] - b[axis], b[axis] + b[size] - a[axis]) <= roundoff)
      return false;
  }
  return true;
}

export function move_counterweights(state: GameState, dt: number): void {
  for (const definition of state.level.counterweights ?? []) {
    const pair = state.counterweights.find((entry) => entry.id === definition.id);
    const a = state.platforms.find((entry) => entry.id === definition.platformIds[0]);
    const b = state.platforms.find((entry) => entry.id === definition.platformIds[1]);
    if (!pair || !a || !b) throw new Error(`Missing counterweight state: ${definition.id}`);
    const bodies: Body[] = [
      ...Object.values(state.players).map((body) => {
        const player: PlayerId = body === state.players.isp ? "isp" : "pac";
        return {
          id: body.id,
          rect: { ...body.rect },
          target: body,
          player,
          barrierActor: player,
          weight: 1,
        };
      }),
      ...state.crates.map((body) => ({
        id: body.id,
        rect: { ...body.rect },
        target: body,
        player: undefined,
        barrierActor: undefined,
        weight: state.level.crates.find((crate) => crate.id === body.id)?.heavy ? 2 : 1,
      })),
      ...active_villain_bodies(state).map((body) => ({
        id: body.villain,
        rect: { ...body.rect },
        target: body,
        player: undefined,
        barrierActor: "villain" as const,
        weight: 1,
      })),
    ];
    bodies.sort((left, right) => (left.id < right.id ? -1 : left.id > right.id ? 1 : 0));
    const closures = [support_closure(a.rect, bodies), support_closure(b.rect, bodies)] as const;
    pair.loads = [
      closures[0].reduce((sum, body) => sum + body.weight, 0),
      closures[1].reduce((sum, body) => sum + body.weight, 0),
    ];
    pair.riders = [
      closures[0].some((body) => body.player !== undefined),
      closures[1].some((body) => body.player !== undefined),
    ];
    const direction = pair.riders.every(Boolean) ? Math.sign(pair.loads[0] - pair.loads[1]) : 0;
    const desired = direction * definition.speed * dt;
    const endpoint = Math.max(0, Math.min(definition.travel, pair.position + desired));
    const request = endpoint - pair.position;
    let allowed = Math.abs(request);
    const carried = new Set([...closures[0], ...closures[1]]);
    const decks = [a, b] as const;
    const members = [
      [{ rect: { ...a.rect }, barrierActor: undefined }, ...closures[0]],
      [{ rect: { ...b.rect }, barrierActor: undefined }, ...closures[1]],
    ] as const;
    if (closures[0].some((body) => closures[1].includes(body))) allowed = 0;
    for (const side of [0, 1] as const) {
      const amount = side === 0 ? request : -request;
      for (const member of members[side]) {
        const solids = world_solids(state, member.barrierActor).filter(
          (rect) => rect !== a.rect && rect !== b.rect,
        );
        solids.push(...bodies.filter((body) => !carried.has(body)).map((body) => body.rect));
        allowed = Math.min(allowed, swept_limit(member.rect, amount, solids));
        // Opposite sides close at twice the scalar speed. Treat the other
        // snapshot as stationary and sweep this member by the relative travel.
        allowed = Math.min(
          allowed,
          swept_limit(
            member.rect,
            amount * 2,
            members[side === 0 ? 1 : 0].map((m) => m.rect),
          ) / 2,
        );
      }
    }
    // World-space subtraction can leave an endpoint a few ulps short of the
    // scalar stop (for example 500 - 499.75). Normalize only a positive final
    // step within arithmetic roundoff; zero-motion safety blockers still win.
    const roundoff = Number.EPSILON * Math.max(1, state.level.world.height, definition.travel) * 8;
    if (
      (endpoint === 0 || endpoint === definition.travel) &&
      allowed > 0 &&
      Math.abs(request) - allowed <= roundoff
    )
      allowed = Math.abs(request);
    pair.blocked = allowed < Math.abs(request);
    pair.position += Math.sign(request) * allowed;
    const translated = new Set<Body>();
    for (const side of [0, 1] as const) {
      const deck = decks[side];
      const authored = state.level.platforms.find((entry) => entry.id === deck.id);
      if (!authored) throw new Error(`Missing counterweight deck: ${deck.id}`);
      deck.previousRect = { ...deck.rect };
      deck.rect.y = authored.rect.y + (side === 0 ? pair.position : -pair.position);
      deck.displacement = { x: 0, y: deck.rect.y - deck.previousRect.y };
      for (const body of closures[side]) {
        if (translated.has(body)) continue;
        body.target.rect.y = body.rect.y + deck.displacement.y;
        translated.add(body);
      }
    }
  }
}

export function validate_counterweights(level: LevelDefinition): void {
  const pairs = new Set<string>();
  const platforms = new Set<string>();
  const membership = new Set<string>();
  const shafts: Rect[] = [];
  for (const platform of level.platforms) {
    if (platforms.has(platform.id)) throw new Error(`Duplicate platform: ${platform.id}`);
    platforms.add(platform.id);
  }
  for (const pair of level.counterweights ?? []) {
    if (pairs.has(pair.id)) throw new Error(`Duplicate counterweight: ${pair.id}`);
    pairs.add(pair.id);
    if (![pair.travel, pair.speed].every((value) => Number.isFinite(value) && value > 0))
      throw new Error(`Invalid counterweight travel/speed: ${pair.id}`);
    for (const side of [0, 1] as const) {
      const id = pair.platformIds[side];
      const deck = level.platforms.find((platform) => platform.id === id);
      if (!deck || deck.kind !== "counterweight" || membership.has(id))
        throw new Error(`Invalid counterweight membership: ${id}`);
      membership.add(id);
      const rect = deck.rect;
      if (
        ![rect.x, rect.y, rect.width, rect.height].every(Number.isFinite) ||
        rect.width <= 0 ||
        rect.height <= 0
      )
        throw new Error(`Invalid counterweight rectangle: ${id}`);
      const shaft = {
        ...rect,
        y: rect.y - (side === 1 ? pair.travel : 0),
        height: rect.height + pair.travel,
      };
      if (
        shaft.x < 0 ||
        shaft.y < 0 ||
        shaft.x + shaft.width > level.world.width ||
        shaft.y + shaft.height > level.world.height
      )
        throw new Error(`Counterweight endpoint outside world: ${id}`);
      if (shafts.some((other) => overlaps(shaft, other)))
        throw new Error(`Intersecting counterweight shafts: ${id}`);
      shafts.push(shaft);
    }
  }
  for (const deck of level.platforms) {
    if (deck.kind === "counterweight" && !membership.has(deck.id))
      throw new Error(`Unpaired counterweight deck: ${deck.id}`);
  }
  for (const pad of level.pads) {
    for (const effect of pad.effects) {
      if (effect.kind !== "door" && membership.has(effect.platformId))
        throw new Error(`Counterweight cannot use ${effect.kind}: ${effect.platformId}`);
    }
  }
}
