import type { BrowserContext, Page } from "@playwright/test";

export interface SsoAuthenticator {
  authenticate(page: Page): Promise<void>;
  saveSession(context: BrowserContext, filePath: string): Promise<void>;
}
