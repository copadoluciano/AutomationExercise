import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type {word} in the email field of the Forgotten password page',function(email){
    cy.typeField(this.signin.global.inputMail, Cypress.env(email))
})

Then('I should receive the token in my email inbox',function(){


})