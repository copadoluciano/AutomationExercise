// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './commands/apis/API.login'
import './commands/apis/API.profile'
import './commands/apis/API.testingtool'
import './commands/apis/API.verify'
import './commands/ui/signInCmds'
import './commands/ui/tradesCmds'
import './commands/ui/commonCmds'
import './commands/ui/locatorsCmds'
import './commands/ui/myWalletsCmds'
import './commands/ui/myBalancesCmds'
import './commands/ui/loginCmds'
import './commands/ui/counterpartiesCmds'
import './commands/ui/securityCenterCmds'
import './commands/ui/loans'
import './commands/ui/settlementsCmds'
import './commands/ui/signUpCmds'


// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests
const app = window.top;
if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
