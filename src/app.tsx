import { For, Show, onCleanup, onMount } from "solid-js";
import type { JSX } from "solid-js";
import { CHARACTER_ART, character_image } from "./character_art";
import { create_runtime } from "./runtime";
import { is_level_unlocked } from "./save_load";
import { create_ui_state, format_elapsed } from "./ui_state";
import type { LevelDefinition } from "./types/level";

function TitleScreen(props: { onPlay: () => void }): JSX.Element {
  return (
    <div id="overlay" class="intro">
      <div class="intro_copy">
        <p class="eyebrow">
          <span></span> A MICROSCOPIC CO-OP ADVENTURE
        </p>
        <h2 aria-label="Isp &amp; Pac: Bad Cell Day">
          <span class="title_isp">Isp</span> <span class="title_amp">&amp;</span>{" "}
          <span class="title_pac">Pac</span>
          <small>BAD CELL DAY</small>
        </h2>
        <p class="intro_lead">
          Small heroes.
          <br />
          Big cellular trouble.
        </p>
        <p class="intro_description">
          Team up, dodge trouble, and find a way out.
          <br />
          Because even a bad cell day is better together.
        </p>
        <button id="play" onClick={props.onPlay} class="primary_button" type="button">
          Play <span aria-hidden="true">&#8594;</span>
        </button>
        <p class="play_note">2 players &middot; 1 keyboard &middot; teamwork required</p>
      </div>
      <div class="duo_art" aria-hidden="true">
        <span class="art_spark spark_one">+</span>
        <span class="art_spark spark_two">+</span>
        <div class="art_orbit"></div>
        <div class="art_shadow"></div>
        <img class="hero hero_isp" src={CHARACTER_ART.isp} alt="" />
        <img class="hero hero_pac" src={CHARACTER_ART.pac} alt="" />
        <span class="hero_label label_isp">
          ISP <span>&#8599;</span>
        </span>
        <span class="hero_label label_pac">
          <span>&#8598;</span> PAC
        </span>
        <span class="team_sticker">
          BETTER
          <br />
          <b>TOGETHER!</b>
        </span>
      </div>
    </div>
  );
}
function Hud(props: { ui: ReturnType<typeof create_ui_state> }): JSX.Element {
  return (
    <div class="mission_bar">
      <div class="mission_title">
        <span class="chapter_chip">
          LEVEL{" "}
          <output id="level_number">
            {String(props.ui.levels().indexOf(props.ui.level()) + 1).padStart(2, "0")}
          </output>
        </span>
        <div>
          <h1 id="level_title">{props.ui.level().title}</h1>
          <p id="level_subtitle">{props.ui.level().subtitle}</p>
        </div>
      </div>
      <div class="scoreboard" aria-label="Level statistics">
        <div>
          <span>TIME</span>
          <output id="time">{format_elapsed(props.ui.elapsedSeconds())}</output>
        </div>
        <div>
          <span>RETRIES</span>
          <output id="deaths">{props.ui.retries()}</output>
        </div>
        <div>
          <span>SPARKS</span>
          <output id="collectibles">
            {props.ui.collected()} / {props.ui.level().collectibles.length}
          </output>
        </div>
      </div>
    </div>
  );
}
function PausePanel(props: { onResume: () => void }): JSX.Element {
  return (
    <section id="pause_panel" class="stage_panel" aria-labelledby="pause_title">
      <p class="eyebrow">TAKE A BREATHER</p>
      <h2 id="pause_title">Cell you in a minute.</h2>
      <p>Your little team is right where you left it.</p>
      <button id="resume" onClick={props.onResume} class="primary_button" type="button">
        Resume adventure
      </button>
    </section>
  );
}
function LevelSelection(props: {
  ui: ReturnType<typeof create_ui_state>;
  onSelect: (level: LevelDefinition) => void;
  ref: (element: HTMLDialogElement) => void;
  onClose: () => void;
}): JSX.Element {
  return (
    <dialog id="level_list" ref={props.ref} aria-labelledby="levels_title">
      <div class="dialog_heading">
        <div>
          <p class="eyebrow">YOUR ESCAPE ROUTE</p>
          <h2 id="levels_title">Pick an adventure</h2>
        </div>
        <button
          id="close_levels"
          onClick={props.onClose}
          type="button"
          aria-label="Close level selection"
        >
          &#215;
        </button>
      </div>
      <div id="level_buttons" class="level_buttons">
        <For each={props.ui.levels()}>
          {(level, index) => (
            <button
              id={index() === 0 ? "select_demo" : undefined}
              type="button"
              disabled={!is_level_unlocked(index(), props.ui.levels(), props.ui.progress())}
              onClick={() => props.onSelect(level)}
            >
              <span>{String(index() + 1).padStart(2, "0")}</span>
              <b>{level.title}</b>
              <small>
                {props.ui.progress().completed.some((result) => result.levelId === level.id)
                  ? "Replay"
                  : is_level_unlocked(index(), props.ui.levels(), props.ui.progress())
                    ? "Ready"
                    : "Locked"}
              </small>
            </button>
          )}
        </For>
      </div>
      <p class="dialog_note">Clear each adventure to unlock the next.</p>
    </dialog>
  );
}

