import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user is on the "Membrane" page with {word}, {word} and {word}',function(email, password, secret){
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))

})

When('the user is redirected to the "Manage Tokens" {word}', function(tokenContract) {
    cy.selectRightMenu("y Wallets")
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.selectOption(this.wallets.importWallet.selectBlockchain, this.wallets.importWallet.selectEther)
    cy.typeText(this.wallets.importWallet.inputContract, tokenContract)
})

Then('the user visualizes "Manage Tokens" page elements correctly with {word}', function() {
    // cy.staticElements(this.wallets.importWallet)
    
})