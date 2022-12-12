Feature: Trade Plans


	# @TEST_LM-8491 @TESTSET_LM-8585
	# Scenario Outline: [E2E] <ID>- Trades > Validate Static Elements
	# 	Given user is on the "Trades" page with <email>, <password> and <secret>
	# 	When the user is redirected to the Trade page and Create New Order <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
	# 	Then the user visualizes Trade page elements correctly

	# 	Examples:
	# 		| ID | email         | password      | secret         | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
	# 		| 1  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 | Sell      | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           |

#Monitoring
	@TEST_LM-8493 @TESTSET_LM-9077 @monitoring
	Scenario Outline: [E2E] <ID>- Trades > Create and Accept Order
		Given the user is in sign-in and type <email>, <password> and <secret>
		When the user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		And validate all de values out the card <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		And validate all de values in the card <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		When the user log out your account
		And the counterparty sign-in and type <cp_email>, <cp_password> and <cp_secret>
		And the counterparty accepts the order
		Then the order will be created for both parties

		Examples:
			| ID | email         | password      | secret    | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty | cp_email      | cp_password   | cp_secret      |
			| 2  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 | Buy       | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           | USER_EMAIL_20 | USER_PASSWORD | SECRET_20 |
#			| 3  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 | Sell      | LTC      | 0.05     | SHIB | 10    | days      | 1         | 20           | USER_EMAIL_20 | USER_PASSWORD | SECRET_20 |

	@TEST_LM-8581 @TESTSET_LM-9077
	Scenario Outline: [E2E] <ID>- Trades > Propose Other Terms
		Given the user is in sign-in and type <email>, <password> and <secret>
		When the user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		And the user log out your account
		And the counterparty sign-in and type <cp_email>, <cp_password> and <cp_secret>
		And the counterparty propose other terms
		And the user log out your account
		And the counterparty sign-in and type <email>, <password> and <secret>
		And the counterparty accepts the order POT
		Then the order will be created for both parties.

		Examples:
			| ID | email         | password      | secret         | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty | cp_email      | cp_password   | cp_secret      |
			| 4  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 | Buy       | ETH      | 0.001    | BTC  | 0.5   | days      | 1         | 20           | USER_EMAIL_20 | USER_PASSWORD | SECRET_20 |

	@TEST_LM-8583 @TESTSET_LM-9077
	Scenario Outline: [E2E] <ID>- Trades > Reject Order
		Given the user is in sign-in and type <email>, <password> and <secret>
		When the user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		And the user log out your account
		And the counterparty sign-in and type <cp_email>, <cp_password> and <cp_secret>
		And the counterparty reject the order
		Then a successful reject message should be displayed
		Examples:
			| ID | email         | password      | secret         | operation | currency | quantity | unit | price | duration1 | duration2 | counterparty | cp_email      | cp_password   | cp_secret      |
			| 4  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 | Buy       | ETH      | 0.001    | BTC  | 0.5   | days      | 1         | 20           | USER_EMAIL_20 | USER_PASSWORD | SECRET_20 |


	@TEST_LM-8584 @TESTSET_LM-9077
	Scenario Outline: [E2E] <ID>- Trades > Add Custom Token
		Given the user is in sign-in and type <email>, <password> and <secret>
		When the user import contract <contract> in "Trades" modal
		Then the <symbol> contract is in "Manage Tokens"
		When the user delete <symbol> token
		Then the <symbol> will be eliminated to "Manage Tokens"

		Examples:
			| ID | email         | password      | secret         | contract                                   | symbol |
			| 6  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 | 0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39 | HEX    |

	@TEST_LM-8582 @TESTSET_LM-9077
	Scenario Outline: [E2E] <ID>- Trades > Cancel Order
	 	Given the user is in sign-in and type <email>, <password> and <secret>
	 	When the user "Create New Order" <operation> with <currency> and <quantity> and <unit> and <price> and <duration1> and <duration2> and <counterparty>
		And the same user Cancel de Order
		Then a successful cancellation message should be displayed

		Examples:
			| ID | email         | password      | secret         |operation | currency | quantity | unit | price | duration1 | duration2 | counterparty |
			| 7  | USER_EMAIL_19 | USER_PASSWORD | SECRET_19 |Buy       | BTC      | 0.005    | ETH  | 0.5   | days      | 1         | 20           |
