import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is on the Membrane Page',function(){

})

When('the user logs in to his account',function(){
    cy.login(Cypress.env('USER_EMAIL_05'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_05_DEMO'))
})

Then('the user will be redirected to the Membrane Home',function(){
    // Create JSON for Home static elements and use CY Command
    cy.xpath("//h4[text()='Watchlist']").should('exist')
    cy.logout()
})