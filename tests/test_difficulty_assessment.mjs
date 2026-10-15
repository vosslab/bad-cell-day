import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test, { after } from "node:test";
import {
  axis,
  checkedLock,
  packetFingerprint,
  renderCitation,
  validateCoverage,
  validateFirst,
  validateSecond,
  verifyObservationProvenance,
} from "../devel/assess_difficulty.ts";
import { fingerprints } from "../devel/difficulty/provenance.mjs";
import { generateReport } from "../devel/difficulty/report.ts";

const hash = (data) => createHash("sha256").update(data).digest("hex");
const root = mkdtempSync(join(tmpdir(), "difficulty-fixture-"));
after(() => rmSync(root, { recursive: true, force: true }));
const roster = [
  { id: "level_01", title: "Fixture room one" },
  { id: "level_02", title: "Fixture room two" },
];
const context = { root, roster };
const firstId = roster[0].id;
const nextId = roster[1].id;
const packet = `docs/difficulty_observations/${firstId}.json`;
const observationDir = join(root, "docs/difficulty_observations");
const dataDir = join(root, "devel/difficulty");
const built = { buildSha256: "a".repeat(64), buildMapSha256: "b".repeat(64) };
const png = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/lXcAAAAASUVORK5CYII=",
  "base64",
);
const save = (path, data) => {
  const absolute = join(root, path);
  mkdirSync(join(absolute, ".."), { recursive: true });
  writeFileSync(absolute, data);
  return absolute;
};
const json = (path, value) => save(path, JSON.stringify(value));
save("src/levels.ts", "export const FIXTURE = true;\n");
save("index.html", "<main>Fixture</main>\n");
save(".gitignore", "test-results/\n");
execFileSync("git", ["init", "-q", root]);
for (const { id, title } of roster) {
  for (let index = 1; index <= 3; index++)
    save(`docs/difficulty_observations/${id}_${index}.png`, png);
  json(`docs/difficulty_observations/${id}.json`, {
    levelId: id,
    position: roster.findIndex((room) => room.id === id) + 1,
    title,
    ...built,
    captures: [1, 2, 3].map((index) => ({
      path: `${id}_${index}.png`,
      visible_text: ["Fixture controls"],
      sha256: hash(png),
    })),
  });
}
const cited = {
  artifact: packet,
  sha256: hash(readFileSync(join(root, packet))),
  locator: "json:captures[0].visible_text",
  claim: "Both player controls are visible.",
};
const current = fingerprints(root, roster);
const receipt = {
  ...built,
  order: roster.map(({ id }) => id),
  captured: roster.map(({ id, title }, index) => ({
    levelId: id,
    position: index + 1,
    title,
    bytes: [png.length, png.length, png.length],
  })),
};
const receiptPath = json("docs/difficulty_observations/capture_receipt.json", receipt);
json("devel/difficulty/snapshot.json", {
  ...current,
  levels: roster.map(({ id, title }, index) => ({
    level_id: id,
    campaign_position: index + 1,
    title,
  })),
});
const binding = {
  schema_version: 1,
  method: "retrospective",
  bound_at: "2026-10-15T00:00:00Z",
  ...current,
  ...built,
  receipt_sha256: hash(readFileSync(receiptPath)),
  packets: roster.map(({ id, title }, index) => ({
    levelId: id,
    position: index + 1,
    title,
    sha256: hash(readFileSync(join(observationDir, `${id}.json`))),
  })),
};
const bindingPath = json("docs/difficulty_observations/source_binding.json", binding);
const provenanceContext = { ...context, dataDirectory: dataDir, fingerprints: current, built };
const dimensions = [
  "reasoning",
  "cooperation",
  "execution",
  "timing",
  "hazards",
  "novelty",
  "recovery_cost",
  "solution_clarity",
];
function first() {
  return {
    schema_version: 1,
    input_mode: "two_humans_shared_keyboard",
    level_id: firstId,
    campaign_position: 1,
    author: "Fixture author",
    created_at: "2026-10-15T00:00:00Z",
    packet_artifacts: [cited],
    prior_knowledge: [],
    mandatory_goal: "both_exits",
    steps: [
      {
        actor: "both",
        goal: "Find exits",
        action: "Inspect the room",
        expected_feedback: "Exit labels",
        observed_feedback: "Exit labels",
        issue: "none",
        evidence: [cited],
      },
    ],
    wrong_turns: [],
    unknowns: ["No movement was observed."],
    ratings: Object.fromEntries(
      dimensions.map((name) => [
        name,
        {
          score: null,
          rationale: "Idle packet cannot establish this demand.",
          evidence: [],
        },
      ]),
    ),
    control_friction: { score: null, rationale: "Controls were not tried.", evidence: [] },
    confidence: "low",
    confidence_reason: "Idle packet only.",
  };
}

