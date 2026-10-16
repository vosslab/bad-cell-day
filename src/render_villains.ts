import { draw_villain, label, rounded, VILLAIN_ART_SCALE } from "./render_characters";
import { counterweight_header_rect } from "./render_counterweights";
import { interference_attack_enabled } from "./interference";
import { weapon_pose } from "./weapon_pose";
import { resolve_villain_position } from "./villain_position";
import type { Rect } from "./types/geometry";
import type { GameState } from "./types/simulation";
import type { VillainScheme } from "./types/villain";

function target_rect(state: GameState, scheme: VillainScheme): Readonly<Rect> | undefined {
  if (scheme.target.kind === "barrier") {
    return state.level.barriers.find((item) => item.id === scheme.target.id)?.rect;
  }
  if (scheme.target.kind === "platform") {
    return state.platforms.find((item) => item.id === scheme.target.id)?.rect;
  }
  return state.hazards.find((item) => item.id === scheme.target.id)?.rect;
}

function scheme_countered(state: GameState, scheme: VillainScheme): boolean {
  if (scheme.target.kind === "barrier") {
    return state.barriers.some((item) => item.id === scheme.target.id && item.open);
  }
  if (scheme.target.kind === "hazard") {
    return state.hazards.some((item) => item.id === scheme.target.id && !item.active);
  }
  const platform = state.platforms.find((item) => item.id === scheme.target.id);
  if (scheme.action === "dna_bridge") return platform?.stabilized ?? false;
  const counterActive = scheme.counterPadIds.some((id) =>
    state.pads.some((pad) => pad.id === id && pad.active),
  );
  return counterActive && (platform?.powered ?? false);
}

function hexagon(context: CanvasRenderingContext2D, x: number, y: number, radius: number): void {
  context.beginPath();
  for (let index = 0; index < 6; index += 1) {
    const angle = (index * Math.PI) / 3;
    const px = x + Math.cos(angle) * radius;
    const py = y + Math.sin(angle) * radius;
    if (index === 0) context.moveTo(px, py);
    else context.lineTo(px, py);
  }
  context.closePath();
  context.stroke();
}

// Draw causal connections first so their translucent wires never cover solid edges.
export function draw_villain_connections(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const scene = state.level.villainScene;
  if (!scene) return;
  const opening = state.time < 3;
  const ending = state.status === "complete" || state.bossDefeated;
  for (const scheme of scene.schemes) {
    const rect = target_rect(state, scheme);
    if (!rect) continue;
    const actor = resolve_villain_position(state, scheme.villain);
    if (!actor) continue;
    const gem = scheme.villain === "gem";
    const countered = scheme_countered(state, scheme);
    const targetX = rect.x + rect.width / 2;
    const targetY = rect.y + rect.height / 2;
    const handX = actor.x + 22 * VILLAIN_ART_SCALE;
    const handY = actor.y - 18 * VILLAIN_ART_SCALE;
    const controlX = actor.x + 45 * VILLAIN_ART_SCALE;
    const controlY = actor.y + 20 * VILLAIN_ART_SCALE;
    context.save();
    context.strokeStyle = gem ? "#caa0f5" : "#a7eab5";
    context.lineWidth = opening ? 2 : 1;
    context.globalAlpha = ending ? 0.12 : opening ? 0.65 : countered ? 0.16 : 0.32;
    context.setLineDash(gem ? [3, 7] : [7, 5]);
    context.beginPath();
    context.moveTo(handX, handY);
    context.bezierCurveTo(controlX, controlY, targetX, targetY - 35, targetX, targetY);
    context.stroke();
    context.setLineDash([]);
    if (opening && !ending) {
      // Gem sends DNA toward the target; Cana steals glucose in the opposite direction.
      const progress = (time * 0.8) % 1;
      const fraction = gem ? progress : 1 - progress;
      const back = 1 - fraction;
      const x =
        back ** 3 * handX +
        3 * back ** 2 * fraction * controlX +
        3 * back * fraction ** 2 * targetX +
        fraction ** 3 * targetX;
      const y =
        back ** 3 * handY +
        3 * back ** 2 * fraction * controlY +
        3 * back * fraction ** 2 * (targetY - 35) +
        fraction ** 3 * targetY;
      if (gem) {
        label(context, "DNA", x, y, "#ecd5ff", 8);
      } else {
        hexagon(context, x, y, 5);
      }
    }
    context.restore();
  }
}

