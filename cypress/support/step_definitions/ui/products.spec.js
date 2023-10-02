import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { getValue } from './../../Products.js'
require('cypress-xpath')
let productNames = [];
let productPrices = [];



Given('the user is at Home Page', function () {
    cy.visit("https://automationexercise.com/")
    cy.get('body').should('be.visible')
})

When('the user add products on position {word} and {word} to the cart', function (position1, position2) {
    let positions = [position1, position2];
    const cantPositions = positions.length
    cy.xpath(this.locators.header.products).click({ force: true })
    // Guardar names
    for (let i= 0; i<=cantPositions-1; i++){
    getValue("//IMG[@src='/get_product_picture/"+positions[i]+"']/following-sibling::p").then((value) => {
        productNames[i] = value
        cy.log(productNames[i])
    })

    // Guardar precios
    getValue("//IMG[@src='/get_product_picture/"+positions[i]+"']/following-sibling::h2").then((value) => {
        productPrices[i] = value.replace(/[^0-9]/g, '');
        cy.log(productPrices[i])
    })
}
    cy.addProducts(position1, position2)
    cy.xpath(this.locators.productsPage.btnViewCart).click()
})

Then('the products {word} and {word} are seen inside the cart', function (position1, position2) {
    let positions = [position1, position2];
    const cantPositions = positions.length

    for (let i= 0; i<=cantPositions-1; i++){
    cy.xpath("//A[@href='/product_details/"+positions[i]+"']").invoke('text').then(function (text) {
        let productNameCart1 = text;
        cy.wrap(productNameCart1).should("eq", productNames[i]);

    });
    cy.xpath("//A[@href='/product_details/"+positions[i]+"']").invoke('text').then(function (text) {
        let productNameCart2 = text;
        cy.wrap(productNameCart2).should("eq", productNames[i]);
    });
}
  
})

Then('the prices, quantities and totals are correct in the {word} and {word}', function (position1, position2) {
    let positions = [position1, position2];
    const cantPositions = positions.length

    for (let i= 0; i<=cantPositions-1; i++){
    cy.xpath("(//A[@href='/product_details/"+positions[i]+"'][text()='"+productNames[i]+"']/../../..//P)[2]").invoke('text').then(function (text) {
        let productPriceCart1 = text.replace(/[^0-9]/g, '');;
        cy.wrap(productPriceCart1).should("eq", productPrices[i]);

    });

    cy.xpath("//A[@href='/product_details/"+positions[i]+"'][text()='"+productNames[i]+"']/../../..//BUTTON[@class='disabled'][text()='1']").contains('1').invoke('text').then(function (value) {
    let quantity = value
    cy.xpath("//A[@href='/product_details/"+positions[i]+"'][text()='"+productNames[i]+"']/../../..//P[@class='cart_total_price']").invoke('text').then(function (value) {
        let price = parseInt(value.replace(/[^0-9]/g, ''));
        cy.wrap(price).should("eq", productPrices[i]*quantity);

    });
});
    
    }
    
})