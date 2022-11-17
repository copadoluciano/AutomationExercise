@feature-loans
Feature: Loans

  # @TEST_LM-8831
  # Scenario Outline: [E2E] <ID>- Loans > Static Elements
  #   Given user is on the "Loans" page with <email>, <password> and <secret>
  #   When the user is on the "Loans" page
  #   Then the user visualizes "Loans" page elements correctly

  #   Examples:
  #     | ID | email         | password      | secret         |
  #     | 1  | USER_EMAIL_01 | USER_PASSWORD | SECRET_01_DEMO |

@TEST_LM-8831 
  Scenario Outline: [E2E] <ID>- Loans > Add Custom Token
    Given user is on the "Loans" page with <email>, <password> and <secret>
    When the user import contract <contract> on Loans
    Then the <symbol> contract is on the "Manage Tokens" on Loans
    And the user delete <symbol> token on Loans

    Examples:
      | ID | email         | password      | secret         | contract                                   | symbol |
      | 2  | USER_EMAIL_03 | USER_PASSWORD | SECRET_03_DEMO | 0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b | CRO   |

@TEST_LM-8825
  Scenario Outline: [E2E] <ID>- Loans > Validate Container
    Given user is on the "Loans" page with <email>, <password> and <secret>
    When the user "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And logout
    And the counterparty accept the order with <cp_email>, <cp_password> and <cp_secret>
    And the time is between 17 and 18 Argentina
    Then then we validate that the payments have been created
    Examples:
      | ID | email         | password      | secret         | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret      |
      | 3  | USER_EMAIL_03 | USER_PASSWORD | SECRET_03_DEMO | borrow    | Intraday   | ETH      | 0.1    | 04           | 5         | days      | 1         | minutes          | 2                | 100        | SHIB            | 99.5            | daily    | 0        | 100.5            | USER_EMAIL_04 | USER_PASSWORD | SECRET_04_DEMO |



@TEST_LM-8826
  Scenario Outline: [E2E] <ID>- Loans > Create & Accept Order with <TypeToken> Token and Collateral <collateral>
    Given user is on the "Loans" page with <email>, <password> and <secret>
    When the user "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And logout
    And the counterparty accept the order with <cp_email>, <cp_password> and <cp_secret> <operation> <counterparty> <amount> <typeLoan> <duration2> <duration1> <aprAmount> <frecuency> <repayFee> <collateral> <collateralAsset> <collateralLimit> <refundCollateral>
    Then the loan order will be created for both parties
    Examples:
      | ID | TypeToken | email         | password      | secret         | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret      |
      | 4  | Custom    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09_DEMO | lend      | Fixed    | BCH      | 0.1    | 10           | 5         | days      | 1         | minutes          | 1                | 10         | ETH             | 9               | daily    | 0        | 11               | USER_EMAIL_10 | USER_PASSWORD | SECRET_10_DEMO |
      | 5  | Custom    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09_DEMO | borrow    | Open     | BCH      | 0.1    | 10           | 5         | days      | 1         | minutes          | 1                | 10         | ETH             | 9               | daily    | 0        | 11.5             | USER_EMAIL_10 | USER_PASSWORD | SECRET_10_DEMO |

  @TEST_LM-8827
  Scenario Outline: [E2E] <ID>- Loans > Counterparty Reject Order
    Given user is on the "Loans" page with <email>, <password> and <secret>
    When the user "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And the counterparty reject the order with <cp_email>, <cp_password> and <cp_secret>
    Then the loan order will be eliminated for both parties
    Examples:
      | ID | TypeToken | email         | password      | secret         | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret      |
      | 6  | Custom    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09_DEMO | lend      | Open     | ETH      | 0.1    | 10           | 5         | days      | 1         | minutes          | 1              | 100        | SHIB            | 99.5            | weekly    | 0        | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10_DEMO |

  @TEST_LM-8828
  Scenario Outline: [E2E] <ID>- Loans > Maker Cancel Order
    Given user is on the "Loans" page with <email>, <password> and <secret>
    When the user "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And the same user cancel the order
    Then the loan order will be cancel for both parties
    Examples:
      | ID | TypeToken | email         | password      | secret         | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral |
      | 7  | Custom    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09_DEMO | borrow    | Open     | ETH      | 0.1    | 10           | 5         | days      | 1         | minutes          | 1                | 100        | SHIB            | 99.5            | weekly    | 0        | 100.5            |



  @TEST_LM-8829
  Scenario Outline: [E2E] <ID>- Loans > Test Margin Call Functionality
    Given user is on the "Loans" page with <email>, <password> and <secret>
    When the user "Create Order" <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
    And logout
    And the counterparty accept the order with <cp_email>, <cp_password> and <cp_secret>
    And the collateral is out of bounds <collateralAsset>
    Then the margin call button will be enabled
    And and pressing it we will see the new transaction
    Examples:
      | ID | TypeToken | email         | password      | secret         | operation | typeLoan | currency | amount | counterparty | aprAmount | duration1 | duration2 | offerExpiration1 | offerExpiration2 | collateral | collateralAsset | collateralLimit | frecuency | repayFee | refundCollateral | cp_email      | cp_password   | cp_secret      |
      | 8  | Native    | USER_EMAIL_09 | USER_PASSWORD | SECRET_09_DEMO | lend      | Open        | BTC      | 0.001  | 10           | 5         | days      | 5         | minutes            | 1                | 100        | ETH             | 99.5            | weekly    | 0        | 100.5            | USER_EMAIL_10 | USER_PASSWORD | SECRET_10_DEMO |
 
# @TEST_LM-8830
# Scenario Outline: [E2E] <ID>- Loans > Create Loan Manual Entry
#   Given user is on the "Loans Manual Entry" page with <email>, <password> and <secret>
#   When the user "Create Order" Manual Entry <operation> <typeLoan> "order" of <currency> <amount> with <aprAmount> APR and <duration2> <duration1> duration, expiring in <offerExpiration2> <offerExpiration1> and <collateral> <collateralAsset> as collateral, limited to <collateralLimit> % with <counterparty> and with <frecuency> frecuency <repayFee> <refundCollateral>
#   Then the loan Manual Entry order will be created
#   Examples:
#     | ID | TypeToken | email         | password      | secret         | operation | typeLoan | currency | amount | counterparty | duration1 | duration2 | offerExpiration1 | offerExpiration2 | aprAmount | repayFee | frecuency | collateralAsset | collateral | marginCall | refundCollateral |
#     | 9  | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01_DEMO | borrow    | Open     | ETH      | 0.2    | 02           | 0         | 1         | minutes          | 1                | 5         | 0        | weekly    | SHIB            | 100        | 99.5       | 100.5            |
#     | 10 | Custom    | USER_EMAIL_01 | USER_PASSWORD | SECRET_01_DEMO | lend      | Fixed    | ETH      | 0.1    | 02           | days      | 1         | minutes          | 1                | 10        | 0        | weekly    | SHIB            | 100        | 99.5       | 100.5            |