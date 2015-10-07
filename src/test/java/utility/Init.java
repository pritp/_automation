package utility;

import java.awt.Robot;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


public class Init {
	public  int LAST_ROW_NUM,LAST_CELL_NUM,ROW_INDEX;
	public  HSSFWorkbook workbook;
	public  HSSFSheet worksheet;
	public 	String VALUE ;
	public  String PATH;
	public	FileInputStream input;
	public  HSSFRow row;
	public  Map<String, Map<String,String>> objectLocatorMap;
	public  String locator,locatorType,ObjectName,staticValue;
	public  WebDriverWait wait;
	public 	WebDriver driver;
	public  Map<String, TdRecord> objectTestdata;
	private static Init init; 
	
	private Init() {
		setBrowser(readConfig("BrowserName"));
	}

	public static Init getInit() {
	    if (null == init) {
	    	init = new Init();
	    }
	    return init;
	}
	
	public  WebDriverWait getBrowser(){

		return wait;
	}
	
	public  void setBrowser(String BrowserName) {

		
		if("firefox".equals(BrowserName)){
			driver=new FirefoxDriver();
			wait=new WebDriverWait(driver, 60);
		}
		

		if("chrome".equals(BrowserName)){
			ChromeOptions options = new ChromeOptions(); 
			options.addArguments("--test-type");
			System.setProperty("webdriver.chrome.driver","D:/Att_workspace/att_as/chromedriver.exe");
			/*DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true); */
			driver=new ChromeDriver(options);
			wait=new WebDriverWait(driver, 30);
		}

	}
	
	public  void setUP(String url) throws IOException, InterruptedException{
		driver.get(readConfig(url));
		driver.manage().window().maximize();
		Thread.sleep(2000);
	}
	
