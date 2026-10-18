import { For, Show, createMemo } from "solid-js";
import type { JSX } from "solid-js";
import type { LevelDefinition } from "./types/level";
import type { SavedProgress } from "./types/persistence";
import type { OrganStage } from "./types/anatomy";
import { ORGAN_THEMES } from "./anatomy";

type PatientMapProps = {
  readonly levels: readonly LevelDefinition[];
  readonly progress: SavedProgress;
  readonly currentLevel: LevelDefinition;
};

const MAP_ART = "./assets/patient_body_map.svg";
const ORGAN_ANCHORS: Readonly<Record<OrganStage, Readonly<{ left: string; top: string }>>> = {
  brain: { left: "50%", top: "12.1%" },
  lungs: { left: "50%", top: "32.2%" },
  liver: { left: "37.5%", top: "44.7%" },
  intestine: { left: "50%", top: "57.2%" },
  tumor: { left: "68.3%", top: "54.6%" },
  marrow: { left: "65%", top: "78.3%" },
};

export function PatientMap(props: PatientMapProps): JSX.Element {
  const completedIds = createMemo(
    () => new Set(props.progress.completed.map((entry) => entry.levelId)),
  );
  const clearedCount = createMemo(
    () =>
      new Set(props.levels.filter((level) => completedIds().has(level.id)).map((level) => level.id))
        .size,
  );
  const frontier = createMemo(() => props.levels.find((level) => !completedIds().has(level.id)));
  const currentIsCampaign = createMemo(() =>
    props.levels.some((level) => level.id === props.currentLevel.id),
  );
  const regions = createMemo(() => {
    const stages = [...new Set(props.levels.map((level) => level.stage))];
    return stages.map((stage) => {
      const levels = props.levels.filter((level) => level.stage === stage);
      const cleared = levels.filter((level) => completedIds().has(level.id)).length;
      const status = cleared === levels.length ? "cleared" : cleared === 0 ? "active" : "clearing";
      const current = currentIsCampaign() && props.currentLevel.stage === stage;
      const next = frontier()?.stage === stage;
      return { stage, levels, cleared, status, current, next, theme: ORGAN_THEMES[stage] };
    });
  });
  const rescued = createMemo(
    () => clearedCount() === props.levels.length && props.levels.length > 0,
  );

  return (
    <section class="patient_map" aria-label="Patient rescue campaign progress">
      <div class="patient_map_intro">
        <p class="patient_map_kicker">THE BODY IS THE BATTLEFIELD</p>
        <h3>{rescued() ? "Patient rescued!" : "Clear the spread. Save the patient."}</h3>
        <p class="patient_map_total">
          <strong>
            {clearedCount()} / {props.levels.length}
          </strong>{" "}
          sites cleared
        </p>
      </div>
      <div class="patient_map_visual">
        <img class="patient_map_art" src={MAP_ART} alt="" aria-hidden="true" />
        <For each={regions()}>
          {(region) => (
            <span
              class="patient_map_badge"
              classList={{
                is_cleared: region.status === "cleared",
                is_current: region.current,
                is_frontier: region.next,
              }}
              style={ORGAN_ANCHORS[region.stage]}
              aria-hidden="true"
            >
              <span class="patient_map_symbol">
                {region.status === "cleared" ? "\u2713" : region.next ? "\u2192" : "\u25CB"}
              </span>
            </span>
          )}
        </For>
      </div>
      <div class="patient_map_legend" aria-hidden="true">
        <span>
          <b>{"\u2713"}</b> Cleared
        </span>
        <span>
          <b>{"\u2192"}</b> Next uncleared
        </span>
        <span>
          <b>{"\u25CB"}</b> Remaining
        </span>
        <span>
          <i></i> Current region
        </span>
      </div>
      <p class="patient_map_frontier">
        <Show when={frontier()} fallback={<strong>Every current campaign site is cleared.</strong>}>
          {(nextLevel) => (
            <>
              <strong>Next uncleared site:</strong> {nextLevel().title}{" "}
              <span>({ORGAN_THEMES[nextLevel().stage].name})</span>
            </>
          )}
        </Show>
      </p>
      <p class="patient_map_current">
        <strong>Current location:</strong>{" "}
        {currentIsCampaign() ? props.currentLevel.title : "Campaign map"}
        {currentIsCampaign() ? <span> ({ORGAN_THEMES[props.currentLevel.stage].name})</span> : null}
      </p>
      <ul class="patient_map_regions" aria-label="Organ region progress">
        <For each={regions()}>
          {(region) => (
            <li>
              <span class="patient_map_region_name">
                {region.current ? <strong>Current: </strong> : null}
                {region.theme.name}
              </span>
              <span>
                {region.cleared} / {region.levels.length} sites &middot; {region.status}
              </span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
