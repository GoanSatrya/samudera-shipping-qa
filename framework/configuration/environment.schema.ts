export const ENVIRONMENT_NAMES = ["dev", "sit", "uat"] as const;

export type EnvironmentName = (typeof ENVIRONMENT_NAMES)[number];

export interface EnvironmentConfig {
  name: EnvironmentName;
  label: string;
}

export function isEnvironmentName(value: string): value is EnvironmentName {
  return ENVIRONMENT_NAMES.some((name) => name === value);
}
