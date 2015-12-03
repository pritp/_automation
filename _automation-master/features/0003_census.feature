@Censusflow
Feature: CensusFlow

  Background: #Att-user logged in --> click on Census Tab --> perform action on Census functionality

  Scenario Outline: Census functionality Automation
    When user clicks on "cnesus tab"
    And user clicks on map view "<map_view>"
    And clicks on projected census listing "<listed_value>"
    And clicks on "export" option
    And clicks on "close" button
    And Select Demographic "<Demographic>" and "<Demographic_value>"
    And Verify comparision "<chart_data1>" "<data_value_1>"
    And Verify comparision "<chart_data2>" "<data_value_2>"
    And Verify comparision "<chart_data3>" "<data_value_3>"
    And Verify comparision "<chart_data4>" "<data_value_4>"

    Examples: 
      | map_view | listed_value       | Demographic | Demographic_value | data_value_1 | data_value_2 | data_value_3 | data_value_4 | chart_data1      | chart_data2 | chart_data3 | chart_data4 |
      | National | National           | ethnicity   | All               | 12.6%        | 5.3%         | 65.1%        | 17.0%        | African American | Asian       | Caucasian   | Hispanic    |
      | Region   | NORTHEAST          | ethnicity   | All               | 10.3%        |              | 66.0%        | 20.1%        | African American | Asian       | Caucasian   | Hispanic    |
      | Cluster  | Great Lakes        | ethnicity   | All               | 12.3%        |              | 69.0%        | 14.3%        | African American | Asian       | Caucasian   | Hispanic    |
      | DMA      | New York, NY (501) | ethnicity   | All               | 16.7%        | 6.0%         | 56.2%        | 21.1%        | African American | Asian       | Caucasian   | Hispanic    |
      | Local    | Cook County North  | ethnicity   | All               |              | 11.2%        | 59.2%        | 24.8%        | African American | Asian       | Caucasian   | Hispanic    |
