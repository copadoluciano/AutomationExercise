import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is on the Login page', function() {
    cy.visit('')
})

Then('the user visualizes "Sign In" page elements correctly', function() {
    cy.staticElements(this.signin.global)
})