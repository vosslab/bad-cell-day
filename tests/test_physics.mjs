import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import { clip_axis, overlaps, world_solids } from "../src/collisions.ts";
import { EFFECT_DURATION } from "../src/interference.ts";
import { step_game } from "../src/physics.ts";

function scene(extra = {}) {
  return create_game_state({
    ...DEMO_LEVEL,
    spawns: { isp: { x: 60, y: 164 }, pac: { x: 180, y: 164 } },
    platforms: [{ id: "floor", kind: "static", rect: { x: 0, y: 200, width: 1100, height: 50 } }],
    exits: [],
    ...extra,
  });
}

function pad(id, accepts, activation, effects = []) {
  return {
    id,
    accepts,
    activation,
    effects,
    label: id,
    minWeight: 1,
    rect: { x: 50, y: 194, width: 50, height: 6 },
  };
}

test("simultaneous movement is deterministic and held jump does not auto-repeat", () => {
  const a = scene();
  const b = scene();
  const input = create_empty_input();
  input.isp.right = true;
  input.pac.right = true;
  input.isp.jump = true;
  step_game(a, input, 0.1);
  step_game(b, input, 0.1);
  assert.deepEqual(a, b);
  assert.ok(a.players.isp.rect.y < 164);
  assert.ok(a.players.pac.rect.x > 180);
  step_game(a, input, 1.5);
  assert.equal(a.players.isp.rect.y, 164);
});

test("character barriers block only their owner", () => {
  const state = scene({
    barriers: [{ id: "orange", blocks: "isp", rect: { x: 100, y: 0, width: 10, height: 200 } }],
  });
  state.players.pac.rect = { ...state.players.pac.rect, x: 60, y: 100 };
  const input = create_empty_input();
  input.isp.right = true;
  input.pac.right = true;
  step_game(state, input, 0.5);
  assert.ok(state.players.isp.rect.x + state.players.isp.rect.width <= 100);
  assert.ok(state.players.pac.rect.x > 110);
});

test("closed barriers allow only the nearer normal exit, including ties and strict overlap", () => {
  for (const axis of ["x", "y"]) {
    const rect = (normal, tangent, normalSize, tangentSize) =>
      axis === "x"
        ? { x: normal, y: tangent, width: normalSize, height: tangentSize }
        : { y: normal, x: tangent, height: normalSize, width: tangentSize };
    const state = scene({
      platforms: [],
      barriers: [{ id: "door", blocks: "both", rect: rect(40, 0, 8, 100) }],
    });
    const solids = world_solids(state, "pac").slice(0, 1);
    for (const [position, exitSign] of [
      [30, -1],
      [43, 1],
      [34, -1],
      [20.0001, -1],
    ]) {
      const body = rect(position, 20, 20, 20);
      assert.equal(clip_axis(body, exitSign * 40, axis, solids), exitSign * 40);
      assert.equal(clip_axis(body, -exitSign * 40, axis, solids), 0);
      assert.equal(clip_axis(body, 0, axis, solids), 0);
      body[axis] += exitSign * 40;
      assert.equal(overlaps(body, state.level.barriers[0].rect), false);
      const reentry = clip_axis(body, -exitSign * 80, axis, solids);
      body[axis] += reentry;
      assert.equal(overlaps(body, state.level.barriers[0].rect), false);
    }
    assert.equal(clip_axis(rect(20, 20, 20, 20), 40, axis, solids), 0);
    assert.equal(clip_axis(rect(48, 20, 20, 20), -40, axis, solids), 0);
  }
  const square = scene({
    platforms: [],
    barriers: [{ id: "square", blocks: "both", rect: { x: 40, y: 40, width: 8, height: 8 } }],
  });
  assert.equal(clip_axis({ x: 34, y: 34, width: 20, height: 20 }, 1, "x", world_solids(square)), 0);
});

