import { draw_boss, draw_player, draw_player_overlay, label, rounded } from "./render_characters";
import { draw_villain_connections, draw_villain_scene } from "./render_villains";
import type { LevelDefinition } from "./types/level";
import type { RenderGame, RenderOptions } from "./types/presentation";
import type { GameState } from "./types/simulation";

const THEMES: Record<LevelDefinition["stage"], readonly [string, string, string, string]> = {
  garden: ["#39212c", "#754451", "#79c9a0", "CELL ENTRANCE"],
  sewers: ["#321c2a", "#62333e", "#9bbb67", "CYTOPLASM CHAOS"],
  laboratory: ["#382335", "#754251", "#82cbd1", "MICROTUBULE MADNESS"],
  factory: ["#3d242d", "#754039", "#c19a76", "GEM SLIME FACTORY"],
  citadel: ["#342035", "#643746", "#b0a0d7", "CANA CONTRAPTIONS"],
  boss: ["#361725", "#773240", "#da9bba", "BAD CELL DAY"],
};

function circle(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
): void {
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fillStyle = color;
  context.fill();
}

function draw_tissue(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  const { width, height } = state.level.world;
  context.save();
  // Wide, soft folds sit at the world's edges; solid platforms stay crisp and cool.
  for (let index = 0; index < 3; index += 1) {
    const y = 38 + index * 22;
    const breath = Math.sin(time * 0.6 + index) * 2;
    context.beginPath();
    context.moveTo(-30, y + 38);
    context.bezierCurveTo(width * 0.22, y - 65 + breath, width * 0.32, y + 60, width * 0.55, y);
    context.bezierCurveTo(width * 0.76, y - 55, width * 0.85, y + 60 + breath, width + 30, y - 10);
    context.lineWidth = 24 - index * 5;
    context.strokeStyle = "#281722";
    context.globalAlpha = 0.24;
    context.stroke();
    context.lineWidth = 3;
    context.strokeStyle = "#f2a2a8";
    context.globalAlpha = 0.14;
    context.stroke();
  }
  // Branching vessels have rounded, tapering ends rather than platform-like edges.
  context.lineCap = "round";
  for (let index = 0; index < 5; index += 1) {
    const x = (width * (index + 0.35)) / 5;
    const y = 150 + ((index * 67) % 170);
    context.strokeStyle = "#c66b80";
    context.globalAlpha = 0.17;
    context.lineWidth = 11;
    context.beginPath();
    context.moveTo(x - 65, height + 15);
    context.bezierCurveTo(x + 60, height * 0.72, x - 60, y + 70, x + 25, y);
    context.stroke();
    context.strokeStyle = "#ef9a9e";
    context.lineWidth = 2;
    context.stroke();
    context.lineWidth = 4;
    for (const side of [-1, 1]) {
      context.beginPath();
      context.moveTo(x, y + 95);
      context.bezierCurveTo(x + side * 35, y + 65, x + side * 55, y + 90, x + side * 80, y + 35);
      context.stroke();
    }
  }
  // Enlarged overlapping cells give the final chamber a visibly diseased tissue mass.
  const tumor = state.level.stage === "boss";
  const clusters = tumor ? 4 : 3;
  for (let index = 0; index < clusters; index += 1) {
    const x = (width * (index + 0.5)) / clusters;
    const y = index % 2 === 0 ? height - 55 : 140;
    context.save();
    context.translate(x, y);
    const swell = 1 + Math.sin(time * 0.7 + index) * 0.018;
    context.scale(swell, 2 - swell);
    for (let lobe = 0; lobe < (tumor ? 7 : 4); lobe += 1) {
      const angle = lobe * 2.4;
      const radius = tumor ? 30 + (lobe % 3) * 8 : 23 + (lobe % 2) * 7;
      const lx = Math.cos(angle) * (tumor ? 45 : 30);
      const ly = Math.sin(angle) * 24;
      context.globalAlpha = tumor ? 0.3 : 0.19;
      context.beginPath();
      context.ellipse(lx, ly, radius * 1.2, radius, angle * 0.2, 0, Math.PI * 2);
      context.fillStyle = lobe % 2 === 0 ? "#ad6076" : "#72354f";
      context.fill();
      context.strokeStyle = "#e0929c";
      context.lineWidth = 2;
      context.stroke();
      context.globalAlpha = tumor ? 0.35 : 0.22;
      context.beginPath();
      context.ellipse(lx + 5, ly - 2, radius * 0.35, radius * 0.48, angle, 0, Math.PI * 2);
      context.fillStyle = "#3c2038";
      context.fill();
      // Broken highlights and short hanging creases suggest wet, puckered tissue.
      context.globalAlpha = tumor ? 0.27 : 0.15;
      context.strokeStyle = "#ffc1ba";
      context.lineWidth = 2.5;
      context.beginPath();
      context.ellipse(lx - 5, ly - 5, radius * 0.75, radius * 0.65, 0, 3.6, 4.7);
      context.stroke();
      if (tumor && lobe % 2 === 0) {
        context.strokeStyle = "#cf798b";
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(lx + radius * 0.5, ly + radius * 0.5);
        context.bezierCurveTo(
          lx + radius,
          ly + radius * 1.6,
          lx - 10,
          ly + radius * 1.7,
          lx + 10,
          ly + radius * 2,
        );
        context.stroke();
      }
    }
    context.restore();
  }
  context.restore();
}

