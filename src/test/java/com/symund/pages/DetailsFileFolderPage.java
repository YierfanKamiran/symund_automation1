package com.symund.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class DetailsFileFolderPage extends BasePage{

    @FindBy(xpath = "(//*[@class='fileactions'])[4]/a[2]")
    public WebElement threeDotsForFile;


    //file and folder icin details'e tiklayinca acilan sayfadaki modeullerin locator'i
    @FindBy(className = "app-sidebar-tabs__tab")
    public List<WebElement> detailsOptions;







}
