import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type password and change for a new password', function() {
    cy.changePassword(Cypress.env('SECRET_05'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_PASSWORD')+2)
})
Then('I should see the pop-up message Your password has been changed', function() {
})

Then('I type new password and change for the befor password', function() {
    cy.changePassword(Cypress.env('SECRET_05'), Cypress.env('USER_PASSWORD')+2, Cypress.env('USER_PASSWORD'))
})


