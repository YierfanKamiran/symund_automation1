package com.symund.step_definitions;

import com.symund.pages.ShareUnshareFilePage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

import java.util.NoSuchElementException;

public class ShareUnshareFile_StepDefs {

    ShareUnshareFilePage shareUnshareFilePage=new ShareUnshareFilePage();

    @When("the user clicks to {string} next to the file name")
    public void the_user_clicks_to_next_to_the_file_name(String option) {
        shareUnshareFilePage.clickShareOrThreeDots(option);
        BrowserUtils.waitFor(3);
    }

    @When("the user chooses {string} option")
    public void the_user_chooses_option(String string) {
        shareUnshareFilePage.createShareLink.click();
        BrowserUtils.waitFor(1);


    }

    @When("the user clicks to {string} module on left navigation menu")
    public void the_user_clicks_to_module_on_left_navigation_menu(String leftNavigationModule) {
       // BrowserUtils.waitFor(1);
        shareUnshareFilePage.navigateToLeftModule(leftNavigationModule);
        BrowserUtils.waitFor(2);

    }

    @Then("the shared file name should be displayed in Shares page")
    public void the_shared_file_name_should_be_displayed_in_Shares_page() {

        Assert.assertTrue(shareUnshareFilePage.FileNameinSharesTab.isDisplayed());

    }

    @Then("the {string} mark should be displayed next to file name in All files page")
    public void the_mark_should_be_displayed_next_to_file_name_in_All_files_page(String expectedMark) {

        String actualMark=shareUnshareFilePage.shareIcon.getText();
        Assert.assertEquals(expectedMark,actualMark);

    }

    @When("the user clicks to three dots next to Share link")
    public void the_user_clicks_to_three_dots_next_to_Share_link() {
        try{
            shareUnshareFilePage.shareLinkThreeDot.click();
        }catch (NoSuchElementException e){
            System.out.println("e.getMessage() = " + e.getMessage());
        }

    }

    @When("the user chooses {string} button")
    public void the_user_chooses_button(String unshareButton) {
        shareUnshareFilePage.unshare.click();

    }



    @When("the {string} mark should be disappeared next to file name in All files page")
    public void the_mark_should_be_disappeared_next_to_file_name_in_All_files_page(String expectedMark) {
        String actualMark=shareUnshareFilePage.shareIcon.getText();
        Assert.assertNotEquals(expectedMark,actualMark);
    }


}
