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
		Thread.sleep(6000);
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("map_view_list", arg1);
		if(arg1.equals("Local")){
			initObject.checkAlert();
		}
		
	}

	@When("^select date with value \"([^\"]*)\"$")
	public void select_date_with_value(String arg1) throws Throwable {
		initObject.fetchOR("date","click");
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("date_value", arg1);
		initObject.fetchOR("date","click");
	}

	@When("^select on \"([^\"]*)\" for associated map view.$")
	public void select_on_for_associated_map_view(String arg1) throws Throwable {	
		initObject.dataMatcherMapValue("map_value_list", arg1);
		initObject.waitUntilVisibilty("loader_image");
	}

	@When("^select enthnicity  with value \"([^\"]*)\"$")
	public void select_enthnicity_with_value(String arg1) throws Throwable {
		initObject.fetchOR("ethnicity_click", "click");
		initObject.dataMatcherFilter("ethnicity_list", arg1);
		initObject.waitUntilVisibilty("loader_image");
		initObject.fetchOR("ethnicity_click", "click");
	}

	@When("^select income Range with value \"([^\"]*)\"$")
	public void select_income_Range_with_value(String arg1) throws Throwable {
		initObject.fetchOR("income_range_click", "click");
		initObject.dataMatcherFilter("income_range_list", arg1);
		initObject.waitUntilVisibilty("loader_image");
		initObject.fetchOR("income_range_click", "click");
	}

	@When("^select age group with value \"([^\"]*)\"$")
	public void select_age_group_with_value(String arg1) throws Throwable {
		initObject.fetchOR("age_group_click", "click");
		initObject.dataMatcherFilter("age_group_list", arg1);
		initObject.waitUntilVisibilty("loader_image");
		initObject.fetchOR("age_group_click", "click");
	}

	@Then("^verify att data with \"([^\"]*)\"$")
	public void verify_att_data_with(String arg1) throws Throwable {
	   initObject.verifyData("marketshare_comparision_bar_list", arg1,"AT&T");
	}

	@Then("^verify verizon data with \"([^\"]*)\"$")
	public void verify_verizon_data_with(String arg1) throws Throwable {
		 initObject.verifyData("marketshare_comparision_bar_list", arg1,"Verizon");
	}

	@Then("^verify sprint data with \"([^\"]*)\"$")
	public void verify_sprint_data_with(String arg1) throws Throwable {
		 initObject.verifyData("marketshare_comparision_bar_list", arg1,"Sprint");
	}

	@Then("^verify tmobile data with \"([^\"]*)\"$")
	public void verify_tmobile_data_with(String arg1) throws Throwable {
		 initObject.verifyData("marketshare_comparision_bar_list", arg1,"T-Mobile");
	}

	@Then("^verify other data with \"([^\"]*)\"$")
	public void verify_other_data_with(String arg1) throws Throwable {
		initObject.verifyData("marketshare_comparision_bar_list", arg1,"Other");
		initObject.fetchOR("sign_out_dropdown", "click"); 
		initObject.fetchOR("sign_out", "click");
	}

}
