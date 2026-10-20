import { For, Show, createMemo, createUniqueId } from "solid-js";
import type { JSX } from "solid-js";
import { ORGAN_THEMES } from "./anatomy";
import type { OrganStage } from "./types/anatomy";
import type { LevelDefinition } from "./types/level";
import type { SavedProgress } from "./types/persistence";

const ART = "./assets/patient_recovery.svg";
type Site = readonly [x: number, y: number];
type Patch = readonly [x: number, y: number, width: number, height: number];

// Shared curved edges tile the lung surface without gaps. These are gameplay
// territories, independent of anatomical lobes.
function lung_patch(x: number, y: number): string {
  const left = x < 280 ? 150 : 280;
  const edge = (height: number): string =>
    `C${left + 25} ${height - 12} ${left + 42} ${height + 11} ${left + 65} ${height}S${left + 105} ${height - 9} ${left + 130} ${height}`;
  const top = y < 331 ? 250 : y < 372 ? 331 : 372;
  const bottom = y < 331 ? 331 : y < 372 ? 372 : 430;
  return `M${left} ${top}${edge(top)}L${left + 130} ${bottom}
    C${left + 105} ${bottom - 9} ${left + 88} ${bottom - 11} ${left + 65} ${bottom}
    S${left + 25} ${bottom - 12} ${left} ${bottom}Z`;
}

// Coordinates belong to the illustration; IDs belong to the campaign. Never infer
// completion from a site's number: curriculum order and historical saves can differ.
const SITES: Readonly<Record<string, Site>> = {
  level_02: [213, 309],
  level_01: [349, 309],
  level_04: [205, 351],
  level_03: [358, 351],
  level_37: [218, 391],
  level_57: [345, 391],
  level_45: [200, 518],
  level_06: [240, 519],
  level_08: [280, 519],
  level_34: [322, 519],
  level_53: [361, 524],
  level_54: [349, 553],
  level_05: [307, 552],
  level_48: [265, 551],
  level_07: [222, 551],
  level_47: [202, 584],
  level_41: [326, 589],
  level_11: [212, 674],
  level_49: [212, 703],
  level_09: [212, 733],
  level_10: [212, 763],
  level_55: [212, 794],
  level_23: [351, 674],
  level_51: [351, 703],
  level_12: [352, 733],
  level_21: [353, 763],
  level_36: [353, 794],
  level_13: [188, 438],
  level_40: [216, 438],
  level_24: [244, 439],
  level_30: [272, 441],
  level_44: [300, 443],
  level_43: [328, 444],
  level_32: [356, 442],
  level_46: [346, 469],
  level_14: [318, 470],
  level_26: [290, 474],
  level_28: [262, 480],
  level_58: [234, 480],
  level_15: [206, 479],
  level_16: [178, 470],
  level_18: [221, 53],
  level_17: [261, 53],
  level_25: [301, 53],
  level_22: [341, 53],
  level_52: [356, 85],
  level_56: [306, 85],
  level_27: [256, 85],
  level_39: [206, 85],
  level_35: [201, 117],
  level_31: [251, 117],
  level_42: [301, 117],
  level_38: [361, 117],
  level_50: [342, 148],
  level_29: [302, 148],
  level_33: [262, 148],
  level_19: [222, 148],
  level_20: [433, 541],
};

const REGION_COLOR: Readonly<Record<OrganStage, string>> = {
  lungs: "#bb4264",
  intestine: "#ad5826",
  marrow: "#b43c68",
  liver: "#ad3b3e",
  brain: "#9e4476",
  tumor: "#72558e",
};
const PATCH_SCALE: Readonly<Record<OrganStage, number>> = {
  lungs: 0.77,
  intestine: 0.48,
  marrow: 0.46,
  liver: 0.43,
  brain: 0.49,
  tumor: 1.5,
};
const ORGAN_VIEW: Readonly<Record<OrganStage, string>> = {
  lungs: "145 250 275 190",
  intestine: "150 485 250 150",
  marrow: "160 625 235 210",
  liver: "140 392 260 125",
  brain: "155 8 250 180",
  tumor: "365 470 140 140",
};

