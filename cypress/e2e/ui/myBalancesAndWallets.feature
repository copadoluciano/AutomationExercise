@feature-balances-wallets
Feature: My Balances and Wallets

    @TEST_LM-8873
    Scenario: My Balances - Validate Static Elements
        Given user has navigated to Membrane Demo "Home" page
        When the user is redirected to the My Balances & Credits page
        Then the user visualizes "My Balances & Credits" page elements correctly

    @TEST_LM-8874
    Scenario: My Wallets - Validate Static Elements
        Given user has navigated to Membrane Demo "Home" page
        When the user is redirected to the My Wallets page
        Then the user visualizes "My Wallets" page elements correctly

    @TEST_LM-8875
    Scenario Outline: My Balances & Credits - Add Custom Token
        Given user is on the "My Wallets" page
        When the user add contract <contract>
        Then the <symbol> contract is on the "My balances and Credits" page
        And goes to the "My Wallets" page to delete <symbol> token

        Examples:
            | contract                                   | symbol |
            | 0xC669928185DbCE49d2230CC9B0979BE6DC797957 | BTT    |

    @TEST_LM-8876
    Scenario Outline: My Balances & Credits - Add Already Custom Token
        Given user is on the "My Wallets" page
        When the user add already contract <contract>
        Then the <symbol> contract is already in the list

        Examples:
            | contract                                   | symbol |
            | 0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b | CRO   |

    @TEST_LM-8877
     Scenario Outline: Manage Tokens - Validate Static Elements
        Given user is on the "My Wallets" page
        When the user is redirected to the "Manage Tokens" <contract>
        Then the user visualizes "Manage Tokens" page elements correctly with <symbol>

        Examples:
            | contract                                   | symbol |
            | 0x514910771AF9Ca656af840dff83E8264EcF986CA | LINK   |



