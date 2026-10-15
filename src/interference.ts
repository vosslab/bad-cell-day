import type { Vec2 } from "./types/geometry";
import type { InterferenceAttackDefinition, InterferenceState } from "./types/interference";
import type { LevelDefinition } from "./types/level";
import type { PlayerId } from "./types/player";
import type { GameState } from "./types/simulation";

export const EFFECT_DURATION = { float: 1.4, sticky: 0.6, dizzy: 0.6, shove: 0.4 };

// Shared visible hand position. No renderer animation enters the simulation clock.
export function interference_muzzle(
  level: LevelDefinition,
  attack: InterferenceAttackDefinition,
): Vec2 | undefined {
  const actor = level.villainScene?.[attack.kind === "bubble" ? "gem" : "cana"];
  return actor ? { x: actor.position.x + 22 * 1.6, y: actor.position.y - 18 * 1.6 } : undefined;
}

export function create_interference(level: LevelDefinition): InterferenceState {
  return {
    attackers: (level.interference ?? []).map((attack) => ({
      id: attack.id,
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
  if (!trial) return;
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
  for (const attacker of trial.attackers) {
    const definition = state.level.interference?.find((attack) => attack.id === attacker.id);
    if (!definition || trial.projectiles.some((projectile) => projectile.attackId === attacker.id))
      continue;
    attacker.remaining -= dt;
    if (attacker.remaining > 0) continue;
    if (attacker.phase === "cooldown") {
      attacker.phase = "windup";
      attacker.remaining = definition.windup;
    } else {
      const origin = interference_muzzle(state.level, definition);
      if (origin)
        trial.projectiles.push({
          attackId: definition.id,
          kind: definition.kind,
          origin,
          target: { ...definition.target },
          position: { ...origin },
          phase: "outgoing",
          hitPlayers: [],
        });
      attacker.phase = "cooldown";
      attacker.remaining = definition.cooldown;
    }
  }
  trial.projectiles = trial.projectiles.filter((projectile) => {
    const definition = state.level.interference?.find(
      (attack) => attack.id === projectile.attackId,
    );
    if (!definition) return false;
    const target = projectile.phase === "returning" ? projectile.origin : projectile.target;
    const dx = target.x - projectile.position.x;
    const dy = target.y - projectile.position.y;
    const distance = Math.hypot(dx, dy);
    const fraction = distance === 0 ? 1 : Math.min(1, (definition.speed * dt) / distance);
    projectile.position.x += dx * fraction;
    projectile.position.y += dy * fraction;
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
      hit_player(state, id, definition, dx);
      if (projectile.kind === "bubble") return false;
    }
    if (fraction < 1) return true;
    if (projectile.kind === "bubble" || projectile.phase === "returning") return false;
    projectile.phase = "returning";
    return true;
  });
}