function draw_background(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  const { width, height } = state.level.world;
  const stage = state.level.stage;
  const [dark, light, accent, title] = THEMES[stage];
  const wash = context.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, light);
  wash.addColorStop(1, dark);
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);
  draw_tissue(context, state, time);
  context.save();
  // Machinery remains embedded in the anatomy, with a distinct silhouette per stage.
  context.globalAlpha = 0.12;
  context.strokeStyle = accent;
  context.lineWidth = stage === "laboratory" ? 6 : 12;
  if (stage === "citadel" || stage === "boss") {
    for (let index = 0; index < 4; index += 1) {
      const x = 100 + (index * (width - 100)) / 4;
      context.beginPath();
      context.ellipse(x, height * 0.6, 65, height * 0.42, 0, Math.PI, Math.PI * 2);
      context.stroke();
    }
  } else if (stage !== "garden") {
    for (let index = 0; index < 5; index += 1) {
      const x = 100 + (index * width) / 5;
      context.beginPath();
      context.moveTo(x, height);
      context.lineTo(x, 125 + (index % 2) * 70);
      if (stage === "factory") context.lineTo(x + 30, 100);
      else context.quadraticCurveTo(x, 100, x + 30, 100);
      context.lineTo(x + 105, 100);
      context.stroke();
    }
  }
  context.restore();
  label(context, title, width / 2, 25, "#f4d5d9", 11);
}

