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

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

        Driver.get().get(ConfigurationReader.get("url"));
        System.out.println("The user is in Login Page");
    }

    @When("the user enters employee information")
    public void the_user_enters_employee_information() {
       new LoginPage().login();
        BrowserUtils.waitFor(2);
    }

    @Then("the title contains {string}")
    public void the_title_contains(String expectedTitle) {

       expectedTitle="Files - Symund - QA";
        Assert.assertEquals(expectedTitle, Driver.get().getTitle());

    }

}
