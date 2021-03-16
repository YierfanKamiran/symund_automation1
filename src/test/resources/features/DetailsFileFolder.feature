@smoke @DetailsFileFolder
Feature: Details File and Folder

  Background:
    Given the user is logged in as "Employee43"

  @SYM-182
  Scenario: Check details of File
    When the user clicks to three dots for file next to the file name
    Then the user should be able to see following
      | Details      |
      | Rename       |
      | Move or copy |
      | Download     |
      | Delete file  |
    And the user clicks Details
    Then verify that details of File displayed on right side


  @SYM-183
  Scenario: Check details of Folder
    When the user clicks to "three dots" next to the file name
    Then the user should be able to see following
      | Details      |
      | Rename       |
      | Move or copy |
      | Download     |
      | Delete file  |
    And the user clicks Details
    Then verify that details of Folder displayed on right side


