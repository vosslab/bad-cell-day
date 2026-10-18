import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { overlaps } from "../src/collisions.ts";
import { move_counterweights, validate_counterweights } from "../src/counterweights.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import { move_platforms } from "../src/mechanisms.ts";
import { step_game } from "../src/physics.ts";

function level(extra = {}) {
  return {
    ...DEMO_LEVEL,
    spawns: { isp: { x: 120, y: 164 }, pac: { x: 520, y: 364 } },
    platforms: [
      { id: "a", kind: "counterweight", rect: { x: 100, y: 200, width: 180, height: 20 } },
      { id: "b", kind: "counterweight", rect: { x: 500, y: 400, width: 180, height: 20 } },
    ],
    counterweights: [{ id: "pair", platformIds: ["a", "b"], travel: 200, speed: 60 }],
    crates: [{ id: "cargo", heavy: false, rect: { x: 200, y: 160, width: 40, height: 40 } }],
    exits: [],
    ...extra,
  };
}

function villain_level(gemPosition, canaPosition = { x: 700, y: 100 }, extra = {}) {
  return level({
    villainScene: {
      gem: { position: gemPosition, opening: "", ending: "" },
      cana: { position: canaPosition, opening: "", ending: "" },
      schemes: [],
    },
    ...extra,
  });
}

function assert_pair(state, position) {
  assert.equal(state.counterweights[0].position, position);
  assert.equal(state.platforms[0].rect.y, state.level.platforms[0].rect.y + position);
  assert.equal(state.platforms[1].rect.y, state.level.platforms[1].rect.y - position);
  assert.equal(state.platforms[0].displacement.y + state.platforms[1].displacement.y, 0);
}

test("passenger clutch samples geometry and upward departures; loads choose direction", () => {
  const state = create_game_state(level());
  state.players.isp.supportId = "unrelated";
  move_platforms(state, 0.5);
  assert_pair(state, 30);
  assert.deepEqual(state.counterweights[0].loads, [2, 1]);
  assert.deepEqual(state.counterweights[0].riders, [true, true]);
  state.players.pac.velocity.y = -1;
  move_platforms(state, 0.5);
  assert_pair(state, 30);
  assert.deepEqual(state.counterweights[0].loads, [2, 0]);
  assert.deepEqual(state.counterweights[0].riders, [true, false]);
  state.players.pac.velocity.y = 0;
  state.crates[0].rect.x = 580;
  state.crates[0].rect.y = state.platforms[1].rect.y - 40;
  move_platforms(state, 0.25);
  assert_pair(state, 15);
  assert.deepEqual(state.counterweights[0].loads, [1, 2]);
  state.crates[0].rect.x = 800;
  move_platforms(state, 0.5);
  assert_pair(state, 15);
  assert.equal(state.counterweights[0].blocked, false);
});

test("recursive cargo and hero support is carried once and weighted independently", () => {
  const definition = level();
  definition.crates.push({
    id: "top",
    heavy: true,
    rect: { x: 200, y: 120, width: 40, height: 40 },
  });
  definition.spawns.isp = { x: 203, y: 84 };
  const state = create_game_state(definition);
  const before = [...state.crates, state.players.isp, state.players.pac].map((body) => body.rect.y);
  move_counterweights(state, 0.5);
  assert.deepEqual(state.counterweights[0].loads, [4, 1]);
  assert.deepEqual(state.counterweights[0].riders, [true, true]);
  assert.deepEqual(
    [...state.crates, state.players.isp, state.players.pac].map(
      (body, i) => body.rect.y - before[i],
    ),
    [30, 30, 30, -30],
  );
  // Both heroes on one stack leave the other passenger lamp off.
  state.players.pac.rect = { ...state.players.isp.rect, y: state.players.isp.rect.y - 36 };
  move_counterweights(state, 0.5);
  assert_pair(state, 30);
  assert.deepEqual(state.counterweights[0].riders, [true, false]);
});

