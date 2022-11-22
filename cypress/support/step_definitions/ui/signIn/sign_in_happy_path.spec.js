import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')



Then('I should see the membrane home page', function () {
    // Create JSON for Home static elements and use CY Command
    cy.xpath("//h4[text()='Watchlist']").should('exist')
    cy.logout()
})