test("weighted axes use rubric weights and propagate unknown scores", () => {
  const ratings = first().ratings;
  ratings.reasoning.score = 4;
  ratings.cooperation.score = 2;
  ratings.novelty.score = 1;
  assert.equal(axis(ratings, ["reasoning", "cooperation", "novelty"]), 64);
  ratings.novelty.score = null;
  assert.equal(axis(ratings, ["reasoning", "cooperation", "novelty"]), null);
});

test("first-pass validation rejects invalid scores, future references, and altered evidence", () => {
  assert.equal(validateFirst(first(), 1, context).level_id, firstId);
  const badScore = first();
  badScore.ratings.reasoning.score = 2.5;
  assert.throws(() => validateFirst(badScore, 1, context), /score/);
  const future = first();
  const futurePath = `docs/difficulty_observations/${nextId}.json`;
  future.packet_artifacts[0] = {
    ...cited,
    artifact: futurePath,
    sha256: hash(readFileSync(join(root, futurePath))),
  };
  assert.throws(() => validateFirst(future, 1, context), /future-room/);
  const wrongPosition = first();
  wrongPosition.campaign_position = 2;
  assert.throws(() => validateFirst(wrongPosition, 1, context), /position mismatch/);
  const stale = first();
  stale.packet_artifacts[0] = { ...cited, sha256: "0".repeat(64) };
  assert.throws(() => validateFirst(stale, 1, context), /SHA-256 mismatch/);
});

test("coverage rejects missing and unexpected record names", () => {
  const expected = new Set([`${firstId}.json`, `${nextId}.json`]);
  validateCoverage([`${firstId}.json`, `${nextId}.json`], expected, "fixture");
  assert.throws(
    () => validateCoverage([`${firstId}.json`, "extra.json"], expected, "fixture"),
    /missing.*extra/,
  );
  assert.throws(
    () => validateCoverage([`${firstId}.json`, `${firstId}.json`], expected, "fixture"),
    /duplicate/,
  );
});

test("locked first pass rejects a changed record", () => {
  const dir = mkdtempSync(join(tmpdir(), "difficulty-lock-"));
  const path = join(dir, "first.json");
  const valid = validateFirst(first(), 1, context);
  writeFileSync(path, JSON.stringify(valid));
  const lock = {
    schema_version: 1,
    level_id: firstId,
    packet_fingerprint: packetFingerprint(valid),
    first_pass_sha256: hash(readFileSync(path)),
    locked_at: "2026-10-15T00:00:00Z",
  };
  checkedLock(lock, firstId, valid, path);
  writeFileSync(path, JSON.stringify({ ...valid, author: "Changed after lock" }));
  assert.throws(() => checkedLock(lock, firstId, valid, path), /lock mismatch/);
});

