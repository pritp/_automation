package utility;

import org.junit.runner.JUnitCore;
import org.junit.runner.Result;

public class Exec {
	
	public static void main(String arg[]){
		Runner run = new Runner();
		JUnitCore junit = new JUnitCore();
		Result result = junit.run(Runner.class);
	}

}
