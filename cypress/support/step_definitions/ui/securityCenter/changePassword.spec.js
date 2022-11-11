import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Security Center" page with {word}, {word} and {word}',function(email, password, secret){
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
// })
When('the user completes the password change data', function() {
    cy.changePassword(Cypress.env('SECRET_05_DEMO'), Cypress.env('USER_PASSWORD'), Cypress.env('USER_PASSWORD')+2)
})
Then('he receives a confirmation alert.', function() {
})

Then('you will return to the previous password', function() {
    cy.changePassword(Cypress.env('SECRET_05_DEMO'), Cypress.env('USER_PASSWORD')+2, Cypress.env('USER_PASSWORD'))
})


