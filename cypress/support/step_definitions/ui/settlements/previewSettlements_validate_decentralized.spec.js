import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('user at "Generate Preview Settlement"',function(){
    cy.login(Cypress.env('USER_EMAIL_17'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_17_DEMO'))
    cy.wait(2000)
    cy.clic(this.header.header.btnTransfers)
    cy.wait(2000)
})

When('the user try create new settlement between ethereum network vs ethereum network and chooses Decentralized Settlement', function(){
    cy.clic(this.settlement.global.buttonGenerateNewSettlements)
    cy.staticElements(this.settlement.newSettlement1)
    cy.wait(3000)
    cy.clic(this.settlement.others.fieldInput)
    cy.clic("(//li[@data-cy='li_counterparty_cypress_18'])[1]")
    cy.clic(this.settlement.others.nextBtn)
    cy.staticElements(this.settlement.newSettlement2)
})

Then('validate all the elements on Decentralized Settlement',function(){
    cy.clic(this.settlement.newSettlement2.btnDecentralized)
    cy.clic(this.settlement.newSettlement2.btnNext)
    cy.staticElements(this.settlement.generateDecentralizedSettlement.instructions)

    // Validate Instructions
    cy.isVisible("(//img[contains(@src,'ethereum_mainnet_eth_icon')])[1]")
    cy.isVisible("//img[contains(@src,'0x2e9d63788249371f1DFC918a52f8d799F4a38C94_mainnet_eth_icon')]")

    cy.xpath("//div[@data-cy='instruction_0']").should('contain.text', 'RECEIVE 0.01000000 ETH')
    cy.xpath("//div[@data-cy='instruction_1']").should('contain.text', 'SEND 0.01000000 TOKE')
    
    cy.isVisible("//div[@data-cy='type_0'][contains(.,'Decentralized')]")
    cy.isVisible("//div[@data-cy='type_1'][contains(.,'Decentralized')]")

    // Validate Related Transactions
    cy.clic(this.settlement.others.lastDisplayInfoRow)
    cy.staticElements(this.settlement.generateSettlement.relatedTransactions)
    cy.isVisible("//div[@data-cy='type_0'][contains(.,'Trading Order')]")
    cy.isVisible("//div[@data-cy='amountwithsign_0'][contains(.,'0.01000000 ETH')]")
})
