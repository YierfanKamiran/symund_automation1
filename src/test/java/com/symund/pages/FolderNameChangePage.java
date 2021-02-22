package com.symund.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FolderNameChangePage extends BasePage{

    @FindBy(xpath = "//*[@id=\"rightClickMenu\"]/ul/li[3]/a/span[2]")

    public WebElement FolderRename;



}
