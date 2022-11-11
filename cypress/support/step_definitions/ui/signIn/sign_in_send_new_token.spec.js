import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is on the Two Factor Authentication',function(){
    

})

When('the user click on "Send new messege"',function(){
    cy.sendNewToken(Cypress.env('USER_EMAIL_06'), Cypress.env('USER_PASSWORD'))
    
})

Then('the new token will be sent',function(){
    

})