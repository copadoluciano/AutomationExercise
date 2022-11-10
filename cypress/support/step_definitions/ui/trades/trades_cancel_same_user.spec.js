import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Given('user "Create Order" {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}',function(operation, currency, quantity, unit, price, duration1, duration2, counterparty){
    cy.login(Cypress.env('USER_EMAIL_19'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_19_DEMO'))
    cy.wait(2000)
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
    cy.validateCardsTrades(operation, price, quantity, counterparty)


})

When('the shame user Cancel de Order', function(){
    cy.cancelOrder()

})

Then('a successful cancellation message should be displayed',function(){
    cy.isVisible(this.buySell.reviewAcceptedOrder.popUpOrderCancel)
    cy.logout()
})
