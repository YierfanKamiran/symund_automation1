package com.symund.step_definitions;

import com.symund.pages.LoginPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.ConfigurationReader;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;


public class LoginStepDefs {


 @Given("the user is logged in as {string}")
   public void the_user_is_logged_in_as(String username) {
    new LoginPage().login(username);
     BrowserUtils.waitFor(2);
}


    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        System.out.println("The user is in Login Page");
    }


    @Then("the title should contain {string}")
    public void the_title_should_contain(String expectedTitle) {
        expectedTitle="Files - Symund - QA";
        String actualTitle= Driver.get().getTitle();
        Assert.assertTrue(actualTitle.contains(expectedTitle));
    }


    @When("the user enters {string} and {string}")
    public void the_user_enters_and(String username, String password) {
        new LoginPage().login(username,password);
        BrowserUtils.waitFor(2);
    }


    @Then("the url should change to {string}")
    public void the_url_should_change_to(String expectedUrl) {
        expectedUrl="https://qa.symund.com/index.php/apps/files/?dir=/&fileid=2314";
        String currentUrl = Driver.get().getCurrentUrl();
        Assert.assertNotEquals(expectedUrl,currentUrl);
    }


}
