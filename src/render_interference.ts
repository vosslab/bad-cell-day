import { EFFECT_DURATION, interference_attack_enabled, interference_muzzle } from "./interference";
import { label, rounded } from "./render_characters";
import type { GameState } from "./types/simulation";

function boomerang(context: CanvasRenderingContext2D, x: number, y: number, angle: number): void {
  context.save();
  context.translate(x, y);
  context.rotate(angle);
  context.beginPath();
  context.moveTo(-11, -7);
  context.lineTo(0, 5);
  context.lineTo(11, -7);
  context.strokeStyle = "#ffe697";
  context.lineWidth = 6;
  context.lineJoin = "round";
  context.stroke();
  context.restore();
}

export function draw_interference(
  context: CanvasRenderingContext2D,
  state: GameState,
  reducedMotion: boolean,
): void {
  const trial = state.interference;
  if (!trial) return;
  const kinds = new Set(state.level.interference?.map((attack) => attack.kind));
  const legend = [
    ...(kinds.has("bubble") ? ["BUBBLE: ISP FLOAT / PAC STUCK"] : []),
    ...(kinds.has("boomerang") ? ["BOOMERANG: ISP DIZZY / PAC SHOVE"] : []),
  ];
  legend.forEach((text, index) =>
    label(context, text, state.level.world.width / 2, 47 + index * 17, "#fff4db", 11),
  );
  for (const attack of state.level.interference ?? []) {
    const origin = interference_muzzle(state.level, attack);
    if (!origin) continue;
    const enabled = interference_attack_enabled(state, attack);
    const warning =
      enabled &&
      trial.attackers.some((actor) => actor.id === attack.id && actor.phase === "windup");
    const flying =
      enabled && trial.projectiles.some((projectile) => projectile.attackId === attack.id);
    const disablingPad = state.pads.find(
      (pad) => pad.active && attack.disabledByPadIds?.includes(pad.id),
    );
    const latched = disablingPad?.latched ?? false;
    const status = state.bossDefeated
      ? "DEFEATED"
      : !enabled
        ? disablingPad
          ? latched
            ? "OFF - LATCHED"
            : "HELD - SILENCED"
          : "WAITING FOR POWER"
        : warning
          ? "WINDUP"
          : flying
            ? "IN FLIGHT"
            : "RECHARGING";
    const color = enabled ? (warning ? "#fff4b2" : "#f0e5bd") : "#bdf3d1";
    const statusX = origin.x - 22 * 1.6;
    const statusY = origin.y + 18 * 1.6 + 39;
    rounded(
      context,
      { x: statusX - 79, y: statusY - 10, width: 158, height: 20 },
      "#192b3aee",
      5,
      color,
    );
    label(context, status, statusX, statusY, color, 10);
    context.save();
    if (warning) {
      context.strokeStyle = warning ? "#fff4b2" : "#f0e5bd55";
      context.lineWidth = warning ? 3 : 1;
      context.setLineDash([7, 7]);
      context.beginPath();
      context.moveTo(origin.x, origin.y);
      context.lineTo(attack.target.x, attack.target.y);
      context.stroke();
      context.setLineDash([]);
      label(
        context,
        "AIMING",
        (origin.x + attack.target.x) / 2,
        (origin.y + attack.target.y) / 2 - 14,
        "#fff4b2",
        11,
      );
    }
    context.globalAlpha = enabled ? 1 : 0.5;
    if (attack.kind === "bubble") {
      // The barrel ends exactly where the simulation projectile starts.
      rounded(
        context,
        { x: origin.x - 20, y: origin.y - 7, width: 20, height: 14 },
        "#8056a3",
        4,
        "#ecd4ff",
      );
      context.beginPath();
      context.arc(origin.x, origin.y, 7, 0, Math.PI * 2);
      context.strokeStyle = "#d9f6ff";
      context.lineWidth = 3;
      context.stroke();
    } else {
      if (!flying) boomerang(context, origin.x, origin.y, -Math.PI / 2);
      context.beginPath();
      context.moveTo(origin.x - 15, origin.y + 6);
      context.lineTo(origin.x - 2, origin.y + 3);
      context.strokeStyle = "#bff1c9";
      context.lineWidth = 5;
      context.stroke();
    }
    if (!enabled) {
      // A static crossed muzzle remains clear even with motion disabled.
      context.globalAlpha = 1;
      context.strokeStyle = "#bdf3d1";
      context.lineWidth = 3;
      context.beginPath();
      context.moveTo(origin.x - 10, origin.y - 10);
      context.lineTo(origin.x + 10, origin.y + 10);
      context.moveTo(origin.x + 10, origin.y - 10);
      context.lineTo(origin.x - 10, origin.y + 10);
      context.stroke();
    }
    context.restore();
  }
  for (const projectile of trial.projectiles) {
    const definition = state.level.interference?.find(
      (attack) => attack.id === projectile.attackId,
    );
    if (!definition || !interference_attack_enabled(state, definition)) continue;
    const { x, y } = projectile.position;
    if (projectile.kind === "boomerang")
      boomerang(context, x, y, reducedMotion ? 0 : state.time * 3);
    else {
      context.save();
      context.fillStyle = "#b9eaff55";
      context.strokeStyle = "#e1f9ff";
      context.lineWidth = 2.5;
      context.beginPath();
      context.arc(x, y, 12, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.restore();
    }
  }
}

export function draw_interference_effects(
  context: CanvasRenderingContext2D,
  state: GameState,
  reducedMotion: boolean,
): void {
  const trial = state.interference;
  if (!trial) return;
  for (const id of ["isp", "pac"] as const) {
    const affected = trial.players[id];
    const effect = affected.effect;
    const rect = state.players[id].rect;
    const x = rect.x + rect.width / 2;
    const y = rect.y + rect.height - 43;
    if (effect.kind !== "none") {
      context.save();
      context.lineWidth = 3;
      context.strokeStyle = effect.kind === "dizzy" ? "#ffe697" : "#e1f9ff";
      context.beginPath();
      context.ellipse(
        x,
        y,
        45,
        50,
        0,
        -Math.PI / 2,
        -Math.PI / 2 + (Math.PI * 2 * effect.remaining) / EFFECT_DURATION[effect.kind],
      );
      context.stroke();
      if (effect.kind === "float") {
        context.fillStyle = "#b9eaff22";
        context.beginPath();
        context.ellipse(x, y, 45, 50, 0, 0, Math.PI * 2);
        context.fill();
      }
      if (effect.kind === "dizzy") {
        const wobble = reducedMotion ? 0 : Math.sin(state.time * 7) * 5;
        label(context, "*  *  *", x + wobble, rect.y + rect.height - 104, "#ffe697", 15);
      }
      if (effect.kind === "sticky") {
        context.fillStyle = "#cea4ed88";
        context.fillRect(rect.x - 5, rect.y + rect.height - 5, rect.width + 10, 8);
      }
      const text = effect.kind === "sticky" ? "STUCK" : effect.kind.toUpperCase();
      label(context, text, x, rect.y + rect.height + 26, "#fff4db", 11);
      context.restore();
    } else if (affected.immunityRemaining > 0) {
      context.save();
      context.strokeStyle = "#f8edb7";
      context.setLineDash([3, 5]);
      context.lineWidth = 2;
      context.beginPath();
      context.ellipse(x, y, 45, 50, 0, 0, Math.PI * 2);
      context.stroke();
      label(context, "RECOVER", x, rect.y + rect.height + 26, "#fff4db", 10);
      context.restore();
    }
  }
}
