import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty try to accepts the order but will has the accept button disabled', function () {
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.cardClose.buttonViewMore)
    cy.isNotExist(this.buySell.reviewAcceptedOrder.buttonAcceptOrder)
})
When('the counterparty will have the button to import the custom token and will do so', function () {
    // cy.isVisible(this.buySell.reviewAcceptedOrder.buttonImportCustomToken)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonImportCustomToken)
    cy.clic(this.buySell.reviewAcceptedOrder.checkImportCustomToken)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonImport)

})
When('the counterparty will have the button to accept the order enabled', function () {
    cy.isVisible(this.buySell.reviewAcceptedOrder.buttonAcceptOrder)

})





