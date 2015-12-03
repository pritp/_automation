package runner;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;;

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty","html:reports/test-report"}, 
features={"features/"},tags={"@MarketShare"},
glue="test_cases",
monochrome=true)
public class MarketshareRunner {
	
}
