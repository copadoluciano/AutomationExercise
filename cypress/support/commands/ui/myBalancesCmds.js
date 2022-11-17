
Cypress.Commands.add('validateToken', function (symbol)  {
    // Get tokens card
    cy.clic(this.wallets.global.showTokenBtn)
    cy.isVisible("//div[@data-cy='my_wallets_card_inner_name_"+symbol+"']")
})