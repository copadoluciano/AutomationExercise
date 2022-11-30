import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user is on the "Loans" page', function () {
    cy.wait(2000)
    cy.clic(this.header.header.btnLoans)
    cy.staticElements(this.loans.global)
})
Then('the user visualizes "Loans" page elements correctly', function () {
    cy.wait(2000)
    cy.clic(this.loans.buttons.createNewLoan)
    cy.staticElements(this.loans.labels)
    cy.staticElements(this.loans.fields)
    cy.wait(5000)
})
