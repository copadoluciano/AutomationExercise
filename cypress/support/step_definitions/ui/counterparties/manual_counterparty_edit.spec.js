import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user edit the name {word} for {word} in manual counterparty', function (cp_email, cp_name_new) {
    cy.clic(this.header.header.btnCounterparties)
    cy.clic("//DIV[text()='"+cp_email+"']/../..//button[@data-cy='icon_button_edit']")
    cy.typeText(this.invite.manual.create.inputName, cp_name_new)
    cy.clic(this.invite.manual.create.btnSubmit)
})

Then('the user should see the message "Done! The manual counterparty Test1 has been edited." and the new name {word} {word}', function ( cp_name_new, cp_email) {
    cy.isVisible(this.invite.manual.edit.successfullyMessage)
    cy.clic(this.invite.manual.edit.btnFinish)
    cy.isVisible("//DIV[contains(@data-cy,'manual_counterparty_name_')][text()='"+cp_name_new+"']/../..//DIV[contains(@data-cy,'manual_counterparty_email_')][text()='"+cp_email+"']")
})
Then('the user will change back to the original name {word} with email {word}', function (cp_name, cp_email) {
    cy.clic("//DIV[text()='"+cp_email+"']/../..//button[@data-cy='icon_button_edit']")
    cy.xpath(this.invite.manual.create.inputName).clear()
    cy.typeText(this.invite.manual.create.inputName, cp_name)
    cy.clic(this.invite.manual.create.btnSubmit)
    cy.isVisible(this.invite.manual.edit.successfullyMessage)
    cy.clic(this.invite.manual.edit.btnFinish)
    cy.isVisible("//DIV[contains(@data-cy,'manual_counterparty_name_')][text()='"+cp_name+"']/../..//DIV[contains(@data-cy,'manual_counterparty_email_')][text()='"+cp_email+"']")

})

