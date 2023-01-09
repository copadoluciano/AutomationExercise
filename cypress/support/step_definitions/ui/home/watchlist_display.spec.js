import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('the user disable the button "Display Watchlist"', function(asset) {
    cy.clic(this.home.watchlist.btnDisplayWatchlist)
})

Then('the watchlist disappear', function(asset, icon) {
    cy.isNotExist("//DIV[@class='styles_assetsWrapper__gGfcY']")
    cy.wait(2000)
    cy.clic(this.home.watchlist.btnDisplayWatchlist)
})
