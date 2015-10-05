# A simple login feature
Feature: Login feature

  Background: 
     Log into GUI with valid credentials, Authorized user can successfully log into it
     If credentilas are invalid it should throw invalid credentials.


  Scenario Outline: Authorized user login.
    Given user enters the URL in URL address bar "URL" login page gets open
    When user enters  email id "<username>"
    And user enters  password "<password>"
    And click on Remember me
    And click on SignIn
    And click on Agree
    Then user gets logged in successfully verify user name as "<ExpectedText>"
    Then click on signout

    Examples: 
      | username                     | password  | ExpectedText      |
      | abhishekj.jain@impetus.co.in | Abhishek1 | Hi, Abhishek Jain |
      | user_1@fake.co.in            | user      | Hi, User          |
