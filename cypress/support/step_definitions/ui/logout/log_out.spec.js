import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I click on logs out button',function(){
    cy.logout()
})

Then('I should see the membrane sign in page',function(){
    cy.url().should('eq', Cypress.config('baseUrl') + "/sign-in")

})