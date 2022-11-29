Cypress.Commands.add('createOrderLoan', function (operation, typeLoan, currency, amount, aprAmount, duration2, duration1, offerExpiration2, offerExpiration1, collateral, collateralAsset, collateralLimit, counterparty, frecuency, repayFee, refundCollateral) {
    cy.clic(this.header.header.btnLoans) // Header Loans
    cy.clic(this.loans.global.btnNewLoan) // Create Loan
    cy.clic("//button[@data-cy='button_" + operation + "']") // Select operation Loan
    cy.clic("//span[contains(text(),'" + typeLoan + "')]") // Select type Loan
    cy.selectCounterparty(this.loans.createOrder.fixedTerm.fields.selectCounterparty, counterparty) // Open Modal & Select counterparty
    cy.selectCustomToken(this.loans.createOrder.fixedTerm.fields.selectAmount, currency) // Open Modal & Select Asset
    cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldAmount, amount) // Type Amount
    cy.selectOption(this.loans.createOrder.fixedTerm.fields.selectOffer, "//li[contains(@data-cy,'li_select_form_content_lend_borrow_expiration_unit_select_selectable_" + offerExpiration1 + "')]") // Select Offer expiration

    //cy.isVisible(ESTIMATED MADURITY DATE)

    cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldOffer, offerExpiration2) // Input Time Expiration
    cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldInterestRate, aprAmount) // Input Interest Rate
    // Open Term
    if (typeLoan.includes("Open")) {
        let loanLog = Cypress.log({
            name: 'Loan',
            displayName: 'LOAN OPEN TERM',
            message: operation + ' ' + typeLoan,
            autoEnd: false
        })
        //cy.isVisible(ESTIMATED MADURITY DATE)

        //cy.isVisible(TOTAL INTERESET TO BE EARN AT MATURITY)
        cy.selectOption(this.loans.createOrder.fixedTerm.fields.fieldAccrual, "//li[@data-cy='li_select_form_content_lend_borrow_accrual_type_select_selectable_365']") // Select Accrual Type
        cy.selectOption(this.loans.createOrder.fixedTerm.fields.fieldPayFrecuency, "//li[contains(@data-cy,'li_select_form_content_lend_borrow_payment_frequency_selectable_" + frecuency + "')]") // Select Payment Frecuency
        loanLog.end()
    }
    // Fixed Term
    else if (typeLoan.includes("Fixed")) {
        let loanLog = Cypress.log({
            name: 'Loan',
            displayName: 'LOAN FIXED TERN',
            message: operation + ' ' + typeLoan,
            autoEnd: false
        })
        cy.selectOption(this.loans.createOrder.fixedTerm.fields.selectDuration, "//li[contains(@data-cy,'li_select_selectable_" + duration1 + "')]") // Select Duration Time
        cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldDuration, duration2) // Input Duration Time
        //cy.isVisible(ESTIMATED MADURITY DATE)

        //cy.isVisible(TOTAL INTERESET TO BE EARN AT MATURITY)
        cy.selectOption(this.loans.createOrder.fixedTerm.fields.fieldAccrual, "//span[contains(.,'365')]") // Select Accrual Type
        cy.selectOption(this.loans.createOrder.fixedTerm.fields.fieldPayFrecuency, "//li[contains(@data-cy,'li_select_form_content_lend_borrow_payment_frequency_selectable_" + frecuency + "')]") // Select Payment Frecuency
        cy.selectOption(this.loans.createOrder.fixedTerm.fields.selectRepayFee, "//li[contains(@data-cy,'li_select_selectable_" + repayFee + "')]")
        loanLog.end()
    }
    // Intraday
    else if (typeLoan.includes("Intraday")) {
        let loanLog = Cypress.log({
            name: 'Loan',
            displayName: 'LOAN INTRADAY',
            message: operation + ' ' + typeLoan,
            autoEnd: false
        })
        //cy.isVisible(ESTIMATED MADURITY DATE)
        //cy.isVisible(TOTAL INTERESET TO BE EARN AT MATURITY)
        loanLog.end()

    }
    // Collateral
    cy.selectCustomToken(this.loans.createOrder.fixedTerm.fields.selectCollateralAsset, collateralAsset) // Select Collateral Asset

    cy.xpath(this.loans.createOrder.fixedTerm.fields.fieldCollateralPercent).clear() // Clear Collateral
    cy.xpath(this.loans.createOrder.fixedTerm.fields.fieldCollateralPercent).clear() // Clear Collateral
    cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldCollateralPercent, collateral)

    cy.xpath(this.loans.createOrder.fixedTerm.fields.fieldMarginCollateralization).clear() // Clear Collateral Limit Default
    cy.xpath(this.loans.createOrder.fixedTerm.fields.fieldMarginCollateralization).clear()
    cy.wait(2000)
    cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldMarginCollateralization, collateralLimit) // // Input Collateral Limit (Margin Call)

    cy.xpath(this.loans.createOrder.fixedTerm.fields.fieldRefundCollateralization).clear() // Clear Refund Collateralization
    cy.wait(2000)
    cy.typeText(this.loans.createOrder.fixedTerm.fields.fieldRefundCollateralization, refundCollateral) // Input Refund Collateralization (repayFee)
    cy.clic(this.loans.createOrder.fixedTerm.fields.btnPlaceOffer)
    cy.isVisible(this.loans.createOrder.others.msgSent)

})

