import { character_image, hero_image } from "./character_art";
import { JUMP_SPEED } from "./constants";
import { draw_weapon, weapon_body_lean } from "./render_weapon";
import { WEAPON_ART_SCALE } from "./weapon_pose";
import type { PlayerInterferenceEffect, WeaponPose } from "./types/interference";
import type { Rect } from "./types/geometry";
import type { PlayerState } from "./types/player";
import type { HeroFeedback, HeroSupportPose } from "./types/presentation";

const INK = "#142b42";
const PLAYER_ART_HEIGHT = 88;
export const VILLAIN_ART_SCALE = WEAPON_ART_SCALE;

function player_art_center(player: PlayerState, worldWidth: number): number {
  // This margin also contains the restrained sole-anchored lean and broad brace.
  const padding = ((PLAYER_ART_HEIGHT * 240) / 224 / 2) * 1.025 + 6;
  return Math.max(padding, Math.min(worldWidth - padding, player.rect.x + player.rect.width / 2));
}

export function rounded(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  fill: string,
  radius = 8,
  stroke = INK,
): void {
  context.beginPath();
  context.roundRect(rect.x, rect.y, rect.width, rect.height, radius);
  context.fillStyle = fill;
  context.fill();
  if (stroke) {
    context.strokeStyle = stroke;
    context.lineWidth = 2;
    context.stroke();
  }
}

export function label(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  color = "#eafaff",
  size = 12,
): void {
  context.fillStyle = color;
  context.font = `800 ${size}px system-ui, sans-serif`;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, x, y);
}

function ellipse(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  rx: number,
  ry: number,
  fill: string,
): void {
  context.beginPath();
  context.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  context.fillStyle = fill;
  context.fill();
}

export function draw_player(
  context: CanvasRenderingContext2D,
  player: PlayerState,
  time: number,
  dead: boolean,
  worldWidth: number,
  feedback?: HeroFeedback,
  reducedMotion = false,
  effect?: PlayerInterferenceEffect,
  supportPose: HeroSupportPose = "solo",
): void {
  const { x, y, width, height } = player.rect;
  const blue = player.id === "isp";
  const affected = !dead && effect !== undefined && effect.kind !== "none";
  const acknowledging = !dead && (feedback?.acknowledgeRemaining ?? 0) > 0;
  const holding = !dead && feedback?.holding === true;
  const responding = acknowledging || holding;
  const supported = supportPose !== "solo";
  const bob =
    !responding && !affected && !supported && !reducedMotion && player.grounded
      ? Math.sin(time * 5 + (blue ? 0 : 2)) * 1.2
      : 0;
  const squash =
    responding || affected || supported
      ? 0
      : player.grounded
        ? reducedMotion
          ? 0
          : Math.sin(time * 5) * 0.025
        : dead || reducedMotion
          ? -0.07
          : player.velocity.y < 0
            ? -0.07 * Math.min(1, -player.velocity.y / JUMP_SPEED)
            : 0.025 * Math.min(1, player.velocity.y / JUMP_SPEED);
  const artCenter = player_art_center(player, worldWidth);
  ellipse(context, x + width / 2, y + height + 3, width * 0.52, 4, "#07162255");
  context.save();
  context.translate(artCenter, y + height);
  if (affected) {
    // Each effect has a readable static silhouette even with reduced motion.
    // Sole-anchored transforms leave the collision feet and identity untouched.
    if (effect.kind === "float") {
      context.transform(1, 0, -0.13 * player.facing, 1, 0, 0);
      context.scale(0.94, 1.06);
    } else if (effect.kind === "dizzy") {
      const sway = reducedMotion ? 0 : Math.sin(time * 7) * 0.035;
      context.transform(1, 0, (0.16 + sway) * player.facing, 1, 0, 0);
      context.scale(1.03, 0.96);
    } else if (effect.kind === "sticky") {
      context.scale(0.96, 0.91);
    } else if (effect.kind === "shove") {
      const direction = Math.sign(effect.velocity.x) || player.facing;
      context.transform(1, 0, 0.18 * direction, 1, 0, 0);
      context.scale(1.08, 0.88);
    }
  } else if (responding) {
    // Shearing about y=0 preserves sole height and center. Collision brackets
    // stay put while each hero takes a distinct pose within the existing margin.
    const settle = acknowledging
      ? reducedMotion
        ? 1
        : Math.min(1, (feedback?.acknowledgeRemaining ?? 0) / 0.16)
      : 1;
    const lean = acknowledging ? (blue ? 0.04 : -0.025) : blue ? -0.075 : 0;
    const breadth = acknowledging ? (blue ? -0.02 : 0.025) : blue ? -0.015 : 0.06;
    const rise = acknowledging ? (blue ? 0.025 : 0.015) : blue ? -0.02 : -0.05;
    context.transform(1, 0, lean * player.facing * settle, 1, 0, 0);
    context.scale(1 + breadth * settle, 1 + rise * settle);
  }
  context.scale(1 + squash, 1 - squash);
  context.translate(-width / 2, -height + bob);
  const image = hero_image(player.id, supportPose);
  if (image.complete && image.naturalWidth > 0) {
    // Enlarge the art, keeping its y=224 soles on the unchanged collision feet.
    const size = (PLAYER_ART_HEIGHT * 240) / 224;
    context.translate(0, height - PLAYER_ART_HEIGHT);
    context.translate(width / 2, 0);
    context.scale(player.facing, 1);
    context.drawImage(image, -size / 2, 0, size, size);
    if (dead) {
      label(context, "x", -size * 0.1, size * 0.42, INK, 10);
      label(context, "x", size * 0.1, size * 0.42, INK, 10);
    }
  } else {
    // Keep players visible while the shared SVG request is pending or unavailable.
    rounded(
      context,
      { x: width / 2 - 24, y: height - PLAYER_ART_HEIGHT, width: 48, height: PLAYER_ART_HEIGHT },
      blue ? "#4dcaff" : "#ffad50",
      16,
    );
    label(context, dead ? "x x" : ":)", width / 2, height - PLAYER_ART_HEIGHT / 2, INK, 18);
  }
  context.restore();
  if (dead) {
    for (let index = 0; index < 5; index += 1) {
      const angle = index * 1.256 + time;
      label(
        context,
        "*",
        artCenter + Math.cos(angle) * 39,
        y + height - PLAYER_ART_HEIGHT * 0.7 + Math.sin(angle) * 29,
        "#ffe879",
        19,
      );
    }
    ellipse(context, x + width / 2, y + height - 2, 25, 9, "#e2f7ff66");
  }
}

