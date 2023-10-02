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

Then('the user {word} with {word} submits a {word}', function (name, email, review) {
    cy.xpath(this.locators.fieldReviews.inputName).type(name)
    cy.xpath(this.locators.fieldReviews.inputEmail).type(email)
    cy.xpath(this.locators.fieldReviews.inputReview).type(review)
    cy.xpath(this.locators.fieldReviews.btnSubmit).click()
    
})
    
Then('the user should receive a confirmation message', function () {
    cy.xpath(this.locators.fieldReviews.reviewConfirmation).should('be.visible')
})
