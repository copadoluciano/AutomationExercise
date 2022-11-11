@feature-security-center
Feature: Security Center


    # Scenario: Change Password - Validate Static Elements
    #     Given the user has navigated to Membrane page
    #     When the user is in the password change module.
    #     Then the user visualizes Change Password page elements correctly


    Scenario Outline: [E2E] <ID>- Security Center > Change Password - Happy Path
        Given user is on the "Security Center" page with <email>, <password> and <secret>
        When the user completes the password change data
        Then he receives a confirmation alert.
        And you will return to the previous password
         Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

    Scenario Outline: [E2E] <ID>- Security Center > Change Password - Invalid Data
        Given user is on the "Security Center" page with <email>, <password> and <secret>
        When the user completes the password with invalid data
        Then he receives a alert "Error: Wrong password, try again"
         Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |

    Scenario Outline: [E2E] <ID>- Security Center > Change Password - Passwords Empty
        Given user is on the "Security Center" page with <email>, <password> and <secret>
        When the user not completes the password
        Then the "Next" button are disabled
         Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05_DEMO |