	public  void data(String string){
		try {
			PATH = new File(string).getPath();
			input = new FileInputStream(PATH);
			workbook = new HSSFWorkbook(input);
			worksheet = workbook.getSheet("Sheet1");
			LAST_ROW_NUM = worksheet.getLastRowNum();
			row=worksheet.getRow(ROW_INDEX);
			LAST_CELL_NUM=row.getLastCellNum();
		}catch (FileNotFoundException e) {
			e.printStackTrace();
		}catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	
	public  String readConfig(String string){
		File file = new File("D:\\Att_workspace\\att_as\\config.properties");
		InputStream input;
		try {
			input = new FileInputStream(file);
		
		Properties prop = new Properties();
		
		prop.load(input);
		
		
		VALUE = prop.getProperty(string);

		if(VALUE == "") {
			
			System.out.println("Requested property " +string + " not found in the config file " + file);
		}

		
		} catch (IOException e) {
			e.printStackTrace();
		}
		return VALUE;
	}
	
	
	
	
	@SuppressWarnings("finally")
	public List<String> getTDFieldList(){

		HSSFRow row;
		HSSFCell cell;
		List<String> TDFieldList = new ArrayList<String>();
		try
		{

			data(readConfig("file1"));

			for(int i=1;i<=LAST_ROW_NUM;i++){

				row=worksheet.getRow(i);
				cell=row.getCell(0);
				TDFieldList.add((String) cell.getStringCellValue());	
			}
			return TDFieldList;
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		finally{
			return TDFieldList;
		}

	}



	public Map<String, TdRecord> getTdHashMap()
	{
		HSSFRow row;
		HSSFCell cell;
		String ObjectName;
		String LocatorType;
		String Locator;
	
		Map<String, TdRecord> mapTd =new HashMap<String, TdRecord>();
		try 
		{
	
			data(readConfig("file1"));
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		List<String> list =new ArrayList<String>();
	
		list= this.getTDFieldList();
		//System.out.println("list size"+list.size());
		outerloop:
			for(String TdName:list){
	
				for(int i=1;i<=LAST_ROW_NUM;i++){
	
					for(int j=0;j<LAST_CELL_NUM;j++){
						row=worksheet.getRow(i);
						cell=row.getCell(j);
	
						if(TdName.equals(cell.getStringCellValue())){
	
	
							//System.out.println("TD name-----------"+TdName);	
							ObjectName=TdName;
	
							cell=row.getCell(1);
							//System.out.println("cell value_1"+cell.getStringCellValue());
							
							LocatorType=cell.getStringCellValue();
	
							cell=row.getCell(2);
							cell.setCellType(HSSFCell.CELL_TYPE_STRING);
							//System.out.println("cell value_2"+cell.getStringCellValue());
							
							Locator=cell.getStringCellValue();
	
							TdRecord Tdrecord = new TdRecord();
							Tdrecord.setLocator(Locator);
							Tdrecord.setLocatorType(LocatorType);
							Tdrecord.setObjectName(ObjectName);
							//System.out.println("map TD"+mapTd);
	
	
							mapTd.put(TdName,Tdrecord);
	
							continue outerloop;
	
						}
					}
				}
			}
			return mapTd;
		}
	
	public Map<String,String> getStaticData(){
		
		HSSFRow row;
		HSSFCell cell;
		
		List<String> keywordList = this.getTDFieldList();
		Map<String,String> staticDataMap = new HashMap<String,String>();
		outerloop:
			for(String TdName:keywordList){
	
				for(int i=1;i<=LAST_ROW_NUM;i++){
	
					for(int j=0;j<LAST_CELL_NUM;j++){
						row=worksheet.getRow(i);
						cell=row.getCell(j);
	
						if(TdName.equals(cell.getStringCellValue())){
	
							cell=row.getCell(3);
							
							if(cell.getStringCellValue()!=""){
								staticDataMap.put(TdName,cell.getStringCellValue());
							}
	
							continue outerloop;
	
						}
					}
				}
			}
		//System.out.println("=1=1=1==1=1=1=1=1==1=1=1=======:  "+staticDataMap.get("usernameee"));
		
		return staticDataMap;
	}


	public  Map<String, Map<String,String>> td_OR(){
	
		return this.objectLocatorMap;
	}
	
	public void populateTestData(){
		this.objectTestdata = new HashMap<String, TdRecord>();
		this.objectTestdata=getTdHashMap();
	}
	
	
	
	
	public  String getLocator(){
		return locator;
	}
	
	
	public  void setOR(String string){
		Map<String,String> staticmap = this.getStaticData();
		Map<String, TdRecord> TdMap= new HashMap<String, TdRecord>();
		TdMap = getTdHashMap();
		TdRecord tdrecord=TdMap.get(string);
		locator=tdrecord.getLocator();
		locatorType=tdrecord.getLocatorType();
		ObjectName=tdrecord.getObjectName();
		staticValue= staticmap.get(string);
	
		//System.out.println("Field value :"+tdrecord.getObjectName()+" ## "+" Locator :"+locator+" ## "+" Locator type :"+locatorType);
		
	}
	
	public void fetchOR(String string,String data_value){
		setOR(string);
		if("cssSelector".equals(locatorType)&&!"click".equals(data_value)&&!"static".equals(data_value)){
			//System.out.println(getLocator());
			getBrowser().until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(getLocator()))).sendKeys(data_value);
	
		}else if("cssSelector".equals(locatorType)&&"click".equals(data_value)){
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.cssSelector(getLocator()))).click();
	
		}else if("cssSelector".equals(locatorType)&&"static".equals(data_value)){
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.cssSelector(getLocator()))).sendKeys(this.staticValue);
	
		}
	
		if("xpath".equals(locatorType)&&!"click".equals(data_value)&&!"static".equals(data_value)){
			getBrowser().until(ExpectedConditions.presenceOfElementLocated(By.xpath(getLocator()))).sendKeys(data_value);
	
		}else if("xpath".equals(locatorType)&&"click".equals(data_value)) {
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.xpath(getLocator()))).click();
	
		}else if("xpath".equals(locatorType)&&"static".equals(data_value)){
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.xpath(getLocator()))).sendKeys(this.staticValue);
	
		}else if("xpath".equals(locatorType)&&"static".equals(data_value)){
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.xpath(getLocator()))).sendKeys(this.staticValue);
	
		}
		
		if("name".equals(locatorType)&&!"click".equals(data_value)&&!"static".equals(data_value)){
			getBrowser().until(ExpectedConditions.presenceOfElementLocated(By.name(getLocator()))).sendKeys(data_value);
	
		}else if("name".equals(locatorType)&&"click".equals(data_value)) {
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.name(getLocator()))).click();
	
		}else if("name".equals(locatorType)&&"static".equals(data_value)){
			getBrowser().until(ExpectedConditions.elementToBeClickable(By.name(getLocator()))).sendKeys(this.staticValue);
	
		}
	}
	
	public void verifyTextOnGui(String element_path,String data_value){
		setOR(element_path);
		if("cssSelector".equals(locatorType)){
			String GUI_TEXT=getBrowser().until(ExpectedConditions.presenceOfElementLocated(By.cssSelector(getLocator()))).getText();
			
			Assert.assertEquals(data_value, GUI_TEXT);
	
		}
	
		if("xpath".equals(locatorType)){
			String GUI_TEXT=getBrowser().until(ExpectedConditions.presenceOfElementLocated(By.xpath(getLocator()))).getText();
			
			Assert.assertEquals(data_value, GUI_TEXT);
	
		}
		if("name".equals(locatorType)){
			String GUI_TEXT=getBrowser().until(ExpectedConditions.presenceOfElementLocated(By.name(getLocator()))).getText();
			
			Assert.assertEquals(data_value, GUI_TEXT);
	
		}
	}
	
	
	
	public void dataMatcherFilter(String string,String feature_data){
		setOR(string);
		List<WebElement> list_of_elements=getBrowser().until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath(getLocator())));
		
		if(list_of_elements.size()>0){
			for(int i=0;i<list_of_elements.size();i++){
				
				System.out.println("*************************** "+list_of_elements.get(i).getText());
				if(list_of_elements.get(i).getText().equals(feature_data)&&!list_of_elements.get(i).getText().equals("")){
					System.out.println("##################### "+list_of_elements.get(i).getText());
					list_of_elements.get(i).findElement(By.tagName("input")).click();
					break;
				}
			}
		}
		
			
	}
	
	public void dataMatcherBarChart(String string,String feature_data){
		setOR(string);
		List<WebElement> list_of_elements=getBrowser().until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath(getLocator())));
		List<String> list= new ArrayList<String>();
		for(int i=0;i<list_of_elements.size();i++){	
				list.add(list_of_elements.get(i).getText()) ;
				System.out.println("**********%%%%%%%%%%%%%%%%************"+list_of_elements.get(i).getText());
		}
		boolean flag=assertAnyOf(list,feature_data);
		Assert.assertTrue(flag);
		
			
	}
	
	public boolean assertAnyOf(List<String> list, String feature_data) {
		boolean flag=false;
		for(int i=0;i<list.size();i++){
			
			if(list.get(i).equals(feature_data)){
				flag=true;
				break;
			}
		
		}
		
		return flag;
		
	}

	public void dataMatcherMapValue(String string,String feature_data){
		setOR(string);
		Robot robo ;
		try{
		List<WebElement> list_of_elements=getBrowser().until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath(getLocator())));
		for(int i=0;i<list_of_elements.size();i++){
			System.out.println("----------"+feature_data+"---------"+list_of_elements.get(i).getText());
			if((list_of_elements.get(i).getAttribute("id")).equals(feature_data)){
				//System.out.println("click");
				try{
					robo = new Robot();
					list_of_elements.get(i).click();
					robo.mouseMove(list_of_elements.get(i).getLocation().x, list_of_elements.get(i).getLocation().y);
					//System.out.println("done"+list_of_elements.get(i).getLocation().x+" "+list_of_elements.get(i).getLocation().y);
					break;
					
				}catch(Exception e){
					e.printStackTrace();
				}
					
			}
		}
		
		}catch(Exception e){
			//e.printStackTrace();
		}
	}
	
	public void checkAlert() {
	    try {
	        WebDriverWait wait = new WebDriverWait(driver, 2);
	        wait.until(ExpectedConditions.alertIsPresent());
	        Alert alert = driver.switchTo().alert();
	        alert.accept();
	    } catch (Exception e) {
	        //exception handling
	    }
	}
	
	public void wait(int x,String reason){
		try {
			Thread.sleep(x);
			System.out.println("Reason for waiting :"+reason);
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
	}
	public void loadWait(){
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
	}
	
	public String characterRemover(String string){
		String[] splitted_string_collection=string.split("[- /.]");
		
		if(splitted_string_collection.length<1){
			string= splitted_string_collection[0]+splitted_string_collection[1];
		}
		return string;
	}
	
	public void waitUntilVisibilty(String element_path){
		setOR(element_path);
		getBrowser().until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(getLocator())));
	}
	
	public void browserQuit(){
		driver.quit();
	}
	
	public static void main(String arg[]){
		Init init = Init.getInit();
		
		//System.out.println("*********Starting*************");
		init.getStaticData();
	}
	
}

