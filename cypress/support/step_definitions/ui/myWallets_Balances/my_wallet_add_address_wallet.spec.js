import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('user set a {word} address in {word} asset with money', function(address, asset) {
    cy.selectRightMenu("my_wallets")
    cy.etcSndAddrsEmpty()
    cy.setNewAddress(asset, address)    
})

Then('the user can view the wallet balance of the {word} Token on the "My Balances & Credits" page', function(token) {
    cy.selectRightMenu("balances_&_credits")
    cy.walletBalance(token, 1)
    cy.deleteNewAddress()
})

