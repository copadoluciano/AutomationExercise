import * as speakeasy from "speakeasy";


export default function totpGenerateCode(secret) {
    let codeTotp = null;
    codeTotp = speakeasy.totp({
        secret: Cypress.env(secret),
        encoding: 'hex'
    });

    for (let i = 0; i < 100; i++) {

        let codeValidates = speakeasy.totp.verify({
            secret: Cypress.env(secret),
            encoding: 'hex',
            token: codeTotp,
            window: i
        });
        if (codeValidates == true) {
        //    console.log('  window: ' + i + ' tokenTotp ' + tokenTotp)
            return codeTotp;
        }
    }

}

