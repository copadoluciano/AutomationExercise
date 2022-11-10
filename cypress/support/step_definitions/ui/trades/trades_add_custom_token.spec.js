import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')



Given('user is on the operation "Buy Sell"', function() {
    cy.login(Cypress.env('USER_EMAIL_19'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_19_DEMO'))
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.createOrderBtn)
    
})

When('the user import contract {word}', function(contract) {
    cy.clic(this.buySell.createOrder.fieldAsset)
    cy.clic(this.buySell.others.manageTokens)
    cy.importToken(contract)

})


Then('the {word} contract is on the "My balances and Credits" page.', function(symbol) {
    cy.clic(this.buySell.createOrder.fieldAsset)
    cy.clic(this.buySell.others.manageTokens)
})

Then('the user delete {word} token', function(symbol) {
    cy.deleteToken(symbol)
    cy.wait(4000)
    cy.isNotExist("//div[@data-cy='my_wallets_card_inner_name_"+symbol+"']")
    cy.isNotExist("//H5[@data-cy='import_token_symbol_"+symbol+"']")
    cy.wait(2000)
})
