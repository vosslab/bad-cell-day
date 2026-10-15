import { draw_boss, draw_player, draw_villain, label, rounded } from "./render_characters";
import type { LevelDefinition } from "./types/level";
import type { RenderGame, RenderOptions } from "./types/presentation";
import type { GameState } from "./types/simulation";

const THEMES: Record<LevelDefinition["stage"], readonly [string, string, string, string]> = {
  garden: ["#112d36", "#1f4c4c", "#79c9a0", "CELL ENTRANCE"],
  sewers: ["#172d38", "#28454c", "#9bbb67", "CYTOPLASM CHAOS"],
  laboratory: ["#1a2942", "#31435e", "#82cbd1", "MICROTUBULE MADNESS"],
  factory: ["#302b3e", "#514458", "#c19a76", "GEM SLIME FACTORY"],
  citadel: ["#282941", "#494361", "#b0a0d7", "CANA CONTRAPTIONS"],
  boss: ["#34243d", "#543552", "#da9bba", "BAD CELL DAY"],
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

function draw_background(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  const { width, height } = state.level.world;
  const [dark, light, accent, title] = THEMES[state.level.stage];
  const wash = context.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, light);
  wash.addColorStop(1, dark);
  context.fillStyle = wash;
  context.fillRect(0, 0, width, height);
  context.save();
  context.globalAlpha = 0.24;
  // A broad translucent membrane frames the world without confusing its collision edges.
  context.strokeStyle = accent;
  context.lineWidth = 13;
  context.beginPath();
  context.moveTo(-25, 112);
  context.bezierCurveTo(160, 12, 275, 120, 420, 58);
  context.bezierCurveTo(680, -30, 820, 160, width + 40, 55);
  context.stroke();
  context.lineWidth = 3;
  for (let index = 0; index < 8; index += 1) {
    const x = 80 + index * 145;
    const y = 165 + ((index * 79) % 280);
    context.save();
    context.translate(x, y + Math.sin(time * 0.4 + index) * 5);
    context.rotate(index * 0.6);
    context.shadowColor = accent;
    context.shadowBlur = 24;
    context.beginPath();
    context.ellipse(0, 0, 49, 24, 0, 0, Math.PI * 2);
    context.fillStyle = accent;
    context.fill();
    context.shadowBlur = 0;
    context.strokeStyle = dark;
    context.beginPath();
    context.moveTo(-32, 0);
    context.bezierCurveTo(-16, -25, -16, 25, 0, 0);
    context.bezierCurveTo(16, -25, 16, 25, 32, 0);
    context.stroke();
    context.restore();
  }
  context.globalAlpha = 0.16;
  for (let index = 0; index < 45; index += 1) {
    const x = (index * 137 + Math.sin(time * 0.2 + index) * 8) % width;
    const y = 95 + ((index * 83) % (height - 120));
    circle(context, x, y, 1.5 + (index % 3), "#cdfaff");
  }
  // Stage-specific architecture stays behind all solid surfaces.
  context.globalAlpha = 0.12;
  context.strokeStyle = accent;
  context.lineWidth = state.level.stage === "laboratory" ? 8 : 16;
  if (state.level.stage !== "garden") {
    for (let index = 0; index < 5; index += 1) {
      const x = 120 + index * 235;
      context.beginPath();
      context.moveTo(x, height);
      context.lineTo(x, 125 + (index % 2) * 70);
      context.quadraticCurveTo(x, 100, x + 30, 100);
      context.lineTo(x + 105, 100);
      context.stroke();
    }
  }
  context.restore();
  label(context, title, width / 2, 25, "#bfd7de", 11);
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
    rounded(context, platform.rect, fill, 6);
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
    if (definition.kind === "moving" && platform.rect.width > 45) {
      label(
        context,
        platform.motorOn ? "< >" : "STOP",
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

function draw_hazards(context: CanvasRenderingContext2D, state: GameState, time: number): void {
  for (const hazard of state.hazards) {
    const definition = state.level.hazards.find((item) => item.id === hazard.id);
    if (!definition) continue;
    const { x, y, width, height } = hazard.rect;
    context.save();
    context.globalAlpha = hazard.active ? 1 : 0.24;
    if (definition.kind === "villain") {
      draw_villain(
        context,
        x + width / 2,
        y + height / 2 - 15,
        state.level.villain !== "cana",
        time,
      );
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
  // The final machine has both unmistakable antagonists riding above it.
  if (state.level.villain && !state.bossDefeated && state.level.boss) {
    const boss = state.level.boss.rect;
    if (state.level.villain !== "cana")
      draw_villain(context, boss.x + boss.width * 0.3, boss.y - 62, true, time);
    if (state.level.villain !== "gem")
      draw_villain(context, boss.x + boss.width * 0.7, boss.y - 62, false, time);
  }
  draw_player(context, state.players.isp, time, state.status === "dead");
  draw_player(context, state.players.pac, time, state.status === "dead");
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
