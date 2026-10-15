import { step_interference } from "./interference";
import { GRAVITY, JUMP_SPEED, MOVE_SPEED } from "./constants";
import { clip_axis, overlaps, stands_on, world_solids } from "./collisions";
import { move_platforms, update_outcome, update_pads } from "./mechanisms";
import type { Rect } from "./types/geometry";
import type { GameInput, PlayerId } from "./types/player";
import type { CrateState, GameState } from "./types/simulation";

function direction(state: GameState, input: GameInput, id: PlayerId): number {
  if (state.interference?.players[id].effect.kind === "sticky") return 0;
  return Number(input[id].right) - Number(input[id].left);
}

// Trace a touching row so a second player can help from behind the first.
function pushers(state: GameState, input: GameInput, crate: CrateState, sign: number): PlayerId[] {
  const connected: Rect[] = [crate.rect];
  const ids: PlayerId[] = [];
  for (let pass = 0; pass < 2; pass += 1) {
    for (const player of Object.values(state.players)) {
      if (ids.includes(player.id) || direction(state, input, player.id) !== sign) continue;
      const close = connected.some((rect) => {
        const gap =
          sign > 0
            ? rect.x - player.rect.x - player.rect.width
            : player.rect.x - rect.x - rect.width;
        return (
          gap >= -0.01 &&
          gap <= MOVE_SPEED / 120 + 1 &&
          player.rect.y < rect.y + rect.height &&
          player.rect.y + player.rect.height > rect.y
        );
      });
      if (close) {
        ids.push(player.id);
        connected.push(player.rect);
      }
    }
  }
  return ids;
}

function push_crates(state: GameState, input: GameInput, dt: number): void {
  for (const crate of state.crates) {
    const definition = state.level.crates.find((entry) => entry.id === crate.id);
    for (const sign of [-1, 1]) {
      const helpers = pushers(state, input, crate, sign);
      if (helpers.length < (definition?.heavy ? 2 : 1)) continue;
      const solids = world_solids(state);
      solids.push(...state.crates.filter((entry) => entry !== crate).map((entry) => entry.rect));
      solids.push(
        ...Object.values(state.players)
          .filter((entry) => !helpers.includes(entry.id))
          .map((entry) => entry.rect),
      );
      crate.rect.x += clip_axis(crate.rect, sign * MOVE_SPEED * dt, "x", solids);
    }
  }
}

function fall_crates(state: GameState, dt: number): void {
  // Lower crates settle first, giving stacks stable supports in the same step.
  const crates = [...state.crates].sort((a, b) => b.rect.y - a.rect.y);
  for (const crate of crates) {
    const solids = world_solids(state);
    solids.push(...state.crates.filter((entry) => entry !== crate).map((entry) => entry.rect));
    solids.push(...Object.values(state.players).map((entry) => entry.rect));
    crate.velocity.y += GRAVITY * dt;
    const requested = crate.velocity.y * dt;
    const dy = clip_axis(crate.rect, requested, "y", solids);
    crate.rect.y += dy;
    crate.grounded = requested > 0 && dy < requested;
    if (dy !== requested) crate.velocity.y = 0;
    crate.supportId = state.platforms.find(
      (platform) => platform.active && stands_on(crate.rect, platform.rect),
    )?.id;
  }
}

