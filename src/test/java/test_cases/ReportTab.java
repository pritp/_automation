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
	   
	}

	@When("^Select Measure as \"([^\"]*)\"$")
	public void Select_Measure_as(String arg1) throws Throwable {
	   
	}

	@When("^Select Geography as \"([^\"]*)\"$")
	public void Select_Geography_as(String arg1) throws Throwable {
	  
	}

	@When("^select Demographic combination as \"([^\"]*)\"$")
	public void select_Demographic_combination_as(String arg1) throws Throwable {
	   
	}

	@When("^Select Month as \"([^\"]*)\"$")
	public void Select_Month_as(String arg1) throws Throwable {
	  
	}

	@When("^Select Income Range as \"([^\"]*)\"$")
	public void Select_Income_Range_as(String arg1) throws Throwable {
	  
	}

	@When("^Select Age-Group as \"([^\"]*)\"$")
	public void Select_Age_Group_as(String arg1) throws Throwable {
	  
	}

	@When("^Select Ethnicity as \"([^\"]*)\"$")
	public void Select_Ethnicity_as(String arg1) throws Throwable {
	   
	}

	@When("^Click on Filter$")
	public void Click_on_Filter() throws Throwable {
	 
	}

	@When("^Verify Att data \"([^\"]*)\"$")
	public void Verify_Att_data(String arg1) throws Throwable {
	   
	}

	@When("^Verify Verizon \"([^\"]*)\"$")
	public void Verify_Verizon(String arg1) throws Throwable {
	  
	}

	@When("^Verify Sprint \"([^\"]*)\"$")
	public void Verify_Sprint(String arg1) throws Throwable {
	   
	}

	@When("^Verify Tmobile \"([^\"]*)\"$")
	public void Verify_Tmobile(String arg1) throws Throwable {
	   
	}

	@When("^Verify Other \"([^\"]*)\"$")
	public void Verify_Other(String arg1) throws Throwable {
	  
	}

	@When("^Verify Market Leader \"([^\"]*)\"$")
	public void Verify_Market_Leader(String arg1) throws Throwable {
	   
	}

	@When("^Verify Att rank \"([^\"]*)\"$")
	public void Verify_Att_rank(String arg1) throws Throwable {
	    
	}


}
