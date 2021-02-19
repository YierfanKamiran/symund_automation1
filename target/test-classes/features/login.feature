
Feature: the user should be able to login

  Background:
    Given the user is on the login page

  @wip @SYM-143 @positive
  Scenario: Login as an employee
    When the user enters employee information
    Then the title contains "Files - Symund - QA"

  @SYM-144 @negative
  Scenario Outline: The user should be able to login
    When the user enters "<username>" and "<password>"
    Then the "url" should change

    Examples:
      | username    | password    |
      | Employee199 | Employee    |
      | Employee    | Employee123 |
      | Employee199 | Employee    |
      |             | Employee123 |
      | Employee199 |             |
      |             |             |

#  @negative
#  Scenario Outline: Login with invalid information
#    When the user enters "<username>" and "<password>"
#    Then the user should see "Wrong username or password." message displayed
#
#    Examples:
#      | username    | password    |
#      | Employee    | Employee123 |
#      | Employee199 | Employee    |
#
#
#  @negative_blank
#  Scenario Outline: Login with invalid information
#    When the user enters "<username>" and "<password>"
#    Then the user should see "Please fill in this field."
#
#    Examples:
#      | username    | password    |
#      |             | Employee123 |
#      | Employee199 |             |
#      |             |             |

