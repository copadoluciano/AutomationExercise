import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Security Center" page with {word}, {word} and {word}',function(email, password, secret){
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
// })

When('the user not completes the password', function() {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.wait(3000)
    cy.clic(this.securityCenter.global.btnChangePassword)
    cy.typeText(this.securityCenter.changePasswd.fields.inputCurrentPassword, ' ')
    cy.typeText(this.securityCenter.changePasswd.fields.inputNewPassword, ' ')    
    cy.typeText(this.securityCenter.changePasswd.fields.inputRepeatNewPassword, ' ')

})

Then('the "Next" button are disabled', function() {
    cy.clic(this.securityCenter.changePasswd.others.btnNext)
    cy.isVisible(this.securityCenter.changePasswd.others.alertWrongPasswd)

})