test("barrier clearance stays swept against other bodies and preserves tangent and ordinary overlap", () => {
  const state = scene({
    platforms: [],
    barriers: [{ id: "door", blocks: "both", rect: { x: 40, y: 0, width: 8, height: 100 } }],
  });
  const body = { x: 30, y: 20, width: 20, height: 20 };
  const door = world_solids(state);
  const blocker = { x: 0, y: 20, width: 25, height: 20 };
  for (const solids of [
    [...door, blocker],
    [blocker, ...door],
  ]) {
    assert.equal(clip_axis(body, -40, "x", solids), -5);
    assert.equal(clip_axis(body, 40, "x", solids), 0);
  }
  assert.equal(clip_axis(body, 15, "y", door), 15);
  const diagonal = { ...body };
  diagonal.x += clip_axis(diagonal, 10, "x", door);
  diagonal.y += clip_axis(diagonal, 10, "y", door);
  assert.deepEqual(diagonal, { ...body, y: 30 });
  assert.equal(clip_axis(body, 10, "x", [state.level.barriers[0].rect]), 10);
});

test("closed-door overlap respects owner immunity and blocked retreat recovers when HOLD reopens", () => {
  const state = scene({
    barriers: [{ id: "door", blocks: "pac", rect: { x: 100, y: 0, width: 10, height: 200 } }],
    pads: [pad("hold", "isp", "hold", [{ kind: "door", barrierId: "door" }])],
    crates: [{ id: "box", heavy: true, rect: { x: 50, y: 164, width: 30, height: 36 } }],
  });
  state.players.isp.rect.x = 300;
  state.players.pac.rect.x = 80;
  const input = create_empty_input();
  input.pac.left = true;
  step_game(state, input, 0.1);
  assert.equal(state.players.pac.rect.x, 80);
  assert.equal(state.barriers[0].open, false);
  assert.equal(overlaps(state.players.pac.rect, state.crates[0].rect), false);
  input.pac.left = false;
  input.pac.right = true;
  step_game(state, input, 0.1);
  assert.equal(state.players.pac.rect.x, 80);
  state.players.isp.rect.x = 60;
  step_game(state, input, 0.3);
  assert.equal(state.barriers[0].open, true);
  assert.ok(state.players.pac.rect.x > 110);

  state.barriers[0].open = false;
  const overlap = { x: 80, y: 100, width: 28, height: 36 };
  assert.equal(clip_axis(overlap, 10, "x", world_solids(state, "isp")), 10);
  assert.equal(clip_axis(overlap, 10, "x", world_solids(state, "pac")), 0);
});

test("an overlapping crate cannot prop open or move deeper into a character barrier", () => {
  const state = scene({
    barriers: [{ id: "door", blocks: "pac", rect: { x: 100, y: 0, width: 10, height: 200 } }],
    pads: [pad("hold", "isp", "hold", [{ kind: "door", barrierId: "door" }])],
    crates: [{ id: "box", heavy: false, rect: { x: 85, y: 164, width: 24, height: 36 } }],
  });
  state.players.isp.rect.x = 57;
  state.players.pac.rect.x = 300;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.barriers[0].open, true);
  state.players.isp.rect.x = 300;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.barriers[0].open, false);
  assert.equal(state.crates[0].rect.x, 85);
  assert.equal(clip_axis(state.crates[0].rect, 10, "x", world_solids(state)), 0);
  assert.equal(clip_axis(state.crates[0].rect, -10, "x", world_solids(state)), -10);
});

test("held plates release while rescue latches remain active", () => {
  const state = scene({ pads: [pad("held", "isp", "hold"), pad("rescue", "isp", "latch")] });
  step_game(state, create_empty_input(), 0.01);
  assert.ok(state.pads.every((entry) => entry.active));
  state.players.isp.rect.x = 300;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.pads[0].active, false);
  assert.equal(state.pads[1].active, true);
});

test("crates hold ordinary pads but cannot use character pads or boss targets", () => {
  const state = scene({
    pads: [pad("isp", "isp", "hold"), pad("pac", "pac", "hold"), pad("weight", "any", "hold")],
    crates: [{ id: "box", heavy: false, rect: { x: 60, y: 174, width: 24, height: 26 } }],
    boss: {
      name: "Boss",
      targetPadIds: ["isp", "pac"],
      rect: { x: 800, y: 100, width: 20, height: 20 },
    },
  });
  state.players.isp.rect.x = 300;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.pads[0].active, false);
  assert.equal(state.pads[2].active, true);
  assert.equal(state.bossDefeated, false);
  state.players.isp.rect.x = 50;
  state.players.pac.rect.x = 90;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.bossDefeated, true);
  state.players.isp.rect.x = 300;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.bossDefeated, true);
});

