package com.symund.pages;


import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class ProfilesettingPage extends BasePage {




    public ProfilesettingPage() {

        PageFactory.initElements(Driver.get(), this);
    }


    @FindBy(css = ".avatardiv.avatardiv-shown")
    public WebElement avatar;

    @FindBy(xpath = "//*[@id='expanddiv']/ul/li[2]/a")
    public WebElement Settings;

    @FindBy(id = "displayname")
    public WebElement Fullname;

    @FindBy(id = "email")
    public WebElement Email;

    @FindBy(id="phone")
    public WebElement PhoneNumber;

    @FindBy(id = "address")
    public WebElement Address;

    @FindBy(id = "website")
    public WebElement Website;

    @FindBy(id = "twitter")
    public WebElement Twitter;

    @FindBy(xpath="//*[@id=languageinput]")
            public WebElement Language;

    @FindBy(id="localeinput")
    public WebElement Locale;

    @FindBy(css = "#languageinput>option")
    public List<WebElement> Languageoption;

    @FindBy(css = "#localeinput>option")
    public List<WebElement> localeoption;



    public void getDropDownElement(WebElement dropDown,String value){
        dropDown.click();
        Select select = new Select(dropDown);
        select.selectByValue(value);
    }

    public  void clearInputBoxes() {
        Fullname.clear();
        Email.clear();
        Address.clear();
        PhoneNumber.clear();
        Website.clear();
        Twitter.clear();


    }
}