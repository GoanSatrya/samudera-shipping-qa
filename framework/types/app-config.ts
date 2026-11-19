import type { EnvironmentName } from "../configuration/environment.schema.js";

export const APP_IDS = [
  "app-01",
  "app-02",
  "app-03",
  "app-04",
  "app-05",
  "app-06",
] as const;

export type AppId = (typeof APP_IDS)[number];

export interface AppConfig {
  id: AppId;
  displayName: string;
  envPrefix: string;
}

export interface ResolvedAppConfig extends AppConfig {
  environment: EnvironmentName;
  baseURL?: string;
}
