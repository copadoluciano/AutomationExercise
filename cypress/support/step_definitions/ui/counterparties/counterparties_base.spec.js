import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user has a user {word} available to trade & lend', function(cp_email){
    cy.clic(this.header.header.btnCounterparties)
    cy.isVisible("//DIV[contains(@data-cy,'whitelist_statusparsed')][text()='Active']/../..//DIV[contains(@data-cy,'whitelist_email')][text()='"+Cypress.env(cp_email)+"']")
})

Then('the available user should appear in the list of {word}',function(counterparty){
    cy.clic(this.buySell.createOrder.fieldCounterparties)
    cy.isVisible("//SPAN[contains(@data-cy,'value_selectable_modal_list_item_"+counterparty+"')]")
})