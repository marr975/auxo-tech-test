import { Locator, Page } from "@playwright/test";
import { page } from "../hooks";

export class AddCustomerPage {
  readonly company: Locator
  readonly firstName: Locator
  readonly lastName: Locator
  readonly mobileNumber: Locator
  readonly phoneNumber: Locator
  readonly emailAddress: Locator
  readonly cancel: Locator
  readonly next: Locator

  constructor(page: Page) {
    this.company = page.locator('button[name="customer.isBusiness"]')
    this.firstName = page.locator('input[name="customer.firstName"]')
    this.lastName = page.locator('input[name="customer.lastName"]')
    this.mobileNumber = page.locator('input[name="customer.mobileNumber"]')
    this.phoneNumber = page.locator('input[name="customer.phoneNumber"]')
    this.emailAddress = page.locator('input[name="customer.email"]')
    this.cancel = page.getByText('Cancel')
    this.next = page.getByText('Next')
  }
}

export const addCustomerPage = new AddCustomerPage(page);