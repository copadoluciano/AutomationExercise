import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user is on the "My Wallets" page', function() {
    cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
    cy.selectRightMenu("y Wallets")
})

When('the user is redirected to the "Manage Tokens" {word}', function(tokenContract) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.selectOption(this.wallets.importWallet.selectBlockchain, this.wallets.importWallet.selectEther)
    cy.typeText(this.wallets.importWallet.inputContract, tokenContract)
})

Then('the user visualizes "Manage Tokens" page elements correctly with {word}', function() {
    // cy.staticElements(this.wallets.importWallet)
    
})