function second(firstRecord) {
  const sourcePath = "src/levels.ts";
  const source = {
    artifact: sourcePath,
    sha256: hash(readFileSync(join(root, sourcePath))),
    locator: "text:FIXTURE",
    claim: "Campaign roster is defined here.",
  };
  return {
    schema_version: 1,
    input_mode: "two_humans_shared_keyboard",
    level_id: firstRecord.level_id,
    campaign_position: firstRecord.campaign_position,
    author: "Fixture author",
    created_at: "2026-10-15T00:00:00Z",
    campaign_sha256: "1".repeat(64),
    source_fingerprint: "2".repeat(64),
    source_artifacts: [source],
    prior_knowledge: [],
    mechanics: [{ fact: "A room is present.", evidence: [source] }],
    legal_routes: [
      { name: "Both exits", mandatory: true, steps: firstRecord.steps, evidence: [source] },
    ],
    hero_contributions: { isp: ["Find exit"], pac: ["Find exit"] },
    common_mistakes: [
      { mistake: "Wrong route", consequence: "Delay", recovery: "Try again", evidence: [source] },
    ],
    optional_collectibles: [],
    ratings: firstRecord.ratings,
    control_friction: firstRecord.control_friction,
    confidence: "low",
    confidence_reason: "Fixture evidence only.",
    comparison: {
      first_pass_sha256: "3".repeat(64),
      confirmed: ["Room exists"],
      missed_mechanics: [],
      incorrect_inferences: [],
      changed_judgments: [],
      unresolved: [],
    },
    single_operator_note: "Unverified.",
  };
}

test("second-pass validation rejects stale campaign and source fingerprints", () => {
  const record = second(first());
  const hashes = {
    campaign_sha256: record.campaign_sha256,
    source_fingerprint: record.source_fingerprint,
  };
  validateSecond(record, 1, record.comparison.first_pass_sha256, hashes, context);
  assert.throws(
    () =>
      validateSecond(
        { ...record, source_fingerprint: "0".repeat(64) },
        1,
        record.comparison.first_pass_sha256,
        hashes,
        context,
      ),
    /fingerprint is stale/,
  );
  assert.throws(
    () =>
      validateSecond(
        { ...record, campaign_sha256: "0".repeat(64) },
        1,
        record.comparison.first_pass_sha256,
        hashes,
        context,
      ),
    /fingerprint is stale/,
  );
});

test("locators resolve actual packet fields and source text", () => {
  const missing = first();
  missing.packet_artifacts[0] = { ...cited, locator: "json:captures[99].visible_text" };
  assert.throws(() => validateFirst(missing, 1, context), /does not resolve/);
  const imagePath = `docs/difficulty_observations/${firstId}_1.png`;
  const image = first();
  image.packet_artifacts.push({
    artifact: imagePath,
    sha256: hash(readFileSync(join(root, imagePath))),
    locator: "image:whole",
    claim: "The idle frame is retained for manual visual review.",
  });
  validateFirst(image, 1, context);
  image.packet_artifacts[1].locator = "image:99999,0,2,2";
  assert.throws(() => validateFirst(image, 1, context), /outside PNG bounds/);
  const outsideDir = mkdtempSync(join(tmpdir(), "difficulty-outside-"));
  const linkedPath = join(root, imagePath);
  const original = readFileSync(linkedPath);
  try {
    const outsidePath = join(outsideDir, "image.png");
    writeFileSync(outsidePath, original);
    rmSync(linkedPath);
    symlinkSync(outsidePath, linkedPath);
    image.packet_artifacts[1].locator = "image:whole";
    assert.throws(() => validateFirst(image, 1, context), /outside repository/);
  } finally {
    rmSync(linkedPath, { force: true });
    writeFileSync(linkedPath, original);
    rmSync(outsideDir, { recursive: true, force: true });
  }
});

test("provenance rejects stale source binding and altered packet identity", () => {
  verifyObservationProvenance(observationDir, provenanceContext);
  const staleBinding = { ...binding, source_fingerprint: "0".repeat(64) };
  writeFileSync(bindingPath, JSON.stringify(staleBinding));
  assert.throws(
    () => verifyObservationProvenance(observationDir, provenanceContext),
    /source binding source_fingerprint is stale/,
  );
  writeFileSync(bindingPath, JSON.stringify(binding));
  const packetPath = join(observationDir, `${firstId}.json`);
  const original = readFileSync(packetPath);
  const wrong = { ...JSON.parse(original), title: "Wrong title" };
  writeFileSync(packetPath, JSON.stringify(wrong));
  const rebound = {
    ...binding,
    packets: [
      { ...binding.packets[0], sha256: hash(readFileSync(packetPath)) },
      binding.packets[1],
    ],
  };
  writeFileSync(bindingPath, JSON.stringify(rebound));
  assert.throws(
    () => verifyObservationProvenance(observationDir, provenanceContext),
    /identity or order mismatch/,
  );
  writeFileSync(packetPath, original);
  writeFileSync(bindingPath, JSON.stringify(binding));
});

