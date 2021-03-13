$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DeleteRestoreFolder.feature");
formatter.feature({
  "name": "Delete and restore file",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DeleteRestore"
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
  "name": "the user is logged in as \"Employee43\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete file",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DeleteRestore"
    }
  ]
});
formatter.step({
  "name": "the user clicks to \"three dots\" next to the file name",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_next_to_the_file_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see following",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_should_be_able_to_see_following(java.util.List\u003cjava.lang.String\u003e)"
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
  "name": "the user clicks to \"Deleted files\" module on left navigation menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_module_on_left_navigation_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the deleted folder shown inside Deleted Files tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.DeleteRestoreFolder_StepDefs.the_deleted_folder_shown_inside_Deleted_Files_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to Restore",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.DeleteRestoreFolder_StepDefs.the_user_clicks_to_Restore()"
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
  "name": "the restored folder shown inside All Files tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.DeleteRestoreFolder_StepDefs.the_restored_folder_shown_inside_All_Files_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});