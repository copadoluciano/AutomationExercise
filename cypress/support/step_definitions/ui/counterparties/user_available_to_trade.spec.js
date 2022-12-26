import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user will create a Trades order', function(){
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.createOrderBtn)
})
