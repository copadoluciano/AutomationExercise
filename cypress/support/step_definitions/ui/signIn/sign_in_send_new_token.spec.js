import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I click on Send new messege button after logging in before 30 seconds',function(){
    cy.sendNewToken(Cypress.env('USER_EMAIL_06'), Cypress.env('USER_PASSWORD'))
    
})

Then('I should see new token',function(){
    cy.isVisible(this.signin.others.labelWaitRequest)
    

})