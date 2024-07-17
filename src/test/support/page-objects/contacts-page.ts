import { Locator, Page, selectors } from "@playwright/test";

selectors.setTestIdAttribute('id')

export class ContactsPage {
  readonly search: Locator
  readonly exportToCsv: Locator
  readonly columns: Locator
  readonly newEntity: Locator
  readonly searchResults: Locator
  readonly numberOfResults: Locator
  readonly pagination: Locator

  constructor(page: Page) {
    this.search = page.getByTestId('ut-list-search-input')
    this.exportToCsv = page.getByText('Export to CSV')
    this.columns = page.getByText('Columns')
    this.newEntity = page.getByTestId('ut-list-add-entity-button')
    this.searchResults = page.locator('.ant-table-row-level-0')
    this.numberOfResults = page.locator('.ant-pagination-total-text')
    this.pagination = page.locator('.ant-select-selection-item')
  }
}