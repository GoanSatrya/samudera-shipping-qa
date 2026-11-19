import { test as base, expect } from "@playwright/test";
import { getSelectedAppConfig } from "../../config/runtime.js";
import type { ResolvedAppConfig } from "../types/app-config.js";

export const test = base.extend<{ appConfig: ResolvedAppConfig }>({
  appConfig: async ({}, use) => {
    await use(getSelectedAppConfig());
  },
});

export { expect };
