package com.symund.pages;

import com.symund.utilities.ConfigurationReader;
import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    public LoginPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "user")
    public WebElement userName;

    @FindBy(id = "password")
    public WebElement passWord;

    @FindBy(id = "submit-form")
    public WebElement submit;

    public void login() {
      String userNameStr=ConfigurationReader.get("username");
      String passwordStr=ConfigurationReader.get("password");
        userName.sendKeys(userNameStr);
        passWord.sendKeys(passwordStr);
        submit.click();

    }


}
