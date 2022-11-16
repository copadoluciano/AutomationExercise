Feature: Security Center

    Rule: Test Rules
        - We will use user "05"
        - We will test functionalities of the "Security Center"


        @TEST_LM-8879 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Change Password - Happy Path
            Given user is on the "Security Center" page with <email>, <password> and <secret>
            When the user completes the password change data
            Then he receives a confirmation alert.
            And you will return to the previous password
             Examples:
                | ID | email         | password      | secret         | 
                | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

        @TEST_LM-8880 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Validate Static Elements
            Given user is on the "Security Center" page with <email>, <password> and <secret>
            When the user is in the password change module.
            Then the user visualizes Change Password page elements correctly
            Examples:
                | ID | email         | password      | secret         | 
                | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

        @TEST_LM-8881 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Change Password - Invalid Data
            Given user is on the "Security Center" page with <email>, <password> and <secret>
            When the user completes the password with invalid data
            Then he receives a alert "Error: Wrong password, try again"
            Examples:
                | ID | email         | password      | secret         | 
                | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

        @TEST_LM-8882 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Change Password - Passwords Empty
            Given user is on the "Security Center" page with <email>, <password> and <secret>
            When the user not completes the password
            Then the "Next" button are disabled
            Examples:
                | ID | email         | password      | secret         | 
                | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

