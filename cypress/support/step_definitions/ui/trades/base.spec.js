import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('the user "Create New Order" {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
})

When('validate all de values out the card {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.validateCardsTrades(operation, price, quantity, counterparty)
})

When('validate all de values in the card {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    // cy.validateTradesValues(operation, quantity, price)
})