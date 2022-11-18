
Cypress.Commands.add('generateSettlement', function (operation) {
    cy.wait(3000)
    cy.clic(this.header.header.btnTransfers)
    cy.log("ORDER BF " + Cypress.env('orderId_maker'))
    cy.log("ORDER TK BF " + Cypress.env('orderId_taker'))
    // Click New Settlement Button
    cy.clic(this.settlement.global.buttonGenerateNewSettlements)

    cy.wait(3000)

    // Select Counterpartie
    cy.clic(this.settlement.others.fieldInput)
    cy.clic("(//span[contains(.,'Cypress')])[1]")
    cy.clic(this.settlement.others.nextBtn)
    cy.wait(4000)
    cy.xpath(this.settlement.newSettlement.generateSettlementBtn).click()
})

// Validate Instructions LOANS
Cypress.Commands.add('validateInstructionsLoans', function () {
    cy.log("VALIDATIONS INSTRUCTIONS LOANS")
    cy.xpath("//div[contains(@class, 'styles_tableCell')][contains(.,'" + Cypress.env('quantity_taker') + "')]").should('contain.text', "SEND " + Cypress.env('quantity_taker'))

})

// Validate Related Transactions LOANS
Cypress.Commands.add('validateRelatedTransactionsLoans', function () {
    cy.log("VALIDATIONS RELATED TRANSACTIONS LOANS")
    cy.clic(this.settlement.newSettlement.lastDisplayInfoRow)

    //STATIC ELEMENTS VALIDATION
    //----------------------------------
    cy.staticElements(this.settlement.generateSettlement.instructions)
    cy.staticElements(this.settlement.generateSettlement.relatedTransactions)
    //----------------------------------

    //Validate Order Id
    cy.xpath(this.settlement.generateSettlement.relatedTransactions.orderId).should('contain.text', 'Order ID: ' + Cypress.env('orderId_taker'))
    //Validate Type Operation
    cy.xpath(this.settlement.generateSettlement.relatedTransactions.orderType).should('contain.text', 'Order Type: ' + Cypress.env('operation_taker'))
    //Validate Send and receive
    cy.xpath("//div[contains(@class,'styles_operationContainer__ZjD-N')]").then(function (sendValue) {
        let sendValue_taker = sendValue.text()
        cy.log(sendValue_taker)
        // cy.haveValue(sendValue_taker,Cypress.env('sendValue_taker'))
        // cy.haveValue(sendValue_taker,Cypress.env('receiveValue_taker'))
        cy.contains(sendValue_taker).should('contain.text', Cypress.env('quantity_taker'))
        cy.log(Cypress.env('originalCollateral_taker'))
        cy.contains(sendValue_taker).should('contain.text', Cypress.env('originalCollateral_taker'))
    })
    //Validate Maker-Taker
    cy.xpath(this.settlement.generateSettlement.relatedTransactions.side).should('contain.text', Cypress.env('operation_taker'))
    //Validate Type Operation
    cy.xpath(this.settlement.generateSettlement.relatedTransactions.orderType).should('contain.text', 'Order Type: ' + Cypress.env('typeOperation_taker'))


})

// Validate Instructions
Cypress.Commands.add('validateInstructionsTrades', function () {


    cy.log("VALIDATIONS INSTRUCTIONS BUY SELL")
    // Validate Send Value
    cy.xpath("//div[contains(@class, 'styles_tableCell')][contains(.,'" + Cypress.env('sendValue_taker') + "')]").should('contain.text', 'SEND ' + Cypress.env('sendValue_taker'))
    cy.xpath("//div[contains(@class, 'styles_tableCell')][contains(.,'" + Cypress.env('receiveValue_taker') + "')]").should('contain.text', 'RECEIVE ' + Cypress.env('receiveValue_taker'))
    cy.xpath("//div[contains(@class, 'styles_tableCell')][contains(.,'" + Cypress.env('sendValue_taker') + "')]").should('contain.text', 'SEND ' + Cypress.env('sendValue_taker'))


})

// Validate Related Transactions
Cypress.Commands.add('validateRelatedTransactionsTrades', function () {

    cy.log(Cypress.env('setId_maker'))
    cy.log(Cypress.env('orderId_maker'))
    cy.log(Cypress.env('sendValue_maker_maker'))
    cy.log(Cypress.env('receiveValue_maker'))
    cy.log(Cypress.env('priceValue_maker'))

    cy.log("VALIDATIONS RELATED TRANSACTIONS TRADES")
    cy.clic(this.settlement.newSettlement.lastDisplayInfoRow)

    //STATIC ELEMENTS VALIDATION
    //----------------------------------
    cy.staticElements(this.settlement.generateSettlement.instructions)
    cy.staticElements(this.settlement.generateSettlement.relatedTransactions)
    //----------------------------------

    // Validate Order Id
    cy.xpath(this.settlement.generateSettlement.relatedTransactions.orderId).should('contain.text', 'Order ID: ' + Cypress.env('orderId_taker'))
    //Validate Type Operation
    cy.xpath(this.settlement.generateSettlement.relatedTransactions.orderType).should('contain.text', 'Order Type: ' + Cypress.env('typeOperation_taker'))
    //Validate Send and receive
    cy.xpath("//div[contains(@class,'styles_operationContainer__ZjD-N')]").then(function (sendValue) {
        let sendValue_taker = sendValue.text()
        cy.log(sendValue_taker)
        // cy.haveValue(sendValue_taker,Cypress.env('sendValue_taker'))
        // cy.haveValue(sendValue_taker,Cypress.env('receiveValue_taker'))
        cy.contains(sendValue_taker).should('contain.text', Cypress.env('sendValue_taker'))
        cy.contains(sendValue_taker).should('contain.text', Cypress.env('receiveValue_taker'))
    })



})




Cypress.Commands.add('validatePendingSettlement', function () {
    const dayjs = require('dayjs')
    cy.staticElements(this.settlement.generateSettlement.pendingSettlement)
    //VALIDATE CREATED ON
    cy.containText("//div[contains(@class,'styles_tableCell__')][contains(.,'" + dayjs().format('YYYY-MM-DD') + "')]", dayjs().format('YYYY-MM-DD'))

    //VALIDATE COUNTERPARTY
    cy.containText("//div[contains(@class,'styles_tableCell__')][contains(.,'Cypress')]", "Cypress")
})










function removeCurrency(value) {
    let end = false
    let i = value.length - 1

    while (end == false || i == 0) {
        let lastChar = value.charAt(i)
        if (lastChar.toLowerCase() != lastChar.toUpperCase()) {
            value = value.slice(0, -1)
            i = i - 1
        } else {
            end = true
        }
    }

    return value
}

function text(value) {
    cy.xpath(value).then(function (value2) {

        let collateral = value2.text()
        cy.log(collateral.replace("%", ""))
    })
    return cycollateral

}

Cypress.Commands.add('text', function (value){
        cy.xpath(value).then(function (value2) {
            let collateral = value2.text()
            let collateral1 = collateral.replace("%" , "")
            // cy.log(collateral.replace("%", " hola"))
        return cy.wrap(collateral1)
    })
})