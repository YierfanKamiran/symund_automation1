package com.symund.step_definitions;

import com.symund.pages.DashboardPage;
import com.symund.pages.ProfilesettingPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import java.util.Map;

public class ProfilesettingStepDefs {

    ProfilesettingPage profilesettingPage = new ProfilesettingPage();


    @Given("the user navigates avatar")
    public void the_user_navigates_avatar() {
        profilesettingPage.avatar.click();
        BrowserUtils.waitFor(2);

    }


    @Given("the user clicks Setting button")
    public void the_user_clicks_Setting_button() {
        profilesettingPage.Settings.click();
        BrowserUtils.waitFor(2);

    }


    @When("the user enters information below")
    public void the_user_enters_information_below(Map<String, String> userinfo) {
        profilesettingPage.clearInputBoxes();
        BrowserUtils.waitFor(2);

        profilesettingPage.Fullname.sendKeys(userinfo.get("Full name"));
        profilesettingPage.Email.sendKeys(userinfo.get("Email"));

        profilesettingPage.PhoneNumber.sendKeys(userinfo.get("Phone number"));
        profilesettingPage.Address.sendKeys(userinfo.get("Address"));
        profilesettingPage.Website.sendKeys(userinfo.get("Website"));
        profilesettingPage.Twitter.sendKeys(userinfo.get("Twitter"));
        profilesettingPage.getDropDownElement(profilesettingPage.Language, userinfo.get("Language"));
        BrowserUtils.waitFor(2);
        profilesettingPage.getDropDownElement(profilesettingPage.Locale, userinfo.get("Locale"));
        BrowserUtils.waitFor(3);


    }

    @When("the user see clicks upload photo button and uploads image")
    public void the_user_see_clicks_upload_photo_button_and_uploads_image() {


        BrowserUtils.waitFor(5);
        String myprojectPath = (System.getProperty("user.dir"));
        String filePath = "src/test/resources/FB_IMG_1593499125485.jpg";
        String fullPath = myprojectPath + "/" + filePath;
        profilesettingPage.uploadFromLocal.sendKeys(fullPath);
        BrowserUtils.waitFor(6);
        profilesettingPage.submitPhotoButton.click();


    }

    @Then("all the changes should be saved")
    public void all_the_changes_should_be_saved() {
        profilesettingPage.companyLogo.click();
        BrowserUtils.waitFor(2);
        profilesettingPage.avatar.click();
        BrowserUtils.waitFor(2);
        profilesettingPage.Settings.click();


    }

    @When("the user  clicks upload photo button and uploads another image")
    public void the_user_clicks_upload_photo_button_and_uploads_another_image() {

        BrowserUtils.waitFor(6);
        String myprojectPath = (System.getProperty("user.dir"));
        String filePath = "src/test/resources/FB_IMG_1593497524603.jpg";
        String fullPath = myprojectPath + "/" + filePath;
        profilesettingPage.uploadFromLocal.sendKeys(fullPath);
        BrowserUtils.waitFor(6);
        profilesettingPage.submitPhotoButton.click();


    }





    @Then("{string} message should be displayed")
    public void message_should_be_displayed(String locator,String expectedMessage) {
        JavascriptExecutor js = (JavascriptExecutor) Driver.get();
        WebElement field = Driver.get().findElement(By.cssSelector("#"+locator));
        Boolean is_valid = (Boolean)js.executeScript("return arguments[0].checkValidity();", field);
        String actualMessage= (String)js.executeScript("return arguments[0].validationMessage;", field);
        Assert.assertEquals(expectedMessage,actualMessage);
    }
}







