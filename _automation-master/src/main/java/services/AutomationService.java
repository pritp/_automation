package services;

import resources.FlowResource;
import io.dropwizard.Application;
import io.dropwizard.bundles.assets.ConfiguredAssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;

public class AutomationService extends Application<AutomationServiceConfiguration>{
	public static void main(String[] args) throws Exception {
        new AutomationService().run(args);
    }
	
	@Override
	public void initialize(Bootstrap<AutomationServiceConfiguration> bootstrap) {
		 bootstrap.addBundle(new ConfiguredAssetsBundle("/assets/", "/","index.html"));
		 bootstrap.addBundle(new ViewBundle<AutomationServiceConfiguration>());
	    }
	
	@Override
	public void run(AutomationServiceConfiguration config, Environment environment)
			throws Exception {
			environment.jersey().register(new FlowResource());
	}
}
