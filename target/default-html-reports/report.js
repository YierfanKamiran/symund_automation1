$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/RecentUploadedFiles.feature");
formatter.feature({
  "name": "the user should be able to see recently uploaded/created file(s) or folder under Recent tab",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Recentupload"
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
  "name": "upload a file to be seen recent tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Recentupload"
    }
  ]
});
formatter.step({
  "name": "the user clicks Upload file and choose the file from browser to upload",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksUploadFileAndChooseTheFileFromBrowserToUpload()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\evrim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58094}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 75870a87c3c2ff8771b47871843081ab\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat com.symund.step_definitions.RecentUploadedFiles_StepDefs.theUserClicksUploadFileAndChooseTheFileFromBrowserToUpload(RecentUploadedFiles_StepDefs.java:26)\r\n\tat ✽.the user clicks Upload file and choose the file from browser to upload(file:///C:/Users/evrim/IdeaProjects/symund_automation1/src/test/resources/features/RecentUploadedFiles.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user should be able to see the uploaded file",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_should_be_able_to_see_the_uploaded_file()"
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
  "name": "the uploaded file is displayed in recent page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_uploaded_file_is_displayed_in_recent_page()"
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
  "name": "the user is logged in as \"Employee199\"",
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
      "name": "@Recentupload"
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[.\u003d\u0027New folder\u0027] (tried for 5 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\evrim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58167}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 6da779a299a13add0751813d14566936\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.symund.utilities.BrowserUtils.waitForVisibility(BrowserUtils.java:105)\r\n\tat com.symund.pages.BasePage.navigateToModule(BasePage.java:146)\r\n\tat com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_new_folder(UploadCreateFilesStepDefs.java:26)\r\n\tat ✽.the user clicks new folder(file:///C:/Users/evrim/IdeaProjects/symund_automation1/src/test/resources/features/RecentUploadedFiles.feature:18)\r\n",
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
  "name": "the user should be able to see the uploaded folder",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_should_be_able_to_see_the_uploaded_folder()"
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
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\evrim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58201}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2c36a391ce633ce561c7a1d155e52323\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.symund.step_definitions.Hooks.setUp(Hooks.java:16)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user is logged in as \"Employee199\"",
  "keyword": "Given "
});
formatter.match({
  "location": "com.symund.step_definitions.LoginStepDefs.the_user_is_logged_in_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks to plus sign button next to home icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clicks_to_plus_sign_button_next_to_home_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "create a document to be seen recent tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Recentupload"
    }
  ]
});
formatter.step({
  "name": "the user clicks New text document",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.UploadCreateFilesStepDefs.the_user_clicks_New_text_document()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clears the text input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clears_the_text_input_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enter a text documents and clicks arrow",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_enter_a_text_documents_and_clicks_arrow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user write something than clicks exit",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_write_something_than_clicks_exit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks the created text documents",
  "keyword": "When "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clicks_the_created_text_documents()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be able to see the text and click exit",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_should_be_able_to_see_the_text_and_click_exit()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks to Recent Tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_user_clicks_to_Recent_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the created text documents is displayed in recent tab",
  "keyword": "Then "
});
formatter.match({
  "location": "com.symund.step_definitions.RecentUploadedFiles_StepDefs.the_created_text_documents_is_displayed_in_recent_tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-O04DSU77\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\evrim\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58201}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2c36a391ce633ce561c7a1d155e52323\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.symund.step_definitions.Hooks.tearDown(Hooks.java:25)\r\n",
  "status": "failed"
});
});