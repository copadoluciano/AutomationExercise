import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Sign Up page',function () {
    cy.visit('' + Cypress.env('SKIPCAPTCHA'))
    cy.clic(this.signin.global.linkSignUp)

})

When('user uses an email already registered',function () {
    cy.typeText(this.signup.global.firstNameInput, "Cypress")
    cy.typeText(this.signup.global.lastNameInput, "Test")
    cy.typeText(this.signup.global.emailInput, Cypress.env('USER_EMAIL_01'))
    cy.clic(this.signup.global.arrowOpen)
    cy.clic(this.signup.global.selectArgentina)
    cy.typeText(this.signup.global.numberInput, "123456")
    cy.clic(this.signup.global.nextButton)
})

Then('an alert will appear',function () {
    cy.isVisible(this.signup.global.haveAccountLink)
})