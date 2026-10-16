import { clip_axis, world_solids } from "./collisions";
import { JUMP_SPEED } from "./constants";
import type { Vec2 } from "./types/geometry";
import type { InterferenceAttackDefinition, InterferenceState } from "./types/interference";
import type { LevelDefinition } from "./types/level";
import type { PlayerId } from "./types/player";
import type { GameState } from "./types/simulation";
import {
  interference_attack_enabled,
  validate_interference_ranges,
  weapon_geometry,
} from "./weapon_pose";

export { interference_attack_enabled } from "./weapon_pose";

export const EFFECT_DURATION = { float: 1.4, sticky: 0.6, dizzy: 0.6, shove: 0.4 };

// Shared visible hand position. No renderer animation enters the simulation clock.
export function interference_muzzle(
  level: LevelDefinition,
  attack: InterferenceAttackDefinition,
): Vec2 | undefined {
  return weapon_geometry(level, attack)?.releaseAnchor;
}

export function create_interference(level: LevelDefinition): InterferenceState {
  validate_interference_ranges(level);
  return {
    attackers: (level.interference ?? []).map((attack) => ({
      id: attack.id,
      started: attack.startsOnPadId === undefined,
      usedInterruptPadIds: [],
      phase: "cooldown",
      remaining: attack.cooldown,
    })),
    projectiles: [],
    players: {
      isp: { effect: { kind: "none" }, immunityRemaining: 0 },
      pac: { effect: { kind: "none" }, immunityRemaining: 0 },
    },
  };
}

function hit_player(
  state: GameState,
  id: PlayerId,
  attack: InterferenceAttackDefinition,
  horizontal: number,
): void {
  const affected = state.interference?.players[id];
  if (!affected || affected.immunityRemaining > 0) return;
  const kind =
    attack.kind === "bubble"
      ? id === "isp"
        ? "float"
        : "sticky"
      : id === "isp"
        ? "dizzy"
        : "shove";
  affected.effect =
    kind === "shove"
      ? {
          kind,
          remaining: EFFECT_DURATION.shove,
          velocity: { x: Math.sign(horizontal) * 260, y: 0 },
        }
      : { kind, remaining: EFFECT_DURATION[kind] };
  affected.immunityRemaining = EFFECT_DURATION[kind] + 0.8;
  if (kind === "sticky") state.players[id].jumpBufferTime = 0;
}

