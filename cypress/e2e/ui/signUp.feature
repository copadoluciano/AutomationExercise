Feature: Test Set UI - [User] - Sign Up

    @TEST_LM-8846 @TESTSET_LM-9073
    Scenario Outline: [E2E] <ID>- Sign Up - Validate Static Elements
        Given I go to Sign Up
         Then I should see the page sign-up with correct elements

         Examples:
            | ID |
            | 1  |

    # @TEST_LM-8847 @TESTSET_LM-9073
    # Scenario Outline: [E2E] <ID>- Sign Up - Happy Path
    #     Given I go to Sign Up
    #      When I type First and Last Name, Email, Country code and Phone Number
    #      Then I should see message successful registration

    #      Examples:
    #         | ID |
    #         | 2  |

    @TEST_LM-8848 @TESTSET_LM-9073
    Scenario Outline: [E2E] <ID>- Sign Up - Already have an acount
        Given I go to Sign Up
         When I click on Already have an account?
         Then I should see the membrane sign in page

         Examples:
            | ID |
            | 3  |

    @TEST_LM-8849 @TESTSET_LM-9073
    Scenario Outline: [E2E] <ID>- Sign Up - Account email is already taken
        Given I go to Sign Up
         When I type <First> and <Last> Name, <Email>, Country Argentina and Phone <Number>
         Then I should see the pop-up message The account email is already taken

        Examples:
            | ID | First   | Last | Email         |Number|
            | 4  | Cypress | Test | USER_EMAIL_01 |123456|

    @TEST_LM-8850 @TESTSET_LM-9073
    Scenario Outline: [E2E] <ID>- Sign Up -  Dont validate token
        Given I go to Sign Up
         When I type <First> and <Last> Name, <Email>, Country Argentina and Phone <Number>
         Then an alert will appear .

        Examples:
            | ID | First   | Last | Email         |Number|
            | 5  | Cypress | Test | USER_EMAIL_01 |123456|


 

# Scenario: Sign Up Page - First Name Field : Empty
    #     Given I go to Sign Up
    #     When fills the sign up form but leaves First name field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 4
    # Scenario: Sign Up Page - Last Name Field : Empty
    #     Given I go to Sign Up
    #     When fills the sign up form but leaves Last name field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 5
    # Scenario: Sign Up Page - Email Name Field : Empty
    #     Given I go to Sign Up
    #     When fills the sign up form but leaves Email field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 6
    # Scenario: Sign Up Page - Phone Field : Empty
    #     Given I go to Sign Up
    #     When fills the sign up form but leaves Phone field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 7
    # Scenario: Sign Up Page - First Name Field : Wrong Values
    #     Given I go to Sign Up
    #     When fills the sign up form with wrong first name format
    #     Then the alert message Wrong Name Format should be shown

    # # 8
    # Scenario: Sign Up Page - Last Name Field : Wrong Values
    #     Given I go to Sign Up
    #     When fills the sign up form with wrong last name format
    #     Then the alert message Wrong Name Format should be shown

    # #9
    # Scenario: Sign Up Page - Email Field : Wrong Values
    #     Given I go to Sign Up
    #     When fills the sign up form with wrong email format
    #     Then the alert message Wrong Email Format should be shown

    # # 10
    # Scenario: Sign Up Page -Phone Number Field : Wrong Values
    #     Given I go to Sign Up
    #     When fills the sign up form with wrong phone format
    #     Then the alert message Wrong Phone Format should be shown
