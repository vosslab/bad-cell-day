import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import {
  EFFECT_DURATION,
  interference_attack_enabled,
  interference_muzzle,
  step_interference,
} from "../src/interference.ts";
import { TRIAL_LEVEL } from "../src/interference_trial.ts";
import { step_game } from "../src/physics.ts";
import { overlaps } from "../src/collisions.ts";
import { weapon_geometry, weapon_pose, WEAPON_ACTION_DURATION } from "../src/weapon_pose.ts";

function scene(kind, player = "isp", extra = {}) {
  const attack = TRIAL_LEVEL.interference.find((entry) => entry.kind === kind);
  return create_game_state({
    ...DEMO_LEVEL,
    exits: [],
    villainScene: TRIAL_LEVEL.villainScene,
    interference: [{ ...attack, cooldown: 0.1, windup: 0.2 }],
    spawns: {
      isp: { x: player === "isp" ? (kind === "bubble" ? 300 : 750) : 50, y: 514 },
      pac: { x: player === "pac" ? (kind === "bubble" ? 300 : 750) : 50, y: 514 },
    },
    ...extra,
  });
}

function until(state, predicate, seconds = 8, input = create_empty_input()) {
  for (let tick = 0; tick < seconds * 120; tick += 1) {
    step_game(state, input, 1 / 120);
    if (predicate()) return;
  }
  assert.fail("Expected simulation condition was not reached");
}

function controlled_scene(kind, player = "isp", attackExtra = {}) {
  const attack = TRIAL_LEVEL.interference.find((entry) => entry.kind === kind);
  return scene(kind, player, {
    interference: [
      {
        ...attack,
        cooldown: 0.1,
        windup: 0.2,
        startsOnPadId: "start",
        interruptedByPadIds: ["steady", "rescue"],
        ...attackExtra,
      },
    ],
    pads: ["start", "steady", "rescue"].map((id) => ({
      id,
      rect: { x: 0, y: 0, width: 20, height: 10 },
      accepts: "both",
      activation: id === "rescue" ? "latch" : "hold",
      minWeight: 1,
      effects: [],
    })),
  });
}

// Direct mechanic checks commit pad activity explicitly and advance the simulation clock.
function tick_interference(state, dt) {
  state.time += dt;
  step_interference(state, dt);
}

function start_encounter(state) {
  state.pads[0].active = true;
  tick_interference(state, 0);
  state.pads[0].active = false;
}

function until_interference(state, predicate, seconds = 12) {
  for (let tick = 0; tick < seconds * 120; tick += 1) {
    tick_interference(state, 1 / 120);
    if (predicate()) return;
  }
  assert.fail("Expected interference condition was not reached");
}

// An interruption must give both a full recharge and a fresh complete warning.
function expect_recharged_shot(state) {
  const attack = state.level.interference[0];
  const attacker = state.interference.attackers[0];
  assert.equal(attacker.phase, "cooldown");
  assert.equal(attacker.remaining, attack.cooldown);
  tick_interference(state, attack.cooldown * 0.75);
  assert.equal(attacker.phase, "cooldown");
  assert.equal(state.interference.projectiles.length, 0);
  tick_interference(state, attack.cooldown * 0.5);
  assert.equal(attacker.phase, "windup");
  assert.equal(attacker.remaining, attack.windup);
  assert.equal(weapon_pose(state, attack).action, "windup");
  tick_interference(state, attack.windup * 0.75);
  assert.equal(state.interference.projectiles.length, 0);
  tick_interference(state, attack.windup * 0.5);
  assert.equal(state.interference.projectiles.length, 1);
  assert.equal(attacker.actionMarker.kind, "release");
}

