import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the same user cancel the order', function () {
    cy.cancelOrderLoan()
    cy.wait(2000)
})

Then('a successful cancel message should be displayed', function () {
    cy.isNotExist(this.loans.buttons.buttonViewMore)
})

