import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is sign-in and type {word}, {word} and {word}', function () {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})

Given('I go to sign-in and type {word}, {word} and {word}', function (email, password, secret) {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})
