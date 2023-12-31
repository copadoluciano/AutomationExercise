
Feature: Products

    Rule: Test Rules
        - We will use user "17"
        - We will test functionalities of the "Counterparties"

        Background: Go to the Home Page
            Given the user is at Home Page


        @TEST_LM-XXX
        Scenario Outline: Add Products in Cart
            When the user add products on position <position1> and <position2> to the cart
            Then the products <position1> and <position2> are seen inside the cart
            And the prices, quantities and totals are correct in the <position1> and <position2>

            Examples:
                | position1 | position2 |
                | 1         | 2         |
                | 3         | 4         |
                | 5         | 6         |


        @TEST_LM-XXX
        Scenario Outline: Remove Products From Cart
            When the user add products on position <position1> and <position2> to the cart
            And the user clicks on the Cart button
            Then the user should be on the Cart page
            And the user clicks the X button next to the specific product
            Then the product should be removed from the cart

            Examples:
                | position1 | position2 |
                | 1         | 2         |


        @TEST_LM-XXX
        Scenario Outline: Add review on product
            When the user is on the product <product> review page
            And the user <name> with <email> submits a <review>
            Then the user should receive a confirmation message

            Examples:
                | product | name   | email           | review       |
                | 600     | Pedro | pedro@gmail.com | "Goodproduct" |


