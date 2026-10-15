# Browser transport investigation

Status: **DONE_WITH_CONCERNS** (2026-10-15). Evidence-only investigation complete; repair requires
manager decision, a fresh implementation owner, and fresh review. Product/source check: N/A; this
agent wrote only this report and `tests/_temp/browser_transport/`.

## Finding and recommendation

The recurring local Chromium failures reproduce against the unchanged frozen bundle. They occur
before an HTTP response while opening character SVGs. The Python 3.12 test server's inherited
listen backlog of 5 is the supported owning boundary: changing only that backlog to 128 prevents
the observed failures in both an instrumented equivalent and the unchanged permanent tests.
Returning to backlog 5 reproduces both reported error codes.

Recommend an explicit connection backlog in the repository-owned local test-server launcher,
called by `playwright.config.ts`. Preserve the two-worker behavior, HTTP assertions, and actual
assets. The smallest experimentally supported change is a stdlib server launcher that sets the
backlog before starting the existing `http.server` CLI. Review that launcher as test infrastructure;
do not patch game loading or filter console errors. A final implementation still needs acceptance
against unchanged permanent smoke, failed-request records for both pages, and server cleanup.

This is a strong controlled boundary diagnosis, not a packet-level proof of Darwin listen-queue
overflow or a guarantee that backlog 128 cures every transport fault. No repair was applied.

## Frozen identity and environment

- `dist/main.js`: `a7ef8689a1d043451722e2f1e24542842a1bd9bc3abad4789799b34368eef084`
- `dist/main.js.map`: `cf61676ce709ea0c239e73d23816afef22499b070fb52548924620c52b876018`
- macOS 27.0.1 / build 26A434, Node 26.11.1, Playwright 1.64.1.
- Actual headless Chromium: 156.0.8078.4, installed `chromium_headless_shell-1248`.
- Python: Homebrew 3.12.15; interpreter `/opt/homebrew/opt/python@3.12/bin/python3.12`.
- Server: existing dual-stack stdlib CLI, HTTP/1.0 responses, port 8150, served `dist/`.
- Existing config: `fullyParallel: true`; every pair used two workers and a fresh managed server.
- No proxy environment variables were set. Recorded system proxy settings contain exceptions and
  FTP passive mode, with no enabled proxy. Proxy settings were not changed between conditions.
- Python commands ran after `source source_me.sh`; no builds, installs, upgrades, or Git writes.

`tests/_temp/browser_transport/identity.json` records environment allowlist and SHA-256 identity
for the bundle, map, original config, smoke, runner, and Python environment script.

## Controlled results

All rows count trace network records, including failures in the second test that its assertions
do not report. `-1` means Playwright has no HTTP response, rather than an HTTP error status.

| Journey / server | Pairs | Pages | Pages with failed requests | HTTP 200 | No response |
| --- | ---: | ---: | ---: | ---: | ---: |
| Original permanent config / default 5 | 6 | 12 | 4 | 92 | 4 |
| Original permanent tests / minimal queue 5 | 6 | 12 | 4 | 92 | 4 |
| Original permanent tests / minimal queue 128 | 6 | 12 | 0 | 96 | 0 |
| Instrumented equivalent / queue 5 | 12 | 24 | 14 | 177 | 15 |
| Instrumented equivalent / queue 128 | 12 | 24 | 0 | 192 | 0 |

The experiment preserved 42 pairs, 84 page traces, and 672 network records. Across the queue-128
conditions, all 288 recorded requests returned HTTP 200. The finite control sample establishes
the observed effect; it does not establish a zero future failure rate.

The unchanged config had one failed test pair by exit status, but three pairs contained transport
failures. For example, `permanent/run_01` passes overall while its focus-test trace contains a lost
`cana.svg`; `permanent/run_05` passes overall while that page loses `gem.svg`. A green test summary
therefore cannot be used alone as transport acceptance.

The instrumented smoke copies the original public journey and preserves its assertions. It adds
listeners before navigation for `request`, `response`, `requestfinished`, `requestfailed`, console
locations, page errors, CDP request initiators, and `Network.loadingFailed`. Logs identify the
browser version, test, worker, UTC timestamp, and navigation/play phase. It does not retry requests.

### Exact failures

- Initial unchanged reproduction: `permanent/run_04`, both pages request
  `http://127.0.0.1:8150/assets/cana.svg`; trace status `-1`,
  `net::ERR_CONNECTION_RESET`, no response headers/body. The server logs no corresponding GET;
  other initial resources return 200. The guarded smoke fails; the focus test passes.
