import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the field email is empty',function(){
    cy.isClear(this.signin.global.inputMail)
})

Then('the "Send Reset Email" button are disabled',function(){
    cy.isDisabled(this.signin.others.sendReset)
})