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

    @FindBy(xpath = "//*[contains(text(),'Wrong username or password.')]")
    public WebElement errorMessage;


    public void login(String userNameStr ) {
      String passwordStr=ConfigurationReader.get("password");
        userName.sendKeys(userNameStr);
        passWord.sendKeys(passwordStr);
        submit.click();

    }

    public void login(String usernameStr,String passwordStr){
        userName.sendKeys(usernameStr);
        passWord.sendKeys(passwordStr);
        submit.click();
    }

}
