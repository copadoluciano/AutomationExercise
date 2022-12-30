Feature: Test Set UI - [My Accounts] - Log Out

    @TEST_LM-8061 @TESTSET_LM-9085
    Scenario Outline: Log Out - Happy Path
        Given I go to sign-in
         When I type <email>, <password> and <secret>
          And I click on logs out button
         Then I should see the membrane sign in page
        
        Examples:
            | ID | email         | password      | secret    |
            | 1  | USER_EMAIL_26 | USER_PASSWORD | SECRET_26 |