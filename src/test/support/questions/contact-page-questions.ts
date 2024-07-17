import { expect } from '@playwright/test'
import { ContactsPage } from '../page-objects/contacts-page'
import { page } from '../hooks'

/**
 * A function to test if any search results are present onthe Contacts page
 */
export async function searchResultsPresent(): Promise<void> {
  const contactsPage = new ContactsPage(page)
  expect(contactsPage.searchResults.first()).toBeVisible()
}

/**
 * A function to check the text of the pagination on the Contacts page
 */
export async function paginationTextIncludes(text: string): Promise<void> {
  const contactsPage = new ContactsPage(page)
  expect(contactsPage.pagination).toContainText(text)
}