test("uncarried bodies stop either deck atomically, then release without penetration", () => {
  for (const side of [0, 1]) {
    const definition = level();
    definition.crates.push({
      id: "obstacle",
      heavy: false,
      rect:
        side === 0
          ? { x: 150, y: 245, width: 30, height: 30 }
          : { x: 620, y: 320, width: 30, height: 30 },
    });
    const state = create_game_state(definition);
    move_counterweights(state, 1);
    const expected = side === 0 ? 25 : 50;
    assert_pair(state, expected);
    assert.equal(state.counterweights[0].blocked, true);
    for (const deck of state.platforms)
      assert.equal(overlaps(deck.rect, state.crates[1].rect), false);
    move_counterweights(state, 1);
    assert_pair(state, expected);
    state.crates[1].rect.x = 800;
    move_counterweights(state, 0.1);
    assert_pair(state, expected + 6);
    assert.equal(state.counterweights[0].blocked, false);
  }
});

test("ceiling and dock straddling clip the whole supported closure", () => {
  const definition = level();
  definition.platforms.push({
    id: "ceiling",
    kind: "static",
    rect: { x: 500, y: 300, width: 180, height: 50 },
  });
  const state = create_game_state(definition);
  move_counterweights(state, 1);
  assert_pair(state, 14);
  assert.equal(state.players.pac.rect.y, 350);
  assert.equal(state.counterweights[0].blocked, true);
  state.platforms[2].active = false;
  move_counterweights(state, 0.1);
  assert_pair(state, 20);
  // Cargo touching a stationary dock still belongs to the deck. Lowering
  // would penetrate that dock, so the entire pair must pause.
  const docked = create_game_state(level());
  docked.level = {
    ...docked.level,
    platforms: [
      ...docked.level.platforms,
      { id: "dock", kind: "static", rect: { x: 280, y: 200, width: 60, height: 20 } },
    ],
  };
  docked.platforms.push({
    ...docked.platforms[0],
    id: "dock",
    rect: { ...docked.level.platforms[2].rect },
  });
  docked.crates[0].rect.x = 260;
  move_counterweights(docked, 1);
  assert_pair(docked, 0);
  assert.equal(docked.counterweights[0].blocked, true);
});

test("owner-specific barriers apply to heroes; decks and cargo use crate semantics", () => {
  const definition = level({
    barriers: [
      {
        id: "gate",
        blocks: "isp",
        rect: { x: 510, y: 300, width: 40, height: 50 },
      },
    ],
  });
  const state = create_game_state(definition);
  move_counterweights(state, 0.5);
  assert_pair(state, 30);
  const cargo = create_game_state(
    level({
      barriers: [
        {
          id: "gate",
          blocks: "isp",
          rect: { x: 580, y: 300, width: 40, height: 50 },
        },
      ],
    }),
  );
  cargo.crates.push({
    ...cargo.crates[0],
    id: "other",
    rect: { x: 580, y: 360, width: 40, height: 40 },
  });
  // An extra right load balances; add another left load to keep positive travel.
  cargo.crates.push({
    ...cargo.crates[0],
    id: "extra",
    rect: { x: 240, y: 160, width: 40, height: 40 },
  });
  move_counterweights(cargo, 0.5);
  assert_pair(cargo, 10);
  assert.equal(cargo.counterweights[0].blocked, true);
});

test("initial overlap blocks and opposite-moving closures use relative clearance", () => {
  const state = create_game_state(level());
  state.platforms.push({
    ...state.platforms[0],
    id: "overlap",
    rect: { x: 110, y: 205, width: 10, height: 10 },
  });
  move_counterweights(state, 1);
  assert_pair(state, 0);
  assert.equal(state.counterweights[0].blocked, true);
  const tiny = create_game_state(level());
  move_counterweights(tiny, 1);
  tiny.platforms.push({
    ...tiny.platforms[0],
    id: "tiny_overlap",
    rect: {
      x: tiny.players.pac.rect.x,
      y: tiny.players.pac.rect.y - 20 + Number.EPSILON * tiny.players.pac.rect.y,
      width: 30,
      height: 20,
    },
  });
  assert.equal(overlaps(tiny.players.pac.rect, tiny.platforms[2].rect), true);
  tiny.crates[0].rect.x = 580;
  tiny.crates[0].rect.y = tiny.platforms[1].rect.y - 40;
  move_counterweights(tiny, 1);
  assert_pair(tiny, 0);
  assert.equal(tiny.counterweights[0].blocked, false);
  // Runtime geometry can contain overhanging cargo, even with separated shafts.
  const relative = create_game_state(level());
  relative.crates[0].rect.width = 460;
  move_counterweights(relative, 2);
  // Cargo's bottom is 200, B rider's top 364: opposite travel closes 164px.
  assert_pair(relative, 82);
  assert.equal(overlaps(relative.crates[0].rect, relative.players.pac.rect), false);
  assert.equal(relative.counterweights[0].blocked, true);
});

