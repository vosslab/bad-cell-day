import assert from "node:assert/strict";
import test from "node:test";
import { create_empty_input } from "../src/characters.ts";
import { create_game_state, DEMO_LEVEL } from "../src/game_state.ts";
import {
  create_hero_feedback,
  snapshot_hero_feedback,
  update_hero_feedback,
} from "../src/hero_feedback.ts";
import { TRIAL_LEVEL } from "../src/interference_trial.ts";
import { step_game } from "../src/physics.ts";

function scene(activation = "hold", accepts = "isp", minWeight = 1) {
  return create_game_state({
    ...DEMO_LEVEL,
    interference: TRIAL_LEVEL.interference,
    pads: [
      {
        id: "control",
        rect: { x: 40, y: 540, width: 50, height: 10 },
        accepts,
        activation,
        minWeight,
        effects: [],
        label: "CONTROL",
      },
    ],
  });
}

function occupy(state, occupants = ["isp"], weight = occupants.length) {
  Object.assign(state.pads[0], { active: true, occupiedBy: occupants, weight });
}

function observe(state, history = create_hero_feedback(state), dt = 0) {
  return update_hero_feedback(history, state, dt);
}

test("held responses require a live owned control and its real solo operator", () => {
  for (const id of ["isp", "pac"]) {
    const state = scene("hold", id);
    occupy(state, [id]);
    const feedback = snapshot_hero_feedback(observe(state));
    assert.equal(feedback[id].holding, true);
    assert.equal(feedback[id === "isp" ? "pac" : "isp"].holding, false);
    for (const changes of [
      { active: false },
      { occupiedBy: [] },
      { occupiedBy: [id === "isp" ? "pac" : "isp"] },
      { weight: 0 },
    ]) {
      occupy(state, [id]);
      Object.assign(state.pads[0], changes);
      assert.equal(snapshot_hero_feedback(observe(state))[id].holding, false);
    }
  }
  for (const [accepts, minWeight, occupants, weight] of [
    ["any", 1, ["isp"], 1],
    ["any", 1, [], 2],
    ["any", 2, ["isp", "pac"], 2],
    ["isp", 2, ["isp"], 2],
  ]) {
    const state = scene("hold", accepts, minWeight);
    occupy(state, occupants, weight);
    const heroes = snapshot_hero_feedback(observe(state));
    assert.equal(heroes.isp.holding, false);
    assert.equal(heroes.pac.holding, false);
  }
});

test("a latch acknowledges its operator once without replay on release and re-entry", () => {
  const state = scene("latch", "pac");
  let history = create_hero_feedback(state);
  occupy(state, ["pac"]);
  state.pads[0].latched = true;
  history = observe(state, history);
  const first = snapshot_hero_feedback(history);
  assert.ok(first.pac.acknowledgeRemaining > 0);
  assert.equal(first.pac.holding, false);
  assert.equal(first.isp.acknowledgeRemaining, 0);
  const age = first.pac.acknowledgeRemaining / 3;
  history = observe(state, history, age);
  assert.ok(
    snapshot_hero_feedback(history).pac.acknowledgeRemaining < first.pac.acknowledgeRemaining,
  );
  occupy(state, [], 0);
  history = observe(state, history, first.pac.acknowledgeRemaining * 2);
  occupy(state, ["pac"]);
  history = observe(state, history);
  assert.equal(snapshot_hero_feedback(history).pac.acknowledgeRemaining, 0);
  assert.ok(first.pac.acknowledgeRemaining > 0, "previous snapshots stay detached from updates");
});

test("abandoned, crate, joint, and interrupted latches cannot award delayed solo credit", () => {
  for (const [accepts, minWeight, occupants, weight] of [
    ["isp", 1, [], 0],
    ["isp", 1, ["pac"], 1],
    ["isp", 1, ["isp"], 0],
    ["any", 1, [], 2],
    ["any", 2, ["isp", "pac"], 2],
    ["isp", 2, ["isp"], 2],
  ]) {
    const state = scene("latch", accepts, minWeight);
    let history = create_hero_feedback(state);
    occupy(state, occupants, weight);
    state.pads[0].latched = true;
    history = observe(state, history);
    assert.equal(snapshot_hero_feedback(history).isp.acknowledgeRemaining, 0);
    assert.equal(snapshot_hero_feedback(history).pac.acknowledgeRemaining, 0);
    occupy(state);
    history = observe(state, history);
    assert.equal(snapshot_hero_feedback(history).isp.acknowledgeRemaining, 0);
  }
  for (const interruption of ["sticky", "dead", "complete"]) {
    const state = scene("latch");
    let history = create_hero_feedback(state);
    occupy(state);
    state.pads[0].latched = true;
    if (interruption === "sticky") {
      state.interference.players.isp.effect = { kind: "sticky", remaining: 1 };
    } else state.status = interruption;
    history = observe(state, history);
    assert.equal(snapshot_hero_feedback(history).isp.acknowledgeRemaining, 0);
    state.status = "playing";
    state.interference.players.isp.effect = { kind: "none" };
    history = observe(state, history);
    assert.equal(snapshot_hero_feedback(history).isp.acknowledgeRemaining, 0);
  }
});

test("reset clears responses, paused snapshots freeze, and interference interrupts existing feedback", () => {
  const state = scene("latch");
  let history = create_hero_feedback(state);
  occupy(state);
  state.pads[0].latched = true;
  history = observe(state, history);
  const paused = snapshot_hero_feedback(history);
  assert.equal(snapshot_hero_feedback(history), paused);
  assert.equal(
    snapshot_hero_feedback(observe(state, history)).isp.acknowledgeRemaining,
    paused.isp.acknowledgeRemaining,
  );
  const reset = create_hero_feedback(state);
  assert.equal(snapshot_hero_feedback(reset).isp.acknowledgeRemaining, 0);
  state.interference.players.isp.effect = { kind: "dizzy", remaining: 1 };
  history = observe(state, history);
  assert.equal(snapshot_hero_feedback(history).isp.acknowledgeRemaining, 0);
  const fresh = scene("latch");
  history = create_hero_feedback(fresh);
  occupy(fresh);
  fresh.pads[0].latched = true;
  assert.ok(snapshot_hero_feedback(observe(fresh, history)).isp.acknowledgeRemaining > 0);
  const held = scene();
  occupy(held);
  history = create_hero_feedback(held);
  assert.equal(snapshot_hero_feedback(history).isp.holding, true);
  held.interference.players.isp.effect = { kind: "float", remaining: 1 };
  assert.equal(snapshot_hero_feedback(observe(held, history)).isp.holding, false);
});

test("observing fixed steps leaves simulation and input identical to unobserved play", () => {
  const observed = scene("latch");
  const control = structuredClone(observed);
  const input = create_empty_input();
  input.isp.left = true;
  const originalInput = structuredClone(input);
  let history = create_hero_feedback(observed);
  for (let tick = 0; tick < 120; tick += 1) {
    step_game(observed, input, 1 / 120);
    history = observe(observed, history, 1 / 120);
    snapshot_hero_feedback(history);
    step_game(control, input, 1 / 120);
    assert.deepEqual(observed, control);
    assert.deepEqual(input, originalInput);
  }
});
