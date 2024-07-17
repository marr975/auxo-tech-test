import { Locator, Page, selectors } from '@playwright/test'

selectors.setTestIdAttribute('id')

export class LoginPage {
  readonly email: Locator
  readonly password: Locator
  readonly login: Locator

  constructor(page: Page) {
    this.email = page.getByTestId('username')
    this.password = page.getByTestId('password')
    this.login = page.locator("button[value='default']")
  }
}

// export const loginPage = new LoginPage(page)
