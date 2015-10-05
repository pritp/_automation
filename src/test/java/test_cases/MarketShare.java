package test_cases;

import utility.Init;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MarketShare {
	
Init initObject;
	
	@Before
	public void uploadFile()
	{
		initObject = Init.getInit(); 
	}
	
	@When("^user click on Map View with value \"([^\"]*)\"$")
	public void user_click_on_Map_View_with_value(String arg1) throws Throwable {
		initObject.setUP("URL");
		initObject.fetchOR("username","static");
		initObject.fetchOR("password","static");
		initObject.fetchOR("remember_me", "click");
		initObject.fetchOR("sign_in", "click");
		initObject.fetchOR("legal_form_agree", "click");
	
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("map_view_list", arg1);
		
	}

	@When("^select date with value \"([^\"]*)\"$")
	public void select_date_with_value(String arg1) throws Throwable {
		initObject.fetchOR("date","click");
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("date_value", arg1);
	}

	@When("^select on \"([^\"]*)\" for associated map view.$")
	public void select_on_for_associated_map_view(String arg1) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("map_value_list", arg1);
	}

	@When("^select enthnicity  with value \"([^\"]*)\"$")
	public void select_enthnicity_with_value(String arg1) throws Throwable {
	    
	}

	@When("^select income Range with value \"([^\"]*)\"$")
	public void select_income_Range_with_value(String arg1) throws Throwable {
	   
	}

	@When("^select age group with value \"([^\"]*)\"$")
	public void select_age_group_with_value(String arg1) throws Throwable {
	   
	}

	@Then("^verify att data with \"([^\"]*)\"$")
	public void verify_att_data_with(String arg1) throws Throwable {
	   
	}

	@Then("^verify verizon data with \"([^\"]*)\"$")
	public void verify_verizon_data_with(String arg1) throws Throwable {
	   
	}

	@Then("^verify sprint data with \"([^\"]*)\"$")
	public void verify_sprint_data_with(String arg1) throws Throwable {
	   
	}

	@Then("^verify tmobile data with \"([^\"]*)\"$")
	public void verify_tmobile_data_with(String arg1) throws Throwable {
	   
	}

	@Then("^verify other data with \"([^\"]*)\"$")
	public void verify_other_data_with(String arg1) throws Throwable {
		initObject.fetchOR("sign_out_dropdown", "click"); 
		initObject.fetchOR("sign_out", "click");
	}

}
