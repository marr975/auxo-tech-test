import { Page } from "@playwright/test";

/**
 * A function to open the SIMON web application
 * @param param0 { page: Page }
 */
export async function openSimon({ page }: { page: Page; }): Promise<void> {
  await page.goto(process.env.URL as string)
}