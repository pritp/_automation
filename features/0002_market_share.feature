Feature: Market share Flow

  Background: #User log in --> clicks on map view --> clicks on Map --> signout

  Scenario Outline: Market share flow
    When user click on Map View with value "<map_view>"
    And select date with value "<month>"
    And select on "<map_value>" for associated map view.
    And select enthnicity  with value "<ethnicity>"
    And select income Range with value "<income_range>"
    And select age group with value "<age_group>"
    Then verify att data with "<att_data_value>"
    Then verify verizon data with "<verizon_data_value>"
    Then verify sprint data with "<sprint_data_value>"
    Then verify tmobile data with "<tmobile_data_value>"
    Then verify other data with "<other_data_value>"

    Examples: 
      | month    | ethnicity | age_group | income_range | map_view | map_value         | att_data_value | verizon_data_value | sprint_data_value | tmobile_data_value | other_data_value |
      | Dec-2014 | null      | null      | null         | National |                   | 30.3%          | 36.3%              | 15.4%             | 15.2%              |                  |
      | Dec-2014 | null      | null      | null         | Region   | CENTRAL           | 34.7%          | 28.9%              | 16.7%             | 14.5%              | 5.2%             |
      | Jun-2015 | Asian     | null      | null         | Cluster  | Chicago/Wisconsin | 29.9%          | 23.5%              | 16.2%             | 26.5%              |                  |
      | Jun-2015 | All       | null      | null         | DMA      | 501               | 22.1%          | 35.5%              | 16.0%             | 26.4%              |                  |
      | Jun-2015 | null      | null      | null         | Local    | 10                | 24.7%          | 59.0%              | 13.1%             |                    |                  |
