import { execFileSync, spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  realpathSync,
  writeFileSync,
} from "node:fs";
import { join, relative, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";
import { LEVELS } from "../src/levels";
import {
  assertBuiltSourcesCurrent,
  fingerprints,
  sha256 as sha,
} from "./difficulty/provenance.mjs";
import { checkLocator } from "./difficulty/locators";
import { DIMENSIONS, evidenceGaps, generateReport, md } from "./difficulty/report";
export { axis } from "./difficulty/report";
import type { Evidence, FirstPass, FirstPassLock, Rating, SecondPass } from "./difficulty/types";

/* eslint-disable no-console -- This developer CLI reports status and generated artifact paths. */

const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], { encoding: "utf8" }).trim();
const DATA = join(ROOT, "devel/difficulty");
const read = (path: string): unknown => JSON.parse(readFileSync(path, "utf8"));
const write = (path: string, value: unknown): void => {
  mkdirSync(resolve(path, ".."), { recursive: true });
  writeFileSync(path, JSON.stringify(value, null, 2) + "\n");
};
const currentFingerprints = (): ReturnType<typeof fingerprints> =>
  fingerprints(
    ROOT,
    LEVELS.map(({ id, title }) => ({ id, title })),
  );
function snapshot(): void {
  const out = {
    schema_version: 1,
    ...currentFingerprints(),
    levels: LEVELS.map((level, i) => ({
      level_id: level.id,
      campaign_position: i + 1,
      title: level.title,
      stage: level.stage,
      facts: {
        platforms: level.platforms.length,
        pads: level.pads.length,
        barriers: level.barriers.length,
        hazards: level.hazards.length,
        crates: level.crates.length,
        collectibles: level.collectibles.length,
        exits: level.exits.length,
        interference: level.interference?.length ?? 0,
        counterweights: level.counterweights?.length ?? 0,
      },
    })),
  };
  write(join(DATA, "snapshot.json"), out);
  console.log(`Wrote devel/difficulty/snapshot.json for ${LEVELS.length} campaign rooms.`);
}

type RosterEntry = { id: string; title: string };
type ValidationContext = { root: string; roster: readonly RosterEntry[] };
const liveContext: ValidationContext = { root: ROOT, roster: LEVELS };
const roomPosition = new Map(LEVELS.map((level, index) => [level.id, index + 1]));
const positions = (context: ValidationContext): Map<string, number> =>
  context === liveContext
    ? roomPosition
    : new Map(context.roster.map((level, index) => [level.id, index + 1]));
