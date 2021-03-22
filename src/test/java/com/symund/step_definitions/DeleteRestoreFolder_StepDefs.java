package com.symund.step_definitions;

import com.symund.pages.DeleteRestoreFolderPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class DeleteRestoreFolder_StepDefs {

    DeleteRestoreFolderPage deleteRestoreFolderPage=new DeleteRestoreFolderPage();

    @Then("the user clicks Delete folder")
    public void the_user_clicks_Delete_folder() {

        BrowserUtils.waitFor(3);

    deleteRestoreFolderPage.deleteFolder.click();



    }

    @Then("the deleted folder shown inside Deleted Files tab")
    public void the_deleted_folder_shown_inside_Deleted_Files_tab() {

        BrowserUtils.waitFor(3);
        Assert.assertTrue(deleteRestoreFolderPage.FolderDeleted.isDisplayed());

    }

    @When("the user clicks to Restore")
    public void the_user_clicks_to_Restore() {
        BrowserUtils.waitFor(3);

deleteRestoreFolderPage.restore.click();

    }

    @Then("the restored folder shown inside All Files tab")
    public void the_restored_folder_shown_inside_All_Files_tab() {

        BrowserUtils.waitFor(3);

Assert.assertTrue(deleteRestoreFolderPage.RestoredFile.isDisplayed());
    }

}
