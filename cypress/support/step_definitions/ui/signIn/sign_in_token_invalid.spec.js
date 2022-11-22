import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type {word}, {word} in the email and password fields',function(email, password){
    cy.typeField(this.signin.global.inputMail, Cypress.env(email))
    cy.typeField(this.signin.global.inputPassword, Cypress.env(password))
    cy.clic(this.signin.global.buttonNext)

})

When('I should see the twofactor autentication page',function(){
    cy.urlShould("/two-factor")

})

When('I type {word} invalid in the token field',function(invalid){
    cy.typeField(this.twoFa.token, invalid)
    cy.clic(this.twoFa.twofaNext)
})

Then('I should see the message label Your code is wrong or expired, try again',function(){
    cy.isVisible(this.twoFa.token_lbl_invalid)
})

Then('I should see the pop-up message Your code is wrong or expired, try again',function(){
    cy.isVisible(this.twoFa.token_pop_invalid)
})