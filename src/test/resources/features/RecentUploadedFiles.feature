Feature: the user should be able to see recently uploaded/created file(s) or folder under Recent tab
Background:
  Given the user is logged in as "Employee199"
  When the user clicks to plus sign button next to home icon

  Scenario: upload a file to be seen recent tab
    And the user clicks Upload file and choose the file from browser to upload
    And the user should be able to see the uploaded file
    When the user clicks to Recent Tab
    Then the uploaded file is displayed in recent page

    Scenario:create a new folder to be seen recent tab
      And the user clicks new folder
      And the user clear the input box
      And the user enter a name in for new folder and clicks arrow
      Then the user should be able to see the uploaded folder
      When the user clicks to Recent Tab
      Then the created folder is displayed in recent page

  Scenario: create a document to be seen recent tab
    And the user clicks New text document
    And the user clears the text input box
    And the user enter a text documents and clicks arrow
    And the user write something than clicks exit
    When the user clicks the created text documents
    Then the user should be able to see the text and click exit
    And the user clicks to Recent Tab
    Then the created text documents is displayed in recent tab



