import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


let reqResponse;

Given('comds I api send POST request to {word}', function (paths) {

})

When('comds I api enter {word} and {word} on the body', function (email, password) {
    cy.apiLogin(email, password).then((response) => reqResponse = response)
})

When('comds I api enter {word}', function (secret) {
    let token1 = reqResponse
    cy.apiVerifyTOTP(token1, secret).then((response) => reqResponse = response)

})

When('comds I api response profileGET', function () {
    let token2 = reqResponse
    cy.apiProfile(token2).then((response) => reqResponse = response)

})

Then('comds I api response code is {int}', function (code) {
    
    expect(reqResponse.status).to.eq(code, "Response body contains correct data.");
    let token1_raw = JSON.stringify(reqResponse.body)
    cy.log(token1_raw)

})