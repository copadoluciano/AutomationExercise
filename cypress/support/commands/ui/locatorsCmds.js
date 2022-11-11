Cypress.Commands.add('locators', () => {
    cy.fixture("trades.json").then(function (buySell) {
        this.buySell = buySell
    })
    cy.fixture("header.json").then(function (header) {
        this.header = header
    })
    cy.fixture("myWallets.json").then(function (wallets) {
        this.wallets = wallets
    })
    cy.fixture("signIn.json").then(function (signin) {
        this.signin = signin
    })
    cy.fixture("signUp.json").then(function (signup) {
        this.signup = signup
    })
    cy.fixture("counterparties.json").then(function (invite) {
        this.invite = invite
    })
    cy.fixture("myBalances.json").then(function (balances) {
        this.balances = balances
    })
    cy.fixture("loans.json").then(function (loans) {
        this.loans = loans
    })
    cy.fixture("twoFa.json").then(function (twoFa) {
        this.twoFa = twoFa
    })
    cy.fixture("settlement.json").then(function (settlement) {
        this.settlement = settlement
    })
    cy.fixture("home.json").then(function (home) {
        this.home = home
    })
    cy.fixture("securityCenter.json").then(function (securityCenter) {
        this.securityCenter = securityCenter
    })
})