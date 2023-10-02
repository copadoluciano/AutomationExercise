
Cypress.Commands.add('hoverAdd', function (position) {
    cy.xpath("(//div[@class='product-image-wrapper'])[" + position + "]").trigger('mouseover')
    cy.xpath("(//a[@data-product-id='"+position+"'])[1]").click({force: true})
    
})

Cypress.Commands.add('addProducts', function (position1, position2) {
    const positions = [position1, position2];
    const cantPositions = positions.length
    for (let i= 0; i<=cantPositions-1; i++){
        let positionActual = positions[i];
        cy.hoverAdd(positionActual)
        if (i <1){
            cy.xpath(this.locators.productsPage.btnContinueShopping).click()
        }
    }
    
})

Cypress.Commands.add('getProductName', function (value) {
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > p').invoke('text').then(function (productName) {
    return productName

      
    })
})

export function getValue(xpath) {
    return cy.xpath(xpath).invoke('text').then(function (productName) {
    return Cypress.Promise.resolve(productName);
  })
}