test("start pads begin an encounter once, with a full delay and no ongoing hold requirement", () => {
  for (const kind of ["bubble", "boomerang"]) {
    const state = controlled_scene(kind);
    const attack = state.level.interference[0];
    tick_interference(state, attack.cooldown + attack.windup);
    assert.equal(weapon_pose(state, attack).action, "waiting");
    state.pads[0].active = true;
    const beforeQuery = structuredClone(state);
    assert.equal(interference_attack_enabled(state, attack), false);
    assert.deepEqual(state, beforeQuery);
    tick_interference(state, attack.cooldown + attack.windup);
    assert.equal(interference_attack_enabled(state, attack), true);
    assert.equal(weapon_pose(state, attack).action, "ready");
    state.pads[0].active = false;
    expect_recharged_shot(state);
    state.pads[0].active = true;
    const flight = state.interference.projectiles[0];
    tick_interference(state, 0);
    assert.equal(state.interference.projectiles[0], flight);
    assert.equal(interference_attack_enabled(state, attack), true);
  }
  const immediate = scene("bubble");
  assert.equal(interference_attack_enabled(immediate, immediate.level.interference[0]), true);
  const missing = { ...immediate, interference: undefined };
  assert.equal(interference_attack_enabled(missing, immediate.level.interference[0]), false);
  assert.equal(weapon_pose(missing, immediate.level.interference[0]), undefined);
});

test("one-use interrupts cancel warnings and either flight leg, then resume under an active pad", () => {
  for (const [kind, phase] of [
    ["bubble", "windup"],
    ["bubble", "outgoing"],
    ["boomerang", "windup"],
    ["boomerang", "outgoing"],
    ["boomerang", "returning"],
  ]) {
    const state = controlled_scene(kind);
    const attack = state.level.interference[0];
    const attacker = state.interference.attackers[0];
    start_encounter(state);
    tick_interference(state, attack.cooldown);
    if (phase !== "windup") {
      tick_interference(state, attack.windup);
      const flight = state.interference.projectiles[0];
      if (phase === "returning") {
        const leg =
          Math.hypot(flight.target.x - flight.origin.x, flight.target.y - flight.origin.y) /
          attack.speed;
        tick_interference(state, leg);
      }
      assert.equal(flight.phase, phase);
    }
    state.pads[1].active = true;
    tick_interference(state, attack.cooldown + attack.windup);
    assert.equal(state.interference.projectiles.length, 0);
    assert.equal(weapon_pose(state, attack).action, "interrupted");
    assert.equal(weapon_pose(state, attack).holdingWeapon, true);
    const marker = attacker.actionMarker;
    expect_recharged_shot(state);
    // Leaving and re-entering the same pad cannot cancel the resumed shot.
    const resumed = state.interference.projectiles[0];
    state.pads[1].active = false;
    tick_interference(state, 0);
    state.pads[1].active = true;
    tick_interference(state, 0);
    assert.equal(state.interference.projectiles[0], resumed);
    assert.notEqual(attacker.actionMarker, marker);
    // A different pad still has its own one-use interruption.
    state.pads[2].active = true;
    state.pads[2].latched = true;
    tick_interference(state, 0);
    assert.equal(state.interference.projectiles.length, 0);
    expect_recharged_shot(state);
  }
});

test("interrupts latched before start wait, consume together, and cannot renew on later cycles", () => {
  const state = controlled_scene("boomerang");
  const attacker = state.interference.attackers[0];
  const attack = state.level.interference[0];
  for (const pad of state.pads.slice(1)) {
    pad.active = true;
    pad.latched = true;
  }
  tick_interference(state, attack.cooldown + attack.windup);
  assert.equal(weapon_pose(state, attack).action, "waiting");
  assert.deepEqual(attacker.usedInterruptPadIds, []);
  start_encounter(state);
  assert.deepEqual(new Set(attacker.usedInterruptPadIds), new Set(["steady", "rescue"]));
  assert.equal(weapon_pose(state, attack).action, "interrupted");
  expect_recharged_shot(state);
  for (let cycle = 0; cycle < 2; cycle += 1) {
    const release = attacker.actionMarker;
    until_interference(
      state,
      () => attacker.actionMarker.kind === "release" && attacker.actionMarker !== release,
    );
    assert.equal(state.interference.projectiles.length, 1);
  }
  const recreated = create_game_state(state.level);
  assert.deepEqual(recreated, controlled_scene("boomerang"));
  start_encounter(recreated);
  recreated.pads[1].active = true;
  tick_interference(recreated, 0);
  assert.equal(weapon_pose(recreated, attack).action, "interrupted");
});

