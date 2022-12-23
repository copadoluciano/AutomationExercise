import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty try to accepts the order but will receive a messege to import the {word}', function () {
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.global.btnOrders)
    cy.clic(this.loans.buttons.buttonViewMore)
    cy.clic(this.loans.buttons.buttonAcceptOrder)
    cy.clic(this.loans.buttons.buttonAcceptConfirmation2)
    cy.isVisible("//SPAN[text()='Asset not found please add APE token to the list to continue']")
})



