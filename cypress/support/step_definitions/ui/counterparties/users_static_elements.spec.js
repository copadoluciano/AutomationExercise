import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user need to see the static elements',function(){
    cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
})

When('the user is on the "Users" page',function(){
    cy.clic(this.header.header.btnCounterparties)
})
Then('the user visualizes "Users" page elements correctly',function(){
    cy.clic(this.invite.whiteList.btnwhiteList)
    cy.staticElements(this.invite.whiteList)
    cy.clic(this.invite.pendingInvites.btnPendingInvites)
    // cy.staticElements(this.invite.pendingInvites)
    cy.clic(this.invite.inviteUser.btnInviteCounterparty)
    cy.staticElements(this.invite.inviteUser.option)
    cy.wait(2000)
    cy.clic(this.invite.inviteUser.option.btnIndividual)
    cy.staticElements(this.invite.inviteUser.individual.invite)
    cy.clic(this.invite.inviteUser.individual.invite.btnCancel)
    cy.logout()
})