test("an interrupt removes only its bound attack and its pose recovers without disabling it", () => {
  const controlled = controlled_scene("bubble", "isp", {
    cooldown: WEAPON_ACTION_DURATION.recover * 2,
  });
  const other = TRIAL_LEVEL.interference.find((attack) => attack.kind === "boomerang");
  const state = create_game_state({
    ...controlled.level,
    interference: [...controlled.level.interference, { ...other, cooldown: 0.1, windup: 0.2 }],
  });
  const attack = state.level.interference[0];
  start_encounter(state);
  until_interference(state, () =>
    state.interference.projectiles.some((flight) => flight.attackId === other.id),
  );
  const otherFlight = state.interference.projectiles.find((flight) => flight.attackId === other.id);
  const otherAttacker = structuredClone(state.interference.attackers[1]);
  state.pads[1].active = true;
  tick_interference(state, 0);
  assert.equal(
    state.interference.projectiles.find((flight) => flight.attackId === other.id),
    otherFlight,
  );
  assert.deepEqual(state.interference.attackers[1], otherAttacker);
  assert.equal(weapon_pose(state, attack).action, "interrupted");
  const beforeQuery = structuredClone(state);
  assert.equal(interference_attack_enabled(state, attack), true);
  assert.deepEqual(state, beforeQuery);
  tick_interference(state, WEAPON_ACTION_DURATION.recover * 1.1);
  assert.equal(weapon_pose(state, attack).action, "ready");
  assert.equal(interference_attack_enabled(state, attack), true);
});

test("interrupting preserves a hit and immunity while both recover normally", () => {
  for (const [kind, id, expected] of [
    ["bubble", "isp", "float"],
    ["bubble", "pac", "sticky"],
    ["boomerang", "isp", "dizzy"],
    ["boomerang", "pac", "shove"],
  ]) {
    const state = controlled_scene(kind, id);
    start_encounter(state);
    const affected = state.interference.players[id];
    until_interference(state, () => affected.effect.kind !== "none");
    assert.equal(affected.effect.kind, expected);
    const remaining = affected.effect.remaining;
    const immunity = affected.immunityRemaining;
    state.pads[2].active = true;
    tick_interference(state, 0.01);
    assert.equal(state.interference.projectiles.length, 0);
    assert.equal(affected.effect.kind, expected);
    assert.ok(Math.abs(affected.effect.remaining - (remaining - 0.01)) < 1e-9);
    assert.ok(Math.abs(affected.immunityRemaining - (immunity - 0.01)) < 1e-9);
    tick_interference(state, remaining);
    assert.equal(affected.effect.kind, "none");
    assert.ok(affected.immunityRemaining > 0);
    tick_interference(state, immunity);
    assert.equal(affected.immunityRemaining, 0);
  }
});

