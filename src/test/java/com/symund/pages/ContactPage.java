package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ContactPage extends BasePage{


@FindBy(xpath="//*[@id='appmenu']/li[5]/a/span")
    public WebElement contactButton;

@FindBy(css= "#new-contact-button")
    public WebElement newContactButton;

@FindBy(css="#contact-fullname")
    public WebElement name;

    @FindBy(css="#contact-org")
    public WebElement company;

    @FindBy(css="#contact-title")
    public WebElement title;

    @FindBy(xpath="//input[@class='property__value'and @inputmode='tel']")
    public WebElement phone;


    @FindBy(xpath="//input[@class='property__value'and @inputmode='email']")
    public WebElement email;

    @FindBy(xpath="(//input[@class='property__value'and @type='text'])[4]")
    public WebElement address;

    @FindBy(xpath="(//input[@class='property__value'and @type='text'])[6]")
    public WebElement postCode;

    @FindBy(xpath="(//input[@class='property__value'and @type='text'])[7]")
    public WebElement city;

    @FindBy(xpath ="//div[contains(text(),‘Kedi Turk’)]")
    public WebElement nameModify;


    @FindBy(xpath="//div[@class='app-content-list-item-line-one' and contains(text(), 'Kedi Turk')]")
    public WebElement deletedName;

    @FindBy(xpath="//div[@class='app-content-list-item-line-one' and contains(text(), 'Beyza Gulap')]")
    public WebElement existingContact;

    @FindBy(xpath = "//div[@class='action-button__icon icon-delete']")
    public WebElement threeDots;

}

