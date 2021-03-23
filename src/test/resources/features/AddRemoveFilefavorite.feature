@SYM-167
Feature: Add and remove file to favourites

  Background:
    Given the user is logged in as "Employee199"

  Scenario: Add file to favorites page
   When the user clicks to "three dots" next to the "sample_file.docx" name
   And the user chooses "Add to favourites"
   And the user clicks to "Favourites" tab
    Then the "sample_file.docx" should appear in the Favorites page


Scenario: Remove file from favourites
  When the user clicks to three dots next to the "sample_file.docx" name to remove
    And the user clicks to "Favourites" tab
    Then the "sample_file.docx" should disappear in the Favorites page

