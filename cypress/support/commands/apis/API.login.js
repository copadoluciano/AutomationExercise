Cypress.Commands.add('apiLogin', function (email, password) {

    cy.request({
        method: 'POST',
        url: `${Cypress.env('baseAPI')}/v2/login`,
        body: {
            email: Cypress.env(email),
            password: Cypress.env(password)
        }
    }).then((response) => {
        return JSON.stringify(response.body.data.token).split('"')[1]
    })
})