Feature: Trade Plans


	@TEST_LM-8491 @TESTSET_LM-8585
	# Scenario Outline: [E2E] <ID>- Trades > Validate Static Elements
	# 	Given user is on the "Trades" page with <email>, <password> and <secret>
	# 	When the user is redirected to the Trade page and Create New Order <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
	# 	Then the user visualizes Trade page elements correctly

	# 	Examples:
	# 		| ID | email         | password      | secret         | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
	# 		| 1  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19_DEMO | Sell      | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           |


	@TEST_LM-8493 @TESTSET_LM-8585
	Scenario Outline: [E2E] <ID>- Trades > Create and Accept Order
		Given user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		When the counterparty accepts the order
		Then the order will be created for both parties

		Examples:
			| ID | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
			| 2  | Buy       | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           |
			| 3  | Sell      | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           |

	@TEST_LM-8581 @TESTSET_LM-8585
	Scenario Outline: [E2E] <ID>- Trades > Propose Other Terms
		Given user "Create new order with Native Token" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		When the counterparty propose other terms
		And the order maker accepts the order
		Then the order will be created for both parties.

		Examples:
			| ID | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
			| 4  | Buy       | ETH      | 0.001    | BTC  | 0.5   | days      | 1         | 20           |

	@TEST_LM-8583 @TESTSET_LM-8585
	Scenario Outline: [E2E] <ID>- Trades > Reject Order
		Given user "Create new Orderr" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		When the counterparty reject the order
		Then a successful reject message should be displayed
		Examples:
			| 5 | ID | operation | currency | quantity | unit | price | duration1 | duration2 | 20 |

	@TEST_LM-8584 @TESTSET_LM-8585
	Scenario Outline: [E2E] <ID>- Trades > Add Custom Token
		Given user is on the operation "Buy Sell"
		When the user import contract <contract>
		Then the <symbol> contract is on the "My balances and Credits" page.
		And the user delete <symbol> token

		Examples:
			| ID | contract                                   | symbol |
			| 6  | 0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39 | HEX    |

	@TEST_LM-8582 @TESTSET_LM-8585
	Scenario Outline: [E2E] <ID>- Trades > Cancel Order
		Given user "Create Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		When the shame user Cancel de Order
		Then a successful cancellation message should be displayed

		Examples:
			| ID | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
			| 7  | Buy       | BTC      | 0.005    | ETH  | 0.5   | days      | 1         | 20           |
