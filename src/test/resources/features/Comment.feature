Feature: Comment Box Functions

  Background:
    Given the user is on the login page
    And the user enters "Employee23" and "Employee123"
@comment
  Scenario: A comment box should be displayed
    Given the user clicks dots for comments
    And the user clicks Details
    And the user clicks comments
    Then the comments box should be displayed
