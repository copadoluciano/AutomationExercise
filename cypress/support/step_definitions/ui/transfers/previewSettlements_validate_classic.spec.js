import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

// Given Login Library

When('the user try create new settlement between ethereum network vs ethereum network and chooses Classic Settlement', function(){
    cy.clic(this.header.header.btnTransfers)
    cy.clic(this.settlement.global.buttons.buttonGenerateNewSettlements)
    cy.clic(this.settlement.others.fieldInput)
    cy.clic("//H2[@data-cy='modal_title']/../..//SPAN[@data-cy='generate_settlement_select_counterparty_value'][text()='Cypress 08 Lootgnitset']")
    cy.wait(2000)
    cy.clic(this.settlement.others.nextBtn)
})

Then('validate all the values on Classic Settlement',function(){
    
    // Validate Instructions
    cy.isVisible("//img[@data-cy='instruction_name_https://api-staging.membranelabs.com/files/icons/litecoin_mainnet_ltc_icon.svg']")
    cy.xpath("//div[@data-cy='instruction_0']").should('contain.text', 'SEND 0.00100000 LTC')

    cy.isVisible("//img[@data-cy='instruction_name_https://api-staging.membranelabs.com/files/icons/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48_mainnet_eth_icon.svg']")
    cy.xpath("//div[@data-cy='instruction_1']").should('contain.text', 'RECEIVE 0.10000000 USDC')
    
    cy.isVisible("//div[@data-cy='type_0'][contains(.,'Blockchain')]")
    cy.isVisible("//div[@data-cy='type_1'][contains(.,'Blockchain')]")
    
    // Validate Related Transactions

    cy.isVisible("//div[@data-cy='settlement_preview_type_0'][contains(.,'Trading Order')]")
    cy.isVisible("//div[@data-cy='settlement_preview_amountwithsign_0'][contains(.,'(0.00100000) LTC')]")

})
