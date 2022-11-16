import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('user put {word} not active on field e-mail',function(){
    cy.clic(this.signin.global.linkForgotPassword)
    cy.typeField(this.signin.global.inputMail, Cypress.env('USER_EMAIL_15'))
    cy.clic(this.signin.others.btnResetMail)
})

Then('the alert message "The account is not active yet." should be shown',function(){
    cy.isVisible(this.signin.popAlerts.popAlertAccountNotActive)
})