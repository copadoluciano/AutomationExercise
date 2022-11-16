@feature-forgot-password
Feature: Forgot Password

    # Scenario: Forgot Password - Happy Path
    #     Given user at Membrane Sign in page
    #     When user put email active on field e-mail
    #     And user click in "Forgot password" label
    #     Then user redirect to two factor autentication page


    Scenario Outline: [E2E] <ID>- Forgot Password > - Email & Password empty
        Given user at Membrane Sign in page
        When the fields are empty
        Then Then the "Next" button and the "Forgot Password" link are disabled

        Examples:
            | ID | 
            | 1  |

    Scenario Outline: [E2E] <ID>- Forgot Password > - Account not active
        Given user at Membrane Sign in page
        When user put email not active on field e-mail
        Then the alert message "The account is not active yet." should be shown

        Examples:
            | ID |
            | 2  |
