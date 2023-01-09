import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

let asset = ['falso', 'eth', 'ltc', 'bch', 'snx', 'toke', 'btc', 'bnb', 'avax']


When('I add a asset to the watchlist', function () {

})

Then('I should see the asset in WatchList', function () {
    for (let i = 1; i <= 8; i++) {
        cy.wait(5000)
        cy.clic("(//*[local-name()='svg' and @data-icon='angle-down'])[1]")
        cy.wait(3000)
        cy.selectAsset(asset[i])
        cy.isVisible("//img[@data-cy='whitelist_chart_img_logo_" + asset[i] + "']")
        cy.isVisible("//span[@data-cy='whitelist_chart_symbol_" + asset[i] + "']")
        cy.isVisible("//span[@data-cy='whitelist_chart_usd_value_" + asset[i] + "']")
        cy.isVisible("//div[@data-cy='market_price_percentage_whitelist_chart_percentage_" + asset[i] + "']")
    }
})

