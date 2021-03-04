$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ShareUnshareFile.feature");
formatter.feature({
  "name": "Share file/folder and unshare file/folder",
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
  "name": "Share file and folder",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user clicks to \"share icon\" next to the file name",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_next_to_the_file_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user chooses \"Create a new share link\" option",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_chooses_option(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Shares\" module on left navigation menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_module_on_left_navigation_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the shared file name should be displayed in Shares page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_shared_file_name_should_be_displayed_in_Shares_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"All files\" module on left navigation menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_module_on_left_navigation_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the \"Shared\" mark should be displayed next to file name in All files page",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_mark_should_be_displayed_next_to_file_name_in_All_files_page(java.lang.String)"
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
  "name": "Share file and folder",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user clicks to \"Shared\" next to the file name",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_next_to_the_file_name(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to three dots next to Share link",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_three_dots_next_to_Share_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user chooses \"Unshare\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_chooses_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Shares\" module on left navigation menu",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_module_on_left_navigation_menu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the shared file name should not be displayed in Shares page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_shared_file_name_should_not_be_displayed_in_Shares_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//td[@class\u003d\u0027filename\u0027]/a/span[1]\"}\n  (Session info: chrome\u003d88.0.4324.192)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Muzaffars-MBP\u0027, ip: \u00272a02:c7f:d673:b400:7d6c:3d9e:dac5:4c20%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.192, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/6n/vjgkg8p57m1...}, goog:chromeOptions: {debuggerAddress: localhost:49868}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4ed9b7618c914cbe7e68505ad764fd53\n*** Element info: {Using\u003dxpath, value\u003d//td[@class\u003d\u0027filename\u0027]/a/span[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\n\tat com.symund.step_definitions.ShareUnshareFile_StepDefs.the_shared_file_name_should_not_be_displayed_in_Shares_page(ShareUnshareFile_StepDefs.java:71)\n\tat ✽.the shared file name should not be displayed in Shares page(file:///Users/muzaffarruzmetov/IdeaProjects/symund_automation1/src/test/resources/features/ShareUnshareFile.feature:19)\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks to \"All files\" module on left navigation menu",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_user_clicks_to_module_on_left_navigation_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the \"Shared\" mark should be disappeared next to file name in All files page",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.ShareUnshareFile_StepDefs.the_mark_should_be_disappeared_next_to_file_name_in_All_files_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});