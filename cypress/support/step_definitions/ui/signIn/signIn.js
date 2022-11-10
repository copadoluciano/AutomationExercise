import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor";

require('cypress-xpath')



Given('user at Sign In page', () => {
  // LoginPage.visit();
});

When('user 2FA put {word},{word} and {word} on fields', function(email,password,secret){
  cy.login(Cypress.env(email), Cypress.env(password), Cypress.env(secret) )
});

Then('the Next Button should be disabled', function(){
    // LoginResultsPage.expect().toBeSuccessful();
  });

Then('error page should be open', function(){
    // LoginResultsPage.expect().toBeUnsuccessful();
  });
