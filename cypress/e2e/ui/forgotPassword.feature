
Feature: Forgot Password

    @TEST_LM-8889 
     Scenario Outline: [E2E] <ID>- Forgot Password > - Auth Active
         Given I go to forgot-password
          When I type <email> in the email field of the Forgotten password page
          Then I should receive the token in my email inbox

         Examples:
            | ID | email         |
            | 1  | USER_EMAIL_15 |

    @TEST_LM-8890
    Scenario Outline: [E2E] <ID>- Forgot Password > - Email & Password empty
        Given I go to forgot-password
         When I do not fill the email field of the Forgotten password page
         Then I should see the Send Reset Email button disabled

        Examples:
            | ID |
            | 1  |

    @TEST_LM-8891
    Scenario Outline: [E2E] <ID>- Forgot Password > - Account not active
        Given I go to forgot-password
         When I type <email> not active in the email field of the Forgotten password page
         Then I should see message label The account is not active yet

         Examples:
            | ID | email         |
            | 1  | USER_EMAIL_15 |