test("terminal states freeze interference, while boss defeat stops attacks and allows recovery", () => {
  for (const status of ["dead", "complete"]) {
    const state = scene("boomerang");
    const attack = state.level.interference[0];
    tick_interference(state, attack.cooldown);
    tick_interference(state, attack.windup);
    state.interference.players.isp.effect = { kind: "dizzy", remaining: 1 };
    state.interference.players.isp.immunityRemaining = 2;
    state.status = status;
    const before = structuredClone(state);
    step_interference(state, 10);
    assert.deepEqual(state, before);
    assert.equal(interference_attack_enabled(state, attack), false);
    assert.equal(weapon_pose(state, attack).action, "ready");
    assert.equal(weapon_pose(state, attack).holdingWeapon, true);
  }
  const state = scene("boomerang");
  const attack = state.level.interference[0];
  tick_interference(state, attack.cooldown);
  tick_interference(state, attack.windup);
  const affected = state.interference.players.isp;
  affected.effect = { kind: "dizzy", remaining: 1 };
  affected.immunityRemaining = 2;
  state.bossDefeated = true;
  tick_interference(state, 0.5);
  assert.equal(state.interference.projectiles.length, 0);
  assert.equal(state.interference.attackers[0].actionMarker, undefined);
  assert.equal(interference_attack_enabled(state, attack), false);
  assert.equal(weapon_pose(state, attack).action, "defeated");
  assert.equal(weapon_pose(state, attack).holdingWeapon, true);
  assert.equal(affected.effect.remaining, 0.5);
  assert.equal(affected.immunityRemaining, 1.5);
  tick_interference(state, 10);
  assert.equal(affected.effect.kind, "none");
  assert.equal(affected.immunityRemaining, 0);
  assert.equal(state.interference.projectiles.length, 0);
});

test("warning precedes a deterministic fixed-path shot and recreation clears transient state", () => {
  const a = scene("bubble");
  const b = scene("bubble");
  for (const state of [a, b]) step_game(state, create_empty_input(), 0.15);
  assert.deepEqual(a, b);
  assert.equal(a.interference.attackers[0].phase, "windup");
  assert.equal(a.interference.projectiles.length, 0);
  for (const state of [a, b]) step_game(state, create_empty_input(), 0.2);
  assert.deepEqual(a, b);
  const projectile = a.interference.projectiles[0];
  assert.deepEqual(projectile.origin, interference_muzzle(a.level, a.level.interference[0]));
  const target = structuredClone(projectile.target);
  a.players.isp.rect.x += 50;
  step_game(a, create_empty_input(), 0.1);
  assert.deepEqual(projectile.target, target);
  assert.deepEqual(create_game_state(a.level), scene("bubble"));
  assert.equal(create_game_state(DEMO_LEVEL).interference, undefined);
});

test("both villains produce distinct short reactions on both heroes and restore control", () => {
  for (const [kind, id, expected] of [
    ["bubble", "isp", "float"],
    ["bubble", "pac", "sticky"],
    ["boomerang", "isp", "dizzy"],
    ["boomerang", "pac", "shove"],
  ]) {
    const state = scene(kind, id);
    until(state, () => state.interference.players[id].effect.kind === expected);
    const affected = state.interference.players[id];
    const remaining = affected.effect.remaining;
    assert.ok(remaining <= EFFECT_DURATION[expected]);
    assert.ok(affected.immunityRemaining > remaining);
    const x = state.players[id].rect.x;
    const y = state.players[id].rect.y;
    const input = create_empty_input();
    input[id].right = true;
    input[id].jump = true;
    step_game(state, input, 0.1);
    if (expected === "float") assert.ok(state.players[id].rect.y < y);
    if (expected === "sticky") {
      assert.equal(state.players[id].rect.x, x);
      assert.equal(state.players[id].rect.y, y);
    }
    if (expected === "dizzy")
      assert.ok(state.players[id].rect.x > x && state.players[id].rect.x - x < 21);
    if (expected === "shove") assert.ok(state.players[id].rect.x - x > 21);
    // Freeze new launches so this assertion measures recovery from this hit.
    state.interference.attackers[0].remaining = 100;
    step_game(state, create_empty_input(), EFFECT_DURATION[expected] + 0.1);
    assert.equal(affected.effect.kind, "none");
  }
});

