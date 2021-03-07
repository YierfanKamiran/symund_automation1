$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/DetailsFileFolder.feature");
formatter.feature({
  "name": "Details File and Folder",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@DetailsFileFolder"
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
  "name": "Check details of File",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DetailsFileFolder"
    },
    {
      "name": "@SYM-182"
    }
  ]
});
formatter.step({
  "name": "the user clicks to three dots for file next to the file name",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.DetailsFileFolder_StepDefs.the_user_clicks_to_three_dots_for_file_next_to_the_file_name()"
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
  "name": "the user clicks Details",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.DetailsFileFolder_StepDefs.the_user_clicks_Details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that details of File displayed on right side",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "Check details of Folder",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DetailsFileFolder"
    },
    {
      "name": "@SYM-183"
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
  "name": "the user clicks Details",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.DetailsFileFolder_StepDefs.the_user_clicks_Details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that details of Folder displayed on right side",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});