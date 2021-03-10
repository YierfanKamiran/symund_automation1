Feature: Comment Box Functions

  Background:
    Given the user is on the login page
    And the user enters "Employee23" and "Employee123"
    Given the user clicks dots for comments
    And the user clicks Details
    And the user clicks comments
@comment
  Scenario: A comment box should be displayed
    Given the user clicks dots for comments
    And the user clicks Details
    And the user clicks comments
    Then the comments box should be displayed

  @comment
  Scenario: the user should be able to comment
    Given the user enters comment "I love you "
    And the user clicks comment arrow button
    And the user's username should be seen
    And the box is emptied for new comment
