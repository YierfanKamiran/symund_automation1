package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RecentUploadedFilesPage extends BasePage {
    public RecentUploadedFilesPage () { PageFactory.initElements(Driver.get(), this);}

        @FindBy(xpath = "//*[@id='controls']/div[2]/a")
        public WebElement plusIcon;

    @FindBy(xpath = "//*[@id='controls']/div[2]/div[2]/ul/li[1]/label/span[2]")
        public WebElement Uploadfile;
    @FindBy(xpath = "//*[@id='view13-input-folder']")
    public WebElement folderInputbox;

    //*[@id="controls"]/div[2]/div[2]/ul/li[2]/a/form/input[2]



        @FindBy(xpath = "//span[.='file']")
        public WebElement fileName;

    }