export function step_interference(state: GameState, dt: number): void {
  const trial = state.interference;
  if (!trial || state.status !== "playing") return;
  for (const player of Object.values(trial.players)) {
    player.immunityRemaining = Math.max(0, player.immunityRemaining - dt);
    if (player.effect.kind !== "none") {
      player.effect.remaining -= dt;
      if (player.effect.kind === "shove") {
        const decay = Math.max(0, 1 - dt / Math.max(dt, player.effect.remaining + dt));
        player.effect.velocity.x *= decay;
      }
      if (player.effect.remaining <= 0) player.effect = { kind: "none" };
    }
  }
  if (state.bossDefeated) {
    trial.projectiles = [];
    for (const attacker of trial.attackers) {
      delete attacker.actionMarker;
      delete attacker.lockedTarget;
    }
    return;
  }
  for (const attacker of trial.attackers) {
    const definition = state.level.interference?.find((attack) => attack.id === attacker.id);
    if (!definition) continue;
    let justStarted = false;
    if (!attacker.started) {
      if (!state.pads.some((pad) => pad.id === definition.startsOnPadId && pad.active)) continue;
      attacker.started = true;
      justStarted = true;
      attacker.phase = "cooldown";
      attacker.remaining = definition.cooldown;
      delete attacker.actionMarker;
      delete attacker.lockedTarget;
    }
    // Consume every newly active bound pad together, including pads latched before startup.
    const interruptPadIds = state.pads
      .filter(
        (pad) =>
          pad.active &&
          definition.interruptedByPadIds?.includes(pad.id) &&
          !attacker.usedInterruptPadIds.includes(pad.id),
      )
      .map((pad) => pad.id);
    if (interruptPadIds.length > 0) {
      attacker.usedInterruptPadIds.push(...interruptPadIds);
      trial.projectiles = trial.projectiles.filter(
        (projectile) => projectile.attackId !== attacker.id,
      );
      attacker.actionMarker = { kind: "interrupted", at: state.time };
      attacker.phase = "cooldown";
      attacker.remaining = definition.cooldown;
      delete attacker.lockedTarget;
      continue;
    }
    if (justStarted) continue;
    if (trial.projectiles.some((projectile) => projectile.attackId === attacker.id)) continue;
    attacker.remaining -= dt;
    if (attacker.remaining > 0) continue;
    if (attacker.phase === "cooldown") {
      const actor = state.level.villainScene?.cana;
      if (definition.kind === "boomerang" && definition.aim === "nearest" && actor) {
        const centers = [state.players.isp.rect, state.players.pac.rect].map((rect) => ({
          x: rect.x + rect.width / 2,
          y: rect.y + rect.height / 2,
        }));
        // Compare from Cana's authored position; a distance tie belongs to Isp.
        attacker.lockedTarget = centers.reduce((nearest, center) =>
          (center.x - actor.position.x) ** 2 + (center.y - actor.position.y) ** 2 <
          (nearest.x - actor.position.x) ** 2 + (nearest.y - actor.position.y) ** 2
            ? center
            : nearest,
        );
      }
      attacker.phase = "windup";
      attacker.remaining = definition.windup;
    } else {
      const geometry = weapon_geometry(state.level, definition, attacker.lockedTarget);
      if (geometry) {
        const origin = geometry.releaseAnchor;
        trial.projectiles.push({
          attackId: definition.id,
          kind: definition.kind,
          origin,
          target: geometry.endpoint,
          position: { ...origin },
          phase: "outgoing",
          hitPlayers: [],
        });
        attacker.actionMarker = { kind: "release", at: state.time };
      }
      attacker.phase = "cooldown";
      attacker.remaining = definition.cooldown;
    }
  }
  trial.projectiles = trial.projectiles.filter((projectile) => {
    const definition = state.level.interference?.find(
      (attack) => attack.id === projectile.attackId,
    );
    if (!definition || !interference_attack_enabled(state, definition)) return false;
    const target = projectile.phase === "returning" ? projectile.origin : projectile.target;
    const dx = target.x - projectile.position.x;
    const dy = target.y - projectile.position.y;
    const distance = Math.hypot(dx, dy);
    const fraction = distance === 0 ? 1 : Math.min(1, (definition.speed * dt) / distance);
    const previousX = projectile.position.x;
    const previousY = projectile.position.y;
    projectile.position.x += dx * fraction;
    projectile.position.y += dy * fraction;
    if (projectile.kind === "boomerang") {
      for (const crate of state.crates) {
        const authored = state.level.crates.find((entry) => entry.id === crate.id);
        if (!authored || authored.heavy) continue;
        const rect = crate.rect;
        const nearestX = Math.max(rect.x, Math.min(rect.x + rect.width, projectile.position.x));
        const nearestY = Math.max(rect.y, Math.min(rect.y + rect.height, projectile.position.y));
        if (
          Math.hypot(nearestX - projectile.position.x, nearestY - projectile.position.y) >
          definition.radius
        )
          continue;
        const solids = world_solids(state);
        solids.push(...Object.values(state.players).map((player) => player.rect));
        solids.push(...state.crates.filter((other) => other !== crate).map((other) => other.rect));
        crate.rect.x += clip_axis(crate.rect, projectile.position.x - previousX, "x", solids);
      }
    }
    for (const id of ["isp", "pac"] as const) {
      const rect = state.players[id].rect;
      const nearestX = Math.max(rect.x, Math.min(rect.x + rect.width, projectile.position.x));
      const nearestY = Math.max(rect.y, Math.min(rect.y + rect.height, projectile.position.y));
      if (
        Math.hypot(nearestX - projectile.position.x, nearestY - projectile.position.y) >
          definition.radius ||
        projectile.hitPlayers.includes(id)
      )
        continue;
      projectile.hitPlayers.push(id);
      const player = state.players[id];
      if (
        projectile.kind === "bubble" &&
        id === "pac" &&
        trial.players.pac.immunityRemaining <= 0 &&
        !player.grounded &&
        player.velocity.y > 0 &&
        rect.y + rect.height < projectile.position.y &&
        (player.velocity.x * dt - (projectile.position.x - previousX)) *
          (nearestX - projectile.position.x) +
          (player.velocity.y * dt - (projectile.position.y - previousY)) *
            (nearestY - projectile.position.y) <
          0
      ) {
        player.velocity.y = -JUMP_SPEED;
        player.grounded = false;
        delete player.supportId;
        player.coyoteTime = 0;
        player.jumpBufferTime = 0;
        continue;
      }
      hit_player(state, id, definition, dx);
      if (projectile.kind === "bubble") return false;
    }
    if (fraction < 1) return true;
    if (projectile.kind === "bubble") return false;
    if (projectile.phase === "returning") {
      const attacker = trial.attackers.find((entry) => entry.id === projectile.attackId);
      if (attacker) attacker.actionMarker = { kind: "catch", at: state.time };
      return false;
    }
    projectile.phase = "returning";
    return true;
  });
}