// Each site restores a connected portion of an organ, not a colored dot.
// Bands meet at shared edges; the organ artwork supplies the outer silhouette.
function tissue_patch(stage: OrganStage, x: number, y: number): Patch {
  if (stage === "lungs") {
    const top = y < 331 ? 260 : y < 372 ? 331 : 372;
    const bottom = y < 331 ? 331 : y < 372 ? 372 : 425;
    return [x < 280 ? 155 : 280, top, 125, bottom - top];
  }
  if (stage === "brain") {
    const edges = [165, 235, 280, 330, 397];
    const column = x < 235 ? 0 : x < 280 ? 1 : x < 330 ? 2 : 3;
    const top = y < 69 ? 20 : y < 101 ? 69 : y < 133 ? 101 : 133;
    const bottom = y < 69 ? 69 : y < 101 ? 101 : y < 133 ? 133 : 178;
    return [edges[column]!, top, edges[column + 1]! - edges[column]!, bottom - top];
  }
  if (stage === "liver") {
    const column = Math.min(6, Math.max(0, Math.round((x - 188) / 28)));
    const left = column === 0 ? 150 : 174 + column * 28;
    const right = column === 6 ? 390 : 202 + column * 28;
    return [left, y < 455 ? 400 : 455, right - left, 55];
  }
  if (stage === "intestine") {
    if (y >= 570) return [x < 268 ? 165 : 268, 570, x < 268 ? 103 : 122, 55];
    if (y >= 537) {
      const edges = [165, 244, 286, 328, 390];
      const column = x < 244 ? 0 : x < 286 ? 1 : x < 328 ? 2 : 3;
      return [edges[column]!, 537, edges[column + 1]! - edges[column]!, 33];
    }
    const edges = [165, 220, 260, 302, 342, 390];
    const column = x < 220 ? 0 : x < 260 ? 1 : x < 302 ? 2 : x < 342 ? 3 : 4;
    return [edges[column]!, 490, edges[column + 1]! - edges[column]!, 47];
  }
  if (stage === "marrow") {
    const edges = [635, 689, 718, 748, 778, 830];
    const row = y < 689 ? 0 : y < 718 ? 1 : y < 748 ? 2 : y < 778 ? 3 : 4;
    return [x < 280 ? 175 : 310, edges[row]!, 80, edges[row + 1]! - edges[row]!];
  }
  return [380, 480, 110, 120];
}

type PatientRecoveryProps = {
  readonly levels: readonly LevelDefinition[];
  readonly progress: SavedProgress;
  readonly currentLevel: LevelDefinition;
  readonly newlyClearedId: string | undefined;
};

