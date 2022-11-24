import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I click on Already have an account?',function () {
    cy.clic(this.signup.global.haveAccountLink)
})