- `instrumented/queue_5_run_01` records both historical codes at that same URL. The first smoke
  receives `ERR_CONNECTION_RESET`; the focus test receives `ERR_SOCKET_NOT_CONNECTED`.
  CDP marks both as `type: Image`, `canceled: false`. The phase is `navigation`, before Play.
  Request timing has `requestStart: -1` and `responseStart: -1`; console location names the SVG.
- `gem.svg` also fails in original, minimal, and instrumented conditions. This is not an
  asset-specific failure. The module's lazy image construction explains the initial burst;
  no evidence establishes faulty image lifecycle code.
- Queue-5 minimal controls reproduce two `ERR_SOCKET_NOT_CONNECTED` and two
  `ERR_CONNECTION_RESET` requests. Instrumented queue-5 conditions reproduce two socket errors
  and thirteen resets. All failed URLs, codes, per-page statuses, and trace paths are enumerated
  in `tests/_temp/browser_transport/summary.json`.

## Commands and artifact custody

Historical commands below ran from the repository root. Helpers are now archived with `.txt`
suffixes; these are records of execution, not commands runnable without restoring those files.

```bash
source source_me.sh
PW_PORT=8150 ./run_playwright_tests.sh --trace=on \
  --output=tests/_temp/browser_transport/permanent/run_01

DIAGNOSTIC_BACKLOG=5 PW_PORT=8150 DEBUG=pw:browser npx playwright test \
  --config=tests/_temp/browser_transport/instrumented/playwright.config.mjs \
  --output=tests/_temp/browser_transport/instrumented/queue_5_run_01

DIAGNOSTIC_BACKLOG=128 PW_PORT=8150 DEBUG=pw:browser npx playwright test \
  --config=tests/_temp/browser_transport/instrumented/permanent.config.mjs \
  --output=tests/_temp/browser_transport/permanent/minimal_queue_128_run_01
```

- Original config runs are `permanent/run_01` through `run_06`, each with its own `.log` and traces.
- Instrumented queues are interleaved 5 then 128, runs `01` through `12`.
- Minimal original-test controls reverse the order: 128 then 5, runs `01` through `06`.
- `instrumented/smoke.spec.mjs.txt`, both config archives, and the Python helper archives preserve
  the temporary harnesses. `helper_queue.py.txt` is the minimal queue-only comparison.
- The first ten diagnostic pairs per queue use `helper_server_initial.py.txt`. Its stdout
  diagnostics were not forwarded by Playwright, and patching the imported HTTP handler did not
  affect the separate `runpy` module instance. Its shared `socketserver` backlog patch did apply.
  This limitation does not affect browser request/CDP records or default access logs. The final
  two pairs per queue use `helper_server.py.txt`, remove the duplicate HTTP-module import, and emit
  server PID/backlog/accepted-socket records to stderr. Both conditions use the same logger version
  within each pair. The independent minimal comparison avoids this logger entirely.
- All helper `.mjs` files passed `node --check`. No TypeScript helpers were created; the requested
  helper `tsc` check is N/A. No new permanent tests are justified for this environment tuning.
- `artifact_sha256.json` inventories every retained evidence file after helper archival.

## Cleanup and remaining limits

The sandbox attempt fails Chromium startup with macOS MachPortRendezvous `Permission denied (1100)`.
It is preserved separately in `permanent/sandbox_attempt.log` and its trace output; it is not an
application transport failure. Chromium execution then used the narrowly approved escalation.

Every runner returned and closed its managed handles. DEBUG logs identify 74 browser PIDs,
including the two sandbox failures, and show process-exit records for all 74; all are absent at
handoff. The final four servers expose PIDs 20645, 20815, 20891, and 20968, also all absent.
`cleanup.json` records those checks. The initial six successful-launch pairs did not enable DEBUG,
so their individual browser/server PIDs are not recoverable; their runner completion and final
port cleanup are the available proof. The final `lsof` check has no port-8150 listener (exit 1),
recorded in `port_8150_cleanup.txt`. No process was killed by name or inferred ownership; port
8127 and unknown processes were untouched.

The server was ready before the browsers started, and the failures occurred after index/CSS/JS
responses. The effect persists with HTTP/1.0 unchanged, across both error codes, and across assets.
These observations weigh against startup readiness, a particular SVG, or a game-state transition
as the owning fault. Packet capture and kernel overflow counters were not collected, so that
lower-level mechanism remains an inference. Hosted deployment behavior and other operating
systems are untested. The supported next decision is a narrow local test-server repair followed
by fresh review and acceptance, not a claim that this investigation fixed the application.
