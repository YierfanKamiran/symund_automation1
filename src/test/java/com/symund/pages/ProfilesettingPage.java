package com.symund.pages;


import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class ProfilesettingPage extends BasePage {
    public ProfilesettingPage() {

        PageFactory.initElements(Driver.get(), this); }


    @FindBy(css = ".avatardiv.avatardiv-shown")
    public WebElement avatar;

    @FindBy(xpath = "//*[@id='expanddiv']/ul/li[2]/a")
    public WebElement Settings;

    @FindBy(id="displayname")
    public WebElement Fullname;

    @FindBy(id="email")
    public WebElement Email;

    @FindBy(id="phone")
    public WebElement phone;

    @FindBy(id="address")
    public WebElement Adress;

    @FindBy(id="website")
    public WebElement Website;

    @FindBy(id="languageinput")
    public WebElement Language;

    @FindBy(id="twitter")
    public WebElement Twitter;

    @FindBy(id="localeinput")
    public WebElement Locale;








}