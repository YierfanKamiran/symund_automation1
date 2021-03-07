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
        BrowserUtils.waitFor(3);
    }


    @Then("the user clicks Details")
    public void the_user_clicks_Details() {
        detailsFileFolderPage.details.click();
        BrowserUtils.waitFor(3);
    }








}