test("fixture validation stays independent of live game source changes", () => {
  const source = join(root, "src/levels.ts");
  const original = readFileSync(source);
  writeFileSync(source, "export const FIXTURE = 'changed';\n");
  assert.notEqual(fingerprints(root, roster).source_fingerprint, current.source_fingerprint);
  assert.equal(validateFirst(first(), 1, context).level_id, firstId);
  writeFileSync(source, original);
});

test("citations link browsable files and render ignored local artifacts as code", () => {
  const linked = renderCitation(cited, "docs/difficulty_levels", root);
  assert.match(linked, /\]\(\.\.\/difficulty_observations\//);
  assert.match(renderCitation(cited, "docs", root), /\]\(difficulty_observations\//);
  const ignoredPath = "test-results/difficulty_assessment/rejected_raw_canvas/README.md";
  save(ignoredPath, "raw fixture\n");
  const ignored = renderCitation(
    {
      artifact: ignoredPath,
      sha256: hash(readFileSync(join(root, ignoredPath))),
      locator: "text:raw",
      claim: "Archive provenance",
    },
    "docs/difficulty_levels",
    root,
  );
  assert.match(ignored, /^`test-results\//);
  assert.doesNotMatch(ignored, /\]\(/);
});

test("two-room report renders all artifacts with one-argument citation calls", () => {
  const firstRoom = first();
  const secondPacket = `docs/difficulty_observations/${nextId}.json`;
  const secondRoom = {
    ...first(),
    level_id: nextId,
    campaign_position: 2,
    packet_artifacts: [
      {
        ...cited,
        artifact: secondPacket,
        sha256: hash(readFileSync(join(root, secondPacket))),
      },
    ],
  };
  secondRoom.steps[0].evidence = secondRoom.packet_artifacts;
  const hashes = { campaign_sha256: "1".repeat(64), source_fingerprint: "2".repeat(64) };
  function citation(e, from = "docs/difficulty_levels", fixtureRoot = root) {
    assert.equal(arguments.length, 1);
    return renderCitation(e, from, fixtureRoot);
  }

  generateReport(
    root,
    dataDir,
    roster,
    [firstRoom, secondRoom].map((firstRecord) => ({
      first: firstRecord,
      second: second(firstRecord),
    })),
    hashes,
    citation,
  );

  const summary = readFileSync(join(root, "docs/LEVEL_DIFFICULTY_REPORT.md"), "utf8");
  const campaignMap = JSON.parse(readFileSync(join(dataDir, "campaign_map.json"), "utf8"));
  const roomOne = readFileSync(join(root, "docs/difficulty_levels/LEVEL_01.md"), "utf8");
  const roomTwo = readFileSync(join(root, "docs/difficulty_levels/LEVEL_02.md"), "utf8");
  const svg = readFileSync(join(root, "docs/difficulty_campaign.svg"), "utf8");
  assert.deepEqual(
    campaignMap.rooms.map(({ level_id }) => level_id),
    roster.map(({ id }) => id),
  );
  assert.equal(campaignMap.rooms[0].second.puzzle, null);
  assert.match(summary, /Fixture room one[\s\S]*Fixture room two/);
  assert.match(summary, /\| unknown \| unknown \|/);
  assert.match(roomOne, /First packet: \[docs\/difficulty_observations\/level_01\.json\]/);
  assert.match(roomTwo, /First packet: \[docs\/difficulty_observations\/level_02\.json\]/);
  assert.match(svg, /Campaign puzzle and platforming profile/);
  assert.match(svg, /01 level_01[\s\S]*02 level_02/);
  assert.match(svg, /unknown \/ unknown/);
});
