import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('I go to sign-in', function () {
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('I type {word}, {word} and {word}', function (email, password, secret) {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})