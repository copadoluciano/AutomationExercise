import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')
Given('the user needs to create a new user',()=>{

})

When('the user completes all the fields.',()=>{
    const dayjs = require('dayjs')
    const randomNumber1 = dayjs().format('MM-DD-HH-mm-ss')
    const randomEmail_1 = "cypress+" + randomNumber1 + "@blockchain.test"
    Cypress.env("randomEmail_1", randomEmail_1)
    cy.createAccount(randomNumber1, randomEmail_1)
})

Then('an alert will appear with successful registration',function(){
    cy.isVisible(this.signup.others.popUpRegister)
})