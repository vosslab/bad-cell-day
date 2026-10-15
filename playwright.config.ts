/// <reference types="node" />
import { defineConfig } from "@playwright/test";

const port_input = process.env["PW_PORT"] ?? "4173";
// ASVS 1.2.5 / 2.2.1: validate the port before interpolating it into a shell command.
if (!/^[0-9]+$/.test(port_input) || Number(port_input) < 1 || Number(port_input) > 65535) {
  throw new Error("PW_PORT must contain decimal digits representing a port from 1 to 65535");
}
const PORT = Number(port_input);

export default defineConfig({
  testDir: "tests/playwright",
  testIgnore: ["**/_temp*", "**/dist_*/**"],
  timeout: 30_000,
  fullyParallel: true,
  reporter: "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    headless: true,
  },
  webServer: {
    // ASVS 5.3.2 / 13.4.1: serve the trusted build root, excluding repository metadata.
    command: `bash -c 'source source_me.sh && exec python3 tests/playwright/helper_static_server.py --port ${PORT} --directory dist'`,
    url: `http://127.0.0.1:${PORT}/`,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
