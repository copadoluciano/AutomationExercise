import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user invite a new {word} to trade with me',function(cp_email){
    cy.inviteUser(Cypress.env(cp_email))
    cy.logout()
    
})
When('the counterparty with credentials {word}, {word} and {word} the {word} invitation',function(cp_email, cp_password, cp_secret, email){
    cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
    cy.rejectedInvite(Cypress.env(email))
    
})
Then('the invitation of {word} will disappear from the panel of the invited user',function(email){
    cy.isNotExist("//DIV[contains(text(),'Received')]/..//DIV[text()='"+Cypress.env(email)+"']")
})