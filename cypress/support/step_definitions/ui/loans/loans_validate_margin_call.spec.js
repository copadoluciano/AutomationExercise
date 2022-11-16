import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given('user is on the "Loans" page with {word}, {word} and {word}', function(email, password, secret) {
//     cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret))    
// })


// When('the user "Create Order" {word} {word} "order" of {word} {word} with {word} APR and {word} {word} duration, expiring in {word} {word} and {word} {word} as collateral, limited to {word} % with {word} and with {word} frecuency {word} {word}', function (operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral) {
//     cy.createOrderLoan(operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral)
//     cy.validateCardsLoans(operation, amount, collateral, collateralAsset, aprAmount, counterparty)
//     cy.logout()
// })


// Given('user "Create Borrow Order" {word} {word} "order" of {word} {word} with {word} APR and {word} {word} duration, expiring in {word} {word} and {word} {word} as collateral, limited to {word} % with {word} and is accepted {word}', function (operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency) {
//     const dayjs = require('dayjs')
//     var time = dayjs().format('HH.mm')
//     cy.log(time)
//     if (time < 17.00 && time < 18.00) {
//         cy.login(Cypress.env('USER_EMAIL_09'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_09_DEMO'))
//         cy.wait(2000)
//         cy.createOrderLoan(operation, typeLoan, currency, amount, aprAmount, duration1, duration2, offerExpiration1, offerExpiration2, collateral, collateralAsset, collateralLimit, counterparty, frecuency)
//         cy.logout()
//         cy.login(Cypress.env('USER_EMAIL_10'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_10_DEMO'))
//         cy.acceptOrderLoan()
//     } else {
//         cy.login(Cypress.env('USER_EMAIL_10'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_10_DEMO'))
//         cy.clic(this.header.header.btnLoans)
//     }


// })

// When('logout', function() {
//     cy.logout()
// })

When('the counterparty accept the order with {word}, {word} and {word}', function (cp_email, cp_password, cp_secret) {
    cy.login(Cypress.env(cp_email), Cypress.env(cp_password), Cypress.env(cp_secret))
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.buttons.buttonViewMore)
    cy.acceptOrderLoan()
})


When('the collateral is out of bounds {word}', function (collateralAsset) {
    cy.openMembrane()
    cy.wait(3000)
    // cy.text(this.loans.cardClose.currentCollateral)
    // for (let i = 1; i < 5; i++) {
    //     let currentCollateral = cy.text("(//DIV[@class='styles_label__1iiZs'][text()='Current Collateral'])[" + i + "]/following-sibling::DIV")
    //     //let currentCollateral1 = currentCollateral.replace("%", "")
    //     cy.log("hola " + currentCollateral)
    // }
    //let collateral = collateralLimit + 0.5

    for (let i = 1; i < 10; i++) {

        cy.xpath("(//DIV[@class='styles_label__1iiZs'][text()='Current Collateral'])[" + i + "]/following-sibling::DIV").then(function (value) {
            let collateral = value.text()
            collateral = collateral.replace("%", "")
            collateral = Number(collateral)

            cy.log("collateral " + collateral)
            if (collateral > 100.5) {
                cy.log("Collateral mayor a 100.5")
                cy.clic("(//span[contains(.,'View More')])[" + i + "]")
                // cy.isEnabled(this.loans.openCard.marginCall.btnMargCall)
                cy.isEnabled(this.loans.openCard.marginCall.btnRefund)
                cy.clic(this.loans.openCard.marginCall.btnRefund)
                cy.clic(this.loans.openCard.marginCall.acceptMargCall)
                cy.wait(4000)
                cy.clic(this.loans.activity.page)
                cy.xpath("//select[@data-cy='select']").select('50')
                cy.wait(4000)
                // cy.isVisible(this.loans.openCard.marginCall.alertMargCall)


                const dayjs = require('dayjs')
                    let time = dayjs().format('YYYY-MM-DD hh:')
                    cy.log(time)
                    cy.isVisible("//DIV[@class='styles_tableCell__4RsDS'][contains(text(),'" + time + "')]/../..//DIV[@class='styles_tableCell__4RsDS'][text()='Margin call']")
                    // cy.isVisible("//DIV[@class='styles_tableCell__4RsDS'][contains(text(),'" + time + "')]/../..//DIV[@class='styles_tableCell__4RsDS'][contains(text(),'" + collateralAsset + "')]")
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


