import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user has navigated to Membrane Demo "Home" page', function() {
//     cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
// })

When('the user is redirected to the My Wallets page', function() {
    cy.wait(2000)
    cy.selectRightMenu("My Wallets")
})

Then('the user visualizes "My Wallets" page elements correctly', function() {
    cy.staticElements(this.wallets.global)
    cy.clic(this.wallets.global.showTokenBtn)
    cy.staticElements(this.wallets.cards)
    cy.staticElements(this.wallets.cards)
})