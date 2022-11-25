import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty propose other terms', function(){
    cy.clic(this.header.header.btnTrades)
    cy.proposeOtherTermsTrades()

})

When('the counterparty accepts the order POT', function () {
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.buttonOutbox)
    cy.acceptOrderBuy()
})

Then('the order will be created for both parties.',function(){

})