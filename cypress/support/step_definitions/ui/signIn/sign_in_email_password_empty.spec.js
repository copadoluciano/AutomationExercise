import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Sign In page',()=>{
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
})

When('user leaves Email and Password empty',function(){
    cy.isClear(this.signin.global.inputMail)
    cy.isClear(this.signin.global.inputPassword)
})
Then('the Next Button should be disabled',function(){
    cy.isDisabled(this.signin.global.buttonNext)
})
