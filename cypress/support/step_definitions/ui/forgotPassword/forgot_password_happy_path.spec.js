import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user completes the Forgot Password flow',function(){
    cy.typeField(this.signin.global.inputMail, Cypress.env('USER_EMAIL_15'))
})

Then('the user will receive a token to enter',function(){


})
And('the user will receive a token to enter',function(){


})