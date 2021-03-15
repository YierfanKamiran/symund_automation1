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
formatter.scenario({
  "name": "the user should be able to comment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@comment"
    }
  ]
});
formatter.step({
  "name": "the user enters comment \"I am angry at you\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserEntersComment(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks comment arrow button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksCommentArrowButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user\u0027s username should be seen",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserSUsernameShouldBeSeen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the box is emptied for new comment",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theBoxIsEmptiedForNewComment()"
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
  "name": "the user enters \"Employee23\" and \"Employee123\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
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
formatter.scenario({
  "name": "the user should be edit and delete the comment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@comment"
    }
  ]
});
formatter.step({
  "name": "the user clicks dots next to user name",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.the_user_clicks_dots_next_to_user_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Edit comment",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.the_user_clicks_Edit_comment()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user deletes the old comment and writes \"i like you actually\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.the_user_deletes_the_old_comment_and_writes_new_one(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks comment arrow button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.theUserClicksCommentArrowButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that the comment is edited",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.verify_that_the_comment_is_edited()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks dots next to user name",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.the_user_clicks_dots_next_to_user_name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks Delete comment button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.the_user_clicks_Delete_comment_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that the comment is deleted",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.CommentStepDefs.verifyThatTheCommentIsDeleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});