import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I import contract {word} on Loans', function(contract) {
    cy.clic(this.header.header.btnLoans) // Header Loans
    cy.clic(this.loans.global.btnNewLoan) // Create Loan
    cy.clic(this.loans.createOrder.openTerm.fields.selectAmount)
    cy.clic(this.loans.others.manageTokens)
    cy.importToken(contract)
})

Then('the {word} contract is on the "Manage Tokens" on Loans', function(symbol) {
    cy.clic(this.loans.createOrder.openTerm.fields.selectAmount)
    cy.clic(this.loans.others.manageTokens)
    cy.isExist("//H5[contains(@data-cy,'import_token_symbol_')][text()='"+symbol+"']")
})

Then('the user delete {word} token on Loans', function(symbol) {
    cy.deleteToken(symbol)
    cy.wait(4000)
    cy.isNotExist("//H5[contains(@data-cy,'import_token_symbol_')][text()='"+symbol+"']")
    cy.wait(2000)
})
