@DeleteRestore
Feature: Delete and restore file
  Background:
    Given the user is logged in as "Employee43"
  Scenario: Delete file
    When the user clicks to "three dots" next to the file name
    Then the user should be able to see following
      | Details       |
      | Rename        |
      | Move or copy  |
      | Download      |
      | Delete folder |
    And the user clicks Delete folder
    When the user clicks to "Deleted files" module on left navigation menu
    Then the deleted folder shown inside Deleted Files tab
    When the user clicks to Restore
    Then the restored folder shown inside All Files tab