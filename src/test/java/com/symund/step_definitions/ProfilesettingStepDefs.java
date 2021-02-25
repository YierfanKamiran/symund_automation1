package com.symund.step_definitions;

import com.symund.pages.DashboardPage;
import com.symund.pages.ProfilesettingPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

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
        BrowserUtils.waitFor(2);


    }

    @When("the user see clicks upload photo button and uploads image")
    public void the_user_see_clicks_upload_photo_button_and_uploads_image() {
        profilesettingPage.uploadbutton.sendKeys("C:\\Users\\evrim\\OneDrive\\Pictures\\Camera Roll");
        BrowserUtils.waitFor(2);

    }
    @Then("all the changes should be saved")
    public void all_the_changes_should_be_saved() {
 profilesettingPage.companyLogo.click();
 BrowserUtils.waitFor(2);
 profilesettingPage.avatar.click();
 BrowserUtils.waitFor(2);
 profilesettingPage.Settings.click();


    }
    @Then("{string} message should  be displayed")
    public void message_should_be_displayed(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}


