package com.symund.step_definitions;

import com.symund.pages.LogoutPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.ConfigurationReader;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class Logout_Step_Definition {

    LogoutPage logoutPage = new LogoutPage();

    @Given("User is on the login page and page title is <Symund - QA>")
    public void user_is_on_the_login_page_and_page_title_is_Symund_QA() {
        Driver.get().get("https://qa.symund.com");
    }

    @When("User login to symund website successfully")
    public void user_login_to_symund_website_successfully() {
        logoutPage.username.sendKeys(ConfigurationReader.get("username1"));
        logoutPage.password.sendKeys(ConfigurationReader.get("password1"));
        BrowserUtils.waitFor(2);
        logoutPage.login.click();
    }
    @Then("User Able to click on Logout avatar")
    public void user_Able_to_click_on_Logout_avatar() {
        BrowserUtils.waitForVisibility(logoutPage.avatar,3);
        logoutPage.avatar.click();
    }
    @Then("User Able to click on Logout button")
    public void user_Able_to_click_on_Logout_button() {
        BrowserUtils.waitForVisibility(logoutPage.avatar,3);
        logoutPage.button.click();

  }
    @Then("Verify that page title is <Symund - QA>")
    public void verify_that_page_title_is_Symund_QA() {
        Assert.assertEquals( "Symund - QA",Driver.get().getTitle());
        System.out.println("logoutPage = " + logoutPage);
    }


}
