import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Sign in Page',function(){
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('the user completes with valid data',function(){
    cy.typeField(this.signin.global.inputMail, Cypress.env('USER_EMAIL_05'))
    cy.typeField(this.signin.global.inputPassword, Cypress.env('USER_PASSWORD'))
    cy.clic(this.signin.global.buttonNext)

})

When('user redirect to twofactor autentication page',function(){
    cy.urlShould("/two-factor")

})

When('user put token {word} in field token',function(invalid){
    cy.typeField(this.twoFa.token, invalid)
    cy.clic(this.twoFa.twofaNext)
})

Then('the alert message label "Your code is wrong or expired, try again" should be shown',function(){
    cy.isVisible(this.twoFa.token_lbl_invalid)
})

Then('the alert pop message "Your code is wrong or expired, try again" should be shown',function(){
    cy.isVisible(this.twoFa.token_pop_invalid)
})