import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


When('the user select history of time in the Watchlist', function(history) {

})

Then('the watchlist update the history', function() {
    let history = ['falso', '6H', '24H', '7D', '1M']
    for (let i = 1; i<=4; i++){
        cy.clic("//SPAN[text()='"+history[i]+"']")
        cy.isVisible("(//P[@class='assetChart_usdLabel__8CF1k'][text()='"+history[i]+"'])["+i+"]")
    }
})
