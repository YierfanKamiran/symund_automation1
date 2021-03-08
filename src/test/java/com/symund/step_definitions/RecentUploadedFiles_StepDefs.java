package com.symund.step_definitions;

import com.symund.pages.RecentUploadedFilesPage;
import com.symund.pages.UploadFilesPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.FindBy;

public class RecentUploadedFiles_StepDefs {

    RecentUploadedFilesPage recentUploadedFilesPage = new RecentUploadedFilesPage();

    @Then("the user clicks plus sign")
    public void theUserClicksPlusSign() {
        recentUploadedFilesPage.plusIcon.click();
    }

    @And("the user clicks Upload file button and choose the file to upload")
    public void theUserClicksUploadFileButtonAndChooseTheFileToUpload() {

        String myprojectpath = (System.getProperty("user.dir"));
        String filePath = "src/test/resources/folder.txt";
        String fullPath = myprojectpath +"/"+filePath;
        recentUploadedFilesPage.Uploadfile.sendKeys(fullPath);
        BrowserUtils.waitFor(5);
    }


    @When("the user clicks to {string}")
    public void theUserClicksTo(String recenttab) {
        recentUploadedFilesPage.navigateToLeftModule(recenttab);

        BrowserUtils.waitFor(5);
    }


    @Then("the users should see {string} is displayed in recent page")
    public void theUsersShouldSeeIsDisplayedInRecentPage(String expectedfile) {
        Assert.assertEquals(expectedfile,recentUploadedFilesPage.filenameinrecent.getText());
    }

    @And("the user clicks new folder button")
    public void theUserClicksNewFolderButton() {
        recentUploadedFilesPage.newfolder.click();
        BrowserUtils.waitFor(3);
    }

    @When("the user clear the input box")
    public void the_user_clear_the_input_box() {
        recentUploadedFilesPage.newfolderinbox.clear();
        BrowserUtils.waitFor(2);
    }

    @And("the user enter a {string} in for new folder and clicks arrow")
    public void theUserEnterAInForNewFolderAndClicksArrow(String name) {
    recentUploadedFilesPage.newfolderinbox.sendKeys("Evrim");
    recentUploadedFilesPage.newfolderarrow.click();
    BrowserUtils.waitFor(5);

    }

    @Then("the created folder is displayed in recent page")
    public void the_created_folder_is_displayed_in_recent_page() {


    }

    @When("the user clears the text input box")
    public void the_user_clears_the_text_input_box() {

    }

    @When("the user enter a text documents and clicks arrow")
    public void the_user_enter_a_text_documents_and_clicks_arrow() {

    }

    @When("the user write something than clicks exit")
    public void the_user_write_something_than_clicks_exit() {

    }

    @When("the user clicks the created text documents")
    public void the_user_clicks_the_created_text_documents() {

    }

    @Then("the user should be able to see the text and click exit")
    public void the_user_should_be_able_to_see_the_text_and_click_exit() {

    }

    @Then("the created text documents is displayed in recent tab")
    public void the_created_text_documents_is_displayed_in_recent_tab() {

    }


}