
Feature: Invite user

    Rule: Test Rules
        - We will use user "17"
        - We will test functionalities of the "Counterparties"


    # @TEST_LM-8864 @TESTSET_LM-9020
    # Scenario Outline: [E2E] <ID>- Counterparties > Static Elements
    #     Given user need to see the static elements
    #     When the user is on the "Users" page
    #     Then the user visualizes "Users" page elements correctly
    #     Examples:
    #         | ID | email         | password      | secret         | counterparty  |
    #         | 1  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_01 |

    @TEST_LM-8865 @TESTSET_LM-9102
    Scenario Outline: [E2E] <ID>- Counterparties > Invite Counterparty
        Given the user is in sign-in and type <email>, <password> and <secret>
        When I invite a <counterparty> to trade with me
        Then the <counterparty> will appear in pending invites
        Examples:
            | ID | email         | password      | secret         | counterparty  |
            | 2  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_01 |


    @TEST_LM-8867 @TESTSET_LM-9102
    Scenario Outline: [E2E] <ID>- Counterparties > Invite Already Exist
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user invite <counterparty> an already user to trade with me
        Then You will receive an alert "This invitation already exists"
        Examples:
            | ID | email         | password      | secret         | counterparty  |
            | 3  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 |

    @TEST_LM-8868 @TESTSET_LM-9102
    Scenario Outline: [E2E] <ID>- Counterparties > Invitation Rejected
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user invite a new <cp_email> to trade with me
        And the counterparty with credentials <cp_email>, <cp_password> and <cp_secret> the <email> invitation
        Then the invitation of <email> will disappear from the panel of the invited user
        Examples:
            | ID | email         | password      | secret         | cp_email      | cp_password   | cp_secret      |
            | 4  | USER_EMAIL_16 | USER_PASSWORD | SECRET_16 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 |

    @TEST_LM-8869 @TESTSET_LM-9102
    Scenario Outline: [E2E] <ID>- Counterparties > Try Disabled Counterparty With Open Order
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user try to disabled a <cp_email>
        Then the user receive an alert to cant disable the counterparty because they have an open order
        Examples:
            | ID | email         | password      | secret         | cp_email      |
            | 5  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 |
    @TEST_LM-8870 @TESTSET_LM-9102
    Scenario Outline: [E2E] <ID>- Counterparties > Try create order with disabled counterparty
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user try to create order with blocked <cp_email>
        Then the user receive an alert to cant create New Order because doesnt have enabled your <cp_email>
        Examples:
            | ID | email         | password      | secret         | cp_email      |
            | 6  | USER_EMAIL_21 | USER_PASSWORD | SECRET_21 | USER_EMAIL_17 |
    @TEST_LM-8871 @TESTSET_LM-9102
    Scenario Outline: [E2E] <ID>- Counterparties > Try create order with Not Available counterparty
        Given the user is in sign-in and type <email>, <password> and <secret>
        When the user try to create order with Not Available <cp_email>
        Then the user doesnt have this <cp_email> enabled to create an trading and lending operation
        Examples:
            | ID | email         | password      | secret         | cp_email      |
            | 7  | USER_EMAIL_22 | USER_PASSWORD | SECRET_22 | USER_EMAIL_21 |



# Scenario: Invite User - Send Reminder & ReSend
#      Given the user is on the "User" page
#      When the user try to Send Reminder Invitation
#      Then receive an alert to "Invitation Send"
#      And if the user try Send Reminder Againt
#      Then receive an alert to "Wait"









# Scenario: Invite User - Available to trade Buy/Sell
# Given I want to carry out a Buy/Sell operation
# When I have a user available to trade
# And I create a Buy/Sell order
# Then the available user should appear in the list of "Counterparties"

# Scenario: Invite User - Available to trade Lend/Borrow
# Given I want to carry out a Lend/Borrow operation
# When I have a user available to trade
# And I create a Lend/Borrow order
# Then the available user should appear in the list of "Full Name"


# Scenario: Invite User - Disable user - Validate disable selects in Buy/Sell
# Given I want to carry out a Lend/Borrow operation
# When I have a user disabled to trade
# And I create a Lend/Borrow order
# Then the user should not appear in the list

# Scenario: Invite User - Disable user - Validate disable selects in Lend/Borrow
# Given I want to carry out a Lend/Borrow operation
# When I have a user disabled to trade
# And I create a Lend/Borrow order
# Then the user should not appear in the list