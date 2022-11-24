import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user import contract {word} in "Manage Tokens"', function(contract) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.importToken(contract)
})


Then('the {word} contract is on the "My balances and Credits" page', function(symbol) {
    cy.validateToken(symbol)
})

Then('goes to the "Manage Tokens" page to delete {word} token', function(symbol) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.deleteToken(symbol)
    cy.wait(4000)
    cy.isNotExist("//div[@data-cy='my_wallets_card_inner_name_"+symbol+"']")
    cy.isNotExist("//H5[@data-cy='import_token_symbol_+SHIB+']")
    cy.wait(2000)
})


Then('the {word} will not appear in "Manage Tokens" and "My Wallets"', function(symbol) {
    cy.isNotExist("//div[@data-cy='my_wallets_card_inner_name_"+symbol+"']")
    cy.isNotExist("//H5[@data-cy='import_token_symbol_+SHIB+']")

})
