@feature-loans
Feature: Loans

  # @TEST_LM-8831 @TESTSET_LM-9078
  # Scenario Outline: [E2E] <ID>- Loans > Static Elements
  #   Given I go to sign-in and type <email>, <password> and <secret>
  #   When the user is on the "Loans" page
  #   Then the user visualizes "Loans" page elements correctly

  #   Examples:
  #     | ID | email         | password      | secret    |
  #     | 1  | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 |

  # @TEST_LM-8825 @TESTSET_LM-9078
  # Scenario Outline: [E2E] <ID>- Loans > Validate Container
  #   Given I go to sign-in and type <email>, <password> and <secret>
  #   When I "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
  #   When the user logs out
  #   And the counterparty accept the order with <cp_email>, <cp_password> and <cp_secret>
  #   And the counterparty will open some orders to validate the container
  #   Examples:
  #     | ID | email         | password      | secret    | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret |
  #     | 3  | USER_EMAIL_03 | USER_PASSWORD | SECRET_03 | borrow    | Intraday | ETH      | 0.1    | 04           | 5         | days      | 1         | minutes          | 2                | 100        | SHIB            | 99.5            | daily     | 0        | 100.5            | USER_EMAIL_04 | USER_PASSWORD | SECRET_04 |


  @TEST_LM-9258 @TESTSET_LM-9078
  Scenario Outline: [E2E] <ID>- Loans > Add Custom Token
    Given I go to sign-in and type <email>, <password> and <secret>
    When I import contract <contract> on Loans
    Then the <symbol> contract is on the "Manage Tokens" on Loans
    And the user delete <symbol> token on Loans

    Examples:
      | ID | email         | password      | secret    | contract                                   | symbol |
      | 2  | USER_EMAIL_03 | USER_PASSWORD | SECRET_03 | 0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b | CRO    |



  @TEST_LM-8826 @TESTSET_LM-9078 @monitoring
  Scenario Outline: [E2E] <ID>- Loans > Create & Accept Order with <TypeToken> Token and Collateral <collateral>
    Given I go to sign-in and type <email>, <password> and <secret>
    When I "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And logout
    And the counterparty accept the order with <cp_email>, <cp_password> and <cp_secret> <operation> <counterparty> <amount> <typeLoan> <duration2> <duration1> <aprAmount> <frecuency> <repayFee> <collateral> <collateralAsset> <collateralLimit> <refundCollateral>
    Then the loan order will be created for both parties
    Examples:
      | ID | TypeToken | email         | password      | secret    | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret |
      | 4  | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 | lend      | Fixed    | BCH      | 0.1    | 02           | 5         | days      | 1         | minutes          | 1                | 10         | ETH             | 9               | daily     | 0        | 11               | USER_EMAIL_02 | USER_PASSWORD | SECRET_02 |
      | 5  | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 | borrow    | Open     | BCH      | 0.1    | 02           | 5         | days      | 1         | minutes          | 1                | 10         | ETH             | 9               | daily     | 0        | 11.5             | USER_EMAIL_02 | USER_PASSWORD | SECRET_02 |

  @TEST_LM-8827 @TESTSET_LM-9078
  Scenario Outline: [E2E] <ID>- Loans > Counterparty Reject Order
    Given I go to sign-in and type <email>, <password> and <secret>
    When I "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And the counterparty reject the order with <cp_email>, <cp_password> and <cp_secret>
    Then the loan order will be eliminated for both parties
    Examples:
      | ID | TypeToken | email         | password      | secret    | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret |
      | 6  | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 | lend      | Open     | ETH      | 0.1    | 02           | 5         | days      | 1         | minutes          | 1                | 100        | SHIB            | 99.5            | weekly    | 0        | 100.5            | USER_EMAIL_02 | USER_PASSWORD | SECRET_02 |

  @TEST_LM-8828 @TESTSET_LM-9078
  Scenario Outline: [E2E] <ID>- Loans > Maker Cancel Order
    Given I go to sign-in and type <email>, <password> and <secret>
    When I "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And the same user cancel the order
    Then a successful cancel message should be displayed
    Examples:
      | ID | TypeToken | email | password | secret | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral |
      | 7 | Custom | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 | borrow | Open | ETH | 0.1 | 02 | 5 | days | 1 | minutes | 1 | 100 | SHIB | 99.5 | weekly | 0 | 100.5 |
 



  # @TEST_LM-8829 @TESTSET_LM-9078
  # Scenario Outline: [E2E] <ID>- Loans > Test Margin Call Functionality
  #   Given I go to sign-in and type <email>, <password> and <secret>
  #   When I "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
  #   And logout
  #   And the counterparty accept the order with <cp_email>, <cp_password> and <cp_secret>
  #   And the collateral is out of bounds <collateralAsset>
  #   Then the margin call button will be enabled
  #   And and pressing it we will see the new transaction
  #   Examples:
  #     | ID | TypeToken | email         | password      | secret    | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret |
  #     | 8  | Native    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09 | lend      | Open     | BTC      | 0.001  | 10           | 5         | days      | 5         | minutes          | 1                | 100        | ETH             | 99.5            | weekly    | 0        | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10 |



  # @TEST_LM_ @TESTSET_LM-9076
  # Scenario Outline: [E2E] <ID>- Loans > Create Order And Counterparty Import Token]
  #   Given the user is in sign-in and type <email>, <password> and <secret>
  #   When I "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
  #   When the user log out your account
  #   And the counterparty sign-in and type <cp_email>, <cp_password> and <cp_secret>
  #   And the counterparty try to accepts the order but will receive a messege to import the <contract>
  #   Then goes to the "Manage Tokens" page to delete <currency> token

  #   Examples:
  #     | ID | TypeToken | email         | password      | secret    | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret | contract                                   |
  #     # | 8  | Native    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09 | lend      | Open     | APE      | 0.001  | 10           | 5         | days      | 5         | minutes          | 1                | 100        | ETH             | 99.5            | weekly    | 0        | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10 | 0x4d224452801ACEd8B2F0aebE155379bb5D594381 |
  #     | 9  | Native    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09 | lend      | Open     | LINK     | 0.001  | 10           | 5         | days      | 5         | minutes          | 1                | 100        | ETH             | 99.5            | weekly    | 0        | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10 | 0x514910771AF9Ca656af840dff83E8264EcF986CA |


# @TEST_LM-8830 @TESTSET_LM-9078
# Scenario Outline: [E2E] <ID>- Loans > Create Manual Loan
#   Given I go to sign-in and type <email>, <password> and <secret>
#   When I "Create Manual Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
#   Then the loan Manual Entry order will be created
#   Examples:
#     | ID | TypeToken | email         | password      | secret    | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret |
#     | 9  | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 | borrow    | Open     | ETH      | 0.2    | 02           | 0         | 1         | minutes   | 1                | 5                | 0          | weekly          | SHIB            | 100       | 99.5     | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10 |
#     | 10 | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01 | lend      | Fixed    | ETH      | 0.1    | 02           | days      | 1         | minutes   | 1                | 10               | 0          | weekly          | SHIB            | 100       | 99.5     | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10 |