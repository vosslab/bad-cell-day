import assert from "node:assert/strict";
import test from "node:test";

import {
  create_progress,
  is_level_unlocked,
  load_progress,
  record_completion,
  save_progress,
  STORAGE_KEY,
} from "../src/save_load.ts";

const levels = [
  { id: "one", collectibles: [{ id: "a" }, { id: "b" }] },
  { id: "two", collectibles: [{ id: "c" }] },
];

function memoryStorage(initial = null) {
  let value = initial;
  return {
    getItem(key) {
      assert.equal(key, STORAGE_KEY);
      return value;
    },
    setItem(key, next) {
      assert.equal(key, STORAGE_KEY);
      value = next;
    },
    get value() {
      return value;
    },
  };
}

test("progress round-trips with known levels, deduplication, and bounded collectibles", () => {
  const storage = memoryStorage();
  const progress = {
    ...create_progress(),
    completed: [{ levelId: "one", bestTime: 12, bestCollectibles: 2 }],
    soundEnabled: false,
    reducedMotion: true,
  };
  assert.equal(save_progress(storage, progress), true);
  assert.deepEqual(load_progress(storage, levels), progress);

  storage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      version: 1,
      completed: [
        { levelId: "one", bestTime: 12, bestCollectibles: 1 },
        { levelId: "one", bestTime: 10, bestCollectibles: 99 },
        { levelId: "removed-level", bestTime: 1, bestCollectibles: 0 },
      ],
      soundEnabled: false,
      reducedMotion: true,
    }),
  );
  assert.deepEqual(load_progress(storage, levels).completed, [
    { levelId: "one", bestTime: 10, bestCollectibles: 2 },
  ]);
});

test("invalid, oversized, and unavailable storage produce defaults", () => {
  const expected = create_progress();
  assert.deepEqual(load_progress(undefined, levels), expected);
  assert.deepEqual(load_progress(memoryStorage("{"), levels), expected);
  assert.deepEqual(load_progress(memoryStorage("x".repeat(32_769)), levels), expected);
  assert.deepEqual(
    load_progress(
      {
        getItem() {
          throw new Error("blocked");
        },
      },
      levels,
    ),
    expected,
  );
  assert.equal(save_progress(undefined, expected), false);
  assert.equal(
    save_progress(
      {
        setItem() {
          throw new Error("quota");
        },
      },
      expected,
    ),
    false,
  );
});

test("completion tracks best time and maximum collectibles without mutating input", () => {
  const progress = {
    ...create_progress(),
    completed: [{ levelId: "one", bestTime: 20, bestCollectibles: 1 }],
  };
  const state = {
    status: "complete",
    time: 15,
    level: levels[0],
    collectibles: [{ collected: true }, { collected: true }],
  };
  const next = record_completion(progress, state);
  assert.deepEqual(next.completed, [{ levelId: "one", bestTime: 15, bestCollectibles: 2 }]);
  assert.deepEqual(progress.completed, [{ levelId: "one", bestTime: 20, bestCollectibles: 1 }]);
  assert.equal(is_level_unlocked(0, levels, create_progress()), true);
  assert.equal(is_level_unlocked(1, levels, next), true);
  assert.equal(is_level_unlocked(1, levels, create_progress()), false);
});
