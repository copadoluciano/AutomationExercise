import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the same user Cancel de Order', function(){
    cy.cancelOrder()
})

Then('a successful cancellation message should be displayed',function(){
    cy.isVisible(this.buySell.reviewAcceptedOrder.popUpOrderCancel)
    cy.logout()
})
