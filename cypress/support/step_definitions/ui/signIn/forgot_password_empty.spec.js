import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at Membrane Sign in page',function(){

    cy.visit(''+Cypress.env('SIGN_IN')+Cypress.env('SKIPCAPTCHA'))
})

When('the fields are empty',function(){
    cy.isClear(this.signin.global.inputMail)
    cy.isClear(this.signin.global.inputPassword)
})

Then('Then the "Next" button and the "Forgot Password" link are disabled',function(){
    cy.isDisabled(this.signin.global.buttonNext)
})