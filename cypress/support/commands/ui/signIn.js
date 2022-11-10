// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


import * as speakeasy from "speakeasy";

Cypress.Commands.add('locators', () => {
    cy.fixture("header.json").then(function (header) {
        this.header = header
    })
    cy.fixture("signIn.json").then(function (signin) {
        this.signin = signin
    })
    cy.fixture("twoFa.json").then(function (twoFa) {
        this.twoFa = twoFa
    })

})
Cypress.Commands.add('clic', locator => {
    cy.xpath(locator, { timeout: 20000 }).should("be.visible").click({ force: true })
})

Cypress.Commands.add('login', function (username, password, secret, visitPage = true) {
    const log = Cypress.log({
        name: 'login',
        displayName: 'LOGIN',
        message: 'Log user ' + username,
        autoEnd: false
    })

    // Login page
    if (visitPage) {
        cy.intercept('GET', 'v2/whitelist-entries/counterparties?status=active').as('whiteList')
        cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
    }
    cy.xpath(this.signin.global.inputMail).type(username)
    cy.xpath(this.signin.global.inputPassword).type(password)
    cy.xpath(this.signin.global.logo).click()
    cy.wait(3000)
    cy.xpath(this.signin.global.buttonNext).click({ force: true })

    // 2FA Page
    cy.speakeasy(secret).then((code) => {
        cy.wait(3000)
        cy.xpath(this.twoFa.token).type(code)
    })
    cy.xpath(this.twoFa.twofaNext).click()
    cy.wait(5000)
    cy.wait('@whiteList')
    log.end()
    cy.wait(5000)
})


Cypress.Commands.add('speakeasy', function (secret) {
    return new Cypress.Promise((resolve, reject) => {
        let secretHex = secret
        const token = speakeasy.totp({
            secret: secretHex,
            encoding: 'hex'

        })
        for (let i = 0; i < 100; i++) {
            let tokenValidates = speakeasy.totp.verify({
                secret: secretHex,
                encoding: 'hex',
                token: token,
                window: i
            });
            if (tokenValidates == true) {
                resolve(token);
            } else {
                reject("Invalid");
            }
        }
    })
})