test("recovery immunity prevents bubble refresh and a boomerang hits each hero only once per flight", () => {
  const bubble = scene("bubble");
  until(bubble, () => bubble.interference.players.isp.effect.kind === "float");
  const affected = bubble.interference.players.isp;
  const before = affected.effect.remaining;
  const player = bubble.players.isp;
  const point = { x: player.rect.x + 15, y: player.rect.y + 18 };
  bubble.interference.projectiles.push({
    attackId: bubble.level.interference[0].id,
    kind: "bubble",
    origin: point,
    target: { ...point },
    position: { ...point },
    phase: "outgoing",
    hitPlayers: [],
  });
  step_game(bubble, create_empty_input(), 0.01);
  assert.ok(affected.effect.remaining < before);
  assert.equal(bubble.interference.projectiles.length, 0);
  const boom = scene("boomerang");
  until(boom, () => boom.interference.players.isp.effect.kind === "dizzy");
  const flight = boom.interference.projectiles[0];
  until(boom, () => flight.phase === "returning");
  assert.equal(boom.interference.players.isp.effect.kind, "none");
  until(boom, () => !boom.interference.projectiles.includes(flight));
  assert.deepEqual(flight.hitPlayers, ["isp"]);
  assert.equal(boom.interference.players.isp.effect.kind, "none");
});

test("sticky input cannot jump or push a crate but gravity and later control still work", () => {
  const state = scene("bubble", "pac", {
    crates: [{ id: "box", heavy: false, rect: { x: 330, y: 514, width: 30, height: 36 } }],
  });
  state.interference.players.pac.effect = { kind: "sticky", remaining: 0.6 };
  const input = create_empty_input();
  input.pac.right = true;
  input.pac.jump = true;
  step_game(state, input, 0.3);
  assert.equal(state.crates[0].rect.x, 330);
  assert.equal(state.players.pac.rect.x, 300);
  assert.equal(state.players.pac.rect.y, 514);
  state.players.pac.rect.y = 450;
  step_game(state, input, 0.1);
  assert.ok(state.players.pac.rect.y > 450);
  step_game(state, input, 0.4);
  assert.ok(state.crates[0].rect.x > 330);
});

test("shove is clipped by a wall and a blocked partner, while float respects ceilings", () => {
  const state = scene("boomerang", "pac", {
    barriers: [{ id: "wall", blocks: "both", rect: { x: 820, y: 300, width: 20, height: 250 } }],
  });
  state.players.isp.rect.x = 790;
  state.interference.players.pac.effect = {
    kind: "shove",
    remaining: 0.4,
    velocity: { x: 260, y: 0 },
  };
  const input = create_empty_input();
  input.pac.right = true;
  step_game(state, input, 0.3);
  assert.ok(state.players.isp.rect.x + 30 <= 820);
  assert.ok(state.players.pac.rect.x + 30 <= state.players.isp.rect.x);
  assert.equal(overlaps(state.players.isp.rect, state.players.pac.rect), false);
  const floating = scene("bubble");
  floating.players.isp.rect.y = 5;
  floating.interference.players.isp.effect = { kind: "float", remaining: 1.4 };
  step_game(floating, create_empty_input(), 0.2);
  assert.equal(floating.players.isp.rect.y, 0);
});

test("shared anatomy mirrors facing and diagonal muzzle aim agrees with the launched lane", () => {
  for (const kind of ["bubble", "boomerang"]) {
    for (const horizontal of [-1, 1]) {
      const state = scene(kind);
      const actor = state.level.villainScene[kind === "bubble" ? "gem" : "cana"].position;
      const attack = {
        ...state.level.interference[0],
        target: { x: actor.x + horizontal * 250, y: actor.y - 100 },
      };
      state.level = { ...state.level, interference: [attack] };
      const geometry = weapon_geometry(state.level, attack);
      assert.equal(geometry.facing, horizontal);
      assert.ok((geometry.grip.x - actor.x) * horizontal > 0);
      assert.ok((geometry.shoulder.x - actor.x) * horizontal > 0);
      assert.deepEqual(geometry.actorPosition, actor);
      assert.deepEqual(geometry.catchAnchor, geometry.releaseAnchor);
      state.interference.attackers[0].phase = "windup";
      state.interference.attackers[0].remaining = 0;
      step_interference(state, 0);
      const flight = state.interference.projectiles[0];
      assert.deepEqual(flight.origin, geometry.releaseAnchor);
      assert.deepEqual(flight.target, geometry.endpoint);
      const angle = Math.atan2(
        flight.target.y - flight.origin.y,
        flight.target.x - flight.origin.x,
      );
      assert.ok(Math.abs(angle - geometry.aimAngle) < 1e-9);
    }
  }
});

