package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FolderNameChangePage extends BasePage{

    public FolderNameChangePage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "(//a[@data-action='menu']/span)[1]")

    public WebElement FolderActions;

    @FindBy(xpath = "//*[@*='Rename']")

    public WebElement Rename;

@FindBy(xpath="(//span[@class='innernametext'])[1]")

    public WebElement FolderName;


}
