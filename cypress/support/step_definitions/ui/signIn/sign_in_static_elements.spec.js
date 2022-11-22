import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')



Then('I should see the page sign-in with correct elements', function () {
    cy.staticElements(this.signin.global)
})