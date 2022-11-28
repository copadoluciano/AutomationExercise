import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Then('I should see the page home with correct elements', function() {
    cy.staticElements(this.home.portfolio)
    // cy.staticElements(this.home.myWallets)
    cy.staticElements(this.home.recentOrders)
})




