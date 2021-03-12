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
  "name": "the user clicks plus sign",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksPlusSign()"
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
  "name": "the user clicks new folder button",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksNewFolderButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clear the input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clear_the_input_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter a \"name\" in for new folder and clicks arrow",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserEnterAInForNewFolderAndClicksArrow(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks to \"Recent\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the created file is displayed in recent page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_created_file_is_displayed_in_recent_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Delete file\"}\n  (Session info: chrome\u003d89.0.4389.82)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.20\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 89.0.4389.82, chrome: {chromedriverVersion: 89.0.4389.23 (61b08ee2c5002..., userDataDir: C:\\Users\\evrim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:49315}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f65b9bce12e5499cb731ed783370a2f3\n*** Element info: {Using\u003dlink text, value\u003dDelete file}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_created_file_is_displayed_in_recent_page(RecentUploadedFiles_StepDefs.java:82)\r\n\tat ✽.the created file is displayed in recent page(file:///C:/Users/evrim/IdeaProjects/symund_automation1/src/test/resources/features/RecentUploadedFiles.feature:21)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});