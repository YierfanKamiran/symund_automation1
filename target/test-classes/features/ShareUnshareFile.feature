Feature: Share file/folder and un-share file/folder
 Background:
  Given the user is logged in as "Employee199"
  @SYM-174 @wip
  Scenario: Share file and folder
    When the user clicks to "share icon" next to the file name
    And  the user chooses "Create a new share link" option
    And the user clicks to "Shares" module on left navigation menu
    Then the shared file name should be displayed in Shares page
    When the user clicks to "All files" module on left navigation menu
    And the "Shared" mark should be displayed next to file name in All files page

  @SYM-175  @wip
Scenario: Un-share file and folder
  When the user clicks to "Shared" next to the file name
    And the user clicks to three dots next to Share link
    And the user chooses "Un-share" button
    And the user clicks to "Shares" module on left navigation menu
    Then the unshared file should disappear from Shares page
    When the user clicks to "All files" module on left navigation menu
    And the "Shared" mark should be disappeared next to file name in All files page

