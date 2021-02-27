$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/profileSetting.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@SYM-162"
    },
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
    },
    {
      "name": "@SYM-152"
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
      "name": "@SYM-163"
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
  "name": "the user  clicks upload photo button and uploads another image",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.the_user_clicks_upload_photo_button_and_uploads_another_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"invalid info\" message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ProfilesettingStepDefs.message_should_be_displayed(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [{string} message should be displayed] is defined with 2 parameters at \u0027com.symund.step_definitions.ProfilesettingStepDefs.message_should_be_displayed(java.lang.String,java.lang.String)\u0027.\nHowever, the gherkin step has 1 arguments:\n * \"invalid info\"\nStep text: \"invalid info\" message should be displayed\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:220)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:53)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});