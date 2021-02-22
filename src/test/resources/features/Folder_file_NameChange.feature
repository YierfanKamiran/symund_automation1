Feature: Verify that user is able to change the name of folder/file name

  Scenario:

Given that user is on the homepage

When user right clicks the folder name
And clicks rename
And types "new folder"
Then name of the folder is changed