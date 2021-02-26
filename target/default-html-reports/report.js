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
  "status": "passed"
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
  "status": "passed"
});
formatter.step({
  "name": "the user see clicks upload photo button and uploads image",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.the_user_see_clicks_upload_photo_button_and_uploads_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the changes should be saved",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.all_the_changes_should_be_saved()"
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
  "status": "passed"
});
formatter.scenario({
  "name": "Negative settings information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@profile"
    },
    {
      "name": "@negativepro"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate option with value: en22\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.Select.findOptionsByValue(Select.java:283)\r\n\tat org.openqa.selenium.support.ui.Select.selectByValue(Select.java:186)\r\n\tat com.symund.pages.ProfilesettingPage.getDropDownElement(ProfilesettingPage.java:68)\r\n\tat com.symund.step_definitions.ProfilesettingStepDefs.the_user_enters_information_below(ProfilesettingStepDefs.java:46)\r\n\tat ✽.the user enters information below(file:///C:/Users/evrim/IdeaProjects/symund_automation1/src/test/resources/features/profileSetting.feature:32)\r\n",
  "status": "failed"
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
  "name": "\"Invalid info\" message should  be displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});