export function PatientRecovery(props: PatientRecoveryProps): JSX.Element {
  const titleId = createUniqueId();
  const completed = createMemo(
    () => new Set(props.progress.completed.map((entry) => entry.levelId)),
  );
  const sites = createMemo(() =>
    props.levels.map((level, index) => {
      const point = SITES[level.id];
      if (!point) throw new Error(`Patient recovery artwork needs a site for ${level.id}`);
      const patch = tissue_patch(level.stage, point[0], point[1]);
      return { level, number: index + 1, x: point[0], y: point[1], patch };
    }),
  );
  const next = createMemo(() => props.levels.find((level) => !completed().has(level.id)));
  const regions = createMemo(() =>
    [...new Set(props.levels.map((level) => level.stage))].map((stage) => {
      const levels = props.levels.filter((level) => level.stage === stage);
      const cleared = levels.filter((level) => completed().has(level.id)).length;
      return { stage, cleared, total: levels.length, name: ORGAN_THEMES[stage].name };
    }),
  );
  const cleared = createMemo(() => sites().filter((site) => completed().has(site.level.id)).length);
  const rescued = createMemo(() => cleared() === props.levels.length);

  function world(detail: boolean): JSX.Element {
    const prefix = `${titleId}-${detail ? "detail" : "body"}`;
    const washId = `${prefix}-wash`;
    const visibleSites = (): ReturnType<typeof sites> =>
      sites().filter((site) => !detail || site.level.stage === props.currentLevel.stage);
    const visibleRegions = (): ReturnType<typeof regions> =>
      regions().filter((region) => !detail || region.stage === props.currentLevel.stage);
    return (
      <svg
        class="recovery_world"
        viewBox={detail ? ORGAN_VIEW[props.currentLevel.stage] : "0 0 560 900"}
        role="img"
        aria-labelledby={`${prefix}-title`}
      >
        <title id={`${prefix}-title`}>
          {detail
            ? `${ORGAN_THEMES[props.currentLevel.stage].name} sites. `
            : `${cleared()} of ${props.levels.length} cancer sites cleared. `}
          {rescued()
            ? " Patient rescued."
            : ` Restoring the ${ORGAN_THEMES[props.currentLevel.stage].name.toLowerCase()}.`}
        </title>
        <defs>
          <filter id={washId} color-interpolation-filters="sRGB">
            <feColorMatrix
              type="matrix"
              values=".24 .22 .10 0 .12 .13 .19 .08 0 .06 .17 .20 .12 0 .09 0 0 0 1 0"
            />
          </filter>
          <For each={visibleSites()}>
            {(site) => (
              <clipPath id={`${prefix}-${site.level.id}`}>
                <Show
                  when={site.level.stage === "lungs"}
                  fallback={
                    <rect
                      x={site.patch[0]}
                      y={site.patch[1]}
                      width={site.patch[2]}
                      height={site.patch[3]}
                    />
                  }
                >
                  <path d={lung_patch(site.x, site.y)} />
                </Show>
              </clipPath>
            )}
          </For>
        </defs>
        <Show when={!detail}>
          <ellipse cx="280" cy="451" rx="255" ry="420" fill="#e6edce" opacity=".55" />
          <path d="M59 175L66 158L73 175L90 182L73 189L66 206L59 189L42 182Z" fill="#e2be59" />
          <path
            d="M482 687L487 674L492 687L505 692L492 697L487 710L482 697L469 692Z"
            fill="#e2be59"
          />
          <use href={`${ART}#healthy-patient`} />
          <g fill="none" stroke="#543b40" stroke-linecap="round">
            <path
              d={`M254 220Q280 ${207 + 29 * (cleared() / props.levels.length)} 307 220`}
              stroke-width="4"
            />
            <path
              d={`M193 179Q207 ${181 - 15 * (cleared() / props.levels.length)} 224 175M336 175Q352 ${181 - 15 * (cleared() / props.levels.length)} 369 179`}
              stroke-width="4"
            />
            <path
              d="M203 199Q215 204 226 198M336 198Q348 204 360 199"
              stroke="#9c7274"
              stroke-width="3"
              opacity={1 - cleared() / props.levels.length}
            />
          </g>
        </Show>
        <For each={visibleRegions()}>
          {(region) => (
            <g>
              <use href={`${ART}#${region.stage === "tumor" ? "tumor-bed" : region.stage}`} />
              <Show when={region.cleared !== region.total}>
                <use
                  href={`${ART}#${region.stage === "tumor" ? "tumor-bed" : region.stage}`}
                  filter={`url(#${washId})`}
                  opacity={region.stage === "lungs" ? ".8" : ".32"}
                />
              </Show>
            </g>
          )}
        </For>
        <For
          each={visibleSites().filter(
            (site) => site.level.stage === "lungs" && !completed().has(site.level.id),
          )}
        >
          {(site) => (
            <g clip-path={`url(#${prefix}-${site.level.id})`}>
              <use href={`${ART}#lung-disease-texture`} />
            </g>
          )}
        </For>
        <For each={visibleSites()}>
          {(site) => (
            <Show when={completed().has(site.level.id)}>
              <g
                class="recovery_tissue"
                classList={{ is_new: props.newlyClearedId === site.level.id }}
                data-tissue-id={site.level.id}
                clip-path={`url(#${prefix}-${site.level.id})`}
              >
                <use
                  href={`${ART}#${site.level.stage === "tumor" ? "tumor-bed" : site.level.stage}`}
                />
                <Show when={site.level.stage !== "tumor"}>
                  <use
                    href={`${ART}#${site.level.stage === "lungs" ? "lung" : site.level.stage}-restored-detail`}
                  />
                </Show>
              </g>
            </Show>
          )}
        </For>
        <Show when={detail}>
          <polyline
            class="recovery_route"
            points={visibleSites()
              .map((site) => `${site.x},${site.y}`)
              .join(" ")}
          />
        </Show>
        <For each={visibleSites()}>
          {(site) => {
            const isCleared = (): boolean => completed().has(site.level.id);
            const isNext = (): boolean => next()?.id === site.level.id;
            const isCurrent = (): boolean => site.level.id === props.currentLevel.id;
            const showNumber = (): boolean => detail;
            const newlyCleared = (): boolean => props.newlyClearedId === site.level.id;
            return (
              <g
                class="recovery_site"
                classList={{
                  is_cleared: isCleared(),
                  is_current: isCurrent(),
                  is_next: isNext(),
                  is_new: newlyCleared(),
                }}
                data-level-id={site.level.id}
                data-state={isCleared() ? "cleared" : "remaining"}
                transform={`translate(${site.x} ${site.y})`}
              >
                <title>
                  {site.number}. {site.level.title}: {isCleared() ? "cleared" : "remaining"}
                </title>
                <Show when={!isCleared() || newlyCleared()}>
                  <g
                    class="recovery_lesion"
                    transform={`rotate(${(site.number % 5) * 19 - 35}) scale(${PATCH_SCALE[site.level.stage]})`}
                  >
                    <use
                      href={`${ART}#cancer-site${site.number % 3 ? `-${site.number % 3}` : ""}`}
                    />
                  </g>
                </Show>
                <Show when={showNumber()}>
                  <circle class="recovery_marker" r="12" />
                  <text class="recovery_number" text-anchor="middle" dy=".35em">
                    {site.number}
                  </text>
                  <Show when={isCleared()}>
                    <path class="recovery_check" d="M5-13L9-9L16-17" />
                  </Show>
                </Show>
                <Show when={isCurrent() && detail}>
                  <circle class="recovery_here" r="21" />
                </Show>
                <Show when={isNext()}>
                  <path class="recovery_next" d="M-7-26L0-18L7-26Z" />
                </Show>
              </g>
            );
          }}
        </For>
      </svg>
    );
  }

  return (
    <>
      <figure class="recovery_body" classList={{ is_rescued: rescued() }}>
        <figcaption>ONE BODY. ONE BIG RESCUE.</figcaption>
        {world(false)}
        <p class="recovery_body_total">
          <strong>
            {cleared()} / {props.levels.length}
          </strong>{" "}
          sites cleared
          <span>{rescued() ? "Patient rescued!" : "A little more life, every level."}</span>
        </p>
      </figure>
      <figure class="recovery_detail">
        <figcaption>
          <span>RESTORING THE</span>
          <strong>{ORGAN_THEMES[props.currentLevel.stage].name}</strong>
        </figcaption>
        {world(true)}
        <div class="recovery_legend" aria-hidden="true">
          <span>
            <i class="legend_cancer"></i> Cancer site
          </span>
          <span>
            <i class="legend_healthy">{"\u2713"}</i> Cleared
          </span>
          <span>
            <i class="legend_next"></i> Next
          </span>
        </div>
      </figure>
      <section class="recovery_progress" aria-label="Patient recovery progress">
        <h3>{rescued() ? "Patient rescued!" : "Clear the spread. Save the patient."}</h3>
        <p class="recovery_total">
          <strong>
            {cleared()} / {props.levels.length}
          </strong>{" "}
          sites cleared
        </p>
        <ul class="recovery_regions">
          <For each={regions()}>
            {(region) => (
              <li
                classList={{
                  is_current: region.stage === props.currentLevel.stage,
                  is_cleared: region.cleared === region.total,
                }}
                style={{ "--region-color": REGION_COLOR[region.stage] }}
              >
                <div class="recovery_region_label">
                  <strong>{region.name}</strong>
                  <span>
                    {region.stage === props.currentLevel.stage ? <em>Current</em> : null}
                    {region.cleared === region.total ? (
                      <b aria-label="Cleared">{"\u2713"} </b>
                    ) : null}
                    {region.cleared}/{region.total}
                  </span>
                </div>
                <progress
                  aria-label={`${region.name}: ${region.cleared} of ${region.total} sites cleared`}
                  value={region.cleared}
                  max={region.total}
                />
                <small>
                  {region.cleared === region.total
                    ? "Cleared"
                    : region.cleared > 0
                      ? "Clearing"
                      : "Active"}
                </small>
              </li>
            )}
          </For>
        </ul>
        <p class="recovery_location">
          <strong>Current location:</strong> {props.currentLevel.title} (
          {ORGAN_THEMES[props.currentLevel.stage].name})
        </p>
        <Show
          when={next()}
          fallback={<p class="recovery_destination">Every current campaign site is cleared.</p>}
        >
          {(level) => (
            <p class="recovery_destination">
              <strong>Next uncleared site:</strong> {level().title} (
              {ORGAN_THEMES[level().stage].name})
            </p>
          )}
        </Show>
      </section>
    </>
  );
}
