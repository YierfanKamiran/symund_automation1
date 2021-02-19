@wip
Feature: the user should be able to login

  Background:
    Given the user is on the login page

    @SYM-143 @positive
   Scenario: Successful Login with valid credentials
     When the user enters "Employee199" and "Employee123"
     Then the title should contain "Files - Symund - QA"


   @SYM-144 @negative
  Scenario Outline: Unsuccessful login with invalid credentials
    When the user enters "<username>" and "<password>"
    Then the url should change to "url"

    Examples:
      | username    | password    |
      | Employee199 | Employee    |
      | Employee    | Employee123 |
      | Employee199 | Employee    |
      |             | Employee123 |
      | Employee199 |             |
      |             |             |

@login
Scenario: the user should be able to login successfully
 Given the user is logged in as "Employee120"
  Then the title should contain "Files - Symund - QA"

