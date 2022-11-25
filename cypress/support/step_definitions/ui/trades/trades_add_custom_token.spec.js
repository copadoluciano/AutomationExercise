import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user import contract {word} in "Trades" modal', function(contract) {
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.createOrderBtn)
    cy.clic(this.buySell.createOrder.fieldAsset)
    cy.clic(this.buySell.others.manageTokens)
    cy.importToken(contract)

})


Then('the {word} contract is in "Manage Tokens"', function(symbol) {
    cy.clic(this.buySell.createOrder.fieldAsset)
    cy.clic(this.buySell.others.manageTokens)
})

Then('the user delete {word} token', function(symbol) {
    cy.deleteToken(symbol)
    cy.wait(4000)
})

Then('the {word} will be eliminated to "Manage Tokens"', function(symbol) {
    cy.isNotExist("//div[@data-cy='my_wallets_card_inner_name_"+symbol+"']")
    cy.isNotExist("//H5[@data-cy='import_token_symbol_"+symbol+"']")

})
