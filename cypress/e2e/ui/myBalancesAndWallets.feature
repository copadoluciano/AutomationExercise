Feature: My Balances and Wallets


    Rule: Test Rules
        - We will use user "17"
        - We will test functionalities of the "My Balances and Wallets"

    @TEST_LM-8873
    Scenario Outline: My Balances - Validate Static Elements
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user goes to "My Balances & Credits"
        Then the user visualizes "My Balances & Credits" page elements correctly

        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17_DEMO |

    @TEST_LM-8874
    Scenario Outline: My Wallets - Validate Static Elements
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user goes to "My Wallets"
        Then the user visualizes "My Wallets" page elements correctly

        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17_DEMO |

    @TEST_LM-8875
    Scenario Outline: My Balances & Credits - Add Custom Token
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user goes to "My Wallets"
        And the user import contract <contract> in "Manage Tokens"
        Then the <symbol> contract is on the "My balances and Credits" page
        And goes to the "Manage Tokens" page to delete <symbol> token
        Then the <symbol> will not appear in "Manage Tokens" and "My Wallets"

        Examples:
            | ID | email         | password      | secret         | contract                                   | symbol |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17_DEMO | 0xC669928185DbCE49d2230CC9B0979BE6DC797957 | BTT    |

    @TEST_LM-8876
    Scenario Outline: My Balances & Credits - Add Already Custom Token
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user add already contract <contract>
        Then the <symbol> contract is already in the list

        Examples:
            | ID | email         | password      | secret         | contract                                   | symbol |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17_DEMO | 0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b | CRO    |

    @TEST_LM-8877
    Scenario Outline: Manage Tokens - Validate Static Elements
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user goes to "My Wallets"
        And the user open "Manage Tokens" and import <contract>
        Then the user visualizes "Manage Tokens" page elements correctly with <symbol>

        Examples:
            | ID | email         | password      | secret         | contract                                   | symbol |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17_DEMO | 0x514910771AF9Ca656af840dff83E8264EcF986CA | LINK   |



