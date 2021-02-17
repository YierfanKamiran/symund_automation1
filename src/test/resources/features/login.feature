Feature: the user should be able to login
 @wip
  Scenario: Login as an employee
    Given the user is on the login page
    When the user enters employee information
    Then the title contains "Files - Symund - QA"