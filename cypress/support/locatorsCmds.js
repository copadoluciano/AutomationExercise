Cypress.Commands.add('locators', () => {
    cy.fixture("locators.json").then(function (locators) {
        this.locators = locators
    })
})