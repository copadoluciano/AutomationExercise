import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

require('cypress-xpath')
let productNames = [];
let productPrices = [];




Then('the user clicks on the Cart button', function () {
    cy.xpath(this.locators.header.btnCart).click()

})

Then('the user should be on the Cart page', function () {
    cy.url().should('eq', 'https://automationexercise.com/view_cart');
})

Then('the user clicks the X button next to the specific product', function () {
    cy.xpath("//a[contains(text(),'Blue Top')]").should('exist');
    cy.xpath("//A[text()='Blue Top']/../../..//A[@class='cart_quantity_delete']").click()
})
    
Then('the product should be removed from the cart', function () {
    cy.xpath("//a[contains(text(),'Blue Top')]").should('not.exist');
})
