@SYM-155
Feature: Navigate to home page

  Background:
    Given the user is logged in as "Employee43"

  @navigation
  Scenario Outline: Navigate to home page
    When the user clicks "<TopMenu>"
    And the user clicks to Symund logo
    Then the title should contain "Files - Symund - QA"

    Examples:
      | TopMenu  |
      | Photos   |
      | Activity |
      | Talk     |
      | Contacts |
      | Calendar |
      | Notes    |
      | Deck     |
      | Tasks    |