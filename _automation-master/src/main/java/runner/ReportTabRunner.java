package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(format={"pretty","html:reports/test-report"}, 
features={"features/"},tags={"@ReportTab"},
glue="test_cases",
monochrome=true)
public class ReportTabRunner {

}
