
@Rename

Feature: Verify that user is able to change the name of folder/file name

  Scenario:

Given the user is logged in as "Employee123"

When user clicks ... on the folder name
And clicks rename
And types "new folder"
Then name of the folder should change