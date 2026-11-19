import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import type { BrowserContext } from "@playwright/test";

export function getStorageStatePath(appId: string, environment: string): string {
  return resolve("playwright", ".auth", `${appId}-${environment}.json`);
}

export async function saveStorageState(
  context: BrowserContext,
  filePath: string,
): Promise<void> {
  await mkdir(dirname(filePath), { recursive: true });
  await context.storageState({ path: filePath });
}
