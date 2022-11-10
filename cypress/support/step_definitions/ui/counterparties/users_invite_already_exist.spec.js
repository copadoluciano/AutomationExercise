import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Counterparties" page with {word}, {word} and {word}',function(email, password, secret){
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
// })

When('the user invite {word} an already user to trade with me', function(counterparty){
    cy.clic(this.header.header.btnCounterparties)
    cy.clic(this.invite.inviteUser.btnInviteCounterparty)
    cy.clic(this.invite.inviteUser.option.btnIndividual)
    cy.typeField(this.invite.inviteUser.individual.invite.inputEmail, Cypress.env(counterparty))        
    cy.clic(this.invite.inviteUser.individual.invite.btnSend)
})
Then('You will receive an alert "This invitation already exists"',function(){
    cy.isVisible(this.invite.others.invitationExist)
    
})
