Feature: Log out

    @TEST_LM-8061
    Scenario Outline: Log Out - Happy Path
        Given I go to sign-in
         When I type <email>, <password> and <secret>
          And I click on logs out button
         Then I should see the membrane sign in page
        
        Examples:
            | ID | email         | password      | secret         |
            | 1  | USER_EMAIL_05 | USER_PASSWORD | SECRET_05 |