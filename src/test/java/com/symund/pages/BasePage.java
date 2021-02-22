package com.symund.pages;

import com.symund.utilities.BrowserUtils;
import com.symund.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class BasePage {

    @FindBy(css = ".avatardiv.avatardiv-shown")
    public WebElement avatar;

    @FindBy(xpath = "//*[@id='expanddiv']/ul/li[2]/a")
    public WebElement Settings;


    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }
        @FindBy(id = "nextcloud")
        public WebElement companyLogo;

        @FindBy(css = "#appmenu>li")
        public List<WebElement> menuOptions;

        @FindBy(linkText = "Files")
        public WebElement allFilesTab;

        @FindBy(css = "#settings>div>div")
        public WebElement settingsMenu;

        @FindBy(css = "#expanddiv>ul>li")
        public List<WebElement>settingsMenuOptions;

        @FindBy(id = "app-navigation-toggle")
        public WebElement navigationMenu;

        @FindBy(tagName = "title")
        public WebElement pageSubTitle;

        @FindBy(linkText = "Set status")
        public WebElement setStatus;


        /**
         *This method will navigate user to the specific tab
         * @param tab
         */
        public void navigateTo(String tab){

            for (WebElement menuOption : menuOptions) {
                if(tab.toUpperCase().equals(menuOption.getText().toUpperCase()))
                    menuOption.click();
                return;
            }
        }

        /**
         * @return page name, for example: Contacts - Symund - QA
         *
         */
        public String getPageSubtitle(){

            return  pageSubTitle.getText();
        }

        /**
         *This method will navigate user to the specific menu option inside Settings option
         * @param option
         */
        public void getSettingsMenuOption(String option){
            for (WebElement settingsMenuOption : settingsMenuOptions) {
                if(option.equals(settingsMenuOption.getText()))
                    settingsMenuOption.click();

            }
        }
    }

