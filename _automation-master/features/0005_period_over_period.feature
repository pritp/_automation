@pop
Feature: PeriodOverPeriodTabFlow

  Background: #Att-user logged in --> click on Perio over period Tab --> perform action on period over period Tab functionality

  Scenario Outline: Period over period Tab functionality Automation.
    When user clicks on Period over period Tab
    And Select Demographic as "<demo_value>"
    And Select Geo Type as "<geo_value>"
    And Select Geo Name as "<geo_name_value>"
    And Period one "<period_value>"
    And Period two "<period_value_two>"
    And Income Range Value "<income_range_value>"
    And Income Range Value "<age_group_value>"
    And Income Range Value "<ethnicity_value>"
    And Click on filter

    Examples: 
      | demo_value   | geo_value | geo_name_value    | period_value | period_value_two | income_range_value | age_group_value | ethnicity_value |
      | Income-Range | Cluster   | Chicago/Wisconsin | Jun-2016     | Jul-2016         | <50k               | Gen X [35-54]   | Asian           |
