Feature: the user should be able to login

   @positive
  Scenario: Login as an employee
    Given the user is on the login page
    When the user enters employee information
    Then the title contains "Files - Symund - QA"

 @negative
  Scenario Outline: Login with invalid information
    Given  the user is on the login page
    When the user enters "<username>" and "<password>"
    Then the user should see "Wrong username or password." message diplayed

    Examples:
      | username    | password    |
      | Employee    | Employee123 |
      | Employee199 | Employee    |


  @wip @negative_blank
  Scenario Outline: Login with invalid information
    Given  the user is on the login page
    When the user enters "<username>" and "<password>"
    Then the user should see "Please fill in this field."

    Examples:
      | username    | password    |
    #  |             | Employee123 |
      | Employee199 |             |
      |             |             |
