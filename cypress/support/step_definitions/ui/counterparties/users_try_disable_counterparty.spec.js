import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Given('user is on the "Counterparties" page with {word}, {word} and {word}',function(){
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
    
})
When('the user try to disabled a {word}',function(cp_email){
    cy.disabledCounterparty(Cypress.env(cp_email))
})
Then('the user receive an alert to cant disable the counterparty because they have an open order',function(){
    cy.staticElements(this.invite.alertDisable)
    cy.clic(this.invite.alertDisable.btnClose)
    cy.logout()
   
    
})
