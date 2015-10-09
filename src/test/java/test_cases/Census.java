package test_cases;

import utility.Init;
import cucumber.api.java.Before;
import cucumber.api.java.en.When;

public class Census {
	
Init initObject;

	
	@Before
	public void uploadFile()
	{
		
		initObject = Init.getInit(); 
	}
	
	@When("^user clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String CensusTab) throws Throwable {
		
	   initObject.fetchOR("census_tab","click");
	}

	@When("^user clicks on map view \"([^\"]*)\"$")
	public void user_clicks_on_map_view(String arg1) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("census_map_view_list", arg1);
		
	}

	@When("^clicks on projected census listing \"([^\"]*)\"$")
	public void clicks_on_projected_census_listing(String arg1) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherTable("census_listed_value_list", arg1);
		
	}

	@When("^clicks on \"([^\"]*)\" option$")
	public void clicks_on_option(String arg1) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		initObject.fetchOR("census_export","click" );
	}

	@When("^clicks on \"([^\"]*)\" button$")
	public void clicks_on_button(String arg1) throws Throwable {
		initObject.fetchOR("census_close","click" );
	}

	@When("^Select Demographic \"([^\"]*)\" and \"([^\"]*)\"$")
	public void Select_Demographic_and(String arg1, String arg2) throws Throwable {		
		initObject.fetchOR("census_"+arg1+"_click","click" );
		initObject.fetchOR("census_"+arg1+"_list",arg2 );
		initObject.fetchOR("census_"+arg1+"_click","click" );
		
	}

	@When("^Verify comparision \"([^\"]*)\" \"([^\"]*)\"$")
	public void Verify_comparision(String arg1, String arg2) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		initObject.verifyData("census_comparision_bar_list", arg2,arg1);
	}

}
