import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('I go to Sign Up',function () {
    cy.visit('' + Cypress.env('SKIPCAPTCHA'))
    cy.clic(this.signin.global.linkSignUp)

})