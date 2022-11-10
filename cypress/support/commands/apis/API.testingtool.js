
Cypress.Commands.add('apiTestingtool', function (token) {
    cy.request({
        method: 'DELETE',
        url: `${Cypress.env('baseAPI')}/testing-tool`,
        headers: {
            'death-token': 'Y@u w1ll b3 F1R3D!',
            'Authorization': 'Bearer ' + token
        }

    }).then(response => {
        return JSON.stringify(response.body.code).split('"')[1]

    })
})

