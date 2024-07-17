import { Page } from '@playwright/test'
import { TopMenu } from '../page-objects/top-menu'

/**
 * A function to logout of the application
 * @param param0 { page: Page }
 */
export async function logout({ page }: { page: Page }): Promise<void> {
  const topMenu = new TopMenu(page)
  await topMenu.avatar.click()
  await topMenu.logout.click()
}
