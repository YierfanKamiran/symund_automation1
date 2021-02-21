package com.symund.pages;


import com.symund.utilities.Driver;
import org.openqa.selenium.support.PageFactory;

public class profileSettingPage extends BasePage {
    public profileSettingPage() {

        PageFactory.initElements(Driver.get(), this);
    }
}