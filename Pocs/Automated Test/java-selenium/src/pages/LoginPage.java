package pages;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {
  
  //private ChromeDriver driver;

  // url
  private static String PAGE_URL="https://www.google.com";
  // xpaths
  private static String searchInput = "//*[@class=\"gLFyf gsfi\"]";
  // private static String var2 = "asd";
  // private static String var3 = "asd";
  // private static String var4 = "asd";

  // constructor
  public LoginPage(ChromeDriver driver){
    
    driver.get(PAGE_URL);
  }

  public void performSearch(ChromeDriver driver, String value){

    WebElement el1 = driver.findElement(By.xpath(searchInput));
    el1.sendKeys(value);
  }

}
