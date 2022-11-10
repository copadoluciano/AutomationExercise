import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')



Given('user "Create new order with Native Token" {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.login(Cypress.env('USER_EMAIL_19'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_19_DEMO'))
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
    cy.validateCardsTrades(operation, price, quantity, counterparty)
    // cy.validateTradesValues(operation, quantity, price)
    cy.clic(this.buySell.cardClose.btnViewMore)
    // cy.validateOperationTradesMaker(operation, currency, unit, quantity, price)
    cy.logout()

})


When('the counterparty propose other terms', function(){
    cy.login(Cypress.env('USER_EMAIL_20'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_20_DEMO'))
    cy.wait(2000)
    cy.clic(this.header.header.btnTrades)
    // cy.validateCardsTradesTaker()
    // cy.validateCardsTradesMakerEqualTaker()
    cy.proposeOtherTermsTrades()

    cy.wait(2000)
    cy.logout()
})


When('the order maker accepts the order', function(){
    cy.login(Cypress.env('USER_EMAIL_19'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_19_DEMO'))
    cy.clic(this.header.header.btnTrades)

    // cy.validateTaker()
    cy.clic(this.buySell.global.buttonOutbox)
    cy.acceptOrderBuy()
    // cy.makerEqualTaker()
    cy.wait(2000)
})

Then('the order will be created for both parties.',function(){
    cy.logout()
})