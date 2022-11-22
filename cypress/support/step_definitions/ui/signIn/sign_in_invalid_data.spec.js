import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('I type {word}, {word} invalid in the email and password fields',function(email, password){
    cy.typeText(this.signin.global.inputMail, email)
    cy.typeText(this.signin.global.inputPassword, password)
    cy.wait(3000)
    cy.clic(this.signin.global.buttonNext)

})

Then('I should see the message label Error: Wrong email or password, try again',function(){
    // Create JSON for Home static elements and use CY Command
    cy.isVisible(this.signin.popAlerts.popUpAlertEmailNotRegister)
})