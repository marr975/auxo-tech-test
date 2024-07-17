import { Page } from "@playwright/test";
import { LoginPage } from "../page-objects/login-page";

/**
 * A function to login to the SIMON web app
 * @param param0 { page: Page; email: string; password: string; }
 */
export async function userLogin({ page, email, password }: { page: Page, email: string; password: string; }): Promise<void> {
  const loginPage = new LoginPage(page);
  await loginPage.email.fill(email)
  await loginPage.password.fill(password)
  await loginPage.login.click()
  await page.waitForLoadState("load")
}