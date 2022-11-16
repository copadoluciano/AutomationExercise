import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Loans" page with {word}, {word} and {word}', function(email, password, secret) {
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))    
//     cy.wait(5000)
// })
// When('the user "Create Order" {word} {word} "order" of {word} {word} with {word} APR and {word} {word} duration, expiring in {word} {word} and {word} {word} as collateral, limited to {word} % with {word} and with {word} frecuency {word} {word}', function (operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral) {
//     cy.createOrderLoan(operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral)
//     cy.validateCardsLoans(operation, amount, collateral, collateralAsset, aprAmount, counterparty)
//     const dayjs = require('dayjs')
//     let time = dayjs().format('HH:mm')
//     cy.log(time)
// })
// When('logout', function() {
//     cy.logout()
// })
// When('the counterparty accept the order with {word}, {word} and {word}', function (cp_email, cp_password, cp_secret) {
//     cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
//     cy.clic(this.header.header.btnLoans)
//     cy.clic(this.loans.buttons.buttonViewMore)
//     cy.acceptOrderLoan()
// })

When('the time is between 16 and 17 Argentina', function () {
    cy.wait(3000)
    cy.validateActivity()

    cy.logout()
})

Then('then we validate that the payments have been created', function () {
})

