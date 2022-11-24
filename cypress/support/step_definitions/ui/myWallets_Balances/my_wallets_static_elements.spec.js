import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user goes to "My Wallets"', function() {
    cy.selectRightMenu("My Wallets")
})

Then('the user visualizes "My Wallets" page elements correctly', function() {
    cy.staticElements(this.wallets.global)
    cy.clic(this.wallets.global.showTokenBtn)
    cy.staticElements(this.wallets.cards)
    cy.staticElements(this.wallets.cards)
})