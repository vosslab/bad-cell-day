import { mkdirSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import type { Evidence, FirstPass, Ratings, SecondPass } from "./types";

/* eslint-disable no-console -- This developer report command reports generated artifacts. */

export const DIMENSIONS = [
  "reasoning",
  "cooperation",
  "execution",
  "timing",
  "hazards",
  "novelty",
  "recovery_cost",
  "solution_clarity",
] as const;
export function axis(ratings: Ratings, names: readonly [string, string, string]): number | null {
  const values = names.map((name) => ratings[name as keyof typeof ratings].score);
  if (values.some((value) => value === null)) return null;
  return Math.round((100 * (3 * values[0]! + 2 * values[1]! + 2 * values[2]!)) / 28);
}
export function evidenceGaps(pairs: readonly { first: FirstPass; second: SecondPass }[]): string[] {
  return pairs.flatMap(({ first, second }) => {
    const gaps = [
      ...DIMENSIONS.filter((name) => first.ratings[name].score === null).map(
        (name) => `first ${name}`,
      ),
      ...DIMENSIONS.filter((name) => second.ratings[name].score === null).map(
        (name) => `final ${name}`,
      ),
    ];
    if (first.control_friction.score === null) gaps.push("first control friction");
    if (second.control_friction.score === null) gaps.push("final control friction");
    return gaps.length ? [`${second.level_id}: ${gaps.join(", ")}`] : [];
  });
}

const puzzle = ["reasoning", "cooperation", "novelty"] as const;
const platforming = ["execution", "timing", "hazards"] as const;
const display = (value: number | null): string => (value === null ? "unknown" : String(value));
export const md = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/`/g, "\\`")
    .replace(/\r?\n/g, " ");
export function generateReport(
  root: string,
  data: string,
  reportDirectory: string,
  levels: readonly { id: string; title: string }[],
  pairs: readonly { first: FirstPass; second: SecondPass }[],
  hashes: { campaign_sha256: string; source_fingerprint: string },
  formatCitation: (e: Evidence) => string,
): void {
  const citation = (e: Evidence): string => formatCitation(e);
  const list = (items: readonly string[]): string =>
    items.length ? items.map((item) => `- ${md(item)}`).join("\n") : "- None recorded.";
  const stepLine = (step: FirstPass["steps"][number]): string =>
    `- **${step.actor}**: ${md(step.goal)}; ${md(step.action)}. Expected: ${md(step.expected_feedback)}. Seen: ${step.observed_feedback ? md(step.observed_feedback) : "unknown"}. Issue: ${step.issue}. ${step.evidence.map(citation).join("; ")}`;

  const map = pairs.map(({ first, second }, index) => ({
    level_id: second.level_id,
    position: index + 1,
    title: levels[index]!.title,
    first: {
      puzzle: axis(first.ratings, puzzle),
      platforming: axis(first.ratings, platforming),
      confidence: first.confidence,
    },
    second: {
      puzzle: axis(second.ratings, puzzle),
      platforming: axis(second.ratings, platforming),
      recovery_cost: second.ratings.recovery_cost.score,
      solution_clarity: second.ratings.solution_clarity.score,
      control_friction: second.control_friction.score,
      confidence: second.confidence,
    },
  }));
  mkdirSync(data, { recursive: true });
  writeFileSync(
    join(data, "campaign_map.json"),
    JSON.stringify({ schema_version: 1, ...hashes, rooms: map }, null, 2) + "\n",
  );
  const rubric = relative(reportDirectory, join(root, "docs/DIFFICULTY_RUBRIC.md"))
    .split(sep)
    .join("/");
  const lines = [
    "# Campaign difficulty assessment",
    "",
    "Expert first-encounter cognitive walkthrough estimates for two human players sharing a keyboard. These are ordinal judgments, not measured player success, enjoyment, time, or calibrated difficulty. A scripted route supports feasibility only. `unknown` means the evidence cannot support an axis.",
    "",
    `Puzzle = 100 x (3 reasoning + 2 cooperation + 2 novelty) / 28; platforming = 100 x (3 execution + 2 timing + 2 hazards) / 28, rounded. Any unknown input makes the axis unknown. Clarity, recovery, and control friction remain separate burdens. See [DIFFICULTY_RUBRIC.md](${rubric}).`,
    "",
    "Automated review candidates below are prompts for inspection, not conclusions.",
    "",
    `Campaign SHA-256: \`${hashes.campaign_sha256}\`. Source SHA-256: \`${hashes.source_fingerprint}\`.`,
    "",
    "| Pos | Room | First puzzle | First platforming | Final puzzle | Final platforming | Clarity burden | Recovery cost | Control friction | Confidence |",
    "| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |",
    ...map.map(
      (item) =>
        `| ${item.position} | [${md(item.title)}](difficulty_levels/${item.level_id.toUpperCase()}.md) | ${display(item.first.puzzle)} | ${display(item.first.platforming)} | ${display(item.second.puzzle)} | ${display(item.second.platforming)} | ${display(item.second.solution_clarity)} | ${display(item.second.recovery_cost)} | ${display(item.second.control_friction)} | ${item.second.confidence} |`,
    ),
    "",
    "## Automated review candidates",
    "",
  ];
  const candidates: string[] = [];
  for (let i = 0; i < map.length; i++) {
    const item = map[i]!;
    const burdens = [
      item.second.solution_clarity,
      item.second.recovery_cost,
      item.second.control_friction,
    ];
    if (burdens.some((value) => value !== null && value >= 3))
      candidates.push(
        `- ${item.position}. ${md(item.title)}: one or more reported burdens are 3 or 4; inspect cited causes.`,
      );
    if (item.second.confidence === "low")
      candidates.push(
        `- ${item.position}. ${md(item.title)}: low confidence; resolve the stated evidence gaps.`,
      );
    const prev = map[i - 1];
    if (
      prev &&
      item.second.puzzle !== null &&
      prev.second.puzzle !== null &&
      item.second.puzzle + 20 < prev.second.puzzle
    ) {
      candidates.push(
        `- ${item.position}. ${md(item.title)}: puzzle axis drops at least 20 points from the prior room; inspect teaching order and profiles.`,
      );
    }
  }
  lines.push(...(candidates.length ? candidates : ["- No automatic candidates."]), "");
  const gaps = evidenceGaps(pairs);
  lines.push(
    "## Evidence gaps",
    "",
    ...(gaps.length ? gaps.map((gap) => `- ${gap}`) : ["- None recorded."]),
    "",
  );
  mkdirSync(reportDirectory, { recursive: true });
  writeFileSync(join(reportDirectory, "LEVEL_DIFFICULTY_REPORT.md"), lines.join("\n") + "\n");
  mkdirSync(join(reportDirectory, "difficulty_levels"), { recursive: true });
  for (const [index, { first, second }] of pairs.entries()) {
    const roomLines = [
      `# Room ${index + 1}: ${md(levels[index]!.title)}`,
      "",
      "[Campaign summary](../LEVEL_DIFFICULTY_REPORT.md)",
      "",
      `**${md(levels[index]!.title)}** (\`${second.level_id}\`). First-pass author: ${md(first.author)}; second-pass author: ${md(second.author)}. Confidence: ${first.confidence} -> ${second.confidence}.`,
      "",
      `First-pass confidence: ${md(first.confidence_reason)} Second-pass confidence: ${md(second.confidence_reason)}`,
      "",
      "| Dimension | First | Final | First rationale | Final rationale |",
      "| --- | ---: | ---: | --- | --- |",
      ...DIMENSIONS.map(
        (name) =>
          `| ${name.replace(/_/g, " ")} | ${display(first.ratings[name].score)} | ${display(second.ratings[name].score)} | ${md(first.ratings[name].rationale)} | ${md(second.ratings[name].rationale)} |`,
      ),
      `| control friction | ${display(first.control_friction.score)} | ${display(second.control_friction.score)} | ${md(first.control_friction.rationale)} | ${md(second.control_friction.rationale)} |`,
      "",
      "## Evidence and learning",
      "",
      `First packet: ${first.packet_artifacts.map(citation).join("; ")}.`,
      "",
      `Source: ${second.source_artifacts.map(citation).join("; ")}.`,
      "",
      "First encounter prior knowledge:",
      "",
      ...(first.prior_knowledge.length
        ? first.prior_knowledge.map(
            (p) =>
              `- ${md(p.concept)}: ${p.status}${p.earlier_room_id ? ` in ${p.earlier_room_id}` : ""}. ${p.evidence.map(citation).join("; ")}`,
          )
        : ["- None recorded."]),
      "",
      "Source-checked prior knowledge:",
      "",
      ...second.prior_knowledge.map(
        (p) =>
          `- ${md(p.concept)}: ${p.status}${p.earlier_room_id ? ` in ${p.earlier_room_id}` : ""}. ${p.evidence.map(citation).join("; ")}`,
      ),
      "",
      "## First encounter",
      "",
      ...first.steps.map(stepLine),
      "",
      "Wrong turns:",
      "",
      list(first.wrong_turns),
      "",
      "Unknowns:",
      "",
      list(first.unknowns),
      "",
      "## Source-checked account",
      "",
      ...second.mechanics.map((m) => `- ${md(m.fact)} ${m.evidence.map(citation).join("; ")}`),
      "",
      `Isp: ${second.hero_contributions.isp.map(md).join("; ")}. Pac: ${second.hero_contributions.pac.map(md).join("; ")}.`,
      "",
      ...second.legal_routes.map(
        (route) =>
          `**${md(route.name)}** (${route.mandatory ? "mandatory both exits" : "optional"}):\n\n${route.steps.map(stepLine).join("\n")}\n\nEvidence: ${route.evidence.map(citation).join("; ")}.`,
      ),
      "",
      "Common mistakes and recovery:",
      "",
      ...second.common_mistakes.map(
        (m) =>
          `- ${md(m.mistake)} Consequence: ${md(m.consequence)} Recovery: ${md(m.recovery)} ${m.evidence.map(citation).join("; ")}`,
      ),
      "",
      `Optional collectibles: ${second.optional_collectibles.length ? second.optional_collectibles.map(md).join("; ") : "none recorded"}.`,
      "",
      `One operator: ${md(second.single_operator_note)}`,
      "",
      "## Causal comparison",
      "",
      ...(
        [
          "confirmed",
          "missed_mechanics",
          "incorrect_inferences",
          "changed_judgments",
          "unresolved",
        ] as const
      ).map(
        (name) =>
          `- ${name.replace(/_/g, " ")}: ${second.comparison[name].length ? second.comparison[name].map(md).join("; ") : "none recorded"}`,
      ),
      "",
    ];
    for (const name of DIMENSIONS) {
      roomLines.push(
        `- ${name} evidence: first ${first.ratings[name].evidence.map(citation).join("; ") || "unknown"}; final ${second.ratings[name].evidence.map(citation).join("; ") || "unknown"}.`,
      );
    }
    roomLines.push(
      `- control friction evidence: first ${first.control_friction.evidence.map(citation).join("; ") || "unknown"}; final ${second.control_friction.evidence.map(citation).join("; ") || "unknown"}.`,
      "",
    );
    writeFileSync(
      join(reportDirectory, "difficulty_levels", `${second.level_id.toUpperCase()}.md`),
      roomLines.join("\n") + "\n",
    );
  }
  const height = 70 + map.length * 30;
  // ASVS 1.2.1: XML text is encoded at the SVG output boundary.
  const xml = (value: string): string =>
    value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 ${height}" role="img" aria-labelledby="title desc">`,
    `<title id="title">Campaign puzzle and platforming profile</title>`,
    `<desc id="desc">Expert estimates for ${map.length} rooms. Gray means unknown. Values are listed in the generated Markdown report.</desc>`,
    `<rect width="920" height="${height}" fill="#fff"/>`,
    `<text x="15" y="30" font-family="sans-serif" font-size="16">Campaign difficulty: puzzle (blue), platforming (orange)</text>`,
    ...map.flatMap((item, i) => {
      const y = 50 + i * 30;
      return [
        `<text x="10" y="${y + 14}" font-family="sans-serif" font-size="12">${String(item.position).padStart(2, "0")} ${xml(item.level_id)}</text>`,
        `<rect x="155" y="${y}" width="${item.second.puzzle === null ? 5 : 3 * item.second.puzzle}" height="10" fill="${item.second.puzzle === null ? "#999" : "#2367a3"}"/>`,
        `<rect x="475" y="${y}" width="${item.second.platforming === null ? 5 : 3 * item.second.platforming}" height="10" fill="${item.second.platforming === null ? "#999" : "#bb5a12"}"/>`,
        `<text x="790" y="${y + 10}" font-family="sans-serif" font-size="12">${display(item.second.puzzle)} / ${display(item.second.platforming)}</text>`,
      ];
    }),
    "</svg>",
  ];
  writeFileSync(join(reportDirectory, "difficulty_campaign.svg"), svg.join("\n") + "\n");
  console.log(`Wrote report, SVG, and map for ${map.length} rooms.`);
}
