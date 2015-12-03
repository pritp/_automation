package test_cases;

import utility.Init;
import cucumber.api.java.Before;
import cucumber.api.java.en.When;

public class ReportTab {
	
	Init initObject;
	
	@Before
	public void uploadFile()
	{
		initObject = Init.getInit(); 
	}
	
	@When("^user clicks on Report Tab$")
	public void user_clicks_on_Report_Tab() throws Throwable {
	   initObject.fetchOR("report_tab", "click");
	}

	@When("^Select Measure as \"([^\"]*)\"$")
	public void Select_Measure_as(String arg1) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		Thread.sleep(4000);
		initObject.fetchOR("measure_click", "click");
		initObject.dataMatcherTable("drop_down_measure_value", arg1);
	}

	@When("^Select Geography as \"([^\"]*)\"$")
	public void Select_Geography_as(String arg1) throws Throwable {
	  initObject.dataMatcherFilter("report_tab_geo", arg1);
	}

	@When("^select Demographic combination as \"([^\"]*)\"$")
	public void select_Demographic_combination_as(String arg1) throws Throwable {
	   initObject.dataMatcherFilter("demo_combo", arg1);
	}

	@When("^Select Month as \"([^\"]*)\"$")
	public void Select_Month_as(String arg1) throws Throwable {
		initObject.fetchOR("report_tab_month_click", "click");
		initObject.dataMatcherDropDown("drop_down_month_value", arg1);
	}

	@When("^Select Income Range as \"([^\"]*)\"$")
	public void Select_Income_Range_as(String arg1) throws Throwable {
		initObject.dataMatcherFilter("report_tab_income_range", "All");
		initObject.dataMatcherFilter("report_tab_income_range", arg1);
	}

	@When("^Select Age-Group as \"([^\"]*)\"$")
	public void Select_Age_Group_as(String arg1) throws Throwable {
		initObject.dataMatcherFilter("report_tab_age_group", "All");
		initObject.dataMatcherFilter("report_tab_age_group", arg1);
	}

	@When("^Select Ethnicity as \"([^\"]*)\"$")
	public void Select_Ethnicity_as(String arg1) throws Throwable {
		initObject.dataMatcherFilter("report_tab_ethnicity", "All");
		initObject.dataMatcherFilter("report_tab_ethnicity", arg1);
	}

	@When("^Click on Filter$")
	public void Click_on_Filter() throws Throwable {
		initObject.fetchOR("report_tab_filter_click", "click");
		initObject.waitUntilVisibilty("loader_image");
		initObject.dataMatcherFilter("report_tab_income_range", "All");
		initObject.dataMatcherFilter("report_tab_age_group", "All");
		initObject.dataMatcherFilter("report_tab_ethnicity", "All");
	}

	@When("^Verify Att data \"([^\"]*)\"$")
	public void Verify_Att_data(String arg1) throws Throwable {
	   initObject.verifyData("report_tab_data_verify_list", arg1, 0);
	}

	@When("^Verify Verizon \"([^\"]*)\"$")
	public void Verify_Verizon(String arg1) throws Throwable {
		initObject.verifyData("report_tab_data_verify_list", arg1, 1);
	}

	@When("^Verify Sprint \"([^\"]*)\"$")
	public void Verify_Sprint(String arg1) throws Throwable {
		initObject.verifyData("report_tab_data_verify_list", arg1, 2);  
	}

	@When("^Verify Tmobile \"([^\"]*)\"$")
	public void Verify_Tmobile(String arg1) throws Throwable {
		initObject.verifyData("report_tab_data_verify_list", arg1, 3);  
	}

	@When("^Verify Other \"([^\"]*)\"$")
	public void Verify_Other(String arg1) throws Throwable {
		initObject.verifyData("report_tab_data_verify_list", arg1, 4); 
	}

	@When("^Verify Market Leader \"([^\"]*)\"$")
	public void Verify_Market_Leader(String arg1) throws Throwable {
		if(!arg1.equals("")){
			 initObject.verifyData("report_tab_data_verify_list_second", arg1, 0);
		}
	  
	}

	@When("^Verify Att rank \"([^\"]*)\"$")
	public void Verify_Att_rank(String arg1) throws Throwable {
		if(!arg1.equals("")){
			initObject.verifyData("report_tab_data_verify_list_second", arg1, 1);
		}
		
	}


}
