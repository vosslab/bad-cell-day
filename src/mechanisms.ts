import { overlaps, stands_on, clip_axis, world_solids } from "./collisions";
import { move_counterweights } from "./counterweights";
import type { Motion, Rect } from "./types/geometry";
import type { PlatformDefinition } from "./types/level";
import type { GameState } from "./types/simulation";
import { active_villain_bodies } from "./villain_bodies";

export function platform_has_power(definition: PlatformDefinition, time: number): boolean {
  if (definition.kind !== "moving") return true;
  if (definition.requiresPower) return false;
  const cycle = definition.powerCycle;
  if (!cycle) return true;
  // Cycle phase is seconds, as with hazard pulses; pads override this supply below.
  const cycleTime = (((time + (cycle.phase ?? 0)) % cycle.period) + cycle.period) % cycle.period;
  return cycleTime < cycle.activeFor;
}

export function motion_rect(rect: Readonly<Rect>, motion: Motion | undefined, time: number): Rect {
  if (!motion || motion.period <= 0) return { ...rect };
  const phase = (((time / motion.period + (motion.phase ?? 0)) % 1) + 1) % 1;
  const fraction = 1 - Math.abs(phase * 2 - 1);
  return {
    ...rect,
    x: rect.x + motion.offset.x * fraction,
    y: rect.y + motion.offset.y * fraction,
  };
}

export function update_pads(state: GameState): void {
  for (const pad of state.pads) {
    const definition = state.level.pads.find((entry) => entry.id === pad.id);
    if (!definition) continue;
    const attachment = state.platforms.find((entry) => entry.id === definition.platformId);
    pad.rect.x = definition.rect.x + (attachment?.rect.x ?? 0);
    pad.rect.y = definition.rect.y + (attachment?.rect.y ?? 0);
    pad.occupiedBy = [];
    pad.weight = 0;
    if (!attachment || attachment.active) {
      for (const player of Object.values(state.players)) {
        if (
          (definition.accepts === "any" || definition.accepts === player.id) &&
          (overlaps(player.rect, pad.rect) || stands_on(player.rect, pad.rect))
        ) {
          pad.occupiedBy.push(player.id);
          pad.weight += 1;
        }
      }
      if (definition.accepts === "any") {
        for (const crate of state.crates) {
          if (overlaps(crate.rect, pad.rect) || stands_on(crate.rect, pad.rect)) {
            pad.weight += state.level.crates.find((entry) => entry.id === crate.id)?.heavy ? 2 : 1;
          }
        }
      }
    }
    const occupied = pad.weight >= definition.minWeight;
    pad.latched ||= definition.activation === "latch" && occupied;
    pad.active = occupied || pad.latched;
  }
  for (const barrier of state.barriers) barrier.open = false;
  for (const platform of state.platforms) {
    const definition = state.level.platforms.find((entry) => entry.id === platform.id);
    platform.motorOn = definition?.kind === "moving";
    platform.powered = definition !== undefined && platform_has_power(definition, state.time);
    platform.stabilized = false;
  }
  for (const pad of state.pads) {
    if (!pad.active) continue;
    const definition = state.level.pads.find((entry) => entry.id === pad.id);
    for (const effect of definition?.effects ?? []) {
      if (effect.kind === "door") {
        const barrier = state.barriers.find((entry) => entry.id === effect.barrierId);
        if (barrier) barrier.open = true;
      } else {
        const platform = state.platforms.find((entry) => entry.id === effect.platformId);
        if (!platform) continue;
        if (effect.kind === "motor") platform.motorOn = false;
        else if (effect.kind === "power") platform.powered = true;
        else if (effect.kind === "stabilize") {
          platform.stabilized = true;
          platform.active = true;
          platform.occupiedTime = 0;
          platform.respawnTime = 0;
        }
      }
    }
  }
  const boss = state.level.boss;
  if (boss && boss.chargeSeconds === undefined) state.bossDefeated ||= boss_targets_occupied(state);
}

function boss_targets_occupied(state: GameState): boolean {
  const boss = state.level.boss;
  if (!boss) return false;
  const owners = boss.targetPadIds.map(
    (id) => state.level.pads.find((pad) => pad.id === id)?.accepts,
  );
  return (
    owners.includes("isp") &&
    owners.includes("pac") &&
    boss.targetPadIds.every((id) => {
      const pad = state.pads.find((entry) => entry.id === id);
      const definition = state.level.pads.find((entry) => entry.id === id);
      return (
        pad !== undefined &&
        pad.active &&
        definition !== undefined &&
        definition.accepts !== "any" &&
        pad.occupiedBy.includes(definition.accepts)
      );
    })
  );
}

function update_boss_charge(state: GameState, dt: number): void {
  const duration = state.level.boss?.chargeSeconds;
  if (duration === undefined || state.bossDefeated || state.status !== "playing") return;
  if (!boss_targets_occupied(state)) {
    state.bossCharge = 0;
    return;
  }
  if (!Number.isFinite(dt) || dt <= 0) return;
  state.bossCharge = Math.min(duration, state.bossCharge + dt);
  // Repeated fractional substeps may land a few ulps below the authored duration.
  if (duration - state.bossCharge <= Number.EPSILON * Math.max(1, duration) * 16) {
    state.bossCharge = duration;
    state.bossDefeated = true;
  }
}

