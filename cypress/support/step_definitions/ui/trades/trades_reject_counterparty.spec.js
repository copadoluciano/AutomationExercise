import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')



Given('user "Create new Orderr" {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}',function(operation, currency, quantity, unit, price, duration1, duration2, counterparty){
    cy.login(Cypress.env('USER_EMAIL_19'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_19_DEMO'))
    cy.wait(2000)
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
    cy.validateCardsTrades(operation, price, quantity, counterparty)

    cy.logout()
})

When('the counterparty reject the order', function(){
    cy.login(Cypress.env('USER_EMAIL_20'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_20_DEMO'))
    cy.visit('') 
    cy.wait(2000)
    cy.clic(this.header.header.btnTrades)
    cy.rejectOrder()
    

})

Then('a successful reject message should be displayed',function(){
    cy.isVisible(this.buySell.reviewAcceptedOrder.popUpOrderReject)
    cy.wait(4000)
    cy.logout()
})
