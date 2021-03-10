package com.symund.step_definitions;

import com.symund.pages.CommentsPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CommentStepDefs {
    CommentsPage commentsPage=new CommentsPage();
    @Given("the user clicks dots for comments")
    public void theUserClicksDotsForComments() {
        BrowserUtils.waitFor(2);
        commentsPage.ThreeDotsForComments.click();
    }

    @And("the user clicks comments")
    public void theUserClicksComments() {
        commentsPage.CommentBtn.click();
    }

    @Then("the comments box should be displayed")
    public void theCommentsBoxShouldBeDisplayed() {
        commentsPage.CommentBox.isDisplayed();
    }

}
