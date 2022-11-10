@feature-home
Feature: Home

    # 0
    Scenario: Home - Validate Static Elements
        Given the user is registered in "Membrane Page"
        When the user sign in and are on the "Home" page
        Then the user visualizes "Home" page elements correctly

    # 1

    Scenario Outline: WatchList - Add and Delete Asset
        Given the user is in the "Home Page"
        When you add an <currency> to the watchlist
        Then the <currency> and <icon> is visible in WatchList

        Examples:
            | currency | icon                                                        |
            | ETH      | ethereum_mainnet_eth_icon                                   |
            | LTC      | litecoin_mainnet_ltc_icon                                   |
            | BCH      | bitcoincash_mainnet_bch_icon                                |
            | SNX      | 0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f_mainnet_eth_icon |
            | TOKE     | 0x2e9d63788249371f1DFC918a52f8d799F4a38C94_mainnet_eth_icon |
            | BTC      | bitcoin_mainnet_btc_icon                                    |
            | BNB      | bsc_mainnet_bsc_icon                                        |            
            | AVAX     | avalanche_mainnet_avalanche_icon                            |
            