test("bubble range ends actual travel before a distant hero; authored invalid ranges fail centrally", () => {
  const state = scene("bubble", "isp", {
    spawns: { isp: { x: 700, y: 514 }, pac: { x: 50, y: 514 } },
  });
  const attack = { ...state.level.interference[0], target: { x: 900, y: 530 }, maxRange: 70 };
  state.level = { ...state.level, interference: [attack] };
  const geometry = weapon_geometry(state.level, attack);
  state.interference.attackers[0].phase = "windup";
  state.interference.attackers[0].remaining = 0;
  step_interference(state, 0);
  const flight = state.interference.projectiles[0];
  assert.ok(
    Math.abs(
      Math.hypot(flight.target.x - flight.origin.x, flight.target.y - flight.origin.y) -
        attack.maxRange,
    ) < 1e-9,
  );
  step_interference(state, attack.maxRange / attack.speed + 0.001);
  assert.deepEqual(flight.position, geometry.endpoint);
  assert.equal(state.interference.projectiles.length, 0);
  assert.equal(state.interference.players.isp.effect.kind, "none");
  for (const maxRange of [undefined, 0, -1, Infinity, NaN])
    assert.throws(
      () => create_game_state({ ...state.level, interference: [{ ...attack, maxRange }] }),
      /finite positive maxRange/,
    );
  for (const target of [geometry.grip, { ...geometry.grip, x: geometry.grip.x + 1 }]) {
    const near = weapon_geometry(state.level, { ...attack, target });
    assert.ok(Number.isFinite(near.aimAngle));
    assert.deepEqual(near.endpoint, near.releaseAnchor);
  }
});

test("natural boomerang catch is distinct from interruption and fresh windup overrides recovery", () => {
  const state = scene("boomerang");
  const attack = state.level.interference[0];
  const attacker = state.interference.attackers[0];
  attacker.phase = "windup";
  attacker.remaining = 0;
  step_interference(state, 0);
  assert.equal(attacker.actionMarker.kind, "release");
  assert.equal(weapon_pose(state, attack).holdingWeapon, false);
  state.time += WEAPON_ACTION_DURATION.release + 0.01;
  assert.equal(weapon_pose(state, attack).action, "outgoing");
  const flight = state.interference.projectiles[0];
  const leg =
    Math.hypot(flight.target.x - flight.origin.x, flight.target.y - flight.origin.y) / attack.speed;
  step_interference(state, leg + 0.001);
  assert.equal(weapon_pose(state, attack).action, "returning");
  step_interference(state, leg + 0.001);
  assert.deepEqual(flight.position, flight.origin);
  assert.equal(attacker.actionMarker.kind, "catch");
  assert.equal(weapon_pose(state, attack).action, "catch");
  assert.equal(weapon_pose(state, attack).holdingWeapon, true);
  const pose = weapon_pose(state, attack);
  assert.deepEqual(weapon_pose(state, attack), pose);
  attacker.phase = "windup";
  attacker.remaining = attack.windup;
  assert.equal(weapon_pose(state, attack).action, "windup");
  step_interference(state, attack.windup);
  assert.equal(attacker.actionMarker.kind, "release");
  assert.equal(create_game_state(state.level).interference.attackers[0].actionMarker, undefined);
});
