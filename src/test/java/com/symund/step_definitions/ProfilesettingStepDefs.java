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

public class ProfilesettingStepDefs{

    ProfilesettingPage profilesettingPage = new ProfilesettingPage();

    @Given("the user navigates avatar")
    public void the_user_navigates_avatar() {

        new ProfilesettingPage().avatar.click();
        BrowserUtils.waitFor(2);

    }



    @Given("the user clicks Setting button")
    public void the_user_clicks_Setting_button() {
        new ProfilesettingPage().Settings.click();
        BrowserUtils.waitFor(2);

    }


    @When("the user enters information below")
        public void the_user_enters_information_below (Map<String,String> userinfo){
         profilesettingPage.clearInputBoxes();
         profilesettingPage.Fullname.sendKeys(userinfo.get("Fullname"));
         profilesettingPage.Address.sendKeys(userinfo.get("Address"));
         profilesettingPage.Twitter.sendKeys(userinfo.get("Twitter"));
         profilesettingPage.Website.sendKeys(userinfo.get("Website"));
         profilesettingPage.Email.sendKeys(userinfo.get("Email"));
         profilesettingPage.getDropDownElement(profilesettingPage.Language, userinfo.get("Language"));
         profilesettingPage.getDropDownElement(profilesettingPage.Locale,userinfo.get("Locale"));


        }

        @Then("the user see the newly entered changes")
        public void the_user_see_the_newly_entered_changes () {
            // Write code here that turns the phrase above into concrete actions
            throw new io.cucumber.java.PendingException();
        }

    }


