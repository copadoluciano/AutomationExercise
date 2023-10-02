import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

require('cypress-xpath')
let productNames = [];
let productPrices = [];




When('the user is on the product review page', function () {
    cy.xpath(this.locators.header.products).click({ force: true })
})

Then('the user submits a review', function () {
})
    
Then('the user should receive a confirmation message', function () {
})