// Draw collision footing and identity after both bodies so stacking keeps them readable.
export function draw_player_overlay(
  context: CanvasRenderingContext2D,
  player: PlayerState,
  worldWidth: number,
): void {
  const { x, y, width, height } = player.rect;
  const blue = player.id === "isp";
  const color = blue ? "#8cddff" : "#ffc980";
  const feet = y + height;
  context.save();
  context.lineCap = "round";
  context.beginPath();
  context.moveTo(x, feet - 3);
  context.lineTo(x, feet);
  context.lineTo(x + width, feet);
  context.lineTo(x + width, feet - 3);
  context.strokeStyle = INK;
  context.lineWidth = 4;
  context.stroke();
  context.strokeStyle = color;
  context.lineWidth = 1.5;
  context.stroke();
  context.restore();
  const labelX = player_art_center(player, worldWidth);
  // At a wall both bodies can share an art center; keep both identities readable.
  const edgeOffset = labelX !== x + width / 2 && !blue ? 20 : 0;
  const labelY = Math.max(player.atExit ? 29 : 14, feet - PLAYER_ART_HEIGHT - 23 - edgeOffset);
  rounded(context, { x: labelX - 22, y: labelY - 8, width: 44, height: 17 }, "#102738e8", 6, "");
  label(context, blue ? "ISP" : "PAC", labelX, labelY, color, 9);
  if (player.atExit) label(context, "READY", labelX, labelY - 16, "#a9f4ad", 10);
}

