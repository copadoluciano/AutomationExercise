import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty accepts the order', function () {
    cy.clic(this.header.header.btnTrades)
    cy.acceptOrderBuy()
})

Then('the order will be created for both parties', function () {
})
