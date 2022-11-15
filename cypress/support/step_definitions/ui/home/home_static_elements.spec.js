import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Given('the user is registered in "Membrane Page"', function() {
    cy.login(Cypress.env('USER_EMAIL_05'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_05_DEMO'))
    
})

When('the user sign in and are on the "Home" page', function() {

})

Then('the user visualizes "Home" page elements correctly', function() {
    cy.staticElements(this.home.portfolio)
    // cy.staticElements(this.home.myWallets)
    cy.staticElements(this.home.recentOrders)
})




