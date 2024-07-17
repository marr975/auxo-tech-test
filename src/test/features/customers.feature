Feature: Cutomers

  In order to administrate customers
  As an administrator
  I want to view and add customers

  Scenario: View existing customers
    When the administrator opens the Customers page
    Then at least one customer should be displayed