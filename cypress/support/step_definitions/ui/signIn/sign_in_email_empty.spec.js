import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Sign In page',function(){
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('user put {word} on field password',function(password){
    cy.typeField(this.signin.global.inputPassword, password)
})

When('user leaves email field empty',function(){
    cy.isClear(this.signin.global.inputMail)
})

Then('the Next Button should be disabled',function(){
    cy.isDisabled(this.signin.global.buttonNext)
})
