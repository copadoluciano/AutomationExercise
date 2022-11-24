import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('I type First and Last Name, Email, Country code and Phone Number',()=>{
    const dayjs = require('dayjs')
    const randomNumber1 = dayjs().format('MM-DD-HH-mm-ss')
    const randomEmail_1 = "cypress+" + randomNumber1 + "@blockchain.test"
    Cypress.env("randomEmail_1", randomEmail_1)
    cy.createAccount(randomNumber1, randomEmail_1)
})

Then('I should see message successful registration',function(){
    cy.isVisible(this.signup.others.popUpRegister)
})