test("heavy crates need the close two-player pushing chain", () => {
  const state = scene({
    crates: [{ id: "heavy", heavy: true, rect: { x: 120, y: 164, width: 36, height: 36 } }],
  });
  state.players.isp.rect.x = 90;
  state.players.pac.rect.x = 250;
  const input = create_empty_input();
  input.isp.right = true;
  step_game(state, input, 0.2);
  assert.equal(state.crates[0].rect.x, 120);
  state.players.pac.rect.x = 60;
  input.pac.right = true;
  step_game(state, input, 0.2);
  assert.ok(state.crates[0].rect.x > 120);
  assert.equal(overlaps(state.players.isp.rect, state.crates[0].rect), false);
  assert.equal(overlaps(state.players.isp.rect, state.players.pac.rect), false);
});

test("players can land on heads and jump apart without interpenetration", () => {
  const state = scene();
  state.players.pac.rect.x = 60;
  state.players.pac.rect.y = 80;
  step_game(state, create_empty_input(), 0.5);
  assert.equal(state.players.pac.rect.y + state.players.pac.rect.height, state.players.isp.rect.y);
  const input = create_empty_input();
  input.isp.jump = true;
  input.pac.right = true;
  step_game(state, input, 0.2);
  assert.equal(overlaps(state.players.isp.rect, state.players.pac.rect), false);
});

test("FLOAT carries a standing passenger once and stops both at the passenger's ceiling", () => {
  const ceiling = { x: 0, y: 80, width: 1100, height: 10 };
  const state = scene({
    interference: [],
    barriers: [{ id: "passenger_ceiling", blocks: "pac", rect: ceiling }],
  });
  const lower = state.players.isp;
  const passenger = state.players.pac;
  passenger.rect.x = lower.rect.x;
  passenger.rect.y = lower.rect.y - passenger.rect.height;
  state.interference.players.isp.effect = { kind: "float", remaining: EFFECT_DURATION.float };
  const lowerY = lower.rect.y;
  const passengerY = passenger.rect.y;
  const input = create_empty_input();

  step_game(state, input, 0.1);
  assert.ok(lower.rect.y < lowerY);
  assert.ok(Math.abs(passenger.rect.y - passengerY - (lower.rect.y - lowerY)) < 1e-9);
  assert.equal(passenger.rect.y + passenger.rect.height, lower.rect.y);
  assert.equal(overlaps(lower.rect, passenger.rect), false);

  step_game(state, input, 0.5);
  assert.equal(passenger.rect.y, ceiling.y + ceiling.height);
  assert.equal(passenger.rect.y + passenger.rect.height, lower.rect.y);
  assert.equal(overlaps(passenger.rect, ceiling), false);
  assert.equal(overlaps(lower.rect, passenger.rect), false);
  const stoppedY = lower.rect.y;
  step_game(state, input, 0.1);
  assert.equal(lower.rect.y, stoppedY);
  assert.equal(passenger.rect.y, ceiling.y + ceiling.height);
});

test("a passenger can jump off a floating hero and keep ordinary movement and jump control", () => {
  const state = scene({ interference: [] });
  const lower = state.players.isp;
  const passenger = state.players.pac;
  passenger.rect.x = lower.rect.x;
  passenger.rect.y = lower.rect.y - passenger.rect.height;
  state.interference.players.isp.effect = { kind: "float", remaining: EFFECT_DURATION.float };
  const input = create_empty_input();
  step_game(state, input, 0.1);
  const takeoffX = passenger.rect.x;
  input.pac.jump = true;
  input.pac.right = true;
  step_game(state, input, 0.1);
  assert.ok(passenger.rect.y + passenger.rect.height < lower.rect.y);
  assert.ok(passenger.rect.x > takeoffX);
  assert.equal(overlaps(lower.rect, passenger.rect), false);

  input.pac.jump = false;
  step_game(state, input, EFFECT_DURATION.float + 1);
  assert.equal(passenger.grounded, true);
  const landed = { ...passenger.rect };
  input.pac.jump = true;
  step_game(state, input, 0.1);
  assert.ok(passenger.rect.y < landed.y);
  assert.ok(passenger.rect.x > landed.x);
  assert.equal(overlaps(lower.rect, passenger.rect), false);
});

