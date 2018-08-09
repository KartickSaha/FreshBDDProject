Feature: Login feature


  Background:
    Given As a not validated user
    When User browse to the site
    Then Home page will be display

  Scenario: Valid user can login with valid credentials
    When  User click MyAccount button
    Then Signin page will drop down
    And User click signin button
    When User enter valid email address as "kartick01@yahoo.com"
    And User enter valid password as "Bangladesh01"
    And Click signin Button
    Then User should successfully Login

  Scenario Outline: Valid user can login with valid credentials
    When  User click MyAccount button
    Then Signin page will drop down
    And User click signin button
    When User enter valid email address as "<userName>"
    And User enter valid password as "<password>"
    And Click signin Button
    Then User should successfully Login

    Examples:
    |userName            | password    |
    |kartick01@yahoo.com | Bangladesh01|
    |ma_raz@yahoo.com    |Bangladesh02 |


  Scenario: Valid user can login with valid credentials
    When  User click MyAccount button
    Then Signin page will drop down
    And User click signin button
    When User enter valid email address as "<userName>"
    |kartick01@yahoo.com |Bangladesh01|
    |ma_raz@yahoo.com    |Bangladesh02 |
    And User enter valid password as "<password>"
    And Click signin Button
    Then User should successfully Login

