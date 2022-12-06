Feature: My Balances


    Rule: Test Rules
        - We will use user "17"
        - We will test functionalities of the "My Wallets"



    @TEST_LM-8874 @TEST_LM-9082
    Scenario Outline: My Wallets - Validate Static Elements
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user goes to "My Wallets"
        Then the user visualizes "My Wallets" page elements correctly

        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 |
