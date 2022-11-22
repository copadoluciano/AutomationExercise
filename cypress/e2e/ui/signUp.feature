@feature-sign-up
Feature: Sign Up

    @TEST_LM-8846
    Scenario: Sign Up - Validate Static Elements
        Given the user is on the Sign Up page
        Then the user visualizes Sign Up page elements correctly
    @TEST_LM-8847
    Scenario: Sign Up - Happy Path
        Given the user needs to create a new user
        When the user completes all the fields.
        Then an alert will appear with successful registration

    @TEST_LM-8848
    Scenario: Sign Up - Already have an acount
        Given user at Sign Up page
        When user click "already have an acount" option
        Then user is redirect to login page

    @TEST_LM-8849
    Scenario: Sign Up - Account email is already taken
        Given user at Sign Up page
        When user uses an email already registered
        Then an alert will appear

    @TEST_LM-8850
    Scenario: Sign Up - Sign up - Dont validate token
        Given user at Sign Up page
        When user uses an email already registered
        Then an alert will appear .

# Scenario: Sign Up Page - First Name Field : Empty
    #     Given user at Sign Up page
    #     When fills the sign up form but leaves First name field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 4
    # Scenario: Sign Up Page - Last Name Field : Empty
    #     Given user at Sign Up page
    #     When fills the sign up form but leaves Last name field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 5
    # Scenario: Sign Up Page - Email Name Field : Empty
    #     Given user at Sign Up page
    #     When fills the sign up form but leaves Email field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 6
    # Scenario: Sign Up Page - Phone Field : Empty
    #     Given user at Sign Up page
    #     When fills the sign up form but leaves Phone field empty
    #     Then the alert message This field is required should be shown
    #     And I should see the Next button disabled

    # # 7
    # Scenario: Sign Up Page - First Name Field : Wrong Values
    #     Given user at Sign Up page
    #     When fills the sign up form with wrong first name format
    #     Then the alert message Wrong Name Format should be shown

    # # 8
    # Scenario: Sign Up Page - Last Name Field : Wrong Values
    #     Given user at Sign Up page
    #     When fills the sign up form with wrong last name format
    #     Then the alert message Wrong Name Format should be shown

    # #9
    # Scenario: Sign Up Page - Email Field : Wrong Values
    #     Given user at Sign Up page
    #     When fills the sign up form with wrong email format
    #     Then the alert message Wrong Email Format should be shown

    # # 10
    # Scenario: Sign Up Page -Phone Number Field : Wrong Values
    #     Given user at Sign Up page
    #     When fills the sign up form with wrong phone format
    #     Then the alert message Wrong Phone Format should be shown
