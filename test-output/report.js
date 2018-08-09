$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15703313400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page will be display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.as_a_not_validated_user()"
});
formatter.result({
  "duration": 367530000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_browse_to_the_site()"
});
formatter.result({
  "duration": 13281258100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.home_page_will_be_display()"
});
formatter.result({
  "duration": 134170300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Valid user can login with valid credentials",
  "description": "",
  "id": "login-feature;valid-user-can-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User click MyAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Signin page will drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter valid email address as \"kartick01@yahoo.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enter valid password as \"Bangladesh01\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should successfully Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.user_click_MyAccount_button()"
});
formatter.result({
  "duration": 4685700300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.signin_page_will_drop_down()"
});
formatter.result({
  "duration": 6944100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_click_signin_button()"
});
formatter.result({
  "duration": 2212689600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kartick01@yahoo.com",
      "offset": 35
    }
  ],
  "location": "StepDefi.user_enter_valid_email_address_as(String)"
});
formatter.result({
  "duration": 466530500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh01",
      "offset": 30
    }
  ],
  "location": "StepDefi.user_enter_valid_password_as(String)"
});
formatter.result({
  "duration": 448122900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.click_signin_Button()"
});
formatter.result({
  "duration": 237845400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_should_successfully_Login()"
});
formatter.result({
  "duration": 44794200,
  "status": "passed"
});
formatter.after({
  "duration": 3426412300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Valid user can login with valid credentials",
  "description": "",
  "id": "login-feature;valid-user-can-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User click MyAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signin page will drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter valid email address as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter valid password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should successfully Login",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "login-feature;valid-user-can-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "login-feature;valid-user-can-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "kartick01@yahoo.com",
        "Bangladesh01"
      ],
      "line": 29,
      "id": "login-feature;valid-user-can-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "ma_raz@yahoo.com",
        "Bangladesh02"
      ],
      "line": 30,
      "id": "login-feature;valid-user-can-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4026539200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page will be display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.as_a_not_validated_user()"
});
formatter.result({
  "duration": 130210100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_browse_to_the_site()"
});
formatter.result({
  "duration": 10654111900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.home_page_will_be_display()"
});
formatter.result({
  "duration": 56883100,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Valid user can login with valid credentials",
  "description": "",
  "id": "login-feature;valid-user-can-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User click MyAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signin page will drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter valid email address as \"kartick01@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter valid password as \"Bangladesh01\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should successfully Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.user_click_MyAccount_button()"
});
formatter.result({
  "duration": 3825779000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.signin_page_will_drop_down()"
});
formatter.result({
  "duration": 8981600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_click_signin_button()"
});
formatter.result({
  "duration": 2208520100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kartick01@yahoo.com",
      "offset": 35
    }
  ],
  "location": "StepDefi.user_enter_valid_email_address_as(String)"
});
formatter.result({
  "duration": 567931700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh01",
      "offset": 30
    }
  ],
  "location": "StepDefi.user_enter_valid_password_as(String)"
});
formatter.result({
  "duration": 434882700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.click_signin_Button()"
});
formatter.result({
  "duration": 240941100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_should_successfully_Login()"
});
formatter.result({
  "duration": 39657900,
  "status": "passed"
});
formatter.after({
  "duration": 3302871300,
  "status": "passed"
});
formatter.before({
  "duration": 4389068900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page will be display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.as_a_not_validated_user()"
});
formatter.result({
  "duration": 172543100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_browse_to_the_site()"
});
formatter.result({
  "duration": 16019086300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.home_page_will_be_display()"
});
formatter.result({
  "duration": 274343800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Valid user can login with valid credentials",
  "description": "",
  "id": "login-feature;valid-user-can-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "User click MyAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Signin page will drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "User click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter valid email address as \"ma_raz@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User enter valid password as \"Bangladesh02\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should successfully Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.user_click_MyAccount_button()"
});
formatter.result({
  "duration": 3779959500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.signin_page_will_drop_down()"
});
formatter.result({
  "duration": 11355500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_click_signin_button()"
});
formatter.result({
  "duration": 2234209900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ma_raz@yahoo.com",
      "offset": 35
    }
  ],
  "location": "StepDefi.user_enter_valid_email_address_as(String)"
});
formatter.result({
  "duration": 408427600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bangladesh02",
      "offset": 30
    }
  ],
  "location": "StepDefi.user_enter_valid_password_as(String)"
});
formatter.result({
  "duration": 462021600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.click_signin_Button()"
});
formatter.result({
  "duration": 267939600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_should_successfully_Login()"
});
formatter.result({
  "duration": 21576800,
  "status": "passed"
});
formatter.after({
  "duration": 1649278400,
  "status": "passed"
});
formatter.before({
  "duration": 3938868500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "As a not validated user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page will be display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.as_a_not_validated_user()"
});
formatter.result({
  "duration": 83250600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_browse_to_the_site()"
});
formatter.result({
  "duration": 11103663700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.home_page_will_be_display()"
});
formatter.result({
  "duration": 394929900,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Valid user can login with valid credentials",
  "description": "",
  "id": "login-feature;valid-user-can-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "User click MyAccount button",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "Signin page will drop down",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "User click signin button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "User enter valid email address as \"\u003cuserName\u003e\"",
  "rows": [
    {
      "cells": [
        "kartick01@yahoo.com",
        "Bangladesh01"
      ],
      "line": 38
    },
    {
      "cells": [
        "ma_raz@yahoo.com",
        "Bangladesh02"
      ],
      "line": 39
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "User enter valid password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Click signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "User should successfully Login",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefi.user_click_MyAccount_button()"
});
formatter.result({
  "duration": 3876746000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.signin_page_will_drop_down()"
});
formatter.result({
  "duration": 18778400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefi.user_click_signin_button()"
});
formatter.result({
  "duration": 2207111700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cuserName\u003e",
      "offset": 35
    }
  ],
  "location": "StepDefi.user_enter_valid_email_address_as(String)"
});
formatter.result({
  "duration": 1102900,
  "error_message": "cucumber.runtime.CucumberException: Arity mismatch: Step Definition \u0027stepDefinition.StepDefi.user_enter_valid_email_address_as(String) in file:/C:/My%20Development/FreshBDDProject/target/test-classes/\u0027 with pattern [^User enter valid email address as \"([^\"]*)\"$] is declared with 1 parameters. However, the gherkin step has 2 arguments [\u003cuserName\u003e, Table:[[kartick01@yahoo.com, Bangladesh01], [ma_raz@yahoo.com, Bangladesh02]]]. \nStep: When User enter valid email address as \"\u003cuserName\u003e\"\r\n\tat cucumber.runtime.StepDefinitionMatch.arityMismatch(StepDefinitionMatch.java:102)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:60)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cpassword\u003e",
      "offset": 30
    }
  ],
  "location": "StepDefi.user_enter_valid_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefi.click_signin_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefi.user_should_successfully_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 3143904600,
  "status": "passed"
});
});