function draw_platforms(context: CanvasRenderingContext2D, state: GameState): void {
  const accent = THEMES[state.level.stage][2];
  for (const platform of state.platforms) {
    const definition = state.level.platforms.find((item) => item.id === platform.id);
    if (!definition) continue;
    if (definition.kind === "moving") {
      context.save();
      context.setLineDash([4, 7]);
      context.strokeStyle = "#a5c4cf50";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(definition.rect.x + definition.rect.width / 2, definition.rect.y + 8);
      context.lineTo(
        definition.rect.x + definition.motion.offset.x + definition.rect.width / 2,
        definition.rect.y + definition.motion.offset.y + 8,
      );
      context.stroke();
      context.restore();
    }
    if (!platform.active) {
      context.save();
      context.setLineDash([7, 5]);
      context.strokeStyle = "#b5c4d880";
      context.lineWidth = 2;
      context.strokeRect(
        platform.rect.x,
        platform.rect.y,
        platform.rect.width,
        platform.rect.height,
      );
      context.restore();
      continue;
    }
    const fill = platform.stabilized
      ? "#62c5b2"
      : definition.kind === "unstable"
        ? "#c7a078"
        : definition.kind === "moving"
          ? "#708ba9"
          : "#4b6973";
    rounded(
      context,
      platform.rect,
      definition.kind === "moving" && !platform.powered ? "#52616d" : fill,
      6,
    );
    rounded(
      context,
      {
        x: platform.rect.x + 2,
        y: platform.rect.y + 1,
        width: Math.max(0, platform.rect.width - 4),
        height: Math.min(6, platform.rect.height - 2),
      },
      platform.stabilized ? "#c3ffce" : accent,
      4,
      "",
    );
    if (definition.kind === "unstable" && !platform.stabilized) {
      context.beginPath();
      context.moveTo(platform.rect.x + platform.rect.width * 0.45, platform.rect.y + 6);
      context.lineTo(platform.rect.x + platform.rect.width * 0.5, platform.rect.y + 12);
      context.lineTo(
        platform.rect.x + platform.rect.width * 0.47,
        platform.rect.y + platform.rect.height,
      );
      context.strokeStyle = "#684e42";
      context.lineWidth = 2;
      context.stroke();
    }
    if (definition.kind === "moving") {
      const override = state.level.pads.some(
        (pad) =>
          state.pads.some((item) => item.id === pad.id && item.active) &&
          pad.effects.some(
            (effect) => effect.kind === "power" && effect.platformId === platform.id,
          ),
      );
      const cycle = definition.powerCycle;
      const phase = cycle
        ? (((state.time + (cycle.phase ?? 0)) % cycle.period) + cycle.period) % cycle.period
        : 0;
      const warning =
        cycle !== undefined &&
        !override &&
        platform.powered &&
        phase < cycle.activeFor &&
        cycle.activeFor - phase <= 1;
      circle(
        context,
        platform.rect.x + 8,
        platform.rect.y + platform.rect.height / 2,
        3,
        warning ? "#ffe081" : platform.powered ? "#b7f9b3" : "#263b42",
      );
      if (warning)
        label(
          context,
          "POWER OFF SOON",
          platform.rect.x + platform.rect.width / 2,
          platform.rect.y + platform.rect.height + 11,
          "#ffe081",
          9,
        );
    }
    if (definition.kind === "moving" && platform.rect.width > 45) {
      label(
        context,
        !platform.powered ? "NO POWER" : platform.motorOn ? "< >" : "STOP",
        platform.rect.x + platform.rect.width / 2,
        platform.rect.y + platform.rect.height / 2 + 3,
        "#e9f8ff",
        9,
      );
    }
  }
}

function draw_mechanisms(context: CanvasRenderingContext2D, state: GameState): void {
  for (const pad of state.pads) {
    const definition = state.level.pads.find((item) => item.id === pad.id);
    if (!definition) continue;
    const color =
      definition.accepts === "isp"
        ? "#6cd4ff"
        : definition.accepts === "pac"
          ? "#ffc06c"
          : "#d6a0ff";
    context.save();
    context.lineWidth = 1;
    context.strokeStyle = pad.active ? "#c4f6a066" : "#bbd7e42b";
    context.setLineDash([3, 6]);
    for (const effect of definition.effects) {
      const target =
        effect.kind === "door"
          ? state.level.barriers.find((item) => item.id === effect.barrierId)?.rect
          : state.platforms.find((item) => item.id === effect.platformId)?.rect;
      if (target) {
        context.beginPath();
        context.moveTo(pad.rect.x + pad.rect.width / 2, pad.rect.y);
        context.lineTo(target.x + target.width / 2, target.y + target.height / 2);
        context.stroke();
      }
    }
    context.restore();
    rounded(context, pad.rect, pad.active ? "#6ec994" : "#314653", 4, color);
    const owner =
      definition.accepts === "any" ? "ANY" : definition.accepts === "isp" ? "ISP" : "PAC";
    const latch = definition.activation === "latch" ? " [L]" : "";
    const weight = definition.minWeight > 1 ? " x2" : "";
    const text = `${owner} ${definition.label}${latch}${weight}`;
    const plateLabel = `${pad.active ? "+ " : ""}${text}`;
    context.save();
    context.font = "800 9px system-ui, sans-serif";
    const plateWidth = Math.max(pad.rect.width, context.measureText(plateLabel).width + 12);
    context.restore();
    const plateX = Math.max(
      0,
      Math.min(
        state.level.world.width - plateWidth,
        pad.rect.x + pad.rect.width / 2 - plateWidth / 2,
      ),
    );
    rounded(
      context,
      {
        x: plateX,
        y: pad.rect.y - 17,
        width: plateWidth,
        height: 15,
      },
      "#142b3be8",
      4,
      "",
    );
    label(
      context,
      plateLabel,
      plateX + plateWidth / 2,
      pad.rect.y - 9,
      pad.active ? "#b9ffc7" : color,
      9,
    );
  }
  for (const barrier of state.barriers) {
    const definition = state.level.barriers.find((item) => item.id === barrier.id);
    if (!definition) continue;
    const color =
      definition.blocks === "pac" ? "#53caff" : definition.blocks === "isp" ? "#ffad56" : "#bd86f2";
    context.save();
    if (barrier.open) {
      context.globalAlpha = 0.3;
      context.setLineDash([4, 5]);
    }
    rounded(context, definition.rect, barrier.open ? "#172f3800" : `${color}66`, 5, color);
    if (!barrier.open) {
      context.save();
      context.beginPath();
      context.rect(
        definition.rect.x,
        definition.rect.y,
        definition.rect.width,
        definition.rect.height,
      );
      context.clip();
      context.strokeStyle = `${color}88`;
      context.lineWidth = 2;
      for (
        let y = definition.rect.y - 20;
        y < definition.rect.y + definition.rect.height;
        y += 15
      ) {
        context.beginPath();
        context.moveTo(definition.rect.x, y);
        context.lineTo(definition.rect.x + definition.rect.width, y + 20);
        context.stroke();
      }
      context.restore();
    }
    context.restore();
  }
}

