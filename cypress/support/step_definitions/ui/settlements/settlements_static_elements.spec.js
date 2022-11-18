import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user has navigated to Membrane Demo "Home" page', function() {
//     cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
    
// })

When('the user is redirected to the "Settlements" page', function() {
    cy.wait(2000)
    cy.clic(this.header.header.btnTransfers)
})

Then('the user visualizes "Settlements" page elements correctly', function() {
    cy.wait(2000)
    cy.staticElements(this.settlement.global.buttons)
    cy.staticElements(this.settlement.global.labels)
    cy.staticElements(this.settlement.global.fields)
    cy.clic(this.settlement.global.fields.status)
    cy.staticElements(this.settlement.settlementOpen.buttons)
    cy.staticElements(this.settlement.settlementOpen.labels)
    cy.staticElements(this.settlement.settlementOpen.fields)
    cy.logout()
})




