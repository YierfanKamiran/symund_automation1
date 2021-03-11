$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Create_modified_deletedcontacts.feature");
formatter.feature({
  "name": "Create, modified, deleted contacts",
  "description": "  A new contact could be created or an existing one could be modified/deleted",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SYM-181"
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
  "name": "As a user, I should be able to Add a new contact -AC1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SYM-181"
    },
    {
      "name": "@SYM-177"
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
  "name": "the user clicks on New contact button",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_clicks_on_New_contact_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user provides the required information",
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
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_provides_the_required_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that a new contact is created",
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
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.verify_that_a_new_contact_is_created(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
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
  "name": "As a user, I should be able to modify the text fields -AC1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SYM-181"
    },
    {
      "name": "@SYM-178"
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
  "name": "the user clicks on Name",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_clicks_on_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user writes a new Name",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_writes_a_new_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that Name is modified",
  "rows": [
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.verify_that_Name_is_modified(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
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
      "name": "@SYM-181"
    },
    {
      "name": "@SYM-179"
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
  "name": "As a user, I should be able to a new contact  be later on added to a group from the contact details -AC2",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SYM-181"
    },
    {
      "name": "@SYM-180"
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
  "name": "user click on new or existing contact",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_click_on_new_existing_contact()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on the Groups combobox",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_click_on_the_Groups_combobox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select groups from the lists",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_select_groups_from_the_lists()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that added the group from the contact details",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.verify_that_added_the_group_from_the_contact_details()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});