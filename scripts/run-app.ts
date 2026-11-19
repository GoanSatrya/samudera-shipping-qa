import { spawnSync } from "node:child_process";
import { resolve } from "node:path";
import "dotenv/config";
import { getAppId } from "../config/runtime.js";

try {
  const appId = getAppId(process.argv[2]);
  const cliPath = resolve("node_modules", "@playwright", "test", "cli.js");
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
    throw result.error;
  }
  process.exitCode = result.status ?? 1;
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
