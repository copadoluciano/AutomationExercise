import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty will open some orders to validate the container', function () {
    cy.validateActivity()
})


