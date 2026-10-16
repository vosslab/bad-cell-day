import type { Vec2 } from "./types/geometry";
import type {
  InterferenceAttackDefinition,
  WeaponAction,
  WeaponGeometry,
  WeaponPose,
} from "./types/interference";
import type { LevelDefinition } from "./types/level";
import type { GameState } from "./types/simulation";

export const WEAPON_ART_SCALE = 1.6;
export const BUBBLE_BARREL_LENGTH = 20;
export const WEAPON_ACTION_DURATION = {
  release: 0.12,
  recoil: 0.18,
  reload: 0.45,
  catch: 0.16,
  recover: 0.35,
};

export function validate_interference_ranges(level: LevelDefinition): void {
  for (const attack of level.interference ?? []) {
    if (!Number.isFinite(attack.target.x) || !Number.isFinite(attack.target.y))
      throw new Error(`Level ${level.id} attack ${attack.id} requires a finite target.`);
    if (attack.kind === "bubble" && (!Number.isFinite(attack.maxRange) || attack.maxRange <= 0))
      throw new Error(
        `Level ${level.id} bubble attack ${attack.id} requires a finite positive maxRange.`,
      );
  }
}

// SVG coordinates use the same native image transform as the planted actor art.
function anatomical_point(actor: Readonly<Vec2>, facing: 1 | -1, x: number, y: number): Vec2 {
  const unit = 62 / 224;
  return {
    x: actor.x + (x - 120) * unit * WEAPON_ART_SCALE * facing,
    y: actor.y + (y * unit - 62) * WEAPON_ART_SCALE,
  };
}

export function weapon_geometry(
  level: LevelDefinition,
  attack: InterferenceAttackDefinition,
  target: Readonly<Vec2> = attack.target,
): WeaponGeometry | undefined {
  const actor = level.villainScene?.[attack.kind === "bubble" ? "gem" : "cana"];
  if (!actor) return undefined;
  const actorPosition = { ...actor.position };
  const facing = target.x < actorPosition.x ? -1 : 1;
  const gem = attack.kind === "bubble";
  const shoulder = anatomical_point(actorPosition, facing, gem ? 131 : 223, gem ? 190 : 151);
  const grip = anatomical_point(actorPosition, facing, gem ? 163 : 257, gem ? 167 : 137);
  const dx = target.x - grip.x;
  const dy = target.y - grip.y;
  const distance = Math.hypot(dx, dy);
  const ux = distance === 0 ? facing : dx / distance;
  const uy = distance === 0 ? 0 : dy / distance;
  // A nearby target cannot sit behind the muzzle of a full length barrel.
  const barrel = gem ? Math.min(BUBBLE_BARREL_LENGTH, distance) : 0;
  const releaseAnchor = { x: grip.x + ux * barrel, y: grip.y + uy * barrel };
  const travel = gem ? Math.min(distance - barrel, attack.maxRange) : distance;
  const endpoint = { x: releaseAnchor.x + ux * travel, y: releaseAnchor.y + uy * travel };
  return {
    kind: attack.kind,
    actorPosition,
    facing,
    shoulder,
    grip,
    releaseAnchor,
    catchAnchor: { ...releaseAnchor },
    aimAngle: Math.atan2(uy, ux),
    endpoint,
  };
}

export function interference_attack_enabled(
  state: GameState,
  attack: InterferenceAttackDefinition,
): boolean {
  return (
    state.status === "playing" &&
    !state.bossDefeated &&
    state.interference?.attackers.find((entry) => entry.id === attack.id)?.started === true
  );
}

export function weapon_pose(
  state: GameState,
  attack: InterferenceAttackDefinition,
): WeaponPose | undefined {
  const attacker = state.interference?.attackers.find((entry) => entry.id === attack.id);
  if (!attacker) return undefined;
  const geometry = weapon_geometry(state.level, attack, attacker.lockedTarget);
  if (!geometry) return undefined;
  // Terminal or waiting state cannot retain an old flight in its visible weapon pose.
  const projectile = interference_attack_enabled(state, attack)
    ? state.interference?.projectiles.find((entry) => entry.attackId === attack.id)
    : undefined;
  let action: WeaponAction = "ready";
  let progress = 0;
  if (state.bossDefeated) action = "defeated";
  else if (state.status !== "playing") action = "ready";
  else if (!attacker.started) action = "waiting";
  else if (attacker.phase === "windup") {
    action = "windup";
    progress = attack.windup <= 0 ? 1 : 1 - attacker.remaining / attack.windup;
  } else {
    const marker = attacker.actionMarker;
    let age = marker ? Math.max(0, state.time - marker.at) : Infinity;
    if (marker?.kind === "interrupted" && age < WEAPON_ACTION_DURATION.recover) {
      action = "interrupted";
      progress = age / WEAPON_ACTION_DURATION.recover;
    }
    const windows: readonly (keyof typeof WEAPON_ACTION_DURATION)[] =
      marker?.kind === "interrupted"
        ? []
        : marker?.kind === "catch"
          ? ["catch", "recover"]
          : attack.kind === "bubble"
            ? ["release", "recoil", "reload"]
            : ["release"];
    let marked = action === "interrupted";
    for (const window of windows) {
      const duration = WEAPON_ACTION_DURATION[window];
      if (age < duration) {
        action = window;
        progress = age / duration;
        marked = true;
        break;
      }
      age -= duration;
    }
    if (!marked && projectile) {
      action = projectile.phase;
      const target = projectile.phase === "returning" ? projectile.origin : projectile.target;
      const length = Math.hypot(
        projectile.target.x - projectile.origin.x,
        projectile.target.y - projectile.origin.y,
      );
      progress =
        length === 0
          ? 1
          : 1 -
            Math.hypot(target.x - projectile.position.x, target.y - projectile.position.y) / length;
    }
  }
  return {
    ...geometry,
    action,
    progress: Math.max(0, Math.min(1, progress)),
    holdingWeapon: attack.kind === "bubble" || !projectile,
  };
}
