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
    cy.typeText(this.signin.global.inputMail, username)
    cy.typeText(this.signin.global.inputPassword, password)
    cy.clic(this.signin.global.logo)
    cy.wait(3000)
    cy.clic(this.signin.global.buttonNext)

    // 2FA Page
    cy.speakeasy(secret).then((code) => {
        cy.wait(3000)
        cy.xpath(this.twoFa.token).type(code)
    })
    cy.clic(this.twoFa.twofaNext)
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


Cypress.Commands.add('sendNewToken', function(username, password) {
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
    cy.xpath(this.signin.global.inputMail).type(username)
    cy.xpath(this.signin.global.inputPassword).type(password)
    cy.clic(this.signin.global.title)
    cy.wait(5000)
    

    // -------------obtencion token1
    cy.intercept('POST', '/v2/login').as('login-user')
    cy.intercept('POST', '/v2/two-steps-auth/verify').as('verify-user')
    cy.xpath(this.signin.global.buttonNext).click({ force: true })
    cy.wait(5000)
    cy.wait('@login-user').its('response').should('deep.include', { statusCode: 200 })
    cy.get('@login-user').then(res => {
        cy.log(res.response.body)
        let token1_raw = JSON.stringify(res.response.body.data.token)

        //cy.log(token1_raw)

        let token1 = token1_raw.split('"')[1]

        //cy.log(token1)
        //-------------obtencion token2
        cy.clic(this.signin.popAlerts.buttonSendNewMessage)
        cy.request({
            method: "DELETE",
            url: 'https://api-staging.membranelabs.com/testing-tool',
            headers: {
                'death-token': 'Y@u w1ll b3 F1R3D!',
                'Authorization': 'Bearer ' + token1
            }


        }).then(response => {
            let code2 = JSON.parse(JSON.stringify(response.body.code))
            const secondLog = Cypress.log({
                name: 'secPageLog',
                displayName: '2FA AUTH',
                message: 'Type Code ' + code2,
                autoEnd: false
            })
            cy.log('2FA code: ' + code2)
            cy.xpath(this.twoFa.token).type(code2)
            cy.xpath(this.twoFa.twofaNext).click()
            secondLog.end()
        })


    })
    cy.wait(4000)
    })