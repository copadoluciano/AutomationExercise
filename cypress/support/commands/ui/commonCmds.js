Cypress.Commands.add('visitUrl', url => {
    cy.visit(url)
})
Cypress.Commands.add('clic', locator => {
    cy.xpath(locator, {timeout: 20000}).should("be.visible").click({force: true})
})
Cypress.Commands.add('isEqual', (var1, var2) => {
    expect(var1).to.equal(var2)
})
Cypress.Commands.add('notIsEqual', (var1, var2) => {
    expect(var1).to.not.equal(var2, { matchCase: false })
})
Cypress.Commands.add('isVisible', locator => {
    cy.xpath(locator, {timeout: 20000}).should('be.visible')
})
Cypress.Commands.add('isNotVisible', locator => {
    cy.xpath(locator, {timeout: 20000}, { matchCase: false }).should('not.be.visible')
})
Cypress.Commands.add('isExist', locator => {
    cy.xpath(locator).should('exist')
})
Cypress.Commands.add('isNotExist', locator => {
    cy.xpath(locator).should('not.exist')
})
Cypress.Commands.add('isEnabled', locator => {
    cy.xpath(locator, {timeout: 10000}).should('be.enabled')
})
Cypress.Commands.add('isDisabled', locator => {
    cy.xpath(locator, {timeout: 10000}).should('be.disabled')
})
Cypress.Commands.add('isClear', locator => {
    cy.xpath(locator).clear()
})
Cypress.Commands.add('haveValue', function (locator, value = '') {
    cy.xpath(locator).should('have.value', value)
})
Cypress.Commands.add('typeText', function (locator, value) {
    cy.xpath(locator, {timeout: 10000}).clear()
    cy.wait(1000)
    cy.xpath(locator, {timeout: 10000}).type(value)
})
Cypress.Commands.add('clickListOption', function (locator, option) {
    cy.xpath(locator).contains(option).click()
})
Cypress.Commands.add('forcedClick', locator => {
    cy.xpath(locator).click({force: true})
})
Cypress.Commands.add('haveText', function (locator, value = '') {
    cy.xpath(locator).should('have.text', value)
})
Cypress.Commands.add('containText', function (locator, value) {
    cy.xpath(locator).contains(value, { matchCase: false })
})

Cypress.Commands.add('typeField', (selector, text) => {
    cy.xpath(selector).type(text)
})

Cypress.Commands.add('urlShould', (url) => {
    cy.url().should('contain', url)
})

Cypress.Commands.add('fieldEmpty', (selector) => {
    cy.xpath(selector).should('be.empty')
})

Cypress.Commands.add('containsText', (selector, text) => {
    cy.xpath(selector).should('contain.text', text)
})

Cypress.Commands.add('staticElements', (xpathJson) => {
    var xpathArray = [];

    for (var i in xpathJson) {
        xpathArray.push([i, xpathJson[i]])
    }

    xpathArray.forEach(function (selector) {
        cy.log(selector[0])
        cy.isVisible(selector[1])
    })
})

Cypress.Commands.add('selectRightMenu', function (option) {
    cy.wait(5000)
    cy.clic(this.header.menuRight.menu)
    cy.clic("//a[@data-cy='profile_menu_option_"+option+"']")

})
Cypress.Commands.add('selectCustomToken', function (openModal, asset) {
    cy.clic(openModal)
    cy.xpath(this.buySell.manageToken.searchToken, {timeout: 20000}).type(asset)
    cy.xpath("(//h5[contains(.,'" + asset + "')])[1]", {timeout: 20000}).click()

})
Cypress.Commands.add('selectOption', function (menu, option) {
    cy.clic(menu) // Select counterparty
    cy.clic(option) // Close modal Counterparty

})
Cypress.Commands.add('selectCounterparty', function (openModal, counterparty) {
    cy.clic(openModal)
    cy.clic("//li[contains(@data-cy,'"+counterparty+"')]") // Select counterparty
    cy.clic("//*[local-name()='svg' and @data-cy='button_close_modal']") // Close modal Counterparty
})

Cypress.Commands.add('generateUser', function() {
    return new Promise((res) => {
        res(ULID.ulid())
    })
})

Cypress.Commands.add('selectNavButton', function (option) {
    cy.wait(3000)
    cy.clic("//div[contains(@class,'appTitle')]/following-sibling::div//a[text()='"+option+"']")
})

Cypress.Commands.add('clearAll', function() {
    cy.clearLocalStorage()
    // cy.clearCookies()
})

Cypress.Commands.add('selectButtonHeader', function (option) {
    cy.clic("//div[contains(@class,'buttonsHeader')]//button[contains(text(),'"+option+"')]")
})

Cypress.Commands.add('manageToken', function (adress) {
    cy.xpath(this.buySell.manageToken.searchToken).type(asset)
    cy.xpath("//h5[contains(.,'" + asset + "')]").click()

})

