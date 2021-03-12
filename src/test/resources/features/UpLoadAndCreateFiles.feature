@smoke  @Upload
Feature: the user should be able to upload

  @SYM-159
  Scenario: Upload Files
    Given the user is on the login page
    When the user enters "Employee23" and "Employee123"
    Then the user clicks Upload file and choose the file to upload
    Then the user should be able to see the uploaded files
  @SYM-161
    Scenario: Create new folder and text documents
      Given the user is on the login page
      When the user enters "Employee23" and "Employee123"
      Then the user clicks new folder
      Then the user clicks New text document
