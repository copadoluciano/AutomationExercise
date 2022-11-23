
Feature: Forgot Password
    @TEST_LM-8889 @forgot
     Scenario: Forgot Password - Auth Active
         Given I go to sign-in
         When the user completes the Forgot Password flow
         Then the user will receive a token to enter
         

    @TEST_LM-8890 @forgot
    Scenario Outline: [E2E] <ID>- Forgot Password > - Email & Password empty
        Given I go to sign-in
        When the field email is empty
        Then the "Send Reset Email" button are disabled
      
        Examples:
            | ID |
            | 1  |

    @TEST_LM-8891
    Scenario Outline: [E2E] <ID>- Forgot Password > - Account not active
        Given I go to sign-in
        When user put email not active on field e-mail
        Then the alert message "The account is not active yet." should be shown

        Examples:
            | ID |
            | 2  |
