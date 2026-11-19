import "dotenv/config";
import { defineConfig, devices } from "@playwright/test";
import { getSelectedAppConfig } from "./framework/configuration/runtime.js";

const app = getSelectedAppConfig();

export default defineConfig({
  testDir: ".",
  testMatch: [
    `apps/${app.id}/tests/**/*.spec.ts`,
    "tests/shared/**/*.spec.ts",
  ],
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL: app.baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
  },
});