export function App(): JSX.Element {
  const ui = create_ui_state();
  let canvas: HTMLCanvasElement | undefined;
  let level_dialog: HTMLDialogElement | undefined;
  let runtime: ReturnType<typeof create_runtime> | undefined;

  function start_level(level: LevelDefinition): void {
    level_dialog?.close();
    runtime?.start_level(level);
  }
  function start_game(): void {
    start_level(ui.level());
  }
  function set_paused(value: boolean): void {
    runtime?.set_paused(value);
  }
  function close_levels(): void {
    level_dialog?.close();
    if (ui.paused()) document.getElementById("resume")?.focus();
    else if (ui.complete()) document.getElementById("replay")?.focus();
    else document.getElementById("play")?.focus();
  }
  function open_levels(): void {
    runtime?.set_paused(true);
    level_dialog?.showModal();
  }
  onMount(() => {
    if (!canvas) throw new Error("Game canvas is required");
    character_image("isp");
    character_image("pac");
    runtime = create_runtime(canvas, ui);
    level_dialog?.addEventListener("close", dialog_closed);
  });
  function dialog_closed(): void {
    runtime?.clear_input();
  }
  onCleanup(() => {
    runtime?.dispose();
    level_dialog?.removeEventListener("close", dialog_closed);
  });
  return (
    <>
      {" "}
      <main class="app">
        <header class="masthead">
          <a class="brand" href="./" aria-label="Isp and Pac: Bad Cell Day home">
            <span class="brand_faces" aria-hidden="true">
              <img src={CHARACTER_ART.isp} alt="" />
              <img src={CHARACTER_ART.pac} alt="" />
            </span>
            <span>
              Isp <b>&amp;</b> Pac<small>BAD CELL DAY</small>
            </span>
          </a>
          <p class="game_tagline">
            Two tiny heroes. <strong>One big escape.</strong>
          </p>
          <span class="co_op_badge">
            <span aria-hidden="true">2</span> PLAYER CO-OP
          </span>
        </header>

        <section class="game_frame" aria-label="Cooperative cell adventure">
          <Hud ui={ui} />
          <div class="stage" aria-label="Adventure">
            <canvas
              id="game"
              ref={(element) => {
                canvas = element;
              }}
              width="1100"
              height="620"
              tabindex="0"
              aria-label="Isp and Pac game world"
              hidden={!ui.started()}
            >
              Help Isp and Pac reach their matching exits together using A, W, D and the arrow keys.
            </canvas>
            <div class="cell_decoration" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </div>
            <Show when={!ui.started()}>
              <TitleScreen onPlay={start_game} />
            </Show>
            <Show when={ui.paused()}>
              <PausePanel onResume={() => set_paused(false)} />
            </Show>
            <Show when={ui.complete()}>
              <section id="complete_panel" class="stage_panel" aria-labelledby="complete_title">
                <p class="eyebrow">BETTER TOGETHER</p>
                <h2 id="complete_title">
                  {ui.levels().indexOf(ui.level()) + 1 < ui.levels().length
                    ? "Two exits. One brilliant team."
                    : "You saved the cell day!"}
                </h2>
                <p>
                  {format_elapsed(ui.elapsedSeconds())} &middot; {ui.retries()} retries &middot;{" "}
                  {ui.collected()} / {ui.level().collectibles.length} sparks
                </p>
                <Show
                  when={ui.levels().indexOf(ui.level()) + 1 < ui.levels().length}
                  fallback={<p>Every adventure complete. Your tiny heroes earned a big rest.</p>}
                >
                  <button
                    id="next_level"
                    class="primary_button"
                    type="button"
                    onClick={() => runtime?.next_level()}
                  >
                    Next level
                  </button>
                </Show>
                <button id="replay" type="button" onClick={start_game}>
                  Replay level
                </button>
              </section>
            </Show>
            <div class="stage_corner" aria-hidden="true">
              INSIDE THE CELL / OUTSIDE THE ORDINARY
            </div>
          </div>
          <div class="game_bottom_bar">
            <p id="status" role="status" aria-label="Game status" aria-live="polite">
              {ui.status()}
            </p>
            <nav class="toolbar" aria-label="Game controls">
              <button
                id="pause"
                type="button"
                disabled={!ui.started() || ui.complete()}
                aria-pressed={ui.paused()}
                onClick={() => set_paused(!ui.paused())}
              >
                <span aria-hidden="true">&#8545;</span> Pause
              </button>
              <button
                id="restart"
                type="button"
                disabled={!ui.started() || ui.complete()}
                onClick={() => runtime?.retry()}
              >
                <span aria-hidden="true">&#8635;</span> Restart
              </button>
              <button id="levels" type="button" onClick={open_levels}>
                <span aria-hidden="true">&#9638;</span> Levels
              </button>
              <button
                id="hint"
                type="button"
                onClick={() => {
                  runtime?.clear_input();
                  ui.setHintVisible(!ui.hintVisible());
                  if (ui.started() && !ui.paused() && !ui.complete()) canvas?.focus();
                }}
                aria-expanded={ui.hintVisible()}
                aria-controls="hint_text"
              >
                <span aria-hidden="true">?</span> Hint
              </button>
            </nav>
          </div>
        </section>

        <section class="team_controls" aria-label="Meet your team and keyboard controls">
          <article class="player_card isp_card">
            <img class="mini_hero mini_isp" src={CHARACTER_ART.isp} alt="" />
            <div class="player_description">
              <h2>
                Isp <span>THE QUICK ONE</span>
              </h2>
              <p>
                Stops moving machinery on blue pads. <b>Automatically.</b>
              </p>
            </div>
            <div class="key_controls" aria-label="Isp controls: A left, W jump, D right">
              <div>
                <kbd>W</kbd>
                <small>JUMP</small>
              </div>
              <div class="key_row">
                <kbd>A</kbd>
                <kbd>D</kbd>
              </div>
              <small>MOVE</small>
            </div>
          </article>
          <div class="team_connector" aria-hidden="true">
            +
          </div>
          <article class="player_card pac_card">
            <img class="mini_hero mini_pac" src={CHARACTER_ART.pac} alt="" />
            <div class="player_description">
              <h2>
                Pac <span>THE STEADY ONE</span>
              </h2>
              <p>
                Steadies shaky platforms on orange pads. <b>Automatically.</b>
              </p>
            </div>
            <div
              class="key_controls"
              aria-label="Pac controls: left arrow left, up arrow jump, right arrow right"
            >
              <div>
                <kbd>&#8593;</kbd>
                <small>JUMP</small>
              </div>
              <div class="key_row">
                <kbd>&#8592;</kbd>
                <kbd>&#8594;</kbd>
              </div>
              <small>MOVE</small>
            </div>
          </article>
        </section>
        <aside class="hint_strip" aria-label="Teamwork tip">
          <span class="tip_icon" aria-hidden="true">
            !
          </span>
          <p id="hint_text" hidden={!ui.hintVisible()}>
            {ui.level().hint}
          </p>
          <p id="default_tip" hidden={ui.hintVisible()}>
            <b>A little teamwork goes a long way.</b> Reach both matching exits to finish a level.
          </p>
          <span class="keyboard_note">SHARED KEYBOARD RECOMMENDED</span>
        </aside>
        <Show when={ui.storageNotice()}>
          <p role="status">{ui.storageNotice()}</p>
        </Show>
        <footer>
          <span>A tiny adventure with a lot of heart.</span>
          <span>Move together. Make it out together.</span>
        </footer>
      </main>
      <LevelSelection
        ui={ui}
        onSelect={start_level}
        onClose={close_levels}
        ref={(element) => {
          level_dialog = element;
        }}
      />
    </>
  );
}
