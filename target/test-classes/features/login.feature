Feature: the user should be able to login

   @positive
  Scenario: Login as an employee
    Given the user is on the login page
    When the user enters employee information
    Then the title contains "Files - Symund - QA"

  @wip @negative
  Scenario Outline: Login with invalid information
    Given  the user is on the login page
    When the user enters "<username>" and "<password>"
    Then the user should see "Wrong username or password."

    Examples:
      | username    | password    |
      | Employee    | Employee123 |
      | Employee199 | Employee    |


   @negative_blank
  Scenario Outline: Login with invalid information
    Given  the user is on the login page
    When the user enters "<username>" and "<password>"
    Then the user should see "Fill out this field"

    Examples:
      | username    | password    |
      |             | Employee123 |
      | Employee199 |             |
      |             |             |
