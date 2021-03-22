$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/RecentUploadedFiles.feature");
formatter.feature({
  "name": "the user should be able to see recently uploaded/created file(s) or folder under Recent tab",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Recent"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in as \"Employee1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks plus sign",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksPlusSign()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "upload a file to be seen recent tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Recent"
    }
  ]
});
formatter.step({
  "name": "the user clicks Upload file button and choose the file to upload",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksUploadFileButtonAndChooseTheFileToUpload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Recent\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users should see \"folder\" is displayed in recent page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUsersShouldSeeIsDisplayedInRecentPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in as \"Employee1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks plus sign",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksPlusSign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks dots for comments",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksDotsForComments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Delete folder",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.DeleteRestoreFolder_StepDefs.the_user_clicks_Delete_folder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks comments",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksComments()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new folder to be seen recent tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Recent"
    }
  ]
});
formatter.step({
  "name": "the user clicks new folder button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksNewFolderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clear the input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clear_the_input_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter a \"name\" in for new folder and clicks arrow",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserEnterAInForNewFolderAndClicksArrow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Recent\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the created file is displayed in recent page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_created_file_is_displayed_in_recent_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is logged in as \"Employee1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.DeleteRestoreFolder_StepDefs.the_deleted_folder_shown_inside_Deleted_Files_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks plus sign",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksPlusSign()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a document to be seen recent tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Recent"
    }
  ]
});
formatter.step({
  "name": "the user clicks New text document box",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksNewTextDocumentBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter a \"name\" in for new text and clicks arrow",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserEnterAInForNewTextAndClicksArrow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see the text and click exit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_should_be_able_to_see_the_text_and_click_exit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Recent\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the created text  is displayed in recent tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_created_text_is_displayed_in_recent_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Employee23\" and \"Employee123\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks dots for comments",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksDotsForComments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to Symund logo",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.NavigateHomePage_StepDefs.the_user_clicks_to_Symund_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks comments",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksComments()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user should be able to comment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@comment"
    }
  ]
});
formatter.step({
  "name": "the user enters comment \"I love you \"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserEntersComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks comment arrow button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksCommentArrowButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user\u0027s username should be seen",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserSUsernameShouldBeSeen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the box is emptied for new comment",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theBoxIsEmptiedForNewComment()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
