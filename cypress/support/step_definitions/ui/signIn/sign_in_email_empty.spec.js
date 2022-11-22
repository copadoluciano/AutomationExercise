import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type {word} in the password field',function(password){
    cy.typeField(this.signin.global.inputPassword, password)
})

When('I do not fill the email field',function(){
    cy.isClear(this.signin.global.inputMail)
})


