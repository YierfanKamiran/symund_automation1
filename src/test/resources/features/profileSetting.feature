
@login
Feature:

  Scenario: user should be able to change  profile settings
    Given the user is logged in as "Employee1"
    And the user enters"Profile" and "Settings"
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




