import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Then('the user visualizes "Home" page elements correctly', function() {
    cy.staticElements(this.home.portfolio)
    // cy.staticElements(this.home.myWallets)
    cy.staticElements(this.home.recentOrders)
})




