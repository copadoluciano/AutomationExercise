Feature: Test Set UI - [User] - Sign In 

    @TEST_LM-8834 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Validate Static Elements
        Given I go to sign-in
         Then I should see the page sign-in with correct elements
    
        Examples:
            | ID |
            | 1  |

    @TEST_LM-8089 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Page Two Factor Autentication
        Given I go to sign-in
         When I type <email>, <password> in the email and password fields
         Then I should see the twofactor autentication page

        Examples:
            | ID | email         | password      |
            | 2  | USER_EMAIL_05 | USER_PASSWORD |

    @TEST_LM-8833 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Happy Path
        Given I go to sign-in
         When I type <email>, <password> and <secret>
         Then I should see the membrane home page

        Examples:
            | ID | email         | password      | secret         |
            | 3  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 |

    @TEST_LM-8835 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Go to Sign Up Page
        Given I go to sign-in
         When I click on sign up button
         Then I should see the membrane sign up page

        Examples:
            | ID |
            | 4  |

    @TEST_LM-8836 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Password Empty
        Given I go to sign-in
         When I type <email> in the email field
          And I do not fill the password field
         Then I should see the Next button disabled

        Examples:
          | ID | email                      |
          |  5 | cypress+01@blockchain.test |
    
    @TEST_LM-8837 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Email Empty
        Given I go to sign-in
         When I type <password> in the password field
          And I do not fill the email field
         Then I should see the Next button disabled

        Examples:
          | ID | password |
          |  6 | 123456   |
    
    @TEST_LM-8838 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Email & Password Empty
        Given I go to sign-in
         When I do not fill in the email and password fields
         Then I should see the Next button disabled

        Examples:
            | ID |
            | 7  |
 
   @TEST_LM-8839 @TESTSET_LM-9101
   Scenario Outline: [E2E] <ID>- Sign In - Token Invalid
       Given I go to sign-in
        When I type <email>, <password> in the email and password fields
         And I type <token> invalid in the token field
        Then I should see the message label Your code is wrong or expired, try again
         And I should see the pop-up message Your code is wrong or expired, try again

       Examples:
           | ID | email         | password      | token  |
           | 8  | USER_EMAIL_05 | USER_PASSWORD | 123456 |


    @TEST_LM-8840 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Invalid Data
        Given I go to sign-in
         When I type <email>, <password> invalid in the email and password fields
         Then I should see the message label Error: Wrong email or password, try again

       Examples:
           | ID | email                      | password  |
           | 9  | cypress+05@blockchain.test | 12345     |

    @TEST_LM-8851 @TESTSET_LM-9101
    Scenario Outline: [E2E] <ID>- Sign In - Validate Send New Token
        Given I go to sign-in
          And I click on Send new messege button after logging in
         Then I should see new token

       Examples:
           | ID | email         | password      |
           | 10 | USER_EMAIL_06 | USER_PASSWORD |


