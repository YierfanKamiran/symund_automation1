package com.symund.step_definitions;

import com.symund.pages.FolderNameChangePage;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class FolderRenameStepDefs {

    FolderNameChangePage renameFolder=new FolderNameChangePage();


@When("user right clicks the folder name")
    public void user_right_clicks_the_folder_name(){

renameFolder.FolderRename.click();


}
}
