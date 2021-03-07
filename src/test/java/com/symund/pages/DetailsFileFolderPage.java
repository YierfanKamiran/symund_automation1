package com.symund.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DetailsFileFolderPage extends BasePage{

    @FindBy(xpath = "(//*[@class='fileactions'])[4]/a[2]")
    public WebElement threeDotsForFile;


    //while clicks details, appeared tabs for File and Folder
    @FindBy(className = "app-sidebar-tabs__tab")
    public List<WebElement> detailsTabs;







}
