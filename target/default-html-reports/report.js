$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Create_modified_deletedcontacts.feature");
formatter.feature({
  "name": "Create, modified, deleted contacts",
  "description": "  A new contact could be created or an existing one could be modified/deleted",
  "keyword": "Feature"
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
  "name": "the user is logged in as \"Employee1\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "As a user, I should be able to delete the contact -AC1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@necla1"
    }
  ]
});
formatter.step({
  "name": "the user is on Contact Tab",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_is_on_Contact_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on existing Contact",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_clicks_on_existing_Contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the three dots icon from top-right",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_clicks_the_three_dots_icon_from_top_right()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_clicks_delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the contact will no longer be visible in the Contacts Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_contact_will_no_longer_be_visible_in_the_Contacts_Tab()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});