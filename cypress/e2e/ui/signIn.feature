@feature-sign-in
Feature: Sign In

    # 0
    Scenario: Sign In - Validate Static Elements
        Given the user is on the Login page
        Then the user visualizes "Sign In" page elements correctly

    # 1
    Scenario: Sign In Happy Path
        Given the user is on the Membrane Page
        When the user logs in to his account
        Then the user will be redirected to the Membrane Home



    # 2
    Scenario: Go to Sign Up Page
        Given user at Membrane Sign in page
        When user click in "Sign Up" button
        Then user is redirected to Sign Up page
    #
    # 3
    Scenario Outline: Sign In - Password Empty
        Given user at Sign In page
        When user put <email> on field e-mail
        And user leaves password field empty
        Then the Next Button should be disabled
        #
        Examples:
            | email                     |
            | cypress+01@membrane.trade |
    #
    # 4
    Scenario Outline: Sign In - Email Empty
        Given user at Sign In page
        When user put <password> on field password
        And user leaves email field empty
        Then the Next Button should be disabled

        Examples:
            | password |
            | 123456   |
    #
    # 5
    Scenario: Sign In - Email & Password Empty
        Given user at Sign In page
        When user leaves Email and Password empty
        Then the Next Button should be disabled

    #6
   Scenario Outline: Sign In - Token Invalid
       Given user at Sign In page
       When the user completes with <email>, <password> valid data
       And user redirect to twofactor autentication page
       And user put token <invalid> in field token
       Then the alert message label "Your code is wrong or expired, try again" should be shown
       And the alert pop message "Your code is wrong or expired, try again" should be shown

       Examples:
           | ID | email         | password      | invalid |
           | 1  | USER_EMAIL_05 | USER_PASSWORD | 123456  |

    # 8
    Scenario: Sign In - Invalid Data
        Given the user is on the Membrane Page
        When the user try logs in to his account with invalid data
        Then the alert message label "Error: Wrong email or password, try again" should be shown


    Scenario Outline: Log Out - Happy Path
        Given user is login into the Membrane page with <email>, <password> and <secret>
        When the user logs out
        Then user is redirected to "Sign In" page
        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |