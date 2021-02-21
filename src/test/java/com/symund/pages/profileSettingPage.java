package com.symund.pages;


import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.FindBys;
import org.openqa.selenium.support.PageFactory;

public class profileSettingPage extends BasePage {
    public profileSettingPage() {

        PageFactory.initElements(Driver.get(), this); }


    @FindBy(css = ".avatardiv.avatardiv-shown")
    public WebElement profileicon;




}