package tests;
import org.openqa.selenium.chrome.ChromeDriver;

import pages.LoginPage;

public class Demo {

	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver", "/home/pedroscattaregi/Documents/eclipse-workspace/chromedriver");
		
		ChromeDriver driver = new ChromeDriver();
		
		//driver.navigate().to("http://google.com");
		
		//driver.get("http://facebook.com");

		LoginPage loginPage  = new LoginPage(driver);
		System.out.println(loginPage);
		loginPage.performSearch(driver, "asd");
		
		int number1 = 1;
		int number2 = 2;
		
		int Sum = number1 + number2;
		System.out.println(Sum);
		
		Basics basics = new Basics();
		basics.importExample();
	}
}
