import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "My Wallets" page', function() {
//     cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
//     cy.selectRightMenu("y Wallets")
// })

When('the user add contract {word}', function(contract) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.importToken(contract)
})


Then('the {word} contract is on the "My balances and Credits" page', function(symbol) {
    cy.validateToken(symbol)
})

Then('goes to the "My Wallets" page to delete {word} token', function(symbol) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.deleteToken(symbol)
    cy.wait(4000)
    cy.isNotExist("//div[@data-cy='my_wallets_card_inner_name_"+symbol+"']")
    cy.isNotExist("//H5[@data-cy='import_token_symbol_+SHIB+']")
    cy.wait(2000)
})
