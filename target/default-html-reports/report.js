$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Comment.feature");
formatter.feature({
  "name": "Comment Box Functions",
  "description": "",
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
  "name": "the user enters \"Employee23\" and \"Employee123\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A comment box should be displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@comment"
    }
  ]
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
  "name": "the user clicks comments",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksComments()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the comments box should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theCommentsBoxShouldBeDisplayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});