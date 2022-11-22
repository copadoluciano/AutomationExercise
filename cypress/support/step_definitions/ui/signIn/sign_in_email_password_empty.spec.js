import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')



When('I do not fill in the email and password fields',function(){
    cy.isClear(this.signin.global.inputMail)
    cy.isClear(this.signin.global.inputPassword)
})
Then('I should see the Next button disabled',function(){
    cy.isDisabled(this.signin.global.buttonNext)
})
