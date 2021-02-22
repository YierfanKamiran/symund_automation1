
@profile
Feature:

  Scenario: user should be able to change  profile settings

    Given the user is logged in as "Employee100"
    And the user navigates avatar
    And the user clicks Setting button
    And the user is in the profile setting page
    When the user enters information below

    | Full name    | Mike Smith            |
    | Email        | Mikesmith@cybertek.com|
    | Phone number | 0759454453            |
    | Address      | 46 russel square wc126|
    | Website      | https:MikeSmith.com   |
    | Twitter      | mike@Twitter          |
    | Locale       | English               |
    | Language     | English               |

    Then the user see the newly entered changes




