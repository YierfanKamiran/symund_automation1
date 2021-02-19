package com.symund.pages;

import com.symund.utilities.ConfigurationReader;
import com.symund.utilities.Driver;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
public class LogoutPage extends BasePage {

    @FindBy(id = "user")
    public WebElement username;

    @FindBy(id = "password")
    public WebElement password;

    @FindBy(id = "submit-form")
    public WebElement login;

    @FindBy(xpath = "//*[@id='expand']/div[1]/img")
    public WebElement avatar;

    @FindBy(css = "#expanddiv > ul >li:nth-child(4) > a")
    public WebElement button;




}
