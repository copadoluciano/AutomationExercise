import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user create new manual counterparty with name {word} and email {word}', function (cp_name, cp_email) {
    cy.clic(this.header.header.btnCounterparties)
    cy.clic(this.invite.manual.global.btnNewCounterparty)
    cy.typeText(this.invite.manual.create.inputName, cp_name)
    cy.typeText(this.invite.manual.create.inputEmail, Cypress.env(cp_email))
    cy.xpath(this.invite.manual.create.inputEmail).type('{enter}')
    cy.clic(this.invite.manual.create.btnSubmit)


})

Then('the user should see message label "{word} has been successfully added."', function () {
    cy.isVisible(this.invite.manual.create.successfullyMessage)
    cy.clic(this.invite.manual.create.btnFinish)
})
Then('the user will delete the manual counterparty with email {word}', function (cp_email) {
    cy.clic("//DIV[text()='"+Cypress.env(cp_email)+"']/../..//button[@data-cy='icon_button_delete']")
    cy.clic(this.invite.manual.delete.btnConfirm)
    cy.isVisible(this.invite.manual.delete.successfullyMessage)
})

