import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('user click "already have an acount" option',function () {
    cy.clic(this.signup.global.haveAccountLink)
})

Then('user is redirect to login page',function () {
    cy.urlShould('sign-in')
})