import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('a token input address is empty', function() {
    cy.clearLocalStorage()
    cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
    cy.selectRightMenu("My Wallets")
    cy.etcSndAddrsEmpty()
})

When('user set a {word} address in {word} asset with money', function(address, asset) {
    cy.setNewAddress(asset, address)    
})

Then('the user can view the wallet balance of the {word} Token on the "My Balances & Credits" page', function(token) {
    cy.selectRightMenu("Balances & Credits")
    cy.walletBalance(token, 1)
    cy.deleteNewAddress()
})

