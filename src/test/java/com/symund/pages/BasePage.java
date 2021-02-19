package com.symund.pages;

import com.symund.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public abstract class BasePage {
    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(id = "nextcloud")
    public WebElement companyLogo;

    @FindBy(css = "#appmenu>li")
    public List<WebElement> menuOptions;

    @FindBy(linkText = "Files")
    public WebElement allFilesTab;

    @FindBy(id = "settings")
    public WebElement settings;

    @FindBy(id = "app-navigation-toggle")
    public WebElement navigationMenu;

    @FindBy(tagName = "title")
    public WebElement pageSubTitle;

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

}
