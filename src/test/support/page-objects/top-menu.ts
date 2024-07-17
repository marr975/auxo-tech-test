import { Locator, Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

export class TopMenu {
  readonly newBooking: Locator
  readonly notifications: Locator
  readonly avatar: Locator
  readonly logout: Locator

  constructor(page: Page) {
    this.newBooking = page.getByTestId('ut-top-menu-new-booking')
    this.notifications = page.getByTestId('ut-top-menu-notification')
    this.avatar = page.locator('div[data-testid="avatar"]')
    this.logout = page.getByTestId('ut-top-menu-logout')
  }
}

// export const topMenu = new TopMenu(page);