test("shared support blocks safely and a rising stack stops at its topmost body", () => {
  // Intersecting authored shafts are invalid, but runtime safety still handles
  // one wide body supported by both equal-height decks.
  const sharedDefinition = level();
  sharedDefinition.platforms[1].rect.y = 200;
  sharedDefinition.spawns.pac.y = 164;
  sharedDefinition.crates[0].rect.width = 460;
  sharedDefinition.crates.push({
    id: "ballast",
    heavy: false,
    rect: { x: 110, y: 160, width: 10, height: 40 },
  });
  const shared = create_game_state(sharedDefinition);
  move_counterweights(shared, 0.5);
  assert_pair(shared, 0);
  assert.deepEqual(shared.counterweights[0].loads, [3, 2]);
  assert.equal(shared.counterweights[0].blocked, true);
  assert.equal(shared.crates[0].rect.y, 160);

  const definition = level();
  definition.crates = [
    { id: "bottom", heavy: true, rect: { x: 580, y: 360, width: 40, height: 40 } },
    { id: "top", heavy: false, rect: { x: 580, y: 320, width: 40, height: 40 } },
    { id: "left_bottom", heavy: true, rect: { x: 200, y: 160, width: 40, height: 40 } },
    { id: "left_top", heavy: true, rect: { x: 200, y: 120, width: 40, height: 40 } },
  ];
  definition.spawns.pac = { x: 582, y: 284 };
  definition.platforms.push({
    id: "ceiling",
    kind: "static",
    rect: { x: 570, y: 250, width: 60, height: 24 },
  });
  const stacked = create_game_state(definition);
  move_counterweights(stacked, 0.5);
  assert_pair(stacked, 10);
  assert.equal(stacked.players.pac.rect.y, 274);
  assert.equal(stacked.counterweights[0].blocked, true);
});

test("end stops, reset, and identical integrated calls preserve immutable definitions", () => {
  const definition = level();
  const original = JSON.stringify(definition);
  const a = create_game_state(definition);
  const b = create_game_state(definition);
  for (let i = 0; i < 100; i += 1) {
    step_game(a, create_empty_input(), 0.05);
    step_game(b, create_empty_input(), 0.05);
  }
  assert.deepEqual(a, b);
  assert_pair(a, definition.counterweights[0].travel);
  assert.equal(a.counterweights[0].blocked, false);
  assert.equal(JSON.stringify(definition), original);
  const reset = create_game_state(definition);
  assert.deepEqual(reset.counterweights[0], {
    id: "pair",
    position: 0,
    loads: [0, 0],
    riders: [false, false],
    blocked: false,
  });
  assert.deepEqual(create_game_state(DEMO_LEVEL).counterweights, []);
});

test("fractional travel reaches an exact end stop against a flush shaft base", () => {
  const definition = level();
  definition.counterweights[0].travel = 170.3;
  definition.counterweights[0].speed = 37.7;
  definition.platforms[1].rect.y = 370.3;
  definition.spawns.pac.y = 334.3;
  definition.platforms.push({
    id: "base",
    kind: "static",
    rect: { x: 500, y: 390.3, width: 180, height: 20 },
  });
  const state = create_game_state(definition);
  for (let i = 0; i < 700; i += 1) move_counterweights(state, 1 / 120);
  assert_pair(state, 170.3);
  state.crates[0].rect.x = 580;
  state.crates[0].rect.y = state.platforms[1].rect.y - 40;
  for (let i = 0; i < 700; i += 1) move_counterweights(state, 1 / 120);
  assert_pair(state, 0);
  assert.equal(state.counterweights[0].blocked, false);
  assert.equal(overlaps(state.platforms[1].rect, state.platforms[2].rect), false);
});

