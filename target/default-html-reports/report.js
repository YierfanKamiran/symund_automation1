$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/changeStatus.feature");
formatter.feature({
  "name": "Set and change status",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@status"
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
  "name": "the user clicks to \"Set status\" option from Settings Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_option_from_Settings_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user should be able to choose one status",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@status"
    },
    {
      "name": "@wip"
    },
    {
      "name": "@set_status"
    },
    {
      "name": "@set_time"
    }
  ]
});
formatter.step({
  "name": "the user should see following status messages",
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
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_should_see_following_status_messages(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"In a meeting\" status message",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_status_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks clear after button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_clear_after_button()"
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
  "name": "the user clicks to \"4 hours\" option",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Set status message\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"In a meeting\" status message should be displayed in Settings Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.status_message_should_be_displayed_in_Settings_Menu(java.lang.String)"
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
  "name": "the user clicks to \"Set status\" option from Settings Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_option_from_Settings_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user should be able to delete status message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@status"
    },
    {
      "name": "@delete_status"
    }
  ]
});
formatter.step({
  "name": "the user clicks to \"In a meeting\" status message",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_status_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Set status message\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"In a meeting\" status message should be displayed in Settings Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.status_message_should_be_displayed_in_Settings_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"In a meeting\" option from Settings Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_option_from_Settings_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Clear status message\" button",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Set status\" status message should be displayed in Settings Menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.status_message_should_be_displayed_in_Settings_Menu(java.lang.String)"
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
  "name": "the user clicks to \"Set status\" option from Settings Menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_option_from_Settings_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user should be able to choose emoji and enter status message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@status"
    },
    {
      "name": "@generic_status"
    }
  ]
});
formatter.step({
  "name": "the user clicks to emoji icon and chooses emoji \"heart_eyes\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_emoji_icon_and_chooses_emoji(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"Trying\" into the status message input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_enter_into_the_status_message_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Set status message\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.the_user_clicks_to_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Emoji+ Happy\" status message should be displayed in Settings Menu",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ChangeStatusStepDefs.status_message_should_be_displayed_in_Settings_Menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});