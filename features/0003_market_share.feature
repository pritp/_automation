Feature: Market share Flow

  Background: #User log in --> clicks on map view --> clicks on Map --> signout

  Scenario Outline: Market share flow
    When user click on Map View with value "<map_view>"
    And select date with value "<month>"
    And select on "<map_value>" for associated map view.
    And select enthnicity  with value "<ethnicity_value>"
    And select income Range with value "<income_range_value>"
    And select age group with value "<age_group_value>"
    Then verify att data with "<att_data_value>"
    Then verify verizon data with "<verizon_data_value>"
    Then verify sprint data with "<sprint_data_value>"
    Then verify tmobile data with "<tmobile_data_value>"
    Then verify other data with "<other_data_value>"

    Examples: 
      | month    | ethnicity | age_group | income_range | map_view | map_value         | att_data_value | verizon_data_value | sprint_data_value | tmobile_data_value | other_data_value |
      | Dec-2014 | null      | null      | null         | National |                   | 30.3%          | 36.3%              | 15.4%             | 15.2%              |                  |
      | Dec-2014 | null      | null      | null         | Region   | CENTRAL           | 34.7%          | 28.9%              | 16.7%             | 14.5%              | 5.2%             |
      | Jun-2015 | Asian     | null      | null         | Cluster  | Chicago/Wisconsin | 29.3%          | 23.5%              | 16.2%             | 26.5%              | 3.9%             |
      | Jun-2015 | null      | null      | null         | DMA      | 602               | 30.3%          | 25.6%              | 21.8%             | 22.1%              |                  |
      | Jun-2015 | null      | null      | null         | Local    | 21                | 27.2%          | 18.5%              | 26.7%             | 27.3%              |                  |
