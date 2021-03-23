$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddRemoveFilefavorite.feature");
formatter.feature({
  "name": "Add and remove file to favourites",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SYM-167"
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
  "name": "the user is logged in as \"Employee199\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add file to favorites page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SYM-167"
    }
  ]
});
formatter.step({
  "name": "the user clicks to \"three dots\" next to the \"sample_file.docx\" name",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_user_clicks_to_next_to_the_name(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user chooses \"Add to favourites\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_user_chooses(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Favourites\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_user_clicks_to_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"sample_file.docx\" should appear in the Favorites page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_should_appear_in_the_Favorites_page(java.lang.String)"
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
  "name": "the user is logged in as \"Employee199\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Remove file from favourites",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SYM-167"
    }
  ]
});
formatter.step({
  "name": "the user clicks to three dots next to the \"sample_file.docx\" name to remove",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_user_clicks_to_three_dots_to_the_name_to_remove(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Favourites\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_user_clicks_to_tab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"sample_file.docx\" should disappear in the Favorites page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.AddRemoveFileFavouriteStepDefs.the_should_disappear_in_the_Favorites_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});