import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I go to change password page', function() {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.clic(this.securityCenter.global.btnChangePassword)
    for (let i = 1; i<=4; i++){
        cy.xpath("(//div[contains(@style,'background-color: rgb(221, 221, 221)')])["+i+"]")
    }
})

Then('I should see the page change password with correct elements', function() {
    cy.staticElements(this.securityCenter.changePasswd.labels)
})

