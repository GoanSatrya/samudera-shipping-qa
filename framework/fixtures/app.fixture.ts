import { test as base, expect } from "./base.fixture.js";

export const test = base.extend<{ openApp: () => Promise<void> }>({
  openApp: async ({ page, appConfig }, use) => {
    await use(async () => {
      if (!appConfig.baseURL) {
        throw new Error("Set the selected application's base URL in .env before opening it.");
      }
      await page.goto(appConfig.baseURL);
    });
  },
});

export { expect };
