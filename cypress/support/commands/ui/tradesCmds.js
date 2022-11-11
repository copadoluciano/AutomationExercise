//const { expect } = require("chai")

Cypress.Commands.add('createOrderBuy', function (operation, currency, quantity, unit, price, duration1, duration2, counterparty) {
    let tradeLog = Cypress.log({
        name: 'Trade',
        displayName: 'TRADE',
        message: `${operation}, ${price}, ${quantity}, ${counterparty}`,
        autoEnd: false
    })
    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.createOrderBtn)
    cy.clic("//button[@data-order='" + operation + "']")
    cy.selectCustomToken(this.buySell.createOrder.fieldAsset, currency)
    cy.typeText(this.buySell.createOrder.fieldQuantity, quantity)
    cy.selectCustomToken(this.buySell.createOrder.fielUnitPrice, unit)
    cy.clic(this.buySell.createOrder.fieldPrice).type(price)
    cy.clic(this.buySell.createOrder.fieldOfferExpiration)
    cy.clic("//li[contains(@data-cy,'" + duration1 + "')]")
    cy.xpath(this.buySell.createOrder.fieldTimeExpiration).type(duration2)
    cy.clic(this.buySell.createOrder.fieldCounterparties)
    cy.wait(2000)
    cy.xpath("//SPAN[contains(text(),'" + counterparty + "')]/..//INPUT[@type='checkbox']").click()
    cy.get('[data-cy="button_close_modal"] > path')
    cy.clic(this.buySell.createOrder.createOrder)
    cy.isVisible("//span[contains(text(),'Your order has been Sent.')]")
    tradeLog.end()
})

Cypress.Commands.add('cancelOrder', function () {
    cy.wait(5000)
    cy.clic(this.buySell.cardClose.buttonViewMore)
    cy.wait(2000)
    cy.xpath("//DIV[contains(@class,'styles_ripple__')]").click()
    // cy.clic(this.buySell.reviewAcceptedOrder.buttonCancelOrder)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonAcceptConfirmation)
    cy.isVisible("//DIV[@data-cy='status'][text()='STATUS']/../../../../..//SPAN[text()='Canceled']")
    cy.isVisible("//DIV[@data-cy='detail_preview_row_last_operation_row_key_content']/../..//SPAN[@data-cy='status_label_text_canceled']")
   

})

Cypress.Commands.add('rejectOrder', function () {
    cy.wait(2000)
    cy.clic(this.buySell.cardClose.buttonViewMore)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonRejectOrder)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonAcceptConfirmation2)
})

Cypress.Commands.add('acceptOrderBuy', function () {
    cy.wait(3000)
    cy.clic("(//span[contains(.,'View More')])[1]")
    cy.clic(this.buySell.reviewAcceptedOrder.buttonAcceptOrder)
    cy.wait(2000)
    cy.clic(this.buySell.reviewAcceptedOrder.buttonAcceptConfirmation)
    cy.wait(5000)
    //cy.xpath(this.buySell.labelBuy).should('be.visible')
})

Cypress.Commands.add('validateAcceptOrder', function () {

})

Cypress.Commands.add('validateCardsTrades', function (operation, price, quantity, counterparty) {
    if (operation == 'Buy') {
        cy.containText(this.buySell.cardClose.typeOperation, operation) //Validate Type Operation
        cy.containText(this.buySell.cardClose.sendValueMaker, price * quantity) //validate sendValue
        cy.containText(this.buySell.cardClose.receiveValueMaker, quantity) //validate receiveValue
        cy.containText(this.buySell.cardClose.priceValue, price) //validate priceValue
        cy.containText(this.buySell.cardClose.counterParty, counterparty) //validate counterparty
    }
    else if (operation == 'Sell'){
        cy.containText(this.buySell.cardClose.typeOperation, operation) //Validate Type Operation
        cy.containText(this.buySell.cardClose.sendValueMaker, quantity) //validate sendValue
        cy.containText(this.buySell.cardClose.receiveValueMaker, price * quantity) //validate receiveValue
        cy.containText(this.buySell.cardClose.priceValue, price) //validate priceValue
        cy.containText(this.buySell.cardClose.counterParty, counterparty) //validate counterparty

    }



})

