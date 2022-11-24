import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type password invalid and change for a new password', function() {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.wait(3000)
    cy.clic(this.securityCenter.global.btnChangePassword)
    cy.typeText(this.securityCenter.changePasswd.fields.inputCurrentPassword, Cypress.env('USER_PASSWORD')+10)
    cy.typeText(this.securityCenter.changePasswd.fields.inputNewPassword, Cypress.env('USER_PASSWORD')+10)    
    cy.typeText(this.securityCenter.changePasswd.fields.inputRepeatNewPassword, Cypress.env('USER_PASSWORD')+10)

    for (let i = 1; i<=4; i++){
        cy.isVisible("(//div[contains(@style,'background-color: rgb(37, 194, 129)')])["+i+"]")
    }
    cy.wait(2000)
    cy.clic(this.securityCenter.changePasswd.others.btnNext)})

Then('I should see message label Error: Wrong password, try again', function() {
    cy.isVisible(this.securityCenter.changePasswd.others.alertWrongPasswd)
    
})



