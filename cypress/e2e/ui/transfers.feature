@feature-settlements
Feature: Transfers

    @TEST_LM-8883
    Scenario Outline: [E2E] <ID>- Transfers > Validate Static Elements
        Given the user is on the Membrane page with <email>, <password> and <secret>
        When the user is redirected to the "Transfers" page
        Then the user visualizes "Transfers" page elements correctly

        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17_DEMO |

    @TEST_LM-8884
    Scenario Outline: [E2E] <ID>- Transfers > Validate Preview Settlement Classic
        Given the user is on the Membrane page with <email>, <password> and <secret>
        When the user try create new settlement between ethereum network vs ethereum network and chooses Classic Settlement
        Then validate all the values on Classic Settlement

        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_07 | USER_PASSWORD | SECRET_07_DEMO |

# # 2
# Scenario: Transfers - Validate Preview Settlement Decentralized
#     Given user at "Generate Preview Settlement"
#     When the user try create new settlement between ethereum network vs ethereum network and chooses Decentralized Settlement
#     Then validate all the elements on Decentralized Settlement
# 3
# Scenario Outline: Transfers - Validate Create Settlement Classic
#     Given user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
#     When the user create new tradesettlement between ethereum network vs ethereum network and chooses Decentralized Settlement
#     Then validate all the elements on the Classic Settlement

#     Examples:
#         | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
#         | Sell      | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           |
#         # | Buy      | ETH      | 0.05     | BCH | 10    | days      | 1         | 20           |