export function move_platforms(state: GameState, dt: number): void {
  const bodies = [
    ...Object.values(state.players),
    ...state.crates,
    ...active_villain_bodies(state),
  ];
  for (const platform of state.platforms) {
    const definition = state.level.platforms.find((entry) => entry.id === platform.id);
    platform.previousRect = { ...platform.rect };
    platform.displacement = { x: 0, y: 0 };
    if (definition?.kind === "unstable" && !platform.stabilized) {
      if (platform.active) {
        const occupied = bodies.some((body) => stands_on(body.rect, platform.rect));
        platform.occupiedTime = occupied ? platform.occupiedTime + dt : 0;
        if (platform.occupiedTime >= definition.collapseAfter) {
          platform.active = false;
          platform.respawnTime = definition.resetAfter ?? 0;
        }
      } else if (definition.resetAfter !== null) {
        platform.respawnTime -= dt;
        if (platform.respawnTime <= 0) {
          platform.active = true;
          platform.occupiedTime = 0;
        }
      }
    }
    if (definition?.kind !== "moving" || !platform.active || !platform.motorOn || !platform.powered)
      continue;
    const target = motion_rect(definition.rect, definition.motion, platform.motionTime + dt);
    const riderSet = new Set(bodies.filter((body) => stands_on(body.rect, platform.rect)));
    let addedRider = true;
    while (addedRider) {
      addedRider = false;
      for (const body of bodies) {
        if (riderSet.has(body)) continue;
        if ([...riderSet].some((support) => stands_on(body.rect, support.rect))) {
          riderSet.add(body);
          addedRider = true;
        }
      }
    }
    const riders = bodies.filter((body) => riderSet.has(body));
    const obstacles = bodies.filter((body) => !riderSet.has(body)).map((body) => body.rect);
    let dx = clip_axis(platform.rect, target.x - platform.rect.x, "x", obstacles);
    let dy = clip_axis(platform.rect, target.y - platform.rect.y, "y", obstacles);
    // A rider against a ceiling or wall stops its carrier rather than being crushed.
    for (const rider of riders) {
      const playerId =
        rider === state.players.isp ? "isp" : rider === state.players.pac ? "pac" : undefined;
      const riderIsVillain = state.villainBodies.some(
        (body) => body.respawnRemaining <= 0 && body.rect === rider.rect,
      );
      const actor = riderIsVillain ? "villain" : playerId;
      const solids = world_solids(state, actor).filter((rect) => rect !== platform.rect);
      solids.push(...bodies.filter((body) => !riderSet.has(body)).map((body) => body.rect));
      dx = clip_axis(rider.rect, dx, "x", solids);
      dy = clip_axis(rider.rect, dy, "y", solids);
    }
    if (
      Math.abs(dx - (target.x - platform.rect.x)) < 0.001 &&
      Math.abs(dy - (target.y - platform.rect.y)) < 0.001
    )
      platform.motionTime += dt;
    platform.rect.x += dx;
    platform.rect.y += dy;
    platform.displacement = { x: dx, y: dy };
    for (const rider of riders) {
      rider.rect.x += dx;
      rider.rect.y += dy;
    }
  }
  move_counterweights(state, dt);
}

export function update_outcome(state: GameState, dt = 0): void {
  for (const hazard of state.hazards) {
    const definition = state.level.hazards.find((entry) => entry.id === hazard.id);
    if (!definition) continue;
    hazard.rect = motion_rect(definition.rect, definition.motion, state.time);
    const pulse = definition.pulse;
    hazard.active = !pulse || (state.time + (pulse.phase ?? 0)) % pulse.period < pulse.activeFor;
    if (definition.kind === "villain" && state.bossDefeated) hazard.active = false;
    for (const player of Object.values(state.players)) {
      if (
        hazard.active &&
        (definition.harms === "both" || definition.harms === player.id) &&
        overlaps(player.rect, hazard.rect)
      ) {
        state.status = "dead";
        state.deathReason = `${player.id === "isp" ? "Isp" : "Pac"} became a very surprised cell. Try teamwork!`;
      }
    }
  }
  for (const player of Object.values(state.players)) {
    if (player.rect.y > state.level.world.height + 80) {
      state.status = "dead";
      state.deathReason = "Gravity has filed a complaint. Both cells get another try!";
    }
    player.atExit = state.level.exits.some(
      (exit) => exit.player === player.id && overlaps(player.rect, exit.rect),
    );
    for (const collectible of state.collectibles) {
      const definition = state.level.collectibles.find((entry) => entry.id === collectible.id);
      if (
        definition &&
        (definition.owner === "any" || definition.owner === player.id) &&
        overlaps(player.rect, {
          x: definition.position.x - 9,
          y: definition.position.y - 9,
          width: 18,
          height: 18,
        })
      )
        collectible.collected = true;
    }
  }
  // A lethal substep cannot finish charging, even if both targets are occupied.
  // Physics calls this once, after its second pad sample and all movement.
  update_boss_charge(state, dt);
  if (
    state.status === "playing" &&
    state.players.isp.atExit &&
    state.players.pac.atExit &&
    (!state.level.boss || state.bossDefeated)
  )
    state.status = "complete";
}
