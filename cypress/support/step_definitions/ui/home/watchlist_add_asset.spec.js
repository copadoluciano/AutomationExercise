import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

Given('the user is in the "Home Page"', function() {
    cy.login(Cypress.env('USER_EMAIL_05'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_05_DEMO'))

})

When('you add an {word} to the watchlist', function(currency) {
    cy.clic(this.home.watchlist.buttonEditWatch)
    cy.wait(3000)
    cy.selectCustomToken(this.home.watchlist.editWatchList.inputAsset, currency)
    cy.clic(this.home.watchlist.editWatchList.buttonAddAsset)
    cy.wait(2000)
    

})

Then('the {word} and {word} is visible in WatchList', function(currency, icon) {
    cy.isVisible("//div[contains(@class,'styles_assetWrapper__')][contains(.,'"+currency+"')]")
    cy.isVisible("//img[contains(@src,'"+icon+".svg') and @alt='asset']")
    cy.clic(this.home.watchlist.editWatchList.buttonClose)
    cy.staticElements(this.home.watchlist.currency)
    cy.clic(this.home.watchlist.buttonEditWatch)
    cy.clic(this.home.watchlist.editWatchList.buttonTrash)
    cy.clic(this.home.watchlist.editWatchList.buttonClose)
    cy.logout()

})




