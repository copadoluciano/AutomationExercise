import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Security Center" page with {word}, {word} and {word}',function(email, password, secret){
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
// })

When('the user is in the password change module.', function() {
    cy.selectRightMenu("Security Center")
    cy.clic(this.securityCenter.global.btnChangePassword)
    for (let i = 1; i<=4; i++){
        cy.xpath("(//*[local-name()='svg' and @data-icon='circle-check' and @color='#777777'])["+i+"]")
    }
})

Then('the user visualizes Change Password page elements correctly', function() {
    cy.staticElements(this.securityCenter.changePasswd.labels)
})

