import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


// When('the user "Create Order" {word} {word} "order" of {word} {word} with {word} APR and {word} {word} duration, expiring in {word} {word} and {word} {word} as collateral, limited to {word} % with {word} and with {word} frecuency {word} {word}', function (operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral) {
//     cy.createOrderLoan(operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral)
//     cy.validateCardsLoans(operation, amount, collateral, collateralAsset, aprAmount, counterparty)
//     cy.clic(this.loans.buttons.buttonViewMoreOutbox)
//     cy.validateReviewLoans(counterparty, amount, typeLoan, duration2, duration1, aprAmount, frecuency, repayFee, collateralLimit, refundCollateral)
// })

When('the counterparty reject the order with {word}, {word} and {word}', function (cp_email, cp_password, cp_secret) {
    cy.logout()
    cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
    cy.rejectOrderLoan()
})

Then('the loan order will be eliminated for both parties', function () {
    cy.logout()
})

