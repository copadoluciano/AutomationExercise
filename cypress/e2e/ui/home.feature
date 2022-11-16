Feature: Home Page Test

    Rule: Test Rules
        - We will use user "05"
        - We will test functionalities of the "Home Page"


        @TEST_LM-8049 @TESTSET_LM-8374
        Scenario: Home - Validate Static Elements
            Given the user is registered in "Membrane Page"
            When the user sign in and are on the "Home" page
            Then the user visualizes "Home" page elements correctly

        @TEST_LM-8823 @TESTSET_LM-8374
        Scenario Outline: [E2E] <ID>- Home > Add and Delete Asset in Watchlist
            Given user is on the "Home" page with <email>, <password> and <secret>
            When you add an <Currency> to the watchlist
            Then the <Currency> and <Icon> is visible in WatchList

            Examples:
                | ID | email         | password      | secret         | Currency | Icon                                                        |
                | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | ETH      | ethereum_mainnet_eth_icon                                   |
                | 2  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | LTC      | litecoin_mainnet_ltc_icon                                   |
                | 3  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | BCH      | bitcoincash_mainnet_bch_icon                                |
                | 4  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | SNX      | 0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f_mainnet_eth_icon |
                | 5  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | TOKE     | 0x2e9d63788249371f1DFC918a52f8d799F4a38C94_mainnet_eth_icon |
                | 6  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | BTC      | bitcoin_mainnet_btc_icon                                    |
                | 7  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | BNB      | bsc_mainnet_bsc_icon                                        |
                | 8  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO | AVAX     | avalanche_mainnet_avalanche_icon                            |






