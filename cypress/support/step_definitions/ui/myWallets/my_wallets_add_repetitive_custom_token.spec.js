import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "My Wallets" page', function() {
//     cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
//     cy.selectRightMenu("y Wallets")
// })

When('the user add already contract {word}', function(contract) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.selectOption(this.wallets.importWallet.selectBlockchain, this.wallets.importWallet.selectEther)
    cy.typeText(this.wallets.importWallet.inputContract, contract)
})


Then('the {word} contract is already in the list', function(symbol) {
    cy.isVisible("//SPAN[contains(@data-cy,'import_token_imported_')]/..//H5[contains(@data-cy,'import_token_symbol_')][text()='"+symbol+"']")
})
