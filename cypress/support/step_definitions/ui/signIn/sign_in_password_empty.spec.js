import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Sign In page',function(){
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('user put {word} on field e-mail',function(email){
    cy.typeField(this.signin.global.inputMail, email)
})

When('user leaves password field empty',function(){
    cy.isClear(this.signin.global.inputPassword)
})

Then('the Next Button should be disabled',function(){
    cy.isDisabled(this.signin.global.buttonNext)
})

