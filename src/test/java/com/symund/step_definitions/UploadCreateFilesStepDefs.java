package com.symund.step_definitions;

import com.symund.pages.UploadFilesPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import org.junit.Assert;

public class UploadCreateFilesStepDefs {
    UploadFilesPage uploadFilesPage =new UploadFilesPage();
    @Then("the user clicks Upload file and choose the file to upload")
    public void the_user_clicks_Upload_file_and_choose_the_file_to_upload() {
        uploadFilesPage.navigateToModule("Upload file");
        BrowserUtils.waitFor(3);

    }

    @Then("the user should be able to see the uploaded files")
    public void the_user_should_be_able_to_see_the_uploaded_files(){
        String actualName=uploadFilesPage.fileName.getText();
        Assert.assertEquals("file",actualName);
        BrowserUtils.waitFor(3);
    }

    @Then("the user clicks new folder")
    public void the_user_clicks_new_folder() {
        uploadFilesPage.navigateToModule("New folder");
        BrowserUtils.waitFor(3);
    }

    @Then("the user clicks New text document")
    public void the_user_clicks_New_text_document(){
        uploadFilesPage.navigateToModule("New text document");
        BrowserUtils.waitFor(3);
    }
}
