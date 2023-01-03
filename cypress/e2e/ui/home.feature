Feature: Test Set UI - Home

    # @TEST_LM-8049 @TESTSET_LM-9075
    # Scenario Outline: [E2E] <ID>- Home > Validate Static Elements
    #     Given I go to sign-in and type <email>, <password> and <secret>
    #     Then I should see the page home with correct elements
    #     Examples:
    #         | ID | email         | password      | secret    |
    #         | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 |
    
    @TEST_LM-8823 @TESTSET_LM-9075
    Scenario Outline: [E2E] <ID>- Home > Select Asset in Watchlist
        Given I go to sign-in and type <email>, <password> and <secret>
        When I add a <asset> to the watchlist
        Then I should see the <asset> and <Icon> in WatchList
        Examples:
            | ID | email         | password      | secret    | Currency | Icon                                                        | asset |
            | 2  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | ETH      | ethereum_mainnet_eth_icon                                   | eth   |
            | 3  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | LTC      | litecoin_mainnet_ltc_icon                                   | ltc   |
            | 4  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | BCH      | bitcoincash_mainnet_bch_icon                                | bch   |
            | 5  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | SNX      | 0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f_mainnet_eth_icon | snx   |
            | 6  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | TOKE     | 0x2e9d63788249371f1DFC918a52f8d799F4a38C94_mainnet_eth_icon | toke  |
            | 7  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | BTC      | bitcoin_mainnet_btc_icon                                    | btc   |
            | 8  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | BNB      | bsc_mainnet_bsc_icon                                        | bnb   |
            | 9  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | AVAX     | avalanche_mainnet_avalanche_icon                            | avax  |

    @TEST_LM-11597 @TESTSET_LM-9075
    Scenario Outline: [E2E] <ID>- Home > Funcionality Display Watchlist
        Given I go to sign-in and type <email>, <password> and <secret>
        When the user disable the button "Display Watchlist"
        Then the watchlist disappear

        Examples:
             | ID | email         | password      | secret    | 
             | 10  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 | 