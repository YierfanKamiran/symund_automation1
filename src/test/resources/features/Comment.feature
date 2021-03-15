Feature: Comment Box Functions

  Background:
    Given the user is on the login page
    And the user enters "Employee23" and "Employee123"
    Given the user clicks dots for comments
    And the user clicks Details
    And the user clicks comments
  @SYM-191
  Scenario: A comment box should be displayed
    Given the user clicks dots for comments
    And the user clicks Details
    And the user clicks comments
    Then the comments box should be displayed

  @SYM-195
  Scenario: the user should be able to comment
    Given the user enters comment "I am angry at you"
    And the user clicks comment arrow button
    And the user's username should be seen
    And the box is emptied for new comment

  @SYM-196
    Scenario: the user should be edit and delete the comment
    Given the user clicks dots next to user name
    And the user clicks Edit comment
    And the user deletes the old comment and writes "i like you actually"
    Then the user clicks comment arrow button
    Then verify that the comment is edited
    Then the user clicks dots next to user name
    And the user clicks Delete comment button
    And verify that the comment is deleted