type Pass = "first" | "second";
type Obj = Record<string, unknown>;
const object = (value: unknown, label: string): Obj => {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error(`${label}: expected object`);
  }
  return value as Obj;
};
const fields = (value: Obj, names: readonly string[], label: string): void => {
  const missing = names.filter((name) => !(name in value));
  const extra = Object.keys(value).filter((name) => !names.includes(name));
  if (missing.length || extra.length) {
    throw new Error(`${label}: missing [${missing.join(", ")}], extra [${extra.join(", ")}]`);
  }
};
const string = (value: unknown, label: string): string => {
  if (typeof value !== "string" || !value.trim())
    throw new Error(`${label}: expected nonempty string`);
  return value;
};
const optionalString = (value: unknown, label: string): void => {
  if (value !== null) string(value, label);
};
const choice = (value: unknown, choices: readonly string[], label: string): void => {
  if (typeof value !== "string" || !choices.includes(value))
    throw new Error(`${label}: invalid value`);
};
const array = (value: unknown, label: string, min = 0): unknown[] => {
  if (!Array.isArray(value) || value.length < min)
    throw new Error(`${label}: expected array of at least ${min}`);
  return value;
};
const strings = (value: unknown, label: string, min = 0): void => {
  array(value, label, min).forEach((item, index) => string(item, `${label}[${index}]`));
};
const digest = (value: unknown, label: string): string => {
  if (typeof value !== "string" || !/^[a-f0-9]{64}$/.test(value))
    throw new Error(`${label}: invalid SHA-256`);
  return value;
};
function artifactPath(artifact: string, root = ROOT): string {
  // ASVS 5.3.2: evidence paths use safe repo-relative names and resolved containment.
  if (
    !/^[a-zA-Z0-9_./-]+$/.test(artifact) ||
    artifact.startsWith("/") ||
    artifact.split("/").includes("..")
  ) {
    throw new Error(`evidence path outside repository: ${artifact}`);
  }
  const path = resolve(root, artifact);
  if (!existsSync(path) || !realpathSync(path).startsWith(realpathSync(root) + sep)) {
    throw new Error(`evidence artifact missing or outside repository: ${artifact}`);
  }
  return path;
}
type ProvenanceContext = ValidationContext & {
  dataDirectory: string;
  fingerprints: ReturnType<typeof fingerprints>;
  built: ReturnType<typeof assertBuiltSourcesCurrent>;
};
export function verifyObservationProvenance(
  directory = join(ROOT, "docs/difficulty_observations"),
  context?: ProvenanceContext,
): void {
  const roster = context ? context.roster : LEVELS;
  const expected = context ? context.fingerprints : currentFingerprints();
  const snapshot = object(
    read(join(context ? context.dataDirectory : DATA, "snapshot.json")),
    "snapshot",
  );
  const binding = object(read(join(directory, "source_binding.json")), "source binding");
  const receiptPath = join(directory, "capture_receipt.json");
  const receipt = object(read(receiptPath), "capture receipt");
  const built = context ? context.built : assertBuiltSourcesCurrent(ROOT);
  for (const [name, value] of Object.entries({ ...expected, ...built })) {
    if (snapshot[name] !== undefined && snapshot[name] !== value)
      throw new Error(`snapshot ${name} is stale`);
    if (binding[name] !== value) throw new Error(`source binding ${name} is stale`);
    if (name in built && receipt[name] !== value)
      throw new Error(`capture receipt ${name} differs from current build`);
  }
  if (
    snapshot.campaign_sha256 !== expected.campaign_sha256 ||
    snapshot.source_fingerprint !== expected.source_fingerprint
  )
    throw new Error("snapshot campaign or source fingerprint is stale");
  if (
    binding.schema_version !== 1 ||
    !["capture_time", "retrospective"].includes(String(binding.method)) ||
    !Number.isFinite(Date.parse(string(binding.bound_at, "source binding.bound_at")))
  )
    throw new Error("source binding metadata invalid");
  if (binding.receipt_sha256 !== sha(readFileSync(receiptPath)))
    throw new Error("source binding capture receipt hash mismatch");
  const levels = array(snapshot.levels, "snapshot.levels");
  const order = array(receipt.order, "capture receipt.order");
  const captured = array(receipt.captured, "capture receipt.captured");
  const packets = array(binding.packets, "source binding.packets");
  if ([levels, order, captured, packets].some((items) => items.length !== roster.length))
    throw new Error("observation roster length mismatch");
  for (const [index, level] of roster.entries()) {
    const id = level.id;
    const position = index + 1;
    const snap = object(levels[index], `snapshot room ${position}`);
    const row = object(captured[index], `receipt room ${position}`);
    const bound = object(packets[index], `bound packet ${position}`);
    const packetPath = join(directory, `${id}.json`);
    const packet = object(read(packetPath), `packet ${id}`);
    for (const item of [snap, row, bound, packet]) {
      const roomId = item.level_id ?? item.levelId;
      const roomPosition = item.campaign_position ?? item.position;
      if (roomId !== id || roomPosition !== position || item.title !== level.title)
        throw new Error(`${id}: observation room identity or order mismatch`);
    }
    if (order[index] !== id) throw new Error(`${id}: capture receipt order mismatch`);
    if (bound.sha256 !== sha(readFileSync(packetPath)))
      throw new Error(`${id}: bound packet SHA-256 mismatch`);
    if (packet.buildSha256 !== built.buildSha256 || packet.buildMapSha256 !== built.buildMapSha256)
      throw new Error(`${id}: packet build identity mismatch`);
    const captures = array(packet.captures, `${id}.captures`);
    const sizes = array(row.bytes, `${id}.receipt bytes`);
    if (captures.length !== 3 || sizes.length !== 3)
      throw new Error(`${id}: expected three captures`);
    for (const [captureIndex, item] of captures.entries()) {
      const capture = object(item, `${id}.captures[${captureIndex}]`);
      const imageName = `${id}_${captureIndex + 1}.png`;
      if (capture.path !== imageName) throw new Error(`${id}: capture path mismatch`);
      const image = readFileSync(join(directory, imageName));
      if (capture.sha256 !== sha(image) || sizes[captureIndex] !== image.length)
        throw new Error(`${id}: capture image hash or receipt size mismatch`);
    }
  }
}
function evidence(
  value: unknown,
  label: string,
  pass: Pass,
  position: number,
  context: ValidationContext,
): Evidence {
  const e = object(value, label);
  fields(e, ["artifact", "sha256", "locator", "claim"], label);
  const artifact = string(e.artifact, `${label}.artifact`);
  const path = artifactPath(artifact, context.root);
  const expected = digest(e.sha256, `${label}.sha256`);
  if (sha(readFileSync(path)) !== expected)
    throw new Error(`${label}: artifact SHA-256 mismatch: ${artifact}`);
  checkLocator(path, string(e.locator, `${label}.locator`), `${label}.locator`);
  string(e.claim, `${label}.claim`);
  if (pass === "first") {
    const match = /^docs\/difficulty_observations\/level_(\d\d)(?:_[123])?\.(?:json|png)$/.exec(
      artifact,
    );
    if (!match)
      throw new Error(`${label}: pass-one evidence must be an observation packet or image`);
    const id = `level_${match[1]}`;
    if ((positions(context).get(id) ?? Infinity) > position)
      throw new Error(`${label}: future-room packet is forbidden`);
  }
  return e as unknown as Evidence;
}
function evidences(
  value: unknown,
  label: string,
  pass: Pass,
  position: number,
  min: number,
  context: ValidationContext,
): Evidence[] {
  return array(value, label, min).map((item, index) =>
    evidence(item, `${label}[${index}]`, pass, position, context),
  );
}
function rating(
  value: unknown,
  label: string,
  pass: Pass,
  position: number,
  context: ValidationContext,
): Rating {
  const r = object(value, label);
  fields(r, ["score", "rationale", "evidence"], label);
  if (
    r.score !== null &&
    (!Number.isInteger(r.score) || (r.score as number) < 0 || (r.score as number) > 4)
  ) {
    throw new Error(`${label}.score: expected integer 0..4 or null`);
  }
  string(r.rationale, `${label}.rationale`);
  evidences(r.evidence, `${label}.evidence`, pass, position, r.score === null ? 0 : 1, context);
  return r as unknown as Rating;
}
function ratings(
  value: unknown,
  label: string,
  pass: Pass,
  position: number,
  context: ValidationContext,
): void {
  const r = object(value, label);
  fields(r, DIMENSIONS, label);
  DIMENSIONS.forEach((name) => rating(r[name], `${label}.${name}`, pass, position, context));
}
function prior(
  value: unknown,
  label: string,
  pass: Pass,
  position: number,
  context: ValidationContext,
): void {
  const p = object(value, label);
  fields(p, ["concept", "status", "earlier_room_id", "evidence"], label);
  string(p.concept, `${label}.concept`);
  choice(p.status, ["previously_introduced", "previously_practiced", "new"], `${label}.status`);
  if (p.status === "new") {
    if (p.earlier_room_id !== null)
      throw new Error(`${label}: new concept must have null earlier_room_id`);
  } else {
    const id = string(p.earlier_room_id, `${label}.earlier_room_id`);
    if ((positions(context).get(id) ?? Infinity) >= position)
      throw new Error(`${label}: earlier room must precede this room`);
  }
  evidences(p.evidence, `${label}.evidence`, pass, position, p.status === "new" ? 0 : 1, context);
}
function step(
  value: unknown,
  label: string,
  pass: Pass,
  position: number,
  context: ValidationContext,
): void {
  const s = object(value, label);
  fields(
    s,
    ["actor", "goal", "action", "expected_feedback", "observed_feedback", "issue", "evidence"],
    label,
  );
  choice(s.actor, ["isp", "pac", "both"], `${label}.actor`);
  ["goal", "action", "expected_feedback"].forEach((key) => string(s[key], `${label}.${key}`));
  optionalString(s.observed_feedback, `${label}.observed_feedback`);
  choice(s.issue, ["none", "misread", "mistake", "blocked", "unknown"], `${label}.issue`);
  evidences(s.evidence, `${label}.evidence`, pass, position, 0, context);
}
function common(
  value: Obj,
  pass: Pass,
  position: number,
  label: string,
  context: ValidationContext,
): void {
  if (value.schema_version !== 1 || value.input_mode !== "two_humans_shared_keyboard") {
    throw new Error(`${label}: unsupported schema_version or input_mode`);
  }
  const id = string(value.level_id, `${label}.level_id`);
  if (positions(context).get(id) !== position || value.campaign_position !== position) {
    throw new Error(`${label}: level ID and campaign position mismatch`);
  }
  string(value.author, `${label}.author`);
  const date = string(value.created_at, `${label}.created_at`);
  if (!Number.isFinite(Date.parse(date))) throw new Error(`${label}: invalid created_at`);
  ratings(value.ratings, `${label}.ratings`, pass, position, context);
  rating(value.control_friction, `${label}.control_friction`, pass, position, context);
  choice(value.confidence, ["low", "medium", "high"], `${label}.confidence`);
  string(value.confidence_reason, `${label}.confidence_reason`);
  array(value.prior_knowledge, `${label}.prior_knowledge`).forEach((item, i) =>
    prior(item, `${label}.prior_knowledge[${i}]`, pass, position, context),
  );
}
export function validateFirst(
  value: unknown,
  position: number,
  context: ValidationContext = liveContext,
): FirstPass {
  // ASVS 1.5.2, 2.2.1: accept only the exact documented JSON shape and bounded scores.
  const f = object(value, "first_pass");
  fields(
    f,
    [
      "schema_version",
      "input_mode",
      "level_id",
      "campaign_position",
      "author",
      "created_at",
      "packet_artifacts",
      "prior_knowledge",
      "mandatory_goal",
      "steps",
      "wrong_turns",
      "unknowns",
      "ratings",
      "control_friction",
      "confidence",
      "confidence_reason",
    ],
    "first_pass",
  );
  common(f, "first", position, "first_pass", context);
  if (f.mandatory_goal !== "both_exits")
    throw new Error("first_pass: mandatory_goal must be both_exits");
  const packets = evidences(
    f.packet_artifacts,
    "first_pass.packet_artifacts",
    "first",
    position,
    1,
    context,
  );
  if (
    !packets.some(
      (item) =>
        item.artifact ===
        `docs/difficulty_observations/${string(f.level_id, "first_pass.level_id")}.json`,
    )
  ) {
    throw new Error("first_pass.packet_artifacts: current observation packet is required");
  }
  array(f.steps, "first_pass.steps", 1).forEach((item, i) =>
    step(item, `first_pass.steps[${i}]`, "first", position, context),
  );
  strings(f.wrong_turns, "first_pass.wrong_turns");
  strings(f.unknowns, "first_pass.unknowns");
  return f as unknown as FirstPass;
}
export function validateSecond(
  value: unknown,
  position: number,
  firstHash: string,
  hashes: ReturnType<typeof currentFingerprints>,
  context: ValidationContext = liveContext,
): SecondPass {
  const s = object(value, "second_pass");
  fields(
    s,
    [
      "schema_version",
      "input_mode",
      "level_id",
      "campaign_position",
      "author",
      "created_at",
      "campaign_sha256",
      "source_fingerprint",
      "source_artifacts",
      "prior_knowledge",
      "mechanics",
      "legal_routes",
      "hero_contributions",
      "common_mistakes",
      "optional_collectibles",
      "ratings",
      "control_friction",
      "confidence",
      "confidence_reason",
      "comparison",
      "single_operator_note",
    ],
    "second_pass",
  );
  common(s, "second", position, "second_pass", context);
  if (
    s.campaign_sha256 !== hashes.campaign_sha256 ||
    s.source_fingerprint !== hashes.source_fingerprint
  ) {
    throw new Error("second_pass: campaign or source fingerprint is stale");
  }
  const source = evidences(
    s.source_artifacts,
    "second_pass.source_artifacts",
    "second",
    position,
    1,
    context,
  );
  if (!source.every((e) => /^src\/.*\.(?:ts|tsx|svg|css|html)$/.test(e.artifact))) {
    throw new Error("second_pass.source_artifacts: expected authored source files");
  }
  array(s.mechanics, "second_pass.mechanics", 1).forEach((item, i) => {
    const m = object(item, `mechanics[${i}]`);
    fields(m, ["fact", "evidence"], `mechanics[${i}]`);
    string(m.fact, `mechanics[${i}].fact`);
    const citations = evidences(
      m.evidence,
      `mechanics[${i}].evidence`,
      "second",
      position,
      1,
      context,
    );
    if (!citations.some((e) => /^src\/.*\.(?:ts|tsx)$/.test(e.artifact))) {
      throw new Error(`mechanics[${i}]: requires authored source evidence`);
    }
  });
  const routes = array(s.legal_routes, "second_pass.legal_routes", 1).map((item, i) => {
    const r = object(item, `legal_routes[${i}]`);
    fields(r, ["name", "mandatory", "steps", "evidence"], `legal_routes[${i}]`);
    string(r.name, `legal_routes[${i}].name`);
    if (typeof r.mandatory !== "boolean")
      throw new Error(`legal_routes[${i}].mandatory: expected boolean`);
    array(r.steps, `legal_routes[${i}].steps`, 1).forEach((item, j) =>
      step(item, `legal_routes[${i}].steps[${j}]`, "second", position, context),
    );
    evidences(r.evidence, `legal_routes[${i}].evidence`, "second", position, 1, context);
    return r;
  });
  if (
    !routes.some(
      (route) =>
        route.mandatory &&
        (route.steps as Obj[]).some((step) => step.actor === "isp" || step.actor === "both") &&
        (route.steps as Obj[]).some((step) => step.actor === "pac" || step.actor === "both"),
    )
  ) {
    throw new Error("second_pass: mandatory route needs steps for both heroes");
  }
  const heroes = object(s.hero_contributions, "hero_contributions");
  fields(heroes, ["isp", "pac"], "hero_contributions");
  strings(heroes.isp, "hero_contributions.isp", 1);
  strings(heroes.pac, "hero_contributions.pac", 1);
  array(s.common_mistakes, "common_mistakes", 1).forEach((item, i) => {
    const m = object(item, `common_mistakes[${i}]`);
    fields(m, ["mistake", "consequence", "recovery", "evidence"], `common_mistakes[${i}]`);
    ["mistake", "consequence", "recovery"].forEach((key) =>
      string(m[key], `common_mistakes[${i}].${key}`),
    );
    evidences(m.evidence, `common_mistakes[${i}].evidence`, "second", position, 1, context);
  });
  strings(s.optional_collectibles, "optional_collectibles");
  string(s.single_operator_note, "single_operator_note");
  const c = object(s.comparison, "comparison");
  fields(
    c,
    [
      "first_pass_sha256",
      "confirmed",
      "missed_mechanics",
      "incorrect_inferences",
      "changed_judgments",
      "unresolved",
    ],
    "comparison",
  );
  if (c.first_pass_sha256 !== firstHash) throw new Error("second_pass: first-pass hash mismatch");
  [
    "confirmed",
    "missed_mechanics",
    "incorrect_inferences",
    "changed_judgments",
    "unresolved",
  ].forEach((key) => strings(c[key], `comparison.${key}`));
  if (
    ![
      c.confirmed,
      c.missed_mechanics,
      c.incorrect_inferences,
      c.changed_judgments,
      c.unresolved,
    ].some((items) => (items as unknown[]).length)
  ) {
    throw new Error("second_pass: causal comparison is empty");
  }
  return s as unknown as SecondPass;
}
export function packetFingerprint(first: FirstPass): string {
  // The lock pins ordered packet references; evidence() checks actual file bytes.
  return sha(
    JSON.stringify(first.packet_artifacts.map(({ artifact, sha256 }) => ({ artifact, sha256 }))),
  );
}
export function validateCoverage(
  actual: readonly string[],
  expected: ReadonlySet<string>,
  label: string,
): void {
  if (new Set(actual).size !== actual.length) throw new Error(`${label}: duplicate record name`);
  const missing = [...expected].filter((name) => !actual.includes(name));
  const extra = actual.filter((name) => !expected.has(name));
  if (missing.length || extra.length)
    throw new Error(`${label}: missing [${missing.join(", ")}], extra [${extra.join(", ")}]`);
}
function lock(id: string): void {
  verifyObservationProvenance();
  const position = roomPosition.get(id);
  if (!position) throw new Error(`Unknown campaign ID: ${id}`);
  const firstPath = join(DATA, "first_pass", `${id}.json`);
  const first = validateFirst(read(firstPath), position);
  const lockPath = join(DATA, "locks", `${id}.json`);
  const value: FirstPassLock = {
    schema_version: 1,
    level_id: id,
    packet_fingerprint: packetFingerprint(first),
    first_pass_sha256: sha(readFileSync(firstPath)),
    locked_at: new Date().toISOString(),
  };
  if (existsSync(lockPath)) {
    const old = read(lockPath);
    const o = object(old, "lock");
    if (
      o.first_pass_sha256 !== value.first_pass_sha256 ||
      o.packet_fingerprint !== value.packet_fingerprint
    ) {
      throw new Error(`${id}: immutable first-pass lock refuses replacement`);
    }
    console.log(`${id}: lock already valid`);
    return;
  }
  write(lockPath, value);
  console.log(`${id}: first pass locked at ${value.first_pass_sha256}`);
}
export function checkedLock(value: unknown, id: string, first: FirstPass, firstPath: string): void {
  const l = object(value, "lock");
  fields(
    l,
    ["schema_version", "level_id", "packet_fingerprint", "first_pass_sha256", "locked_at"],
    "lock",
  );
  if (
    l.schema_version !== 1 ||
    l.level_id !== id ||
    l.packet_fingerprint !== packetFingerprint(first) ||
    l.first_pass_sha256 !== sha(readFileSync(firstPath))
  ) {
    throw new Error(`${id}: first-pass lock mismatch`);
  }
  digest(l.first_pass_sha256, "lock.first_pass_sha256");
  digest(l.packet_fingerprint, "lock.packet_fingerprint");
  if (!Number.isFinite(Date.parse(string(l.locked_at, "lock.locked_at"))))
    throw new Error("lock: invalid date");
}
function records(): Array<{ first: FirstPass; second: SecondPass }> {
  verifyObservationProvenance();
  const expected = new Set(LEVELS.map((level) => `${level.id}.json`));
  for (const folder of ["first_pass", "levels", "locks"]) {
    const dir = join(DATA, folder);
    const actual = existsSync(dir) ? readdirSync(dir).filter((name) => name.endsWith(".json")) : [];
    validateCoverage(actual, expected, folder);
  }
  const hashes = currentFingerprints();
  return LEVELS.map((level, index) => {
    const id = level.id;
    const firstPath = join(DATA, "first_pass", `${id}.json`);
    const first = validateFirst(read(firstPath), index + 1);
    checkedLock(read(join(DATA, "locks", `${id}.json`)), id, first, firstPath);
    const second = validateSecond(
      read(join(DATA, "levels", `${id}.json`)),
      index + 1,
      sha(readFileSync(firstPath)),
      hashes,
    );
    if (
      (DIMENSIONS.some((name) => first.ratings[name].score !== second.ratings[name].score) ||
        first.control_friction.score !== second.control_friction.score) &&
      second.comparison.changed_judgments.length === 0
    )
      throw new Error(`${id}: changed ratings require a causal changed_judgments explanation`);
    return { first, second };
  });
}
export function renderCitation(e: Evidence, from = "docs/difficulty_levels", root = ROOT): string {
  artifactPath(e.artifact, root);
  const ignored = spawnSync("git", ["check-ignore", "-q", "--", e.artifact], {
    cwd: root,
  });
  if (ignored.status !== 0 && ignored.status !== 1)
    throw new Error(`git check-ignore failed for ${e.artifact}`);
  const name = md(e.artifact);
  const target = relative(join(root, from), join(root, e.artifact)).split(sep).join("/");
  const reference = ignored.status === 0 ? `\`${name}\`` : `[${name}](${target})`;
  return `${reference} (SHA-256 \`${e.sha256}\`, ${md(e.locator)}: ${md(e.claim)})`;
}
function report(): void {
  generateReport(ROOT, DATA, LEVELS, records(), currentFingerprints(), renderCitation);
}
function prompt(id: string, pass: Pass): void {
  const position = roomPosition.get(id);
  if (!position) throw new Error(`Unknown campaign ID: ${id}`);
  const earlier = LEVELS.slice(0, position - 1).map(
    (level, i) => `${i + 1}. ${level.id}: ${level.title}`,
  );
  const packet = `docs/difficulty_observations/${id}.json`;
  if (!existsSync(join(ROOT, packet))) throw new Error(`Missing observation packet: ${packet}`);
  if (pass === "first") {
    console.log(
      `FIRST PASS: ${id}, position ${position}, ${LEVELS[position - 1]!.title}\nRead docs/DIFFICULTY_RUBRIC.md and devel/difficulty/types.ts. Inspect only ${packet} and its three idle images, plus earlier observation packets as needed. Screenshots are the authority for visible canvas text; packet metadata alone does not prove visibility. Earlier rooms:\n${earlier.join("\n") || "none"}\nPropose a plausible both-exit plan for a first encounter. Mark unwitnessed actions as hypotheses with observed_feedback=null. Treat recovery and control reliability as unknown unless shown by evidence. Earlier exposure is an opportunity to learn, not confirmed mastery. Describe each decision, each hero's possible contribution, expected and actually seen feedback, plausible mistakes, and unknowns. Rate all eight dimensions with evidence or documented unknowns. Do not consult source, hints, route solutions, or other room assessments before locking. Write devel/difficulty/first_pass/${id}.json. Use repo-relative evidence paths with SHA-256 and a specific locator and claim. Run npx tsx devel/assess_difficulty.ts lock ${id} before source access.`,
    );
  } else {
    const firstPath = join(DATA, "first_pass", `${id}.json`);
    if (!existsSync(join(DATA, "locks", `${id}.json`)))
      throw new Error(`${id}: lock first pass before second-pass prompt`);
    const first = validateFirst(read(firstPath), position);
    checkedLock(read(join(DATA, "locks", `${id}.json`)), id, first, firstPath);
    console.log(
      `SECOND PASS: ${id}, position ${position}, ${LEVELS[position - 1]!.title}\nFirst-pass SHA-256: ${sha(readFileSync(firstPath))}\nCampaign/source fingerprints: ${JSON.stringify(currentFingerprints())}\nRead the locked first pass, docs/DIFFICULTY_RUBRIC.md, devel/difficulty/types.ts, and authored source. Inspect ordinary-input route evidence and recovery. Document actual mechanics, legal mandatory both-exit route, optional collectibles, both heroes' necessary contributions, common mistakes and recovery. Name actual earlier introduction for each transferred mechanic from these prior positions:\n${earlier.join("\n") || "none"}\nCompare confirmed, missed, incorrect, changed, and unresolved causal findings without rewriting pass one. Explain rating changes with evidence; numeric delta alone is insufficient. Write devel/difficulty/levels/${id}.json with current fingerprints and locked hash. Source evidence must cite repo-relative path, SHA-256, locator, and claim.`,
    );
  }
}

const command = process.argv[2];
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url))
  try {
    if (command === "snapshot" || command === "--snapshot") snapshot();
    else if (command === "lock" || command === "--lock-first-pass")
      lock(string(process.argv[3], "level ID"));
    else if (command === "validate" || command === "--validate") {
      const pairs = records();
      console.log(`Valid assessment for ${LEVELS.length} campaign rooms.`);
      const gaps = evidenceGaps(pairs);
      if (gaps.length) console.log(`Evidence gaps (accepted unknowns):\n${gaps.join("\n")}`);
    } else if (command === "report" || command === "--write-report") report();
    else if (command === "prompt" || command === "--packet") {
      const id = string(process.argv[3], "level ID");
      const passFlag = process.argv[4] === "--pass" ? process.argv[5] : "first";
      choice(passFlag, ["first", "second"], "pass");
      prompt(id, passFlag as Pass);
    } else {
      console.error(
        "Usage: npx tsx devel/assess_difficulty.ts snapshot|lock LEVEL_ID|validate|report|prompt LEVEL_ID --pass first|second",
      );
      process.exitCode = 2;
    }
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  }
