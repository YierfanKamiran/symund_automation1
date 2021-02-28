package com.symund.step_definitions;

import com.symund.pages.FolderNameChangePage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.Keys;


public class FolderRenameStepDefs {

FolderNameChangePage folderNameChangePage=new FolderNameChangePage();

    @When("user clicks ... on the folder name")
    public void user_clicks_on_the_folder_name() {

folderNameChangePage.FolderActions.click();
    }

    @When("clicks rename")
    public void clicks_rename() {
       folderNameChangePage.Rename.click();

        BrowserUtils.waitFor(2);
    }

    @When("types {string}")
    public void types(String string) {
       folderNameChangePage.FolderName.sendKeys(string+ Keys.ENTER);


    }

    @Then("name of the folder should change")
    public void name_of_the_folder_should_change() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }




}

