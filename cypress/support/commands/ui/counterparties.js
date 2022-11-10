Cypress.Commands.add('inviteUser', function (counterparty) {
    cy.clic(this.header.header.btnCounterparties)
    cy.clic(this.invite.inviteUser.btnInviteCounterparty)
    cy.clic(this.invite.inviteUser.option.btnIndividual)
    cy.typeField(this.invite.inviteUser.individual.invite.inputEmail, counterparty)
    cy.clic(this.invite.inviteUser.individual.invite.btnSend)
    cy.staticElements(this.invite.inviteUser.individual.confirmation)
    cy.clic(this.invite.inviteUser.individual.confirmation.btnFinish)
    cy.clic(this.invite.pendingInvites.btnPendingInvites)
    cy.isVisible("//DIV[contains(@data-cy,'sent_targetaccount_')]/..//DIV[text()='"+counterparty+"']")
})

Cypress.Commands.add('cancelInvite', function (counterparty) {
    cy.wait(3000)
    cy.clic("//DIV[text()='"+counterparty+"']/../..//SPAN[text()='Cancel Invite']")
    cy.wait(1000)
    cy.isVisible(this.invite.pendingInvites.inviteCancelled)
    cy.wait(2000)
    cy.isNotExist("//DIV[contains(@data-cy,'sent_targetaccount_')]/..//DIV[text()='"+counterparty+"']")

})

Cypress.Commands.add('disabledCounterparty', function (counterparty) {
    cy.clic(this.header.header.btnCounterparties)
    cy.xpath("//DIV[text()='"+counterparty+"']/../..//SPAN[contains(@class,'styles_switchSpan__')]").click()
    cy.staticElements(this.invite.disabledConfirmation)
    cy.clic(this.invite.disabledConfirmation.btnConfirm)
})

Cypress.Commands.add('rejectedInvite', function (email) {
    cy.wait(1000)
    cy.clic(this.header.header.btnCounterparties)
    cy.wait(1000)
    cy.clic(this.invite.pendingInvites.btnPendingInvites)
    cy.wait(1000)
    cy.isVisible("//DIV[contains(text(),'Received')]/..//DIV[text()='"+email+"']")
    cy.wait(1000)
    cy.clic("//DIV[text()='"+email+"']/../..//SPAN[text()='Reject']")
    cy.wait(1000)
    cy.isVisible(this.invite.pendingInvites.inviteDeclined)
    cy.wait(1000)
})

