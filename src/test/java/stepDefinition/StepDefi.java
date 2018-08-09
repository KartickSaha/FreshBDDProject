package stepDefinition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class StepDefi extends BaseClass{




    @Given("^As a not validated user$")
    public void as_a_not_validated_user(){
        driver.manage().deleteAllCookies();

    }

    @When("^User browse to the site$")
    public void user_browse_to_the_site(){
        driver.navigate().to("https://www.homedepot.com/");

    }

    @Then("^Home page will be display$")
    public void home_page_will_be_display(){
       String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("The Home Depot",title);

    }

    @When("^User click MyAccount button$")
    public void user_click_MyAccount_button(){
        WebElement element = driver.findElement(By.xpath("//div[ @class='headerMyAccountTitle MyAccount__status hide show--sm']"));
        element.click();
        delayFor(3000);

    }

    @Then("^Signin page will drop down$")
    public void signin_page_will_drop_down(){
        String text = driver.getTitle();
        System.out.println(text);

    }

    @Then("^User click signin button$")
    public void user_click_signin_button(){
        WebElement signInBTN = driver.findElement(By.xpath("//a[@class='bttn bttn--primary dual-sign-in-pop-up js-headerMyAccountLink']"));
        signInBTN.click();
        delayFor(2000);

    }

    @When("^User enter valid email address as \"([^\"]*)\"$")
    public void user_enter_valid_email_address_as(String email) {
        WebElement userID = driver.findElement(By.xpath("//input[@id ='email_id']"));
        userID.sendKeys(email);

    }

    @When("^User enter valid password as \"([^\"]*)\"$")
    public void user_enter_valid_password_as(String password){
        WebElement pass = driver.findElement(By.xpath("//input[@id ='password']"));
        pass.sendKeys(password);

    }

    @When("^Click signin Button$")
    public void click_signin_Button() {
        WebElement clickSignin = driver.findElement(By.xpath("//button[@id='accountSignIn']"));
        clickSignin.click();

    }

    @Then("^User should successfully Login$")
    public void user_should_successfully_Login(){
        String title = driver.getTitle();
        System.out.println(title);
        //Assert.assertEquals("",title);

    }



    public void delayFor(int TimeINMilli){
        try {
            Thread.sleep(TimeINMilli);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }
}
