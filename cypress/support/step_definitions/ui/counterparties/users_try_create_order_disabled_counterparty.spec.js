import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Counterparties" page with {word}, {word} and {word}',function(){
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))
    
// })
When('the user try to create order with blocked {word}',function(cp_email){
    cy.clic(this.header.header.btnCounterparties)
    cy.isVisible("//DIV[contains(@class,'styles_tableCell__')][text()='"+Cypress.env(cp_email)+"']/../..//DIV[text()='Disabled']")
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.createOrderBtn)
})
Then('the user receive an alert to cant create New Order because doesnt have enabled your {word}',function(cp_email){
    cy.staticElements(this.buySell.emptyWhitelist)
    cy.clic(this.buySell.emptyWhitelist.btnGoCounterparties)
    cy.isVisible("//DIV[contains(@class,'styles_tableCell__')][text()='"+Cypress.env(cp_email)+"']/../..//DIV[text()='Disabled']")
    cy.logout()
   
    
})
