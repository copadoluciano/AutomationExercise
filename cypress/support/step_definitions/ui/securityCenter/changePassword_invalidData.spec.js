import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user is on the "Security Center" page with {word}, {word} and {word}',function(email, password, secret){
    cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))

})

When('the user completes the password with invalid data', function() {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.wait(3000)
    cy.clic(this.securityCenter.global.btnChangePassword)
    cy.typeText(this.securityCenter.changePasswd.fields.inputCurrentPassword, Cypress.env('USER_PASSWORD')+10)
    cy.typeText(this.securityCenter.changePasswd.fields.inputNewPassword, Cypress.env('USER_PASSWORD')+10)    
    cy.typeText(this.securityCenter.changePasswd.fields.inputRepeatNewPassword, Cypress.env('USER_PASSWORD')+10)

    for (let i = 1; i<=4; i++){
        cy.isVisible("(//*[local-name()='svg' and @data-icon='circle-check' and @color='#6fcf97'])["+i+"]")
    }
    cy.wait(2000)
    cy.clic(this.securityCenter.changePasswd.others.btnNext)})

Then('he receives a alert "Error: Wrong password, try again"', function() {
    cy.isVisible(this.securityCenter.changePasswd.others.alertWrongPasswd)
    
})



