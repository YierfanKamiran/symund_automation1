package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RecentUploadedFilesPage extends BasePage {
    public RecentUploadedFilesPage () { PageFactory.initElements(Driver.get(), this);}

    @FindBy(xpath = "//*[@id='controls']/div[2]/a")
        public WebElement plusIcon;

    @FindBy(xpath = "//*[@id='controls']/div[2]/div[2]/ul/li[1]/label")
        public WebElement Uploadfile;

    @FindBy(css = "#view13-input-folder")
    public WebElement folderInputbox;

    @FindBy (xpath = "//*[@id='controls']/div[2]/div[2]/ul/li[2]/a/form/input")
    public WebElement arrow;

    @FindBy(css = "#view13-input-file")
    public WebElement fileInputbox;

    @FindBy(xpath="//*[@id='controls']/div[2]/div[2]/ul/li[3]/a/form/input[2]")
    public WebElement filearrow;
    @FindBy(xpath = "//*[@id='app-navigation']/ul/li[2]/a")
            public WebElement recentIcon;


public void clearinputboxes(){
    folderInputbox.clear();
    fileInputbox.clear();
}
    }


