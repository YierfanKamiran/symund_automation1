
@Recent
Feature: the user should be able to see recently uploaded/created file(s) or folder under Recent tab
Background:
  Given the user is logged in as "Employee1"
  Then the user clicks plus sign



  Scenario: upload a file to be seen recent tab
    And the user clicks Upload file button and choose the file to upload
    When the user clicks to "Recent"
    Then the users should see "folder" is displayed in recent page


  Scenario:create a new folder to be seen recent tab
      And the user clicks new folder button
      And the user clear the input box
      And the user enter a "name" in for new folder and clicks arrow
      When the user clicks to "Recent"
      Then the created file is displayed in recent page


  Scenario: create a document to be seen recent tab
    And the user clicks New text document box
    And the user enter a "name" in for new text and clicks arrow
    Then the user should be able to see the text and click exit
    When the user clicks to "Recent"
    Then the created text  is displayed in recent tab




