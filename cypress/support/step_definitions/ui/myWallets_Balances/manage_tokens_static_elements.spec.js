import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('the user open "Manage Tokens" and import {word}', function(tokenContract) {
    cy.clic(this.wallets.importWallet.btnImportToken)
    cy.selectOption(this.wallets.importWallet.selectBlockchain, this.wallets.importWallet.selectEther)
    cy.typeText(this.wallets.importWallet.inputContract, tokenContract)
})

Then('the user visualizes "Manage Tokens" page elements correctly with {word}', function() {
    // cy.staticElements(this.wallets.importWallet)
    
})