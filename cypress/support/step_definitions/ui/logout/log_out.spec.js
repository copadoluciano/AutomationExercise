import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user is login into the Membrane page with {word}, {word} and {word}',function(email, password, secret){
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))

})

When('the user logs out',function(){
    cy.logout()
})

Then('user is redirected to "Sign In" page',function(){
    cy.url().should('eq', Cypress.config('baseUrl') + "/sign-in")

})