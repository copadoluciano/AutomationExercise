import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
require('cypress-xpath')

When('the user type an email {word} how invalid format',function(email){
    cy.typeField(this.signin.global.inputMail, email)

})

Then('the user receive an alert to "Invalid email format"',function(){
    cy.isVisible(this.signin.popAlerts.alertInvalidFormat)

})

