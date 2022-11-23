Feature: Security Center

         @TEST_LM-8879 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Change Password - Happy Path
            Given I go to sign-in and type <email>, <password> and <secret>
             When I type password and change for a new password
             Then I should see the pop-up message Your password has been changed
              And I type new password and change for the befor password
             Examples:
                | ID | email         | password      | secret         | 
                | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

        @TEST_LM-8880 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Validate Static Elements
            Given I go to sign-in and type <email>, <password> and <secret>
             When I go to change password page
             Then I should see the page change password with correct elements
            Examples:
                | ID | email         | password      | secret         | 
                | 2  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

        @TEST_LM-8881 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Change Password - Invalid Data
            Given I go to sign-in and type <email>, <password> and <secret>
             When I type password invalid and change for a new password
             Then I should see message label Error: Wrong password, try again
            Examples:
                | ID | email         | password      | secret         | 
                | 3  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

        @TEST_LM-8882 @TESTSET_LM-8982
        Scenario Outline: [E2E] <ID>- Security Center > Change Password - Passwords Empty
            Given I go to sign-in and type <email>, <password> and <secret>
             When I do not type password and do not type a new password
             Then I should see the Next button disabled in change password page
            Examples:
                | ID | email         | password      | secret         | 
                | 4  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

