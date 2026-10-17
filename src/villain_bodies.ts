import { clip_axis, overlaps, world_solids } from "./collisions";
import { GRAVITY } from "./constants";
import type { Rect } from "./types/geometry";
import type { PlayerId } from "./types/player";
import type { GameState, VillainBodyState } from "./types/simulation";

const ACID_ABSENCE_SECONDS = 4;
const BODY_FRICTION = 5;

export function active_villain_bodies(state: GameState): VillainBodyState[] {
  return state.villainBodies.filter((body) => body.respawnRemaining <= 0);
}

export function villain_is_absent(state: GameState, villain: VillainBodyState["villain"]): boolean {
  return state.villainBodies.some((body) => body.villain === villain && body.respawnRemaining > 0);
}

function body_solids(state: GameState, body: VillainBodyState): Readonly<Rect>[] {
  const solids = world_solids(state, "villain");
  solids.push(...state.crates.map((crate) => crate.rect));
  solids.push(...Object.values(state.players).map((player) => player.rect));
  solids.push(
    ...active_villain_bodies(state)
      .filter((other) => other !== body)
      .map((other) => other.rect),
  );
  return solids;
}

export function push_villain_from_player(
  state: GameState,
  playerId: PlayerId,
  amount: number,
  dt: number,
): void {
  if (amount === 0 || dt <= 0) return;
  const player = state.players[playerId];
  const direction = Math.sign(amount);
  const baseSolids = world_solids(state, playerId);
  baseSolids.push(...state.crates.map((crate) => crate.rect));
  baseSolids.push(state.players[playerId === "isp" ? "pac" : "isp"].rect);
  const baseAllowed = clip_axis(player.rect, amount, "x", baseSolids);
  const bodies = active_villain_bodies(state).sort((a, b) =>
    direction > 0 ? a.rect.x - b.rect.x : b.rect.x - a.rect.x,
  );

  for (const body of bodies) {
    const gap =
      direction > 0
        ? body.rect.x - player.rect.x - player.rect.width
        : player.rect.x - body.rect.x - body.rect.width;
    if (
      gap < -0.01 ||
      gap > Math.abs(amount) + 0.01 ||
      player.rect.y >= body.rect.y + body.rect.height ||
      player.rect.y + player.rect.height <= body.rect.y
    )
      continue;

    const withBodies = clip_axis(player.rect, amount, "x", [
      ...baseSolids,
      ...bodies.map((other) => other.rect),
    ]);
    if (Math.abs(withBodies - baseAllowed) < 0.001) continue;

    // Contact transfers the player's actual effect-adjusted horizontal velocity.
    body.velocity.x = player.velocity.x;
    return;
  }
}

function home_rect(state: GameState, body: VillainBodyState): VillainBodyState["rect"] {
  const appearance = state.level.villainScene?.[body.villain];
  if (!appearance) throw new Error(`Level ${state.level.id} is missing ${body.villain}'s scene.`);
  return {
    x: appearance.position.x - body.rect.width / 2,
    y: appearance.position.y - body.rect.height,
    width: body.rect.width,
    height: body.rect.height,
  };
}

function reset_bound_attacker(state: GameState, body: VillainBodyState): void {
  const trial = state.interference;
  if (!trial) return;
  const attacks = state.level.interference?.filter(
    (attack) => (attack.kind === "bubble" ? "gem" : "cana") === body.villain,
  );
  if (!attacks?.length) return;
  const attackIds = new Set(attacks.map((attack) => attack.id));
  trial.projectiles = trial.projectiles.filter((projectile) => !attackIds.has(projectile.attackId));
  for (const attacker of trial.attackers) {
    const definition = attacks.find((attack) => attack.id === attacker.id);
    if (!definition) continue;
    attacker.phase = "cooldown";
    attacker.remaining = definition.cooldown;
    delete attacker.lockedTarget;
    delete attacker.actionMarker;
  }
}

function dunk_body(state: GameState, body: VillainBodyState): void {
  body.respawnRemaining = ACID_ABSENCE_SECONDS;
  body.velocity.x = 0;
  body.velocity.y = 0;
  reset_bound_attacker(state, body);
}

export function move_villain_bodies(state: GameState, dt: number): void {
  for (const body of state.villainBodies) {
    if (body.respawnRemaining > 0) {
      body.respawnRemaining = Math.max(0, body.respawnRemaining - dt);
      if (body.respawnRemaining < 1e-9) body.respawnRemaining = 0;
      if (body.respawnRemaining === 0) {
        body.rect = home_rect(state, body);
        body.velocity.x = 0;
        body.velocity.y = 0;
      }
      continue;
    }

    const solids = body_solids(state, body);
    const requestedX = body.velocity.x * dt;
    const movedX = clip_axis(body.rect, requestedX, "x", solids);
    body.rect.x += movedX;
    body.velocity.x *= Math.max(0, 1 - BODY_FRICTION * dt);
    if (movedX !== requestedX) body.velocity.x = 0;

    body.velocity.y += GRAVITY * dt;
    const requestedY = body.velocity.y * dt;
    const movedY = clip_axis(body.rect, requestedY, "y", solids);
    body.rect.y += movedY;
    if (movedY !== requestedY) body.velocity.y = 0;

    const acid = state.hazards.some((hazard) => {
      const definition = state.level.hazards.find((entry) => entry.id === hazard.id);
      return definition?.kind === "slime" && hazard.active && overlaps(body.rect, hazard.rect);
    });
    if (acid || body.rect.y > state.level.world.height + 80) dunk_body(state, body);
  }
}
