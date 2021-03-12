package com.symund.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DetailsFileFolderPage extends BasePage{

    @FindBy(xpath = "(//*[@class='fileactions'])[4]/a[2]")
    public WebElement threeDotsForFile;


    @FindBy(xpath = "(//*[@*='activityTabView'])[1]")
    public WebElement activity;

    @FindBy(xpath = "(//*[@*='chat'])[1]")
    public WebElement chat;

    @FindBy(xpath = "(//*[@*='commentsTabView'])[1]")
    public WebElement comments;

    @FindBy(xpath = "(//*[@*='sharing'])[1]")
    public WebElement sharing;

    @FindBy(xpath = "(//*[@*='versionsTabView'])[1]")
    public WebElement versions;







}
