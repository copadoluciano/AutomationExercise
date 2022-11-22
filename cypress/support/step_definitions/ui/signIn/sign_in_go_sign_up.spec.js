import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Membrane Sign in page',function(){
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('I click on sign up button',function(){
    cy.clic(this.signin.global.linkSignUp)
})

Then('I should see the membrane sign up page',function(){
    cy.clic(this.signup.global.arrowOpen)
    cy.url().should('eq', Cypress.config('baseUrl') + "/sign-up")
    cy.staticElements(this.signup.global)
})