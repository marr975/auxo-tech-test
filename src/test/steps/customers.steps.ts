import { Then, When } from '@cucumber/cucumber'
import { openCustomerPage } from '../support/tasks/side-bar-tasks'
import { paginationTextIncludes, searchResultsPresent } from '../support/questions/contact-page-questions'

When('the administrator opens the Customers page', async function () {
  await openCustomerPage()
})

Then('at least one customer should be displayed', async function () {
  await searchResultsPresent()
  await paginationTextIncludes('50')
})
