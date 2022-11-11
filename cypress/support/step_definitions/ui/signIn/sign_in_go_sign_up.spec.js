import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Membrane Sign in page',function(){
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('user click in "Sign Up" button',function(){
    cy.clic(this.signin.global.linkSignUp)
})

Then('user is redirected to Sign Up page',function(){
    cy.clic(this.signup.global.arrowOpen)
    cy.url().should('eq', Cypress.config('baseUrl') + "/sign-up")
    cy.staticElements(this.signup.global)
})