test("motor stops, pads follow platforms, and Pac restores missing bridge", () => {
  const motor = {
    id: "lift",
    kind: "moving",
    rect: { x: 400, y: 150, width: 100, height: 10 },
    motion: { offset: { x: 100, y: 0 }, period: 3 },
  };
  const state = scene({
    platforms: [
      ...DEMO_LEVEL.platforms,
      motor,
      {
        id: "bridge",
        kind: "unstable",
        rect: { x: 600, y: 200, width: 60, height: 10 },
        collapseAfter: 0.1,
        resetAfter: 4,
      },
    ],
    pads: [
      pad("motor", "isp", "hold", [{ kind: "motor", platformId: "lift" }]),
      pad("restore", "pac", "hold", [{ kind: "stabilize", platformId: "bridge" }]),
      {
        ...pad("attached", "any", "hold"),
        platformId: "lift",
        rect: { x: 10, y: -5, width: 30, height: 5 },
      },
    ],
  });
  state.platforms[2].active = false;
  state.players.pac.rect.x = 90;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.platforms[1].motorOn, false);
  assert.equal(state.platforms[2].active, true);
  state.players.isp.rect.x = 300;
  step_game(state, create_empty_input(), 0.1);
  assert.equal(state.platforms[1].motorOn, true);
  assert.ok(state.platforms[1].rect.x > 400);
  assert.equal(state.pads[2].rect.x, state.platforms[1].rect.x + 10);
});

test("hazard death wins over exits and matching exits complete together", () => {
  const exits = [
    { player: "isp", rect: { x: 50, y: 150, width: 60, height: 50 } },
    { player: "pac", rect: { x: 170, y: 150, width: 60, height: 50 } },
  ];
  const safe = scene({ exits });
  step_game(safe, create_empty_input(), 0.01);
  assert.equal(safe.status, "complete");
  const danger = scene({
    exits,
    hazards: [
      { id: "slime", kind: "slime", harms: "both", rect: { x: 50, y: 150, width: 60, height: 50 } },
    ],
  });
  step_game(danger, create_empty_input(), 0.01);
  assert.equal(danger.status, "dead");
  assert.ok(danger.deathReason);
});

test("moving carriers carry riders and stop against a crate", () => {
  const state = scene({
    platforms: [
      {
        id: "carrier",
        kind: "moving",
        rect: { x: 50, y: 200, width: 100, height: 20 },
        motion: { offset: { x: 200, y: 0 }, period: 2 },
      },
      { id: "floor", kind: "static", rect: { x: 0, y: 250, width: 1100, height: 20 } },
    ],
    crates: [{ id: "block", heavy: true, rect: { x: 200, y: 190, width: 40, height: 60 } }],
  });
  state.players.pac.rect.x = 350;
  step_game(state, create_empty_input(), 0.8);
  assert.ok(state.players.isp.rect.x > 60);
  assert.ok(state.platforms[0].rect.x + state.platforms[0].rect.width <= state.crates[0].rect.x);
  assert.equal(overlaps(state.players.isp.rect, state.crates[0].rect), false);
});

test("unstable bridge disappears under weight then resets, and sparks enforce ownership", () => {
  const state = scene({
    platforms: [
      {
        id: "bridge",
        kind: "unstable",
        rect: { x: 0, y: 200, width: 1100, height: 20 },
        collapseAfter: 0.1,
        resetAfter: 0.2,
      },
    ],
    collectibles: [{ id: "pac_spark", owner: "pac", position: { x: 70, y: 180 } }],
  });
  step_game(state, create_empty_input(), 0.15);
  assert.equal(state.platforms[0].active, false);
  assert.equal(state.collectibles[0].collected, false);
  state.players.isp.rect.x = 400;
  state.players.pac.rect.x = 60;
  state.players.pac.rect.y = 164;
  step_game(state, create_empty_input(), 0.01);
  assert.equal(state.collectibles[0].collected, true);
  state.players.pac.rect.x = 300;
  step_game(state, create_empty_input(), 0.2);
  assert.equal(state.platforms[0].active, true);
});

