import * as speakeasy from "speakeasy";

Cypress.Commands.add('loginTestingTool', function (username, password) {
    const firstLog = Cypress.log({
        name: 'firstPageLog',
        displayName: 'LOGIN',
        message: 'Log user ' + username,
        autoEnd: false
    })
    cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))
    cy.xpath(this.signin.global.inputMail).type(username)
    cy.xpath(this.signin.global.inputPassword).type(password)
    cy.clic(this.signin.global.title)
    cy.wait(5000)
    firstLog.end()

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

Cypress.Commands.add('login', function (username, password, secret, visitPage = true) {
    const log = Cypress.log({
        name: 'login',
        displayName: 'LOGIN',
        message: 'Log user ' + username,
        autoEnd: false
    })

    // Login page
    if (visitPage) {
        cy.intercept('GET','v2/whitelist-entries/counterparties?status=active').as('whiteList')
        cy.visit('' + Cypress.env('SIGN_IN') + Cypress.env('SKIPCAPTCHA'))  
    }
    cy.xpath(this.signin.global.inputMail).type(username)
    cy.xpath(this.signin.global.inputPassword).type(password)
    cy.clic(this.signin.global.logo)
    cy.isEnabled(this.signin.global.buttonNext)
    cy.clic(this.signin.global.buttonNext)
    
    // 2FA Page
    cy.speakeasy(secret).then((code) => {
        cy.typeText(this.twoFa.token, code)
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
            }
        }
    })
})

Cypress.Commands.add('logout', function () {
    cy.wait(2000)
    cy.clic(this.header.menuRight.menu)
    cy.wait(2000)
    cy.clic(this.header.buttonLogOut)
    cy.url().should('eq', Cypress.config('baseUrl') + "/sign-in")
})