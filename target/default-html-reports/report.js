$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/RecentUploadedFiles.feature");
formatter.feature({
  "name": "the user should be able to see recently uploaded/created file(s) or folder under Recent tab",
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
  "name": "the user is logged in as \"Employee1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to plus sign button next to home icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clicks_to_plus_sign_button_next_to_home_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "create a new folder to be seen recent tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Recent"
    }
  ]
});
formatter.step({
  "name": "the user clicks new folder",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_new_folder()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[.\u003d\u0027New folder\u0027] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\evrim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54462}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 16b3edeefd354f0485bd6ac80ed5b8a1\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.symund.utilities.BrowserUtils.waitForVisibility(BrowserUtils.java:105)\r\n\tat com.symund.pages.BasePage.navigateToModule(BasePage.java:146)\r\n\tat com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_new_folder(UploadCreateFilesStepDefs.java:26)\r\n\tat ✽.the user clicks new folder(file:///C:/Users/evrim/IdeaProjects/symund_automation1/src/test/resources/features/RecentUploadedFiles.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clear the input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clear_the_input_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enter a name in for new folder and clicks arrow",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_enter_a_name_in_for_new_folder_and_clicks_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks to Recent Tab",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clicks_to_Recent_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the created folder is displayed in recent page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_created_folder_is_displayed_in_recent_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});