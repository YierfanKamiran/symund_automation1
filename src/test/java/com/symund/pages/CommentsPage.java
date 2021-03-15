package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CommentsPage {
    public CommentsPage(){ PageFactory.initElements(Driver.get(), this);}

    @FindBy(id = "commentsTabView")
    public WebElement CommentBtn;
    @FindBy(xpath = "//div[@data-placeholder='New comment …']")
    public WebElement CommentBox;
    @FindBy(xpath = "(//span[@class='icon icon-more'])[2]")
    public WebElement ThreeDotsForComments;
    @FindBy(xpath = "(//input[@type='submit'])[2]")
    public WebElement ArrowBtn;
    @FindBy(xpath = "(//div[.='Employee23'])[2]")
    public WebElement ActualUsername;
    @FindBy(xpath = "(//div[.='Employee23'])[1]")
    public WebElement ExpectedUsername;
    @FindBy(xpath = "(//li[@class='comment']//a[@class='action more icon icon-more has-tooltip'])[1]")
    public WebElement dotsNextToUsername;
    @FindBy(linkText = "Edit comment")
    public WebElement EditBtn;
    @FindBy(linkText = "Delete comment")
    public WebElement DeleteBtn;
    @FindBy(xpath = "(//div[@data-placeholder='New comment …'])[2]")
    public WebElement CommentBoxEdit;
    @FindBy(xpath = "(//div[@class='message'])[2]")
    public WebElement EditedMessage;
    @FindBy(xpath = "(//input[@type='submit'])[3]")
    public WebElement ArrowBtn1;
    @FindBy(xpath = "(//ul[@class='comments']//li//div[@class='message'])[1]")
    public WebElement newEdited;
}
