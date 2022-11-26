import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


// Given Login Library

Given('user at "Generate Settlement"',function(){
    cy.login(Cypress.env('USER_EMAIL_07'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_07'))
    cy.wait(2000)
    //Create Order
    cy.createOrderBuy(operation, currency, quantity, unit, price, duration1, duration2, counterparty)
    cy.validateCardsTradesMaker()
    cy.validateTradesValues(operation, quantity, price)
    cy.logout()
})

When('the user create new tradesettlement between ethereum network vs ethereum network and chooses Decentralized Settlement', function(){
   
    //Accept order
    cy.login(Cypress.env('USER_EMAIL_08'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_08'))
    cy.wait(3000)
    cy.clic(this.header.header.btnTrades)
    cy.validateCardsTradesTaker()
    cy.validateCardsTradesMakerEqualTaker()
    cy.wait(2000)
    cy.acceptOrderBuy()
    
    
    cy.clic(this.settlement.global.buttonGenerateNewSettlements)
    cy.staticElements(this.settlement.newSettlement1)
    cy.wait(3000)
    cy.clic(this.settlement.others.fieldInput)
    cy.clic("(//li[@data-cy='li_counterparty_cypress_18'])[1]")
    cy.clic(this.settlement.others.nextBtn)
    cy.staticElements(this.settlement.newSettlement2)
})

Then('validate all the elements on the Classic Settlement',function(){
    cy.clic(this.settlement.newSettlement2.btnClassic)
    cy.clic(this.settlement.newSettlement2.btnNext)
    cy.staticElements(this.settlement.generateSettlement.instructions)
    
    // Validate Instructions
    cy.isVisible("(//img[contains(@src,'ethereum_mainnet_eth_icon')])[1]")
    cy.isVisible("(//img[contains(@src,'ethereum_mainnet_eth_icon')])[2]")
    cy.isVisible("//img[contains(@src,'0x2e9d63788249371f1DFC918a52f8d799F4a38C94_mainnet_eth_icon')]")
    cy.xpath("//div[@data-cy='instruction_0']").should('contain.text', 'RECEIVE 0.01000000 ETH')
    cy.xpath("//div[@data-cy='instruction_1']").should('contain.text', 'SEND 0.01000000 TOKE')
    
    cy.isVisible("//div[@data-cy='type_0'][contains(.,'Blockchain')]")
    cy.isVisible("//div[@data-cy='type_1'][contains(.,'Blockchain')]")
    cy.isVisible("//div[@data-cy='blockchainfees_0'][contains(.,'Fees will be paid by counterparty')]")
    
    // Validate Related Transactions
    cy.clic(this.settlement.others.lastDisplayInfoRow)
    cy.staticElements(this.settlement.generateSettlement.relatedTransactions)

    cy.xpath(this.settlement.generateSettlement.relatedTransactions.orderType).should('contain.text', 'Order Type: Buy')
    cy.isVisible("//div[@data-cy='type_0'][contains(.,'Trading Order')]")
    cy.isVisible("//div[@data-cy='amountwithsign_0'][contains(.,'0.01000000 ETH')]")

})
