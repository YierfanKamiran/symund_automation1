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
    public void theUsersShouldSeeIsDisplayedInRecentPage(String folder) {
        BrowserUtils.waitFor(3);
        Assert.assertTrue(recentUploadedFilesPage.myFile.isDisplayed());
        BrowserUtils.waitFor(3);

        recentUploadedFilesPage.recentthreedots.click();
        BrowserUtils.waitFor(3);
        recentUploadedFilesPage.deleteFileInRecent.click();
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
    recentUploadedFilesPage.newfolderinbox.sendKeys("evrim");
    recentUploadedFilesPage.newfolderarrow.click();
    BrowserUtils.waitFor(5);

    }

    @Then("the created file is displayed in recent page")
    public void the_created_file_is_displayed_in_recent_page() {
        BrowserUtils.waitFor(3);
        //  @Then("the uploaded {string} should be displayed in Recent page")
      //  public void the_uploaded_should_be_displayed_in_Recent_page(String file) {
            String actualFolder = recentUploadedFilesPage.recentfile.getText();
            Assert.assertEquals(actualFolder,recentUploadedFilesPage.recentfile.getText());
            BrowserUtils.waitFor(2);
            recentUploadedFilesPage.recentthreedots.click();
            BrowserUtils.waitFor(2);
            recentUploadedFilesPage.deleteFolderInRecent.click();

    }

    @And("the user clicks New text document box")
    public void theUserClicksNewTextDocumentBox() {
        recentUploadedFilesPage.newTextDocument.click();
        BrowserUtils.waitFor(2);
    }

     //   @When("the user clears the text input box")
   // public void the_user_clears_the_text_input_box() {
    // recentUploadedFilesPage.newTextInputbox.clear();
    // BrowserUtils.waitFor(2);
   // }

    @And("the user enter a {string} in for new text and clicks arrow")
    public void theUserEnterAInForNewTextAndClicksArrow(String name) {
recentUploadedFilesPage.newTextInputbox.sendKeys("evrim");
recentUploadedFilesPage.newfolderarrow.click();
BrowserUtils.waitFor(3);

    }
    @Then("the user should be able to see the text and click exit")
    public void the_user_should_be_able_to_see_the_text_and_click_exit() {
    recentUploadedFilesPage.xButton.click();
    BrowserUtils.waitFor(3);
    }

    @Then("the created text  is displayed in recent tab")
    public void the_created_text_is_displayed_in_recent_tab() {
        String actualText = recentUploadedFilesPage.fileTextName.getText();
        System.out.println(actualText + " ");
        Assert.assertEquals(actualText,recentUploadedFilesPage.fileTextName.getText());
        BrowserUtils.waitFor(2);
        recentUploadedFilesPage.fileThreeDts.click();
        BrowserUtils.waitFor(3);
        recentUploadedFilesPage.deleteFileInRecent.click();
        //recentUploadedFilesPage.allFilesTab.click();


    }


    }