function draw_bomb_hazard(
  context: CanvasRenderingContext2D,
  rect: { x: number; y: number; width: number; height: number },
  time: number,
): void {
  const { x, y, width, height } = rect;
  const size = Math.min(width, height);
  if (size <= 0) return;

  const centerX = x + width * 0.48;
  const centerY = y + height * 0.61;
  const radius = size * 0.34;
  const strokeWidth = Math.max(1, Math.min(2, size * 0.07));
  const fuseX = centerX + radius * 0.55;
  const fuseY = centerY - radius * 0.76;
  const sparkSize = size * (0.08 + (Math.sin(time * 8) + 1) * 0.015);

  context.save();
  context.beginPath();
  context.rect(x, y, width, height);
  context.clip();

  // Keep the bomb's silhouette and fuse inside the authored hazard rectangle.
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fillStyle = "#252d36";
  context.fill();
  context.strokeStyle = "#f2aa61";
  context.lineWidth = strokeWidth;
  context.stroke();

  context.beginPath();
  context.moveTo(fuseX, fuseY);
  context.quadraticCurveTo(
    fuseX + size * 0.035,
    fuseY - size * 0.12,
    fuseX + size * 0.11,
    fuseY - size * 0.1,
  );
  context.strokeStyle = "#f6d18a";
  context.lineWidth = strokeWidth;
  context.lineCap = "round";
  context.stroke();

  const sparkX = fuseX + size * 0.11;
  const sparkY = fuseY - size * 0.1;
  context.strokeStyle = "#fff0a3";
  context.lineWidth = Math.max(1, strokeWidth * 0.8);
  context.beginPath();
  context.moveTo(sparkX - sparkSize, sparkY);
  context.lineTo(sparkX + sparkSize, sparkY);
  context.moveTo(sparkX, sparkY - sparkSize);
  context.lineTo(sparkX, sparkY + sparkSize);
  context.stroke();

  // This outline exposes the same bounds used by collision and movement.
  context.strokeStyle = "#f2aa6180";
  context.lineWidth = 1;
  context.strokeRect(x + 0.5, y + 0.5, Math.max(0, width - 1), Math.max(0, height - 1));
  context.restore();
}

function draw_hazards(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  for (const hazard of state.hazards) {
    const definition = state.level.hazards.find((item) => item.id === hazard.id);
    if (!definition) continue;
    const { x, y, width, height } = hazard.rect;
    context.save();
    context.globalAlpha = hazard.active ? 1 : 0.24;
    if (definition.kind === "villain") {
      draw_bomb_hazard(context, hazard.rect, time);
    } else if (definition.kind === "spikes") {
      for (let offset = 0; offset < width; offset += 16) {
        context.beginPath();
        context.moveTo(x + offset, y + height);
        context.lineTo(x + offset + 8, y);
        context.lineTo(x + Math.min(width, offset + 16), y + height);
        context.closePath();
        context.fillStyle = "#f9bbad";
        context.fill();
        context.strokeStyle = "#873f57";
        context.lineWidth = 2;
        context.stroke();
      }
    } else if (definition.kind === "slime") {
      rounded(context, hazard.rect, "#97c54a", 9, "#36512c");
      for (let offset = 9; offset < width; offset += 29) {
        circle(context, x + offset, y + 4 + Math.sin(time * 2 + offset) * 2, 4, "#d4f87e");
      }
    } else {
      context.shadowBlur = hazard.active ? 13 : 0;
      context.shadowColor = "#ff6785";
      rounded(context, hazard.rect, "#ff7794", 4, "#ffd0d9");
    }
    context.restore();
  }
}

