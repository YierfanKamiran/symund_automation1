package com.symund.step_definitions;

import com.symund.pages.DetailsFileFolderPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class DetailsFileFolder_StepDefs {

    DetailsFileFolderPage detailsFileFolderPage = new DetailsFileFolderPage();


    @When("the user clicks to three dots for file next to the file name")
    public void the_user_clicks_to_three_dots_for_file_next_to_the_file_name() {
        detailsFileFolderPage.threeDotsForFile.click();

    }


    @Then("the user clicks Details")
    public void the_user_clicks_Details() {
        detailsFileFolderPage.details.click();

    }



    @Then("verify that details of File displayed on right side")
    public void verify_that_details_of_File_displayed_on_right_side() {

        String actualName1 = detailsFileFolderPage.activity.getText();
        Assert.assertEquals("Activity", actualName1);

        String actualName2 = detailsFileFolderPage.chat.getText();
        Assert.assertEquals("Chat", actualName2);

        String actualName3 = detailsFileFolderPage.comments.getText();
        Assert.assertEquals("Comments", actualName3);

        String actualName4 = detailsFileFolderPage.sharing.getText();
        Assert.assertEquals("Sharing", actualName4);

        String actualName5 = detailsFileFolderPage.versions.getText();
        Assert.assertEquals("Versions", actualName5);

    }

    @Then("verify that details of Folder displayed on right side")
    public void verify_that_details_of_Folder_displayed_on_right_side() {

        String actualName1 = detailsFileFolderPage.activity.getText();
        Assert.assertEquals("Activity", actualName1);

        String actualName3 = detailsFileFolderPage.comments.getText();
        Assert.assertEquals("Comments", actualName3);

        String actualName4 = detailsFileFolderPage.sharing.getText();
        Assert.assertEquals("Sharing", actualName4);

    }








}
