package utility;

public class TdRecord {
	private String ObjectName;
	private String LocatorType;
	private String Locator;
	
	
	public String getObjectName() {
		return ObjectName;
	}
	public void setObjectName(String objectName) {
		ObjectName = objectName;
	}
	public String getLocatorType() {
		return LocatorType;
	}
	public void setLocatorType(String locatorType) {
		LocatorType = locatorType;
	}
	public String getLocator() {
		return Locator;
	}
	public void setLocator(String locator) {
		Locator = locator;
	}
	@Override
	public String toString() {
		
		return "TdRecord [ObjectName=" + ObjectName + ", LocatorType="
				+ LocatorType + ", Locator=" + Locator + "]";
	}

}
