import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user "Create New Order" recommended price {word} with {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, duration1, duration2, counterparty) {
    cy.createOrderRecommendedPrice(operation, currency, quantity, unit, duration1, duration2, counterparty)
})

When('the user "Create New Order" {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
})

When('validate all de values out the card {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.validateCardsTrades(operation, price, quantity, counterparty)
})

When('validate all de values in the card {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    // cy.validateTradesValues(operation, quantity, price)
})

Then('validate order card {word} with {word} and {word} and {word} and {word} and {word} and {word} and {word}', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    cy.validateCardsTrades(operation, price, quantity, counterparty)
})

Then('validate order details card {word} with {word} and unit price and total amount and {word}', function (operation,amount, counterparty) {
    cy.validateRecommendedPrice(operation, amount, counterparty)
})

Then('validate Counterparty order details card {word} with {word} and unit price and total amount and {word}', function (operation,amount, counterparty) {
    cy.validateCounterpartyRPrice(operation, amount, counterparty)
})

