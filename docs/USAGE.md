# Usage

## Build and preview

From the repository root, build the GitHub Pages output and serve it locally:

```sh
./build_github_pages.sh
./run_web_server.sh
```

The server script builds `dist/` and serves that output on a local port. Stop it
with Ctrl+C. `build_github_pages.sh` creates the static `dist/` artifact for GitHub
Pages. Building and serving locally do not publish or deploy the site.

## Development checks

Run the repository checks and production build with:

```sh
./check_codebase.sh
./build_github_pages.sh
```

Run the Playwright browser tests against a fresh build with:

```sh
./run_playwright_tests.sh --build
```

## Controls

The game uses a local keyboard for both players. Isp moves with A and D and jumps
with W; Pac moves with the arrow keys and jumps with Up. Both players can press R
to restart or Escape to pause. Stabilization pads stop a character automatically.

Blue passes Isp, orange passes Pac, and purple passes both. A rescue switch latches
so the partner can follow. Heavy objects require the characters to push together
and can be stacked. Completing levels unlocks later levels; progress is saved in
the browser's local storage. The desktop game is designed for keyboard play.
