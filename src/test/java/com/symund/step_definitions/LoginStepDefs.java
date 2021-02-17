package com.symund.step_definitions;

import com.symund.pages.LoginPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.ConfigurationReader;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

public class LoginStepDefs {

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {

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

    @When("the user enters {string} and {string}")
    public void the_user_enters_and(String username, String password) {
        new LoginPage().loginwithInvalidInfo(username,password);
    }

    @Then("the user should see {string}")
    public void the_user_should_see(String expectedMessage) {

//        JavascriptExecutor js = (JavascriptExecutor)Driver.get();
//        WebElement field = Driver.get().findElement(By.id("submit-wrapper"));
//        Boolean is_valid = (Boolean)js.executeScript("return arguments[0].checkValidity();", field);
//        String actualMessage = (String)js.executeScript("return arguments[0].validationMessage;", field);
//
//        Assert.assertEquals(message,actualMessage);

        String actualMessage = new LoginPage().errorMessage.getText();
        Assert.assertEquals(expectedMessage,actualMessage);

    }

}
