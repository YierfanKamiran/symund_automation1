package com.symund.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DeleteRestoreFolderPage extends BasePage{

    @FindBy(xpath = "//*[@*='filename']/a/span[1]")
    public WebElement FolderDeleted;

    @FindBy(xpath = "//*[@*='filename']/a/span[3]/a[1]")
    public WebElement restore ;

    @FindBy(xpath="(//*[@*='nametext'])[1]")

    public WebElement RestoredFile;

}
