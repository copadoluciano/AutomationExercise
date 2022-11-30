import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// When('the user "Create Order" {word} {word} "order" of {word} {word} with {word} APR and {word} {word} duration, expiring in {word} {word} and {word} {word} as collateral, limited to {word} % with {word} and with {word} frecuency {word} {word}', function (operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral) {
//     cy.createOrderLoan(operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral)
//     cy.validateCardsLoans(operation, amount, collateral, collateralAsset, aprAmount, counterparty) // Validate values in the card close
//     cy.clic(this.loans.buttons.buttonViewMoreOutbox)
//     cy.validateReviewLoans(counterparty, amount, typeLoan, duration2, duration1, aprAmount, frecuency, repayFee, collateralLimit, refundCollateral)
// })
When('logout', function() {
    cy.logout()
})

When('the counterparty accept the order with {word}, {word} and {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word} {word}', function (cp_email, cp_password, cp_secret, operation, counterparty, amount, typeLoan, duration2, duration1, aprAmount, frecuency, repayFee, collateral, collateralAsset, collateralLimit, refundCollateral) {
    cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.global.btnOrders)
    //cy.validateCardsLoansTaker(operation, amount, collateral, collateralAsset, aprAmount, counterparty) // Validate values in the card close

    cy.clic(this.loans.buttons.buttonViewMore)
    // cy.validateReviewLoansTaker(counterparty, amount, typeLoan, duration1, duration2, aprAmount, frecuency, repayFee, collateralLimit, refundCollateral) // Validate values in the card open
    cy.acceptOrderLoan(counterparty, amount, typeLoan, duration2, duration1, aprAmount, frecuency, repayFee, collateralLimit, refundCollateral)
})


Then('the loan order will be created for both parties', function () {
    cy.logout()
})

