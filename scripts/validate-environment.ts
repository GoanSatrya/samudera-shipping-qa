import { getEnvironmentName } from "../framework/configuration/runtime.js";

try {
  const environment = getEnvironmentName();
  console.log(`Environment valid: ${environment}`);
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
}
