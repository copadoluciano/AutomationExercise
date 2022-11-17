import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user completes with {word}, {word} valid data',function(email, password){
    cy.typeField(this.signin.global.inputMail, Cypress.env(email))
    cy.typeField(this.signin.global.inputPassword, Cypress.env(password))
    cy.clic(this.signin.global.buttonNext)

})

When('user redirect to twofactor autentication page',function(){
    cy.urlShould("/two-factor")

})

When('user put token {word} in field token',function(invalid){
    cy.typeField(this.twoFa.token, invalid)
    cy.clic(this.twoFa.twofaNext)
})

Then('the alert message label "Your code is wrong or expired, try again" should be shown',function(){
    cy.isVisible(this.twoFa.token_lbl_invalid)
})

Then('the alert pop message "Your code is wrong or expired, try again" should be shown',function(){
    cy.isVisible(this.twoFa.token_pop_invalid)
})