Cypress.Commands.add('validateCardsTradesTaker', function () {

    cy.clic(this.header.header.btnTrades)
    cy.clic(this.buySell.global.buttonInbox)
    //variables globales


    //Validate Type Operation
    cy.xpath(this.buySell.cardClose.typeOperation).then(function (typeOperation) {
        Cypress.env("typeOperation_taker", typeOperation.text())
        cy.log(Cypress.env("typeOperation_taker"))
    })
    //validate sendValue
    cy.xpath(this.buySell.cardClose.sendValueTaker).then(function (sendValue) {
        Cypress.env("sendValue_taker", sendValue.text())
        cy.log(Cypress.env("sendValue_taker"))
    })
    //validate receiveValue
    cy.xpath(this.buySell.cardClose.receiveValueTaker).then(function (receiveValue) {
        Cypress.env("receiveValue_taker", receiveValue.text())
        cy.log(Cypress.env("receiveValue_taker"))
    })
    //validate priceValue
    cy.xpath(this.buySell.cardClose.priceValue).then(function (priceValue) {
        Cypress.env("priceValue_taker", priceValue.text())
        cy.log(Cypress.env("priceValue_taker"))
    })
})

Cypress.Commands.add('validateCardsTradesMakerEqualTaker', function () {
    cy.notIsEqual(Cypress.env("typeOperation_maker"), Cypress.env("typeOperation_taker"))
    cy.isEqual(Cypress.env('sendValue_maker'), Cypress.env('receiveValue_taker'))
    cy.isEqual(Cypress.env('receiveValue_maker'), Cypress.env('sendValue_taker'))
    cy.isEqual(Cypress.env('priceValue_maker'), Cypress.env('priceValue_taker'))
})

// Cypress.Commands.add('validateTradesValues', function (operation, quantity, price) {
//     cy.isEqual(Cypress.env("typeOperation_maker"), operation)
//     if (operation == 'Buy') {
//         cy.contains(Cypress.env('sendValue_maker')).should('contain', quantity * price)
//         cy.contains(Cypress.env('receiveValue_maker')).should('contain', quantity)
//         cy.contains(Cypress.env('priceValue_maker')).should('contain', price)
//     } else {
//         cy.contains(Cypress.env('sendValue_maker')).should('contain', quantity)
//         cy.contains(Cypress.env('receiveValue_maker')).should('contain', quantity*price)
//         cy.contains(Cypress.env('priceValue_maker')).should('contain', price)
//     }
// })



Cypress.Commands.add('validateOperationTradesMaker', function (operation, currency, unit, quantity, price) {

    //Validate Type Operation
    cy.containText(this.buySell.OutboxReviewOrder.orderDetails.values.baseAsset, currency)
    cy.containText(this.buySell.OutboxReviewOrder.orderDetails.values.quoteAsset, unit)
    cy.containText(this.buySell.OutboxReviewOrder.orderDetails.values.typeOperation, operation)

})

Cypress.Commands.add('proposeOtherTermsTrades', function () {

    cy.xpath(this.buySell.cardClose.buttonViewMore).click()
    cy.xpath("(//div[contains(@class,'styles_button__1O9kI')])[2]").click()
    cy.xpath(this.buySell.createOrder.fieldQuantity).clear().type(0.006)
    cy.xpath(this.buySell.createOrder.fieldPrice).clear().type(0.007)
    cy.xpath("(//div[contains(@class,'styles_tooltipContainer_')])[1]").click()
    cy.xpath(this.buySell.reviewAcceptedOrder.buttonAcceptOrderConfirmation).click()

})