function draw_objects(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  for (const exit of state.level.exits) {
    const color = exit.player === "isp" ? "#68d2ff" : "#ffb568";
    rounded(context, exit.rect, "#132f41", 14, color);
    rounded(
      context,
      {
        x: exit.rect.x + 5,
        y: exit.rect.y + 5,
        width: exit.rect.width - 10,
        height: exit.rect.height - 10,
      },
      `${color}35`,
      10,
      "",
    );
    label(
      context,
      exit.player === "isp" ? "ISP" : "PAC",
      exit.rect.x + exit.rect.width / 2,
      exit.rect.y + 17,
      color,
      11,
    );
    label(context, "EXIT", exit.rect.x + exit.rect.width / 2, exit.rect.y + 33, "#f2fbff", 9);
  }
  for (const item of state.collectibles) {
    if (item.collected) continue;
    const definition = state.level.collectibles.find((entry) => entry.id === item.id);
    if (!definition) continue;
    const { x, y } = definition.position;
    context.save();
    context.translate(x, y + Math.sin(time * 3 + x) * 3);
    context.rotate(Math.PI / 4);
    rounded(
      context,
      { x: -6, y: -6, width: 12, height: 12 },
      definition.owner === "isp" ? "#80ddff" : definition.owner === "pac" ? "#ffc477" : "#e2b4ff",
      3,
    );
    context.restore();
    circle(context, x - 2, y - 3 + Math.sin(time * 3 + x) * 3, 1.5, "#ffffff");
  }
  for (const crate of state.crates) {
    const heavy = state.level.crates.find((item) => item.id === crate.id)?.heavy ?? false;
    rounded(context, crate.rect, heavy ? "#b18eaa" : "#c19b70", 5);
    const { x, y, width, height } = crate.rect;
    rounded(
      context,
      { x: x + 5, y: y + 5, width: width - 10, height: height - 10 },
      heavy ? "#705f7e" : "#917453",
      3,
      "#e0c4ac",
    );
    label(context, heavy ? ">>" : ">", x + width / 2, y + height / 2, "#fff4d9", 17);
    if (heavy) label(context, "TEAM", x + width / 2, y - 9, "#e9d0ef", 9);
  }
}

export const render_game: RenderGame = function render_game(
  context: CanvasRenderingContext2D,
  state: GameState,
  options: RenderOptions,
): void {
  const time = options.reducedMotion ? 0 : options.animationTime;
  context.save();
  // Rendering follows authored world coordinates; CSS may scale the complete canvas.
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  context.scale(
    context.canvas.width / state.level.world.width,
    context.canvas.height / state.level.world.height,
  );
  draw_background(context, state, time);
  draw_villain_connections(context, state, time);
  draw_platforms(context, state);
  draw_mechanisms(context, state);
  draw_hazards(context, state, time);
  draw_objects(context, state, time);
  if (state.level.boss) {
    draw_boss(
      context,
      state.level.boss.rect,
      state.level.boss.name,
      state.bossDefeated,
      state.level.stage === "boss",
      time,
    );
  }
  draw_villain_scene(context, state, time);
  // The upper player's face stays in front when one partner stands on the other.
  const players = [state.players.isp, state.players.pac].sort(
    (first, second) => second.rect.y + second.rect.height - first.rect.y - first.rect.height,
  );
  for (const player of players)
    draw_player(context, player, time, state.status === "dead", state.level.world.width);
  for (const player of players) draw_player_overlay(context, player, state.level.world.width);
  if (state.status === "dead") {
    rounded(
      context,
      { x: state.level.world.width / 2 - 123, y: 60, width: 246, height: 34 },
      "#233144ed",
      10,
      "#ffa6b0",
    );
    label(context, "OOPS! A SMALL CELL-TASTROPHE.", state.level.world.width / 2, 77, "#ffe3c7", 12);
  }
  context.restore();
};
