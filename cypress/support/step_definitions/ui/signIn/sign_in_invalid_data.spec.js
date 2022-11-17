import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user try logs in to his account with invalid data',function(){
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
    cy.typeText(this.signin.global.inputMail, Cypress.env('USER_EMAIL_05'))
    cy.typeText(this.signin.global.inputPassword, "123456")
    cy.wait(3000)
    cy.clic(this.signin.global.buttonNext)

})

Then('the alert message label "Error: Wrong email or password, try again" should be shown',function(){
    // Create JSON for Home static elements and use CY Command
    cy.isVisible(this.signin.popAlerts.popUpAlertEmailNotRegister)
})