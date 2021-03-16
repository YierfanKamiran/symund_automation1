package com.symund.step_definitions;

import com.symund.pages.CommentsPage;
import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;

public class CommentStepDefs {
    CommentsPage commentsPage = new CommentsPage();
    public static String commentInput;

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
    public void theUserEntersComment(String comment) {
        commentInput=comment;
        commentsPage.CommentBox.sendKeys(comment);
    }

    @And("the user clicks comment arrow button")
    public void theUserClicksCommentArrowButton() {
        commentsPage.ArrowBtn.click();
    }

    @And("the user's username should be seen")
    public void theUserSUsernameShouldBeSeen() {
        Assert.assertEquals(commentsPage.ExpectedUsername.getText(), commentsPage.ActualUsername.getText());
        System.out.println(commentsPage.ExpectedUsername.getText());
        System.out.println(commentsPage.ActualUsername.getText());
        commentsPage.ExpectedUsername.isDisplayed();

    }

    @And("the box is emptied for new comment")
    public void theBoxIsEmptiedForNewComment() {
        String emptyBox = commentsPage.CommentBox.getAttribute("data-placeholder");
        System.out.println(emptyBox);
    }

    @Given("the user clicks Edit comment")
    public void the_user_clicks_Edit_comment() {
        commentsPage.EditBtn.click();
    }

    @Given("the user deletes the old comment and writes {string}")
    public void the_user_deletes_the_old_comment_and_writes_new_one(String newComment) throws InterruptedException {
        System.out.println(commentsPage.CommentBoxEdit.getText());
        commentsPage.CommentBoxEdit.clear();
        commentsPage.CommentBoxEdit.sendKeys(newComment);
        commentsPage.ArrowBtn1.click();
        Thread.sleep(4000);
    }

    @Then("verify that the comment is edited")
    public void verify_that_the_comment_is_edited() {

        String actualText = commentsPage.newEdited.getAttribute("outerHTML");
        System.out.println(actualText);
        String result=actualText.split(">")[1].split("<")[0];
        System.out.println(result);
        System.out.println(commentInput);
        Assert.assertNotEquals(commentInput,result);
    }

    @Then("the user clicks dots next to user name")
    public void the_user_clicks_dots_next_to_user_name() {
        commentsPage.dotsNextToUsername.click();

    }

    @Then("the user clicks Delete comment button")
    public void the_user_clicks_Delete_comment_button() throws InterruptedException {
        commentsPage.DeleteBtn.click();
        Thread.sleep(2000);
    }

    @And("verify that the comment is deleted")
    public void verifyThatTheCommentIsDeleted() {
        String actualText = commentsPage.newEdited.getAttribute("outerHTML");
        System.out.println(actualText);
        String result=actualText.split(">")[1].split("<")[0];
        Assert.assertNotEquals(commentInput,result);
    }

}
