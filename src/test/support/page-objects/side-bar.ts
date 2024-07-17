import { Locator, Page, selectors } from '@playwright/test'
import { page } from '../hooks'

selectors.setTestIdAttribute('id')

export class SideBar {
  readonly dashboard: Locator
  readonly calendar: Locator
  readonly jobManagement: Locator
  readonly contacts: Locator
  readonly addOns: Locator
  readonly settings: Locator

  constructor(page: Page) {
    this.dashboard = page.getByTestId('ut-side-menu-dashboard')
    this.calendar = page.getByTestId('ut-side-menu-group-job-management')
    this.jobManagement = page.getByTestId('ut-side-menu-group-contacts')
    this.contacts = page.getByTestId('ut-side-menu-group-contacts')
    this.addOns = page.getByTestId('ut-side-menu-integration')
    this.settings = page.getByTestId('ut-side-menu-group-settings')
  }
}

// export const sideBar = new SideBar(page)

export class CalendarOptions {
  readonly dailyView: Locator
  readonly weeklyView: Locator
  readonly onlineBookingScheduler: Locator

  constructor(page: Page) {
    this.dailyView = page.getByTestId('ut-side-menu-calendar-daily-view')
    this.weeklyView = page.getByTestId('ut-side-menu-diary')
    this.onlineBookingScheduler = page.getByTestId(
      'ut-side-menu-calendar-online-booking-scheduler'
    )
  }
}

// export const calendarOptions = new CalendarOptions(page)

export class JobManagementOptions {
  readonly workboard: Locator
  readonly jobs: Locator
  readonly invoices: Locator
  readonly reminders: Locator

  constructor(page: Page) {
    this.workboard = page.getByTestId('ut-side-menu-workboard')
    this.jobs = page.getByTestId('ut-side-menu-job-list')
    this.invoices = page.getByTestId('ut-side-menu-invoice-list')
    this.reminders = page.getByTestId('ut-side-menu-reminder-list')
  }
}

// export const jobManagementOptions = new JobManagementOptions(page);

export class ContactsOptions {
  readonly customers: Locator
  readonly vehicles: Locator

  constructor(page: Page) {
    this.customers = page.getByTestId('ut-side-menu-customer-list')
    this.vehicles = page.getByTestId('ut-side-menu-vehicle-list')
  }
}

// export const contactsOptions = new ContactsOptions(page)

export class SettingsOptions {
  readonly staff: Locator
  readonly systemConfiguration: Locator
  readonly communication: Locator
  readonly onlineBooking: Locator

  constructor(page: Page) {
    this.staff = page.getByTestId('ut-side-menu-staff-list')
    this.systemConfiguration = page.getByTestId(
      'ut-side-menu-system-configuration'
    )
    this.communication = page.locator('a:has-text("Communication")]')
    this.onlineBooking = page.getByText('Online Booking')
  }
}

// export const settingsOptions = new SettingsOptions(page);