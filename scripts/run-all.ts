import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import "dotenv/config";
import { APP_IDS } from "../framework/types/app-config.js";

const cliPath = resolve("node_modules", "@playwright", "test", "cli.js");
const failedApps: string[] = [];

for (const appId of APP_IDS) {
  console.log(`\nRunning tests for ${appId}...`);
  const result = spawnSync(
    process.execPath,
    [cliPath, "test"],
    {
      cwd: process.cwd(),
      env: { ...process.env, APP_ID: appId },
      stdio: "inherit",
    },
  );
  if (result.error) {
    console.error(result.error.message);
    failedApps.push(appId);
  } else if (result.status !== 0) {
    failedApps.push(appId);
  }
}

if (failedApps.length > 0) {
  console.error(`\nTest runs failed for: ${failedApps.join(", ")}`);
  process.exitCode = 1;
} else {
  console.log("\nAll application test runs passed.");
}
