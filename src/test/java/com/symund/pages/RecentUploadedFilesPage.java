package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RecentUploadedFilesPage<Webelement> extends BasePage {
    public RecentUploadedFilesPage () { PageFactory.initElements(Driver.get(), this);}

    @FindBy(xpath = "//*[@id='controls']/div[2]/a")
        public WebElement plusIcon;

    @FindBy(id = "file_upload_start")
        public WebElement Uploadfile;

    @FindBy(xpath = "(//*[@*='displayname'])[2]")
    public WebElement newfolder;

    @FindBy (xpath = "//*[@id='controls']/div[2]/div[2]/ul/li[2]/a/form/input")
    public WebElement arrow;

    @FindBy(css = "#view13-input-folder")
    public WebElement newfolderinbox;

    @FindBy(xpath="(//input[@type='submit'])[2]")
    public WebElement newfolderarrow;

    @FindBy(xpath = "//*[.=‘New Files’])[2]")
     public WebElement acceptnewfile;

     @FindBy(xpath =" //*[.=‘Continue’]")
      public WebElement continuebutton ;

     @FindBy (xpath="//*[@id='fileList']/tr[3]/td[1]/a/span[1]")
             public WebElement filenameinrecent;


    @FindBy(xpath = "//*[@id='fileList']/tr[1]/td[1]/a/span[1]")
    public WebElement myFile;

    @FindBy(xpath = "(//*[@*='action action-menu permanent'])[3]")
    public WebElement recentthreedots;

    @FindBy(linkText = "Delete file")
    public WebElement deleteFileInRecent;

    @FindBy (xpath = "(//*[@*='nametext'])[2]")
    public WebElement recentfile;

    @FindBy (xpath = "(//*[@*='action action-menu permanent'][2]")
            public WebElement filethreedots;

@FindBy(linkText =  "Delete folder")
public WebElement deleteFolderInRecent;

@FindBy(xpath = ("//*[@id='controls']/div[2]/div[2]/ul/li[3]/a/span[2]"))
        public WebElement newTextDocument;

@FindBy(css = "#view13-input-file")
public WebElement newTextInputbox;

@FindBy(xpath = "//*[@id='viewer-content']/div[1]/div[2]/button")
public WebElement xButton;

@FindBy(xpath = "//*[@id='fileList']/tr[1]/td[1]/a/span[1]")
public WebElement fileTextName;

@FindBy(xpath = "(//*[@*='action action-menu permanent'])[3]")
    public WebElement fileThreeDts;


public void clearinputboxes(){
    newfolderinbox.clear();
    //fileInputbox.clear();
}
    }


