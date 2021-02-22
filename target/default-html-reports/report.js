$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Logout.feature");
formatter.feature({
  "name": "Verify that user logs out Symund Successfully",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page and page title is \u003cSymund - QA\u003e",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.Logout_Step_Definition.user_is_on_the_login_page_and_page_title_is_Symund_QA()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User login to symund website successfully",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.Logout_Step_Definition.user_login_to_symund_website_successfully()"
});
formatter.result({
  "error_message": "java.lang.IllegalArgumentException: Keys to send should be a not null CharSequence\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:97)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\n\tat com.symund.step_definitions.Logout_Step_Definition.user_login_to_symund_website_successfully(Logout_Step_Definition.java:25)\n\tat ✽.User login to symund website successfully(file:///Users/muzaffarruzmetov/IdeaProjects/symund_automation1/src/test/resources/features/Logout.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "User Able to click on Logout avatar",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Logout_Step_Definition.user_Able_to_click_on_Logout_avatar()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User Able to click on Logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Logout_Step_Definition.user_Able_to_click_on_Logout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify that page title is \u003cSymund - QA\u003e",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Logout_Step_Definition.verify_that_page_title_is_Symund_QA()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "the user should be able to login",
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
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
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
  "name": "the user clicks to \"Settings menu\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "clicks to \"Settings\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the url should change to \"url\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_url_should_change_to(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});