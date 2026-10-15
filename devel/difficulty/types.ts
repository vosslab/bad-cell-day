// Assessment data contract. Runtime validation belongs to assess_difficulty.ts.
export type Score = 0 | 1 | 2 | 3 | 4;
export type Dimension =
  | "reasoning"
  | "cooperation"
  | "execution"
  | "timing"
  | "hazards"
  | "novelty"
  | "recovery_cost"
  | "solution_clarity";

export interface Evidence {
  // Repo-relative path to a retained observation, screenshot, route log, or source snapshot.
  artifact: string;
  sha256: string;
  locator: string;
  claim: string;
}

export interface Rating {
  // Null means insufficient evidence; derived axes must then remain unavailable.
  score: Score | null;
  rationale: string;
  evidence: Evidence[];
}

export type Ratings = Record<Dimension, Rating>;

export interface PriorKnowledge {
  concept: string;
  status: "previously_introduced" | "previously_practiced" | "new";
  earlier_room_id: string | null;
  evidence: Evidence[];
}

export interface WalkthroughStep {
  actor: "isp" | "pac" | "both";
  goal: string;
  action: string;
  expected_feedback: string;
  observed_feedback: string | null;
  issue: "none" | "misread" | "mistake" | "blocked" | "unknown";
  evidence: Evidence[];
}

export interface FirstPass {
  schema_version: 1;
  input_mode: "two_humans_shared_keyboard";
  level_id: string;
  campaign_position: number;
  author: string;
  created_at: string;
  packet_artifacts: Evidence[];
  prior_knowledge: PriorKnowledge[];
  // The normal task is both heroes reaching their exits. Collectibles are separate.
  mandatory_goal: "both_exits";
  steps: WalkthroughStep[];
  wrong_turns: string[];
  unknowns: string[];
  ratings: Ratings;
  control_friction: Rating;
  confidence: "low" | "medium" | "high";
  confidence_reason: string;
}

export interface FirstPassLock {
  schema_version: 1;
  level_id: string;
  packet_fingerprint: string;
  first_pass_sha256: string;
  locked_at: string;
}

export interface Route {
  name: string;
  mandatory: boolean;
  steps: WalkthroughStep[];
  evidence: Evidence[];
}

export interface HindsightComparison {
  // Cite the frozen first pass and explain every material change in causal terms.
  first_pass_sha256: string;
  confirmed: string[];
  missed_mechanics: string[];
  incorrect_inferences: string[];
  changed_judgments: string[];
  unresolved: string[];
}

export interface SecondPass {
  schema_version: 1;
  input_mode: "two_humans_shared_keyboard";
  level_id: string;
  campaign_position: number;
  author: string;
  created_at: string;
  // Hash the campaign roster and inspected source snapshot to detect stale assessments.
  campaign_sha256: string;
  source_fingerprint: string;
  source_artifacts: Evidence[];
  // Confirm which mechanics were previously exposed; new concepts use null earlier_room_id.
  prior_knowledge: PriorKnowledge[];
  mechanics: Array<{ fact: string; evidence: Evidence[] }>;
  legal_routes: Route[];
  hero_contributions: { isp: string[]; pac: string[] };
  common_mistakes: Array<{
    mistake: string;
    consequence: string;
    recovery: string;
    evidence: Evidence[];
  }>;
  optional_collectibles: string[];
  ratings: Ratings;
  control_friction: Rating;
  confidence: "low" | "medium" | "high";
  confidence_reason: string;
  comparison: HindsightComparison;
  // Note single-operator input demands; the baseline remains two humans.
  single_operator_note: string;
}
