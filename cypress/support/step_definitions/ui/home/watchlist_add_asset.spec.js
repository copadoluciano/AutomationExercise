import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('I add a {word} to the watchlist', function(asset) {
    cy.wait(5000)
    cy.clic("(//*[local-name()='svg' and @data-icon='angle-down'])[1]")
    cy.wait(3000)
    cy.selectAsset(asset)
})

Then('I should see the {word} and {word} in WatchList', function(asset, icon) {
    cy.isVisible("//img[@data-cy='whitelist_chart_img_logo_"+asset+"']")
    cy.isVisible("//span[@data-cy='whitelist_chart_symbol_"+asset+"']")
    cy.isVisible("//span[@data-cy='whitelist_chart_usd_value_"+asset+"']")
    cy.isVisible("//div[@data-cy='market_price_percentage_whitelist_chart_percentage_"+asset+"']")
})
