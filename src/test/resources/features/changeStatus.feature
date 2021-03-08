@contact
Feature:  Set and change status

  Background:
    Given the user is logged in as "Employee100"
    When the user clicks to "Set status" option from Settings Menu

 @SYM-149  @SYM-150 @wip @set_status @set_time
  Scenario: the user should be able to choose one status
    Then the user should see following status messages
      | In a meeting     |
      | Commuting        |
      | Working remotely |
      | Out sick         |
      | Vacationing      |
    When the user clicks to "In a meeting" status message
    And the user clicks clear after button
    Then the user should be able to see following
      | Don't clear |
      | 30 minutes  |
      | 1 hour      |
      | 4 hours     |
      | Today       |
      | This week   |
    And the user clicks to "4 hours" option
    When the user clicks to "Set status message" button
    Then "In a meeting" status message should be displayed in Settings Menu

  @SYM-151 @delete_status
  Scenario: the user should be able to delete status message
    When the user clicks to "In a meeting" status message
    And the user clicks to "Set status message" button
    Then  "In a meeting" status message should be displayed in Settings Menu
    When the user clicks to "In a meeting" option from Settings Menu
    When the user clicks to "Clear status message" button
    And "Set status" status message should be displayed in Settings Menu

 @SYM-148 @generic_status
  Scenario: the user should be able to choose emoji and enter status message
    When the user clicks to emoji icon and chooses emoji "heart_eyes"
    And the user enters "Trying" into the status message input box
    And the user clicks to "Set status message" button
    Then "Emoji+ Happy" status message should be displayed in Settings Menu

