import "dotenv/config";
import { APPLICATIONS } from "./applications/index.js";
import {
  isEnvironmentName,
  type EnvironmentName,
} from "./environment.schema.js";
import { APP_IDS, type AppId, type ResolvedAppConfig } from "../framework/types/app-config.js";

export function getAppId(value = process.env.APP_ID ?? "app-01"): AppId {
  if (!Object.hasOwn(APPLICATIONS, value)) {
    throw new Error(`Unknown APP_ID "${value}". Expected one of: ${APP_IDS.join(", ")}.`);
  }
  return value as AppId;
}

export function getEnvironmentName(
  value = process.env.TEST_ENV ?? "dev",
): EnvironmentName {
  if (!isEnvironmentName(value)) {
    throw new Error(`Unknown TEST_ENV "${value}". Expected one of: dev, sit, uat.`);
  }
  return value;
}

export function resolveAppConfig(
  appId: AppId,
  environment: EnvironmentName,
): ResolvedAppConfig {
  const app = APPLICATIONS[appId];
  const urlVariable = `${app.envPrefix}_${environment.toUpperCase()}_BASE_URL`;
  const baseURL = process.env[urlVariable]?.trim();

  if (baseURL) {
    let parsedUrl: URL;
    try {
      parsedUrl = new URL(baseURL);
    } catch {
      throw new Error(`${urlVariable} must be a valid absolute URL.`);
    }
    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      throw new Error(`${urlVariable} must use http or https.`);
    }
  }

  return { ...app, environment, baseURL };
}

export function getSelectedAppConfig(): ResolvedAppConfig {
  return resolveAppConfig(getAppId(), getEnvironmentName());
}

export function validateSelectedConfig(): ResolvedAppConfig {
  const app = getSelectedAppConfig();
  if (!app.baseURL) {
    const urlVariable = `${app.envPrefix}_${app.environment.toUpperCase()}_BASE_URL`;
    throw new Error(`${urlVariable} is required. Set it in your .env file before running tests.`);
  }
  return app;
}