test("power pads stop and resume a solid carrier without advancing its motion phase", () => {
  const state = scene({
    spawns: { isp: { x: 410, y: 114 }, pac: { x: 60, y: 164 } },
    platforms: [
      { id: "floor", kind: "static", rect: { x: 0, y: 200, width: 1100, height: 50 } },
      {
        id: "carrier",
        kind: "moving",
        rect: { x: 400, y: 150, width: 120, height: 12 },
        motion: { offset: { x: 100, y: 0 }, period: 2 },
        requiresPower: true,
      },
    ],
    pads: [pad("power", "pac", "hold", [{ kind: "power", platformId: "carrier" }])],
  });
  const carrier = state.platforms[1];
  assert.equal(carrier.powered, false);
  step_game(state, create_empty_input(), 0.1);
  assert.equal(carrier.powered, true);
  assert.ok(carrier.rect.x > 400);
  state.players.pac.rect.x = 300;
  const phase = carrier.motionTime;
  const x = carrier.rect.x;
  const riderX = state.players.isp.rect.x;
  step_game(state, create_empty_input(), 0.3);
  assert.equal(carrier.powered, false);
  assert.equal(carrier.active, true);
  assert.equal(carrier.stabilized, false);
  assert.equal(carrier.motionTime, phase);
  assert.equal(carrier.rect.x, x);
  assert.equal(state.players.isp.rect.x, riderX);
  assert.equal(state.players.isp.rect.y, 114);
  state.players.pac.rect.x = 60;
  step_game(state, create_empty_input(), 0.1);
  assert.ok(Math.abs(carrier.rect.x - x - 10) < 0.001);
  assert.ok(Math.abs(state.players.isp.rect.x - riderX - 10) < 0.001);
});

test("latched power overrides an outage but a motor stop still wins, and reset clears the latch", () => {
  const state = scene({
    platforms: [
      ...DEMO_LEVEL.platforms,
      {
        id: "carrier",
        kind: "moving",
        rect: { x: 400, y: 150, width: 100, height: 12 },
        motion: { offset: { x: 100, y: 0 }, period: 2 },
        requiresPower: true,
        powerCycle: { period: 2, activeFor: 0.1, phase: 1 },
      },
    ],
    pads: [
      pad("stop", "isp", "hold", [{ kind: "motor", platformId: "carrier" }]),
      pad("supply", "isp", "latch", [{ kind: "power", platformId: "carrier" }]),
    ],
  });
  const initial = structuredClone(state);
  const carrier = state.platforms[1];
  step_game(state, create_empty_input(), 0.05);
  assert.equal(carrier.powered, true);
  assert.equal(carrier.motorOn, false);
  assert.equal(carrier.motionTime, 0);
  assert.equal(carrier.rect.x, 400);
  state.players.isp.rect.x = 300;
  step_game(state, create_empty_input(), 0.1);
  assert.equal(state.pads[1].latched, true);
  assert.equal(carrier.powered, true);
  assert.equal(carrier.motorOn, true);
  assert.ok(carrier.rect.x > 400);
  assert.deepEqual(create_game_state(state.level), initial);
});

test("cyclic power resumes from its frozen phase and honors its initial phase", () => {
  const state = scene({
    platforms: [
      ...DEMO_LEVEL.platforms,
      {
        id: "carrier",
        kind: "moving",
        rect: { x: 400, y: 150, width: 100, height: 12 },
        motion: { offset: { x: 100, y: 0 }, period: 2 },
        powerCycle: { period: 1, activeFor: 0.2, phase: 0.5 },
      },
    ],
  });
  const carrier = state.platforms[1];
  assert.equal(carrier.powered, false);
  step_game(state, create_empty_input(), 0.3);
  assert.equal(carrier.rect.x, 400);
  step_game(state, create_empty_input(), 0.3);
  assert.ok(carrier.rect.x > 400);
  step_game(state, create_empty_input(), 0.2);
  assert.equal(carrier.powered, false);
  const phase = carrier.motionTime;
  const x = carrier.rect.x;
  step_game(state, create_empty_input(), 0.5);
  assert.equal(carrier.rect.x, x);
  assert.equal(carrier.motionTime, phase);
  step_game(state, create_empty_input(), 0.3);
  assert.ok(carrier.rect.x > x);
  assert.ok(carrier.motionTime > phase);
});
