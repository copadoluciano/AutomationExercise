
Cypress.Commands.add('importToken', function (tokenContract) {
    cy.selectOption(this.wallets.importWallet.selectBlockchain, this.wallets.importWallet.selectEther)
    cy.typeText(this.wallets.importWallet.inputContract, tokenContract)
    cy.wait(2000)
    cy.clic(this.wallets.importWallet.btnImport)
    cy.wait(1000)
    cy.clic(this.wallets.others.checkTerms)
    cy.wait(1000)
    cy.clic(this.wallets.others.btnImport2)
    cy.wait(1000)
    cy.isVisible(this.wallets.others.popConfirmation)
})

Cypress.Commands.add('deleteToken', function (symbol) {
    cy.clic("//H5[contains(@data-cy,'import_token_symbol_')][text()='"+symbol+"']/../../..//button[contains(@data-cy,'import_token_trash_address_')]")
    
})

Cypress.Commands.add('setNewAddress', function (asset, address) {
    cy.request({
        url: Cypress.env('env-qa') + "/v2/blockchain/addresses",
        method: "PUT",
        body: {
            sendingAddress: address,
            sendingAddressType: 2,
            assetId: asset
        },
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('auth-token')
        }
    })
})

Cypress.Commands.add('deleteNewAddress', function (asset) {
    cy.request({
        url: Cypress.env('env-qa') + "/v2/blockchain/addresses",
        method: "PUT",
        body: {
            assetId: asset,
            sendingAddress: null,
            depositSameAsSending: false,
            useNativeBlockchainAddress: false
        },
        headers: {
            'Authorization': 'Bearer ' + window.localStorage.getItem('auth-token')
        }
    })
})

Cypress.Commands.add('etcSndAddrsEmpty', function () {
    cy.haveValue(this.wallets.cards.etcSndAddrsInput)
})

Cypress.Commands.add('walletBalance', function (token, amount) {
    cy.xpath("//span[contains(.,'" + token + "')]//ancestor::div[contains(@class,'coinCard_')]//span[contains(text(),'Wallet Balance')]//following-sibling::div//span")
        .should('have.text', amount)
})