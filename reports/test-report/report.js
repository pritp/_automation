$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/0001_Login.feature");
formatter.feature({
  "id": "login-feature",
  "description": "",
  "name": "Login feature",
  "keyword": "Feature",
  "line": 2,
  "comments": [
    {
      "value": "# A simple login feature",
      "line": 1
    }
  ]
});
formatter.before({
  "duration": 6430720165,
  "status": "passed"
});
formatter.before({
  "duration": 80822,
  "status": "passed"
});
formatter.background({
  "description": " Log into GUI with valid credentials, Authorized user can successfully log into it\n If credentilas are invalid it should throw invalid credentials.",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "login-feature;authorized-user-login.;;2",
  "description": "",
  "name": "Authorized user login.",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "user enters the URL in URL address bar \"URL\" login page gets open",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "user enters  email id \"abhishekj.jain@impetus.co.in\"",
  "keyword": "When ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user enters  password \"Abhishek1\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "click on Remember me",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "click on SignIn",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "click on Agree",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "user gets logged in successfully verify user name as \"Hi, Abhishek Jain\"",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "click on signout",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 40
    }
  ],
  "location": "Login.user_enters_the_URL_in_URL_address_bar_login_page_gets_open(String)"
});
formatter.result({
  "duration": 14153626485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abhishekj.jain@impetus.co.in",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_email_id(String)"
});
formatter.result({
  "duration": 339299380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abhishek1",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_password(String)"
});
formatter.result({
  "duration": 82583007,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Remember_me()"
});
formatter.result({
  "duration": 115719226,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_SignIn()"
});
formatter.result({
  "duration": 792292633,
  "status": "passed"
});
formatter.match({
  "location": "Login.Click_on_Agree()"
});
formatter.result({
  "duration": 214082332,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi, Abhishek Jain",
      "offset": 54
    }
  ],
  "location": "Login.user_gets_logged_in_successfully_verify_user_name_as(String)"
});
formatter.result({
  "duration": 1318717130,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_signout()"
});
formatter.result({
  "duration": 1726287036,
  "status": "passed"
});
formatter.before({
  "duration": 49391,
  "status": "passed"
});
formatter.before({
  "duration": 41373,
  "status": "passed"
});
formatter.background({
  "description": " Log into GUI with valid credentials, Authorized user can successfully log into it\n If credentilas are invalid it should throw invalid credentials.",
  "name": "",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "login-feature;authorized-user-login.;;3",
  "description": "",
  "name": "Authorized user login.",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "user enters the URL in URL address bar \"URL\" login page gets open",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "user enters  email id \"user_1@fake.co.in\"",
  "keyword": "When ",
  "line": 12,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "user enters  password \"user\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "click on Remember me",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "click on SignIn",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "click on Agree",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "user gets logged in successfully verify user name as \"Hi,User\"",
  "keyword": "Then ",
  "line": 17,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "click on signout",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "arguments": [
    {
      "val": "URL",
      "offset": 40
    }
  ],
  "location": "Login.user_enters_the_URL_in_URL_address_bar_login_page_gets_open(String)"
});
formatter.result({
  "duration": 8158960391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user_1@fake.co.in",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_email_id(String)"
});
formatter.result({
  "duration": 162021990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user",
      "offset": 23
    }
  ],
  "location": "Login.user_enters_password(String)"
});
formatter.result({
  "duration": 76121768,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Remember_me()"
});
formatter.result({
  "duration": 129975260,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_SignIn()"
});
formatter.result({
  "duration": 113750642,
  "status": "passed"
});
formatter.match({
  "location": "Login.Click_on_Agree()"
});
formatter.result({
  "duration": 266576929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hi,User",
      "offset": 54
    }
  ],
  "location": "Login.user_gets_logged_in_successfully_verify_user_name_as(String)"
});
formatter.result({
  "duration": 581932265,
  "status": "failed",
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Hi,User]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat utility.Init.verifyTextOnGui(Init.java:304)\r\n\tat test_cases.Login.user_gets_logged_in_successfully_verify_user_name_as(Login.java:55)\r\n\tat ✽.Then user gets logged in successfully verify user name as \"Hi,User\"(features/0001_Login.feature:17)\r\n"
});
formatter.match({
  "location": "Login.click_on_signout()"
});
formatter.result({
  "status": "skipped"
});
});