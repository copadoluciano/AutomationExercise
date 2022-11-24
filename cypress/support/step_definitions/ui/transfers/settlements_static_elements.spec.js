import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('the user is redirected to the "Transfers" page', function() {
    cy.clic(this.header.header.btnTransfers)
})

Then('the user visualizes "Transfers" page elements correctly', function() {
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