Cypress.Commands.add('acceptOrderLoan', function (counterparty, operation, amount, typeLoan, duration2, duration1, aprAmount, frecuency, repayFee, collateral, collateralAsset, collateralLimit, refundCollateral) {
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.global.btnOrders)
    cy.clic(this.loans.buttons.buttonViewMore)
    cy.clic(this.loans.buttons.buttonAcceptOrder)
    cy.wait(2000)
    cy.clic(this.loans.buttons.buttonAcceptConfirmation2)
    cy.isVisible(this.loans.createOrder.others.msgAccept)

})

Cypress.Commands.add('openMembrane', function () {
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.global.buttonPositions)
    cy.wait(1000)
    cy.clic("//div[@data-cy='input_container_type']")
    cy.wait(1000)
    cy.clic("//SPAN[text()='Membrane']")

})

Cypress.Commands.add('rejectOrderLoan', function () {
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.global.btnOrders)
    cy.clic(this.loans.buttons.buttonViewMore)
    cy.wait(2000)
    cy.clic(this.loans.buttons.buttonRejectOrder)
    cy.wait(2000)
    cy.clic(this.loans.buttons.buttonAcceptConfirmation2)
})


Cypress.Commands.add('cancelOrderLoan', function () {
    cy.clic(this.header.header.btnLoans)
    cy.clic(this.loans.global.btnOrders)
    cy.clic(this.loans.global.buttonOutbox)
    cy.clic(this.loans.buttons.buttonViewMore)
    cy.clic(this.loans.buttons.buttonCancelOrder)
    cy.clic(this.loans.buttons.buttonAcceptCancelOrder)
    cy.isNotExist(this.loans.buttons.buttonViewMore)
})




Cypress.Commands.add('validateActivity', function () {
    var moment = require('moment'); // require
    const dayjs = require('dayjs')
    cy.openMembrane()

    for (let i = 1; i < 3; i++) {
        
        var server = dayjs().format('HH.mm')
        cy.xpath("(//DIV[@data-cy='proposal_card_lend_duration_content'][text()='Intraday'])[" + i + "]/../../..//SPAN[text()='View More']").click()

        var timeAccepted = cy.xpath("//DIV[text()='OPEN DATE']/../..//SPAN[contains(@class,'styles_valueContent__')]").then(function (acceptedOn) {
            let accepted = acceptedOn.text().slice(11, 19).replace(":", ".")
            let day = dayjs().format('DD')
            let day2 = acceptedOn.text().slice(8, 10)
            let interestFrom = acceptedOn.text()

            cy.log('dia servidor: ' + day + ' dia front: ' + day2)
            cy.log('hr min servidor: ' + server)
            cy.log('hr aceptada: ' + accepted)
            let accepted24 = moment(accepted, "hh.mm A").format("HH.mm");
            cy.log('new ' + accepted24)
            cy.log('interest from: ' + interestFrom)
            // cy.log(accepted.slice(19, 26))

            if (day == day2 && accepted24 < 19.00 && server > 19.01) {

                cy.log("1 The order was accepted before to loan close")
                //existe en activity
                cy.xpath(this.loans.activity.principalPayment).should("exist")
                cy.xpath(this.loans.activity.principalPayBack).should("exist")
                cy.xpath(this.loans.activity.closingInterestPayment).should("exist")


                //no existe en payment schedule

                cy.xpath(this.loans.paymentSchedule.txPrincipalPayBack).should("not.exist")
                cy.xpath(this.loans.paymentSchedule.dailyInterestPayment).should("not.exist")

                cy.wait(1000)
                cy.clic(this.loans.openCard.global.back)
                cy.wait(1000)

            } else if (day2 < day && accepted24 < 19.00) {

                cy.log("2 The order was accepted before to loan close")
                //existe en activity
                cy.xpath(this.loans.activity.principalPayment).should("exist")
                cy.xpath(this.loans.activity.principalPayBack).should("exist")
                cy.xpath(this.loans.activity.closingInterestPayment).should("exist")


                //no existe en payment schedule

                cy.xpath(this.loans.paymentSchedule.txPrincipalPayBack).should("not.exist")
                cy.xpath(this.loans.paymentSchedule.dailyInterestPayment).should("not.exist")

                cy.wait(1000)
                cy.clic(this.loans.openCard.global.back)
                cy.wait(1000)

            } else { //sino corrio el container aun
                cy.log("3 The order was accepted after to loan close")
                //existe en activity
                cy.xpath(this.loans.activity.principalPayment).should("exist")
                //existe en payment schedule
                cy.xpath(this.loans.paymentSchedule.txPrincipalPayBack).should("exist")
                cy.xpath(this.loans.paymentSchedule.dailyInterestPayment).should("exist")


                //no exite en activity   
                cy.xpath(this.loans.activity.closingInterestPayment).should("not.exist")
                cy.xpath(this.loans.activity.principalPayBack).should("not.exist")


                cy.wait(1000)
                cy.clic(this.loans.openCard.global.back)
                cy.wait(1000)


            }

        }
        )
    }



})




