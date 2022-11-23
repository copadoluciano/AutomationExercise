import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type {word} and {word} Name, {word}, Country Argentina and Phone {word}',function (first,last,email,number) {
    cy.typeText(this.signup.global.firstNameInput, first)
    cy.typeText(this.signup.global.lastNameInput, last)
    cy.typeText(this.signup.global.emailInput, Cypress.env(email))
    cy.clic(this.signup.global.arrowOpen)
    cy.clic(this.signup.global.selectArgentina)
    cy.typeText(this.signup.global.numberInput, number)
    cy.clic(this.signup.global.nextButton)
})

Then('I should see the pop-up message The account email is already taken',function () {
    cy.isVisible(this.signup.popAlerts.PopAlertExistingAccount)
})