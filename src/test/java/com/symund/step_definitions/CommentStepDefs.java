package com.symund.step_definitions;

import com.symund.pages.CommentsPage;
import com.symund.utilities.BrowserUtils;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

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

    @Given("the user enters comment {string}")
    public void theUserEntersComment(String String) {
        commentsPage.CommentBox.sendKeys(String);
    }

    @And("the user clicks comment arrow button")
    public void theUserClicksCommentArrowButton() {
        commentsPage.ArrowBtn.click();
    }

    @And("the user's username should be seen")
    public void theUserSUsernameShouldBeSeen() {
        Assert.assertEquals(commentsPage.ExpectedUsername.getText(),commentsPage.ActualUsername.getText());
        System.out.println(commentsPage.ExpectedUsername.getText());
        System.out.println(commentsPage.ActualUsername.getText());

        commentsPage.ExpectedUsername.isDisplayed();

    }

    @And("the box is emptied for new comment")
    public void theBoxIsEmptiedForNewComment() {
        String emptyBox= commentsPage.CommentBox.getAttribute("data-placeholder");
        System.out.println(emptyBox);
    }
}
