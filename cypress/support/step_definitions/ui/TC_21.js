import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

require('cypress-xpath')
let productNames = [];
let productPrices = [];




When('the user is on the product {word} review page', function (product) {
    cy.xpath(this.locators.header.products).click({ force: true })
    cy.url().should('eq', 'https://automationexercise.com/products');
    cy.xpath("(//H2[contains(text(),'"+product+"')])[1]/../../..//A[contains(@href,'/product_details/')]").click()
    cy.xpath("//a[contains(.,'Write Your Review')]").should('be.visible')
})

Then('the user submits a review', function () {
})
    
Then('the user should receive a confirmation message', function () {
})