function move_players(state: GameState, input: GameInput, dt: number): void {
  // A lower body moves first so a player standing on their head follows upward.
  const players = Object.values(state.players).sort((a, b) => b.rect.y - a.rect.y);
  for (const player of players) {
    const other = player.id === "isp" ? state.players.pac : state.players.isp;
    const solids = world_solids(state, player.id);
    solids.push(...state.crates.map((crate) => crate.rect));
    const standing =
      solids.some((rect) => stands_on(player.rect, rect)) || stands_on(player.rect, other.rect);
    player.coyoteTime = standing ? 0.1 : Math.max(0, player.coyoteTime - dt);
    player.jumpBufferTime = Math.max(0, player.jumpBufferTime - dt);
    const effect = state.interference?.players[player.id].effect;
    const sticky = effect?.kind === "sticky";
    if (!sticky && input[player.id].jump && !player.jumpHeld) player.jumpBufferTime = 0.12;
    player.jumpHeld = input[player.id].jump;
    let jumping = false;
    if (!sticky && effect?.kind !== "float" && player.jumpBufferTime > 0 && player.coyoteTime > 0) {
      player.velocity.y = -JUMP_SPEED;
      player.coyoteTime = 0;
      player.jumpBufferTime = 0;
      jumping = true;
    }
    const sign = direction(state, input, player.id);
    player.velocity.x =
      sign * MOVE_SPEED * (effect?.kind === "dizzy" ? 0.55 : 1) +
      (effect?.kind === "shove" ? effect.velocity.x : 0);
    if (sign !== 0) player.facing = sign < 0 ? -1 : 1;
    const requestedX = player.velocity.x * dt;
    const dx = clip_axis(player.rect, requestedX, "x", solids);
    // Push the partner only as far as their own obstacles permit.
    const touching = clip_axis(player.rect, dx, "x", [other.rect]);
    let allowedX = dx;
    if (touching !== dx) {
      const otherSolids = world_solids(state, other.id);
      otherSolids.push(...state.crates.map((crate) => crate.rect));
      const push = clip_axis(other.rect, dx - touching, "x", otherSolids);
      other.rect.x += push;
      allowedX = touching + push;
    }
    player.rect.x += allowedX;
    if (allowedX !== requestedX) player.velocity.x = 0;
    player.velocity.y = effect?.kind === "float" ? -155 : player.velocity.y + GRAVITY * dt;
    const requestedY = state.interference
      ? Math.max(-player.rect.y, player.velocity.y * dt)
      : player.velocity.y * dt;
    const rider = stands_on(other.rect, player.rect) && requestedY < 0;
    let dy = clip_axis(player.rect, requestedY, "y", solids);
    if (rider) {
      const riderSolids = world_solids(state, other.id);
      riderSolids.push(...state.crates.map((crate) => crate.rect));
      dy = clip_axis(other.rect, dy, "y", riderSolids);
      other.rect.y += dy;
    } else dy = clip_axis(player.rect, dy, "y", [other.rect]);
    player.rect.y += dy;
    if (dy !== player.velocity.y * dt) player.velocity.y = 0;
    player.grounded = !jumping && requestedY > 0 && dy < requestedY;
    player.supportId = state.platforms.find(
      (platform) => platform.active && stands_on(player.rect, platform.rect),
    )?.id;
    if (!player.supportId && stands_on(player.rect, other.rect)) player.supportId = other.id;
  }
  // Authored spawn overlap is not normal, but never allow it to trap both cells.
  const a = state.players.isp;
  const b = state.players.pac;
  if (overlaps(a.rect, b.rect)) {
    const top = a.rect.y < b.rect.y ? a : b;
    const bottom = top === a ? b : a;
    const dy = bottom.rect.y - top.rect.height - top.rect.y;
    const solids = world_solids(state, top.id);
    solids.push(...state.crates.map((crate) => crate.rect));
    top.rect.y += clip_axis(top.rect, dy, "y", solids);
  }
}

export function step_game(state: GameState, input: GameInput, dt: number): void {
  if (state.status !== "playing" || !Number.isFinite(dt) || dt <= 0) return;
  const count = Math.ceil(dt * 120);
  const step = dt / count;
  for (let index = 0; index < count && state.status === "playing"; index += 1) {
    step_interference(state, step);
    update_pads(state);
    move_platforms(state, step);
    push_crates(state, input, step);
    fall_crates(state, step);
    move_players(state, input, step);
    state.time += step;
    update_pads(state);
    update_outcome(state, step);
  }
}
