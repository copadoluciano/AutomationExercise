import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I do not fill the email field of the Forgotten password page',function(){
    cy.isClear(this.signin.global.inputMail)
})

Then('I should see the Send Reset Email button disabled',function(){
    cy.isDisabled(this.signin.others.sendReset)
})