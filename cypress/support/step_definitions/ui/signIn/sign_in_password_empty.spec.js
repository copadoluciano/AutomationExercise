import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('user put {word} on field e-mail',function(email){
    cy.typeField(this.signin.global.inputMail, email)
})

When('user leaves password field empty',function(){
    cy.isClear(this.signin.global.inputPassword)
})


