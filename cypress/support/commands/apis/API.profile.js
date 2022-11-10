Cypress.Commands.add('apiProfile', function (token) {
    return cy.request({
        method: 'GET',
        url: `${Cypress.env('baseAPI')}/v2/accounts/profile`,
        failOnStatusCode: false,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }).then(response => {
        return response
    })
})