function draw_dna_motif(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  countered: boolean,
  active: boolean,
  time: number,
): void {
  const vertical = rect.height > rect.width;
  const length = vertical ? rect.height : rect.width;
  const center = vertical ? rect.x + rect.width / 2 : rect.y + rect.height / 2;
  const amplitude = Math.min(6, (vertical ? rect.width : rect.height) * 0.24);
  context.save();
  // DNA lives inside the target, leaving the owner color and exact collision edge exposed.
  context.beginPath();
  context.rect(rect.x + 3, rect.y + 3, Math.max(0, rect.width - 6), Math.max(0, rect.height - 6));
  context.clip();
  context.globalAlpha = active ? 0.8 : 0.2;
  context.strokeStyle = countered ? "#d4f8d6" : "#e4bcff";
  context.lineWidth = 1.5;
  for (const side of [-1, 1]) {
    context.beginPath();
    for (let offset = 3; offset <= length - 3; offset += 2) {
      const wave = Math.sin(offset * 0.18 + time * 0.8) * amplitude * side;
      const x = vertical ? center + wave : rect.x + offset;
      const y = vertical ? rect.y + offset : center + wave;
      if (offset === 3) context.moveTo(x, y);
      else context.lineTo(x, y);
    }
    context.stroke();
  }
  for (let offset = 7; offset < length - 3; offset += 11) {
    const wave = Math.sin(offset * 0.18 + time * 0.8) * amplitude;
    context.beginPath();
    if (vertical) {
      context.moveTo(center - wave, rect.y + offset);
      context.lineTo(center + wave, rect.y + offset);
    } else {
      context.moveTo(rect.x + offset, center - wave);
      context.lineTo(rect.x + offset, center + wave);
    }
    context.stroke();
  }
  context.restore();
}

function draw_glucose_motif(
  context: CanvasRenderingContext2D,
  rect: Readonly<Rect>,
  supplied: boolean,
): void {
  context.save();
  context.strokeStyle = supplied ? "#c9ffd0" : "#9ac5a5";
  context.fillStyle = supplied ? "#b4f2a9" : "#314b45";
  context.lineWidth = 1.5;
  // A small reservoir is inset from the target's collision boundary.
  const x = rect.x + rect.width / 2;
  const y = rect.y + rect.height / 2;
  for (let index = -1; index <= 1; index += 1) {
    context.globalAlpha = supplied ? 0.9 : 0.4;
    hexagon(context, x + index * 9, y, Math.min(3.5, rect.height * 0.2));
    if (supplied) context.fill();
  }
  context.restore();
}

