package test_cases;
import utility.Init;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Login {
	
	
Init initObject;
	
	@Before
	public void uploadFile()
	{
		initObject = Init.getInit(); 
	}
	
	@Given("^user enters the URL in URL address bar \"([^\"]*)\" login page gets open$")
	public void user_enters_the_URL_in_URL_address_bar_login_page_gets_open(String arg1) throws Throwable {
		initObject.setUP(arg1);
	}

	@When("^user enters  email id \"([^\"]*)\"$")
	public void user_enters_email_id(String arg1) throws Throwable {
		initObject.fetchOR("username",arg1);
	}

	@When("^user enters  password \"([^\"]*)\"$")
	public void user_enters_password(String arg1) throws Throwable {
		initObject.fetchOR("password",arg1);
	}
	
	@When("^click on Remember me$")
	public void click_on_Remember_me() throws Throwable {
		initObject.fetchOR("remember_me", "click");
	}

	@When("^click on SignIn$")
	public void click_on_SignIn() throws Throwable {
		initObject.fetchOR("sign_in", "click");
	}
	
	@When("^click on Agree$")
	public void Click_on_Agree() throws Throwable {
		initObject.fetchOR("legal_form_agree", "click");
	   
	}
	
	
	@Then("^user gets logged in successfully verify user name as \"([^\"]*)\"$")
	public void user_gets_logged_in_successfully_verify_user_name_as(String arg1) throws Throwable {
		initObject.waitUntilVisibilty("loader_image");
		initObject.verifyTextOnGui("verify_username_dashboard", arg1);

	}
	
	@Then("^click on signout$")
	public void click_on_signout() throws Throwable {
		initObject.fetchOR("sign_out_dropdown", "click"); 
		initObject.fetchOR("sign_out", "click");
	}


}
