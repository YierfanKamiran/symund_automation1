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
}
