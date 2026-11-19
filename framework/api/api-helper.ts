import type { APIResponse } from "@playwright/test";

export async function expectStatus(
  response: APIResponse,
  expectedStatus: number,
): Promise<void> {
  const actualStatus = response.status();
  if (actualStatus !== expectedStatus) {
    const body = await response.text();
    throw new Error(
      `Expected HTTP ${expectedStatus}, received ${actualStatus}. Response: ${body}`,
    );
  }
}
