import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I invite a {word} to trade with me', function(counterparty){
    cy.inviteUser(Cypress.env(counterparty))      
})
Then('the {word} will appear in pending invites',function(counterparty){
    cy.isVisible("//DIV[contains(text(),'Sent')]/..//DIV[text()='"+Cypress.env(counterparty)+"']")  
    cy.cancelInvite(Cypress.env(counterparty))
})