Cypress.Commands.add('validateCardsLoans', function (operation, amount, collateral, collateralAsset, aprAmount, counterparty) {
    let loanLog = Cypress.log({
        name: 'Validate vallues card',
        displayName: 'CARD CLOSE:  ',
        message: 'Validate Values',
        autoEnd: false
    })
    cy.containText(this.loans.cardClose.typeOperation, operation) //Validate Type Operation
    cy.containText(this.loans.cardClose.quantity, amount) //validate quantity
    cy.containText(this.loans.cardClose.originalCollateral, collateral) //validate collateral
    cy.containText(this.loans.cardClose.collateralAsset, collateralAsset) //validate priceValue
    cy.containText(this.loans.cardClose.annualPercentage, aprAmount) //validate apr Amount
    cy.containText(this.loans.cardClose.counterparty, counterparty) //validate counterparty
    loanLog.end()
})

Cypress.Commands.add('validateCardsLoansTaker', function (operation, amount, collateral, collateralAsset, aprAmount, counterparty) {
    let loanLog = Cypress.log({
        name: 'Validate vallues card',
        displayName: 'CARD CLOSE:  ',
        message: 'Validate Values',
        autoEnd: false
    })
    cy.notIsEqual(this.loans.cardClose.typeOperation, operation) //Validate Type Operation
    cy.containText(this.loans.cardClose.quantity, amount) //validate quantity
    cy.containText(this.loans.cardClose.originalCollateral, collateral) //validate collateral
    cy.containText(this.loans.cardClose.annualPercentage, aprAmount) //validate apr Amount
    cy.notIsEqual(this.loans.cardClose.counterparty, counterparty) //validate counterparty
    loanLog.end()
})

Cypress.Commands.add('validateReviewLoans', function (counterparty, amount, typeLoan, duration1, duration2, aprAmount, frecuency, repayFee, collateralLimit, refundCollateral) {
    let loanLog = Cypress.log({
        name: 'Validate vallues open loan',
        displayName: 'OPEN LOAN: ',
        message: 'Validate Values',
        autoEnd: false
    })
    cy.containText(this.loans.outboxOrder.counterparty, counterparty) //Validate Counterparty
    cy.containText(this.loans.outboxOrder.amount, amount) // Validate Amount
    cy.containText(this.loans.outboxOrder.typeLoan, typeLoan) // Validate Loan Type
    cy.containText(this.loans.outboxOrder.aprAmount, aprAmount) // Validate Interest Rate
    cy.containText(this.loans.outboxOrder.paymentFrequency, frecuency) // Validate Payment Frecuency

    cy.containText(this.loans.outboxOrder.marginCallCollateralization, collateralLimit) // Validate Margin Call Collateralization
    cy.containText(this.loans.outboxOrder.refundCollateralCollateralization, refundCollateral) // Validate Margin Call Collateralization
    if (typeLoan == 'Fixed') {
        cy.containText(this.loans.outboxOrder.duration, `${duration2} ${duration1}`) // Validate Duration
        cy.containText(this.loans.outboxOrder.repaymentFee, repayFee) // Validate Repayment Fee
    }
    loanLog.end()
})

Cypress.Commands.add('validateReviewLoansTaker', function (counterparty, amount, typeLoan, duration1, duration2, aprAmount, frecuency, repayFee, collateralLimit, refundCollateral) {
    let loanLog = Cypress.log({
        name: 'Validate vallues open loan',
        displayName: 'OPEN LOAN: ',
        message: 'Validate Values',
        autoEnd: false
    })

    cy.log(frecuency)
    cy.notIsEqual(this.loans.outboxOrder.counterparty, counterparty) //Validate Counterparty
    cy.containText(this.loans.outboxOrder.amount, amount) // Validate Amount
    cy.containText(this.loans.outboxOrder.typeLoan, typeLoan) // Validate Loan Type
    cy.containText(this.loans.outboxOrder.aprAmount, aprAmount) // Validate Interest Rate
    // cy.containText(this.loans.outboxOrder.paymentFrequency, frecuency) // Validate Payment Frecuency

    cy.containText(this.loans.outboxOrder.marginCallCollateralization, collateralLimit) // Validate Margin Call Collateralization
    cy.containText(this.loans.outboxOrder.refundCollateralCollateralization, refundCollateral) // Validate Margin Call Collateralization
    if (typeLoan == 'Fixed') {
        cy.containText(this.loans.outboxOrder.duration, `${duration2} ${duration1}`) // Validate Duration
        cy.containText(this.loans.outboxOrder.repaymentFee, repayFee) // Validate Repayment Fee
    }
    loanLog.end()
})

