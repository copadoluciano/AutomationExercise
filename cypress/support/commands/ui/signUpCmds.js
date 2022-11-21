Cypress.Commands.add('signUp', function(userJson) {
    let form = Cypress.log({
        name : 'form',
        displayName : 'FILL FORM',
        message: 'Fill form with user data',
        autoEnd: false
    })
    // First Name
    if(userJson.firstName != ''){
        cy.typeText(this.signup.global.firstNameInput, userJson.firstName) 
    }
    // Last Name
    if(userJson.lastName != ''){
        cy.typeText(this.signup.global.lastNameInput, userJson.lastName) 
    }
    // Email
    if(userJson.email != ''){
        cy.typeText(this.signup.global.emailInput, userJson.email) 
    }
    // Country Code
    cy.clic(this.signup.global.arrowOpen)    
    cy.clickListOption(this.signup.others.countryList, userJson.country)
    // Phone number
    if(userJson.phone != ''){
        cy.typeText(this.signup.global.numberInput, userJson.phone) 
    }
    
    form.end()

    cy.fixture("webelements.json").then(element => {
        cy.intercept('POST', '/v2/accounts').as('new-user')
        // -------------obtencion token1
        cy.xpath(element.buttonSignUpNext).click()  
        cy.wait(2000)
        cy.wait('@new-user').its('response').should('deep.include', {statusCode:200})
        cy.get('@new-user').then(response=>{
            const token1=JSON.stringify(response.response.body.data.token).split('"')[1]
            cy.log(token1)
            // --
            
                // --
    

            cy.request({
                method: "DELETE",
                url: "https://api-staging.membrane.trade/testing-tool",
                headers:{
                    'death-token': 'Y@u w1ll b3 F1R3D!',
                    'Authorization': 'Bearer '+token1
                }
            }).then(response=>{
                const code = JSON.parse(JSON.stringify(response.body.code))
                cy.log(code)
                cy.xpath(element.token).type(code)
                cy.wait(2000)
                cy.xpath(element.twofaNext).click()
            })
        })      
    })
})

Cypress.Commands.add('signUptoSignIn', function() {
    cy.clic(this.signup.global.haveAccountLink)
})

Cypress.Commands.add('createAccount', function(random, randomEmail) {
    cy.visit('' + '/sign-up' + Cypress.env('SKIPCAPTCHA'))


    cy.typeText(this.signup.global.firstNameInput, "Cypress")
    cy.typeText(this.signup.global.lastNameInput, "Lootgnitset")
    cy.typeText(this.signup.global.emailInput, randomEmail)
    cy.clic(this.signup.global.arrowOpen)
    cy.clic(this.signup.global.selectArgentina)
    cy.typeText(this.signup.global.numberInput, "123456")

    // -------------- TESTING TOOL -------------
    cy.intercept('POST', '/v2/accounts').as('login-user')
    cy.intercept('POST', '/v2/two-steps-auth/verify').as('verify-user')
    cy.wait(3000)
    cy.clic(this.signup.global.nextButton)
    cy.wait('@login-user').its('response').should('deep.include', { statusCode: 200 })
    cy.get('@login-user').then(res => {
        let token3_raw = JSON.stringify(res.response.body.data.token)

        //cy.log(token3_raw)

        let token3 = token3_raw.split('"')[1]
        cy.log(token3)
        //cy.log(token3)
        //-------------obtencion token2
        cy.request({
            method: "DELETE",
            url: 'https://api-staging.membranelabs.com/testing-tool',
            headers: {
                'death-token': 'Y@u w1ll b3 F1R3D!',
                'Authorization': 'Bearer ' + token3
            }


        }).then(response => {
            cy.wait(5000)
            let code = JSON.parse(JSON.stringify(response.body.code))
            const secondLog = Cypress.log({
                name: 'secPageLog',
                displayName: '2FA AUTH',
                message: 'Type Code ' + code,
                autoEnd: false
            })
            cy.log('2FA code: ' + code)
            cy.xpath(this.twoFa.token).type(code)
            cy.xpath(this.twoFa.twofaNext).click()
            secondLog.end()
        })

    })

    cy.typeText(this.signup.others.inputNewPassword, Cypress.env('USER_PASSWORD'))
    cy.typeText(this.signup.others.inputRepeatNewPassword, Cypress.env('USER_PASSWORD'))
    cy.clic(this.signup.others.checkTherms)
    cy.clic(this.signup.others.buttonNextNewPassword)

    cy.isVisible(this.signup.others.popUpRegister)



})

