import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Given('user is on the "Trades" page with {word}, {word} and {word}', function (email, password, secret) {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})

When('the user is redirected to the Trade page and Create New Order {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}',function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.wait(2000)
    cy.clic(this.header.header.btnTrades)
    cy.staticElements(this.buySell.global)
    cy.wait(2000)
    cy.clic(this.buySell.global.createOrderBtn)
    cy.staticElements(this.buySell.createOrder)
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
    cy.staticElements(this.buySell.cardClose)
})

Then('the user visualizes Trade page elements correctly', function () {
    cy.clic(this.buySell.cardClose.buttonViewMore)
    cy.staticElements(this.buySell.reviewOrder)
    cy.logout()
    cy.login(Cypress.env('USER_EMAIL_20'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_20'))
    cy.clic(this.header.header.btnTrades)
    cy.staticElements(this.buySell.global)
    cy.staticElements(this.buySell.cardClose)
    cy.clic(this.buySell.cardClose.buttonViewMore)
    cy.staticElements(this.buySell.reviewOrder)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonProposeOtherTerms)
    cy.staticElements(this.buySell.pot)
    cy.logout()

})
