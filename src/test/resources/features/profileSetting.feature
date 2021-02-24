
@profile
Feature:
Background:
  Given the user is logged in as "Employee100"
  And the user navigates avatar
  And the user clicks Setting button
  And the title should contain "Settings - Symund - QA"


  Scenario: user should be able to change  profile settings
    When the user enters information below

    | Full name    | Mike Smith            |
    | Email        | Mikesmith@cybertek.com|
    | Phone number | 0759454453            |
    | Address      | 46 russel square wc126|
    | Website      | https:MikeSmith.com   |
    | Twitter      | mike@Twitter          |
    | Locale       | en                    |
    | Language     | en                    |

    And the user see clicks upload photo button and uploads image
    Then all the changes should be saved





    Scenario: Negative settings information

      When the user enters information below

        | Full name    | "£$%^                   |
        | Email        | "£$%^&@cybertek.com     |
        | Phone number | !!!"""56789             |
        | Address      | ()46 russel square wc126|
        | Website      | //https:MikeSmith.com.  |
        | Twitter      | mike@Twitter..          |
        | Locale       | ent                     |
        | Language     | en22                    |





    When the user enters information below

      | Full name    | !@£$%%               |
      | Email        | Mikesmithcybertekcom |
      | Phone number | 0759                 |
      | Address      | %^*&& FTYUi          |
      | Website      | https:MikeSmith      |
      | Twitter      | Twitter asf          |
      | Locale       | en                   |
      | Language     | en_001               |
    And the user see clicks upload photo button and uploads image
    Then "Invalid info" message should  be displayed










