$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("0000_common_login.feature");
formatter.feature({
  "id": "login-feature",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 2
    },
    {
      "name": "@ReportTab",
      "line": 2
    },
    {
      "name": "@MarketShare",
      "line": 2
    },
    {
      "name": "@pop",
      "line": 2
    }
  ],
  "description": "",
  "name": "Login feature",
  "keyword": "Feature",
  "line": 3,
  "comments": [
    {
      "value": "# A simple login feature",
      "line": 1
    }
  ]
});
formatter.before({
  "duration": 4819203083,
  "status": "passed"
});
formatter.before({
  "duration": 34638,
  "status": "passed"
});
formatter.before({
  "duration": 25978,
  "status": "passed"
});
formatter.before({
  "duration": 25978,
  "status": "passed"
});
formatter.before({
  "duration": 24054,
  "status": "passed"
});
formatter.background({
  "description": " Log into GUI with valid credentials, Authorized user can successfully log into it\n If credentilas are invalid it should throw invalid credentials.",
  "name": "",
  "keyword": "Background",
  "line": 5,
  "type": "background"
});
formatter.scenario({
  "id": "login-feature;authorized-user-login.;;2",
  "tags": [
    {
      "name": "@pop",
      "line": 2
    },
    {
      "name": "@ReportTab",
      "line": 2
    },
    {
      "name": "@MarketShare",
      "line": 2
    },
    {
      "name": "@Censusflow",
      "line": 2
    }
  ],
  "description": "",
  "name": "Authorized user login.",
  "keyword": "Scenario Outline",
  "line": 21,
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
  "duration": 15929540650,
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
  "duration": 406623801,
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
  "duration": 567365669,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Remember_me()"
});
formatter.result({
  "duration": 126703032,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_SignIn()"
});
formatter.result({
  "duration": 119185957,
  "status": "passed"
});
formatter.match({
  "location": "Login.Click_on_Agree()"
});
formatter.result({
  "duration": 701788793,
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
  "duration": 1896070774,
  "status": "passed"
});
formatter.uri("0003_census.feature");
formatter.feature({
  "id": "censusflow",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    }
  ],
  "description": "",
  "name": "CensusFlow",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 15395,
  "status": "passed"
});
formatter.before({
  "duration": 10905,
  "status": "passed"
});
formatter.before({
  "duration": 10583,
  "status": "passed"
});
formatter.before({
  "duration": 11867,
  "status": "passed"
});
formatter.before({
  "duration": 11546,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "#Att-user logged in --\u003e click on Census Tab --\u003e perform action on Census functionality",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "censusflow;census-functionality-automation;;2",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    }
  ],
  "description": "",
  "name": "Census functionality Automation",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "user clicks on \"cnesus tab\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "user clicks on map view \"National\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "clicks on projected census listing \"National\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "clicks on \"export\" option",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "clicks on \"close\" button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Select Demographic \"ethnicity\" and \"All\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.step({
  "name": "Verify comparision \"African American\" \"12.6%\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    4,
    8
  ]
});
formatter.step({
  "name": "Verify comparision \"Asian\" \"5.3%\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    5,
    9
  ]
});
formatter.step({
  "name": "Verify comparision \"Caucasian\" \"65.1%\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    6,
    10
  ]
});
formatter.step({
  "name": "Verify comparision \"Hispanic\" \"17.0%\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    7,
    11
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "cnesus tab",
      "offset": 16
    }
  ],
  "location": "Census.user_clicks_on(String)"
});
formatter.result({
  "duration": 3472251479,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "National",
      "offset": 25
    }
  ],
  "location": "Census.user_clicks_on_map_view(String)"
});
formatter.result({
  "duration": 2239660573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "National",
      "offset": 36
    }
  ],
  "location": "Census.clicks_on_projected_census_listing(String)"
});
formatter.result({
  "duration": 887731048,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "export",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_option(String)"
});
formatter.result({
  "duration": 822008436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_button(String)"
});
formatter.result({
  "duration": 127767507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethnicity",
      "offset": 20
    },
    {
      "val": "All",
      "offset": 36
    }
  ],
  "location": "Census.Select_Demographic_and(String,String)"
});
formatter.result({
  "duration": 322947830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "African American",
      "offset": 20
    },
    {
      "val": "12.6%",
      "offset": 39
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 500889040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asian",
      "offset": 20
    },
    {
      "val": "5.3%",
      "offset": 28
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 365481942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Caucasian",
      "offset": 20
    },
    {
      "val": "65.1%",
      "offset": 32
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 462747533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hispanic",
      "offset": 20
    },
    {
      "val": "17.0%",
      "offset": 31
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 387341692,
  "status": "passed"
});
formatter.before({
  "duration": 17319,
  "status": "passed"
});
formatter.before({
  "duration": 11546,
  "status": "passed"
});
formatter.before({
  "duration": 11867,
  "status": "passed"
});
formatter.before({
  "duration": 10904,
  "status": "passed"
});
formatter.before({
  "duration": 10904,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "#Att-user logged in --\u003e click on Census Tab --\u003e perform action on Census functionality",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "censusflow;census-functionality-automation;;3",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    }
  ],
  "description": "",
  "name": "Census functionality Automation",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "user clicks on \"cnesus tab\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "user clicks on map view \"Region\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "clicks on projected census listing \"NORTHEAST\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "clicks on \"export\" option",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "clicks on \"close\" button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Select Demographic \"ethnicity\" and \"All\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.step({
  "name": "Verify comparision \"African American\" \"10.3%\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    4,
    8
  ]
});
formatter.step({
  "name": "Verify comparision \"Asian\" \"\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    5,
    9
  ]
});
formatter.step({
  "name": "Verify comparision \"Caucasian\" \"66.0%\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    6,
    10
  ]
});
formatter.step({
  "name": "Verify comparision \"Hispanic\" \"20.1%\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    7,
    11
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "cnesus tab",
      "offset": 16
    }
  ],
  "location": "Census.user_clicks_on(String)"
});
formatter.result({
  "duration": 114190716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Region",
      "offset": 25
    }
  ],
  "location": "Census.user_clicks_on_map_view(String)"
});
formatter.result({
  "duration": 1390539929,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NORTHEAST",
      "offset": 36
    }
  ],
  "location": "Census.clicks_on_projected_census_listing(String)"
});
formatter.result({
  "duration": 653535893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "export",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_option(String)"
});
formatter.result({
  "duration": 294371206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_button(String)"
});
formatter.result({
  "duration": 266811911,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethnicity",
      "offset": 20
    },
    {
      "val": "All",
      "offset": 36
    }
  ],
  "location": "Census.Select_Demographic_and(String,String)"
});
formatter.result({
  "duration": 733688094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "African American",
      "offset": 20
    },
    {
      "val": "10.3%",
      "offset": 39
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 948003635,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asian",
      "offset": 20
    },
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 849854136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Caucasian",
      "offset": 20
    },
    {
      "val": "66.0%",
      "offset": 32
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 916996262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hispanic",
      "offset": 20
    },
    {
      "val": "20.1%",
      "offset": 31
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 699796470,
  "status": "failed",
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat utility.Init.verifyData(Init.java:522)\r\n\tat test_cases.Census.Verify_comparision(Census.java:61)\r\n\tat ✽.And Verify comparision \"Hispanic\" \"20.1%\"(0003_census.feature:16)\r\n"
});
formatter.before({
  "duration": 34959,
  "status": "passed"
});
formatter.before({
  "duration": 29827,
  "status": "passed"
});
formatter.before({
  "duration": 11867,
  "status": "passed"
});
formatter.before({
  "duration": 11867,
  "status": "passed"
});
formatter.before({
  "duration": 11546,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "#Att-user logged in --\u003e click on Census Tab --\u003e perform action on Census functionality",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "censusflow;census-functionality-automation;;4",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    }
  ],
  "description": "",
  "name": "Census functionality Automation",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "user clicks on \"cnesus tab\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "user clicks on map view \"Cluster\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "clicks on projected census listing \"Great Lakes\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "clicks on \"export\" option",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "clicks on \"close\" button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Select Demographic \"ethnicity\" and \"All\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.step({
  "name": "Verify comparision \"African American\" \"12.3%\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    4,
    8
  ]
});
formatter.step({
  "name": "Verify comparision \"Asian\" \"\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    5,
    9
  ]
});
formatter.step({
  "name": "Verify comparision \"Caucasian\" \"69.0%\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    6,
    10
  ]
});
formatter.step({
  "name": "Verify comparision \"Hispanic\" \"14.3%\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    7,
    11
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "cnesus tab",
      "offset": 16
    }
  ],
  "location": "Census.user_clicks_on(String)"
});
formatter.result({
  "duration": 196852886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cluster",
      "offset": 25
    }
  ],
  "location": "Census.user_clicks_on_map_view(String)"
});
formatter.result({
  "duration": 2603756998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Great Lakes",
      "offset": 36
    }
  ],
  "location": "Census.clicks_on_projected_census_listing(String)"
});
formatter.result({
  "duration": 1276351457,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "export",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_option(String)"
});
formatter.result({
  "duration": 1416782982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_button(String)"
});
formatter.result({
  "duration": 113237532,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethnicity",
      "offset": 20
    },
    {
      "val": "All",
      "offset": 36
    }
  ],
  "location": "Census.Select_Demographic_and(String,String)"
});
formatter.result({
  "duration": 491058279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "African American",
      "offset": 20
    },
    {
      "val": "12.3%",
      "offset": 39
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 410062900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asian",
      "offset": 20
    },
    {
      "val": "",
      "offset": 28
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 401677631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Caucasian",
      "offset": 20
    },
    {
      "val": "69.0%",
      "offset": 32
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 406899622,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hispanic",
      "offset": 20
    },
    {
      "val": "14.3%",
      "offset": 31
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 491074315,
  "status": "passed"
});
formatter.before({
  "duration": 18602,
  "status": "passed"
});
formatter.before({
  "duration": 10905,
  "status": "passed"
});
formatter.before({
  "duration": 10263,
  "status": "passed"
});
formatter.before({
  "duration": 11867,
  "status": "passed"
});
formatter.before({
  "duration": 10263,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "#Att-user logged in --\u003e click on Census Tab --\u003e perform action on Census functionality",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "censusflow;census-functionality-automation;;5",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    }
  ],
  "description": "",
  "name": "Census functionality Automation",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "user clicks on \"cnesus tab\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "user clicks on map view \"DMA\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "clicks on projected census listing \"New York, NY (501)\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "clicks on \"export\" option",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "clicks on \"close\" button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Select Demographic \"ethnicity\" and \"All\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.step({
  "name": "Verify comparision \"African American\" \"16.7%\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    4,
    8
  ]
});
formatter.step({
  "name": "Verify comparision \"Asian\" \"6.0%\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    5,
    9
  ]
});
formatter.step({
  "name": "Verify comparision \"Caucasian\" \"56.2%\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    6,
    10
  ]
});
formatter.step({
  "name": "Verify comparision \"Hispanic\" \"21.1%\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    7,
    11
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "cnesus tab",
      "offset": 16
    }
  ],
  "location": "Census.user_clicks_on(String)"
});
formatter.result({
  "duration": 150689809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DMA",
      "offset": 25
    }
  ],
  "location": "Census.user_clicks_on_map_view(String)"
});
formatter.result({
  "duration": 677007910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York, NY (501)",
      "offset": 36
    }
  ],
  "location": "Census.clicks_on_projected_census_listing(String)"
});
formatter.result({
  "duration": 9765039282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "export",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_option(String)"
});
formatter.result({
  "duration": 685084645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_button(String)"
});
formatter.result({
  "duration": 171606957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethnicity",
      "offset": 20
    },
    {
      "val": "All",
      "offset": 36
    }
  ],
  "location": "Census.Select_Demographic_and(String,String)"
});
formatter.result({
  "duration": 1102530238,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "African American",
      "offset": 20
    },
    {
      "val": "16.7%",
      "offset": 39
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 465290856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asian",
      "offset": 20
    },
    {
      "val": "6.0%",
      "offset": 28
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 465397977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Caucasian",
      "offset": 20
    },
    {
      "val": "56.2%",
      "offset": 32
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 467707495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hispanic",
      "offset": 20
    },
    {
      "val": "21.1%",
      "offset": 31
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 461874850,
  "status": "passed"
});
formatter.before({
  "duration": 19243,
  "status": "passed"
});
formatter.before({
  "duration": 11225,
  "status": "passed"
});
formatter.before({
  "duration": 10905,
  "status": "passed"
});
formatter.before({
  "duration": 10584,
  "status": "passed"
});
formatter.before({
  "duration": 10583,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "#Att-user logged in --\u003e click on Census Tab --\u003e perform action on Census functionality",
  "keyword": "Background",
  "line": 4,
  "type": "background"
});
formatter.scenario({
  "id": "censusflow;census-functionality-automation;;6",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    }
  ],
  "description": "",
  "name": "Census functionality Automation",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "user clicks on \"cnesus tab\"",
  "keyword": "When ",
  "line": 7
});
formatter.step({
  "name": "user clicks on map view \"Local\"",
  "keyword": "And ",
  "line": 8,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "clicks on projected census listing \"Cook County North\"",
  "keyword": "And ",
  "line": 9,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "clicks on \"export\" option",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "clicks on \"close\" button",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Select Demographic \"ethnicity\" and \"All\"",
  "keyword": "And ",
  "line": 12,
  "matchedColumns": [
    2,
    3
  ]
});
formatter.step({
  "name": "Verify comparision \"African American\" \"\"",
  "keyword": "And ",
  "line": 13,
  "matchedColumns": [
    4,
    8
  ]
});
formatter.step({
  "name": "Verify comparision \"Asian\" \"11.2%\"",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    5,
    9
  ]
});
formatter.step({
  "name": "Verify comparision \"Caucasian\" \"59.2%\"",
  "keyword": "And ",
  "line": 15,
  "matchedColumns": [
    6,
    10
  ]
});
formatter.step({
  "name": "Verify comparision \"Hispanic\" \"24.8%\"",
  "keyword": "And ",
  "line": 16,
  "matchedColumns": [
    7,
    11
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "cnesus tab",
      "offset": 16
    }
  ],
  "location": "Census.user_clicks_on(String)"
});
formatter.result({
  "duration": 108062687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Local",
      "offset": 25
    }
  ],
  "location": "Census.user_clicks_on_map_view(String)"
});
formatter.result({
  "duration": 701608548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cook County North",
      "offset": 36
    }
  ],
  "location": "Census.clicks_on_projected_census_listing(String)"
});
formatter.result({
  "duration": 4550738494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "export",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_option(String)"
});
formatter.result({
  "duration": 781099421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "close",
      "offset": 11
    }
  ],
  "location": "Census.clicks_on_button(String)"
});
formatter.result({
  "duration": 103727812,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ethnicity",
      "offset": 20
    },
    {
      "val": "All",
      "offset": 36
    }
  ],
  "location": "Census.Select_Demographic_and(String,String)"
});
formatter.result({
  "duration": 735899791,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "African American",
      "offset": 20
    },
    {
      "val": "",
      "offset": 39
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 501619004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asian",
      "offset": 20
    },
    {
      "val": "11.2%",
      "offset": 28
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 432311044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Caucasian",
      "offset": 20
    },
    {
      "val": "59.2%",
      "offset": 32
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 412082485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hispanic",
      "offset": 20
    },
    {
      "val": "24.8%",
      "offset": 31
    }
  ],
  "location": "Census.Verify_comparision(String,String)"
});
formatter.result({
  "duration": 399598072,
  "status": "passed"
});
formatter.uri("1000_sign_out.feature");
formatter.feature({
  "id": "login-feature",
  "tags": [
    {
      "name": "@Censusflow",
      "line": 1
    },
    {
      "name": "@ReportTab",
      "line": 1
    },
    {
      "name": "@MarketShare",
      "line": 1
    }
  ],
  "description": "",
  "name": "Login feature",
  "keyword": "Feature",
  "line": 2
});
formatter.before({
  "duration": 19885,
  "status": "passed"
});
formatter.before({
  "duration": 15716,
  "status": "passed"
});
formatter.before({
  "duration": 11546,
  "status": "passed"
});
formatter.before({
  "duration": 10904,
  "status": "passed"
});
formatter.before({
  "duration": 10905,
  "status": "passed"
});
formatter.scenario({
  "id": "login-feature;authorized-user-login.",
  "description": "",
  "name": "Authorized user login.",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "click on signout",
  "keyword": "When ",
  "line": 5
});
formatter.match({
  "location": "Login.click_on_signout()"
});
formatter.result({
  "duration": 206230468,
  "status": "passed"
});
});