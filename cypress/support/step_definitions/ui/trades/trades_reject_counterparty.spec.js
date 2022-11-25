import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty reject the order', function(){
    cy.clic(this.header.header.btnTrades)
    cy.rejectOrder()
    })

Then('a successful reject message should be displayed',function(){
    cy.isVisible(this.buySell.reviewAcceptedOrder.popUpOrderReject)
    cy.wait(4000)
})
