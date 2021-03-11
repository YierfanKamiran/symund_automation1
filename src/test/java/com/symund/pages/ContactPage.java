package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ContactPage extends BasePage{


@FindBy(xpath="//*[@id='appmenu']/li[5]/a/span")
    public WebElement contactButton;

@FindBy(css= "#new-contact-button")
    public WebElement newContactButton;

@FindBy(xpath = "//*[@id='contact-fullname']")
     public WebElement name;

    @FindBy(css="#contact-org")
    public WebElement company;

    @FindBy(css="#contact-title")
    public WebElement title;

    @FindBy(xpath="//input[@class='property__value'and @inputmode='tel']")
    public WebElement phone;


    @FindBy(xpath="//input[@class='property__value'and @inputmode='email']")
    public WebElement email;

    @FindBy(xpath="/html/body/div[3]/main/div/div[2]/section/div[3]/div/div[3]/input")
    public WebElement address;

    @FindBy(xpath="(//input[@class='property__value'and @type='text'])[6]")
    public WebElement postCode;

    @FindBy(xpath="(//input[@class='property__value'and @type='text'])[7]")
    public WebElement city;

    @FindBy(xpath ="//div[contains(text(),‘Kedi Turk’)]")
    public WebElement nameModify;


    @FindBy(xpath="//div[@class='app-content-list-item-line-one' and contains(text(), 'Nejla Turk')]")
    public WebElement deletedName;

    @FindBy(xpath="//div[@class='app-content-list-item-line-one' and contains(text(), 'Nejla Turk')]")
    public WebElement existingContact;

    @FindBy(xpath = "//*[@id='app-content-wrapper']/div[2]/header/div[3]/div/div/div/button")
    public WebElement threeDots;

    @FindBy(xpath = "/html/body/div[6]/div/div[1]/div[1]/div/ul/li[3]/button")
            public WebElement deleted;

    @FindBy(xpath="//div[@class='app-content-list-item-line-one' and contains(text(), 'Nejla Turk')]")
    public WebElement getExistingContact;

    @FindBy(xpath = "//*[@id='newgroup']/div/div/div/div/button")
    public WebElement newgroupName;

    @FindBy(xpath = "/html/body/div[6]/div/div[1]/div[1]/div/ul/li[2]/span/form/input[2]")
    public WebElement addGroupName;

    @FindBy(id = "rightClickDetector")
    public WebElement rightClickArrow;

    @FindBy(xpath = "//ul/li/span/div[@class='name-parts']")
    public WebElement groupBox;

    @FindBy(css = "#everyone > a")
    public WebElement allContact;

    @FindBy(xpath = "/html/body/div[3]/main/div/div[2]/section/div[5]/div/div[2]/div[2]/input")
    public WebElement groups;

    @FindBy(xpath = "//*[@id='app-navigation-vue']/ul/li[4]/a")
    public WebElement selectGroup;

    @FindBy(xpath="//div[@class='app-content-list-item-line-one' and contains(text(), 'Nejla Turk')]")
    public WebElement getExistingContact1;
    @FindBy(css="input[placeholder='Add contact in group']")
    public WebElement groups1;
    @FindBy(css="div[title='garfish']")
    public WebElement garfish;
    @FindBy(css="span[title='garfish']")
    public WebElement garfishUnderGroups;
    @FindBy(css="div[class='vue-recycle-scroller__item-view']")
    public List<WebElement> groupList;
    @FindBy(css="div[class='vue-recycle-scroller__item-view'][style='transform: translateY(-9999px);']")
    public WebElement contactsInGroups;





}

