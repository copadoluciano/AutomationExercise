
Feature: Invite user

    Rule: Test Rules
        - We will use user "17"
        - We will test functionalities of the "Counterparties"


        # @TEST_LM-8864 @TESTSET_LM-9102
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
                | ID | email         | password      | secret    | counterparty  |
                | 2  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_01 |


        @TEST_LM-8867 @TESTSET_LM-9102
        Scenario Outline: [E2E] <ID>- Counterparties > Invite Already Exist
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user invite <counterparty> an already user to trade with me
            Then You will receive an alert "This invitation already exists"
            Examples:
                | ID | email         | password      | secret    | counterparty  |
                | 3  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 |

        @TEST_LM-8868 @TESTSET_LM-9102
        Scenario Outline: [E2E] <ID>- Counterparties > Invitation Rejected
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user invite a new <cp_email> to trade with me
            And the counterparty with credentials <cp_email>, <cp_password> and <cp_secret> the <email> invitation
            Then the invitation of <email> will disappear from the panel of the invited user
            Examples:
                | ID | email         | password      | secret    | cp_email      | cp_password   | cp_secret |
                | 4  | USER_EMAIL_16 | USER_PASSWORD | SECRET_16 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 |

        @TEST_LM-8869 @TESTSET_LM-9102
        Scenario Outline: [E2E] <ID>- Counterparties > Try Disabled Counterparty With Open Order
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user try to disabled a <cp_email>
            Then the user receive an alert to cant disable the counterparty because they have an open order
            Examples:
                | ID | email         | password      | secret    | cp_email      |
                | 5  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 |
        @TEST_LM-8870 @TESTSET_LM-9102
        Scenario Outline: [E2E] <ID>- Counterparties > Try create order with disabled counterparty
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user try to create order with blocked <cp_email>
            Then the user receive an alert to cant create New Order because doesnt have enabled your <cp_email>
            Examples:
                | ID | email         | password      | secret    | cp_email      |
                | 6  | USER_EMAIL_21 | USER_PASSWORD | SECRET_21 | USER_EMAIL_17 |
        @TEST_LM-8871 @TESTSET_LM-9102
        Scenario Outline: [E2E] <ID>- Counterparties > Try create order with Not Available counterparty
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user try to create order with Not Available <cp_email>
            Then the user doesnt have this <cp_email> enabled to create an trading and lending operation
            Examples:
                | ID | email         | password      | secret    | cp_email      |
                | 7  | USER_EMAIL_22 | USER_PASSWORD | SECRET_22 | USER_EMAIL_21 |



        @TEST_LM-10533 @TESTSET_LM-9102
        Scenario Outline: Counterparties > Available to trade Buy/Sell
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user has a user <cp_email> available to trade & lend
            And the user will create a Trades order
            Then the available user should appear in the list of <counterparty>

            Examples:
                | ID | email         | password      | secret    | cp_email      | counterparty |
                | 9  | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 | cypress_18   |


        @TEST_LM-10537 @TESTSET_LM-9102
        Scenario Outline: Counterparties - Available to trade Lend/Borrow
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user has a user <cp_email> available to trade & lend
            And the user will create a Lend & Borrow order
            Then the available user should appear in the list of <counterparty>
            Examples:
                | ID | email         | password      | secret    | cp_email      | counterparty |
                | 10 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 | cypress_18   |




        @TEST_LM-11804 @TESTSET_LM-9102
        Scenario Outline: Counterparties - Create new Manual Counterparty
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user create new manual counterparty with name <cp_name> and email <cp_email>
            Then the user should see message label "<cp_name> has been successfully added."
            And the user will delete the manual counterparty with email <cp_email>
            Examples:
                | ID | email         | password      | secret    | cp_name  | cp_email      | cp_name  |
                | 10 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | cypress | USER_EMAIL_18 | cypress1 |

        @TEST_LM-11818 @TESTSET_LM-9102
        Scenario Outline: Counterparties - Delete Manual Counterparty
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user create new manual counterparty with name <cp_name> and email <cp_email>
            Then the user should see message label "<cp_name> has been successfully added."
            And the user will delete the manual counterparty with email <cp_email>
            Examples:
                | ID | email         | password      | secret    | cp_name  | cp_email      | cp_name  |
                | 10 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | cypress | USER_EMAIL_18 | cypress1 |


        @TEST_LM-11819 @TESTSET_LM-9102
        Scenario Outline: Counterparties - View Detail for Manual Counterparty
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user view detail for manual counterparty <cp_email>
            Then the user can see his <cp_name>, <cp_email> and the status of notifications

            Examples:
                | ID | email         | password      | secret    | cp_name | cp_email             |
                | 10 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | Test    | test@blockchain.test |


        @TEST_LM-11826 @TESTSET_LM-9102
        Scenario Outline: Counterparties - Edit Name in Manual Counterparty
            Given the user is in sign-in and type <email>, <password> and <secret>
            When the user edit the name <cp_name> for <cp_name_new> in manual counterparty
            Then the user should see the message "Done! The manual counterparty Test1 has been edited." and the new name <cp_name_new> <cp_email>
            And the user will change back to the original name <cp_name> with email <cp_email>
            Examples:
                | ID | email         | password      | secret    | cp_name  | cp_email             | cp_name_new |
                | 10 | USER_EMAIL_17 | USER_PASSWORD | SECRET_17 | TestEdit | edit@blockchain.test | TestEditNew |

    # Scenario Outline: Invite User - Send Reminder & ReSend
    #     Given the user is in sign-in and type <email>, <password> and <secret>
    #     When the user try to Send Reminder Invitation
    #     Then receive an alert to "Invitation Send"
    #     And if the user try Send Reminder Againt
    #     Then receive an alert to "Wait"

    #     Examples:
    #         | ID | email         | password      | secret    | cp_email      |
    #         | 8  | USER_EMAIL_º7 | USER_PASSWORD | SECRET_17 | USER_EMAIL_18 |


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