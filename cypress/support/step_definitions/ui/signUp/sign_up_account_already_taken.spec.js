import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Then('an alert will appear .',function () {
    cy.isVisible(this.signup.global.haveAccountLink)
})