package resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Response;

import org.junit.runner.JUnitCore;

import runner.CensusRunner;
import runner.MarketshareRunner;
import runner.PeriodOverPeriodRunner;
import runner.ReportTabRunner;



@Path("/auto")
public class FlowResource {
	
	
	@GET
	@Path("/flows")
	public Response flowRunner(@QueryParam("market_flow") String market
			,@QueryParam("census_flow") String census,@QueryParam("report_flow") String report,
			@QueryParam("pop") String pop){
		
		try{
		if(market.equals("market")&&!market.equals(null)){
			System.out.println("--------------start");
			JUnitCore junit = new JUnitCore();
			junit.run(MarketshareRunner.class);
			System.out.println("--------------end");
		}
		}catch(Exception e){
			System.out.println("exception : "+e);
		}
		try{
		if(census.equals("census")&&!census.equals(null)){
			System.out.println("--------------startCensus");
			JUnitCore junit = new JUnitCore();
			junit.run(CensusRunner.class);
			System.out.println("--------------end");
		}
		}catch(Exception e){
			System.out.println("exception : "+e);
		}
		try{
			if(report.equals("report")&&!report.equals(null)){
				System.out.println("--------------startReport");
				JUnitCore junit = new JUnitCore();
				junit.run(ReportTabRunner.class);
				System.out.println("--------------end");
			}
			}catch(Exception e){
				System.out.println("exception : "+e);
			}
		try{
			if(pop.equals("pop")&&!pop.equals(null)){
				System.out.println("--------------startpop");
				JUnitCore junit = new JUnitCore();
				junit.run(PeriodOverPeriodRunner.class);
				System.out.println("--------------end");
			}
			}catch(Exception e){
				System.out.println("exception : "+e);
			}
		return Response.ok().build();
	}
}
