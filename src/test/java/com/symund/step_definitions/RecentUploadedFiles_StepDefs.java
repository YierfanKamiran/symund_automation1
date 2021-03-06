package com.symund.step_definitions;

import com.symund.pages.RecentUploadedFilesPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class RecentUploadedFiles_StepDefs {

    RecentUploadedFilesPage recentUploadedFilesPage=new RecentUploadedFilesPage();

    @When("the user clicks to plus sign button next to home icon")
    public void the_user_clicks_to_plus_sign_button_next_to_home_icon() {
        recentUploadedFilesPage.plusIcon.click();
        BrowserUtils.waitFor(2);
    }

    @And("the user clicks Upload file and choose the file from browser to upload")
    public void theUserClicksUploadFileAndChooseTheFileFromBrowserToUpload() {
        recentUploadedFilesPage.Uploadfile.click();

    }
    @When("the user should be able to see the uploaded file")
    public void the_user_should_be_able_to_see_the_uploaded_file() {

    }

    @When("the user clicks to Recent Tab")
    public void the_user_clicks_to_Recent_Tab() {

    }

    @Then("the uploaded file is displayed in recent page")
    public void the_uploaded_file_is_displayed_in_recent_page() {

    }
    @When("the user clear the input box")
    public void the_user_clear_the_input_box() {

    }

    @When("the user enter a name in for new folder and clicks arrow")
    public void the_user_enter_a_name_in_for_new_folder_and_clicks_arrow() {

    }

    @Then("the user should be able to see the uploaded folder")
    public void the_user_should_be_able_to_see_the_uploaded_folder() {

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

