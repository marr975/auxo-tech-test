import { page } from '../hooks'
import { ContactsOptions, SideBar } from '../page-objects/side-bar'

/**
 * A function to click the Contacts button
 */
async function clickContacts(): Promise<void> {
  const sideBar = new SideBar(page)
  await sideBar.contacts.click()
}

/**
 * A function to open the Customers page
 */
export async function openCustomerPage(): Promise<void> {
  const contactsOptions = new ContactsOptions(page)
  await clickContacts()
  await contactsOptions.customers.click()
}

/**
 * A function to open the Vehicles page
 */
export async function openVehiclesPage(): Promise<void> {
  const contactsOptions = new ContactsOptions(page)
  await clickContacts()
  await contactsOptions.vehicles.click()
}
