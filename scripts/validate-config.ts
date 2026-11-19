import { validateSelectedConfig } from "../framework/configuration/runtime.js";

try {
  const app = validateSelectedConfig();
  console.log(`Configuration valid: ${app.id} (${app.environment}) -> ${app.baseURL}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