function assert_no_penetration(a, b) {
  // Independent edge-scale oracle: representable contact error is permitted,
  // but a positive intersection larger than eight edge ULPs is penetration.
  const depth = Math.min(a.y + a.height - b.y, b.y + b.height - a.y);
  const bound = 8 * Number.EPSILON * Math.max(Math.abs(a.y), a.height, Math.abs(b.y), b.height);
  assert.ok(!overlaps(a, b) || depth <= bound, `penetration ${depth} exceeds ${bound}`);
}

test("fractional carried contacts release when the load reverses", () => {
  for (const travel of [108.1, 108.6, 109.1, 109.6]) {
    for (const ceiling of [true, false]) {
      const definition = level();
      definition.counterweights[0] = {
        ...definition.counterweights[0],
        travel,
        speed: 37.7,
      };
      if (!ceiling) definition.spawns.isp.x = 265;
      const contact = ceiling ? definition.spawns.pac.y - travel : 200 + travel;
      definition.platforms.push({
        id: "contact",
        kind: "static",
        rect: ceiling
          ? { x: 510, y: contact - 20, width: 40, height: 20 }
          : { x: 285, y: contact, width: 20, height: 20 },
      });
      const state = create_game_state(definition);
      const rider = ceiling ? state.players.pac : state.players.isp;
      const obstacle = state.platforms[2].rect;
      for (let i = 0; i < 500; i += 1) {
        step_game(state, create_empty_input(), 1 / 120);
        assert_no_penetration(rider.rect, obstacle);
      }
      assert_pair(state, travel);
      state.crates[0].rect.x = 580;
      state.crates[0].rect.y = state.platforms[1].rect.y - 40;
      for (let i = 0; i < 120; i += 1) step_game(state, create_empty_input(), 1 / 120);
      assert.deepEqual(state.counterweights[0].loads, [1, 2]);
      assert.deepEqual(state.counterweights[0].riders, [true, true]);
      assert.equal(state.counterweights[0].blocked, false);
      assert.ok(state.counterweights[0].position < travel);
      assert_no_penetration(rider.rect, obstacle);
    }
  }
});

test("fractional stacked ceiling contact preserves support and reverses atomically", () => {
  const definition = level();
  definition.crates = [
    { id: "right", heavy: false, rect: { x: 520, y: 360, width: 40, height: 40 } },
    { id: "left", heavy: true, rect: { x: 200, y: 160, width: 40, height: 40 } },
    { id: "ballast", heavy: true, rect: { x: 240, y: 160, width: 40, height: 40 } },
  ];
  definition.spawns.pac.y = 324;
  definition.platforms.push({
    id: "ceiling",
    kind: "static",
    rect: { x: 510, y: 195.9, width: 60, height: 20 },
  });
  const state = create_game_state(definition);
  move_counterweights(state, 2);
  assert.equal(state.counterweights[0].position, 324 - (195.9 + 20));
  assert.equal(state.counterweights[0].blocked, true);
  assert_no_penetration(state.players.pac.rect, state.platforms[2].rect);
  state.crates[1].rect.x = 580;
  state.crates[1].rect.y = state.platforms[1].rect.y - 40;
  state.crates[2].rect.x = 630;
  state.crates[2].rect.y = state.platforms[1].rect.y - 40;
  const before = [state.players.pac, state.crates[0]].map((body) => body.rect.y);
  move_counterweights(state, 0.1);
  assert.equal(state.counterweights[0].blocked, false);
  assert.deepEqual(
    [state.players.pac, state.crates[0]].map((body, i) => body.rect.y - before[i]),
    [6, 6],
  );
  for (let i = 0; i < 500; i += 1) move_counterweights(state, 1 / 120);
  assert_pair(state, 0);
});

