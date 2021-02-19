Feature: Set/Change status

  Scenario Outline: the user should be able to chooseone of 5 status messages
    Given the user is logged in as "Employee100"
    When the user clicks to "Set status" button
    Then the user should be able to see "status messages"
    When the user chooses one "<status message>" and clicks "Set status message" button
    Then the user should be able to see saved status


    Examples:
      | status message   |
      | In a meeting     |
      | Commuting        |
      | Working remotely |
      | Out sick         |
      | Vacationing      |