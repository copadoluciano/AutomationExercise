import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is on the Membrane page with {word}, {word} and {word}', function(email, password, secret) {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})