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
  "name": "As a user, I should be able to delete the contact -AC1",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@necla1"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027app-content-list-item-line-one\u0027 and contains(text(), \u0027Beyza Gulap\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.192)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nejla-MBP\u0027, ip: \u00272a00:23c7:4d16:2e01:2098:5fa2:2482:bdc7%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u002715.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.192, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: /var/folders/92/5rw9s1fs63z...}, goog:chromeOptions: {debuggerAddress: localhost:54026}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 5cfc89bdecbc2528e5287e50a9e6e889\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027app-content-list-item-line-one\u0027 and contains(text(), \u0027Beyza Gulap\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat com.symund.step_definitions.Create_Mod_Del_Defs.the_user_clicks_on_existing_Contact(Create_Mod_Del_Defs.java:87)\n\tat ✽.the user clicks on existing Contact(file:///Users/nejlaturk/symund_automation1/src/test/resources/features/Create_modified_deletedcontacts.feature:45)\n",
  "status": "failed"
});
formatter.step({
  "name": "user clicks the three dots icon from top-right",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_clicks_the_three_dots_icon_from_top_right()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.user_clicks_delete()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the contact will no longer be visible in the Contacts Tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.Create_Mod_Del_Defs.the_contact_will_no_longer_be_visible_in_the_Contacts_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});