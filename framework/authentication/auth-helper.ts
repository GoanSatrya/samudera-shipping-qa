import type { Page } from "@playwright/test";

export async function isAuthenticated(
  page: Page,
  authenticatedSelector: string,
): Promise<boolean> {
  return page.locator(authenticatedSelector).isVisible();
}
