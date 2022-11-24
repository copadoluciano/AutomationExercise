import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I do not type password and do not type a new password', function() {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.wait(3000)
    cy.clic(this.securityCenter.global.btnChangePassword)
    cy.typeText(this.securityCenter.changePasswd.fields.inputCurrentPassword, ' ')
    cy.typeText(this.securityCenter.changePasswd.fields.inputNewPassword, ' ')    
    cy.typeText(this.securityCenter.changePasswd.fields.inputRepeatNewPassword, ' ')

})

Then('I should see the Next button disabled in change password page', function() {
    cy.clic(this.securityCenter.changePasswd.others.btnNext)
    cy.isVisible(this.securityCenter.changePasswd.others.alertWrongPasswd)

})




