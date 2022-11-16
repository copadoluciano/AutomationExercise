import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Security Center" page with {word}, {word} and {word}',function(email, password, secret){
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
// })

When('the user is in the password change module.', function() {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.clic(this.securityCenter.global.btnChangePassword)
    for (let i = 1; i<=4; i++){
        cy.xpath("(//div[contains(@style,'background-color: rgb(221, 221, 221)')])["+i+"]")
    }
})

Then('the user visualizes Change Password page elements correctly', function() {
    cy.staticElements(this.securityCenter.changePasswd.labels)
})

