Feature: user should be able to login

  @wip @positive_scenario
  Scenario : Login as an employee
    Given the user is on the login page
    When the user enters "username" and "password"
    Then the title contains "title"

#  @negative_scenario
#  Scenario Outline: Login as an employee
#
#    Given the user is on the login page
#    When the user enters "<username>" and "<password>"
#    Then the user should see "<message>"
#    Examples:
#      | username    | password    | message                     |
#      | Employee199 | Employee123 | Wrong username or password. |
#      | Employee199 | Employee    | Wrong username or password. |
#      | Employee    | Employee123 | Wrong username or password. |
#      |             | Employee123 | Fill out this field         |
#      | Employee199 |             | Fill out this field         |
#      |             |             | Fill out this field         |