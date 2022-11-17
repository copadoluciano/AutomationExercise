import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user has navigated to Membrane Demo "Home" page', function() {
    cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
})

When('the user is redirected to the My Balances & Credits page', function() {
    cy.wait(2000)
    cy.selectRightMenu("Balances & Credits")
})

Then('the user visualizes "My Balances & Credits" page elements correctly', function() {
    cy.wait(3000)
    cy.staticElements(this.balances.staticElements)
    cy.clic(this.balances.staticElements.ethereum)
    cy.staticElements(this.balances.ethereumPage.eth)
    cy.staticElements(this.balances.ethereumPage.snx)
    cy.staticElements(this.balances.ethereumPage.usdc)
    cy.staticElements(this.balances.ethereumPage.toke)
    cy.clic(this.balances.staticElements.bitcoin)
    cy.staticElements(this.balances.bitcoinPage)
    cy.clic(this.balances.staticElements.bitcoinCash)
    cy.staticElements(this.balances.bitcoinCashPage)
    cy.clic(this.balances.staticElements.litecoin)
    cy.staticElements(this.balances.litecoinPage)
    cy.clic(this.balances.staticElements.binanceCoin)
    cy.staticElements(this.balances.binanceCoin)
    cy.clic(this.balances.staticElements.avalanche)
    cy.staticElements(this.balances.avalanche)
})

