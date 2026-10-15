# Solid UI model

The browser runs this application entirely on the client. Solid owns the title screen,
HUD, hints, pause overlay, and level selection. Canvas owns drawing; the simulation
state remains a plain mutable object outside Solid. There are no server functions,
routes, resources, or serialization boundaries.

## Data and updates

`src/ui_state.ts` owns scalar signals for started, paused, hint visibility, status,
whole elapsed seconds, retries, sparks collected, selected level, level progress,
completion, and storage notices. The selected level and list are immutable authored
data references. There is no reactive simulation tree or per-frame object replacement.

`update_hud` projects simulation values into three scalar signals. Signal equality
suppresses unchanged values, so the clock text changes once per elapsed second,
retries change on recovery, and sparks change on collection. Position changes only
reach the imperative canvas renderer. Batched scalar updates publish together.
The time label is a pure formatted signal read rather than state derived in an effect.

## Components and lifecycle

`src/main.ts` mounts `App` into the static HTML mount point. Component functions run
once and reactive reads stay in JSX or callbacks. Props are read at their use sites.
`Hud`, `TitleScreen`, `PausePanel`, and `LevelSelection` preserve the existing CSS
classes and accessible controls. `Show` owns conditional overlays and `For` owns the
identity-keyed level buttons. The canvas remains mounted through every UI change.

`src/runtime.ts` owns the canvas context, keyboard input, and animation-frame loop.
`App` initializes the runtime in `onMount` and disposes it in `onCleanup`; it never
returns cleanup from `onMount`. Modal level selection uses the native dialog focus
trap. Play and resume restore focus to the canvas; pause focuses Resume.

`create_ui_state` exposes narrow signal setters plus `update_hud` so the runtime can
publish outcomes without making physics reactive.

## Compiler and build

The user selected SolidJS. Its DOM JSX compiler is required for fine-grained updates;
esbuild's generic JSX transform does not supply that behavior. `devel/build_site.mjs`
uses esbuild's supported JavaScript plugin API with `esbuild-plugin-solid`, bundling
Solid locally into the browser ESM artifact. No CDN dependency is needed.

The canonical `tsconfig.json` has the minimal approved local framework exception:
`jsx: preserve`, `jsxImportSource: solid-js`, and TSX inclusion. All existing strict
compiler settings remain enabled. This lets the canonical typecheck see imported
Solid components without maintaining a second overlapping project configuration.
`build_github_pages.sh` still cleans only `dist/`, checks types, writes `main.js`
and its source map, copies relative HTML/CSS assets, and writes `.nojekyll`.
