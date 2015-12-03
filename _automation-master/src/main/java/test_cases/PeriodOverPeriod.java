package test_cases;

import utility.Init;
import cucumber.api.java.Before;
import cucumber.api.java.en.When;

public class PeriodOverPeriod {
Init initObject;

	
	@Before
	public void uploadFile()
	{
		
		initObject = Init.getInit(); 
	}
	
	@When("^user clicks on Period over period Tab$")
	public void user_clicks_on_Period_over_period_Tab() throws Throwable {
	   initObject.fetchOR("pop_tab_click", "click");
	}

	@When("^Select Demographic as \"([^\"]*)\"$")
	public void Select_Demographic_as(String arg1) throws Throwable {
		initObject.fetchOR("pop_select_demographic_click", "click");
		initObject.dataMatcherTable("pop_select_demographic_value", arg1);
	}

	@When("^Select Geo Type as \"([^\"]*)\"$")
	public void Select_Geo_Type_as(String arg1) throws Throwable {
		initObject.dataMatcherFilter("pop_geo_type_select", arg1);
	}

	@When("^Select Geo Name as \"([^\"]*)\"$")
	public void Select_Geo_Name_as(String arg1) throws Throwable {
		initObject.fetchOR("pop_geo_name_click", "click");
		initObject.dataMatcherTable("pop_geo_name_value", arg1);
	}

	@When("^Period one \"([^\"]*)\"$")
	public void Period_one(String arg1) throws Throwable {
		initObject.fetchOR("pop_period_one_click", "click");
		initObject.dataMatcherTable("pop_period_one_value", arg1);
	}

	@When("^Period two \"([^\"]*)\"$")
	public void Period_two(String arg1) throws Throwable {
		initObject.fetchOR("pop_period_two_click", "click");
		initObject.dataMatcherTable("pop_period_two_value", arg1);
	}

	@When("^Income Range Value \"([^\"]*)\"$")
	public void Income_Range_Value(String arg1) throws Throwable {
		initObject.dataMatcherFilter("pop_income_range_value", "All");
		initObject.dataMatcherFilter("pop_income_range_value", arg1);
	}
	@When("^Age group Value \"([^\"]*)\"$")
	public void Age_group_Value(String arg1) throws Throwable {
		initObject.dataMatcherFilter("pop_age_group_value", "All");
		initObject.dataMatcherFilter("pop_age_group_value", arg1);
	}

	@When("^Ethnicity Value \"([^\"]*)\"$")
	public void Ethnicity_Value(String arg1) throws Throwable {
		initObject.dataMatcherFilter("pop_ethnicity_value", "All");
		initObject.dataMatcherFilter("pop_ethnicity_value", arg1);
	}

	@When("^Click on filter$")
	public void Click_on_filter() throws Throwable {
		initObject.fetchOR("pop_filter", "click");
		
	}

}
