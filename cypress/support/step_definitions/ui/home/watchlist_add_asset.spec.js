import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('I add a {word} to the watchlist', function(currency) {
    cy.clic("(//*[local-name()='svg' and @data-icon='angle-down'])[1]")
    cy.wait(3000)
    cy.click("//h5[@data-cy'symbol_asset_"+asset+"']")
    cy.clic(this.home.watchlist.editWatchList.buttonAddAsset)
    cy.wait(2000)
})

Then('I should see the {word} and {word} in WatchList', function(currency, icon) {
    cy.isVisible("//div[contains(@class,'styles_assetWrapper__')][contains(.,'"+currency+"')]")
    cy.isVisible("//img[contains(@src,'"+icon+".svg') and @alt='asset']")
    cy.clic(this.home.watchlist.editWatchList.buttonClose)
    cy.staticElements(this.home.watchlist.currency)
    cy.clic(this.home.watchlist.buttonEditWatch)
    cy.clic(this.home.watchlist.editWatchList.buttonTrash)
    cy.clic(this.home.watchlist.editWatchList.buttonClose)
})




