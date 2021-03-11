package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ShareUnshareFilePage extends BasePage {

    public ShareUnshareFilePage (){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//button[@*='noreferrer noopener'][1]")
    public WebElement createShareLink;

    @FindBy(xpath = "//td[@class='filename']/a/span[1]")
    public  WebElement FileNameinSharesTab;

    @FindBy(xpath = "(//span[@class='nametext']/span)[1]")
    public WebElement FileNameinAllFilesTab;

    @FindBy(xpath = "(//div[@class='trigger']/button)[3]")
   public  WebElement shareLinkThreeDot;

    @FindBy(xpath = "//*[.='Unshare']")
    public  WebElement unshare;


}
