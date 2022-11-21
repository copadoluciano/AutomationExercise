import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is on the Sign Up page', function() {
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
    cy.clic(this.signin.global.linkSignUp)
})

Then('the user visualizes Sign Up page elements correctly', function() {
    cy.clic(this.signup.global.arrowOpen)
    cy.staticElements(this.signup.global)
    
})