test("active villains add ordinary load, ride decks, and stop uncarried travel", () => {
  const carried = create_game_state(
    villain_level(
      { x: 692, y: 400 },
      { x: 700, y: 100 },
      {
        crates: [{ id: "load", heavy: true, rect: { x: 230, y: 160, width: 40, height: 40 } }],
        barriers: [
          { id: "isp_gate", blocks: "isp", rect: { x: 700, y: 300, width: 10, height: 44 } },
        ],
      },
    ),
  );
  const gem = carried.villainBodies.find((body) => body.villain === "gem");
  assert.ok(gem);
  move_counterweights(carried, 0.5);
  assert.deepEqual(carried.counterweights[0].loads, [3, 2]);
  assert.deepEqual(carried.counterweights[0].riders, [true, true]);
  assert.equal(gem.rect.y, 314);
  assert.equal(overlaps(gem.rect, carried.platforms[1].rect), false);

  const uncarried = create_game_state(
    villain_level(
      { x: 620, y: 350 },
      { x: 700, y: 100 },
      { crates: [{ id: "load", heavy: true, rect: { x: 230, y: 160, width: 40, height: 40 } }] },
    ),
  );
  const obstacle = uncarried.villainBodies.find((body) => body.villain === "gem");
  assert.ok(obstacle);
  move_counterweights(uncarried, 1.5);
  assert.equal(uncarried.counterweights[0].position, 50);
  assert.equal(uncarried.counterweights[0].blocked, true);
  assert.equal(overlaps(obstacle.rect, uncarried.platforms[1].rect), false);
});

test("absent villains add no load and villains cannot satisfy the hero clutch", () => {
  const definition = villain_level(
    { x: 220, y: 200 },
    { x: 620, y: 400 },
    { crates: [{ id: "load", heavy: true, rect: { x: 230, y: 160, width: 40, height: 40 } }] },
  );
  const state = create_game_state(definition);
  state.players.isp.rect.x = 800;
  state.players.pac.rect.x = 800;
  move_counterweights(state, 0.5);
  assert.deepEqual(state.counterweights[0].loads, [3, 1]);
  assert.deepEqual(state.counterweights[0].riders, [false, false]);
  assert_pair(state, 0);

  const gem = state.villainBodies.find((body) => body.villain === "gem");
  assert.ok(gem);
  gem.respawnRemaining = 2;
  move_counterweights(state, 0.5);
  assert.deepEqual(state.counterweights[0].loads, [2, 1]);
  assert.deepEqual(state.counterweights[0].riders, [false, false]);
  assert_pair(state, 0);
});

test("validation rejects malformed membership, geometry, endpoints, and effects", () => {
  assert.doesNotThrow(() => validate_counterweights(level()));
  const invalid = [
    (d) => d.counterweights.push({ ...d.counterweights[0] }),
    (d) => d.platforms.push({ ...d.platforms[0] }),
    (d) => (d.counterweights[0].platformIds[1] = "missing"),
    (d) => (d.counterweights[0].platformIds[1] = "a"),
    (d) => (d.platforms[0].kind = "static"),
    (d) => (d.counterweights = []),
    (d) => (d.counterweights[0].speed = NaN),
    (d) => (d.counterweights[0].travel = 0),
    (d) => (d.platforms[0].rect.width = -1),
    (d) => (d.platforms[0].rect.x = Infinity),
    (d) => (d.platforms[0].rect.y = 500),
    (d) => (d.platforms[1].rect.x = 150),
    ...["motor", "power", "stabilize"].map(
      (kind) => (d) => d.pads.push({ effects: [{ kind, platformId: "a" }] }),
    ),
  ];
  for (const mutate of invalid) {
    const definition = level();
    mutate(definition);
    assert.throws(() => validate_counterweights(definition));
  }
  const attached = level({ pads: [{ platformId: "a", effects: [] }] });
  assert.doesNotThrow(() => validate_counterweights(attached));
});
