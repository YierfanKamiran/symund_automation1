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
  "name": "As a user, I should be able to Add a new contact -AC1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@necla"
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
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_user_provides_the_required_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [the user provides the required information] is defined with 1 parameters at \u0027com.symund.step_definitions.Create_Mod_Del_Defs.the_user_provides_the_required_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)\u0027.\nHowever, the gherkin step has 0 arguments.\nStep text: the user provides the required information\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
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
  "name": "As a user, I should be able to modify the text fields-2 -AC1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@necla"
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
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.verify_that_Name_is_modified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});