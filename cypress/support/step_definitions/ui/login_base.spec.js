import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('I go to sign-in and type {word}, {word} and {word}', function (email, password, secret) {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})


Given('the user is in sign-in and type {word}, {word} and {word}', function (email, password, secret) {
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
})
When('the counterparty sign-in and type {word}, {word} and {word}', function (cp_email, cp_password, cp_secret) {
    cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
})

When('the user log out your account', function () {
    cy.logout()
})

When('the user logs out',function(){
    cy.logout()
    cy.url().should('eq', Cypress.config('baseUrl') + "/sign-in")
})
