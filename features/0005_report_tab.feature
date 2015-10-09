@ReportTab
Feature: ReportTabFlow

  Background: #Att-user logged in --> click on Report Tab --> perform action on Report Tab functionality

  Scenario Outline: ReportTab functionality Automation.
    When user clicks on Report Tab
    And Select Measure as "<measure_value>"
    And Select Geography as "<geo_value>"
    And select Demographic combination as "<demo_comb_value>"
    And Select Month as "<month_value>"
    And Select Income Range as "<income_range>"
    And Select Age-Group as "<age_group>"
    And Select Ethnicity as "<ethnicity>"
    And Click on Filter
    And Verify Att data "<att_value>"
    And Verify Verizon "<verizon_value>"
    And Verify Sprint "<sprint_value>"
    And Verify Tmobile "<tmobile_value>"
    And Verify Other "<other_value>"
    And Verify Market Leader "<market_leader_value>"
    And Verify Att rank "<rank_value>"

    Examples: 
      | measure_value | geo_value | demo_comb_value | month_value | income_range | age_group | ethnicity | att_value | verizon_value | sprint_value | tmobile_value | other_value | market_leader_value | rank_value |
      | measure_value | geo_value | demo_comb_value | month_value | income_range | age_group | ethnicity | att_value | verizon_value | sprint_value | tmobile_value | other_value | market_leader_value | rank_value |
