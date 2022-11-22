import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type {word} in the email field',function(email){
    cy.typeField(this.signin.global.inputMail, email)
})

When('I do not fill the password field',function(){
    cy.isClear(this.signin.global.inputPassword)
})