export function draw_villain(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  gem: boolean,
  time: number,
  pose: "idle" | "opening" | "countered" | "escape" = "idle",
  weapon?: WeaponPose,
): void {
  const color = gem ? "#bd92f5" : "#98ddb0";
  context.save();
  context.translate(x, y + (weapon ? 0 : Math.sin(time * (gem ? 2 : 3)) * 1.5));
  if (weapon) context.transform(1, 0, weapon_body_lean(weapon), 1, 0, 0);
  context.scale(VILLAIN_ART_SCALE, VILLAIN_ART_SCALE);
  context.save();
  if (weapon) context.scale(weapon.facing, 1);
  if (pose === "escape" && !weapon) context.rotate((gem ? -1 : 1) * 0.13);
  const image = character_image(gem ? "gem" : "cana");
  const size = (62 * 240) / 224;
  if (image.complete && image.naturalWidth > 0) {
    context.drawImage(image, -size / 2, -62, size, size);
  } else {
    rounded(context, { x: -21, y: -59, width: 42, height: 57 }, color, 14);
    label(context, gem ? ">:|" : ">:)", 0, -42, INK, 13);
    if (gem) {
      context.beginPath();
      context.moveTo(-17, -34);
      context.lineTo(18, -34);
      context.lineTo(8, -9);
      context.lineTo(0, -17);
      context.lineTo(-9, -10);
      context.closePath();
      context.fillStyle = "#603294";
      context.fill();
    }
  }
  if (!weapon) {
    const size = (62 * 240) / 224;
    const unit = size / 240;
    context.strokeStyle = gem ? "#ad7ef1" : "#82cb60";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo((gem ? 131 : 223) * unit - size / 2, (gem ? 190 : 151) * unit - 62);
    context.lineTo((gem ? 163 : 231) * unit - size / 2, (gem ? 167 : 151) * unit - 62);
    context.stroke();
    ellipse(
      context,
      (gem ? 163 : 231) * unit - size / 2,
      (gem ? 167 : 151) * unit - 62,
      3,
      3,
      "#b8e7ce",
    );
  }
  context.restore();
  // Scenery gestures yield to the one owned weapon arm during attacks.
  const gesture = Math.sin(time * 4) * 3;
  context.lineWidth = 3;
  context.lineCap = "round";
  context.strokeStyle = color;
  if (weapon) {
    // Weapon art is drawn in world coordinates after this planted body.
  } else if (pose === "opening") {
    // Both pull a lever; Cana's reservoir visibly siphons the linked glucose line.
    context.beginPath();
    context.moveTo(18, -9);
    context.lineTo(25 + gesture, -26);
    context.stroke();
    ellipse(context, 25 + gesture, -26, 4, 4, "#f4e7bc");
  } else if (gem) {
    // Gem slowly strokes the lower edge of his oversized beard.
    context.beginPath();
    context.moveTo(22, -21);
    context.quadraticCurveTo(29, -31, 10 + gesture, -27);
    context.stroke();
    ellipse(context, 10 + gesture, -27, 3.5, 3, "#d5b9ff");
  } else {
    // Cana admires his smooth chin in a tiny handheld mirror.
    context.beginPath();
    context.moveTo(22, -14);
    context.lineTo(27, -30 + gesture);
    context.stroke();
    ellipse(context, 27, -36 + gesture, 6, 8, "#dbf8ff");
    context.strokeStyle = "#8ac99c";
    context.lineWidth = 2;
    context.stroke();
  }
  if (pose === "countered") label(context, "?!", -25, -55, "#fff0a8", 14);
  if (pose === "escape") {
    for (let index = 0; index < 3; index += 1) {
      label(context, "o", -28 - index * 6, -8 + index * 4, color, 10 - index);
    }
  }
  context.restore();
  if (weapon) draw_weapon(context, weapon);
  const name = gem ? "GEM" : "CANA";
  const nameY = y + 12 * VILLAIN_ART_SCALE;
  context.save();
  context.font = "800 16px system-ui, sans-serif";
  const nameWidth = context.measureText(name).width;
  context.restore();
  rounded(
    context,
    { x: x - nameWidth / 2 - 8, y: nameY - 10, width: nameWidth + 16, height: 20 },
    "#102738e8",
    8,
    "",
  );
  label(context, name, x, nameY, color, 16);
}

export function draw_boss(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  name: string,
  defeated: boolean,
  final: boolean,
  time: number,
): void {
  const { x, y, width, height } = rect;
  const center = x + width / 2;
  if (defeated) {
    for (let index = 0; index < 12; index += 1) {
      const angle = (index * Math.PI) / 6;
      const distance = final ? 38 + (index % 3) * 14 : 30;
      ellipse(
        context,
        center + Math.cos(angle) * distance,
        y + height / 2 + Math.sin(angle) * distance * 0.6,
        12,
        10,
        index % 2 ? "#ffd86b" : "#ff987d",
      );
    }
    rounded(
      context,
      { x: center - 76, y: y + height / 2 - 15, width: 152, height: 30 },
      "#153b46",
      10,
    );
    label(
      context,
      final ? "CELL SAVED!" : "MACHINE DISABLED",
      center,
      y + height / 2,
      "#d8ffbc",
      13,
    );
    return;
  }
  const color = final ? "#a2519f" : name.toLowerCase().includes("cana") ? "#398a9a" : "#885c98";
  // Bellows and side pistons distinguish the machine from ordinary platforms.
  for (const side of [-1, 1]) {
    rounded(
      context,
      { x: center + side * (width / 2 + 10) - 13, y: y + 30, width: 26, height: height - 25 },
      "#576f7c",
      7,
    );
    ellipse(context, center + side * (width / 2 + 9), y + height, 23, 10, INK);
  }
  rounded(context, rect, color, final ? 25 : 15);
  rounded(
    context,
    { x: x + 12, y: y + 16, width: width - 24, height: Math.max(30, height * 0.38) },
    "#172c43",
    12,
  );
  for (const side of [-1, 1]) {
    ellipse(context, center + side * width * 0.2, y + 32, 10, 8, "#ffda70");
    ellipse(context, center + side * width * 0.2 + Math.sin(time) * 3, y + 33, 3, 5, INK);
  }
  for (let index = 0; index < 4; index += 1) {
    rounded(
      context,
      { x: x + 17 + (index * (width - 34)) / 4, y: y + height - 25, width: 9, height: 12 },
      "#d2e5e8",
      2,
    );
  }
  label(context, name.toUpperCase(), center, y - 17, "#ffe1a6", 11);
}
