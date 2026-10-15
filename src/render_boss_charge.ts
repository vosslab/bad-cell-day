import { label, rounded } from "./render_characters";
import type { GameState } from "./types/simulation";

export function draw_boss_charge(context: CanvasRenderingContext2D, state: GameState): void {
  const boss = state.level.boss;
  if (!boss || boss.chargeSeconds === undefined) return;
  const targets = boss.targetPadIds.map((id) => ({
    definition: state.level.pads.find((pad) => pad.id === id),
    active: state.pads.find((pad) => pad.id === id)?.active ?? false,
  }));
  const both = targets.every((target) => target.active);
  const blue = targets.some((target) => target.definition?.accepts === "isp" && target.active);
  const orange = targets.some((target) => target.definition?.accepts === "pac" && target.active);
  const fraction = state.bossDefeated ? 1 : Math.min(1, state.bossCharge / boss.chargeSeconds);
  const x = 340;
  const y = 45;
  context.save();
  rounded(context, { x, y, width: 310, height: 83 }, "#152638f5", 10, "#f0b4d1");
  label(context, "TUMOR CORE / CO-OP SHUTDOWN", x + 155, y + 12, "#ffe5f1", 11);
  for (const [index, target] of targets.entries()) {
    const isp = target.definition?.accepts === "isp";
    const active = target.active || state.bossDefeated;
    const color = isp ? "#72d8ff" : "#ffbb65";
    const chipX = x + 12 + index * 147;
    rounded(
      context,
      { x: chipX, y: y + 24, width: 139, height: 20 },
      active ? (isp ? "#174a68" : "#68411e") : "#233242",
      5,
      color,
    );
    const status = state.bossDefeated ? "DONE" : active ? "HELD" : "WAIT";
    label(
      context,
      `${isp ? "ISP" : "PAC"} TARGET: ${status}`,
      chipX + 69.5,
      y + 34,
      active ? "#ffffff" : color,
      10,
    );
  }
  const instruction = state.bossDefeated
    ? "SHUT DOWN! Both friends can reach the exits."
    : both
      ? `HOLD TOGETHER! ${state.bossCharge.toFixed(1)} / ${boss.chargeSeconds}s`
      : blue
        ? "ISP holds the bridge. PAC: reach your TARGET!"
        : orange
          ? "PAC is ready. ISP: hold your TARGET too!"
          : `Reach both TARGETS. Hold together for ${boss.chargeSeconds}s.`;
  label(context, instruction, x + 155, y + 56, state.bossDefeated ? "#bcffb2" : "#fff4d6", 10);
  rounded(context, { x: x + 12, y: y + 68, width: 286, height: 8 }, "#081824", 4, "");
  if (fraction > 0) {
    rounded(
      context,
      { x: x + 12, y: y + 68, width: 286 * fraction, height: 8 },
      state.bossDefeated ? "#a5f891" : "#ffdf6b",
      4,
      "",
    );
  }
  context.restore();
}
