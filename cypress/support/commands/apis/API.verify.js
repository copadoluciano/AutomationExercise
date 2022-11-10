import totpGenerateCode  from '../apis/helpers/TwoFA';

Cypress.Commands.add('apiVerify', function (token, code) {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseAPI')}/v2/two-steps-auth/verify`,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        body: {
            'code': code
        }
    }).then(response => {
        return JSON.stringify(response.body.data.token).split('"')[1]

    })
})

Cypress.Commands.add('apiVerifyTOTP', function (token, secret) {
    let code = totpGenerateCode(secret)
    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseAPI')}/v2/two-steps-auth/verify`,
        headers: {
            'Authorization': 'Bearer ' + token
        },
        body: {
            'code': code
        }
    }).then(response => {
        return JSON.stringify(response.body.data.token).split('"')[1]

    })
})