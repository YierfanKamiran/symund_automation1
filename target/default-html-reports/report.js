$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/profileSetting.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@profile"
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
  "name": "the user is logged in as \"Employee100\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates avatar",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.the_user_navigates_avatar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Setting button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.the_user_clicks_Setting_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the title should contain \"Settings - Symund - QA\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_title_should_contain(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.symund.step_definitions.LoginStepDefs.the_title_should_contain(LoginStepDefs.java:33)\r\n\tat ✽.the title should contain \"Settings - Symund - QA\"(file:///C:/Users/evrim/IdeaProjects/symund_automation1/src/test/resources/features/profileSetting.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "user should be able to change  profile settings",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@profile"
    }
  ]
});
formatter.step({
  "name": "the user enters information below",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.the_user_enters_information_below(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user see clicks upload photo button and uploads image",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.the_user_see_clicks_upload_photo_button_and_uploads_image()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "all the changes should be saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.all_the_changes_should_be_saved()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});