function prepare_dialogue(
  context: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  worldWidth: number,
  worldHeight: number,
  color: string,
): { rect: Rect; lines: string[]; color: string } {
  context.save();
  context.font = "800 9px system-ui, sans-serif";
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (context.measureText(next).width > 192 && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  const width = Math.min(
    210,
    Math.max(...lines.map((entry) => context.measureText(entry).width)) + 16,
  );
  const height = lines.length * 12 + 10;
  // Low perches leave room above; high perches put the bubble beside the actor.
  const artTop = y - 62 * VILLAIN_ART_SCALE;
  const above = artTop - 12 - height;
  const beside = above < 46;
  const bubbleX = beside ? x + (x < worldWidth / 2 ? 1 : -1) * (width / 2 + 74) : x;
  const left = Math.max(5, Math.min(worldWidth - width - 5, bubbleX - width / 2));
  const top = Math.max(46, Math.min(worldHeight - height - 5, beside ? artTop : above));
  context.restore();
  return { rect: { x: left, y: top, width, height }, lines, color };
}

function place_dialogue(
  rect: Rect,
  occupied: readonly Rect[],
  world: Readonly<Pick<Rect, "width" | "height">>,
): Rect | undefined {
  const gap = 8;
  const overlaps = (other: Rect, x: number, y: number): boolean =>
    x < other.x + other.width + gap &&
    x + rect.width + gap > other.x &&
    y < other.y + other.height + gap &&
    y + rect.height + gap > other.y;
  // Prefer the authored side and nearest vertical space before moving sideways.
  const xs = [rect.x, 5, world.width - rect.width - 5];
  const ys = [
    rect.y,
    46,
    world.height - rect.height - 5,
    ...occupied.flatMap((other) => [other.y - rect.height - gap, other.y + other.height + gap]),
  ].sort((a, b) => Math.abs(a - rect.y) - Math.abs(b - rect.y));
  for (const x of xs) {
    for (const y of ys) {
      if (y < 46 || y + rect.height > world.height - 5) continue;
      if (!occupied.some((other) => overlaps(other, x, y))) return { ...rect, x, y };
    }
  }
  // Keep actor faces visible if a future scene leaves no room for dialogue.
  return undefined;
}

export function draw_villain_scene(
  context: CanvasRenderingContext2D,
  state: GameState,
  time: number,
): void {
  const scene = state.level.villainScene;
  if (!scene) return;
  const ending = state.status === "complete" || state.bossDefeated;
  const bubbles: ReturnType<typeof prepare_dialogue>[] = [];
  const occupied: Rect[] = [];
  for (const villain of ["gem", "cana"] as const) {
    const actor = resolve_villain_position(state, villain);
    if (!actor) continue;
    occupied.push({
      x: actor.x - 36 * VILLAIN_ART_SCALE - 7,
      y: actor.y - 62 * VILLAIN_ART_SCALE - 3,
      width: 72 * VILLAIN_ART_SCALE + 14,
      height: 80 * VILLAIN_ART_SCALE + 6,
    });
  }
  // Dialogue reserves the same visible HUD, feet, mechanisms and live lanes.
  occupied.push({
    x: 0,
    y: 0,
    width: state.level.world.width,
    height: state.interference ? 83 : 43,
  });
  for (const player of Object.values(state.players))
    occupied.push({
      x: player.rect.x - 39,
      y: player.rect.y + player.rect.height - 112,
      width: player.rect.width + 78,
      height: 145,
    });
  for (const pad of state.pads)
    occupied.push({
      x: pad.rect.x - 55,
      y: pad.rect.y - 24,
      width: pad.rect.width + 110,
      height: pad.rect.height + 28,
    });
  for (const definition of state.level.platforms) {
    if (definition.kind !== "moving") continue;
    const platform = state.platforms.find((item) => item.id === definition.id);
    if (platform)
      occupied.push({
        x: platform.rect.x - 25,
        y: platform.rect.y - 4,
        width: platform.rect.width + 50,
        height: platform.rect.height + 23,
      });
  }
  for (const door of state.level.barriers) occupied.push(door.rect);
  for (const exit of state.level.exits) occupied.push(exit.rect);
  for (const attack of state.level.interference ?? []) {
    const weapon = weapon_pose(state, attack);
    if (!weapon) continue;
    occupied.push({
      x: weapon.actorPosition.x - 83,
      y: weapon.actorPosition.y + 25,
      width: 166,
      height: 30,
    });
    if (!interference_attack_enabled(state, attack)) continue;
    for (let step = 0; step <= 8; step += 1) {
      const fraction = step / 8;
      occupied.push({
        x: weapon.releaseAnchor.x + (weapon.endpoint.x - weapon.releaseAnchor.x) * fraction - 18,
        y: weapon.releaseAnchor.y + (weapon.endpoint.y - weapon.releaseAnchor.y) * fraction - 18,
        width: 36,
        height: 36,
      });
    }
  }
  for (const definition of state.level.counterweights ?? []) {
    const pair = state.counterweights.find((item) => item.id === definition.id);
    const a = state.platforms.find((item) => item.id === definition.platformIds[0]);
    const b = state.platforms.find((item) => item.id === definition.platformIds[1]);
    if (pair && a && b) {
      occupied.push(counterweight_header_rect([a, b], state.level.world.width));
    }
  }
  for (const scheme of scene.schemes) {
    const rect = target_rect(state, scheme);
    if (!rect) continue;
    const countered = scheme_countered(state, scheme);
    if (scheme.villain === "gem") {
      const active =
        scheme.target.kind === "barrier"
          ? !state.barriers.some((item) => item.id === scheme.target.id && item.open)
          : scheme.target.kind === "hazard"
            ? state.hazards.some((item) => item.id === scheme.target.id && item.active)
            : state.platforms.some((item) => item.id === scheme.target.id && item.active);
      draw_dna_motif(context, rect, countered, active, time);
    } else {
      const supplied =
        scheme.target.kind === "platform"
          ? state.platforms.some((item) => item.id === scheme.target.id && item.powered)
          : countered;
      draw_glucose_motif(context, rect, supplied);
    }
  }
  for (const villain of ["gem", "cana"] as const) {
    const actor = scene[villain];
    const actorPosition = resolve_villain_position(state, villain);
    if (!actorPosition) continue;
    const schemes = scene.schemes.filter((scheme) => scheme.villain === villain);
    const counteredCount = schemes.filter((scheme) => scheme_countered(state, scheme)).length;
    const fullyCountered = schemes.length > 0 && counteredCount === schemes.length;
    const partiallyCountered = counteredCount > 0 && !fullyCountered;
    const attacks = (state.level.interference ?? []).filter(
      (attack) => (attack.kind === "bubble" ? "gem" : "cana") === villain,
    );
    const weapon = attacks
      .map((attack) => weapon_pose(state, attack))
      .find((entry) => entry !== undefined);
    const interrupted = weapon?.action === "interrupted";
    const winding = attacks.some(
      (attack) =>
        interference_attack_enabled(state, attack) &&
        state.interference?.attackers.some(
          (attacker) => attacker.id === attack.id && attacker.phase === "windup",
        ),
    );
    const proud = attacks.some(
      (attack) =>
        interference_attack_enabled(state, attack) &&
        Object.values(state.interference?.players ?? {}).some(({ effect }) =>
          attack.kind === "bubble"
            ? effect.kind === "float" || effect.kind === "sticky"
            : effect.kind === "dizzy" || effect.kind === "shove",
        ),
    );
    const bubbleRebounded =
      villain === "gem" &&
      attacks.some(
        (attack) =>
          interference_attack_enabled(state, attack) &&
          state.interference?.projectiles.some(
            (shot) =>
              shot.attackId === attack.id &&
              shot.kind === "bubble" &&
              shot.hitPlayers.includes("pac"),
          ),
      );
    const pose = ending
      ? "escape"
      : interrupted
        ? "countered"
        : winding || proud || bubbleRebounded || state.time < 3
          ? "opening"
          : fullyCountered
            ? "countered"
            : "idle";
    const scatter = ending && attacks.length === 0 ? Math.sin(time * 5) * 7 : 0;
    draw_villain(
      context,
      actorPosition.x + scatter,
      actorPosition.y,
      villain === "gem",
      attacks.length > 0 ? 0 : time,
      pose,
      weapon,
    );
    const reacting =
      winding || proud || bubbleRebounded || interrupted || fullyCountered || partiallyCountered;
    const recovered = attacks.some((attack) =>
      Object.entries(state.interference?.players ?? {}).some(
        ([id, { effect, immunityRemaining }]) =>
          effect.kind === "none" &&
          immunityRemaining > 0 &&
          state.interference?.projectiles.some(
            (shot) => shot.attackId === attack.id && shot.hitPlayers.some((hit) => hit === id),
          ),
      ),
    );
    const quip = ending
      ? actor.ending
      : interrupted
        ? villain === "gem"
          ? "You interrupted my beard science!"
          : "A pause in my return act!"
        : bubbleRebounded
          ? "That is not a trampoline!"
          : winding
            ? villain === "gem"
              ? "Hold still. Beard science!"
              : "Catch my drift?"
            : proud
              ? villain === "gem"
                ? "A little bubble trouble!"
                : "That came around nicely!"
              : recovered
                ? villain === "gem"
                  ? "Already back on your feet?"
                  : "Recovered? How inconvenient."
                : state.time < 3
                  ? actor.opening
                  : fullyCountered
                    ? villain === "gem"
                      ? "Stop unpicking my brilliant DNA!"
                      : "Hey! That's MY glucose supply!"
                    : partiallyCountered
                      ? villain === "gem"
                        ? "One trap down. Another is still live!"
                        : "One glucose supply down. Another still feeds my tumor!"
                      : villain === "gem"
                        ? "A beard needs time to scheme."
                        : "Smooth chin. Very unsmooth plan.";
    if (state.interference && !ending && state.time >= 3 && !reacting && !recovered) continue;
    const bubble = prepare_dialogue(
      context,
      `${villain === "gem" ? "Gem" : "Cana"}: ${quip}`,
      actorPosition.x,
      actorPosition.y,
      state.level.world.width,
      state.level.world.height,
      villain === "gem" ? "#ba91e8" : "#96d5a4",
    );
    const placed = place_dialogue(bubble.rect, occupied, state.level.world);
    if (placed) {
      bubble.rect = placed;
      occupied.push(placed);
      bubbles.push(bubble);
    }
  }
  // Paint after both actors so later art cannot erase an earlier speaker's text.
  for (const bubble of bubbles) {
    const { rect, lines, color } = bubble;
    rounded(context, rect, "#192b3aee", 7, color);
    lines.forEach((entry, index) =>
      label(context, entry, rect.x + rect.width / 2, rect.y + 11 + index * 12, "#f5f5e9", 9),
    );
  }
}
