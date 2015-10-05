package utility;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;;

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty","html:reports/test-report"}, 
features={"features/0001_Login.feature"},
glue="test_cases",
monochrome=true)
public class Runner {
	
}