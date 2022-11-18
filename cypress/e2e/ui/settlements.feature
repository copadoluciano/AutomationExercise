@feature-settlements
Feature: Settlements

    # 0
    Scenario: Settlements - Validate Static Elements
        Given user has navigated to Membrane Demo "Home" page
        When the user is redirected to the "Settlements" page
        Then the user visualizes "Settlements" page elements correctly

    # 1
    # Scenario: Settlements - Validate Preview Settlement Classic
    #     Given user at "Generate Preview Settlement"
    #     When the user try create new settlement between ethereum network vs ethereum network and chooses Classic Settlement
    #     Then validate all the elements on Classic Settlement

    # # 2
    # Scenario: Settlements - Validate Preview Settlement Decentralized
    #     Given user at "Generate Preview Settlement"
    #     When the user try create new settlement between ethereum network vs ethereum network and chooses Decentralized Settlement
    #     Then validate all the elements on Decentralized Settlement
    # 3
    # Scenario Outline: Settlements - Validate Create Settlement Classic
    #     Given user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
    #     When the user create new tradesettlement between ethereum network vs ethereum network and chooses Decentralized Settlement
    #     Then validate all the elements on the Classic Settlement

    #     Examples:
    #         | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
    #         | Sell      | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           |
    #         # | Buy      | ETH      | 0.05     | BCH | 10    | days      | 1         | 20           |



