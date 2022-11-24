import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('the user try to create order with Not Available {word}',function(cp_email){
    cy.clic(this.header.header.btnCounterparties)
    // cy.isVisible("//DIV[text()='"+Cypress.env(cp_email)+"']/../..//DIV[text()='Not Available']")
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.createOrderBtn)
})
Then('the user doesnt have this {word} enabled to create an trading and lending operation',function(cp_email){
    cy.staticElements(this.buySell.emptyWhitelist)
    cy.clic(this.buySell.emptyWhitelist.btnGoCounterparties)
    cy.isVisible("//DIV[text()='"+Cypress.env(cp_email)+"']/../..//DIV[text()='Not Available']")  
    
})
