$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UpLoadAndCreateFiles.feature");
formatter.feature({
  "name": "the user should be able to upload",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Upload"
    }
  ]
});
formatter.scenario({
  "name": "Upload Files",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Upload"
    },
    {
      "name": "@SYM-159"
    }
  ]
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
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Upload file and choose the file to upload",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_Upload_file_and_choose_the_file_to_upload()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should be able to see the uploaded files",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_should_be_able_to_see_the_uploaded_files()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Create new folder and text documents",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Upload"
    },
    {
      "name": "@SYM-161"
    }
  ]
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
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks new folder",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_new_folder()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks New text document",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_New_text_document()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});