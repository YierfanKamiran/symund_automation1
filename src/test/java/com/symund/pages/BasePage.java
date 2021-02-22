package com.symund.pages;

import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {

    @FindBy(css = ".avatardiv.avatardiv-shown")
    public WebElement avatar;

    @FindBy(xpath = "//*[@id='expanddiv']/ul/li[2]/a")
    public WebElement Settings;


    public BasePage() {
        PageFactory.initElements(Driver.get(), this);


    }
}
