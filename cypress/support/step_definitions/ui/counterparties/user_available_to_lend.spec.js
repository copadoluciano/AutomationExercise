import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user will create a Lend & Borrow order', function(){
    cy.clic(this.header.header.btnLoans) // Header Loans
    cy.clic(this.loans.global.btnNewLoan) // Create Loan
})

