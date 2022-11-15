import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Membrane Sign in page',function(){
    cy.visit(''+Cypress.env('SIGN_IN')+Cypress.env('SKIPCAPTCHA'))
})

When('user put email active on field e-mail',function(){
    cy.typeField(this.signin.global.inputMail, Cypress.env('USER_EMAIL_15'))
})
When('user click in "Forgot password" label',function(){
    cy.clic(this.signin.others.btnResetMail)
})
Then('user redirect to two factor autentication page',function(){
    cy.isVisible(this.signin.labelTwoFactorAuth)

})