import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')


Given('The user is logged in on the Membrane page with User 05', function () {

    cy.session("Login", function () {
        cy.login(Cypress.env('USER_EMAIL_05'), Cypress.env('USER_PASSWORD'), Cypress.env('SECRET_05_DEMO'))
    })
    cy.visit('') 
})






