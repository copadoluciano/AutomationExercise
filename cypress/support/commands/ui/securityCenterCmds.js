Cypress.Commands.add('changePassword', function (secret, currentPassword, newPassword) {
    cy.visit(''+ '/security-center/settings?skipCaptcha')
    cy.wait(3000)
    cy.clic(this.securityCenter.global.btnChangePassword)
    cy.typeText(this.securityCenter.changePasswd.fields.inputCurrentPassword, currentPassword)
    cy.typeText(this.securityCenter.changePasswd.fields.inputNewPassword, newPassword)    
    cy.typeText(this.securityCenter.changePasswd.fields.inputRepeatNewPassword, newPassword)

    for (let i = 1; i<=4; i++){
        cy.isVisible("(//*[local-name()='svg' and @data-icon='circle-check' and @color='#6fcf97'])["+i+"]")
    }
    cy.wait(2000)
    cy.clic(this.securityCenter.changePasswd.others.btnNext)

    cy.speakeasy(secret).then((code) => {
        cy.wait(3000)
        cy.xpath(this.twoFa.token).type(code)
    })
    cy.clic(this.securityCenter.changePasswd.others.btnSubmit)
    cy.isVisible(this.securityCenter.changePasswd.others.changeConfirmation)
    cy.wait(5000)
})