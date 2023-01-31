import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user view detail for manual counterparty {word}', function (cp_email) {
    cy.clic(this.header.header.btnCounterparties)
    cy.clic("//DIV[text()='"+cp_email+"']/../..//button[@data-cy='icon_button_details']")
})

Then('the user can see his {word}, {word} and the status of notifications', function (cp_name, cp_email) {
    cy.isVisible("//SPAN[@data-cy='name_value'][text()='"+cp_name+"']")
    cy.isVisible("//SPAN[@data-cy='email_0_value'][text()='"+cp_email+"']")
    for (let i= 1; i<=4; i++){
        cy.isVisible("(//*[local-name()='svg' and @data-icon='circle-check'])["+i+"]")

    }
})

