import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the counterparty accept the order with {word}, {word} and {word}', function (cp_email, cp_password, cp_secret) {
    cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
    cy.clic(this.loans.buttons.buttonViewMore)
    cy.acceptOrderLoan()
})


When('the collateral is out of bounds {word}', function (collateralAsset) {
    cy.openMembrane()
    for (let i = 1; i < 8; i++) {

        cy.xpath("(//div[@data-cy='proposal_card_current_collateral_wrapper_content'])[" + i + "]").then(function (value) {
            let collateral = value.text()
            collateral = collateral.replace("%", "")
            collateral = Number(collateral)

            cy.log("collateral " + collateral)
            if (collateral > 100.5) {
                cy.log("Collateral mayor a 100.5")
                cy.clic("(//span[contains(.,'View More')])[" + i + "]")
                cy.isEnabled(this.loans.openCard.marginCall.btnRequestRefund)
                cy.clic(this.loans.openCard.marginCall.btnRequestRefund)
                cy.clic(this.loans.openCard.marginCall.acceptMargCall)
                cy.wait(4000)
                cy.clic(this.loans.activity.page)
                // cy.xpath("//select[@data-cy='select']").select('50')
                // cy.wait(4000)
                const dayjs = require('dayjs')
                    let time = dayjs().format('YYYY-MM-DD hh:')
                    cy.log(time)
                    cy.isVisible("//DIV[contains(@class,'styles_tableCell__')][contains(text(),'" + time + "')]/../..//div[contains(text(),'Margin call')]")
                    // cy.isVisible("//DIV[@class='styles_tableCell__4RsDS'][contains(text(),'" + time + "')]/../..//DIV[@class='styles_tableCell__4RsDS'][contains(text(),'" + collateralAsset + "')]")
                    //DIV[@class='styles_tableCell__4RsDS'][text()='2022-12-20 04:38 PM']/../..//DIV[@class='styles_tableCell__4RsDS'][text()='Margin call']
                    cy.clic(this.loans.openCard.global.back)
            } else {
                cy.log("NO hay collateral mayor  100.5")
            }
        })
    }
})
Then('the margin call button will be enabled', function () {
})

Then('and pressing it we will see the new transaction', function () {
})


