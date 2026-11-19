import { rm } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const artifactDirectories = [
  "coverage",
  "dist",
  "playwright-report",
  "test-results",
];

try {
  for (const directory of artifactDirectories) {
    await rm(resolve(projectRoot, directory), { recursive: true, force: true });
  }
  console.log(`Cleaned generated artifacts: ${artifactDirectories.join(", ")}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
